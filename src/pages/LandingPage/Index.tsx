import React, { useEffect } from "react";
import { requestFaucetWithGlobalSigner, mevmRequestFaucet, m2RequestFaucet } from "../../api";
import { AptosClient, FaucetClient, CoinClient } from "aptos";
import Chain from "../../components/Chain";

const RPC_URL = "https://seed-node1.movementlabs.xyz";
const FAUCET_URL = "https://seed-node1.movementlabs.xyz";
const MEVM_URL = "https://mevm.movementlabs.xyz/v1";
const M2_URL = "https://sui.movementlabs.xyz/faucet";
const faucetClient = new FaucetClient(FAUCET_URL, FAUCET_URL);
const aptosClient = new AptosClient(RPC_URL);
const coinClient = new CoinClient(aptosClient);

export default function LandingPage() {


  const m1FaucetRequest = async (address : string) => {
    return requestFaucetWithGlobalSigner(
      aptosClient,
      faucetClient,
      coinClient,
      FAUCET_URL,
      address
    );
  };

  const m2FaucetRequest = async (address : string) => {
    return m2RequestFaucet(
      M2_URL,
      address
    )
  };

  const handleM1evmFaucetRequest = async (address : string) => {
    return mevmRequestFaucet(
      MEVM_URL,
      address
    )
  };

  return (
    <>
   <Chain name="M1" amount={10} hasEvm={true} faucetRequest={m1FaucetRequest} evmRequest={handleM1evmFaucetRequest} />
   <Chain name="M2" amount={1000} hasEvm={false} faucetRequest={m2FaucetRequest} evmRequest={handleM1evmFaucetRequest} />
   </>
  );
}
