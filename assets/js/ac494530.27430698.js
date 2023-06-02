"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9543],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(a),k=o,m=u["".concat(l,".").concat(k)]||u[k]||p[k]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},851:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={title:"Operations Issues",sidebar_label:"Operations Issues"},s=void 0,c={unversionedId:"troubleshooting/operations_issues",id:"troubleshooting/operations_issues",title:"Operations Issues",description:"Operator can't perform the Action",source:"@site/docs/7_troubleshooting/1_operations_issues.md",sourceDirName:"7_troubleshooting",slug:"/troubleshooting/operations_issues",permalink:"/casskop/docs/troubleshooting/operations_issues",draft:!1,editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/7_troubleshooting/1_operations_issues.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Operations Issues",sidebar_label:"Operations Issues"},sidebar:"docs",previous:{title:"Cassandra restore",permalink:"/casskop/docs/references/cassandra_restore"},next:{title:"GKE Issues",permalink:"/casskop/docs/troubleshooting/gke_issues"}},l={},i=[{value:"Operator can&#39;t perform the Action",id:"operator-cant-perform-the-action",level:2},{value:"Can&#39;t ScaleUp",id:"cant-scaleup",level:3},{value:"Rollback ScaleUp operation",id:"rollback-scaleup-operation",level:4},{value:"Can&#39;t add new rack in new DC",id:"cant-add-new-rack-in-new-dc",level:3},{value:"Solution1: rollback adding the DC",id:"solution1-rollback-adding-the-dc",level:4},{value:"Solution2: change the topology for dc2 (remove the 3rd unschedulable rack)",id:"solution2-change-the-topology-for-dc2-remove-the-3rd-unschedulable-rack",level:4}],d={toc:i},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"operator-cant-perform-the-action"},"Operator can't perform the Action"),(0,o.kt)("p",null,"If you ask to scale up or add a new DC, or ask for more resources, CassKop will ask Kubernetes to schedule as you\nrequested.\nBut sometimes it is not possible to achieve the change because of a lack of resources (memory/cpus) or because\nconstraints can't be satisfied (Kubernetes nodes with specific labels available...)"),(0,o.kt)("p",null,"CassKop make uses of the PodDisruptionBudget to prevent CassKop to make some change on the CassandraCluster that could\nmake more than 1 Cassandra node at a time. "),(0,o.kt)("p",null,"If you have a Pod stuck in ",(0,o.kt)("strong",{parentName:"p"},"pending")," state, then you have at least 1 Pod in Disruption, and the PDB object will\nprevent you to make changes on statefulset because that mean that you will have more than 1 Cassandra down at a time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get poddisruptionbudgets\nNAME             MIN AVAILABLE   MAX UNAVAILABLE   ALLOWED DISRUPTIONS   AGE\ncassandra-demo   N/A             1                 0                     12m\n")),(0,o.kt)("p",null,"The Operator logs this line when there is disruption on the Cassandra cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-logs"},"INFO[3037] Cluster has Disruption on Pods, we wait before applying any change to statefulset  cluster=cassandra-demo dc-rack=dc1-rack1\n")),(0,o.kt)("h3",{id:"cant-scaleup"},"Can't ScaleUp"),(0,o.kt)("p",null,"In this example I ask a ScaleUp but it can't perform :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pods\nNAME                                                              READY   STATUS    RESTARTS   AGE\ncassandra-demo-dc1-rack1-0                                        1/1     Running   0          16h\ncassandra-demo-dc1-rack1-1                                        0/1     Pending   0          12m\ncassandra-demo-dc1-rack2-0                                        1/1     Running   0          16h\ncassandra-demo-dc1-rack3-0                                        1/1     Running   0          16h\n")),(0,o.kt)("p",null,"the cassandra-demo-dc1-rack1-1 pod is Pending and can't be scheduled."),(0,o.kt)("p",null,"If we looked at the pod status we will see this message :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Warning  FailedScheduling   51s (x17 over 14m)    default-scheduler   0/6 nodes are available: 4 Insufficient cpu, 4 node(s) didn't match node selector.\n")),(0,o.kt)("p",null,"Kubernetes can't find any Pod with sufficient cpu and matching kubernetes nodes labels we asked in the topology section."),(0,o.kt)("p",null,"To fix this, we can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"reduce memory/cpu limits"),(0,o.kt)("li",{parentName:"ul"},"add more kubernetes nodes that will satisfied our requirements."),(0,o.kt)("li",{parentName:"ul"},"rollback the scaleUp Operation")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"At this point, CassKop will wait indefinitely to the case to be Fix")),(0,o.kt)("h4",{id:"rollback-scaleup-operation"},"Rollback ScaleUp operation"),(0,o.kt)("p",null,"In order to rollback the operation, we need to revert the change on the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodesPerRacks")," parameter."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is not sufficient")),(0,o.kt)("p",null,"Because CassKop is actually performing another action on the cluster (ScaleUp) we can't scheduled a new operation to\nrollback since it has not finished.\nWe introduced a new parameter in the CRD to allow such changes when all the pods can't be scheduled:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Spec.unlockNextOperation: true"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"\ud83d\udea9 Warning")," This is not a regular parameter and it must be used with very good care!!."))),(0,o.kt)("p",null,"By adding this parameter in our cluster definition, CassKop will allow to trigger a new operation."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Once CassKop has scheduled the new operation, it will reset this parameter to the default ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," value.\nvalue. If you need more operation, you will need to reset the parameter to force another Operation.\nKeep in mind that CassKop is mean to do only 1 operation at a time.")),(0,o.kt)("p",null,"If this is not already done, you can now rollback the scaleUp updating ",(0,o.kt)("inlineCode",{parentName:"p"},"nodesPerRacks: 1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'WARN[3348] ScaleDown detected on a pending Pod. we don\'t launch decommission  cluster=cassandra-demo pod=cassandra-demo-dc1-rack1-1 rack=dc1-rack1\nINFO[3350] Cluster has 1 Pod Disrupted but that may be normal as we are decommissioning  cluster=cassandra-demo\ndc-rack=dc1-rack1\n...\nINFO[3354] [cassandra-demo][dc1-rack1]: StatefulSet(ScaleDown): Replicas Number OK: ready[1] \nINFO[3354] ScaleDown not yet Completed: Waiting for Pod operation to be Done  cluster=cassandra-demo rack=dc1-rack1\nINFO[3354] Decommission done -> we delete PVC            cluster=cassandra-demo pvc=data-cassandra-demo-dc1-rack1-1 rack=dc1-rack1\nINFO[3354] PVC deleted                                   cluster=cassandra-demo pvc=data-cassandra-demo-dc1-rack1-1 rack=dc1-rack1\nDEBU[3354] Waiting Rack to be running before continuing, we break ReconcileRack Without Updating Statefulset  cluster=cassandra-demo dc-rack=dc1-rack1 err="<nil>"\nINFO[3354] ScaleDown is Done                             cluster=cassandra-demo rack=dc1-rack1\n')),(0,o.kt)("h3",{id:"cant-add-new-rack-in-new-dc"},"Can't add new rack in new DC"),(0,o.kt)("p",null,"In this example, I ask to add dc called dc2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods\nNAME                                                              READY   STATUS    RESTARTS   AGE\ncassandra-demo-dc1-rack1-0                                        1/1     Running   0          17h\ncassandra-demo-dc1-rack2-0                                        1/1     Running   0          17h\ncassandra-demo-dc1-rack3-0                                        1/1     Running   0          17h\ncassandra-demo-dc2-rack1-0                                        1/1     Running   0          5m46s\ncassandra-demo-dc2-rack2-0                                        1/1     Running   0          4m20s\ncassandra-demo-dc2-rack3-0                                        0/1     Pending   0          2m37s\n")),(0,o.kt)("p",null,"But the last one can't be scheduled because of insufficient cpu on k8s nodes."),(0,o.kt)("p",null,"We can either add the wanted resources in the k8s cluster or make a rollback."),(0,o.kt)("h4",{id:"solution1-rollback-adding-the-dc"},"Solution1: rollback adding the DC"),(0,o.kt)("p",null,"To rollback the add of the new DC, we first need to scale down to 0 for the nodes that already have join the ring.\nWe need to allow disruption as we do in previous section."),(0,o.kt)("p",null,"then We first need to ask the dc2 to scaleDown to 0 because it has already add 2 racks, and we add the\nspec.unlockNextOperation to true."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\n  unlockNextOperation: true\n  ...\n    name: dc2\n    nodesPerRacks: 0\n")),(0,o.kt)("p",null,"This will allow CassKop to make the scale down. because it will start with the first rack, it will free some space and\nthe last pod which was pending will be joining. then it will be decommissioned by CassKop."),(0,o.kt)("p",null,"we can see in CassKop logs when it deal with the rack with unscheduled pods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARN[0667] Aborting Initializing..., start ScaleDown                      cluster=cassandra-demo rack=dc2-rack3\nINFO[0667] The Operator Waits 20 seconds for the action to start correctly  cluster=cassandra-demo rack=dc2-rack3\nWARN[0667] ScaleDown detected on a pending Pod. we don't launch decommission  cluster=cassandra-demo pod=cassandra-demo-dc2-rack3-0 rack=dc2-rack3\nINFO[0667] Cluster has 1 Pod Disrupted but that may be normal as we are decommissioning\ncluster=cassandra-demodc-rack=dc2-rack3\nINFO[0667] Template is different:  {...}\n")),(0,o.kt)("p",null,"It will also ScaleDown any pods that was part of the new DC."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Once ScaleDown is done, you can delete the DC from the Spec.")),(0,o.kt)("h4",{id:"solution2-change-the-topology-for-dc2-remove-the-3rd-unschedulable-rack"},"Solution2: change the topology for dc2 (remove the 3rd unschedulable rack)"),(0,o.kt)("p",null,"we get back in the previous section before making the rolling back of adding the dc2."),(0,o.kt)("p",null,"If only one of the Racks can't schedule any pods, we can change the topology to remove the Rack ONLY if there was not already\npods deployed in the Rack. If this is not the case, then you will need to process ScaleDown instead of removing rack."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    - labels:\n        failure-domain.beta.kubernetes.io/region: europe-west1\n      name: dc2\n      nodesPerRacks: 1\n      config:\n        cassandra-yaml:\n          num_tokens: 256\n      rack:\n      - labels:\n          failure-domain.beta.kubernetes.io/zone: europe-west1-d\n        name: rack1\n      - labels:\n          failure-domain.beta.kubernetes.io/zone: europe-west1-c\n        name: rack2\n      - labels:\n          failure-domain.beta.kubernetes.io/zone: europe-west1-d\n        name: rack3\n")),(0,o.kt)("p",null,"let's remove the rack3 from dc2."),(0,o.kt)("p",null,"the operator will log :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARN[0347] We asked to remove Rack dc2-rack3 with unschedulable pod  cluster=cassandra-demo\nINFO[0347] [cassandra-demo]: Delete PVC[data-cassandra-demo-dc2-rack3-0] OK \n")),(0,o.kt)("p",null,"The rack3 (and its statefulset) has been removed, and the associated (empty) pvc deleted"))}p.isMDXComponent=!0}}]);