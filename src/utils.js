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

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();

  window.chatafisha_nft_marketplace = await new Contract(
    window.walletConnection.account(),
    "chatafisha_nft_marketplace.testnet",
    {
      viewMethods: [
        "get_marketplacedata",
        "get_special_data",
      ],
      changeMethods: [
        "mint_nft",
      ]
    }
  );

  window.chatafisha_nft = await new Contract(
    window.walletConnection.account(),
    "chatafisha_nft.testnet",
    {
      viewMethods: [
        "nft_tokens_for_owner"
      ],
      changeMethods: [
        "nft_transfer",
      ]
    }
  );
}







export function logout() {
	window.walletConnection.signOut();
	// reload page
	window.location.replace(window.location.origin + window.location.pathname);
}

export function login() {
	// Allow the current app to make calls to the specified contract on the
	// user's behalf.
	// This works by creating a new access key for the user's account and storing
	// the private key in localStorage.
	window.walletConnection.requestSignIn(nearConfig.contractName);
}

export function accountId() {
	return {
		accountId: window.accountId,
	};
}

export function getMCollection(accountId) {
  return window.chatafisha_nft.nft_tokens_for_owner({account_id: accountId});
}
