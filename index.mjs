import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(10_000);
const accMaker = await stdlib.newTestAccount(startingBalance);

console.log(`Creating CO2 token.`);
const co2Comm = await stdlib.launchToken(accMaker, "carbon commodity", "CO2", {
  supply: 43_500,
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


    //console.log(`the first price notification is ${stdlib.formatCurrency(price, 4)}`);
    //console.log(`buy is ${stdlib.formatCurrency(buy, 4)}`);
    const buySell = Math.random() * 2;
    if (buySell < 1) {
      const inc = stdlib.parseCurrency(buySell);
      //console.log(`inc is ${stdlib.formatCurrency(inc, 4)}`);
      price = buy.add(inc);
      buy = price;
      sell = price;
      //console.log(`new buy price is ${stdlib.formatCurrency(price, 4)}`);
      //console.log(`new buy is ${stdlib.formatCurrency(buy, 4)}`);
    } else {
      //console.log(`sell order`);
      const dec = stdlib.parseCurrency(buySell);
      price = sell.sub(dec);
      sell = price;
      buy = price;
      
      //console.log(`new sell is ${stdlib.formatCurrency(sell, 4)}`);
    }

    console.log(`new buy price is ${stdlib.formatCurrency(price, 4)}`);



    const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));

    console.log(`${who} ${buySell < 1 ? "buys" : "sells"} for ${stdlib.formatCurrency(price)}.`);
    //console.log(`${who} balance before is ${await getBal()}.`);
    //console.log(`price is ${price}; buy is ${buy}; sell is ${sell}`);
    if (buySell < 1) {
      //console.log(`try buy`);
      //console.log(`price is ${price}; buy is ${buy}`);
      try {
        const [lastStaker, lastPrice] = await ctc.apis.Staker.buy(buy);
        //const moveCO2 = async () => stdlib.transfer(amt, who, 1, tokenId);
        // console.log(`${lastStaker} was the last staker.`);
        // console.log(`${lastPrice} was the previous price.`);
        //console.log(`${who} bought!`);
      } catch (e) {
        console.log(e);
        console.log(`${who} failed to make a transaction, trying to buy.`);
      }
    } else {
      //console.log(`try sell`);
      //console.log(`price is ${price}; sell is ${sell}`);
      try {
        const [lastStaker, lastPrice] = await ctc.apis.Staker.sell(sell);
        //const moveCO2 = async () => stdlib.transfer(who, amt, 1, tokenId);
        console.log(`${lastStaker} was the last staker.`);
        console.log(`${lastPrice} was the previous price.`);
        //console.log(`${who} sold!`);
      } catch (e) {
        console.log(e);
        console.log("this is what we're trying to see, ran into error selling");
      }
    }
    console.log(`${who} ${buySell < 1 ? "bought" : "sold"} at ${stdlib.formatCurrency(price)}`);

    console.log(`${who} balance after is ${await getBal()}`);

   // for (const [who, acc] of stakers) {
      console.log(`currency and amount`);
      const [amt, amtCO2] = await stdlib.balancesOf(acc, [null, tokenId]);
      console.log(
        `${who} has ${stdlib.formatCurrency(amt)} ${
          stdlib.standardUnit
        } and ${amtCO2} of the CO2 commodity`
      );
    //}
  };

  runMarket("Alice");

  runMarket("Bob");

  runMarket("Carla");

  runMarket("Delta");

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
    console.log(
      `${who} saw that ${stdlib.formatAddress(
        who
      )} offered ${stdlib.formatCurrency(amt)}.`
    );
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
