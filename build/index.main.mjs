// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  const Main_showPrice = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v238, v239, v240, v241] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v238, v239, v241, v269, v270] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Main: {
        showPrice: {
          decode: Main_showPrice,
          ty: ctc2
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2],
      4: [ctc0, ctc1, ctc2, ctc2, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Maker(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Maker expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Maker expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    amt: ctc0,
    priceOpen: ctc0,
    tokenId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Data({
    Staker_buy0_59: ctc4,
    Staker_sell0_59: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc6, ctc0]);
  
  
  const v231 = stdlib.protect(ctc2, await interact.launchMarket(), {
    at: './index.rsh:28:75:application',
    fs: ['at ./index.rsh:27:15:application call to [unknown function] (defined at: ./index.rsh:27:19:function exp)'],
    msg: 'launchMarket',
    who: 'Maker'
    });
  const v232 = v231.amt;
  const v233 = v231.priceOpen;
  const v234 = v231.tokenId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v234, v233, v232],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v239, v240, v241], secs: v243, time: v242, didSend: v35, from: v238 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v239
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v239, v240, v241], secs: v243, time: v242, didSend: v35, from: v238 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v238, v239, v240, v241],
    evt_cnt: 0,
    funcNum: 1,
    lct: v242,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:11:dot', stdlib.UInt_max, '0'), [[v241, v239]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v254, time: v253, didSend: v43, from: v252 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v241,
        kind: 'to',
        tok: v239
        });
      
      const v269 = v240;
      const v270 = v238;
      const v271 = v253;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v238,
          tok: v239
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v239
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v254, time: v253, didSend: v43, from: v252 } = txn2;
  ;
  ;
  const v264 = stdlib.addressEq(v238, v252);
  stdlib.assert(v264, {
    at: './index.rsh:33:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Maker'
    });
  stdlib.protect(ctc3, await interact.marketReady(), {
    at: './index.rsh:34:31:application',
    fs: ['at ./index.rsh:34:31:application call to [unknown function] (defined at: ./index.rsh:34:31:function exp)', 'at ./index.rsh:34:31:application call to "liftedInteract" (defined at: ./index.rsh:34:31:application)'],
    msg: 'marketReady',
    who: 'Maker'
    });
  
  let v269 = v240;
  let v270 = v238;
  let v271 = v253;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v311], secs: v313, time: v312, didSend: v140, from: v310 } = txn3;
    switch (v311[0]) {
      case 'Staker_buy0_59': {
        const v314 = v311[1];
        undefined /* setApiDetails */;
        const v319 = v314[stdlib.checkedBigNumberify('./index.rsh:42:14:spread', stdlib.UInt_max, '0')];
        ;
        const v327 = [v270, v269];
        await txn3.getOutput('Staker_buy', 'v327', ctc7, v327);
        stdlib.protect(ctc3, await interact.seeTransaction(v310, v319), {
          at: './index.rsh:47:46:application',
          fs: ['at ./index.rsh:47:46:application call to [unknown function] (defined at: ./index.rsh:47:46:function exp)', 'at ./index.rsh:47:46:application call to "liftedInteract" (defined at: ./index.rsh:47:46:application)', 'at ./index.rsh:44:36:application call to [unknown function] (defined at: ./index.rsh:44:36:function exp)'],
          msg: 'seeTransaction',
          who: 'Maker'
          });
        
        const cv269 = v319;
        const cv270 = v310;
        const cv271 = v312;
        
        v269 = cv269;
        v270 = cv270;
        v271 = cv271;
        
        continue;
        break;
        }
      case 'Staker_sell0_59': {
        const v352 = v311[1];
        undefined /* setApiDetails */;
        const v359 = v352[stdlib.checkedBigNumberify('./index.rsh:51:14:spread', stdlib.UInt_max, '0')];
        ;
        const v379 = [v270, v269];
        await txn3.getOutput('Staker_sell', 'v379', ctc7, v379);
        stdlib.protect(ctc3, await interact.seeTransaction(v310, v359), {
          at: './index.rsh:56:46:application',
          fs: ['at ./index.rsh:56:46:application call to [unknown function] (defined at: ./index.rsh:56:46:function exp)', 'at ./index.rsh:56:46:application call to "liftedInteract" (defined at: ./index.rsh:56:46:application)', 'at ./index.rsh:53:37:application call to [unknown function] (defined at: ./index.rsh:53:37:function exp)'],
          msg: 'seeTransaction',
          who: 'Maker'
          });
        
        const cv269 = v359;
        const cv270 = v310;
        const cv271 = v312;
        
        v269 = cv269;
        v270 = cv270;
        v271 = cv271;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
export async function _Staker_buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Data({
    Staker_buy0_59: ctc3,
    Staker_sell0_59: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v238, v239, v241, v269, v270] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc0]);
  const v284 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:42:33:application call to [unknown function] (defined at: ./index.rsh:42:33:function exp)', 'at ./index.rsh:39:23:application call to "runStaker_buy0_59" (defined at: ./index.rsh:42:14:function exp)', 'at ./index.rsh:39:23:application call to [unknown function] (defined at: ./index.rsh:39:23:function exp)'],
    msg: 'in',
    who: 'Staker_buy'
    });
  const v285 = v284[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v292 = ['Staker_buy0_59', v284];
  
  const txn1 = await (ctc.sendrecv({
    args: [v238, v239, v241, v269, v270, v292],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v285, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v311], secs: v313, time: v312, didSend: v140, from: v310 } = txn1;
      
      switch (v311[0]) {
        case 'Staker_buy0_59': {
          const v314 = v311[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_buy"
            });
          const v319 = v314[stdlib.checkedBigNumberify('./index.rsh:42:14:spread', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v319,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v327 = [v270, v269];
          const v328 = await txn1.getOutput('Staker_buy', 'v327', ctc5, v327);
          
          const v565 = v319;
          const v566 = v310;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_sell0_59': {
          const v352 = v311[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v311], secs: v313, time: v312, didSend: v140, from: v310 } = txn1;
  switch (v311[0]) {
    case 'Staker_buy0_59': {
      const v314 = v311[1];
      undefined /* setApiDetails */;
      const v319 = v314[stdlib.checkedBigNumberify('./index.rsh:42:14:spread', stdlib.UInt_max, '0')];
      ;
      const v327 = [v270, v269];
      const v328 = await txn1.getOutput('Staker_buy', 'v327', ctc5, v327);
      if (v140) {
        stdlib.protect(ctc6, await interact.out(v314, v328), {
          at: './index.rsh:42:15:application',
          fs: ['at ./index.rsh:42:15:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)', 'at ./index.rsh:45:23:application call to "notify" (defined at: ./index.rsh:44:36:function exp)', 'at ./index.rsh:44:36:application call to [unknown function] (defined at: ./index.rsh:44:36:function exp)'],
          msg: 'out',
          who: 'Staker_buy'
          });
        }
      else {
        }
      
      const v565 = v319;
      const v566 = v310;
      return;
      
      break;
      }
    case 'Staker_sell0_59': {
      const v352 = v311[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_sell4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_sell4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_sell4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Data({
    Staker_buy0_59: ctc3,
    Staker_sell0_59: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v238, v239, v241, v269, v270] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc0]);
  const v296 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:51:35:application call to [unknown function] (defined at: ./index.rsh:51:35:function exp)', 'at ./index.rsh:39:23:application call to "runStaker_sell0_59" (defined at: ./index.rsh:51:14:function exp)', 'at ./index.rsh:39:23:application call to [unknown function] (defined at: ./index.rsh:39:23:function exp)'],
    msg: 'in',
    who: 'Staker_sell'
    });
  const v297 = v296[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v304 = ['Staker_sell0_59', v296];
  
  const txn1 = await (ctc.sendrecv({
    args: [v238, v239, v241, v269, v270, v304],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v297, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v311], secs: v313, time: v312, didSend: v140, from: v310 } = txn1;
      
      switch (v311[0]) {
        case 'Staker_buy0_59': {
          const v314 = v311[1];
          
          break;
          }
        case 'Staker_sell0_59': {
          const v352 = v311[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_sell"
            });
          const v359 = v352[stdlib.checkedBigNumberify('./index.rsh:51:14:spread', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v359,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v379 = [v270, v269];
          const v380 = await txn1.getOutput('Staker_sell', 'v379', ctc5, v379);
          
          const v574 = v359;
          const v575 = v310;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v311], secs: v313, time: v312, didSend: v140, from: v310 } = txn1;
  switch (v311[0]) {
    case 'Staker_buy0_59': {
      const v314 = v311[1];
      return;
      break;
      }
    case 'Staker_sell0_59': {
      const v352 = v311[1];
      undefined /* setApiDetails */;
      const v359 = v352[stdlib.checkedBigNumberify('./index.rsh:51:14:spread', stdlib.UInt_max, '0')];
      ;
      const v379 = [v270, v269];
      const v380 = await txn1.getOutput('Staker_sell', 'v379', ctc5, v379);
      if (v140) {
        stdlib.protect(ctc6, await interact.out(v352, v380), {
          at: './index.rsh:51:15:application',
          fs: ['at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:15:function exp)', 'at ./index.rsh:54:23:application call to "notify" (defined at: ./index.rsh:53:37:function exp)', 'at ./index.rsh:53:37:application call to [unknown function] (defined at: ./index.rsh:53:37:function exp)'],
          msg: 'out',
          who: 'Staker_sell'
          });
        }
      else {
        }
      
      const v574 = v359;
      const v575 = v310;
      return;
      
      break;
      }
    }
  
  
  };
export async function Staker_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Staker_buy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_sell(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_sell expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_sell expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Staker_sell4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Staker_buy(uint64)(address,uint64)`, `Staker_sell(uint64)(address,uint64)`],
    pure: [`Main_showPrice()uint64`],
    sigs: [`Main_showPrice()uint64`, `Staker_buy(uint64)(address,uint64)`, `Staker_sell(uint64)(address,uint64)`]
    },
  appApproval: `BiALAAEECKWZ56kDv6Hv5wgDICgwoI0GJgIBAAAiNQAxGEECbClkSSJbNQElWzUCNhoAF0lBAEAiNQQjNQZJIQQMQAApSSEFDEAAECEFEkQ2GgE1/yg0/1BCADohBBJENhoBNf+AAQE0/1BCACiBlMrwbRJENAEANhoCFzUENhoDNhoBF0kjDEABFUkhBgxAAL8hBhJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hB1s1/iEIWzX9IQlbNfxXOCA1+0k1BTX6gASR8aeaNPpQsDT6IlVAADo0+lcBCDX5NPkXNfg0+IgBwYAIAAAAAAAAAUc0+zT8FlBQsDT7NPwWUDUHNP80/jT9NPgxADIGQgD8NPpXAQg1+TT5FzX4NPiIAYeACAAAAAAAAAF7NPs0/BZQULA0+zT8FlA1BzT/NP40/TT4MQAyBkIAwiMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hB1s1/iEJWzX9gASai5F0sDT9NP6IAT80/zEAEkQ0/zT+NP00AyEIWzT/MgZCAHNIIQqIAQkiNAESRDQESSISTDQCEhFESTUFSUkiWzX/JVs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEKiADPsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgBKNf81/jX9Nfw1+0k1+jT7FlA0/BZQNP0WUDT+UChLAVcAWGdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v239",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v240",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v241",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v239",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v240",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v241",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Staker_buy0_59",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Staker_sell0_59",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v311",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v327",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v379",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Main_showPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Staker_buy",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T12",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Staker_sell",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T12",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Staker_buy0_59",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Staker_sell0_59",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v311",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200156638038062001566833981016040819052620000269162000246565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560086200013f565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518b01518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000136926002929091019062000169565b5050506200032f565b81620001655760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017790620002f2565b90600052602060002090601f0160209004810192826200019b5760008555620001e6565b82601f10620001b657805160ff1916838001178555620001e6565b82800160010185558215620001e6579182015b82811115620001e6578251825591602001919060010190620001c9565b50620001f4929150620001f8565b5090565b5b80821115620001f45760008155600101620001f9565b604051606081016001600160401b03811182821017156200024057634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025a57600080fd5b604080519081016001600160401b03811182821017156200028b57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002a557600080fd5b620002af6200020f565b60208501519092506001600160a01b0381168114620002cd57600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200030757607f821691505b602082108114156200032957634e487b7160e01b600052602260045260246000fd5b50919050565b611227806200033f6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b5780638323075714610103578063ab53f2c614610118578063ac1289ae1461013b578063f7f5e9d11461014e57005b80631e93b0f1146100825780632c10a159146100a65780632e4b912e146100b95780636009475e146100f057005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610d54565b610163565b6100cc6100c7366004610d6c565b610187565b6040805182516001600160a01b03168152602092830151928101929092520161009d565b6100806100fe366004610d85565b6101d0565b34801561010f57600080fd5b50600154610093565b34801561012457600080fd5b5061012d6101f0565b60405161009d929190610dc3565b6100cc610149366004610d6c565b61028d565b34801561015a57600080fd5b506100936102da565b61016b610b71565b61018361017d36849003840184610e76565b826102ec565b5050565b60408051808201909152600080825260208201526101a3610bb3565b602081810180515160009052515101518390526101be610b71565b6101c882826104ad565b519392505050565b6101d8610b71565b6101836101ea36849003840184610f40565b826104ad565b60006060600054600280805461020590610ff8565b80601f016020809104026020016040519081016040528092919081815260200182805461023190610ff8565b801561027e5780601f106102535761010080835404028352916020019161027e565b820191906000526020600020905b81548152906001019060200180831161026157829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102a9610bb3565b60208101805151600190525151604001518390526102c5610b71565b6102cf82826104ad565b602001519392505050565b6000806102e6816107dd565b91505090565b6102fc600160005414600c610966565b815161031790158061031057508251600154145b600d610966565b60008080556002805461032990610ff8565b80601f016020809104026020016040519081016040528092919081815260200182805461035590610ff8565b80156103a25780601f10610377576101008083540402835291602001916103a2565b820191906000526020600020905b81548152906001019060200180831161038557829003601f168201915b50505050508060200190518101906103ba9190611044565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161041134156009610966565b61042e610427338360200151846060015161098c565b600a610966565b8051610446906001600160a01b03163314600b610966565b61044e610bcd565b815181516001600160a01b0391821690526020808401518351908316908201526060840151835160409081019190915280850151828501805191909152855181519416939092019290925251439101526104a7816109a4565b50505050565b6104bd6004600054146010610966565b81516104d89015806104d157508251600154145b6011610966565b6000808055600280546104ea90610ff8565b80601f016020809104026020016040519081016040528092919081815260200182805461051690610ff8565b80156105635780601f1061053857610100808354040283529160200191610563565b820191906000526020600020905b81548152906001019060200180831161054657829003601f168201915b505050505080602001905181019061057b91906110c4565b9050610585610c14565b7f033a108e8a86d1cab716cf808d2eefccb7da96ec98656ad97224ed6c88f5d05e33856040516105b6929190611152565b60405180910390a160006020850151515160018111156105d8576105d8610eda565b14156106c357602080850151510151808252516105f8903414600e610966565b6080820151602082810180516001600160a01b0393841690526060850151815183015251604080518251909416845290820151918301919091527fcde41cf5c4352e98916304082ab3dee67d4e61515eb45415c5c0c2707e71c682910160405180910390a16020810151835261066c610bcd565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528351518284018051919091528051339301929092529051439101526106bd816109a4565b506104a7565b60016020850151515160018111156106dd576106dd610eda565b14156104a75760208401515160409081015190820181905251610703903414600f610966565b6080820151606080830180516001600160a01b03909316909252830151815160200152516040517f695fa768cd5600d98bb6b0573e46fad6b975cb624105ce6da7f9c1a1655e736e916107709181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a16060810151602084015261078a610bcd565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015283810151518284018051919091528051339301929092529051439101526106bd816109a4565b60006001600054141561089a576000600280546107f990610ff8565b80601f016020809104026020016040519081016040528092919081815260200182805461082590610ff8565b80156108725780601f1061084757610100808354040283529160200191610872565b820191906000526020600020905b81548152906001019060200180831161085557829003601f168201915b505050505080602001905181019061088a9190611044565b905061089860006007610966565b505b60046000541415610955576000600280546108b490610ff8565b80601f01602080910402602001604051908101604052809291908181526020018280546108e090610ff8565b801561092d5780601f106109025761010080835404028352916020019161092d565b820191906000526020600020905b81548152906001019060200180831161091057829003601f168201915b505050505080602001905181019061094591906110c4565b905061095360006007610966565b505b61096160006007610966565b919050565b816101835760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061099a83853085610a5c565b90505b9392505050565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b51516001600160a01b03908116808c528d51890151821688528d518d015187528d8901805151865251890151821683526004909955436001558b518089019990995295518616888c015293519287019290925251908501525116828401528451808303909301835260c090910190935280519192610a579260029290910190610c64565b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610ac3916111b8565b60006040518083038185875af1925050503d8060008114610b00576040519150601f19603f3d011682016040523d82523d6000602084013e610b05565b606091505b5091509150610b1682826001610b36565b5080806020019051810190610b2b91906111d4565b979650505050505050565b60608315610b4557508161099d565b825115610b555782518084602001fd5b60405163100960cb60e01b815260048101839052602401610983565b60408051608081018252600091810182815260608201929092529081905b8152602001610bae604080518082019091526000808252602082015290565b905290565b604051806040016040528060008152602001610bae610ce8565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b6040805160a0810190915260006080820190815281908152602001610c49604080518082019091526000808252602082015290565b8152602001610b8f6040518060200160405280600081525090565b828054610c7090610ff8565b90600052602060002090601f016020900481019282610c925760008555610cd8565b82601f10610cab57805160ff1916838001178555610cd8565b82800160010185558215610cd8579182015b82811115610cd8578251825591602001919060010190610cbd565b50610ce4929150610cfb565b5090565b6040518060200160405280610bae610d10565b5b80821115610ce45760008155600101610cfc565b60408051606081019091528060008152602001610d396040518060200160405280600081525090565b8152602001610bae6040518060200160405280600081525090565b600060408284031215610d6657600080fd5b50919050565b600060208284031215610d7e57600080fd5b5035919050565b600060808284031215610d6657600080fd5b60005b83811015610db2578181015183820152602001610d9a565b838111156104a75750506000910152565b8281526040602082015260008251806040840152610de8816060850160208701610d97565b601f01601f1916919091016060019392505050565b6040516020810167ffffffffffffffff81118282101715610e2e57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff81118282101715610e2e57634e487b7160e01b600052604160045260246000fd5b8015158114610e7357600080fd5b50565b600060408284031215610e8857600080fd5b6040516040810181811067ffffffffffffffff82111715610eb957634e487b7160e01b600052604160045260246000fd5b604052823581526020830135610ece81610e65565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b600060208284031215610f0257600080fd5b6040516020810181811067ffffffffffffffff82111715610f3357634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b60008183036080811215610f5357600080fd5b6040516040810181811067ffffffffffffffff82111715610f8457634e487b7160e01b600052604160045260246000fd5b604052833581526060601f1983011215610f9d57600080fd5b610fa5610dfd565b9150610faf610e34565b602085013560028110610fc157600080fd5b8152610fd08660408701610ef0565b6020820152610fe28660608701610ef0565b6040820152825260208101919091529392505050565b600181811c9082168061100c57607f821691505b60208210811415610d6657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461096157600080fd5b60006080828403121561105657600080fd5b6040516080810181811067ffffffffffffffff8211171561108757634e487b7160e01b600052604160045260246000fd5b6040526110938361102d565b81526110a16020840161102d565b602082015260408301516040820152606083015160608201528091505092915050565b600060a082840312156110d657600080fd5b60405160a0810181811067ffffffffffffffff8211171561110757634e487b7160e01b600052604160045260246000fd5b6040526111138361102d565b81526111216020840161102d565b602082015260408301516040820152606083015160608201526111466080840161102d565b60808201529392505050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906002811061119357634e487b7160e01b600052602160045260246000fd5b8060408501525060208101515160608401526040810151516080840152509392505050565b600082516111ca818460208701610d97565b9190910192915050565b6000602082840312156111e657600080fd5b815161099d81610e6556fea26469706673582212204f4b0f43205c9c56ba93a98fa5977ce5f67292013cd01ef5be7e560dcc13425764736f6c634300080c0033`,
  BytecodeLen: 5478,
  Which: `oD`,
  version: 7,
  views: {
    Main: {
      showPrice: `Main_showPrice`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:39:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Maker": Maker,
  "Staker_buy": Staker_buy,
  "Staker_sell": Staker_sell
  };
export const _APIs = {
  Staker: {
    buy: Staker_buy,
    sell: Staker_sell
    }
  };
