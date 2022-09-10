import permissions from "../../permissions";

export default {
  access: [
    { action: permissions.render(permissions.stytches.read), subject: null },
    { action: permissions.render(permissions.settings.read), subject: null },
    { action: permissions.render(permissions.settings.read), subject: null },
  ],
  // discover: [{ action: 'plugin::stytch.discover.read', subject: null }],
  settings: [
    { action: permissions.render(permissions.settings.read), subject: null },
  ],
  settingsChange: [
    { action: permissions.render(permissions.settings.change), subject: null },
  ],
};
