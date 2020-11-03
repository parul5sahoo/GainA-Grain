const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('Web3');

const compileFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'deliver farm grab aerobic anxiety rival bracket inner bonus trumpet glide table',
  'https://rinkeby.infura.io/v3/2f799ac6b44046e1a03c8b08b7c0e77b'
);

const web3 = new Web3(provider);

const deploy = async () => {
   const accounts = await web3.eth.getAccounts();

   console.log('attemting to deploy from account', accounts[0]);
   const result = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
   .deploy({ data: compileFactory.bytecode })
   .send({ from: accounts[0], gas: '1000000' });

   console.log('contract deployed to ', result.options.address);
};
deploy();
