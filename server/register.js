import authStrategy from "./strategies/stytch"

export const register  = ({ strapi }) => {
  strapi.container.get('auth').register('content-api', authStrategy);
}