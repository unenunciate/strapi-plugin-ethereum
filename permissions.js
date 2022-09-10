
export default {
  render: (uid) => `plugin::stytch.${uid}`,
  stytches: {
    read: "read",
    action: "stytches.create"
  },
  settings: {
    read: "settings.read",
    change: "settings.change",
  },
};
