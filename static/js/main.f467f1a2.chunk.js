(this["webpackJsonpnew-social-network-01"]=this["webpackJsonpnew-social-network-01"]||[]).push([[0],{10:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3dxlX",dialogsItems:"Dialogs_dialogsItems__3dCbY",active:"Dialogs_active__1jlfK",messages:"Dialogs_messages__2v1Zz",message:"Dialogs_message__3NGPx"}},27:function(e,t,s){e.exports={selectedPage:"Users_selectedPage__1mZri",items:"Users_items__302Bp"}},28:function(e,t,s){e.exports={postBlock:"ContentArea_postBlock__1FZxZ",posts:"ContentArea_posts__2YdVD"}},40:function(e,t,s){e.exports={items:"Post_items__7cdgf"}},41:function(e,t,s){e.exports={descriptionBlock:"Profile_descriptionBlock__15JQ-"}},46:function(e,t,s){},47:function(e,t,s){},5:function(e,t,s){e.exports={nav:"Navbar_nav__38ETH",item:"Navbar_item__3vuXe",active:"Navbar_active__pCbfH"}},72:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t),s.d(t,"renderEntireTree",(function(){return ie}));var n=s(1),a=s.n(n),c=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))},r=s(16),i=s.n(r),o=(s(46),s(3)),l=(s(47),s.p+"static/media/logo_transparent_03.230df42a.png"),u=s.p+"static/media/logo_transparent_02.7aafc755.png",j=s(0),d=function(e){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("img",{src:l}),Object(j.jsx)("img",{src:u})]})},g=s(5),p=s.n(g),b=s(4),O=function(e){return Object(j.jsxs)("nav",{className:p.a.nav,children:[Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(b.b,{to:"/profile",activeClassName:p.a.active,children:"Profile"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.active,children:"Messages"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(b.b,{to:"/Users",activeClassName:p.a.active,children:"Users"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(b.b,{to:"/news",activeClassName:p.a.active,children:"News"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(b.b,{to:"/music",activeClassName:p.a.active,children:"Music"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(b.b,{to:"/settings",activeClassName:p.a.active,children:"Settings"})})]})},h=function(e){return Object(j.jsx)("div",{children:"News"})},f=function(e){return Object(j.jsx)("div",{children:"Music"})},x=function(e){return Object(j.jsx)("div",{children:"Settings"})},m=s(10),v=s.n(m),S=function(e){return Object(j.jsx)("div",{className:v.a.message,children:e.messageText})},P=function(e){return Object(j.jsx)("div",{className:v.a.dialog,children:Object(j.jsx)(b.b,{to:"/dialogs/"+e.id,children:e.name})})},_=s(12),N=s(2),T={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sasha"}],messages:[{id:1,message:"hello"},{id:2,message:"How are you?"}],newMessageText:""},E=s(9),w=Object(E.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageText:function(t){e({type:"SN/DIALOGS/SET_NEW_MESSAGE_TEXT",newDialogText:t})},addMessage:function(t){e({type:"SN/DIALOGS/ADD_MESSAGE",newMessageText:t})}}}))((function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(j.jsx)(P,{id:e.id,name:e.name},e.id)})),s=e.dialogsPage.messages.map((function(e){return Object(j.jsx)(S,{messageText:e.message},e.id)})),n=function(){e.dialogsPage.newMessageText&&e.addMessage(e.dialogsPage.newMessageText.trim())};return Object(j.jsxs)("div",{className:v.a.dialogs,children:[Object(j.jsx)("div",{className:v.a.dialogsItems,children:t}),Object(j.jsxs)("div",{className:v.a.messages,children:[s,Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{value:e.dialogsPage.newMessageText,onChange:function(t){e.updateNewMessageText(t.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),n())},placeholder:"Write something"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:n,children:"Send"})})]})]})})),C=s(18),U=s(19),F=s(21),k=s(20),y={users:[],pageSize:5,totalUserCount:0,currentPage:1,isFetching:!1},I=s(27),D=s.n(I),R=function(e){for(var t=Math.ceil(e.usersPage.totalUserCount/e.usersPage.pageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{children:"\xab prev"}),s.map((function(t){return Object(j.jsxs)("span",{onClick:function(){e.onPageGanged(t)},className:t===e.usersPage.currentPage?D.a.selectedPage:"",children:[" | ",t," | "]})})).slice(0,7),Object(j.jsx)("button",{children:"next  \xbb"}),e.usersPage.users.map((function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b.b,{to:"/profile/"+t.id,children:Object(j.jsx)("div",{className:D.a.items,children:Object(j.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png"})})}),Object(j.jsx)("div",{children:t.followed?Object(j.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"unfollow"}):Object(j.jsx)("button",{onClick:function(){e.follow(t.id)},children:"follow"})}),Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("div",{children:t.status})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:"u.location.country"}),Object(j.jsx)("div",{children:"u.location.city"})]}),Object(j.jsx)("hr",{})]},t.id)}))]})},L=s(15),M=s.n(L),G=(s(72),s.p+"static/media/preloaderLogo.400bb8f2.png"),A=function(e){return Object(j.jsx)("div",{className:"Preloader",children:Object(j.jsxs)("header",{className:"Preloader-header",children:[Object(j.jsx)("img",{src:G,className:"Preloader-logo",alt:"logo"}),Object(j.jsx)("br",{})]})})},W=function(e){Object(F.a)(s,e);var t=Object(k.a)(s);function s(){var e;Object(C.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageGanged=function(t){e.props.toggleIsFetching(!0),e.props.setCurrentPage(t),M.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.usersPage.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items)}))},e}return Object(U.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),M.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.usersPage.currentPage,"&count=").concat(this.props.usersPage.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:this.props.isFetching?Object(j.jsx)(A,{}):Object(j.jsx)(R,{follow:this.props.follow,unfollow:this.props.unfollow,setUsers:this.props.setUsers,usersPage:this.props.usersPage,setCurrentPage:this.props.setCurrentPage,setTotalUsersCount:this.props.setTotalUsersCount,onPageGanged:this.onPageGanged,toggleIsFetching:this.props.toggleIsFetching})})}}]),s}(a.a.Component),B=Object(E.b)((function(e){return{usersPage:e.usersPage,pageSize:e.usersPage.pageSize,totalUserCount:e.usersPage.totalUserCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:"SN/USERS/FOLLOW",userId:e}},unfollow:function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},setUsers:function(e){return{type:"SN/USERS/SET_USERS",users:e}},setCurrentPage:function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",pageValue:e}},setTotalUsersCount:function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",countValue:e}},toggleIsFetching:function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}}})(W),H=s(40),z=s.n(H),X=function(e){return Object(j.jsxs)("div",{className:z.a.items,children:[Object(j.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png"}),Object(j.jsx)("span",{children:e.message}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:["\u2665",e.likesCount]})]})},V=s(28),Z=s.n(V),J={posts:[{id:1,messages:"Hello",likesCount:12},{id:2,messages:"Wats up",likesCount:13}],newPostText:"",profile:null},K=Object(E.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{updateNewPostText:function(t){e({type:"SN/PROFILE/CHANGE_POST",newPostText:t})},addPost:function(t){e({type:"SN/PROFILE/ADD_POST",newPostText:t})}}}))((function(e){var t=e.profilePage.posts.map((function(e){return Object(j.jsx)(X,{message:e.messages,likesCount:e.likesCount},e.id)})),s=function(){e.profilePage.newPostText&&e.addPost(e.profilePage.newPostText.trim())};return Object(j.jsxs)("div",{className:Z.a.postBlock,children:[Object(j.jsx)("h3",{children:"My posts"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{value:e.profilePage.newPostText,onChange:function(t){e.updateNewPostText(t.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s())},placeholder:"Write something"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:s,children:"Send"})}),Object(j.jsx)("div",{className:Z.a.posts,children:t})]})})),Y=s(41),Q=s.n(Y),q=function(e){var t;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"https://i.redd.it/om4a8r7glhx21.png"})}),Object(j.jsxs)("div",{className:Q.a.descriptionBlock,children:[Object(j.jsx)("img",{src:null===(t=e.profile)||void 0===t?void 0:t.photos.large}),"avatar+description"]})]})},$=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(q,{profile:e.profile}),Object(j.jsx)(K,{})]})},ee=function(e){Object(F.a)(s,e);var t=Object(k.a)(s);function s(){return Object(C.a)(this,s),t.apply(this,arguments)}return Object(U.a)(s,[{key:"componentDidMount",value:function(){var e=this;M.a.get("https://social-network.samuraijs.com/api/1.0/profile/2").then((function(t){e.props.setUserProfile(t.data.items)}))}},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.props.profile?Object(j.jsx)(A,{}):Object(j.jsx)($,Object(N.a)(Object(N.a)({},this.props),{},{profile:this.props.profile}))})}}]),s}(a.a.Component),te=Object(E.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:"SN/PROFILE/SET_NEW_POST_TEXT",profile:e}}})(ee),se=function(e){return Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(d,{}),Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(o.a,{path:"/profile",render:function(){return Object(j.jsx)(te,{})}}),Object(j.jsx)(o.a,{path:"/dialogs",render:function(){return Object(j.jsx)(w,{})}}),Object(j.jsx)(o.a,{path:"/users",render:function(){return Object(j.jsx)(B,{})}}),Object(j.jsx)(o.a,{path:"/news",render:function(){return Object(j.jsx)(h,{})}}),Object(j.jsx)(o.a,{path:"/music",render:function(){return Object(j.jsx)(f,{})}}),Object(j.jsx)(o.a,{path:"/settings",render:function(){return Object(j.jsx)(x,{})}})]})]})},ne=s(14),ae={},ce=Object(ne.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var s=e.newPostText;return Object(N.a)(Object(N.a)({},e),{},{posts:[{id:3,messages:s,likesCount:0}].concat(Object(_.a)(e.posts)),newPostText:""});case"SN/PROFILE/CHANGE_POST":return Object(N.a)(Object(N.a)({},e),{},{newPostText:t.newPostText});case"SN/PROFILE/SET_NEW_POST_TEXT":return Object(N.a)(Object(N.a)({},e),{},{profile:t.profile});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/ADD_MESSAGE":var s=e.newMessageText;return Object(N.a)(Object(N.a)({},e),{},{messages:[].concat(Object(_.a)(e.messages),[{id:3,message:s}]),newMessageText:""});case"SN/DIALOGS/SET_NEW_MESSAGE_TEXT":return Object(N.a)(Object(N.a)({},e),{},{newMessageText:t.newDialogText});default:return e}},sidebarPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!0}):e}))});case"SN/USERS/UNFOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!1}):e}))});case"SN/USERS/SET_USERS":return Object(N.a)(Object(N.a)({},e),{},{users:Object(_.a)(t.users)});case"SN/USERS/SET_CURRENT_PAGE":return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.pageValue});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(N.a)(Object(N.a)({},e),{},{totalUserCount:t.countValue});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),re=Object(ne.c)(ce),ie=function(){i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b.a,{children:Object(j.jsx)(E.a,{store:re,children:Object(j.jsx)(se,{})})})}),document.getElementById("root"))};ie(),c()}},[[73,1,2]]]);
//# sourceMappingURL=main.f467f1a2.chunk.js.map