'use strict';
import * as stytch from "stytch";



module.exports = ({ strapi }) => {
  const client = new stytch.Client({
    project_id: "project-live-c60c0abe-c25a-4472-a9ed-320c6667d317",
    secret: "secret-live-80JASucyk7z_G8Z-7dVwZVGXL5NT_qGAQ2I=",
    env: stytch.envs.test,
  });

};