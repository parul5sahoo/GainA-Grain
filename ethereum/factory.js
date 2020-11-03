import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
   '0xf9c3a4EE5484E6cB9152f5B7A13bcC39ab521a59'
);

export default instance;
