import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
   '0xc9243a3c43cbC29A610f679Ba84D45Ae7d1b363f'
);

export default instance;
