"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[980],{47481:(e,t,i)=>{i.r(t),i.d(t,{default:()=>xe});var r=i(52322),n=i(60642),o=i(35635),s=i(2784),a=i(39727),d=i(61750),l=i(62252),c=i(82732),u=i(19526),m=i(21137),f=i(21627),h=i(49967),x=i(35102),p=i(86778),y=i(20512);const v=s.memo((({hideOtherPairs:e,onHideOtherPairs:t,mHeaderText:i,hideName:n})=>(0,r.jsx)("div",Object.assign({className:"action-bar"},{children:(0,r.jsxs)(o.Z,Object.assign({sx:{alignItems:"center",color:"t.third"},onClick:()=>t(!e)},{children:[(0,r.jsx)(p.Z,{name:n,checked:e,onChange:()=>!1},void 0),(0,r.jsx)(y.Z,Object.assign({variant:"caption",sx:{userSelect:"none"}},{children:i}),void 0)]}),void 0)}),void 0))),g=e=>(0,l.ZK)("trd-tradeHistory",e);var b=i(72869),j=i(42166),O=i(82696),w=i(20115),P=i(50695),T=i(4673),S=i(45873),Z=i(84183);function k(e,t,i={}){const{tickSize:r,minQty:n,equalQtyPrecision:o}=i,s=(0,Z.M)(String(t)),a=r?(0,S.pC)(+r):s,d=n?(0,S.pC)(+n):s;switch(e.toLowerCase()){case"fee":return(0,S.uf)(t,8);case"filled":return(0,S.uf)(t,d);case"equalqty":return(0,S.mD)(+t,o);case"totalquota":return(0,S.mD)(+t,a);case"price":return(0,S.uf)(t,a);case"total":return(0,S.uf)(t,8);default:return e}}const M=(0,T.nM)(),I=e=>M?(({symbol:e,insertTime:t,side:i,positionSide:r="BOTH",price:n,qty:o,totalQuota:s,fee:a,commissionAsset:d,realizedProfit:c})=>{const u=((0,w.Vh)()||{})[e]||{},{marginAsset:m,pricePrecision:f}=u,{getI18n:h}=g(),{getI18n:x}=(0,l.yk)(),p=x("Cont",{defaultValue:"Cont"}),{isCoinUnit:y}=(0,P.Q)();let v,T=e;return u&&(v=(0,b.H)(u,x),T=v.shortName),{nextDate:(0,j.v)(new Date(t),"yyyy-MM-dd hh:mm:ss"),nextPair:T,symbolName:v,nextSide:"BUY"===i?{color:"buy",children:h(`sideBuy${r}`,{defaultValue:"Buy"})}:{color:"sell",children:h(`sideSell${r}`,{defaultValue:"Sell"})},nextPrice:(0,O.uf)(n,f),nextQty:y?`${k("equalQty",s,u)} ${m}`:`${k("filled",o,u)} ${p}`,nextFee:`${k("fee",a,u)}\n              ${d||m}`,nextProfit:`${k("fee",c,u)}\n              ${m}`}})(e):(({symbol:e,insertTime:t,side:i,positionSide:r="BOTH",price:n,qty:o,totalQuota:s,fee:a,commissionAsset:d,realizedProfit:c})=>{const u=((0,w.Vh)()||{})[e]||{},{baseAsset:m,marginAsset:f,pricePrecision:h}=u,{getI18n:x}=g(),{getI18n:p}=(0,l.yk)(),{isCoinUnit:y}=(0,P.Q)();let v,T=e;return u&&(v=(0,b.H)(u,p),T=v.shortName),{nextDate:(0,j.v)(new Date(t),"yyyy-MM-dd hh:mm:ss"),nextPair:T,symbolName:v,nextSide:"BUY"===i?{color:"buy",children:x(`sideBuy${r}`,{defaultValue:"Buy"})}:{color:"sell",children:x(`sideSell${r}`,{defaultValue:"Sell"})},nextPrice:(0,O.uf)(n,h),nextQty:y?`${k("filled",o,u)} ${m}`:`${k("totalQuota",s,u)} ${f}`,nextFee:`${k("fee",a,u)}\n              ${d||f}`,nextProfit:`${k("fee",c,u)}\n                ${f}`}})(e);const N=[{key:"price",text:"Price",i18n:"price",valueKey:"nextPrice"},{key:"quantity",text:"Quantity",i18n:"quantity",valueKey:"nextQty"},{key:"fee",text:"Fee",i18n:"fee",valueKey:"nextFee"},{key:"profit",text:"Realized Profit",i18n:"realizedProfit",valueKey:"nextProfit"},{key:"time",text:"Time",i18n:"time",valueKey:"nextDate"}],C=({children:e})=>(0,r.jsx)(y.Z,Object.assign({variant:"caption",__css:{color:"t.third"}},{children:e}),void 0),H=e=>{var{color:t="t.primary"}=e,i=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i}(e,["color"]);return(0,r.jsx)(y.Z,Object.assign({variant:"captionSub",color:t},i),void 0)},E=({children:e,sx:t})=>(0,r.jsx)(o.Z,Object.assign({className:"row-item",sx:t},{children:e}),void 0),$=({symbolName:e,nextPair:t,nextSide:i})=>(0,r.jsx)(E,Object.assign({sx:{pb:"10px !important"}},{children:(0,r.jsxs)("div",Object.assign({className:"symbol-wrap"},{children:[e?(0,r.jsxs)("div",Object.assign({className:"symbolText"},{children:[(0,r.jsx)("div",Object.assign({className:"symbol"},{children:e.symbol}),void 0),(0,r.jsx)("div",{children:`${e.contractTypeI18n} ${e.deliveryDateFormat}`},void 0)]}),void 0):(0,r.jsx)("div",Object.assign({className:"symbolText"},{children:t}),void 0),(0,r.jsx)(y.Z,Object.assign({variant:"caption"},i),void 0)]}),void 0)}),void 0),z=s.memo((e=>{const{getI18n:t}=g(),i=I(e),n=N,{symbolName:o,nextPair:s,nextSide:a}=i;return(0,r.jsxs)("div",Object.assign({className:"row-wrap"},{children:[(0,r.jsx)($,{symbolName:o,nextSide:a,nextPair:s},void 0),n.map((({key:e,text:n,i18n:o,valueKey:s})=>(0,r.jsxs)(E,{children:[(0,r.jsx)(C,{children:t(o,{defaultValue:n})},void 0),(0,r.jsx)(H,{children:i[s]},void 0)]},e)))]}),void 0)})),B=s.memo((e=>{const{getI18n:t}=g(),i=I(e),{symbolName:n,nextPair:o,nextSide:s}=i;return(0,r.jsxs)("div",Object.assign({className:"row-wrap"},{children:[(0,r.jsx)($,{symbolName:n,nextSide:s,nextPair:o},void 0),(0,r.jsx)("div",Object.assign({className:"row-grid"},{children:N.map((({key:e,text:n,i18n:o,valueKey:s})=>(0,r.jsxs)("div",Object.assign({className:s},{children:[(0,r.jsx)(C,{children:t(o,{defaultValue:n})},void 0),(0,r.jsx)(H,{children:i[s]},void 0)]}),e)))}),void 0)]}),void 0)}));var D=i(97103),Q=i(78735);const F=({hideOtherPairs:e,onHideOtherPairs:t,hideText:i,hideName:n})=>{const{isMobile:s}=(0,l.Fs)();return(0,r.jsxs)(o.Z,Object.assign({sx:{alignItems:"center",fontSize:[1,0],color:"t.third",userSelect:"none",position:"absolute",top:"-40px",right:"28px",zIndex:"999",height:"40px"},onClick:()=>t(!e)},{children:[(0,r.jsx)(p.Z,{name:n,size:s?18:16,checked:e,onChange:()=>!1},void 0),(0,r.jsx)(y.Z,Object.assign({sx:{lineHeight:1}},{children:i}),void 0)]}),void 0)},A=({type:e,onSearch:t,hideOtherPairs:i,onHideOtherPairs:n,hideText:s,hideName:a})=>{const{isMobile:d,isIPad:c}=(0,l.Fs)();return d?(0,r.jsx)(Q.Z,{onSearch:t},void 0):(0,r.jsxs)(o.Z,Object.assign({sx:{alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",height:"32px",pb:"10px"}},{children:[(0,r.jsx)(D.Z,{type:e,onSearch:t},void 0),!d&&!c&&(0,r.jsx)(F,{hideOtherPairs:i,onHideOtherPairs:n,hideText:s,hideName:a},void 0)]}),void 0)},R={position:"relative",flexDirection:"column",flex:"1 0",".action-bar":{display:"flex",alignItems:"center",height:32,pt:10},".empty":{display:"flex",minHeight:120,alignItems:"center",justifyContent:"center",color:"t.secondary",fontSize:0},".row-wrap":{color:"t.primary",py:15,borderBottom:"1px solid",borderColor:"line","&:last-of-type":{mb:102,borderBottom:"none"},"& .row-item":{justifyContent:"space-between",alignItems:"center",py:"minor"},"& .symbol-wrap":{display:"flex",flexDirection:"column",fontSize:0,"& .symbolText":{display:"flex",alignItems:"center"},"& .symbol":{mr:"minor",fontSize:1,fontWeight:"medium"}}}},W={position:"relative",flexDirection:"column",height:"100%",".action-bar":{display:"flex",alignItems:"center",height:32,pb:10},".empty":{display:"flex",minHeight:120,alignItems:"center",justifyContent:"center",color:"t.secondary",fontSize:0},".row-list":{height:"calc(100% - 32px)",overflow:"auto","&::-webkit-scrollbar":{display:"none"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}},".row-wrap":{color:"t.primary",py:15,borderBottom:"1px solid",borderColor:"line","&:last-of-type":{mb:15,borderBottom:"none"},".row-grid":{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gridGap:"12px 16px",gridTemplateAreas:'"nextPrice nextQty nextFee"\n        "nextProfit nextDate ."',"& .nextFee":{textAlign:"right"}},"& .row-item":{justifyContent:"space-between",alignItems:"center"},"& .symbol-wrap":{display:"flex",alignItems:"center",fontSize:0,"& .symbolText":{display:"flex",alignItems:"center",mr:"xs"},"& .symbol":{mr:"minor",fontSize:1,fontWeight:"medium"}}}},_=()=>{const{getI18n:e}=g();return(0,r.jsx)("div",Object.assign({className:"empty"},{children:e("nodata",{defaultValue:"You have no trades."})}),void 0)},q=s.memo((({isMobile:e,isEmpty:t,hasMore:i,loadMore:n,loading:a,data:d=[],hideOtherPairs:l,onHideOtherPairs:c,hideName:u,mHeaderText:m,hideText:f,onSearch:p,filterType:y})=>((0,s.useEffect)((()=>{i&&n()}),[i,n]),(0,r.jsxs)(o.Z,Object.assign({sx:e?R:W},{children:[(0,r.jsx)(h.Z,{fullScreen:!0,show:a},void 0),(0,r.jsx)(v,{hideOtherPairs:l,onHideOtherPairs:c,mHeaderText:m,hideName:u},void 0),(0,r.jsx)(A,{type:y,onSearch:p,hideOtherPairs:l,onHideOtherPairs:c,hideText:f,hideName:u},void 0),t?(0,r.jsx)(_,{},void 0):e?d.map((e=>(0,r.jsx)(z,Object.assign({},e),e.tradeId))):(0,r.jsx)("div",Object.assign({className:"row-list"},{children:d.map((e=>(0,r.jsx)(B,Object.assign({},e),e.tradeId)))}),void 0),i&&(0,r.jsx)(x.Z,{showMore:n,check:{offset:200},loading:a},void 0)]}),void 0))));var V=i(52613),K=i(24071);const U={my:0,py:"xs",width:"calc(100% - 5px)",display:"flex",alignItems:"center",flexGrow:0,flexShrink:0,color:"t.third",fontSize:[0],cursor:"auto"},G={userSelect:"none",px:"xs",flexGrow:1,fontWeight:"normal",whiteSpace:"nowrap"},Y={time:{minWidth:"120px"},symbol:{color:"t.secondary",minWidth:"90px"},side:{minWidth:"30px"},price:{color:"t.secondary",minWidth:"75px"},quantity:{color:"t.secondary",minWidth:"75px"},fee:{color:"t.secondary",minWidth:"110px"},profit:{color:"t.secondary",minWidth:"125px"}},L=e=>{const t=Y[e]||{};return Object.assign(Object.assign(Object.assign({},G),t),{flexBasis:t.minWidth})};const X=e=>(0,r.jsx)(y.Z,Object.assign({},e),void 0),J=s.memo((e=>{var{useColumn:t}=e,i=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i}(e,["useColumn"]);const n=t(i),{symbol:s}=i,{nextDate:a,symbolName:d,nextSide:l,nextPrice:c,nextQty:u,nextFee:m,nextProfit:f}=n;return(0,r.jsxs)(o.Z,Object.assign({sx:Object.assign(Object.assign({},U),{color:"t.secondary",fontSize:[0],cursor:"auto",py:0,width:"100%",height:"100%",":hover":{backgroundColor:"bg3",".symbol":{color:"t.yellow"}}})},{children:[(0,r.jsx)(y.Z,Object.assign({sx:Object.assign({color:"table.timeColor"},L("time"))},{children:a}),void 0),(0,r.jsx)(y.Z,Object.assign({sx:L("symbol"),className:"symbol"},{children:(0,r.jsx)(K.O,{symbolName:d,fallbackText:s},void 0)}),void 0),(0,r.jsx)(y.Z,Object.assign({},l,{sx:L("side")}),void 0),(0,r.jsx)(X,Object.assign({sx:L("price")},{children:c}),void 0),(0,r.jsx)(X,Object.assign({sx:L("quantity")},{children:u}),void 0),(0,r.jsx)(y.Z,Object.assign({sx:L("fee")},{children:m}),void 0),(0,r.jsx)(X,Object.assign({sx:L("profit")},{children:f}),void 0)]}),void 0)}));var ee=i(7688),te=i(18760);const ie=s.memo((({loading:e=!1,data:t,renderRow:i,empty:n,isEmpty:o,hasMore:a,loadMore:d,rowHeight:l=80,minWidth:c=0,sx:u})=>{const m=(0,s.useRef)({data:t,flag:-1});m.current.data!==t&&(m.current.flag*=-1),m.current.data=t;const f=(0,s.useRef)(null);(0,s.useEffect)((()=>{if(!f.current)return;const{listRef:e}=f.current;if(!e||!e.current)return;const{current:t}=e;t.resetAfterIndex(0,!0)}),[m.current.flag]);const x=(0,s.useMemo)((()=>[{title:"",dataIndex:"",hideTitle:!0,render:i}]),[i]);return o?(0,r.jsx)(s.Fragment,{children:n},void 0):(0,r.jsxs)(V.Z,Object.assign({sx:Object.assign({position:"relative",".list-grid":{width:"100%","> div > div":{border:0,"> div":{my:0,px:0,height:"100%",borderBottom:"1px solid",borderBottomColor:"newLine"},"> div > div":{height:"100%"}}}},u)},{children:[(0,r.jsx)(h.Z,{fullScreen:!0,inner:!0,show:e},void 0),(0,r.jsx)(ee.Z,{children:({height:e,width:i})=>(0,r.jsx)(te.Z,{threshold:5,hasMore:a,loadMore:d,className:"list-grid",columns:x,ref:f,data:t,listGridConfig:{collapseHeight:l,height:Math.max(e-4,0),width:Math.max(i,c)},__hackDataChanged:m.current.flag},void 0)},void 0)]}),void 0)})),re=[{key:"time",text:"Time",i18n:"time"},{key:"symbol",text:"Symbol",i18n:"symbol"},{key:"side",text:"Side",i18n:"side"},{key:"price",text:"Price",i18n:"price"},{key:"quantity",text:"Quantity",i18n:"quantity"},{key:"fee",text:"Fee",i18n:"fee"},{key:"profit",text:"Realized Profit",i18n:"realizedProfit"}],ne=(e,t)=>(0,r.jsx)(J,Object.assign({},t,{useColumn:I}),void 0),oe=()=>{const{getI18n:e}=g();return(0,r.jsx)(V.Z,Object.assign({sx:{color:"t.secondary",textAlign:"center",fontSize:[0],marginTop:"xs"}},{children:e("nodata",{defaultValue:"You have no trades."})}),void 0)},se=s.forwardRef((({isEmpty:e,hasMore:t,loadMore:i,loading:n,data:a=[]},d)=>{const{getI18n:l}=g(),c=(0,s.useMemo)((()=>(0,r.jsx)(o.Z,Object.assign({sx:Object.assign(Object.assign({},U),{borderBottom:"1px solid",borderBottomColor:"newLine"})},{children:re.map((e=>{const{key:t,i18n:i,text:n}=e||{},o=l(i,{defaultValue:n});return(0,r.jsx)(V.Z,Object.assign({sx:L(t)},{children:(0,r.jsx)(y.Z,Object.assign({sx:{fontSize:0,color:"t.third"}},{children:o}),void 0)}),t)}))}),void 0)),[l]);return(0,r.jsxs)(o.Z,Object.assign({ref:d,sx:{flexDirection:"column",flex:"1 0",overflowX:"auto"}},{children:[c,(0,r.jsx)(ie,{sx:{flex:"1 0"},loading:n,rowHeight:40,renderRow:ne,data:a,hasMore:t,loadMore:i,isEmpty:e,empty:(0,r.jsx)(oe,{},void 0),minWidth:Object.keys(Y).reduce(((e,t)=>e+parseInt(Y[t].minWidth,10)),0)},void 0)]}),void 0)})),ae=s.memo((({filterType:e,onSearch:t,hideOtherPairs:i,onHideOtherPairs:n,hasMore:o,loadMore:a,isEmpty:d,data:l,loading:c,currentPage:u,hideText:m,hideName:f})=>{const h=function(e){const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if(1!==e)return;const{current:i}=t;if(i&&i instanceof Element){const e=i.querySelector(".list-grid");e&&(e.scrollTop=0)}})),t}(u);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V.Z,Object.assign({sx:{position:"relative"}},{children:(0,r.jsx)(A,{type:e,onSearch:t,hideOtherPairs:i,onHideOtherPairs:n,hideText:m,hideName:f},void 0)}),void 0),(0,r.jsx)(se,{ref:h,"data-testid":"tradeInfoTable",hasMore:o,loadMore:a,isEmpty:d,data:l,loading:c},void 0)]},void 0)}));var de=function(e,t,i,r){return new(i||(i=Promise))((function(n,o){function s(e){try{d(r.next(e))}catch(e){o(e)}}function a(e){try{d(r.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}d((r=r.apply(e,t||[])).next())}))};const le="UpdateFilter",ce="FetchSuccess",ue={nextPage:1,hasMore:!0,filters:{l_pair:!1,timePeriod:"1w",startTime:0,endTime:0},items:[],symbolMap:{}},me=(0,m.j)({[le](e,t){const{startTime:i,endTime:r,timePeriod:n,pair:o}=t.payload;void 0!==n&&(e.filters.timePeriod=n),void 0!==i&&(e.filters.startTime=i),void 0!==r&&(e.filters.endTime=r),void 0!==o&&(e.filters.l_pair=o)},[ce](e,t){const{data:i,page:r,total:n}=t.payload;1===r?e.items=i:i.length&&(e.items=e.items.concat(i)),e.hasMore=200*r<n,e.nextPage=r+1}},ue),fe=(0,f.Z)(le),he=(0,f.Z)(ce),xe=s.memo((()=>{const{getI18n:e}=(0,l.yk)(),t="hideOtherSymbol",i=e(t,{defaultValue:"Hide Other Symbol"}),m=(0,a.I0)(),{isTradeHideOtherPairs:f}=(0,c.VX)(),{isMobile:h,isIPad:x}=(0,l.Fs)();ue.filters.timePeriod=x?"1w":"1d",ue.filters.l_pair=f;const p=(0,c.AM)(),[y,v]=(0,s.useReducer)(me,Object.assign(Object.assign({},ue),{symbolMap:p})),{nextPage:g,filters:b,hasMore:j}=y,O=function(e,{pair:t}){const[i]=(0,c.z4)();let r;return(0,u.I9)(e,"insertTime"),t&&(r=e.filter((e=>e.symbol===i))),r||e}(y.items,{pair:b.l_pair}),w=(0,s.useCallback)((e=>{v(fe({pair:e})),m.userProfile.save({key:"isTradeHideOtherPairs",value:e})}),[m.userProfile]),[{loading:P},T]=(0,d.Z)((({page:e=g,times:t}={})=>de(void 0,void 0,void 0,(function*(){const{startTime:i,endTime:r}=t||function(e){let t=(0,u.OQ)(e.timePeriod);return t||(t={type:"1w",startTime:e.startTime,endTime:e.endTime}),t}(b);if(null===i||null===r)return;const{data:o,total:s}=yield(({startTime:e,endTime:t,rows:i,page:r,accountType:o}={})=>de(void 0,void 0,void 0,(function*(){let s;try{s=yield(0,n.v_)("/bapi/futures/v1/private/future/user-data/trade-history",{accountType:o,startTime:e,endTime:t,page:r,rows:i})}catch(e){throw new Error("nework error")}if("000000"!==s.code)throw new Error(s.message||"unknown error");return{data:s.data||[],total:s.total}})))({startTime:i,endTime:r,page:e,rows:200,accountType:"MAIN"});v(he({data:o,total:s,page:e}))}))),[g,b],{loading:!0}),S=(0,s.useCallback)((({type:e,startTime:t,endTime:i})=>{v(fe({timePeriod:e,startTime:t,endTime:i})),T({page:1,times:{startTime:t,endTime:i}})}),[T]);(0,s.useEffect)((()=>{j||S((0,u.OQ)("1d"))}),[]);const Z=(0,s.useCallback)((()=>T()),[T]),k=!P&&O.length<=0;return(0,r.jsx)(o.Z,Object.assign({"data-testid":"DataTable",sx:{flexDirection:"column",height:"100%",pb:"xs",px:"sm"}},{children:x?(0,r.jsx)(q,{isMobile:h,hideOtherPairs:b.l_pair,onHideOtherPairs:w,hasMore:j,loadMore:Z,isEmpty:k,data:O,loading:P,hideName:t,mHeaderText:i,filterType:b.timePeriod,hideText:i,onSearch:S},void 0):(0,r.jsx)(ae,{filterType:b.timePeriod,onSearch:S,hideOtherPairs:b.l_pair,onHideOtherPairs:w,hasMore:j,loadMore:Z,isEmpty:k,data:O,loading:P,currentPage:g-1,hideText:i,hideName:t},void 0)}),void 0)}))},21137:(e,t,i)=>{i.d(t,{j:()=>v});const r=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];var r="function"!=typeof t[t.length-1]&&t.pop(),n=t;if(void 0===r)throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.");return function(e,t){for(var i=arguments.length,o=Array(i>2?i-2:0),s=2;s<i;s++)o[s-2]=arguments[s];var a=void 0===e,d=void 0===t;return a&&d&&r?r:n.reduce((function(e,i){return i.apply(void 0,[e,t].concat(o))}),a&&!d&&r?r:e)}};var n=i(47677),o=i.n(n);const s=function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t},a=function(e){return"undefined"!=typeof Map&&e instanceof Map};function d(e){if(a(e))return Array.from(e.keys());if("undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys)return Reflect.ownKeys(e);var t=Object.getOwnPropertyNames(e);return"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e))),t}var l="||";function c(e,t){return a(t)?t.get(e):t[e]}const u=(m=function(e){return(s(e)||a(e))&&(i=(t=d(e)).every((function(e){return"next"===e||"throw"===e})),!(t.length&&t.length<=2&&i));var t,i},function e(t,i,r,n){var o=void 0===i?{}:i,s=o.namespace,a=void 0===s?"/":s,u=o.prefix;return void 0===r&&(r={}),void 0===n&&(n=""),d(t).forEach((function(i){var o=function(e){return n||!u||u&&new RegExp("^"+u+a).test(e)?e:""+u+a+e}(function(e){var t;if(!n)return e;var i=e.toString().split(l),r=n.split(l);return(t=[]).concat.apply(t,r.map((function(e){return i.map((function(t){return""+e+a+t}))}))).join(l)}(i)),s=c(i,t);m(s)?e(s,{namespace:a,prefix:u},r,o):r[o]=s})),r});var m,f=i(81393),h=i(75952);const x=function(e){return e.toString()};function p(e,t,i){void 0===i&&(i={}),o()(s(e)||a(e),"Expected handlers to be a plain object.");var n=u(e,i),m=d(n).map((function(e){return function(e,t,i){void 0===t&&(t=h.Z);var r=x(e).split(l);o()(!(void 0===i),"defaultState for reducer handling "+r.join(", ")+" should be defined"),o()((0,f.Z)(t)||s(t),"Expected reducer to be a function or object with next and throw reducers");var n=(0,f.Z)(t)?[t,t]:[t.next,t.throw].map((function(e){return null==e?h.Z:e})),a=n[0],d=n[1];return function(e,t){void 0===e&&(e=i);var n=t.type;return n&&-1!==r.indexOf(x(n))?(!0===t.error?d:a)(e,t):e}}(e,c(e,n),t)})),p=r.apply(void 0,m.concat([t]));return function(e,i){return void 0===e&&(e=t),p(e,i)}}var y=i(18172);const v=(e,t)=>p(Object.keys(e).reduce(((t,i)=>Object.assign(Object.assign({},t),{[i]:(t,r)=>(0,y.ZP)(t,(t=>e[i](t,r)))})),{}),t)},21627:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(47677),n=i.n(r),o=i(81393),s=i(75952);const a=function(e){return null===e};function d(e,t,i){void 0===t&&(t=s.Z),n()((0,o.Z)(t)||a(t),"Expected payloadCreator to be a function, undefined or null");var r=a(t)||t===s.Z?s.Z:function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];return e instanceof Error?e:t.apply(void 0,[e].concat(r))},d=(0,o.Z)(i),l=e.toString(),c=function(){var t=r.apply(void 0,arguments),n={type:e};return t instanceof Error&&(n.error=!0),void 0!==t&&(n.payload=t),d&&(n.meta=i.apply(void 0,arguments)),n};return c.toString=function(){return l},c}},75952:(e,t,i)=>{i.d(t,{Z:()=>r});const r=function(e){return e}},81393:(e,t,i)=>{i.d(t,{Z:()=>r});const r=function(e){return"function"==typeof e}}}]);