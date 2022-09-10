const routes = [
  {
    method: "GET",
    path: "/moderate/config",
    handler: "admin.config",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/moderate/all",
    handler: "admin.findAll",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/moderate/single/:id",
    handler: "admin.findOne",
    config: {
      policies: [],
    },
  },
  {
    method: "PATCH",
    path: "/moderate/single/:id/unblock",
    handler: "admin.unblockComment",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/settings/config",
    handler: "admin.settingsConfig",
    config: {
      policies: [],
    },
  },
  {
    method: "PUT",
    path: "/settings/config",
    handler: "admin.settingsUpdateConfig",
    config: {
      policies: [],
    },
  },
  {
    method: "DELETE",
    path: "/settings/config",
    handler: "admin.settingsRestoreConfig",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/settings/restart",
    handler: "admin.settingsRestart",
    config: {
      policies: [],
    },
  },
];

export default routes;
