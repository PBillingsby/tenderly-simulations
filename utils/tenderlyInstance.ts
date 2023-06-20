require('dotenv').config()
import { Tenderly, Network } from "@tenderly/sdk";

const tenderlyInstance = new Tenderly({
  accountName: "pbillingsby",
  projectName: "project",
  accessKey: process.env.TENDERLY_ACCESS_KEY!,
  network: Network.POLYGON
});

export default tenderlyInstance;
