/**
 * Comments Collection Type
 */

export default {
  info: {
    tableName: "plugin-stytch-stytches",
    singularName: "stytch",
    pluralName: "stytches",
    displayName: "Stytch",
    description: "Stytch content type",
    kind: "collectionType",
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    "content-manager": {
      visible: true,
    }
  },
  attributes: {
    stytchId: {
      type: "text",
      configurable: false,
      required: true,
    },
    blocked: {
      type: "boolean",
      default: false,
      configurable: false,
    },
    user: {
      type: "relation",
      relation: "manyToOne",
      target: "plugin::users-permissions.user",
      configurable: false,
    },
    removed: {
      type: "boolean",
      configurable: false,
    },
    isOAUTH: {
      type: "boolean",
      configurable: false,
    },
    isEOA: {
      type: "boolean",
      configurable: false,
    },
    idenitifyingCredentials: {
      type: "json",
      configurable: false,
    }
  },
};
