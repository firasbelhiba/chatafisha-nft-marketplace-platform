import { connect, Contract, keyStores, WalletConnection } from "near-api-js";

import getConfig from "./config";

const nearConfig = getConfig("development");

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  window.near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearConfig
    )
  );

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(window.near);

  window.accountId = window.walletConnection.getAccountId();

  window.chatafisha_nft_marketplace = await new Contract(
    window.walletConnection.account(),
    "chatafisha_nft_marketplace.testnet",
    {
      viewMethods: ["get_marketplacedata", "get_special_data"],
      changeMethods: ["mint_nft", "nft_transfer"],
    }
  );

  window.chatafisha_nft = await new Contract(
    window.walletConnection.account(),
    "chatafisha_nft.testnet",
    {
      viewMethods: ["nft_tokens_for_owner"],
      changeMethods: ["nft_transfer", "nft_mint"],
    }
  );
}

export function logout() {
  window.walletConnection.signOut();
  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
}

export async function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  await window.walletConnection.signOut();
  await window.walletConnection.requestSignIn(nearConfig.marketContractName);
}

export function accountId() {
  console.log(window.accountId);
  return {
    accountId: window.accountId,
  };
}

export function getMCollection(accountId) {
  return window.chatafisha_nft.nft_tokens_for_owner({ account_id: accountId });
}

export const mintNft = async (
  assetTitle,
  assetDescription,
  assetUrl,
  assetCollection,
  studentAddress
) => {
  return window.chatafisha_nft_marketplace.mint_nft({
    meetup_ref: assetCollection,
    token_id: assetTitle,
    token_metadata: {
      title: assetTitle,
      description: assetDescription,
      media: assetUrl,
    },
    receiver_id: studentAddress,
  });
};

export const getCollectionsNames = async () => {
  let inputObject =
    await window.chatafisha_nft_marketplace.get_marketplacedata();
  const collections = Object.keys(inputObject);
  return collections;
};

export const transferNft = async (receiverId, tokenId) => {
  await window.chatafisha_nft_marketplace.nft_transfer({
    receiver_id: receiverId,
    token_id: tokenId,
  });
};
