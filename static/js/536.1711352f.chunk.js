"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[536],{75536:(t,e,r)=>{r.d(e,{diagram:()=>W});var a=r(8862),n=r(53072),i=r(30772),s=r(60963),o=r(70062);const c=[];for(let U=0;U<256;++U)c.push((U+256).toString(16).slice(1));function l(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]}const h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const d=function(t){return"string"===typeof t&&h.test(t)};const u=function(t){if(!d(t))throw TypeError("Invalid UUID");let e;const r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};function y(t,e,r,a){switch(t){case 0:return e&r^~e&a;case 1:case 3:return e^r^a;case 2:return e&r^e&a^r&a}}function p(t,e){return t<<e|t>>>32-e}const _=function(t,e,r){function a(t,a,n,i){var s;if("string"===typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));const e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"===typeof a&&(a=u(a)),16!==(null===(s=a)||void 0===s?void 0:s.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let o=new Uint8Array(16+t.length);if(o.set(a),o.set(t,a.length),o=r(o),o[6]=15&o[6]|e,o[8]=63&o[8]|128,n){i=i||0;for(let t=0;t<16;++t)n[i+t]=o[t];return n}return l(o)}try{a.name=t}catch(n){}return a.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",a.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",a}("v5",80,(function(t){const e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof t){const e=unescape(encodeURIComponent(t));t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const a=t.length/4+2,n=Math.ceil(a/16),i=new Array(n);for(let s=0;s<n;++s){const e=new Uint32Array(16);for(let r=0;r<16;++r)e[r]=t[64*s+4*r]<<24|t[64*s+4*r+1]<<16|t[64*s+4*r+2]<<8|t[64*s+4*r+3];i[s]=e}i[n-1][14]=8*(t.length-1)/Math.pow(2,32),i[n-1][14]=Math.floor(i[n-1][14]),i[n-1][15]=8*(t.length-1)&4294967295;for(let s=0;s<n;++s){const t=new Uint32Array(80);for(let e=0;e<16;++e)t[e]=i[s][e];for(let e=16;e<80;++e)t[e]=p(t[e-3]^t[e-8]^t[e-14]^t[e-16],1);let a=r[0],n=r[1],o=r[2],c=r[3],l=r[4];for(let r=0;r<80;++r){const i=Math.floor(r/20),s=p(a,5)+y(i,n,o,c)+l+e[i]+t[r]>>>0;l=c,c=o,o=p(n,30)>>>0,n=a,a=s}r[0]=r[0]+a>>>0,r[1]=r[1]+n>>>0,r[2]=r[2]+o>>>0,r[3]=r[3]+c>>>0,r[4]=r[4]+l>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}));var f=function(){var t=(0,n.K2)((function(t,e,r,a){for(r=r||{},a=t.length;a--;r[t[a]]=e);return r}),"o"),e=[6,8,10,20,22,24,26,27,28],r=[1,10],a=[1,11],i=[1,12],s=[1,13],o=[1,14],c=[1,15],l=[1,21],h=[1,22],d=[1,23],u=[1,24],y=[1,25],p=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],_=[1,34],f=[27,28,46,47],g=[41,42,43,44,45],E=[17,34],m=[1,54],O=[1,53],k=[17,34,36,38],b={trace:(0,n.K2)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:(0,n.K2)((function(t,e,r,a,n,i,s){var o=i.length-1;switch(n){case 1:break;case 2:case 6:case 7:this.$=[];break;case 3:i[o-1].push(i[o]),this.$=i[o-1];break;case 4:case 5:case 19:case 43:case 27:case 28:case 31:this.$=i[o];break;case 8:a.addEntity(i[o-4]),a.addEntity(i[o-2]),a.addRelationship(i[o-4],i[o],i[o-2],i[o-3]);break;case 9:a.addEntity(i[o-3]),a.addAttributes(i[o-3],i[o-1]);break;case 10:a.addEntity(i[o-2]);break;case 11:a.addEntity(i[o]);break;case 12:a.addEntity(i[o-6],i[o-4]),a.addAttributes(i[o-6],i[o-1]);break;case 13:a.addEntity(i[o-5],i[o-3]);break;case 14:a.addEntity(i[o-3],i[o-1]);break;case 15:case 16:this.$=i[o].trim(),a.setAccTitle(this.$);break;case 17:case 18:this.$=i[o].trim(),a.setAccDescription(this.$);break;case 20:case 41:case 42:case 32:this.$=i[o].replace(/"/g,"");break;case 21:case 29:this.$=[i[o]];break;case 22:i[o].push(i[o-1]),this.$=i[o];break;case 23:this.$={attributeType:i[o-1],attributeName:i[o]};break;case 24:this.$={attributeType:i[o-2],attributeName:i[o-1],attributeKeyTypeList:i[o]};break;case 25:this.$={attributeType:i[o-2],attributeName:i[o-1],attributeComment:i[o]};break;case 26:this.$={attributeType:i[o-3],attributeName:i[o-2],attributeKeyTypeList:i[o-1],attributeComment:i[o]};break;case 30:i[o-2].push(i[o]),this.$=i[o-2];break;case 33:this.$={cardA:i[o],relType:i[o-1],cardB:i[o-2]};break;case 34:this.$=a.Cardinality.ZERO_OR_ONE;break;case 35:this.$=a.Cardinality.ZERO_OR_MORE;break;case 36:this.$=a.Cardinality.ONE_OR_MORE;break;case 37:this.$=a.Cardinality.ONLY_ONE;break;case 38:this.$=a.Cardinality.MD_PARENT;break;case 39:this.$=a.Identification.NON_IDENTIFYING;break;case 40:this.$=a.Identification.IDENTIFYING}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:r,22:a,24:i,26:s,27:o,28:c},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:r,22:a,24:i,26:s,27:o,28:c},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:l,42:h,43:d,44:u,45:y}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(p,[2,19]),t(p,[2,20]),t(e,[2,4]),{11:29,27:o,28:c},{16:30,17:[1,31],29:32,30:33,34:_},{11:35,27:o,28:c},{40:36,46:[1,37],47:[1,38]},t(f,[2,34]),t(f,[2,35]),t(f,[2,36]),t(f,[2,37]),t(f,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:_},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:l,42:h,43:d,44:u,45:y},t(g,[2,39]),t(g,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(E,[2,23],{32:50,33:51,35:52,37:m,38:O}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(E,[2,24],{33:56,36:[1,57],38:O}),t(E,[2,25]),t(k,[2,29]),t(E,[2,32]),t(k,[2,31]),{16:58,17:[1,59],29:32,30:33,34:_},t(E,[2,26]),{35:60,37:m},{17:[1,61]},t(e,[2,13]),t(k,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:(0,n.K2)((function(t,e){if(!e.recoverable){var r=new Error(t);throw r.hash=e,r}this.trace(t)}),"parseError"),parse:(0,n.K2)((function(t){var e=this,r=[0],a=[],i=[null],s=[],o=this.table,c="",l=0,h=0,d=0,u=s.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(p.yy[_]=this.yy[_]);y.setInput(t,p.yy),p.yy.lexer=y,p.yy.parser=this,"undefined"==typeof y.yylloc&&(y.yylloc={});var f=y.yylloc;s.push(f);var g=y.options&&y.options.ranges;function E(){var t;return"number"!==typeof(t=a.pop()||y.lex()||1)&&(t instanceof Array&&(t=(a=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,n.K2)((function(t){r.length=r.length-2*t,i.length=i.length-t,s.length=s.length-t}),"popStack"),(0,n.K2)(E,"lex");for(var m,O,k,b,R,N,x,T,A,M={};;){if(k=r[r.length-1],this.defaultActions[k]?b=this.defaultActions[k]:(null!==m&&"undefined"!=typeof m||(m=E()),b=o[k]&&o[k][m]),"undefined"===typeof b||!b.length||!b[0]){var w="";for(N in A=[],o[k])this.terminals_[N]&&N>2&&A.push("'"+this.terminals_[N]+"'");w=y.showPosition?"Parse error on line "+(l+1)+":\n"+y.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(w,{text:y.match,token:this.terminals_[m]||m,line:y.yylineno,loc:f,expected:A})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+m);switch(b[0]){case 1:r.push(m),i.push(y.yytext),s.push(y.yylloc),r.push(b[1]),m=null,O?(m=O,O=null):(h=y.yyleng,c=y.yytext,l=y.yylineno,f=y.yylloc,d>0&&d--);break;case 2:if(x=this.productions_[b[1]][1],M.$=i[i.length-x],M._$={first_line:s[s.length-(x||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(x||1)].first_column,last_column:s[s.length-1].last_column},g&&(M._$.range=[s[s.length-(x||1)].range[0],s[s.length-1].range[1]]),"undefined"!==typeof(R=this.performAction.apply(M,[c,h,l,p.yy,b[1],i,s].concat(u))))return R;x&&(r=r.slice(0,-1*x*2),i=i.slice(0,-1*x),s=s.slice(0,-1*x)),r.push(this.productions_[b[1]][0]),i.push(M.$),s.push(M._$),T=o[r[r.length-2]][r[r.length-1]],r.push(T);break;case 3:return!0}}return!0}),"parse")},R=function(){return{EOF:1,parseError:(0,n.K2)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,n.K2)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,n.K2)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,n.K2)((function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===a.length?this.yylloc.first_column:0)+a[a.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,n.K2)((function(){return this._more=!0,this}),"more"),reject:(0,n.K2)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,n.K2)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,n.K2)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,n.K2)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,n.K2)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,n.K2)((function(t,e){var r,a,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var i in n)this[i]=n[i];return!1}return!1}),"test_match"),next:(0,n.K2)((function(){if(this.done)return this.EOF;var t,e,r,a;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),i=0;i<n.length;i++)if((r=this._input.match(this.rules[n[i]]))&&(!e||r[0].length>e[0].length)){if(e=r,a=i,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,n[i])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,n.K2)((function(){var t=this.next();return t||this.lex()}),"lex"),begin:(0,n.K2)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,n.K2)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,n.K2)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,n.K2)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,n.K2)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,n.K2)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,n.K2)((function(t,e,r,a){switch(r){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:case 15:case 20:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 16:return 37;case 17:case 18:return 34;case 19:return 38;case 21:return this.popState(),17;case 22:case 54:return e.yytext[0];case 23:return 18;case 24:return 19;case 25:case 29:case 30:case 43:return 41;case 26:case 27:case 28:case 36:case 38:case 45:return 43;case 31:case 32:case 33:case 34:case 35:case 37:case 44:return 42;case 39:case 40:case 41:case 42:return 44;case 46:return 45;case 47:case 50:case 51:case 52:return 46;case 48:case 49:return 47;case 53:return 27;case 55:return 6}}),"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}}}();function N(){this.yy={}}return b.lexer=R,(0,n.K2)(N,"Parser"),N.prototype=b,b.Parser=N,new N}();f.parser=f;var g=f,E=new Map,m=[],O=(0,n.K2)((function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return E.has(t)?!E.get(t).alias&&e&&(E.get(t).alias=e,n.Rm.info("Add alias '".concat(e,"' to entity '").concat(t,"'"))):(E.set(t,{attributes:[],alias:e}),n.Rm.info("Added new entity :",t)),E.get(t)}),"addEntity"),k=(0,n.K2)((()=>E),"getEntities"),b=(0,n.K2)((function(t,e){let r,a=O(t);for(r=e.length-1;r>=0;r--)a.attributes.push(e[r]),n.Rm.debug("Added attribute ",e[r].attributeName)}),"addAttributes"),R=(0,n.K2)((function(t,e,r,a){let i={entityA:t,roleA:e,entityB:r,relSpec:a};m.push(i),n.Rm.debug("Added new relationship :",i)}),"addRelationship"),N=(0,n.K2)((()=>m),"getRelationships"),x=(0,n.K2)((function(){E=new Map,m=[],(0,n.IU)()}),"clear"),T={Cardinality:{ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Identification:{NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},getConfig:(0,n.K2)((()=>(0,n.D7)().er),"getConfig"),addEntity:O,addAttributes:b,getEntities:k,addRelationship:R,getRelationships:N,clear:x,setAccTitle:n.SV,getAccTitle:n.iN,setAccDescription:n.EI,getAccDescription:n.m7,setDiagramTitle:n.ke,getDiagramTitle:n.ab},A={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},M={ERMarkers:A,insertMarkers:(0,n.K2)((function(t,e){let r;t.append("defs").append("marker").attr("id",A.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",A.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",A.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",A.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",A.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",A.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",A.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",A.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",A.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",A.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")}),"insertMarkers")},w=/[^\dA-Za-z](\W)*/g,I={},D=new Map,S=(0,n.K2)((function(t){const e=Object.keys(t);for(const r of e)I[r]=t[r]}),"setConf"),v=(0,n.K2)(((t,e,r)=>{const a=I.entityPadding/3,i=I.entityPadding/3,s=.85*I.fontSize,o=e.node().getBBox(),c=[];let l=!1,h=!1,d=0,u=0,y=0,p=0,_=o.height+2*a,f=1;r.forEach((t=>{void 0!==t.attributeKeyTypeList&&t.attributeKeyTypeList.length>0&&(l=!0),void 0!==t.attributeComment&&(h=!0)})),r.forEach((r=>{const i="".concat(e.node().id,"-attr-").concat(f);let o=0;const g=(0,n.QO)(r.attributeType),E=t.append("text").classed("er entityLabel",!0).attr("id","".concat(i,"-type")).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,n.D7)().fontFamily).style("font-size",s+"px").text(g),m=t.append("text").classed("er entityLabel",!0).attr("id","".concat(i,"-name")).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,n.D7)().fontFamily).style("font-size",s+"px").text(r.attributeName),O={};O.tn=E,O.nn=m;const k=E.node().getBBox(),b=m.node().getBBox();if(d=Math.max(d,k.width),u=Math.max(u,b.width),o=Math.max(k.height,b.height),l){const e=void 0!==r.attributeKeyTypeList?r.attributeKeyTypeList.join(","):"",a=t.append("text").classed("er entityLabel",!0).attr("id","".concat(i,"-key")).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,n.D7)().fontFamily).style("font-size",s+"px").text(e);O.kn=a;const c=a.node().getBBox();y=Math.max(y,c.width),o=Math.max(o,c.height)}if(h){const e=t.append("text").classed("er entityLabel",!0).attr("id","".concat(i,"-comment")).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,n.D7)().fontFamily).style("font-size",s+"px").text(r.attributeComment||"");O.cn=e;const a=e.node().getBBox();p=Math.max(p,a.width),o=Math.max(o,a.height)}O.height=o,c.push(O),_+=o+2*a,f+=1}));let g=4;l&&(g+=2),h&&(g+=2);const E=d+u+y+p,m={width:Math.max(I.minEntityWidth,Math.max(o.width+2*I.entityPadding,E+i*g)),height:r.length>0?_:Math.max(I.minEntityHeight,o.height+2*I.entityPadding)};if(r.length>0){const r=Math.max(0,(m.width-E-i*g)/(g/2));e.attr("transform","translate("+m.width/2+","+(a+o.height/2)+")");let n=o.height+2*a,s="attributeBoxOdd";c.forEach((e=>{const o=n+a+e.height/2;e.tn.attr("transform","translate("+i+","+o+")");const c=t.insert("rect","#"+e.tn.node().id).classed("er ".concat(s),!0).attr("x",0).attr("y",n).attr("width",d+2*i+r).attr("height",e.height+2*a),_=parseFloat(c.attr("x"))+parseFloat(c.attr("width"));e.nn.attr("transform","translate("+(_+i)+","+o+")");const f=t.insert("rect","#"+e.nn.node().id).classed("er ".concat(s),!0).attr("x",_).attr("y",n).attr("width",u+2*i+r).attr("height",e.height+2*a);let g=parseFloat(f.attr("x"))+parseFloat(f.attr("width"));if(l){e.kn.attr("transform","translate("+(g+i)+","+o+")");const c=t.insert("rect","#"+e.kn.node().id).classed("er ".concat(s),!0).attr("x",g).attr("y",n).attr("width",y+2*i+r).attr("height",e.height+2*a);g=parseFloat(c.attr("x"))+parseFloat(c.attr("width"))}h&&(e.cn.attr("transform","translate("+(g+i)+","+o+")"),t.insert("rect","#"+e.cn.node().id).classed("er ".concat(s),"true").attr("x",g).attr("y",n).attr("width",p+2*i+r).attr("height",e.height+2*a)),n+=e.height+2*a,s="attributeBoxOdd"===s?"attributeBoxEven":"attributeBoxOdd"}))}else m.height=Math.max(I.minEntityHeight,_),e.attr("transform","translate("+m.width/2+","+m.height/2+")");return m}),"drawAttributes"),L=(0,n.K2)((function(t,e,r){let a;return[...e.keys()].forEach((function(i){var s;const o=F(i,"entity");D.set(i,o);const c=t.append("g").attr("id",o);a=void 0===a?o:a;const l="text-"+o,h=c.append("text").classed("er entityLabel",!0).attr("id",l).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",(0,n.D7)().fontFamily).style("font-size",I.fontSize+"px").text(null!==(s=e.get(i).alias)&&void 0!==s?s:i),{width:d,height:u}=v(c,h,e.get(i).attributes),y=c.insert("rect","#"+l).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",d).attr("height",u).node().getBBox();r.setNode(o,{width:y.width,height:y.height,shape:"rect",id:o})})),a}),"drawEntities"),K=(0,n.K2)((function(t,e){e.nodes().forEach((function(r){void 0!==r&&void 0!==e.node(r)&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")}))}),"adjustEntities"),C=(0,n.K2)((function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")}),"getEdgeName"),B=(0,n.K2)((function(t,e){return t.forEach((function(t){e.setEdge(D.get(t.entityA),D.get(t.entityB),{relationship:t},C(t))})),t}),"addRelationships"),P=0,Y=(0,n.K2)((function(t,e,r,a,i){P++;const o=r.edge(D.get(e.entityA),D.get(e.entityB),C(e)),c=(0,s.n8j)().x((function(t){return t.x})).y((function(t){return t.y})).curve(s.qrM),l=t.insert("path","#"+a).classed("er relationshipLine",!0).attr("d",c(o.points)).style("stroke",I.stroke).style("fill","none");e.relSpec.relType===i.db.Identification.NON_IDENTIFYING&&l.attr("stroke-dasharray","8,8");let h="";switch(I.arrowMarkerAbsolute&&(h=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,h=h.replace(/\(/g,"\\("),h=h.replace(/\)/g,"\\)")),e.relSpec.cardA){case i.db.Cardinality.ZERO_OR_ONE:l.attr("marker-end","url("+h+"#"+M.ERMarkers.ZERO_OR_ONE_END+")");break;case i.db.Cardinality.ZERO_OR_MORE:l.attr("marker-end","url("+h+"#"+M.ERMarkers.ZERO_OR_MORE_END+")");break;case i.db.Cardinality.ONE_OR_MORE:l.attr("marker-end","url("+h+"#"+M.ERMarkers.ONE_OR_MORE_END+")");break;case i.db.Cardinality.ONLY_ONE:l.attr("marker-end","url("+h+"#"+M.ERMarkers.ONLY_ONE_END+")");break;case i.db.Cardinality.MD_PARENT:l.attr("marker-end","url("+h+"#"+M.ERMarkers.MD_PARENT_END+")")}switch(e.relSpec.cardB){case i.db.Cardinality.ZERO_OR_ONE:l.attr("marker-start","url("+h+"#"+M.ERMarkers.ZERO_OR_ONE_START+")");break;case i.db.Cardinality.ZERO_OR_MORE:l.attr("marker-start","url("+h+"#"+M.ERMarkers.ZERO_OR_MORE_START+")");break;case i.db.Cardinality.ONE_OR_MORE:l.attr("marker-start","url("+h+"#"+M.ERMarkers.ONE_OR_MORE_START+")");break;case i.db.Cardinality.ONLY_ONE:l.attr("marker-start","url("+h+"#"+M.ERMarkers.ONLY_ONE_START+")");break;case i.db.Cardinality.MD_PARENT:l.attr("marker-start","url("+h+"#"+M.ERMarkers.MD_PARENT_START+")")}const d=l.node().getTotalLength(),u=l.node().getPointAtLength(.5*d),y="rel"+P,p=e.roleA.split(/<br ?\/>/g),_=t.append("text").classed("er relationshipLabel",!0).attr("id",y).attr("x",u.x).attr("y",u.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",(0,n.D7)().fontFamily).style("font-size",I.fontSize+"px");if(1==p.length)_.text(e.roleA);else{const t=.5*-(p.length-1);p.forEach(((e,r)=>{_.append("tspan").attr("x",u.x).attr("dy","".concat(0===r?t:1,"em")).text(e)}))}const f=_.node().getBBox();t.insert("rect","#"+y).classed("er relationshipLabelBox",!0).attr("x",u.x-f.width/2).attr("y",u.y-f.height/2).attr("width",f.width).attr("height",f.height)}),"drawRelationshipFromLayout"),Z=(0,n.K2)((function(t,e,r,c){I=(0,n.D7)().er,n.Rm.info("Drawing ER diagram");const l=(0,n.D7)().securityLevel;let h;"sandbox"===l&&(h=(0,s.Ltv)("#i"+e));const d=("sandbox"===l?(0,s.Ltv)(h.nodes()[0].contentDocument.body):(0,s.Ltv)("body")).select("[id='".concat(e,"']"));let u;M.insertMarkers(d,I),u=new i.T({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:I.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));const y=L(d,c.db.getEntities(),u),p=B(c.db.getRelationships(),u);(0,o.Zp)(u),K(d,u),p.forEach((function(t){Y(d,t,u,y,c)}));const _=I.diagramPadding;a._K.insertTitle(d,"entityTitleText",I.titleTopMargin,c.db.getDiagramTitle());const f=d.node().getBBox(),g=f.width+2*_,E=f.height+2*_;(0,n.a$)(d,E,g,I.useMaxWidth),d.attr("viewBox","".concat(f.x-_," ").concat(f.y-_," ").concat(g," ").concat(E))}),"draw"),$="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function F(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=t.replace(w,"");return"".concat(z(e)).concat(z(r)).concat(_(t,$))}function z(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.length>0?"".concat(t,"-"):""}(0,n.K2)(F,"generateId"),(0,n.K2)(z,"strWithHyphen");var W={parser:g,db:T,renderer:{setConf:S,draw:Z},styles:(0,n.K2)((t=>"\n  .entityBox {\n    fill: ".concat(t.mainBkg,";\n    stroke: ").concat(t.nodeBorder,";\n  }\n\n  .attributeBoxOdd {\n    fill: ").concat(t.attributeBackgroundColorOdd,";\n    stroke: ").concat(t.nodeBorder,";\n  }\n\n  .attributeBoxEven {\n    fill:  ").concat(t.attributeBackgroundColorEven,";\n    stroke: ").concat(t.nodeBorder,";\n  }\n\n  .relationshipLabelBox {\n    fill: ").concat(t.tertiaryColor,";\n    opacity: 0.7;\n    background-color: ").concat(t.tertiaryColor,";\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n    .relationshipLine {\n      stroke: ").concat(t.lineColor,";\n    }\n\n  .entityTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(t.textColor,";\n  }    \n  #MD_PARENT_START {\n    fill: #f5f5f5 !important;\n    stroke: ").concat(t.lineColor," !important;\n    stroke-width: 1;\n  }\n  #MD_PARENT_END {\n    fill: #f5f5f5 !important;\n    stroke: ").concat(t.lineColor," !important;\n    stroke-width: 1;\n  }\n  \n")),"getStyles")}}}]);
//# sourceMappingURL=536.1711352f.chunk.js.map