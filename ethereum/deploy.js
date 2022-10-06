const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compileFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'deliver farm grab aerobic anxiety rival bracket inner bonus trumpet glide table',
  'https://goerli.infura.io/v3/e92d8fa46f1f40518984e9fb087ebfc8'
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
