"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[222],{83314:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(51387);const i=function(e){return(0,r.A)(e,4)}},85222:(e,n,t)=>{t.r(n),t.d(n,{render:()=>k});var r=t(89379),i=t(79895),o=t(35155),a=(t(73273),t(15713),t(32970)),d=(t(45297),t(8862),t(53072)),s=t(70062),c=t(6772),l=t(83314),g=t(18293);t(99330);function f(e){var n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:u(e),edges:h(e)};return c.A(e.graph())||(n.value=l.A(e.graph())),n}function u(e){return g.A(e.nodes(),(function(n){var t=e.node(n),r=e.parent(n),i={v:n};return c.A(t)||(i.value=t),c.A(r)||(i.parent=r),i}))}function h(e){return g.A(e.edges(),(function(n){var t=e.edge(n),r={v:n.v,w:n.w};return c.A(n.name)||(r.name=n.name),c.A(t)||(r.value=t),r}))}var p=t(30772),m=new Map,w=new Map,v=new Map,R=(0,d.K2)((()=>{w.clear(),v.clear(),m.clear()}),"clear"),y=(0,d.K2)(((e,n)=>{const t=w.get(n)||[];return d.Rm.trace("In isDescendant",n," ",e," = ",t.includes(e)),t.includes(e)}),"isDescendant"),X=(0,d.K2)(((e,n)=>{const t=w.get(n)||[];return d.Rm.info("Descendants of ",n," is ",t),d.Rm.info("Edge is ",e),e.v!==n&&e.w!==n&&(t?t.includes(e.v)||y(e.v,n)||y(e.w,n)||t.includes(e.w):(d.Rm.debug("Tilt, ",n,",not in descendants"),!1))}),"edgeInCluster"),b=(0,d.K2)(((e,n,t,r)=>{d.Rm.warn("Copying children of ",e,"root",r,"data",n.node(e),r);const i=n.children(e)||[];e!==r&&i.push(e),d.Rm.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(n.children(i).length>0)b(i,n,t,r);else{const o=n.node(i);d.Rm.info("cp ",i," to ",r," with parent ",e),t.setNode(i,o),r!==n.parent(i)&&(d.Rm.warn("Setting parent",i,n.parent(i)),t.setParent(i,n.parent(i))),e!==r&&i!==e?(d.Rm.debug("Setting parent",i,e),t.setParent(i,e)):(d.Rm.info("In copy ",e,"root",r,"data",n.node(e),r),d.Rm.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const a=n.edges(i);d.Rm.debug("Copying Edges",a),a.forEach((i=>{d.Rm.info("Edge",i);const o=n.edge(i.v,i.w,i.name);d.Rm.info("Edge data",o,r);try{X(i,r)?(d.Rm.info("Copying as ",i.v,i.w,o,i.name),t.setEdge(i.v,i.w,o,i.name),d.Rm.info("newGraph edges ",t.edges(),t.edge(t.edges()[0]))):d.Rm.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(a){d.Rm.error(a)}}))}d.Rm.debug("Removing node",i),n.removeNode(i)}))}),"copy"),E=(0,d.K2)(((e,n)=>{const t=n.children(e);let r=[...t];for(const i of t)v.set(i,e),r=[...r,...E(i,n)];return r}),"extractDescendants"),N=(0,d.K2)(((e,n,t)=>{const r=e.edges().filter((e=>e.v===n||e.w===n)),i=e.edges().filter((e=>e.v===t||e.w===t)),o=r.map((e=>({v:e.v===n?t:e.v,w:e.w===n?n:e.w}))),a=i.map((e=>({v:e.v,w:e.w})));return o.filter((e=>a.some((n=>e.v===n.v&&e.w===n.w))))}),"findCommonEdges"),C=(0,d.K2)(((e,n,t)=>{const r=n.children(e);if(d.Rm.trace("Searching children of id ",e,r),r.length<1)return e;let i;for(const o of r){const e=C(o,n,t),r=N(n,t,e);if(e){if(!(r.length>0))return e;i=e}}return i}),"findNonClusterChild"),x=(0,d.K2)((e=>m.has(e)&&m.get(e).externalConnections&&m.has(e)?m.get(e).id:e),"getAnchorId"),I=(0,d.K2)(((e,n)=>{if(!e||n>10)d.Rm.debug("Opting out, no graph ");else{d.Rm.debug("Opting in, graph "),e.nodes().forEach((function(n){e.children(n).length>0&&(d.Rm.warn("Cluster identified",n," Replacement id in edges: ",C(n,e,n)),w.set(n,E(n,e)),m.set(n,{id:C(n,e,n),clusterData:e.node(n)}))})),e.nodes().forEach((function(n){const t=e.children(n),r=e.edges();t.length>0?(d.Rm.debug("Cluster identified",n,w),r.forEach((e=>{y(e.v,n)^y(e.w,n)&&(d.Rm.warn("Edge: ",e," leaves cluster ",n),d.Rm.warn("Descendants of XXX ",n,": ",w.get(n)),m.get(n).externalConnections=!0)}))):d.Rm.debug("Not a cluster ",n,w)}));for(let n of m.keys()){const t=m.get(n).id,r=e.parent(t);r!==n&&m.has(r)&&!m.get(r).externalConnections&&(m.get(n).id=r)}e.edges().forEach((function(n){const t=e.edge(n);d.Rm.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),d.Rm.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let r=n.v,i=n.w;if(d.Rm.warn("Fix XXX",m,"ids:",n.v,n.w,"Translating: ",m.get(n.v)," --- ",m.get(n.w)),m.get(n.v)||m.get(n.w)){if(d.Rm.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=x(n.v),i=x(n.w),e.removeEdge(n.v,n.w,n.name),r!==n.v){const i=e.parent(r);m.get(i).externalConnections=!0,t.fromCluster=n.v}if(i!==n.w){const r=e.parent(i);m.get(r).externalConnections=!0,t.toCluster=n.w}d.Rm.warn("Fix Replacing with XXX",r,i,n.name),e.setEdge(r,i,t,n.name)}})),d.Rm.warn("Adjusted Graph",f(e)),S(e,0),d.Rm.trace(m)}}),"adjustClustersAndEdges"),S=(0,d.K2)(((e,n)=>{if(d.Rm.warn("extractor - ",n,f(e),e.children("D")),n>10)return void d.Rm.error("Bailing out");let t=e.nodes(),r=!1;for(const o of t){const n=e.children(o);r=r||n.length>0}if(r){d.Rm.debug("Nodes = ",t,n);for(const r of t)if(d.Rm.debug("Extracting node",r,m,m.has(r)&&!m.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",n),m.has(r))if(!m.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){var i;d.Rm.warn("Cluster without external connections, without a parent and with children",r,n);let t="TB"===e.graph().rankdir?"LR":"TB";null!==(i=m.get(r))&&void 0!==i&&null!==(i=i.clusterData)&&void 0!==i&&i.dir&&(t=m.get(r).clusterData.dir,d.Rm.warn("Fixing dir",m.get(r).clusterData.dir,t));const o=new p.T({multigraph:!0,compound:!0}).setGraph({rankdir:t,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));d.Rm.warn("Old graph before copy",f(e)),b(r,e,o,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:m.get(r).clusterData,label:m.get(r).label,graph:o}),d.Rm.warn("New graph after copy node: (",r,")",f(o)),d.Rm.debug("Old graph after copy",f(e))}else d.Rm.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!m.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),n),d.Rm.debug(m);else d.Rm.debug("Not a cluster",r,n);t=e.nodes(),d.Rm.warn("New list of nodes",t);for(const r of t){const t=e.node(r);d.Rm.warn(" Now next level",r,t),null!==t&&void 0!==t&&t.clusterNode&&S(t.graph,n+1)}}else d.Rm.debug("Done, no node has children",e.nodes())}),"extractor"),A=(0,d.K2)(((e,n)=>{if(0===n.length)return[];let t=Object.assign([],n);return n.forEach((n=>{const r=e.children(n),i=A(e,r);t=[...t,...i]})),t}),"sorter"),D=(0,d.K2)((e=>A(e,e.children())),"sortNodesByHierarchy"),O=(0,d.K2)((async(e,n,t,c,l,g)=>{d.Rm.warn("Graph in recursive render:XAX",f(n),l);const u=n.graph().rankdir;d.Rm.trace("Dir in recursive render - dir:",u);const h=e.insert("g").attr("class","root");n.nodes()?d.Rm.info("Recursive render XXX",n.nodes()):d.Rm.info("No nodes found for",n),n.edges().length>0&&d.Rm.info("Recursive edges",n.edge(n.edges()[0]));const p=h.insert("g").attr("class","clusters"),w=h.insert("g").attr("class","edgePaths"),v=h.insert("g").attr("class","edgeLabels"),R=h.insert("g").attr("class","nodes");await Promise.all(n.nodes().map((async function(e){const i=n.node(e);if(void 0!==l){const t=JSON.parse(JSON.stringify(l.clusterData));d.Rm.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",t.height,"\nParent cluster",l.height),n.setNode(l.id,t),n.parent(e)||(d.Rm.trace("Setting parent",e,l.id),n.setParent(e,l.id,t))}if(d.Rm.info("(Insert) Node XXX"+e+": "+JSON.stringify(n.node(e))),null!==i&&void 0!==i&&i.clusterNode){d.Rm.info("Cluster identified XBX",e,i.width,n.node(e));const{ranksep:a,nodesep:s}=n.graph();i.graph.setGraph((0,r.A)((0,r.A)({},i.graph.graph()),{},{ranksep:a+25,nodesep:s}));const l=await O(R,i.graph,t,c,n.node(e),g),f=l.elem;(0,o.lC)(i,f),i.diff=l.diff||0,d.Rm.info("New compound node after recursive render XAX",e,"width",i.width,"height",i.height),(0,o.U7)(f,i)}else n.children(e).length>0?(d.Rm.trace("Cluster - the non recursive path XBX",e,i.id,i,i.width,"Graph:",n),d.Rm.trace(C(i.id,n)),m.set(i.id,{id:C(i.id,n),node:i})):(d.Rm.trace("Node - the non recursive path XAX",e,R,n.node(e),u),await(0,o.on)(R,n.node(e),{config:g,dir:u}))})));const y=(0,d.K2)((async()=>{const e=n.edges().map((async function(e){const t=n.edge(e.v,e.w,e.name);d.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),d.Rm.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(n.edge(e))),d.Rm.info("Fix",m,"ids:",e.v,e.w,"Translating: ",m.get(e.v),m.get(e.w)),await(0,i.jP)(v,t)}));await Promise.all(e)}),"processEdges");await y(),d.Rm.info("Graph before layout:",JSON.stringify(f(n))),d.Rm.info("############################################# XXX"),d.Rm.info("###                Layout                 ### XXX"),d.Rm.info("############################################# XXX"),(0,s.Zp)(n),d.Rm.info("Graph after layout:",JSON.stringify(f(n)));let X=0,{subGraphTitleTotalMargin:b}=(0,a.O)(g);return await Promise.all(D(n).map((async function(e){const t=n.node(e);if(d.Rm.info("Position XBX => "+e+": ("+t.x,","+t.y,") width: ",t.width," height: ",t.height),null!==t&&void 0!==t&&t.clusterNode)t.y+=b,d.Rm.info("A tainted cluster node XBX1",e,t.id,t.width,t.height,t.x,t.y,n.parent(e)),m.get(t.id).node=t,(0,o.U_)(t);else if(n.children(e).length>0){var r;d.Rm.info("A pure cluster node XBX1",e,t.id,t.x,t.y,t.width,t.height,n.parent(e)),t.height+=b,n.node(t.parentId);const i=(null===t||void 0===t?void 0:t.padding)/2||0,a=(null===t||void 0===t||null===(r=t.labelBBox)||void 0===r?void 0:r.height)||0,s=a-i||0;d.Rm.debug("OffsetY",s,"labelHeight",a,"halfPadding",i),await(0,o.U)(p,t),m.get(t.id).node=t}else{const e=n.node(t.parentId);t.y+=b/2,d.Rm.info("A regular node XBX1 - using the padding",t.id,"parent",t.parentId,t.width,t.height,t.x,t.y,"offsetY",t.offsetY,"parent",e,null===e||void 0===e?void 0:e.offsetY,t),(0,o.U_)(t)}}))),n.edges().forEach((function(e){const r=n.edge(e);d.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r),r),r.points.forEach((e=>e.y+=b/2));const o=n.node(e.v);var a=n.node(e.w);const s=(0,i.Jo)(w,r,m,t,o,a,c);(0,i.T_)(r,s)})),n.nodes().forEach((function(e){const t=n.node(e);d.Rm.info(e,t.type,t.diff),t.isGroup&&(X=t.diff)})),d.Rm.warn("Returning from recursive render XAX",h,X),{elem:h,diff:X}}),"recursiveRender"),k=(0,d.K2)((async(e,n)=>{var t,a,s,c;const l=new p.T({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:(null===(t=e.config)||void 0===t?void 0:t.nodeSpacing)||(null===(a=e.config)||void 0===a||null===(a=a.flowchart)||void 0===a?void 0:a.nodeSpacing)||e.nodeSpacing,ranksep:(null===(s=e.config)||void 0===s?void 0:s.rankSpacing)||(null===(c=e.config)||void 0===c||null===(c=c.flowchart)||void 0===c?void 0:c.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),g=n.select("g");(0,i.g0)(g,e.markers,e.type,e.diagramId),(0,o.gh)(),(0,i.IU)(),(0,o.IU)(),R(),e.nodes.forEach((e=>{l.setNode(e.id,(0,r.A)({},e)),e.parentId&&l.setParent(e.id,e.parentId)})),d.Rm.debug("Edges:",e.edges),e.edges.forEach((e=>{if(e.start===e.end){const n=e.start,t=n+"---"+n+"---1",r=n+"---"+n+"---2",i=l.node(n);l.setNode(t,{domId:t,id:t,parentId:i.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),l.setParent(t,i.parentId),l.setNode(r,{domId:r,id:r,parentId:i.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),l.setParent(r,i.parentId);const o=structuredClone(e),a=structuredClone(e),d=structuredClone(e);o.label="",o.arrowTypeEnd="none",o.id=n+"-cyclic-special-1",a.arrowTypeEnd="none",a.id=n+"-cyclic-special-mid",d.label="",i.isGroup&&(o.fromCluster=n,d.toCluster=n),d.id=n+"-cyclic-special-2",l.setEdge(n,t,o,n+"-cyclic-special-0"),l.setEdge(t,r,a,n+"-cyclic-special-1"),l.setEdge(r,n,d,n+"-cyc<lic-special-2")}else l.setEdge(e.start,e.end,(0,r.A)({},e),e.id)})),d.Rm.warn("Graph at first:",JSON.stringify(f(l))),I(l),d.Rm.warn("Graph after XAX:",JSON.stringify(f(l)));const u=(0,d.D7)();await O(g,l,e.type,e.diagramId,void 0,u)}),"render")}}]);
//# sourceMappingURL=222.9f297af5.chunk.js.map