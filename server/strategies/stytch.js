'use strict';

const { castArray, map } = require('lodash/fp');
const { ForbiddenError, UnauthorizedError } = require('@strapi/utils').errors;
const { stytch } = require('stytch-node');


const authenticate = async (ctx) => {
    try {
        
        const token = await strapi.plugin('user-permissions').service('jwt').getToken(ctx);

        if(token) {
            const s = stytch.authenticate.withToken();  
            // fetch authenticated user
            const user = await strapi.plugin('stytch').service("stytch").getUserFromStytchUUID(s.id);

            if (!user) {
                return { error: 'Invalid credentials' };
            }

            ctx.state.user = {...user.user, ...user};

            return {
                authenticated: true,
                credentials: {...user.user, ...user},
            };
        }
        

        const publicPermissions = await strapi.query('plugin::users-permissions.permission').findMany({
            where: {
                role: { type: 'public' },
            },
        });

        if (publicPermissions.length === 0) {
        return { authenticated: false };
        }

        return {
            authenticated: true,
            credentials: null,
        };

    } catch (err) {
        return { authenticated: false };
    }
};

const verify = async (auth, config) => {
  const { credentials: user } = auth;

  if (!config.scope) {
    if (!user) {
      // A non authenticated user cannot access routes that do not have a scope
      throw new UnauthorizedError();
    } else {
      // An authenticated user can access non scoped routes
      return;
    }
  }

  let { allowedActions } = auth;

  if (!allowedActions) {
    const permissions = await strapi.query('plugin::users-permissions.permission').findMany({
      where: { role: user ? user.role.id : { type: 'public' } },
    });

    allowedActions = map('action', permissions);
    auth.allowedActions = allowedActions;
  }

  const isAllowed = castArray(config.scope).every((scope) => allowedActions.includes(scope));

  if (!isAllowed) {
    throw new ForbiddenError();
  }
};

module.exports = {
  name: 'stytch',
  authenticate,
  verify,
};