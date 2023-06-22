require('dotenv').config()
import { Tenderly, Network } from "@tenderly/sdk";

const tenderlyInstance: Tenderly = new Tenderly({
  accountName: process.env.TENDERLY_ACCOUNT_NAME || "",
  projectName: process.env.TENDERLY_PROJECT_NAME! || "",
  accessKey: process.env.TENDERLY_ACCESS_KEY || "",
  network: Network.POLYGON
});

export default tenderlyInstance;
