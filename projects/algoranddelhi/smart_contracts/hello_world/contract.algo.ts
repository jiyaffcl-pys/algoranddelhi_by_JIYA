import { Contract, GlobalState, uint64 } from '@algorandfoundation/algorand-typescript'

export class Auction extends Contract {
  highestBid = GlobalState<uint64>({ key: "bid", initialValue: 0 })

  placeBid(amount: uint64): string {
    if (amount > this.highestBid.value) {
      this.highestBid.value = amount
      return "new highest bid"
    }
    return "bid too low"
  }
}
