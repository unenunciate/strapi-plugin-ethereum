import clientRoutes from "./client";
import adminRoutes from "./admin";

const routes = {
  "content-api": {
    type: "content-api",
    routes: clientRoutes,
  },
  admin: {
    type: "admin",
    routes: adminRoutes,
  },
};

export default routes;
