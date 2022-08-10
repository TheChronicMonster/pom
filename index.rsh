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
            return [ buy, (notify) => {
                notify([currentPrice, askPrice]);
                const who = this;
                return [who, buy];
            }];
        })
        .api_(Staker.sell, (sell) => {
            return [ sell, (notify) => {
                notify([currentPrice, askPrice]);
                const who = this;
                return [who, sell];
            }];
        })
    transfer(amt, tokenId).to(Maker);
    commit();
    exit();
});