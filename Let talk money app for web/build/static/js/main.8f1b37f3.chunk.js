(this.webpackJsonpsocialboard=this.webpackJsonpsocialboard||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),c=a.n(r),i=(a(64),a(25)),o=a(26),l=a(28),d=a(27),h=a(42),u=a(61),m=a(18),b=a(23),j=a(30);j.a.initializeApp({apiKey:"AIzaSyAovootqoYkPU3dgANlgTNdR4lO7kkPUMk",authDomain:"socialboard-b1a1e.firebaseapp.com",projectId:"socialboard-b1a1e",storageBucket:"socialboard-b1a1e.appspot.com",messagingSenderId:"1039428626533",appId:"1:1039428626533:web:a511a33d0f102fafaf7e8c",measurementId:"G-9Z8FDFRYNP"}),j.a.analytics();var p=j.a.auth,g=j.a.firestore(),f=j.a.database(),O=a(136),v=a(11),x=a.n(v),y=a(20);function w(e,t,a,n){return N.apply(this,arguments)}function N(){return(N=Object(y.a)(x.a.mark((function e(t,a,n,s){var r,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().createUserWithEmailAndPassword(t,a);case 3:r=e.sent,j.a.firestore().collection("Users").doc("".concat(r.user.uid)).set({FirstName:n,LastName:s,Email:t,UserRole:"Customer",RegisteredOn:(new Date).toLocaleString()+""}),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),c=e.t0.code,i=e.t0.message,"auth/weak-password"===c?alert("The password is too weak."):alert(i),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=Object(y.a)(x.a.mark((function e(){var t,a,n,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().signInAnonymously();case 3:t=e.sent,a=t.user,j.a.firestore().collection("Users").doc("".concat(t.user.uid)).set({FirstName:a.displayName,LastName:a.displayName,Email:a.email,UserRole:"Customer",RegisteredOn:(new Date).toLocaleString()+""}),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),n=e.t0.code,s=e.t0.message,"auth/weak-password"===n?alert("The password is too weak."):alert(s),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function k(){return E.apply(this,arguments)}function E(){return(E=Object(y.a)(x.a.mark((function e(){var t,a,n,s,r,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.GoogleAuthProvider,e.prev=1,e.next=4,p().signInWithPopup(t);case 4:a=e.sent,n=a.credential,n.accessToken,s=a.user,j.a.firestore().collection("Users").doc("".concat(s.uid)).set({FirstName:s.displayName,LastName:s.displayName,Email:s.email,UserRole:"Customer",RegisteredOn:(new Date).toLocaleString()+""}),e.next=20;break;case 12:e.prev=12,e.t0=e.catch(1),r=e.t0.code,console.log(r),c=e.t0.message,console.log(c),i=e.t0.credential,console.log(i);case 20:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}a(52),a(66);var I=a(4);var U=function(){return Object(I.jsx)("header",{children:Object(I.jsxs)("nav",{className:"nav",children:[Object(I.jsx)("div",{className:"nav-item",children:Object(I.jsx)(b.b,{className:" nav-link",to:"/",children:"Social-App"})}),p().currentUser?Object(I.jsxs)("div",{className:"nav-item",children:[Object(I.jsx)(b.b,{className:"nav-item nav-link",to:"/profile",children:"Profile"}),Object(I.jsx)(b.b,{className:"nav-item nav-link",to:"/boards",children:"Boards"}),Object(I.jsx)(O.a,{className:"nav-item nav-link",variant:"contained",onClick:function(){return p().signOut()},children:"Logout"})]}):Object(I.jsxs)("div",{className:"nav-item",children:[Object(I.jsx)(b.b,{className:"nav-item nav-link",to:"/login",children:"Log In"}),Object(I.jsx)(b.b,{className:"nav-item nav-link",to:"/signup",children:"Create New Account"})]})]})})};var M=function(){return Object(I.jsx)("footer",{className:"",children:Object(I.jsx)("div",{className:"",children:Object(I.jsx)("h3",{children:"\xa9 SocialBoard 2021 Made with \u2665 by Kenvin."})})})},D=(n.Component,a(71)),R=a.n(D),B=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(I.jsx)("div",{id:"login-page",children:Object(I.jsxs)("div",{id:"login-card",className:"home-card",children:[Object(I.jsx)(U,{className:"App-header"}),Object(I.jsxs)("div",{style:{},children:[Object(I.jsx)("h1",{class:"form-element",children:"Welcome to SocialBoard \ud83d\ude00"}),Object(I.jsx)("h2",{class:"form-element",variant:"contained",color:"primary",children:"ChatBoards For The New Age !"}),Object(I.jsx)(R.a.Google,{client:"ca-pub-2618750830291672",slot:"3979664224"}),Object(I.jsx)("div",{class:"form-element",children:Object(I.jsx)(b.b,{className:"btn btn-primary px-5 mr-3",to:"/signup",children:"Create New Account"})}),Object(I.jsx)("div",{class:"form-element",children:Object(I.jsx)(b.b,{className:"btn px-5",to:"/login",children:"Login to Your Account"})})]}),Object(I.jsx)(M,{})]})})}}]),a}(n.Component),L=a(22),A=a(145),P=a(72),F=a(143),_=a(140),T=a(141),Y=a(142),G=a(144),W=Object(_.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}}));function z(e){var t=e.id,a=e.board_uid,s=e.board_name,r=e.boardImg,c=W(),i=Object(n.useState)(""),o=Object(P.a)(i,2);o[0],o[1];return console.log(t,s,r),Object(I.jsx)(T.a,{className:c.root,children:Object(I.jsxs)(Y.a,{children:[Object(I.jsx)(F.a,{component:"img",alt:"board_image",height:"100",image:"https://source.unsplash.com/random",title:s}),Object(I.jsxs)(G.a,{children:[Object(I.jsx)("h1",{children:s}),Object(I.jsx)(b.b,{to:{pathname:"/chat/".concat(s),state:{board_name:s,board_uid:a}},children:"Click to Send Message in this Board "})]})]})})}var H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:p().currentUser,boardClicked:"",boardlist:[],readError:null,writeError:null,loadingChats:!1,userRole:null,newboard:""},n.handleChange=n.handleChange.bind(Object(L.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n.myRef=s.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(x.a.mark((function e(){var t=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingChats:!0}),this.myRef.current,g.collection("Users").doc(this.state.user.uid).get().then((function(e){e.exists?(t.setState({userRole:e.data().UserRole}),console.log(t.state.userRole)):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}));try{g.collection("Boards").onSnapshot((function(e){var a=[];e.forEach((function(e){a.push(e.data())})),console.log(a),t.setState({boardlist:a})}))}catch(a){this.setState({readError:a.message,loadingChats:!1})}case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(this.state.message),this.setState({writeError:null}),e.prev=3,""!==this.state.newboard){e.next=6;break}throw"Board Name Cannot be empty";case 6:g.collection("Boards").add({boardImage:"set url manually",boardName:this.state.newboard,boardUid:""}),console.log("Board Created successfully"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.message),this.setState({writeError:e.t0.message});case 14:this.setState({newboard:""});case 15:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({newboard:e.target.value})}},{key:"formatTime",value:function(){var e=Object(y.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date(t),n="".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear()," ").concat(a.getHours(),":").concat(a.getMinutes()),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(I.jsx)("div",{id:"board-page",children:Object(I.jsxs)("div",{id:"board-card",children:[Object(I.jsx)(U,{}),Object(I.jsx)("div",{id:"board-list",children:this.state.boardlist.map((function(e,t){return Object(I.jsx)(z,{id:t,board_uid:e.boardUid,board_name:e.boardName,boardImg:e.boardImage},e.boardUid)}))}),Object(I.jsxs)("form",{onSubmit:this.handleSubmit,className:"Customer"===this.state.userRole?"customer-user":"admin-user",children:[Object(I.jsx)(A.a,{className:"form-element  input-field",label:"Enter Board Name...",name:"newboard",onChange:this.handleChange,value:this.state.newboard}),this.state.error?Object(I.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(I.jsx)(O.a,{variant:"contained",type:"submit",className:"btn btn-submit px-5 mt-4",children:"Create "})]}),Object(I.jsx)(M,{})]})})}}]),a}(n.Component),J=a(36),K=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:p().currentUser,error:null,fname:"",email:"",password:""},n.handleChange=n.handleChange.bind(Object(L.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(y.a)(x.a.mark((function e(t){var a,n=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.setState({error:""});try{a=j.a.auth.EmailAuthProvider.credential(this.state.email,this.state.password),p().currentUser.linkWithCredential(a).then((function(e){var t=e.user;t.updateProfile({displayName:n.state.fname}),j.a.firestore().collection("Users").doc("".concat(t.uid)).set({FirstName:n.state.fname,LastName:n.state.fname,Email:t.email,UserRole:"Customer",RegisteredOn:(new Date).toLocaleString()+""}),console.log("Anonymous account successfully upgraded",t),window.location.reload(!1)})).catch((function(e){console.log("Error upgrading anonymous account",e)}))}catch(s){this.setState({error:s.message,fname:"",email:"",password:""})}case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(I.jsx)("div",{id:"login-page",children:Object(I.jsxs)("div",{id:"login-card",className:"home-card",children:[Object(I.jsx)(U,{className:"App-header"}),Object(I.jsxs)("div",{style:{},children:[Object(I.jsx)("h1",{class:"form-element",children:"Welcome to SocialBoard"}),Object(I.jsx)("h3",{children:"My Profile"}),Object(I.jsxs)("h4",{children:["UserName - ",this.state.user.displayName]}),Object(I.jsxs)("h4",{children:["Email Id - ",this.state.user.email]}),p().currentUser.email?Object(I.jsx)("div",{className:"nav-item"}):Object(I.jsx)("div",{children:Object(I.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(I.jsx)("p",{className:"lead",children:"Connect your SocialBoard account Below."}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",name:"fname",placeholder:"User Name",onChange:this.handleChange,value:this.state.fname,type:"text"})}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",placeholder:"Email",name:"email",onChange:this.handleChange,value:this.state.email})}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(I.jsxs)("div",{className:"form-element",children:[this.state.error?Object(I.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(I.jsx)(O.a,{variant:"contained",color:"primary",type:"submit",children:"Connect My Account"})]})]})})]}),Object(I.jsx)(M,{})]})})}}]),a}(n.Component),q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:p().currentUser,board:"",chats:[],newMessage:"",readError:null,writeError:null,loadingPosts:!1,userRole:null,boardUid:""},n.handleChange=n.handleChange.bind(Object(L.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n.myRef=s.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(x.a.mark((function e(){var t=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingChats:!0}),this.myRef.current;try{console.log(this.props.location.state.board_uid),f.ref("Chats").child(this.props.location.state.board_uid).child("Messages").on("value",(function(e){var a=[];e.forEach((function(e){a.push(e.val())})),t.setState({chats:a}),t.setState({loadingChats:!1})}))}catch(a){this.setState({readError:a.message,loadingChats:!1})}case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(this.state.message),this.setState({writeError:null}),e.prev=3,""!==this.state.message){e.next=6;break}throw"Message Cannot be empty";case 6:return e.next=8,f.ref("Chats").child(this.props.location.state.board_uid).child("Messages").push({message:this.state.newMessage,timestamp:Date.now(),senderID:this.state.user.uid,senderUserName:this.state.user.email.split("@")[0]});case 8:this.setState({newMessage:""}),console.log("Message sent successfully"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0.message),this.setState({writeError:e.t0.message});case 16:this.setState({message:""});case 17:case"end":return e.stop()}}),e,this,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({newMessage:e.target.value})}},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},{key:"render",value:function(){var e=this;return Object(I.jsx)("div",{id:"board-page",children:Object(I.jsxs)("div",{id:"board-card",children:[Object(I.jsx)(U,{}),Object(I.jsx)("div",{}),Object(I.jsxs)("h2",{children:[this.props.location.state.board_name," Board Messages"]}),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{className:"chat-area form-element-chatarea",ref:this.myRef,children:[this.state.loadingChats?Object(I.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(I.jsx)("span",{className:"sr-only",children:"Loading..."})}):"",this.state.chats.map((function(t){return Object(I.jsxs)("p",{className:"chat-bubble "+(e.state.user.uid===t.senderID?"current-user":""),children:[t.message,Object(I.jsx)("br",{}),Object(I.jsxs)("span",{className:"chat-time float-right",children:[e.formatTime(t.timestamp)," - ",t.senderUserName]})]},t.timestamp)}))]})}),Object(I.jsx)("br",{}),Object(I.jsx)("hr",{}),Object(I.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(I.jsx)(A.a,{className:"form-element input-field",label:"Type a Message... ",name:"newMessage",onChange:this.handleChange,value:this.state.newMessage}),this.state.error?Object(I.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(I.jsx)(O.a,{variant:"contained",type:"submit",className:"btn btn-submit",children:"Send "})]}),Object(I.jsx)("hr",{}),Object(I.jsx)(M,{})]})})}}]),a}(n.Component),Z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={error:null,fname:"",lname:"",email:"",password:""},e.handleChange=e.handleChange.bind(Object(L.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(L.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(L.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,console.log("firstname signup",this.state.fname),e.next=6,w(this.state.email,this.state.password,this.state.fname,this.state.lname);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.setState({error:e.t0.message});case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(y.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(I.jsx)("div",{id:"login-page",children:Object(I.jsxs)("div",{id:"login-card",class:"signup-card",children:[Object(I.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(I.jsxs)("h1",{children:["Sign Up to",Object(I.jsx)(b.b,{className:"nav-link",to:"/",children:"SocialBoard"})]}),Object(I.jsx)("p",{className:"lead",children:"Fill in the form below to create an SocialBoard account."}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",name:"fname",placeholder:"First Name",onChange:this.handleChange,value:this.state.fname,type:"text"})}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",placeholder:"Last Name",name:"lname",onChange:this.handleChange,value:this.state.lname,type:"text"})}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",placeholder:"Email",name:"email",onChange:this.handleChange,value:this.state.email})}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(I.jsxs)("div",{className:"form-element",children:[this.state.error?Object(I.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(I.jsx)(O.a,{variant:"contained",color:"primary",type:"submit",children:"Sign up"})]}),Object(I.jsx)("p",{children:"You can also sign up with these social media apps"}),Object(I.jsx)(O.a,{variant:"contained",color:"secondary",onClick:this.googleSignIn,children:"Sign up with Google"}),Object(I.jsx)("hr",{}),Object(I.jsxs)("p",{children:["Already have an account? ",Object(I.jsx)(b.b,{to:"/login",children:"Login"})]})]}),Object(I.jsx)("hr",{}),Object(I.jsx)(M,{})]})})}}]),a}(n.Component),Q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(L.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(L.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(L.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,p().signInWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(y.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"anonymousSignIn",value:function(){var e=Object(y.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(I.jsx)("div",{id:"login-page",children:Object(I.jsxs)("div",{id:"login-card",children:[Object(I.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(I.jsxs)("h1",{children:["Login to",Object(I.jsx)(b.b,{className:"nav-link",to:"/",children:"SocialBoard"})]}),Object(I.jsx)("p",{className:"lead",children:"Fill in the form below to login to your SocialBoard account."}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(I.jsx)("div",{className:"form-element",children:Object(I.jsx)(A.a,{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(I.jsxs)("div",{className:"form-element",children:[this.state.error?Object(I.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(I.jsx)(O.a,{variant:"contained",color:"primary",type:"submit",children:"Login"}),Object(I.jsx)(O.a,{variant:"contained",style:{marginLeft:"10px"},onClick:this.anonymousSignIn,children:"Guest Login"})]}),Object(I.jsx)("p",{children:"You can also log in with these social media apps"}),Object(I.jsx)(O.a,{variant:"contained",color:"secondary",onClick:this.googleSignIn,children:"Sign in with Google"}),Object(I.jsx)("hr",{}),Object(I.jsxs)("p",{className:"form-element",children:["Don't have an account? ",Object(I.jsx)(b.b,{to:"/signup",children:"Sign up"})]})]}),Object(I.jsx)("hr",{}),Object(I.jsx)(M,{})]})})}}]),a}(n.Component),V=["component","authenticated"],X=["component","authenticated"];function $(e){var t=e.component,a=e.authenticated,n=Object(u.a)(e,V);return Object(I.jsx)(m.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return!0===a?Object(I.jsx)(t,Object(h.a)({},e)):Object(I.jsx)(m.a,{to:{pathname:"/",state:{from:e.location}}})}}))}function ee(e){var t=e.component,a=e.authenticated,n=Object(u.a)(e,X);return Object(I.jsx)(m.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return!1===a?Object(I.jsx)(t,Object(h.a)({},e)):Object(I.jsx)(m.a,{to:"/boards"})}}))}var te=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?Object(I.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(I.jsx)("span",{className:"sr-only",children:"Loading..."})}):Object(I.jsx)(b.a,{children:Object(I.jsxs)(m.d,{children:[Object(I.jsx)(m.b,{exact:!0,path:"/",component:B}),Object(I.jsx)($,{path:"/boards",authenticated:this.state.authenticated,component:H}),Object(I.jsx)($,{path:"/chat/:board_name",authenticated:this.state.authenticated,component:q}),Object(I.jsx)($,{path:"/profile",authenticated:this.state.authenticated,component:K}),Object(I.jsx)(ee,{path:"/signup",authenticated:this.state.authenticated,component:Z}),Object(I.jsx)(ee,{path:"/login",authenticated:this.state.authenticated,component:Q})]})})}}]),a}(n.Component),ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(te,{})}),document.getElementById("root")),ae()},52:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.8f1b37f3.chunk.js.map