webpackJsonp([0],{"4MEd":function(e,n,t){var A=t("QFAc");"string"==typeof A&&(A=[[e.i,A,""]]),A.locals&&(e.exports=A.locals);t("rjj0")("66cb5e0f",A,!0,{})},FeBl:function(e,n){var t=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=t)},HVFi:function(e,n,t){"use strict";function A(e){t("4MEd")}Object.defineProperty(n,"__esModule",{value:!0});var a=t("QA3a"),i=t("rIIk"),o=t("VU/8"),r=A,s=o(a.a,i.a,!1,r,null,null);n.default=s.exports},QA3a:function(e,n,t){"use strict";var A=t("mvHQ"),a=t.n(A),i=new WebSocket("ws://39.106.62.130:3001/chat");n.a={name:"ChatIndex",data:function(){return{username:window.sessionStorage.username||"外星人",chat_list:[],message:"",userNumber:0}},mounted:function(){var e=this;i.onopen=function(n){var t=a()({msg:n,user:e.username});"string"==typeof n&&i.send(t)},i.onclose=function(e){console.log(e)},i.onmessage=function(n){console.log("onmessage",n);try{var t=JSON.parse(n.data);e.chat_list.push({username:t.user,msg:t.msg}),e.userNumber=t.userNumber}catch(t){e.chat_list.push({username:"系统消息",msg:n.data})}e.$nextTick(function(){var e=document.getElementById("main");e.scrollTop=e.scrollHeight})},i.onerror=function(e){console.log("error")},setTimeout(function(){i.onopen("我来啦")},1e3)},methods:{sendMsg:function(){this.message&&(i.onopen(this.message),this.message="")}}}},QFAc:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,'.chat-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}.chat-container .chat-header{height:2rem;line-height:2rem;border-bottom:1px solid #eee;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;font-size:.65rem;color:#999}.chat-container .main{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto;background:#fafafa;padding:.75rem .5rem;font-size:.75rem}.chat-container .main .clear{clear:both}.chat-container .main .message-block{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:15rem;margin-bottom:1rem;float:left}.chat-container .main .message-block.right{float:right}.chat-container .main .message-block.right .header{margin-right:0;margin-left:.4rem}.chat-container .main .message-block.right .message .username{text-align:right}.chat-container .main .message-block.right .message .text .context{background:#a0e649}.chat-container .main .message-block.right .message .text:before{content:" ";display:block;position:absolute;border-left:.3rem solid #a0e649;border-right:none;border-top:.3rem solid transparent;border-bottom:.3rem solid transparent;right:-.3rem;left:auto;top:.5rem;-webkit-filter:drop-shadow(0 0 1px #ddd);filter:drop-shadow(0 0 1px #ddd);z-index:0}.chat-container .main .message-block .header{width:2rem;height:2rem;margin-right:.4rem;-ms-flex-negative:0;flex-shrink:0}.chat-container .main .message-block .header img{width:100%;height:100%}.chat-container .main .message-block .message{-webkit-box-flex:1;-ms-flex:1;flex:1}.chat-container .main .message-block .message .username{line-height:1;font-size:.65rem;margin-bottom:.3rem;color:#999}.chat-container .main .message-block .message .text{border:1px solid #eee;position:relative;-webkit-filter:drop-shadow(0 0 0 #ddd);filter:drop-shadow(0 0 0 #ddd);border-radius:3px}.chat-container .main .message-block .message .text .context{position:relative;z-index:1;padding:.4rem;background:#fff;line-height:1.2;word-break:break-all;border-radius:3px}.chat-container .main .message-block .message .text:before{content:" ";display:block;position:absolute;border-right:.3rem solid #fff;border-top:.3rem solid transparent;border-bottom:.3rem solid transparent;left:-.3rem;top:.5rem;-webkit-filter:drop-shadow(0 0 1px #ddd);filter:drop-shadow(0 0 1px #ddd);z-index:0}.chat-container .footer{height:3rem;border-top:1px solid #eee;padding-top:.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}.chat-container .footer .chat-box{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;height:2rem}.chat-container .footer .chat-box .chat-input{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0 .25rem 0 .5rem;padding:0 .4rem;outline:none;font-size:.75rem;border-radius:3px;border:1px solid #eee;-webkit-appearance:none}.chat-container .footer .chat-box .wii-btn{width:3rem;padding:0;margin:0 .5rem 0 .25rem;font-size:.75rem}',"",{version:3,sources:["/Users/godaangel/Documents/myAllProgrameCode/2017server/fe/flash-chat/src/views/chat/index.vue"],names:[],mappings:"AACA,gBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAa,CACd,AACD,6BACE,YAAa,AACb,iBAAkB,AAClB,6BAA8B,AAC9B,8BAA+B,AACvB,sBAAuB,AAC/B,kBAAmB,AACnB,iBAAmB,AACnB,UAAY,CACb,AACD,sBACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,qBAAwB,AACxB,gBAAmB,CACpB,AACD,6BACE,UAAY,CACb,AACD,qCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,mBAAoB,AACpB,UAAY,CACb,AACD,2CACE,WAAa,CACd,AACD,mDACE,eAAmB,AACnB,iBAAoB,CACrB,AACD,8DACE,gBAAkB,CACnB,AACD,mEACE,kBAAoB,CACrB,AACD,iEACE,YAAa,AACb,cAAe,AACf,kBAAmB,AACnB,gCAAkC,AAClC,kBAAmB,AACnB,mCAAqC,AACrC,sCAAwC,AACxC,aAAe,AACf,UAAW,AACX,UAAY,AACZ,yCAA8C,AACtC,iCAAsC,AAC9C,SAAW,CACZ,AACD,6CACE,WAAY,AACZ,YAAa,AACb,mBAAqB,AACrB,oBAAqB,AACjB,aAAe,CACpB,AACD,iDACE,WAAY,AACZ,WAAa,CACd,AACD,8CACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,wDACE,cAAe,AACf,iBAAmB,AACnB,oBAAsB,AACtB,UAAY,CACb,AACD,oDACE,sBAAuB,AACvB,kBAAmB,AACnB,uCAA8C,AACtC,+BAAsC,AAC9C,iBAAmB,CACpB,AACD,6DACE,kBAAmB,AACnB,UAAW,AACX,cAAuB,AACvB,gBAAiB,AACjB,gBAAiB,AACjB,qBAAsB,AACtB,iBAAmB,CACpB,AACD,2DACE,YAAa,AACb,cAAe,AACf,kBAAmB,AACnB,8BAAgC,AAChC,mCAAqC,AACrC,sCAAwC,AACxC,YAAc,AACd,UAAY,AACZ,yCAA8C,AACtC,iCAAsC,AAC9C,SAAW,CACZ,AACD,wBACE,YAAa,AACb,0BAA2B,AAC3B,kBAAoB,AACpB,8BAA+B,AACvB,qBAAuB,CAChC,AACD,kCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACjB,cAAe,AACnB,WAAa,CACd,AACD,8CACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,wBAA2B,AAC3B,gBAAkB,AAClB,aAAc,AACd,iBAAmB,AACnB,kBAAmB,AACnB,sBAAuB,AACvB,uBAAyB,CAC1B,AACD,2CACE,WAAY,AACZ,UAAW,AACX,wBAA2B,AAC3B,gBAAmB,CACpB",file:"index.vue",sourcesContent:["\n.chat-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n.chat-container .chat-header {\n  height: 2rem;\n  line-height: 2rem;\n  border-bottom: 1px solid #eee;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  font-size: 0.65rem;\n  color: #999;\n}\n.chat-container .main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  background: #fafafa;\n  padding: 0.75rem 0.5rem;\n  font-size: 0.75rem;\n}\n.chat-container .main .clear {\n  clear: both;\n}\n.chat-container .main .message-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 15rem;\n  margin-bottom: 1rem;\n  float: left;\n}\n.chat-container .main .message-block.right {\n  float: right;\n}\n.chat-container .main .message-block.right .header {\n  margin-right: 0rem;\n  margin-left: 0.4rem;\n}\n.chat-container .main .message-block.right .message .username {\n  text-align: right;\n}\n.chat-container .main .message-block.right .message .text .context {\n  background: #a0e649;\n}\n.chat-container .main .message-block.right .message .text:before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  border-left: 0.3rem solid #a0e649;\n  border-right: none;\n  border-top: 0.3rem solid transparent;\n  border-bottom: 0.3rem solid transparent;\n  right: -0.3rem;\n  left: auto;\n  top: 0.5rem;\n  -webkit-filter: drop-shadow(0px 0px 1px #ddd);\n          filter: drop-shadow(0px 0px 1px #ddd);\n  z-index: 0;\n}\n.chat-container .main .message-block .header {\n  width: 2rem;\n  height: 2rem;\n  margin-right: 0.4rem;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.chat-container .main .message-block .header img {\n  width: 100%;\n  height: 100%;\n}\n.chat-container .main .message-block .message {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.chat-container .main .message-block .message .username {\n  line-height: 1;\n  font-size: 0.65rem;\n  margin-bottom: 0.3rem;\n  color: #999;\n}\n.chat-container .main .message-block .message .text {\n  border: 1px solid #eee;\n  position: relative;\n  -webkit-filter: drop-shadow(0px 0px 0px #ddd);\n          filter: drop-shadow(0px 0px 0px #ddd);\n  border-radius: 3px;\n}\n.chat-container .main .message-block .message .text .context {\n  position: relative;\n  z-index: 1;\n  padding: 0.4rem 0.4rem;\n  background: #fff;\n  line-height: 1.2;\n  word-break: break-all;\n  border-radius: 3px;\n}\n.chat-container .main .message-block .message .text:before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  border-right: 0.3rem solid #fff;\n  border-top: 0.3rem solid transparent;\n  border-bottom: 0.3rem solid transparent;\n  left: -0.3rem;\n  top: 0.5rem;\n  -webkit-filter: drop-shadow(0px 0px 1px #ddd);\n          filter: drop-shadow(0px 0px 1px #ddd);\n  z-index: 0;\n}\n.chat-container .footer {\n  height: 3rem;\n  border-top: 1px solid #eee;\n  padding-top: 0.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.chat-container .footer .chat-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  height: 2rem;\n}\n.chat-container .footer .chat-box .chat-input {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0 0.25rem 0 0.5rem;\n  padding: 0 0.4rem;\n  outline: none;\n  font-size: 0.75rem;\n  border-radius: 3px;\n  border: 1px solid #eee;\n  -webkit-appearance: none;\n}\n.chat-container .footer .chat-box .wii-btn {\n  width: 3rem;\n  padding: 0;\n  margin: 0 0.5rem 0 0.25rem;\n  font-size: 0.75rem;\n}\n"],sourceRoot:""}])},mvHQ:function(e,n,t){e.exports={default:t("qkKv"),__esModule:!0}},qkKv:function(e,n,t){var A=t("FeBl"),a=A.JSON||(A.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},rIIk:function(e,n,t){"use strict";var A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("wii-page",[t("div",{staticClass:"chat-container"},[t("div",{staticClass:"chat-header"},[e._v("\n      当前聊天人数("+e._s(e.userNumber)+")\n    ")]),e._v(" "),t("div",{staticClass:"main",attrs:{id:"main"}},[e._l(e.chat_list,function(n){return[n.username==e.username?t("div",{staticClass:"message-block right"},[t("div",{staticClass:"message"},[t("div",{staticClass:"username"},[e._v(e._s(n.username))]),e._v(" "),t("div",{staticClass:"text"},[t("div",{staticClass:"context"},[e._v(e._s(n.msg))])])]),e._v(" "),t("div",{staticClass:"header"},[t("img",{attrs:{src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3599989605,2377066072&fm=27&gp=0.jpg",alt:n.username}})])]):t("div",{staticClass:"message-block"},[t("div",{staticClass:"header"},[t("img",{attrs:{src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3495468696,3471928735&fm=11&gp=0.jpg",alt:n.username}})]),e._v(" "),t("div",{staticClass:"message"},[t("div",{staticClass:"username"},[e._v(e._s(n.username))]),e._v(" "),t("div",{staticClass:"text"},[t("div",{staticClass:"context"},[e._v(e._s(n.msg))])])])]),e._v(" "),t("div",{staticClass:"clear"})]})],2),e._v(" "),t("div",{staticClass:"footer"},[t("div",{staticClass:"chat-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"chat-input",attrs:{type:"text",placeholder:"说点什么吧..."},domProps:{value:e.message},on:{input:function(n){n.target.composing||(e.message=n.target.value)}}}),e._v(" "),t("wii-button",{attrs:{conf:{class_name:"weui-btn_mini"}},on:{"on-click-handler":e.sendMsg}},[e._v("发送")])],1)])])])},a=[],i={render:A,staticRenderFns:a};n.a=i}});
//# sourceMappingURL=0.0208760da3c82262187f.js.map