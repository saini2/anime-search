/*
    URL Configurations
*/

import { apiBaseUrl, stagingBaseUrl } from "../config/app";



export const getUrl = (key) => {
  if (key) {
    return urlConfig[key] ? urlConfig[key] : null;
  }
  return null;
};

export const getBaseUrl = () => {
  if (process.env.REACT_APP_STAGE === "staging") {
    return `${stagingBaseUrl}/api/v1`;
  } else {
    return `${apiBaseUrl}/api/v1`;
  }
};

const urlConfig = {
  login: `${getBaseUrl()}/login`,
  signup: `${getBaseUrl()}/user/create`,
};
