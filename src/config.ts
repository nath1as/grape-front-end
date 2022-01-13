import {ChainId} from '@pancakeswap/sdk';
import {Configuration} from './bomb-finance/config';
import {BankInfo} from './bomb-finance';

const configurations: {[env: string]: Configuration} = {
  // development: {
  //   chainId: 97,
  //   networkName: 'BSC Testnet',
  //   ftmscanUrl: 'https://testnet.bscscan.com/',
  //   defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  //   deployments: require('./bomb-finance/deployments/deployments.testing.json'),
  //   externalTokens: {
  //     WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
  //     FUSDT: ['0x55d398326f99059fF775485246999027B3197955', 18], // This is actually BUSD on mainnet not fusdt
  //     BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
  //     ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
  //     SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
  //     'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
  //     'BOMB-BTCB-LP': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
  //     'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
  //   },
  //   baseLaunchDate: new Date('2021-11-21 1:00:00Z'),
  //   bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
  //   boardroomLaunchesAt: new Date('2020-12-11T00:00:00Z'),
  //   refreshInterval: 10000,
  // },
  /*development: {
    chainId: 97,
    networkName: 'Avalanche Mainnet C-Chain',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      WBNB: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      FUSDT: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18], // This is actually mim on mainnet not fusdt
      BTCB: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18], //mim
      MIM: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      CAKE: ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-BNB-LP': ['0x781655d802670bba3c89aebaaea59d3182fd755d', 18], //mim/avax
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
      'BOMB-BTCB-LP': ['0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6', 18],
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2022-1-13 17:00:00Z'),
    bondLaunchesAt: new Date('2020-01-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2022-1-18T00:00:00Z'),
    refreshInterval: 10000,
  },*/
  development: {
    chainId: 43114,
    networkName: 'Avalanche',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      WAVAX: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      MIM: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      SBTC: ['0x1d28cd41fc594232D05F2AbdAFBb556E7F78Dc2a', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18],
      CAKE: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
      'BOMB-BTCB-LP': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2022-1-13 17:00:00Z'),
    bondLaunchesAt: new Date('2020-01-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2022-1-18T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 43114,
    networkName: 'Avalanche',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      WAVAX: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      MIM: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      SBTC: ['0x1d28cd41fc594232D05F2AbdAFBb556E7F78Dc2a', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18],
      CAKE: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
      'BOMB-BTCB-LP': ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2021-12-30 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-12-30T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: {[contractName: string]: BankInfo} = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding BOMB
        - 2 = LP asset staking rewarding BSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  // BombBTCApeLPBombRewardPool: {
  //   name: 'Earn BOMB by BOMB-BTCB Ape LP',
  //   poolId: 2,
  //   sectionInUI: 1,
  //   contract: 'BombBTCApeLPBombRewardPool',
  //   depositTokenName: 'BOMB-BTCB-APELP',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 2,
  //   closedForStaking: true,
  // },
  // BombBTCLPBombRewardPool: {
  //   name: 'Earn BOMB by BOMB-BTC LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'BombBTCLPBombRewardPool',
  //   depositTokenName: 'BOMB-BTCB-LP',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 7,
  //   closedForStaking: true,
  // },
  /*
  BombCakeRewardPool: {
     name: 'Earn BOMB by CAKE',
     poolId: 0,
     sectionInUI: 0,
     contract: 'GrapeMimRewardPool',
     depositTokenName: 'MIM',
     earnTokenName: 'GRAPE',
     finished: false,
     sort: 3,
     closedForStaking: false,
   },*/
  
  GrapeMimRewardPool: {
    name: 'Earn GRAPE with MIM',
    poolId: 0,
    sectionInUI: 0,
    contract: 'GrapeMimRewardPool',
    depositTokenName: 'MIM',
    earnTokenName: 'GRAPE',
    finished: false,
    sort: 4,
    closedForStaking: false,
  },
  GrapeWavaxRewardPool: {
    name: 'Earn GRAPE with WAVAX',
    poolId: 1,
    sectionInUI: 0,
    contract: 'GrapeWavaxRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'GRAPE',
    finished: false,
    sort: 5,
    closedForStaking: false,
  },
  // BombSVLRewardPool: {
  //   name: 'Earn BOMB by SVL',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'BombSVLRewardPool',
  //   depositTokenName: 'SVL',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 6,
  //   closedForStaking: true,
  // },

  // BombWBNBGenesisRewardPool: {
  //   name: 'Earn BOMB by WBNB',
  //   poolId: 4,
  //   sectionInUI: 0,
  //   contract: 'BombWBNBGenesisRewardPool',
  //   depositTokenName: 'WBNB',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 1,
  //   closedForStaking: true,
  // },
  // BombBnbLPRewardPool: {
  //   name: 'Earn BOMB by BOMB-BNB LP',
  //   poolId: 1,
  //   sectionInUI: 1,
  //   contract: 'BombBnbLPRewardPool',
  //   depositTokenName: 'BOMB-BNB-LP',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 8,
  //   closedForStaking: false,
  // },
  // BombShibaRewardPool: {
  //   name: 'Earn BOMB by SHIBA',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'BombShibaGenesisRewardPool',
  //   depositTokenName: 'SHIBA',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 3,
  //   closedForStaking: true,
  // },
  // BombZooRewardPool: {
  //   name: 'Earn BOMB by ZOO',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'BombZooGenesisRewardPool',
  //   depositTokenName: 'ZOO',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: true,
  // },

  // BombFtmLPBombRewardPoolOld: {
  //   name: 'Earn BOMB by BOMB-BNB LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'BombFtmLpBombRewardPoolOld',
  //   depositTokenName: 'BOMB-BNB-LP',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 9,
  //   closedForStaking: true,
  // },
  // BombFtmLPBShareRewardPool: {
  //   name: 'Earn BSHARE by BOMB-BNB LP',
  //   poolId: 0,
  //   sectionInUI: 2,
  //   contract: 'BombFtmLPBShareRewardPool',
  //   depositTokenName: 'BOMB-BNB-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 6,
  //   closedForStaking: false,
  // },

  // BshareBnbLPApeBShareRewardPool: {
  //   name: 'Earn BSHARE by BSHARE-BNB LP',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'BshareBnbLPApeBShareRewardPool',
  //   depositTokenName: 'BSHARE-BNB-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // BombBtcbLPApeBShareRewardPool: {
  //   name: 'Earn BSHARE by BOMB-BTCB LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'BombBtcbLPApeBShareRewardPool',
  //   depositTokenName: 'BOMB-BTCB-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // BombBtcbApeLPBShareRewardPool: {
  //   name: 'Earn BSHARE by BOMB-BTCB Ape LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'BombBtcbApeLPBShareRewardPool',
  //   depositTokenName: 'BOMB-BTCB-APELP',
  //   earnTokenName: 'BSHARE',
  //   finished: true,
  //   sort: 4,
  //   closedForStaking: true,
  // },
  /*
  BombBtcbLPBShareRewardPool: {
    name: 'Earn BSHARE by BOMB-BTCB LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'BombBtcbLPBShareRewardPool',
    depositTokenName: 'BOMB-BTCB-LP',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },*/
};

export default configurations[process.env.NODE_ENV || 'production'];
