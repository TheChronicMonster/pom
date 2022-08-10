import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const accMaker = await stdlib.getDefaultAccount();

const co2Comm = await stdlib.launchToken(accMaker, "carbon commodity", "CO2", {
  supply: 43_500,
  decimals: 4,
});

let done = false;
const stakers = [];
const startMarket = async () => {
  let price = stdlib.parseCurrency(priceOpen);
  let buy = price;
  let sell = price;

  const runMarket = async (who) => {
    const acc = await stdlib.getDefaultAccount();
    acc.setDebugLabel(who);
    await acc.tokenAccept(tokenId);
    stakers.push([who, acc]);
    const ctc = acc.contract(backend, ctcMaker.getInfo());

    const buy = function(i) {
      const inc = stdlib.parseCurrency(buySell);
      price = buy.add(inc);
      return price;
    }  
    buy = price;
    sell = price;
    
    const sell = function(i) {
      const dec = stdlib.parseCurrency(buySell);
      price = sell.sub(dec);
      return price;
    }
    sell = price;
    buy = price;
    
    //console.log(`new buy price is ${stdlib.formatCurrency(price, 4)}`);
    const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc), 4);
    //console.log(`${who} ${buySell < 1 ? "buys" : "sells"} for ${stdlib.formatCurrency(price, 4)}.`);
    
    const stakerBuy = function () {
        try {
            const [lastStaker, lastPrice] = await ctc.apis.Staker.buy(buy);
        } catch (e) {
            console.log(`${who} could not buy, try again.`);
        }
    }
    
    const stakerSell = function () {
        try {
            const [lastStaker, lastPrice] = await ctc.apis.Staker.sell(sell);
          } catch (e) {
            console.log("${who} could not sell, try again");
          }
    }

    //console.log(`${who} ${buySell < 1 ? "bought" : "sold"} at ${stdlib.formatCurrency(price, 4)}`);

    const afterBals = function (amt, amtCO2) {
        return await stdlib.balancesOf(acc, [null, tokenId]);
    }
    //const [amt, amtCO2] = await stdlib.balancesOf(acc, [null, tokenId]);
    //console.log(`${who} has ${stdlib.formatCurrency(amt, 4)} ${stdlib.standardUnit}`);
  };
};

const ctcMaker = accMaker.contract(backend);

const launchMarket = function () {
  const tokenId = co2Comm.id;
  const priceOpen = 150;
  const amt = 43_500;
  const params = { tokenId, priceOpen, amt };
  return params;
}

const marketReady = function () {
  startMarket();
}

const seeTransaction = function (who, amt) {
  const fmt = async (who) => stdlib.formatCurrency(amt, 4);
}

const showPrice = function () {
  return price;
}

done = true;