import common from './config.common.json';
import dev from './config.dev.json';
import local from './config.local.json';

const DEV_HOSTNAME = 'sample.com';
const LOCALHOST = 'localhost';
const defaultConfig = { ...common, ...local };

type Config = typeof defaultConfig;

function getConfig(hostName: string = window.location.hostname): Config {
  switch (hostName) {
    case DEV_HOSTNAME:
      return { ...common, ...dev };
    case LOCALHOST:
      return { ...common, ...local };
    default:
      return defaultConfig;
  }
}

export default getConfig();
