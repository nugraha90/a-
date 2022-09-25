---
  layout: post
  title: What is multisig wallet?
  tags: ['blockchain', 'web3']
  categories: 
---

Before jump to multisignature wallet, we need to know, what is the difference between the two different types of accounts on Ethereum: externally owned accounts (EOAs) and contract accounts?

## Externally-owned account

Externally-owner account is account which controlled by anyone with the private keys.

You need a private key to verify every transactions with defined events.

## Contract account

A smart contract deployed to the network, controlled by code.

Using logic that executed when specific condition met in the Ethereum blockchain to verify transactions and can define whos has the access rights and how to control every transactions with defined events.

Both account types have the ability to:

- Receive, hold and send ETH and tokens
- Interact with deployed smart contracts

Key differences of both account types is:

- Externally-owned

  - Creating an account costs nothing
  - Can initiate transactions
  - Transactions between externally-owned accounts can only be ETH/token transfers

- Contract

  - Creating a contract has a cost because you're using network storage
  - Can only send transactions in response to receiving a transaction
  - Transactions from an external account to a contract account can trigger code which can execute many different actions, such as transferring tokens or even creating a new contract

---

## Multisignature wallet account

Multisignature wallet require multiple (two or more) parties to confirm every transaction with defined events before it can be executed, each parties, represented by the same unique ethereum address characteristics, with 42 alpha-numeric characters long, each parties defined as multisignature wallet owners, hence, the single point of failure associated with private key is no longer automically result in a loss of all funds controlled by the account.

Multisignature wallet has different types, for example:
- **n-of-n**: This type of multisignature requires all of the private keys signature.
- **n-of-m**: This type of multisignature only require 2 signature from 3 private keys for example.

![Multisignature wallet example from gnosis](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y2ppgg75olyq2wda4oa3.png)

---

## Multisignature (or similar scheme) tools and services

### Bitcoin

- Blockstream
- Casa
- Unchained Capital
- Caravan
- Electrum
- Lily
- Nunchuk
- Specter

### Ethereum

- Gnosis
- Edgehog (built for use-cases involving low-to-no financial value, similar scheme to multisignature)

References :

- https://en.bitcoin.it/wiki/Multi-signature
- https://ethereum.org/en/developers/docs/accounts/
- https://docs.gnosis-safe.io/introduction/the-programmable-account/eoas-vs.-contract-accounts
