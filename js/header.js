"use strict";function equipment(){return{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,pod:0,aoed:0,pjtd:0,trd:0,cud:0,hp:0,hpd:0,mp:0,mpd:0}}function transNum(e){return/\./.test(e)?parseFloat(e):parseInt(e)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},reg={weapon:{},talent:{},equipment:{addG:/附加\s(\d+)-(\d+)\s(.{2})傷害/g,add:/附加\s(\d+)-(\d+)\s(.{2})傷害/,healthG:/(-|\+)(\d+)\s(.+)/g,health:/(-|\+)(\d+)\s(.+)/,parG:/(-|\+)(\d+)%\s(.+)/g,par:/(-|\+)(\d+)%\s(.+)/,insertG:/增加\s(\d+)%\s(.+)/g,insert:/(.+)\s(\d+)%\s(.+)/},skill:{}},init={name:"未命名頁面",player:{level:1,str:0,agi:0,"int":0,acc:0,gb:0,bb:0,bc:1,pps:2,ppo:0},talent:{as:0,c:0,d:0,pjtd:0,cd:0,ed:0,wed:0,pod:0,trd:0,aoed:0,pd:0,apd:0,wpd:0,cupd:0,ad:0,cud:0,iced:0,fd:0,td:0,aura:0,hp:0,hpd:0,mp:0,mpd:0,zd:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0},weapon:{ps:0,pb:0,as:0,q:0,c:0},weaponadd:equipment(),head:equipment(),hand:equipment(),body:equipment(),belt:equipment(),necklace:equipment(),ringone:equipment(),ringtwo:equipment(),foot:equipment(),quiver:equipment(),skill:{as:0,wc:0,c:0,cuds:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,pd:0,cud:0,pod:0,igd:0,wed:0,aoed:0,pjptd:0,trd:0,pjtd:0,d:0,ed:0,iced:0,fd:0,td:0,zd:0,ptf:0,pti:0,ptt:0,ptz:0,ptfadd:0,ptiadd:0,pttadd:0,ptzadd:0,etzadd:0,itf:0,itfadd:0,ftz:0,bd:100,ttz:0},moreless:{gmp:0,lmp:0,fork:0,pjtdm:0,penet:0,pdm:0,pdmasl:0,tr:0,trd:0,mtr:0,edm:0,wedm:0,ci:0,rg:0,btomd:0,btomasl:0,vm:0},hideinfo:{pm:0,pb:0,hy:0,cw:0,fe:0,fr:0,frc:0},aural:{hate:0,ths:0,thb:0,ags:0,agb:0}},info={name:"未命名頁面",player:{level:1,bc:1,pps:2},talent:{},weapon:{},weaponadd:{},head:{},hand:{},body:{},belt:{},necklace:{},ringone:{},ringtwo:{},foot:{},quiver:{},skill:{bd:100},moreless:{},hideinfo:{},aural:{}},infoArray=["player","talent","weapon","weaponadd","head","hand","body","belt","necklace","ringone","ringtwo","foot","quiver","skill","moreless","hideinfo","aural"],temp=JSON.parse(JSON.stringify(init)),leftPanel=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],rightPanel=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],index=localStorage.index?localStorage.index:1,value=[],view=!!location.hash,shortUrl=null,showAllRWD=!1,showTextArea=!1,TextAreaNum=0;if(localStorage.left&&(leftPanel=localStorage.left.split(",").map(function(e){return"false"!==e})),localStorage.right&&(rightPanel=localStorage.right.split(",").map(function(e){return"false"!==e})),view){var hash=location.hash.replace("#",""),decode=base64.decode(hash);value[index-1]=JSON.parse(decode)}else localStorage.temp&&"object"===_typeof(JSON.parse(localStorage.temp))?(value=JSON.parse(localStorage.temp),value.length<index&&(localStorage.index=index=value.length)):(value[0]=info,localStorage.temp=JSON.stringify(value));temp=$.extend(!0,temp,value[index-1]);var Page=React.createClass({displayName:"Page",getInitialState:function(){return{display:!1}},_handleAdd:function(){temp=JSON.parse(JSON.stringify(init)),value[value.length]=info,this._handleChangePage(value.length)},_handleDel:function(){1===value.length?alert("目前只有一個分頁唷!"):index==value.length?(value.splice(index-1,1),this._handleChangePage(index-1)):(value.splice(index-1,1),this._handleChangePage(index))},_handleReanme:function(){var e=prompt("請輸入要修改的名稱",value[index-1].name);e.trim()&&(value[index-1].name=e,this.setState(),main.setState())},_handleCopy:function(){var e="複製 - "+main.state.name,t=JSON.parse(JSON.stringify(value[index-1]));t.name=e,value.push(t),this._handleChangePage(value.length)},_handleChangePage:function(e){view||(localStorage.index=index=e,temp=JSON.parse(JSON.stringify(init)),temp=$.extend(!0,temp,value[index-1]),this.setState(),main.setState(value[index-1]))},_handleInport:function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){localStorage.temp=e.target.result,window.location.href=""+location.pathname},a.readAsText(t)},_handleShortURL:function(){$.ajax({url:"https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBQw5RseC1Om1DzQn8YfsbF08GAryITvf8",type:"POST",data:JSON.stringify({longUrl:"http://dkbo.github.io/poe-calc/#"+base64.encode(JSON.stringify(value[index-1]))}),contentType:"application/json",dataType:"json",success:function(e,t,a){"success"==t&&(shortUrl=e.id,header.setState())}})},_handleShowALLRWD:function(){showAllRWD=!showAllRWD,header.setState(),main.setState()},_index:function(e,t){return index-1===t?React.createElement("li",{className:"active",keys:t},value[index-1].name):React.createElement("li",{keys:t,onClick:this._handleChangePage.bind(null,t+1)},e.name)},render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("nav",null,React.createElement("ul",{className:"clearfix"},view?React.createElement("li",{className:""},React.createElement("a",{href:""+location.pathname},"回到個人配置頁面")):null,view?null:React.createElement("li",{className:""},React.createElement("a",{href:URL.createObjectURL(new Blob([JSON.stringify(value)],{type:"application/octect-stream"})),download:"poe-calc.txt"},"匯出")),view?null:React.createElement("li",{className:""},React.createElement("input",{id:"fileInport",onChange:this._handleInport,type:"file"}),"匯入"),view?null:React.createElement("li",{className:"",onClick:this._handleAdd},"新增"),view?null:React.createElement("li",{className:"",onClick:this._handleReanme},"命名"),view?null:React.createElement("li",{className:"",onClick:this._handleCopy},"複製"),view?null:React.createElement("li",{className:"",onClick:this._handleDel},"刪除"),React.createElement("li",{className:"",onClick:this._handleShowALLRWD},showAllRWD?"顯示所有":"隱藏不必要","資訊"),React.createElement("li",{className:"",onClick:this._handleShortURL},React.createElement("label",null,"短網址"),React.createElement("input",{value:shortUrl})),React.createElement("li",{id:"author",className:"xx-fright"},React.createElement("a",{href:"http://dkbo.github.io"},"DKBO 製作")),React.createElement("div",{className:"clearfix"}),value.map(this._index)))}}),Title=React.createClass({displayName:"Title",render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("div",{className:"col xx12"},React.createElement("h1",{className:"xx-center"},"POE 弓類傷害計算機"),React.createElement("div",{className:"row"},React.createElement("p",{className:"primary xx-p"},"路過的訪客要是覺得好用，也可隨意散撥或修改，目前已經對於 POE 傷害公式還算了解，如在使用上有任何問題時，也歡迎在遊戲中設我為好友 ID: DKBO，上線時間不多，休閒時會玩下。")))}}),Header=React.createClass({displayName:"Header",render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("div",null,React.createElement(Page,null),React.createElement(Title,null))}}),headerBox=document.querySelector("#header"),header=React.render(React.createElement(Header,null),headerBox);