
import Web3 from 'web3';

 let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);

}else {
  //we are not in the browser or metamask is running.
const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/v3/2f799ac6b44046e1a03c8b08b7c0e77b'
);

  web3 = new Web3(provider);
}

export default web3;
