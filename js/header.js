<<<<<<< HEAD
"use strict";var init={name:"未命名頁面",player:{level:1,str:0,agi:0,"int":0,acc:0,gb:0,bb:0},weapon:{ps:0,pb:0,as:0,q:0,c:0},weaponadd:{as:0,c:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,pm:0,ttz:0},talent:{as:0,c:0,d:0,pjtd:0,cd:0,ed:0,wed:0,pd:0,cupd:0,cud:0,iced:0,fd:0,td:0,aura:0,hp:0,hpd:0,mp:0,mpd:0,zd:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0},head:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},hand:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},body:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},belt:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},necklace:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},ringone:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},ringtwo:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},foot:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},quiver:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,pjtd:0,hp:0,hpd:0,mp:0,mpd:0},skill:{as:0,asl:0,c:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,wed:0,pd:0,pjtd:0,d:0,ed:0,iced:0,fd:0,td:0,zd:0,ptf:0,pti:0,ptt:0,ptz:0,ptfadd:0,ptiadd:0,pttadd:0,ptzadd:0,itf:0,itfadd:0,ftz:0,bd:100},moreless:{gmp:0,lmp:0,fork:0,pjtdm:0,pdm:0,tr:0,trd:0,mtr:0,wedm:0,ci:0,rg:0},hideinfo:{pb:0,hy:0},aural:{hate:0,ths:0,thb:0,ags:0,agb:0}},leftPanel=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],rightPanel=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],index=localStorage.index?localStorage.index:1,value=[],view=location.hash?!0:!1,shortUrl=null;if(localStorage.left&&(leftPanel=localStorage.left.split(",").map(function(e){return"false"==e?!1:!0})),localStorage.right&&(rightPanel=localStorage.right.split(",").map(function(e){return"false"==e?!1:!0})),view){var hash=location.hash.replace("#",""),decode=base64.decode(hash);value[index-1]=JSON.parse(decode)}else localStorage.temp&&"object"==typeof JSON.parse(localStorage.temp)?(1==localStorage.version?value=JSON.parse(localStorage.temp):value[0]=init,localStorage.version=1,value.length<index&&(localStorage.index=index=value.length)):(value[0]=init,localStorage.temp=JSON.stringify(value),localStorage.version=1);var Page=React.createClass({displayName:"Page",getInitialState:function(){return{display:!1}},_handleAdd:function(){value[value.length]=init,this._handleChangePage(value.length),window.location.href=""+location.pathname},_handleDel:function(){1===value.length?alert("目前只有一個分頁唷!"):index==value.length?(value.splice(index-1,1),this._handleChangePage(index-1)):(value.splice(index-1,1),this._handleChangePage(index))},_handleReanme:function(){var e=prompt("請輸入要修改的名稱",value[index-1].name);e.trim()&&(value[index-1].name=e,this.setState(),main.setState())},_handleCopy:function(){var e="複製 - "+main.state.name,a=value[index-1];a.name=e,value.push(a),this._handleChangePage(value.length),window.location.href=""+location.pathname},_handleChangePage:function(e){view||(localStorage.index=index=e,this.setState(),main.setState(value[index-1]))},_handleInport:function(e){var a=e.target.files[0],t=new FileReader;t.onload=function(e){localStorage.temp=e.target.result,window.location.href=""+location.pathname},t.readAsText(a)},_index:function(e,a){return index-1===a?React.createElement("li",{className:"active",keys:a},value[index-1].name):React.createElement("li",{keys:a,onClick:this._handleChangePage.bind(null,a+1)},e.name)},render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("nav",null,React.createElement("ul",{className:"clearfix"},view?React.createElement("li",{className:""},React.createElement("a",{href:""+location.pathname},"回到個人配置頁面")):null,view?null:React.createElement("li",{className:""},React.createElement("a",{href:URL.createObjectURL(new Blob([JSON.stringify(value)],{type:"application/octect-stream"})),download:"poe-calc.txt"},"匯出")),view?null:React.createElement("li",{className:""},React.createElement("input",{id:"fileInport",onChange:this._handleInport,type:"file"}),"匯入"),view?null:React.createElement("li",{className:"",onClick:this._handleAdd},"新增"),view?null:React.createElement("li",{className:"",onClick:this._handleReanme},"命名"),view?null:React.createElement("li",{className:"",onClick:this._handleCopy},"複製"),view?null:React.createElement("li",{className:"",onClick:this._handleDel},"刪除"),React.createElement("li",{className:""},React.createElement("label",null,"短網址"),React.createElement("input",{value:shortUrl})),React.createElement("li",{id:"author",className:"xx-fright"},React.createElement("a",{href:"http://dkbo.github.io"},"DKBO 製作")),React.createElement("div",{className:"clearfix"}),value.map(this._index)))}}),Title=React.createClass({displayName:"Title",render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("div",{className:"col xx12"},React.createElement("h1",{className:"xx-center"},"POE 弓類傷害計算機"),React.createElement("div",{className:"row"},React.createElement("p",{className:"primary xx-p"},"路過的訪客要是覺得好用，也可隨意散撥或修改，目前已經對於 POE 傷害公式還算了解，如在使用上有任何問題時，也歡迎在遊戲中設我為好友 ID: DKBO，上線時間不多，休閒時會玩下。")))}}),Header=React.createClass({displayName:"Header",render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("div",null,React.createElement(Page,null),React.createElement(Title,null))}}),headerBox=document.querySelector("#header"),header=React.render(React.createElement(Header,null),headerBox);
=======
"use strict";var init={name:"未命名頁面",player:{level:1,str:0,agi:0,"int":0,acc:0,gb:0,bb:0},weapon:{ps:0,pb:0,as:0,q:0,c:0},weaponadd:{as:0,c:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,pm:0,ttz:0},talent:{as:0,c:0,d:0,pjtd:0,cd:0,ed:0,wed:0,pd:0,cupd:0,cud:0,iced:0,fd:0,td:0,aura:0,hp:0,hpd:0,mp:0,mpd:0,zd:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0},head:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},hand:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},body:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},belt:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},necklace:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},ringone:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},ringtwo:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},foot:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,hp:0,hpd:0,mp:0,mpd:0},quiver:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,zd:0,pjtd:0,hp:0,hpd:0,mp:0,mpd:0},skill:{as:0,asl:0,c:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,zs:0,zb:0,cd:0,wed:0,pd:0,pjtd:0,d:0,iced:0,fd:0,td:0,zd:0,ptf:0,pti:0,ptt:0,ptz:0,ptfadd:0,ptiadd:0,pttadd:0,ptzadd:0,itf:0,itfadd:0,ftz:0,bd:100},moreless:{gmp:0,lmp:0,fork:0,pjtdm:0,pdm:0,tr:0,trd:0,mtr:0,wedm:0,ci:0,rg:0},hideinfo:{pb:0,hy:0},aural:{hate:0,ths:0,thb:0,ags:0,agb:0}},leftPanel=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],rightPanel=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],index=localStorage.index?localStorage.index:1,value=[],view=location.hash?!0:!1,shortUrl=null;if(localStorage.left&&(leftPanel=localStorage.left.split(",").map(function(e){return"false"==e?!1:!0})),localStorage.right&&(rightPanel=localStorage.right.split(",").map(function(e){return"false"==e?!1:!0})),view){var hash=location.hash.replace("#",""),decode=base64.decode(hash);value[index-1]=JSON.parse(decode)}else localStorage.temp&&"object"==typeof JSON.parse(localStorage.temp)?(1==localStorage.version?value=JSON.parse(localStorage.temp):value[0]=init,localStorage.version=1,value.length<index&&(localStorage.index=index=value.length)):(value[0]=init,localStorage.temp=JSON.stringify(value),localStorage.version=1);var Page=React.createClass({displayName:"Page",getInitialState:function(){return{display:!1}},_handleAdd:function(){value[value.length]=init,this._handleChangePage(value.length),window.location.href=""+location.pathname},_handleDel:function(){1===value.length?alert("目前只有一個分頁唷!"):index==value.length?(value.splice(index-1,1),this._handleChangePage(index-1)):(value.splice(index-1,1),this._handleChangePage(index))},_handleReanme:function(){var e=prompt("請輸入要修改的名稱",value[index-1].name);e.trim()&&(value[index-1].name=e,this.setState(),main.setState())},_handleCopy:function(){var e="複製 - "+main.state.name,a=value[index-1];a.name=e,value.push(a),this._handleChangePage(value.length),window.location.href=""+location.pathname},_handleChangePage:function(e){view||(localStorage.index=index=e,this.setState(),main.setState(value[index-1]))},_handleInport:function(e){var a=e.target.files[0],t=new FileReader;t.onload=function(e){localStorage.temp=e.target.result,window.location.href=""+location.pathname},t.readAsText(a)},_index:function(e,a){return index-1===a?React.createElement("li",{className:"active",keys:a},value[index-1].name):React.createElement("li",{keys:a,onClick:this._handleChangePage.bind(null,a+1)},e.name)},render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("nav",null,React.createElement("ul",{className:"clearfix"},view?React.createElement("li",{className:""},React.createElement("a",{href:""+location.pathname},"回到個人配置頁面")):null,view?null:React.createElement("li",{className:""},React.createElement("a",{href:URL.createObjectURL(new Blob([JSON.stringify(value)],{type:"application/octect-stream"})),download:"poe-calc.txt"},"匯出")),view?null:React.createElement("li",{className:""},React.createElement("input",{id:"fileInport",onChange:this._handleInport,type:"file"}),"匯入"),view?null:React.createElement("li",{className:"",onClick:this._handleAdd},"新增"),view?null:React.createElement("li",{className:"",onClick:this._handleReanme},"命名"),view?null:React.createElement("li",{className:"",onClick:this._handleCopy},"複製"),view?null:React.createElement("li",{className:"",onClick:this._handleDel},"刪除"),React.createElement("li",{className:""},React.createElement("label",null,"短網址"),React.createElement("input",{value:shortUrl})),React.createElement("li",{id:"author",className:"xx-fright"},React.createElement("a",{href:"http://dkbo.github.io"},"DKBO 製作")),React.createElement("div",{className:"clearfix"}),value.map(this._index)))}}),Title=React.createClass({displayName:"Title",render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("div",{className:"col xx12"},React.createElement("h1",{className:"xx-center"},"POE 弓類傷害計算機"),React.createElement("div",{className:"row"},React.createElement("p",{className:"primary xx-p"},"路過的訪客要是覺得好用，可隨意散撥或修改，此工具不在做任何更新及修正。2016/02/02")))}}),Header=React.createClass({displayName:"Header",render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("div",null,React.createElement(Page,null),React.createElement(Title,null))}}),headerBox=document.querySelector("#header"),header=React.render(React.createElement(Header,null),headerBox);
>>>>>>> origin/gh-pages
