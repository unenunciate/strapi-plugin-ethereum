import PluginError from "./error";

export const getPluginService = (name) =>
  strapi.plugin("stytch").service(name);

export const parseParams = (
  params
) =>
  Object.keys(params).reduce((prev, curr) => {
    const value = params[curr];
    const parsedValue = Number(value);
    return {
      ...prev,
      [curr]: isNaN(parsedValue) ? value : parsedValue,
    };
  }, {});

export const assertParamsPresent = (params, keys) => {
  const missingParams =
    params instanceof Object
      ? keys.filter((key) => !params.hasOwnProperty(key))
      : keys;

  if (missingParams.length === 0) {
    return;
  }

  throw new PluginError(
    400,
    `Expected params missing: ${missingParams.join(", ")}`
  );
};

export const assertNotEmpty = (value, customError) => {
  if (value) {
    return;
  }

  throw (
    customError ?? new PluginError(400, "Non-empty value expected, empty given")
  );
};