"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8495],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),d=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=d(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(h,s(s({ref:a},l),{},{components:t})):n.createElement(h,s({ref:a},l))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4874:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const o={title:"Advanced Configuration",sidebar_label:"Advanced Configuration"},s=void 0,i={unversionedId:"configuration_deployment/advanced_configuration",id:"configuration_deployment/advanced_configuration",title:"Advanced Configuration",description:"Docker login for private registry",source:"@site/docs/3_configuration_deployment/9_advanced_configuration.md",sourceDirName:"3_configuration_deployment",slug:"/configuration_deployment/advanced_configuration",permalink:"/casskop/docs/configuration_deployment/advanced_configuration",draft:!1,editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/3_configuration_deployment/9_advanced_configuration.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Advanced Configuration",sidebar_label:"Advanced Configuration"},sidebar:"docs",previous:{title:"Sidecars",permalink:"/casskop/docs/configuration_deployment/sidecars"},next:{title:"Nodes Management",permalink:"/casskop/docs/configuration_deployment/nodes_management"}},c={},d=[{value:"Docker login for private registry",id:"docker-login-for-private-registry",level:2},{value:"Management of allowed Cassandra nodes disruption",id:"management-of-allowed-cassandra-nodes-disruption",level:2},{value:"Cross Ip Management",id:"cross-ip-management",level:2},{value:"Global mecanism",id:"global-mecanism",level:3},{value:"Ip Cross situation detection",id:"ip-cross-situation-detection",level:2}],l={toc:d},p="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"docker-login-for-private-registry"},"Docker login for private registry"),(0,r.kt)("p",null,"If you need to use a docker registry with authentication, then you will need to create a specific kubernetes secret with\nthis information.\nThen you will configure the CRD with the secret name, so that it provides the data to each Statefulset, which in\nturn propagate it to each created Pod."),(0,r.kt)("p",null,"Create the secret :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret docker-registry yoursecretname \\\n  --docker-server=yourdockerregistry\n  --docker-username=yourlogin \\\n  --docker-password=yourpass \\\n  --docker-email=yourloginemail\n")),(0,r.kt)("p",null,"Then we will add a ",(0,r.kt)("strong",{parentName:"p"},"imagePullSecrets")," parameter in the CRD definition with value the name of the\npreviously created secret. You can give several secrets :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"imagePullSecrets:\n  name: yoursecretname\n")),(0,r.kt)("h2",{id:"management-of-allowed-cassandra-nodes-disruption"},"Management of allowed Cassandra nodes disruption"),(0,r.kt)("p",null,"CassKop makes use of the kubernetes PodDisruptionBudget objetc to specify how many cassandra nodes disruption is\nallowed on the cluster. By default, we only tolerate 1 disrupted pod at a time and will prevent to makes actions if\nthere is aloready an ongling disruption on the cluster."),(0,r.kt)("p",null,"In some edge cases it can be useful to make force the operator to continue it's actions even if there is already a\ndisruption ongoing. We can tune this by updating the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.maxPodUnavailable")," parameter of the cassandracluster CRD."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"it is recommended to not touch this parameter unless you know what you are doing.")),(0,r.kt)("h2",{id:"cross-ip-management"},"Cross Ip Management"),(0,r.kt)("h3",{id:"global-mecanism"},"Global mecanism"),(0,r.kt)("p",null,"Cassandra works on IPs and not on hostname, so in a case where two cassandra cross their Ips, no Cassandra will be able to run properly and will loop on the following error :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"cassandra Exception (java.lang.RuntimeException) encountered during startup: A node with address /10.100.150.35 already exists, cancelling join. Use cassandra.replace_address if you want to replace this node.\ncassandra java.lang.RuntimeException: A node with address /10.100.150.35 already exists, cancelling join. Use cassandra.replace_address if you want to replace this node.\ncassandra     at org.apache.cassandra.service.StorageService.checkForEndpointCollision(StorageService.java:577)\ncassandra     at org.apache.cassandra.service.StorageService.prepareToJoin(StorageService.java:823)\ncassandra     at org.apache.cassandra.service.StorageService.initServer(StorageService.java:683)\ncassandra     at org.apache.cassandra.service.StorageService.initServer(StorageService.java:632)\ncassandra     at org.apache.cassandra.service.CassandraDaemon.setup(CassandraDaemon.java:388)\ncassandra     at org.apache.cassandra.service.CassandraDaemon.activate(CassandraDaemon.java:620)\ncassandra     at org.apache.cassandra.service.CassandraDaemon.main(CassandraDaemon.java:732)\ncassandra ERROR [main] 2020-02-21 08:29:44,398 CassandraDaemon.java:749 - Exception encountered during startup\ncassandra java.lang.RuntimeException: A node with address /10.100.150.35 already exists, cancelling join. Use cassandra.replace_address if you want to replace this node.\ncassandra     at org.apache.cassandra.service.StorageService.checkForEndpointCollision(StorageService.java:577) ~[apache-cassandra-3.11.4.jar:3.11.4]\ncassandra     at org.apache.cassandra.service.StorageService.prepareToJoin(StorageService.java:823) ~[apache-cassandra-3.11.4.jar:3.11.4]\ncassandra     at org.apache.cassandra.service.StorageService.initServer(StorageService.java:683) ~[apache-cassandra-3.11.4.jar:3.11.4]\ncassandra     at org.apache.cassandra.service.StorageService.initServer(StorageService.java:632) ~[apache-cassandra-3.11.4.jar:3.11.4]\ncassandra     at org.apache.cassandra.service.CassandraDaemon.setup(CassandraDaemon.java:388) [apache-cassandra-3.11.4.jar:3.11.4]\ncassandra     at org.apache.cassandra.service.CassandraDaemon.activate(CassandraDaemon.java:620) [apache-cassandra-3.11.4.jar:3.11.4]\ncassandra     at org.apache.cassandra.service.CassandraDaemon.main(CassandraDaemon.java:732) [apache-cassandra-3.11.4.jar:3.11.4]\n")),(0,r.kt)("p",null,"Following the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cscetbon/casskop/issues/170"},"issue #170"),", at least using Kubernetes and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.projectcalico.org/v3.9/getting-started/kubernetes/"},"Project Calico"),", we may fall into this issue,\nfor example using a fixed ",(0,r.kt)("a",{parentName:"p",href:"https://docs.projectcalico.org/v3.9/reference/resources/ippool"},"ip pool")," size."),(0,r.kt)("p",null,"To manage this case we introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"restartCountBeforePodDeletion")," CassandraCluster spec field which takes an ",(0,r.kt)("inlineCode",{parentName:"p"},"int32")," as value."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you set it with a value lower or equals to 0, or if you omit it, no action will be performed")),(0,r.kt)("p",null,"In setting this field, the cassandra operator will check for each ",(0,r.kt)("inlineCode",{parentName:"p"},"CassandraCluster")," if a pod is in a restart situation (based on restart count of the cassandra container inside the pod).\nIn the case where the restartCount of the pod is greater than the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"restartCountBeforePodDeletion")," field and if we are in a Ip cross situation, we will delete the pod, which will be recreated by the Statefulset.\nIn the case of Project Calico usage, this force the pod to get another available IP, which fixes our bug."),(0,r.kt)("h2",{id:"ip-cross-situation-detection"},"Ip Cross situation detection"),(0,r.kt)("p",null,"To detect that we are in a Ip cross situation, we add a new status field ",(0,r.kt)("inlineCode",{parentName:"p"},"CassandraNodeStatus")," which will maintain a cache about the map of ",(0,r.kt)("em",{parentName:"p"},"Ip node")," and his ",(0,r.kt)("em",{parentName:"p"},"hostId"),",\nfor all ready pods."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"to have more information about this status field, you can check ",(0,r.kt)("a",{parentName:"p",href:"#cassandracluster-status"},"CassandraCluster Status"))),(0,r.kt)("p",null,"So when we check pods, we perform a Jolokia call to get a map of the cluster nodes IPs with their corresponding HostId.\nIf a pod is failing with the constraints described above, we compare the hostId associated to the Pod's IP, and the hostId\nassociated to the Pod name stored into the ",(0,r.kt)("inlineCode",{parentName:"p"},"CassandraNodeStatus")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if they match, or there are no match for the pod Ip into the map returned by Jolokia, we are not in a Ip cross situation,"),(0,r.kt)("li",{parentName:"ul"},"if they mismatch, we are in a Ip cross situation.")))}u.isMDXComponent=!0}}]);