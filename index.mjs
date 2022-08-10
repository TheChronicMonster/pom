import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(10_000);
const accMaker = await stdlib.newTestAccount(startingBalance);

console.log(`Creating CO2 token.`);
const co2Comm = await stdlib.launchToken(accMaker, "carbon commodity", "CO2", {
  supply: 43_500,
  decimals: 4,
});
const tokenId = co2Comm.id;
const priceOpen = 150;
const amt = 43_500;
const params = { tokenId, priceOpen, amt };

let done = false;
const stakers = [];
const startMarket = async () => {
  let price = stdlib.parseCurrency(priceOpen);
  let buy = price;
  let sell = price;
  const runMarket = async (who) => {

    const acc = await stdlib.newTestAccount(startingBalance);
    acc.setDebugLabel(who);
    await acc.tokenAccept(tokenId);
    stakers.push([who, acc]);
    const ctc = acc.contract(backend, ctcMaker.getInfo());

    const buySell = Math.random() * 2;
    if (buySell < 1) {
      const inc = stdlib.parseCurrency(buySell);
      price = buy.add(inc);
      buy = price;
      sell = price;
    } else {
      const dec = stdlib.parseCurrency(buySell);
      price = sell.sub(dec);
      sell = price;
      buy = price;
    }
    console.log(`new buy price is ${stdlib.formatCurrency(price, 4)}`);
    const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc), 4);

    console.log(`${who} ${buySell < 1 ? "buys" : "sells"} for ${stdlib.formatCurrency(price, 4)}.`);
    if (buySell < 1) {
      try {
        const [lastStaker, lastPrice] = await ctc.apis.Staker.buy(buy);
      } catch (e) {
        console.log(`${who} could not buy, try again.`);
      }
    } else {
      try {
        const [lastStaker, lastPrice] = await ctc.apis.Staker.sell(sell);
      } catch (e) {
        console.log("${who} could not sell, try again");
      }
    }
    console.log(`${who} ${buySell < 1 ? "bought" : "sold"} at ${stdlib.formatCurrency(price, 4)}`);

    const [amt, amtCO2] = await stdlib.balancesOf(acc, [null, tokenId]);
    console.log(`${who} has ${stdlib.formatCurrency(amt, 4)} ${stdlib.standardUnit}`);
  };

  runMarket("Chul");
  runMarket("Hector");
  runMarket("JP");
  runMarket("Angela");
  runMarket("Rosa");
  runMarket("Sally");
  while (!done) {
    await stdlib.wait(1);
  }
};

const ctcMaker = accMaker.contract(backend);
await ctcMaker.p.Maker({
  launchMarket: () => {
    console.log(`Market Maker sets params of the sale:`, params);
    return params;
  },
  marketReady: () => {
    console.log(`The market is open.`);
    startMarket();
  },
  seeTransaction: (who, amt) => {
    console.log(`${who} offered ${stdlib.formatCurrency(amt, 4)}.`);
  },
  showPrice: () => {
    console.log(`The current price is:`, price);
    return price;
  },
  dispense: () => {
    console.log(`${who} receives ${amt} in CO2 for caretaking.`);
    return [who, payment];
  },
});

done = true;