# 🧾 Simple Auction - Algorand Smart Contract

Welcome to **Simple Auction** — a beginner-friendly decentralized application (dApp) built on the **Algorand blockchain** using smart contracts written in **TypeScript**. This project demonstrates how to implement a minimal on-chain auction system where users can place bids and the highest bidder is automatically tracked.

---

## 📝 Project Description

**Simple Auction** is a smart contract-based application where users can:

- Place bids for an item
- Automatically track the highest bid and bidder
- Ensure fairness by only accepting bids higher than the current highest

This is a great starting point for learning how to build decentralized auction systems on Algorand using TypeScript-style contract classes.

---

## ⚙️ What It Does

- Initializes with no bids
- Accepts bids from users
- Compares each new bid to the current highest
- Updates the highest bid and bidder if the new bid is higher
- Allows querying of the current auction status

---

## ✨ Features

- 📦 **Global State Management** for highest bid and bidder
- ⛓️ **Smart Contract Logic** that enforces auction rules
- 💡 **Beginner-Friendly** syntax and design
- 🧪 Easy to test and extend

---

## 🔗 Deployed Smart Contract

> 📍 **Smart Contract:** [Simple Auction](#)
> _(Replace this with the actual link to the deployed contract or AlgoExplorer page)_

---

## 💻 Code

```ts
export class Auction extends Contract {
  // Highest bid value
  highestBid = GlobalState<number>({ key: "highestBid", initialValue: 0 });

  // Highest bidder address
  highestBidder = GlobalState<string>({ key: "highestBidder", initialValue: "" });

  // Place a bid
  PlaceBid(bidder: string, amount: number): string {
    if (amount <= this.highestBid.value) {
      throw new Error("Bid must be higher than the current highest bid.");
    }

    this.highestBid.value = amount;
    this.highestBidder.value = bidder;

    return `New highest bid of ${amount} by ${bidder}`;
  }

  // View current highest bid
  GetHighestBid(): string {
    return `Highest Bid: ${this.highestBid.value} by ${this.highestBidder.value}`;
  }
}
