"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"Implementation architecture",sidebar_label:"Implementation architecture"},l=void 0,o={unversionedId:"operations/implementation_architecture",id:"operations/implementation_architecture",title:"Implementation architecture",description:"1 Statefulset for each rack",source:"@site/docs/5_operations/0_implementation_architecture.md",sourceDirName:"5_operations",slug:"/operations/implementation_architecture",permalink:"/casskop/docs/operations/implementation_architecture",draft:!1,editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/5_operations/0_implementation_architecture.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Implementation architecture",sidebar_label:"Implementation architecture"},sidebar:"docs",previous:{title:"CassandraCluster Status",permalink:"/casskop/docs/configuration_deployment/cassandra_cluster_status"},next:{title:"Cluster Operations",permalink:"/casskop/docs/operations/cluster_operations"}},s={},c=[{value:"1 Statefulset for each rack",id:"1-statefulset-for-each-rack",level:2},{value:"Sequences",id:"sequences",level:2},{value:"Naming convention of created objects",id:"naming-convention-of-created-objects",level:2},{value:"List of resources created as part of the Cassandra cluster",id:"list-of-resources-created-as-part-of-the-cassandra-cluster",level:3}],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-statefulset-for-each-rack"},"1 Statefulset for each rack"),(0,r.kt)("p",null,"CassKop will create a dedicated statefulset and service for each couple ",(0,r.kt)("inlineCode",{parentName:"p"},"dc-rack")," defined in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"topology"),"section. This is done to ensure we'll always have the same amounts of cassandra nodes in each rack for a\nspecified DC."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://www.plantuml.com/plantuml/proxy?src=https://raw.github.com/cscetbon/casskop/master/documentation/uml/architecture.puml",alt:"architecture"})),(0,r.kt)("h2",{id:"sequences"},"Sequences"),(0,r.kt)("p",null,"CassKop will works in sequence for each DC-Rack it has created which are different statefulsets kubernetes objects.\nEach time we request a change on the cassandracluster CRD which implies rollingUpdate of the statefulset, CassKop will\nperform the update on the first dc-rack."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CassKop will then wait for the operation to complete before starting the upgrade on the next dc-rack!!")),(0,r.kt)("p",null,"If you play with ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.topology.dc[].rack[].rollingPartition")," with value greater than 0, then the rolling update of the rack\nwon't end and CassKop won't update the next one. In order to allow a statefulset to upgrade completely the rollingPartition must be set to 0 (default)."),(0,r.kt)("h2",{id:"naming-convention-of-created-objects"},"Naming convention of created objects"),(0,r.kt)("p",null,"When declaring a new ",(0,r.kt)("inlineCode",{parentName:"p"},"CassandraCluster"),", we need to specify its Name, and all its configuration."),(0,r.kt)("p",null,"Here is an excerpt of a CassandraCluster CRD definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "db.orange.com/v2"\nkind: "CassandraCluster"\nmetadata:\n  name: cassandra-demo\n  labels:\n    cluster: optional-label\nspec:\n  ...\n  nodesPerRacks: 3\n  \n  topology:\n    dc:\n      - name: dc1\n        labels:\n          location.myorg.com/site : mts\n        rack:\n          - name: rack1\n            labels:\n              location.myorg.com/street : street1\n          - name: rack2\n            labels:\n              location.myorg.com/street : street2\n      - name: dc2\n        nodesPerRacks: 4\n        labels:\n          location.myorg.com/site : mts\n        rack:\n          - name: rack1\n            labels:\n              location.myorg.com/street : street3\n')),(0,r.kt)("p",null,"A complete example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cscetbon/casskop/config/samples/cassandracluster-pic.yaml"},"here")),(0,r.kt)("p",null,"Kubernetes objects created by CassKop are named according to :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<CassandraClusterName>-<DCName>-<RackName>"))),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"All elements must be in lower case according to Kubernetes DNS naming constraints")),(0,r.kt)("h3",{id:"list-of-resources-created-as-part-of-the-cassandra-cluster"},"List of resources created as part of the Cassandra cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cluster-name>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PodDisruptionBudget: this is checked by Kubernetes and by CassKop and allows only 1 pod disrupted\non the whole cluster. CassKop won't update statefulset in case there is a disruption."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cluster-name>-<dc-name>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/#headless-services"},"Headless service")," at dc level\nused as client applications entry point to contact all nodes in a Cassandra DC."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cluster-name>-<dc-name>-<rack-name>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Statefulset which is in charge of managing Cassandra Pods for dc-name and rack-name",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Service headless used for Seeds discovery"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cluster-name>-<dc-name>-<rack-name>-<idx>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pods Names in the Statefulset for dc-name and rack-name with ordinal index."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-<cluster-name>-<dc-name>-<rack-name>-<idx>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PersistentVolumeClaim representing the data for the associated Cassandra pod."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cluster-name>-<dc-name>-<rack-name>-exporter-jmx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Service Name for the exporter JMX for dc-name and rack-name"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cluster-name>"))),(0,r.kt)("p",null,"With the previous example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The CassandraCluster name is ",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo")),(0,r.kt)("li",{parentName:"ul"},"the first DC is named ",(0,r.kt)("inlineCode",{parentName:"li"},"dc1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the first rack is named ",(0,r.kt)("inlineCode",{parentName:"li"},"rack1")),(0,r.kt)("li",{parentName:"ul"},"the second rack is named ",(0,r.kt)("inlineCode",{parentName:"li"},"rack2")))),(0,r.kt)("li",{parentName:"ul"},"the second DC is named ",(0,r.kt)("inlineCode",{parentName:"li"},"dc2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the first rack is named ",(0,r.kt)("inlineCode",{parentName:"li"},"rack1"))))),(0,r.kt)("p",null,"Example for DC ",(0,r.kt)("inlineCode",{parentName:"p"},"dc1-rack1")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the statefulsets is named : ",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc1-rack1"),",",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc1-rack2"),",",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc2-rack1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the statefulset Pods name will add the ordinal number suffix :\n",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc1-rack1-0"),",..,",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc1-rack1-n")," for each dc-rack"))),(0,r.kt)("li",{parentName:"ul"},"The services will be names : ",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc2")),(0,r.kt)("li",{parentName:"ul"},"the associated service for Prometheus metrics export will be named :\n",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc1-exporter-jmx"),",",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo-dc2-exporter-jmx"),"  "),(0,r.kt)("li",{parentName:"ul"},"the PVC (Persistent Volume Claim) of each pod will be named ",(0,r.kt)("strong",{parentName:"li"},"data-${podName}")," ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"data-cassandra-demo-dc1-rack1-0"),"\nfor each dc-rack"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"},"PodDisruptionBudget (PDB)")," will be named :\n",(0,r.kt)("inlineCode",{parentName:"li"},"cassandra-demo")," and will target all pods of the cluster")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"usually the PDB is only used when dealing with pod eviction (draining a kubernetes node). But CassKop\nalso checks the PDB to know if it is allowed to make some actions on the cluster (restart Pod, apply changes..). If\nthe PDB won't allow CassKop to make the change, it will wait until the PDB rule is satisfied. (We won't be able\nto make any change on the cluster, but it cassandra will continue to work underneath).")))}m.isMDXComponent=!0}}]);