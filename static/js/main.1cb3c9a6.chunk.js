(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{108:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(34),u=n.n(c),o=n(17),i=(n(108),n(8)),s=n(5),l=n(171),d=n(19),f=n(26);var p=Object(d.a)("nav",{target:"e1kztrha1"})({name:"1o3nkn",styles:"margin-left:auto"}),h=Object(d.a)(f.c,{target:"e1kztrha0"})({name:"1q5hu88",styles:'padding:5px;color:var(--dark);transition:all 250ms ease;&:first-of-type{margin-right:10px;}&.active{position:relative;color:var(--color-light);pointer-events:none;&::after{content:"";position:absolute;bottom:-5px;left:0;width:100%;height:2px;border-radius:2px;background-color:var(--color-light);}}'}),b=n(2),j=function(){return Object(b.jsxs)(p,{children:[Object(b.jsx)(h,{to:"/register",children:"Sign up"}),Object(b.jsx)(h,{to:"/login",children:"Log in"})]})};var g=Object(d.a)(f.c,{target:"e1jt1lk80"})({name:"1590ypj",styles:"color:var(--dark);font-size:24px;font-weight:700"}),v=function(){var e=Object(o.c)(s.b.getIsLoggedIn),t=Object(i.g)(),n=function(e){e.target.getAttribute("href")===t.pathname&&e.preventDefault()};return Object(b.jsx)("nav",{children:e?Object(b.jsx)(g,{to:"/contacts",onClick:n,children:"Contacts"}):Object(b.jsx)(g,{to:"/",onClick:n,children:"Home"})})},O=n(88),x=n.n(O),m=n(167);var k=Object(d.a)("div",{target:"e1vnr57i2"})({name:"mvkby9",styles:"display:flex;align-items:center;margin-left:auto"}),y=Object(d.a)("p",{target:"e1vnr57i1"})({name:"1ks3ssm",styles:"color:var(--color-accent);font-size:20px;margin-right:10px"}),w=Object(d.a)(m.a,{target:"e1vnr57i0"})({name:"b4vmo8",styles:"color:var(--color-accent)"}),C=function(){var e=Object(o.c)(s.b.getUsername),t=Object(o.b)();return Object(b.jsxs)(k,{children:[Object(b.jsx)(y,{children:e}),Object(b.jsx)(w,{type:"button",onClick:function(){return t(s.a.logOut())},children:Object(b.jsx)(x.a,{})})]})},I=n(172),L=n(169);var T=Object(d.a)(I.a,{target:"e1tnu78o1"})({name:"1c7o887",styles:"position:static;box-shadow:10px 10px 30px 0 #aeaec080;background-color:#f0f0f3"}),U=Object(d.a)(L.a,{target:"e1tnu78o0"})(""),z=function(){var e=Object(o.c)(s.b.getIsLoggedIn);return Object(b.jsx)(l.b,{injectFirst:!0,children:Object(b.jsx)(T,{children:Object(b.jsxs)(U,{children:[Object(b.jsx)(v,{}),e?Object(b.jsx)(C,{}):Object(b.jsx)(j,{})]})})})},M=n(40),W=n(57),V=["children","redirectTo"],A=function(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/login":n,a=Object(W.a)(e,V),c=Object(o.c)(s.b.getIsLoggedIn);return Object(b.jsx)(i.b,Object(M.a)(Object(M.a)({},a),{},{children:c?t:Object(b.jsx)(i.a,{to:r})}))},P=["children","restricted","redirectTo"],R=function(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,a=e.redirectTo,c=void 0===a?"/":a,u=Object(W.a)(e,P),l=Object(o.c)(s.b.getIsLoggedIn)&&r;return Object(b.jsx)(i.b,Object(M.a)(Object(M.a)({},u),{},{children:l?Object(b.jsx)(i.a,{to:c}):t}))},S=n(89),B=n.n(S);var F=Object(d.a)("div",{target:"e4fhgks0"})({name:"jd0tk2",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;pointer-events:none"}),q=function(e){var t=e.loading;return Object(b.jsx)(F,{children:Object(b.jsx)(B.a,{loading:t,color:"#727273",size:400})})},E=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,200))})),D=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,197))})),G=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,198))})),J=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,199))})),Y=function(){var e=Object(o.b)();return Object(r.useEffect)((function(){e(s.a.getCurrentUser())}),[e]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(z,{}),Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)(q,{}),children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(R,{exact:!0,path:"/",restricted:!0,redirectTo:"/contacts",children:Object(b.jsx)(E,{})}),Object(b.jsx)(R,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(b.jsx)(G,{})}),Object(b.jsx)(R,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(b.jsx)(J,{})}),Object(b.jsx)(A,{path:"/contacts",redirectTo:"/login",children:Object(b.jsx)(D,{})})]})})]})},H=n(93),N=n(6),K=n(82),Q={user:{name:null,email:null},token:null,isLoggedIn:null,isRefreshing:!1},X=Object(N.c)({name:"auth",initialState:Q,extraReducers:function(e){e.addCase(s.a.getCurrentUser.pending,(function(e){e.isRefreshing=!0})).addCase(s.a.getCurrentUser.fulfilled,(function(e,t){e.user=t.payload})).addMatcher(Object(N.e)(s.a.register.fulfilled,s.a.logIn.fulfilled),(function(e,t){e.user=t.payload.user,e.token=t.payload.token})).addMatcher(Object(N.e)(s.a.logOut.fulfilled,s.a.getCurrentUser.rejected),(function(e){e.user=Q.user,e.token=Q.token,e.isLoggedIn=Q.isLoggedIn})).addMatcher(Object(N.e)(s.a.getCurrentUser.fulfilled,s.a.register.fulfilled,s.a.logIn.fulfilled),(function(e){e.isLoggedIn=!0})).addMatcher(Object(N.e)(s.a.getCurrentUser.fulfilled,s.a.getCurrentUser.rejected),(function(e){e.isRefreshing=!1}))}}).reducer,Z=n(90),$=n.n(Z),_=n(33),ee=Object(H.a)(Object(N.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}})),te={key:"auth",storage:$.a,whitelist:["token"]},ne=Object(N.a)({reducer:{contacts:K.b,auth:Object(_.g)(te,X)},middleware:ee,devTools:!1}),re=Object(_.h)(ne),ae=n(91),ce=n(92),ue=n(170),oe=Object(ce.a)({palette:{primary:{main:"#bc8f8f"},secondary:{main:"#3c3c3c"}}});u.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o.a,{store:ne,children:Object(b.jsx)(ae.PersistGate,{loading:"LOADING...",persistor:re,children:Object(b.jsx)(f.a,{children:Object(b.jsx)(ue.a,{theme:oe,children:Object(b.jsx)(Y,{})})})})})}),document.getElementById("root"))},15:function(e,t,n){"use strict";n.r(t),n.d(t,"fetchContacts",(function(){return i})),n.d(t,"addContact",(function(){return s})),n.d(t,"deleteContact",(function(){return l}));var r=n(3),a=n.n(r),c=n(7),u=n(6),o=n(32),i=Object(u.b)("contacts/getContacts",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.fetchContacts();case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),s=Object(u.b)("contacts/addContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.addContact(t);case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(u.b)("contacts/deleteContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.deleteContact(t);case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}())},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(3),a=n.n(r),c=n(7),u=n(51),o=n(52),i=n(25),s=n.n(i);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var l=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,null,[{key:"setToken",value:function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)}},{key:"unsetToken",value:function(){s.a.defaults.headers.common.Authorization=""}},{key:"fetchContacts",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addContact",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteContact",value:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("/contacts/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/users/signup",t);case 2:return n=e.sent,r=n.data,this.setToken(r.token),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logIn",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/users/login",t);case 2:return n=e.sent,r=n.data,this.setToken(r.token),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/users/logout");case 2:this.unsetToken();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCurrentUser",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setToken(t),e.next=3,s.a.get("/users/current");case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r={};n.r(r),n.d(r,"register",(function(){return b})),n.d(r,"logIn",(function(){return j})),n.d(r,"logOut",(function(){return g})),n.d(r,"getCurrentUser",(function(){return v}));var a={};n.r(a),n.d(a,"getUsername",(function(){return O})),n.d(a,"getUserEmail",(function(){return x})),n.d(a,"getIsLoggedIn",(function(){return m}));var c=n(3),u=n.n(c),o=n(7),i=n(6),s=n(32),l=n(51),d=n(52),f=n(78),p=n.n(f).a.mixin({toast:!0,position:"top-right",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timerProgressBar:!0,width:420}),h=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"error",value:function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:2e3,e.next=3,p.fire({icon:"error",timer:r,title:t,text:n});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"success",value:function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:2e3,e.next=3,p.fire({icon:"success",timer:r,title:t,text:n});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"warning",value:function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:2e3,e.next=3,p.fire({icon:"warning",timer:r,title:t,text:n});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"info",value:function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:2e3,e.next=3,p.fire({icon:"info",timer:r,title:t,text:n});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"question",value:function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:2e3,e.next=3,p.fire({icon:"question",timer:r,title:t,text:n});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),b=Object(i.b)("auth/register",function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.register(t);case 4:return a=e.sent,h.success("You have successfully registered!"),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),h.error("Acount already exist!"),e.abrupt("return",r());case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),j=Object(i.b)("auth/login",function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.logIn(t);case 4:return a=e.sent,h.success("Login successful!\n","Welcome back, ".concat(a.user.name,"!"),5e3),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),h.error("Incorrect email or password"),e.abrupt("return",r());case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(i.b)("auth/logout",function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.logOut();case 4:h.info("You have been logged out!"),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r());case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(i.b)("auth/refresh",function(){var e=Object(o.a)(u.a.mark((function e(t,n){var r,a,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,a=n.rejectWithValue,c=r().auth.token){e.next=4;break}return e.abrupt("return",a());case 4:return e.prev=4,e.next=7,s.a.getCurrentUser(c);case 7:return o=e.sent,e.abrupt("return",o);case 11:e.prev=11,e.t0=e.catch(4);case 13:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,n){return e.apply(this,arguments)}}()),O=function(e){return e.auth.user.name},x=function(e){return e.auth.user.email},m=function(e){return e.auth.isLoggedIn}},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(6),a=n(15),c=Object(r.c)({name:"contacts",initialState:{items:[],filter:"",isLoading:!1,error:null},reducers:{changeFilter:function(e,t){e.filter=t.payload}},extraReducers:function(e){e.addCase(a.fetchContacts.fulfilled,(function(e,t){e.items=t.payload})).addCase(a.addContact.fulfilled,(function(e,t){e.items.push(t.payload)})).addCase(a.deleteContact.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))})).addMatcher(Object(r.e)(a.fetchContacts.pending,a.addContact.pending,a.deleteContact.pending),(function(e){e.isLoading=!0,e.error=null})).addMatcher(Object(r.e)(a.fetchContacts.fulfilled,a.addContact.fulfilled,a.deleteContact.fulfilled,a.fetchContacts.rejected,a.addContact.rejected,a.deleteContact.rejected),(function(e){e.isLoading=!1})).addMatcher(Object(r.e)(a.fetchContacts.rejected,a.addContact.rejected,a.deleteContact.rejected),(function(e,t){e.error=t.payload,console.error(t.payload)}))}}),u=c.actions.changeFilter;t.b=c.reducer}},[[149,3,4]]]);
//# sourceMappingURL=main.1cb3c9a6.chunk.js.map