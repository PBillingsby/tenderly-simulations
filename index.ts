import { Interface } from 'ethers';
import { TransactionParameters } from '@tenderly/sdk';
import * as dotenv from 'dotenv';
import tenderlyInstance from './utils/tenderlyInstance';

dotenv.config();

const abiInterface = (): Interface => {
  return new Interface([
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]);
}

const CONTRACT_OWNER: string = '0xdd00cc906b93419814443bb913949d503b3df3c4';
const TRANSFER_OWNER: string = '0x765fEB3FB358867453B26c715a29BDbbC10Be772';
const PROXY_CONTRACT: string = '0x916B13FCa6192fE5e4E2cD58F712BA9Ade43CeD0';

(async () => {
  const transaction = await tenderlyInstance.simulator.simulateBundle({
    transactions: [transferOwnership(), withdrawFunds()],
    blockNumber: 44134585,
  })

  console.log(transaction)
})();

function transferOwnership(): TransactionParameters {
  return {
    from: CONTRACT_OWNER,
    to: PROXY_CONTRACT,
    gas: 0,
    gas_price: '0',
    value: 0,
    input: abiInterface().encodeFunctionData('transferOwnership', [TRANSFER_OWNER]),
  };
};

function withdrawFunds(): TransactionParameters {
  return {
    from: TRANSFER_OWNER,
    to: PROXY_CONTRACT,
    gas: 8000000,
    gas_price: '0',
    value: 0,
    input: abiInterface().encodeFunctionData('withdraw', []),
  };
};

