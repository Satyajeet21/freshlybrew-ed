"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[878],{43878:(t,e,n)=>{n.d(e,{diagram:()=>x});var i=n(51599),s=n(35155),o=(n(73273),n(32970),n(45297),n(8862),n(54687)),r=n(53072),a=n(28194),c=n(86362),l=n(85554),h=function(){var t=(0,r.K2)((function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n}),"o"),e=[1,4],n=[1,13],i=[1,12],s=[1,15],o=[1,16],a=[1,20],c=[1,19],l=[6,7,8],h=[1,26],u=[1,24],d=[1,25],g=[6,7,11],p=[1,31],y=[6,7,11,24],f=[1,6,13,16,17,20,23],m=[1,35],_=[1,36],b=[1,6,7,11,13,16,17,20,23],k=[1,38],v={trace:(0,r.K2)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:(0,r.K2)((function(t,e,n,i,s,o,r){var a=o.length-1;switch(s){case 6:case 7:return i;case 8:i.getLogger().trace("Stop NL ");break;case 9:i.getLogger().trace("Stop EOF ");break;case 11:i.getLogger().trace("Stop NL2 ");break;case 12:i.getLogger().trace("Stop EOF2 ");break;case 15:i.getLogger().info("Node: ",o[a-1].id),i.addNode(o[a-2].length,o[a-1].id,o[a-1].descr,o[a-1].type,o[a]);break;case 16:i.getLogger().info("Node: ",o[a].id),i.addNode(o[a-1].length,o[a].id,o[a].descr,o[a].type);break;case 17:i.getLogger().trace("Icon: ",o[a]),i.decorateNode({icon:o[a]});break;case 18:case 23:i.decorateNode({class:o[a]});break;case 19:i.getLogger().trace("SPACELIST");break;case 20:i.getLogger().trace("Node: ",o[a-1].id),i.addNode(0,o[a-1].id,o[a-1].descr,o[a-1].type,o[a]);break;case 21:i.getLogger().trace("Node: ",o[a].id),i.addNode(0,o[a].id,o[a].descr,o[a].type);break;case 22:i.decorateNode({icon:o[a]});break;case 27:i.getLogger().trace("node found ..",o[a-2]),this.$={id:o[a-1],descr:o[a-1],type:i.getType(o[a-2],o[a])};break;case 28:this.$={id:o[a],descr:o[a],type:0};break;case 29:i.getLogger().trace("node found ..",o[a-3]),this.$={id:o[a-3],descr:o[a-1],type:i.getType(o[a-2],o[a])};break;case 30:this.$=o[a-1]+o[a];break;case 31:this.$=o[a]}}),"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:e},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:e},{6:n,7:[1,10],9:9,12:11,13:i,14:14,16:s,17:o,18:17,19:18,20:a,23:c},t(l,[2,3]),{1:[2,2]},t(l,[2,4]),t(l,[2,5]),{1:[2,6],6:n,12:21,13:i,14:14,16:s,17:o,18:17,19:18,20:a,23:c},{6:n,9:22,12:11,13:i,14:14,16:s,17:o,18:17,19:18,20:a,23:c},{6:h,7:u,10:23,11:d},t(g,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:a,23:c}),t(g,[2,19]),t(g,[2,21],{15:30,24:p}),t(g,[2,22]),t(g,[2,23]),t(y,[2,25]),t(y,[2,26]),t(y,[2,28],{20:[1,32]}),{21:[1,33]},{6:h,7:u,10:34,11:d},{1:[2,7],6:n,12:21,13:i,14:14,16:s,17:o,18:17,19:18,20:a,23:c},t(f,[2,14],{7:m,11:_}),t(b,[2,8]),t(b,[2,9]),t(b,[2,10]),t(g,[2,16],{15:37,24:p}),t(g,[2,17]),t(g,[2,18]),t(g,[2,20],{24:k}),t(y,[2,31]),{21:[1,39]},{22:[1,40]},t(f,[2,13],{7:m,11:_}),t(b,[2,11]),t(b,[2,12]),t(g,[2,15],{24:k}),t(y,[2,30]),{22:[1,41]},t(y,[2,27]),t(y,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:(0,r.K2)((function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)}),"parseError"),parse:(0,r.K2)((function(t){var e=this,n=[0],i=[],s=[null],o=[],a=this.table,c="",l=0,h=0,u=0,d=o.slice.call(arguments,1),g=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);g.setInput(t,p.yy),p.yy.lexer=g,p.yy.parser=this,"undefined"==typeof g.yylloc&&(g.yylloc={});var f=g.yylloc;o.push(f);var m=g.options&&g.options.ranges;function _(){var t;return"number"!==typeof(t=i.pop()||g.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,r.K2)((function(t){n.length=n.length-2*t,s.length=s.length-t,o.length=o.length-t}),"popStack"),(0,r.K2)(_,"lex");for(var b,k,v,E,S,N,x,D,L,I={};;){if(v=n[n.length-1],this.defaultActions[v]?E=this.defaultActions[v]:(null!==b&&"undefined"!=typeof b||(b=_()),E=a[v]&&a[v][b]),"undefined"===typeof E||!E.length||!E[0]){var C="";for(N in L=[],a[v])this.terminals_[N]&&N>2&&L.push("'"+this.terminals_[N]+"'");C=g.showPosition?"Parse error on line "+(l+1)+":\n"+g.showPosition()+"\nExpecting "+L.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(C,{text:g.match,token:this.terminals_[b]||b,line:g.yylineno,loc:f,expected:L})}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+b);switch(E[0]){case 1:n.push(b),s.push(g.yytext),o.push(g.yylloc),n.push(E[1]),b=null,k?(b=k,k=null):(h=g.yyleng,c=g.yytext,l=g.yylineno,f=g.yylloc,u>0&&u--);break;case 2:if(x=this.productions_[E[1]][1],I.$=s[s.length-x],I._$={first_line:o[o.length-(x||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(x||1)].first_column,last_column:o[o.length-1].last_column},m&&(I._$.range=[o[o.length-(x||1)].range[0],o[o.length-1].range[1]]),"undefined"!==typeof(S=this.performAction.apply(I,[c,h,l,p.yy,E[1],s,o].concat(d))))return S;x&&(n=n.slice(0,-1*x*2),s=s.slice(0,-1*x),o=o.slice(0,-1*x)),n.push(this.productions_[E[1]][0]),s.push(I.$),o.push(I._$),D=a[n[n.length-2]][n[n.length-1]],n.push(D);break;case 3:return!0}}return!0}),"parse")},E=function(){return{EOF:1,parseError:(0,r.K2)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,r.K2)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,r.K2)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,r.K2)((function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,r.K2)((function(){return this._more=!0,this}),"more"),reject:(0,r.K2)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,r.K2)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,r.K2)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,r.K2)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,r.K2)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,r.K2)((function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var o in s)this[o]=s[o];return!1}return!1}),"test_match"),next:(0,r.K2)((function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),o=0;o<s.length;o++)if((n=this._input.match(this.rules[s[o]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=o,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[o])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,r.K2)((function(){var t=this.next();return t||this.lex()}),"lex"),begin:(0,r.K2)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,r.K2)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,r.K2)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,r.K2)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,r.K2)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,r.K2)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,r.K2)((function(t,e,n,i){switch(n){case 0:return this.pushState("shapeData"),e.yytext="",24;case 1:return this.pushState("shapeDataStr"),24;case 2:return this.popState(),24;case 3:const n=/\n\s*/g;return e.yytext=e.yytext.replace(n,"<br/>"),24;case 4:return 24;case 5:case 10:case 29:case 32:this.popState();break;case 6:return t.getLogger().trace("Found comment",e.yytext),6;case 7:return 8;case 8:this.begin("CLASS");break;case 9:return this.popState(),17;case 11:t.getLogger().trace("Begin icon"),this.begin("ICON");break;case 12:return t.getLogger().trace("SPACELINE"),6;case 13:return 7;case 14:return 16;case 15:t.getLogger().trace("end icon"),this.popState();break;case 16:return t.getLogger().trace("Exploding node"),this.begin("NODE"),20;case 17:return t.getLogger().trace("Cloud"),this.begin("NODE"),20;case 18:return t.getLogger().trace("Explosion Bang"),this.begin("NODE"),20;case 19:return t.getLogger().trace("Cloud Bang"),this.begin("NODE"),20;case 20:case 21:case 22:case 23:return this.begin("NODE"),20;case 24:return 13;case 25:return 23;case 26:return 11;case 27:this.begin("NSTR2");break;case 28:return"NODE_DESCR";case 30:t.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 31:return t.getLogger().trace("description:",e.yytext),"NODE_DESCR";case 33:return this.popState(),t.getLogger().trace("node end ))"),"NODE_DEND";case 34:return this.popState(),t.getLogger().trace("node end )"),"NODE_DEND";case 35:return this.popState(),t.getLogger().trace("node end ...",e.yytext),"NODE_DEND";case 36:case 39:case 40:return this.popState(),t.getLogger().trace("node end (("),"NODE_DEND";case 37:case 38:return this.popState(),t.getLogger().trace("node end (-"),"NODE_DEND";case 41:case 42:return t.getLogger().trace("Long description:",e.yytext),21}}),"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:!1},shapeDataStr:{rules:[2,3],inclusive:!1},shapeData:{rules:[1,4,5],inclusive:!1},CLASS:{rules:[9,10],inclusive:!1},ICON:{rules:[14,15],inclusive:!1},NSTR2:{rules:[28,29],inclusive:!1},NSTR:{rules:[31,32],inclusive:!1},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:!1},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:!0}}}}();function S(){this.yy={}}return v.lexer=E,(0,r.K2)(S,"Parser"),S.prototype=v,v.Parser=S,new S}();h.parser=h;var u=h,d=[],g=[],p=0,y={},f=(0,r.K2)((()=>{d=[],g=[],p=0,y={}}),"clear"),m=(0,r.K2)((t=>{var e;if(0===d.length)return null;const n=d[0].level;let i=null;for(let s=d.length-1;s>=0;s--)if(d[s].level!==n||i||(i=d[s]),d[s].level<n)throw new Error('Items without section detected, found section ("'+d[s].label+'")');return t===(null===(e=i)||void 0===e?void 0:e.level)?null:i}),"getSection"),_=(0,r.K2)((function(){return g}),"getSections"),b=(0,r.K2)((function(){const t=[],e=_(),n=(0,r.D7)();for(const o of e){var i;const e={id:o.id,label:(0,r.jZ)(null!==(i=o.label)&&void 0!==i?i:"",n),isGroup:!0,ticket:o.ticket,shape:"kanbanSection",level:o.level,look:n.look};t.push(e);const a=d.filter((t=>t.parentId===o.id));for(const i of a){var s;const e={id:i.id,parentId:o.id,label:(0,r.jZ)(null!==(s=i.label)&&void 0!==s?s:"",n),isGroup:!1,ticket:null===i||void 0===i?void 0:i.ticket,priority:null===i||void 0===i?void 0:i.priority,assigned:null===i||void 0===i?void 0:i.assigned,icon:null===i||void 0===i?void 0:i.icon,shape:"kanbanItem",level:i.level,rx:5,ry:5,cssStyles:["text-align: left"]};t.push(e)}}return{nodes:t,edges:[],other:{},config:(0,r.D7)()}}),"getData"),k=(0,r.K2)(((t,e,n,s,o)=>{var a,c,l,h;const u=(0,r.D7)();let y=null!==(a=null===(c=u.mindmap)||void 0===c?void 0:c.padding)&&void 0!==a?a:r.UI.mindmap.padding;switch(s){case v.ROUNDED_RECT:case v.RECT:case v.HEXAGON:y*=2}const f={id:(0,r.jZ)(e,u)||"kbn"+p++,level:t,label:(0,r.jZ)(n,u),width:null!==(l=null===(h=u.mindmap)||void 0===h?void 0:h.maxNodeWidth)&&void 0!==l?l:r.UI.mindmap.maxNodeWidth,padding:y,isGroup:!1};if(void 0!==o){let t;t=o.includes("\n")?o+"\n":"{\n"+o+"\n}";const e=(0,i.H)(t,{schema:i.r});if(e.shape&&(e.shape!==e.shape.toLowerCase()||e.shape.includes("_")))throw new Error("No such shape: ".concat(e.shape,". Shape names should be lowercase."));null!==e&&void 0!==e&&e.shape&&"kanbanItem"===e.shape&&(f.shape=null===e||void 0===e?void 0:e.shape),null!==e&&void 0!==e&&e.label&&(f.label=null===e||void 0===e?void 0:e.label),null!==e&&void 0!==e&&e.icon&&(f.icon=null===e||void 0===e?void 0:e.icon.toString()),null!==e&&void 0!==e&&e.assigned&&(f.assigned=null===e||void 0===e?void 0:e.assigned.toString()),null!==e&&void 0!==e&&e.ticket&&(f.ticket=null===e||void 0===e?void 0:e.ticket.toString()),null!==e&&void 0!==e&&e.priority&&(f.priority=null===e||void 0===e?void 0:e.priority)}const _=m(t);_?f.parentId=_.id||"kbn"+p++:g.push(f),d.push(f)}),"addNode"),v={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},E={clear:f,addNode:k,getSections:_,getData:b,nodeType:v,getType:(0,r.K2)(((t,e)=>{switch(r.Rm.debug("In get type",t,e),t){case"[":return v.RECT;case"(":return")"===e?v.ROUNDED_RECT:v.CLOUD;case"((":return v.CIRCLE;case")":return v.CLOUD;case"))":return v.BANG;case"{{":return v.HEXAGON;default:return v.DEFAULT}}),"getType"),setElementForId:(0,r.K2)(((t,e)=>{y[t]=e}),"setElementForId"),decorateNode:(0,r.K2)((t=>{if(!t)return;const e=(0,r.D7)(),n=d[d.length-1];t.icon&&(n.icon=(0,r.jZ)(t.icon,e)),t.class&&(n.cssClasses=(0,r.jZ)(t.class,e))}),"decorateNode"),type2Str:(0,r.K2)((t=>{switch(t){case v.DEFAULT:return"no-border";case v.RECT:return"rect";case v.ROUNDED_RECT:return"rounded-rect";case v.CIRCLE:return"circle";case v.CLOUD:return"cloud";case v.BANG:return"bang";case v.HEXAGON:return"hexgon";default:return"no-border"}}),"type2Str"),getLogger:(0,r.K2)((()=>r.Rm),"getLogger"),getElementById:(0,r.K2)((t=>y[t]),"getElementById")},S={draw:(0,r.K2)((async(t,e,n,i)=>{var a,c,l,h;r.Rm.debug("Rendering kanban diagram\n"+t);const u=i.db.getData(),d=(0,r.D7)();d.htmlLabels=!1;const g=(0,o.D)(e),p=g.append("g");p.attr("class","sections");const y=g.append("g");y.attr("class","items");const f=u.nodes.filter((t=>t.isGroup));let m=0;const _=[];let b=25;for(const o of f){var k,v;const t=(null===d||void 0===d||null===(k=d.kanban)||void 0===k?void 0:k.sectionWidth)||200;m+=1,o.x=t*m+10*(m-1)/2,o.width=t,o.y=0,o.height=3*t,o.rx=5,o.ry=5,o.cssClasses=o.cssClasses+" section-"+m;const e=await(0,s.U)(p,o);b=Math.max(b,null===e||void 0===e||null===(v=e.labelBBox)||void 0===v?void 0:v.height),_.push(e)}let E=0;for(const o of f){var S;const t=_[E];E+=1;const e=(null===d||void 0===d||null===(S=d.kanban)||void 0===S?void 0:S.sectionWidth)||200,n=3*-e/2+b;let i=n;const r=u.nodes.filter((t=>t.parentId===o.id));for(const l of r){if(l.isGroup)throw new Error("Groups within groups are not allowed in Kanban diagrams");l.x=o.x,l.width=e-15;const t=(await(0,s.on)(y,l,{config:d})).node().getBBox();l.y=i+t.height/2,await(0,s.U_)(l),i=l.y+t.height/2+5}const a=t.cluster.select("rect"),c=Math.max(i-n+30,50)+(b-25);a.attr("height",c)}(0,r.ot)(void 0,g,null!==(a=null===(c=d.mindmap)||void 0===c?void 0:c.padding)&&void 0!==a?a:r.UI.kanban.padding,null!==(l=null===(h=d.mindmap)||void 0===h?void 0:h.useMaxWidth)&&void 0!==l?l:r.UI.kanban.useMaxWidth)}),"draw")},N=(0,r.K2)((t=>{let e="";for(let i=0;i<t.THEME_COLOR_LIMIT;i++)t["lineColor"+i]=t["lineColor"+i]||t["cScaleInv"+i],(0,a.A)(t["lineColor"+i])?t["lineColor"+i]=(0,c.A)(t["lineColor"+i],20):t["lineColor"+i]=(0,l.A)(t["lineColor"+i],20);const n=(0,r.K2)(((e,n)=>t.darkMode?(0,l.A)(e,n):(0,c.A)(e,n)),"adjuster");for(let i=0;i<t.THEME_COLOR_LIMIT;i++){const s=""+(17-3*i);e+="\n    .section-".concat(i-1," rect, .section-").concat(i-1," path, .section-").concat(i-1," circle, .section-").concat(i-1," polygon, .section-").concat(i-1," path  {\n      fill: ").concat(n(t["cScale"+i],10),";\n      stroke: ").concat(n(t["cScale"+i],10),";\n\n    }\n    .section-").concat(i-1," text {\n     fill: ").concat(t["cScaleLabel"+i],";\n    }\n    .node-icon-").concat(i-1," {\n      font-size: 40px;\n      color: ").concat(t["cScaleLabel"+i],";\n    }\n    .section-edge-").concat(i-1,"{\n      stroke: ").concat(t["cScale"+i],";\n    }\n    .edge-depth-").concat(i-1,"{\n      stroke-width: ").concat(s,";\n    }\n    .section-").concat(i-1," line {\n      stroke: ").concat(t["cScaleInv"+i]," ;\n      stroke-width: 3;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ").concat(t.background,";\n    stroke: ").concat(t.nodeBorder,";\n    stroke-width: 1px;\n  }\n\n  .kanban-ticket-link {\n    fill: ").concat(t.background,";\n    stroke: ").concat(t.nodeBorder,";\n    text-decoration: underline;\n  }\n    ")}return e}),"genSections"),x={db:E,renderer:S,parser:u,styles:(0,r.K2)((t=>"\n  .edge {\n    stroke-width: 3;\n  }\n  ".concat(N(t),"\n  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {\n    fill: ").concat(t.git0,";\n  }\n  .section-root text {\n    fill: ").concat(t.gitBranchLabel0,";\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .cluster-label, .label {\n    color: ").concat(t.textColor,";\n    fill: ").concat(t.textColor,";\n    }\n  .kanban-label {\n    dy: 1em;\n    alignment-baseline: middle;\n    text-anchor: middle;\n    dominant-baseline: middle;\n    text-align: center;\n  }\n")),"getStyles")}}}]);
//# sourceMappingURL=878.4732952d.chunk.js.map