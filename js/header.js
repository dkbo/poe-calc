"use strict";var init={name:"未命名頁面",player:{level:1,str:0,agi:0,"int":0,acc:0,gb:0,bb:0},weapon:{ps:0,pb:0,as:0,q:0,c:0},weaponadd:{as:0,c:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,pm:0},talent:{as:0,c:0,d:0,pjtd:0,cd:0,ed:0,wed:0,pd:0,cupd:0,cud:0,iced:0,fd:0,td:0,aura:0,hp:0,hpd:0,mp:0,mpd:0},head:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,hp:0,hpd:0,mp:0,mpd:0},hand:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,hp:0,hpd:0,mp:0,mpd:0},body:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,hp:0,hpd:0,mp:0,mpd:0},belt:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,hp:0,hpd:0,mp:0,mpd:0},necklace:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,hp:0,hpd:0,mp:0,mpd:0},ringone:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,hp:0,hpd:0,mp:0,mpd:0},ringtwo:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,hp:0,hpd:0,mp:0,mpd:0},foot:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,hp:0,hpd:0,mp:0,mpd:0},quiver:{as:0,c:0,d:0,ps:0,pb:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,ed:0,wed:0,pd:0,iced:0,fd:0,td:0,pjtd:0,hp:0,hpd:0,mp:0,mpd:0},skill:{as:0,asl:0,c:0,ices:0,iceb:0,fs:0,fb:0,ts:0,tb:0,cd:0,wed:0,pd:0,pjtd:0,d:0,iced:0,fd:0,td:0,ptf:0,pti:0,ptt:0,ptfadd:0,ptiadd:0,pttadd:0,bd:100},moreless:{gmp:0,lmp:0,fork:0,pjtdm:0,pdm:0,tr:0,trd:0,mtr:0,wedm:0,ci:0,rg:0},hideinfo:{pb:0,hy:0}},index=localStorage.index?localStorage.index:1,value=[];localStorage.temp&&"object"==typeof JSON.parse(localStorage.temp)?value=JSON.parse(localStorage.temp):value[index-1]=init;var Page=React.createClass({displayName:"Page",getInitialState:function(){return{display:!1}},_handleClick:function(){this.setState({display:!this.state.display})},_handleAdd:function(){},_index:function(e,d){return index-1===d?React.createElement("li",{className:"active",keys:d},value[index-1].name):React.createElement("li",{keys:d},value[index-1].name)},render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("nav",null,React.createElement("ul",{className:"clearfix"},value.map(this._index),React.createElement("li",null,"+")))}}),Title=React.createClass({displayName:"Title",render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("h1",{className:"xx-center"},"POE 弓類武器傷害試算")}}),Header=React.createClass({displayName:"Header",render:function(){arguments.length<=0||void 0===arguments[0]?this.props.s:arguments[0];return React.createElement("div",null,React.createElement(Page,null),React.createElement(Title,null))}}),headerBox=document.querySelector("#header"),header=React.render(React.createElement(Header,null),headerBox);