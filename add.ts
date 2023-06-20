import tenderlyInstance from './utils/tenderlyInstance'

const addContract = async () => {
  try {
    const contractAddress = '0x916B13FCa6192fE5e4E2cD58F712BA9Ade43CeD0';
    const contract = await tenderlyInstance.contracts.add(contractAddress, {
      displayName: "PixelDevsProxy"
    });

    console.log("Added contract:", contract);
  } catch (error) {
    console.error("Error adding contract:", error);
  }
}

addContract();