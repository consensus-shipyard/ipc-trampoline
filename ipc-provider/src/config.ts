import { SubnetID } from './subnet';
import * as fs from 'fs';
import log from 'loglevel';
import { newFromString } from '@glif/filecoin-address';

const ABIS_PATH = '../abis/';

const IpcAbis = [
  'Gateway',
  'GatewayDiamond',
  'GatewayGetterFacet',
  'GatewayManagerFacet',
  'GatewayRouterFacet',
  'SubnetActor',
  'SubnetActorDiamond',
  'SubnetActorGetterFacet',
  'SubnetActorManagerFacet',
  'SubnetRegistry',
];

export interface Config {
  subnets: Map<string, SubnetConfig>;
}

interface Subnet {
  id: SubnetID;
  config: SubnetConfig;
}

interface SubnetConfig {
  network_type: NetworkType;
  fevm: EVMSubnet;
}

enum NetworkType {
  Fevm = 'fevm',
}

interface EVMSubnet {
  provider_http: string;
  auth_token?: string;
  registry_addr: string;
  gateway_addr: string;
}

export const NetworkConfig: { [key: string]: Subnet } = {
  calibration: {
    id: SubnetID.newRoot(314159),
    config: {
      network_type: NetworkType.Fevm,
      fevm: {
        provider_http: 'https://api.calibration.node.glif.io/rpc/v1',
        registry_addr: '0xc7068Cea947035560128a6a6F4c8913523A5A44C',
        gateway_addr: '0x0341fA160C66aBB112195192aE359a6D61df45cd',
      },
    },
  },
  mycelium: {
    id: new SubnetID(314159, [
      newFromString('t410fug7q7fgzeehfgr6qlubzs45z2sjzcbw3nbhpiyi'),
    ]),
    config: {
      network_type: NetworkType.Fevm,
      fevm: {
        provider_http: 'https://api.mycelium.calibration.node.glif.io/',
        gateway_addr: '0x77aa40b105843728088c0132e43fc44348881da8',
        registry_addr: '0x74539671a1d2f1c8f200826baba665179f53a1b7',
      },
    },
  },
};

export function newConfigForNetwork(network: string): Config {
  const config: Config = {
    subnets: new Map<string, SubnetConfig>(),
  };

  const networkConfig = NetworkConfig[network];

  if (networkConfig) {
    config.subnets.set(networkConfig.id.toString(), networkConfig.config);
  } else {
    throw new Error('config not found for network: ' + network);
  }

  return config;
}

export function importABIs() {
  const abis = new Map<string, any>();

  IpcAbis.forEach((abiName) => {
    const abiPath = ABIS_PATH + `${abiName}.json`;
    const abi = JSON.parse(fs.readFileSync(abiPath, 'utf8')).abi;
    abis.set(abiName, abi);
  });

  log.debug('Imported IPC contract ABIs');

  return abis;
}
