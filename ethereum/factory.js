import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
   '0x5060a99562fEA6a21f53d845344119836A257bFD'
);

export default instance;
