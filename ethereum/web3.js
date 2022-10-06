
import Web3 from 'web3';

 let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);

}else {
  //we are not in the browser or metamask is running.
const provider = new Web3.providers.HttpProvider(
  'https://goerli.infura.io/v3/e92d8fa46f1f40518984e9fb087ebfc8'
);

  web3 = new Web3(provider);
}

export default web3;
