import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(10_000);
const accMaker = await stdlib.newTestAccount(startingBalance);

console.log(`Creating CO2 token.`);
const co2Comm = await stdlib.launchToken(accMaker, "carbon commodity", "CO2", {supply: 43_500});
const tokenId = co2Comm.id;
const priceOpen = stdlib.parseCurrency(150);
const amt = 43_500;
const params = { tokenId, priceOpen, amt };

let done = false;
const stakers = [];
const startMarket = async () => {
    let price = priceOpen;
    let buy = price;
    let sell = price;
    const runMarket = async (who) => {
        console.log(`price is ${price}`);
        console.log(`buy is ${buy}`);
        const buySell = Math.random() * 2;
        if (buySell < 2) {
        const inc = stdlib.parseCurrency(buySell);
        console.log(`inc is ${inc}`);
        price = buy.add(inc);
        console.log(`new price is ${price}`);
        } else {
            console.log(`sell order`);
            const dec = stdlib.parseCurrency(buySell);
            price = sell.sub(dec);
        }
        
        const acc = await stdlib.newTestAccount(startingBalance);
        acc.setDebugLabel(who);
        await acc.tokenAccept(tokenId);
        stakers.push([who, acc]);
        const ctc = acc.contract(backend, ctcMaker.getInfo());
        const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));
        console.log(`${who} ${buySell < 2 ? "buys" : "sells"} for ${stdlib.formatCurrency(price)}.`);
        console.log(`${who} balance before is  ${await getBal()}.`);

        try {
            const [ lastStaker, lastPrice ] = await ctc.apis.Staker.price(price);
            console.log(`${who} ${buySell < 2 ? "bought" : "sold"} at ${stdlib.formatCurrency(lastPrice)}`)
        } catch (e) {
            console.log(`${who} failed to make a transaction.`);
        }
        console.log(`${who} balance after is ${await getBal()}`);
    };

    runMarket('Alice');
    runMarket('Bob');
    runMarket('Carla');
    runMarket('Delta');
    for ( const [who, acc] of stakers ) {
        const [ amt, amtCO2 ] = await stdlib.balanceOf(acc, [null, tokenId]);
        console.log(`${who} has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtCO2} of the CO2 commodity`);
    }
    while ( ! done ) {
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
        console.log(`${who} saw that ${stdlib.formatAddress(who)} offered ${stdlib.formatCurrency(amt)}.`);
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