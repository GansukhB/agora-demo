(this["webpackJsonpgroup-video-calling-app"]=this["webpackJsonpgroup-video-calling-app"]||[]).push([[0],{60:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(14),i=n.n(a),o=(n(60),n(13)),s=n(108),u=n(9),d=n.n(u),l=n(53),j=n(17),b=n(18),f={mode:"rtc",codec:"vp8",appId:"b66c79fb967248d486d2a331ef6e9d6a",token:"006b66c79fb967248d486d2a331ef6e9d6aIAB2KM/WLjjVTz0Ug7D/J5qf6BwcH/DIAothuitQ3Zk+WmTNKL8AAAAAEACIFpSNGVPWYQEAAQAYU9Zh"},h=Object(b.createClient)(f),p=Object(b.createMicrophoneAndCameraTracks)(),O="main",x=n(107),v=n(2);function k(e){var t=e.users,n=e.tracks,c=Object(r.useState)(12),a=Object(o.a)(c,2),i=a[0],s=a[1];return Object(r.useEffect)((function(){s(Math.max(Math.floor(12/(t.length+1)),4))}),[t,n]),Object(v.jsxs)(x.a,{container:!0,style:{height:"100%"},children:[Object(v.jsx)(x.a,{item:!0,xs:i,children:Object(v.jsx)(b.AgoraVideoPlayer,{videoTrack:n[1],style:{height:"100%",width:"100%"}})}),t.length>0&&t.map((function(e){return e.videoTrack?Object(v.jsx)(x.a,{item:!0,xs:i,children:Object(v.jsx)(b.AgoraVideoPlayer,{videoTrack:e.videoTrack,style:{height:"100%",width:"100%"}},e.uid)}):null}))]})}var m=n(26),y=n(48),g=n.n(y),A=n(49),w=n.n(A),C=n(50),I=n.n(C),T=n(51),S=n.n(T),E=n(52),M=n.n(E);function J(e){var t=h(),n=e.tracks,c=e.setStart,a=e.setInCall,i=Object(r.useState)({video:!0,audio:!0}),u=Object(o.a)(i,2),l=u[0],b=u[1],f=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("audio"!==t){e.next=6;break}return e.next=3,n[0].setEnabled(!l.audio);case 3:b((function(e){return Object(m.a)(Object(m.a)({},e),{},{audio:!e.audio})})),e.next=10;break;case 6:if("video"!==t){e.next=10;break}return e.next=9,n[1].setEnabled(!l.video);case 9:b((function(e){return Object(m.a)(Object(m.a)({},e),{},{video:!e.video})}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.leave();case 2:t.removeAllListeners(),n[0].close(),n[1].close(),c(!1),a(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)(x.a,{container:!0,spacing:2,alignItems:"center",children:[Object(v.jsx)(x.a,{item:!0,children:Object(v.jsx)(s.a,{variant:"contained",color:l.audio?"primary":"secondary",onClick:function(){return f("audio")},children:l.audio?Object(v.jsx)(g.a,{}):Object(v.jsx)(w.a,{})})}),Object(v.jsx)(x.a,{item:!0,children:Object(v.jsx)(s.a,{variant:"contained",color:l.video?"primary":"secondary",onClick:function(){return f("video")},children:l.video?Object(v.jsx)(I.a,{}):Object(v.jsx)(S.a,{})})}),Object(v.jsx)(x.a,{item:!0,children:Object(v.jsxs)(s.a,{variant:"contained",color:"default",onClick:function(){return p()},children:["Leave",Object(v.jsx)(M.a,{})]})})]})}function L(e){var t=e.setInCall,n=Object(r.useState)([]),c=Object(o.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(!1),u=Object(o.a)(s,2),b=u[0],m=u[1],y=h(),g=p(),A=g.ready,w=g.tracks;return Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.on("user-published",function(){var e=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.subscribe(t,n);case 2:"video"===n&&i((function(e){return[].concat(Object(l.a)(e),[t])})),"audio"===n&&t.audioTrack.play();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),y.on("user-unpublished",(function(e,t){"audio"===t&&e.audioTrack&&e.audioTrack.stop(),"video"===t&&i((function(t){return t.filter((function(t){return t.uid!==e.uid}))}))})),y.on("user-left",(function(e){i((function(t){return t.filter((function(t){return t.uid!==e.uid}))}))})),e.prev=3,e.next=6,y.join(f.appId,t,f.token,null);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log("error");case 11:if(!w){e.next=14;break}return e.next=14,y.publish([w[0],w[1]]);case 14:m(!0);case 15:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();if(A&&w)try{e(O)}catch(t){console.log(t)}}),[O,y,A,w]),Object(v.jsxs)(x.a,{container:!0,direction:"column",style:{height:"100%"},children:[Object(v.jsx)(x.a,{item:!0,style:{height:"5%"},children:A&&w&&Object(v.jsx)(J,{tracks:w,setStart:m,setInCall:t})}),Object(v.jsx)(x.a,{item:!0,style:{height:"95%"},children:b&&w&&Object(v.jsx)(k,{tracks:w,users:a})})]})}var V=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(v.jsx)("div",{className:"App",style:{height:"100%"},children:n?Object(v.jsx)(L,{setInCall:c}):Object(v.jsx)(s.a,{variant:"contained",color:"primary",onClick:function(){return c(!0)},children:"Join Call"})})};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(V,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.fc2f6564.chunk.js.map