const routes = [
  {
    method: "GET",
    path: "/stytch-users",
    handler: "stytch.find",
    config: {
      policies: [],
      description:
        "Find all stytch users",
      tag: {
        plugin: "stytch",
        name: "Stytch",
        actionType: "find",
      },
    },
  },
  {
    method: "GET",
    path: "/stytch-users",
    handler: "stytch.count",
    config: {
      policies: [],
      description: "Get number of users registered via stytch",
      tag: {
        plugin: "stytch",
        name: "Stytch",
        actionType: "count",
      },
    },
  },
  {
    method: "GET",
    path: "/stytch-users/:id",
    handler: "stytch.findOne",
    config: {
      policies: [],
      description:
        "Find stytch user by id",
      tag: {
        plugin: "stytch",
        name: "Stytch",
        actionType: "find",
      },
    },
  },
  {
    method: "POST",
    path: "/stytch-users",
    handler: "client.create",
    config: {
      policies: [],
      description:
        "Create a new stytch user",
      tag: {
        plugin: "stytch",
        name: "Stytch",
        actionType: "create",
      },
    },
  },
  {
    method: "PUT",
    path: "/stytch-users/:id",
    handler: "client.update",
    config: {
      policies: [],
      description:
        "Update Stytch user by id",
      tag: {
        plugin: "stytch",
        name: "Stytch",
        actionType: "update",
      },
    },
  },
  {
    method: "DELETE",
    path: "/stytch-users/:stytchId",
    handler: "stytch.delete",
    config: {
      policies: [],
      description:
        "Delete Stytch Session related to configured Collection / Single Type if user is the author",
      tag: {
        plugin: "stytch",
        name: "Stytch",
        actionType: "delete",
      },
    },
  },
];

export default routes;
