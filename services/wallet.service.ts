import { REACT_APP_BASE_URL } from "@env";

export async function createMinaWallet() {
  return await fetch(`${REACT_APP_BASE_URL}onchain/createAccount`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
}
