import { getPluginService } from "../utils/functions";
const stytch = require("stytch")

const client = new stytch.Client({
    project_id: "project-test-89bf9731-c664-427c-bfb7-f96ae385428d",
    secret: "secret-test-w2dBBOCu_dNfzFpm3c1YQ9HtNSZ_p82sGHs=",
    env: stytch.envs.test,
}
);

export const strapi = ({ strapi }) => ({
    getCommonService() {
        return getPluginService("common");
    },

    async getUserFromStytchUUID(userId) {
        const [entity] = await strapi.entityService.findMany('stytch', {
            populate: user,
            filters: {
                user_id: userId,
            },
        });
        return sanitizeEntity(entity, { model: strapi.models["stytch"] })
    },


    async create(params) {
        const resp = await client.users.create(params)
           //recrusive you mean to call entiy servies
                const entity = await strapi.plugins["stytch"].services["stytch"].create(
                    {
                        stytchId: resp.user_id,
                        blocked: false,
                        user: 0, //to be defined how to pass  this param (this param is passed via the user id)
                        removed: false,
                        isOAuth: false,
                        isEOA: false,
                        identifyingCredentials: resp.email_id || resp.phone_id
                    }
                );
          
        return sanitizeEntity(entity, { model: strapi.models["stytch"] });
    },

    //TODO
    async update(ctx) {


        return sanitizeEntity(entity, { model: strapi.models["stytch"] });
    },

    async find(user) {
        const [entity] = await strapi.services["stytch"].find({
            uid: ctx.state.user.uid,
        });
        return sanitizeEntity(entity, { model: strapi.models["stytch"] });
    },

    async delete(ctx) {

    },
});
