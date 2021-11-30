const { abi } = require('./abi');
const Web3 = require('web3');

const web3 = new Web3('http://3.25.76.66:8545');

const createContract = (address) => new web3.eth.Contract(abi, address);

const getContractData = async (contract) => {
  const account = await contract.defaultAccount().call();
  return { account };
};

const getAccounts = () => web3.eth.getAccounts();

const contract = createContract();

console.log(contract);
console.log(contract.providers.HttpProvider);
web3.eth.isSyncing().then((d) => console.log('getContractData:', d));

module.exports = {
  createContract,
};
