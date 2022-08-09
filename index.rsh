'reach 0.1'

export const main = Reach.App(() => {
    const Maker = Participant('Maker', {
        launchMarket: Fun([], Object({
            tokenId: Token,
            priceOpen: UInt,
            amt: UInt,
        })),
        marketReady: Fun([], Null),
        seeTransaction: Fun([Address, UInt], Null),
        showPrice: Fun([],UInt),
        dispense: Fun([], Tuple(Address, UInt)),
    });
    const Staker = API('Staker', {
        buy: Fun([UInt], Tuple(Address, UInt)),
        sell: Fun([UInt], Tuple(Address, UInt)),
    });
    // const careTaker = API('careTaker', {
    //     request: Fun([UInt], Tuple(Address, UInt)),
    // });
    const V = View('Main', {
        showPrice: UInt,
    });
    init();

    Maker.only(() => {
        const {tokenId, priceOpen, amt} = declassify(interact.launchMarket());
    });
    Maker.publish(tokenId, priceOpen, amt);
    const openCap = priceOpen * amt;
    commit();
    Maker.pay([[amt, tokenId]]);
    Maker.interact.marketReady();
    assert(balance(tokenId) == amt, "balance is wrong");
    const [
        currentPrice,
        askPrice,
    ] = parallelReduce([Maker, priceOpen])
        .invariant(balance(tokenId) == amt)
        .while(true)
        .api_(Staker.buy, (buy) => {
            //check(buy >= askPrice, "buy price too low");
            return [ buy, (notify) => {
                notify([currentPrice, askPrice]);
                const who = this;
                Maker.interact.seeTransaction(who, buy);
                return [who, buy];
            }];
        })
        .api_(Staker.sell, (sell) => {
            //check(sell <= askPrice, "sell price too high");
            return [ sell, (notify) => {
                notify([currentPrice, askPrice]);
                const who = this;
                Maker.interact.seeTransaction(who, sell);
                return [who, sell];
            }];
        })
    //end parRed
    transfer(amt, tokenId).to(Maker); // will change to API
    commit();
    exit();
});