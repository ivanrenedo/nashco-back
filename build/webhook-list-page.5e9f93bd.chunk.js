"use strict";(self.webpackChunknahsco_back=self.webpackChunknahsco_back||[]).push([[4121],{11199:(Ue,M,n)=>{n.r(M),n.d(M,{default:()=>xe});var e=n(67294),i=n(68547),x=n(87751),A=n(49656),ee=n(97132),te=n(17034),le=n(67838),oe=n(36989),ne=n(49066),ae=n(89722),$=n(46273),se=n(7681),H=n(12028),I=n(41451),re=n(38939),ie=n(49386),de=n(8060),K=n(79031),u=n(37909),ce=n(15234),g=n(72735),N=n(29728),ue=n(63237),v=n(45697),G=n(71893),R=n(35961),he=Object.defineProperty,y=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,j=(t,o,l)=>o in t?he(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,Ee=(t,o)=>{for(var l in o||(o={}))V.call(o,l)&&j(t,l,o[l]);if(y)for(var l of y(o))Z.call(o,l)&&j(t,l,o[l]);return t},me=(t,o)=>{var l={};for(var r in t)V.call(t,r)&&o.indexOf(r)<0&&(l[r]=t[r]);if(t!=null&&y)for(var r of y(t))o.indexOf(r)<0&&Z.call(t,r)&&(l[r]=t[r]);return l};const S=G.default.div`
  background: ${({theme:t})=>t.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:t})=>t?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:t})=>t.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:t})=>t.spaces[1]};
    top: ${({theme:t})=>t.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,fe=G.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${S} {
    background: ${({theme:t})=>t.colors.success500};
  }

  &[aria-checked='true'] ${S}:before {
    transform: translateX(1rem);
  }
`,O=e.forwardRef((t,o)=>{var l=t,{label:r,onChange:m,onLabel:f,offLabel:d,selected:s,visibleLabels:c}=l,h=me(l,["label","onChange","onLabel","offLabel","selected","visibleLabels"]);return e.createElement(fe,Ee({ref:o,role:"switch","aria-checked":s,"aria-label":r,onClick:m,visibleLabels:c,type:"button"},h),e.createElement($.k,null,e.createElement(S,null,e.createElement("span",null,f),e.createElement("span",null,d)),c&&e.createElement(R.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:s?"success600":"danger600"},s?f:d)))});O.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},O.propTypes={label:v.string.isRequired,offLabel:v.string,onChange:v.func.isRequired,onLabel:v.string,selected:v.bool.isRequired,visibleLabels:v.bool},O.displayName="Switch";var be=n(185),ge=n(14087),P=n(96315),ve=n(4585),z=n(20022),Te=n(86031),pe=n(60612),ye=n(36968),Oe=n.n(ye);const Le={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},De=(t,o)=>(0,pe.default)(t,l=>{switch(o.type){case"GET_DATA_SUCCEEDED":{l.webhooks=o.data,l.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{l.loadingWebhooks=!t.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{Oe()(l,["webhooks",...o.keys],o.value);break}case"SET_WEBHOOK_TO_DELETE":{l.webhookToDelete=o.id;break}case"SET_WEBHOOKS_TO_DELETE":{o.value?l.webhooksToDelete.push(o.id):l.webhooksToDelete=t.webhooksToDelete.filter(r=>r!==o.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{t.webhooksToDelete.length===0?l.webhooksToDelete=t.webhooks.map(r=>r.id):l.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{l.webhooks=t.webhooks.filter(r=>!t.webhooksToDelete.includes(r.id)),l.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{l.webhooks=t.webhooks.filter((r,m)=>m!==o.index),l.webhookToDelete=null;break}default:return l}});var ke=n(25108),Ce=Object.defineProperty,we=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,F=(t,o,l)=>o in t?Ce(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,T=(t,o)=>{for(var l in o||(o={}))Pe.call(o,l)&&F(t,l,o[l]);if(U)for(var l of U(o))We.call(o,l)&&F(t,l,o[l]);return t},Be=(t,o)=>we(t,Se(o)),L=(t,o,l)=>new Promise((r,m)=>{var f=c=>{try{s(l.next(c))}catch(h){m(h)}},d=c=>{try{s(l.throw(c))}catch(h){m(h)}},s=c=>c.done?r(c.value):Promise.resolve(c.value).then(f,d);s((l=l.apply(t,o)).next())});const Me=()=>{const{isLoading:t,allowedActions:{canCreate:o,canRead:l,canUpdate:r,canDelete:m}}=(0,i.useRBAC)(x.Z.settings.webhooks),f=(0,i.useNotification)(),d=(0,e.useRef)(!0),{formatMessage:s}=(0,ee.useIntl)(),[c,h]=(0,e.useState)(!1),[{webhooks:D,webhooksToDelete:k,webhookToDelete:W,loadingWebhooks:B},b]=(0,e.useReducer)(De,Le),{notifyStatus:Ae}=(0,ge.G)();(0,i.useFocusWhenNavigate)();const{push:$e}=(0,A.useHistory)(),{pathname:X}=(0,A.useLocation)(),C=D.length,p=k.length,J=a=>D.findIndex(E=>E.id===a);(0,e.useEffect)(()=>(d.current=!0,()=>{d.current=!1}),[]),(0,e.useEffect)(()=>{l&&He()},[l]);const He=()=>L(void 0,null,function*(){try{const{data:a}=yield(0,i.request)("/admin/webhooks",{method:"GET"});d.current&&(b({type:"GET_DATA_SUCCEEDED",data:a}),Ae("webhooks have been loaded"))}catch(a){ke.log(a),d.current&&(a.code!==20&&f({type:"warning",message:{id:"notification.error"}}),b({type:"TOGGLE_LOADING"}))}}),Ie=()=>{h(a=>!a)},Ke=()=>{W?Ne():Ge()},Ne=()=>L(void 0,null,function*(){try{yield(0,i.request)(`/admin/webhooks/${W}`,{method:"DELETE"}),b({type:"WEBHOOK_DELETED",index:J(W)})}catch(a){a.code!==20&&f({type:"warning",message:{id:"notification.error"}})}h(!1)}),Ge=()=>L(void 0,null,function*(){const a={ids:k};try{yield(0,i.request)("/admin/webhooks/batch-delete",{method:"POST",body:a}),d.current&&b({type:"WEBHOOKS_DELETED"})}catch(E){d.current&&E.code!==20&&f({type:"warning",message:{id:"notification.error"}})}h(!1)}),Q=a=>{h(!0),a!=="all"&&b({type:"SET_WEBHOOK_TO_DELETE",id:a})},Re=(a,E)=>L(void 0,null,function*(){const Y=J(E),je=D[Y],q=[Y,"isEnabled"],_=Be(T({},je),{isEnabled:a});delete _.id;try{b({type:"SET_WEBHOOK_ENABLED",keys:q,value:a}),yield(0,i.request)(`/admin/webhooks/${E}`,{method:"PUT",body:_})}catch(ze){d.current&&(b({type:"SET_WEBHOOK_ENABLED",keys:q,value:!a}),ze.code!==20&&f({type:"warning",message:{id:"notification.error"}}))}}),Ve=()=>{b({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},Ze=(a,E)=>{b({type:"SET_WEBHOOKS_TO_DELETE",value:a,id:E})},w=a=>{$e(`${X}/${a}`)};return e.createElement(te.A,null,e.createElement(i.SettingsPageTitle,{name:"Webhooks"}),e.createElement(be.o,{"aria-busy":t||B},e.createElement(le.T,{title:s({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:s({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:o&&!B&&e.createElement(i.LinkButton,{startIcon:e.createElement(P.default,null),variant:"default",to:`${X}/create`,size:"S"},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),p>0&&m&&e.createElement(oe.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(g.Z,{variant:"epsilon",textColor:"neutral600"},s({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:p})),e.createElement(N.z,{onClick:()=>Q("all"),startIcon:e.createElement(z.default,null),size:"L",variant:"danger-light"},s({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(ne.D,null,t||B?e.createElement(R.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(i.LoadingIndicatorPage,null)):e.createElement(e.Fragment,null,C>0?e.createElement(re.i,{colCount:5,rowCount:C+1,footer:e.createElement(ie.c,{onClick:()=>o?w("create"):{},icon:e.createElement(P.default,null)},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(de.h,null,e.createElement(K.Tr,null,e.createElement(u.Th,null,e.createElement(I.C,{"aria-label":s({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:p>0&&p<C,value:p===C,onValueChange:Ve})),e.createElement(u.Th,{width:"20%"},e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(u.Th,{width:"60%"},e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(u.Th,{width:"20%"},e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(u.Th,null,e.createElement(ue.T,null,s({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ce.p,null,D.map(a=>e.createElement(K.Tr,T({key:a.id},(0,i.onRowClick)({fn:()=>w(a.id),condition:r})),e.createElement(u.Td,T({},i.stopPropagation),e.createElement(I.C,{"aria-label":`${s({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:k==null?void 0:k.includes(a.id),onValueChange:E=>Ze(E,a.id),id:"select",name:"select"})),e.createElement(u.Td,null,e.createElement(g.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800"},a.url)),e.createElement(u.Td,null,e.createElement($.k,T({},i.stopPropagation),e.createElement(O,{onLabel:s({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:s({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${s({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:()=>Re(!a.isEnabled,a.id),visibleLabels:!0}))),e.createElement(u.Td,null,e.createElement(se.K,T({horizontal:!0,spacing:1},i.stopPropagation),r&&e.createElement(H.h,{onClick:()=>{w(a.id)},label:s({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(ve.Z,null),noBorder:!0}),m&&e.createElement(H.h,{onClick:()=>Q(a.id),label:s({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(z.default,null),noBorder:!0,id:`delete-${a.id}`}))))))):e.createElement(ae.x,{icon:e.createElement(Te.default,{width:"160px"}),content:s({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(N.z,{variant:"secondary",startIcon:e.createElement(P.default,null),onClick:()=>o?w("create"):{}},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),e.createElement(i.ConfirmDialog,{isOpen:c,onToggleDialog:Ie,onConfirm:Ke}))},xe=()=>e.createElement(i.CheckPagePermissions,{permissions:x.Z.settings.webhooks.main},e.createElement(Me,null))}}]);
