"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[669],{3030:function(e,n,t){t.d(n,{Bm:function(){return g},HI:function(){return i},JZ:function(){return c},M:function(){return m},R0:function(){return w},ZJ:function(){return x},_p:function(){return p},kE:function(){return d},oW:function(){return h},rC:function(){return l},rU:function(){return v},tx:function(){return s},vB:function(){return u},zv:function(){return f}});var r=t(4165),o=t(5861),a=t(885),i=function(e){console.log(e);var n=(0,a.Z)(e.queryKey,2)[1].id;return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat("0c61d53d186daef68ff75fefa4558c3b")).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e}))},c=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0c61d53d186daef68ff75fefa4558c3b&language=en-US").then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){var n=e.queryKey,t=(0,a.Z)(n,2)[1].id;return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/images?api_key=").concat("0c61d53d186daef68ff75fefa4558c3b")).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("0c61d53d186daef68ff75fefa4558c3b")).then((function(e){return e.json()})).then((function(e){return e.results}))},f=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("0c61d53d186daef68ff75fefa4558c3b","&language=en-US")).then((function(e){return e.json()})).then((function(e){return console.log(e),e}))},l=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat("0c61d53d186daef68ff75fefa4558c3b","&language=en-US&include_adult=false&include_video=false&page=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("0c61d53d186daef68ff75fefa4558c3b","&language=en-US&include_adult=false&page=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("0c61d53d186daef68ff75fefa4558c3b","&language=en-US&include_adult=false&page=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat("0c61d53d186daef68ff75fefa4558c3b","&language=en-US&include_adult=false&page=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat("0c61d53d186daef68ff75fefa4558c3b","&language=en-US&page=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(e){console.log(e);var n=(0,a.Z)(e.queryKey,2)[1].id;return fetch("https://api.themoviedb.org/3/tv/".concat(n,"?api_key=").concat("0c61d53d186daef68ff75fefa4558c3b")).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e}))},g=function(e){return fetch("https://api.themoviedb.org/3/tv/".concat(e,"/credits?api_key=").concat("0c61d53d186daef68ff75fefa4558c3b","&language=en-US")).then((function(e){return e.json()})).then((function(e){return e}))},x=function(e){var n=e.queryKey,t=(0,a.Z)(n,2)[1].id;return fetch("https://api.themoviedb.org/3/tv/".concat(t,"/images?api_key=").concat("0c61d53d186daef68ff75fefa4558c3b")).then((function(e){if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((function(e){throw e}))},w=function(e){return fetch("https://api.themoviedb.org/3/tv/".concat(e,"/reviews?api_key=").concat("0c61d53d186daef68ff75fefa4558c3b")).then((function(e){return e.json()})).then((function(e){return e.results}))}},3755:function(e,n,t){t.d(n,{Z:function(){return x}});t(2791);var r=t(7394),o=t(8264),a=t(6650),i=t(3811),c=t(4565),u=t(7541),s=t(7689),f=t(184),l=function(e){var n=e.movie,t=(0,s.s0)();return(0,f.jsxs)(a.Z,{component:"div",sx:{borderRadius:"50px",backgroundColor:"rgba(255, 255, 51,0.7)",display:"flex",justifyContent:"space-around",flexWrap:"wrap",padding:1.5,margin:0},children:[(0,f.jsx)(i.Z,{"aria-label":"go back",onClick:function(){return t(-1)},children:(0,f.jsx)(r.Z,{color:"primary",fontSize:"large"})}),(0,f.jsxs)(c.Z,{variant:"h4",component:"h3",children:[n.title,(0,f.jsx)("a",{href:n.homepage,children:(0,f.jsx)(u.Z,{color:"primary"})}),(0,f.jsx)("br",{}),(0,f.jsxs)("span",{sx:{fontSize:"1.5rem"},children:['   "'.concat(n.tagline,'"')," "]})]}),(0,f.jsx)(i.Z,{"aria-label":"go forward",onClick:function(){return t(1)},children:(0,f.jsx)(o.Z,{color:"primary",fontSize:"large"})})]})},h=t(5953),d=t(7964),p=t(7083),v=t(3030),m=t(1933),g=t(3219),x=function(e){var n=e.movie,t=e.children,r=(0,m.useQuery)(["images",{id:n.id}],v.vB),o=r.data,a=r.error,i=r.isLoading,c=r.isError;if(i)return(0,f.jsx)(g.Z,{});if(c)return(0,f.jsx)("h1",{children:a.message});var u=o.posters;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{movie:n}),(0,f.jsxs)(h.ZP,{container:!0,spacing:5,sx:{padding:"15px"},children:[(0,f.jsx)(h.ZP,{item:!0,xs:3,children:(0,f.jsx)("div",{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:(0,f.jsx)(d.Z,{cols:1,children:u.map((function(e){return(0,f.jsx)(p.Z,{cols:1,children:(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.file_path),alt:e.poster_path})},e.file_path)}))})})}),(0,f.jsx)(h.ZP,{item:!0,xs:9,children:t})]})]})}},6669:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(2791),o=t(3755),a=t(885),i=t(7205),c=t(5017),u=t(9407),s=t(4565),f=t(6015),l=t(1134),h=t(1413),d=t(1647),p=t(1508),v=t(7689),m=t(184),g=[{value:5,label:"Excellent"},{value:4,label:"Good"},{value:3,label:"Average"},{value:2,label:"Poor"},{value:0,label:"Terrible"}],x={root:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"left",color:"white",borderRadius:"2em",padding:"2em",backgroundColor:"rgba(255,255,255,0.05)"},form:{width:"100%","& > * ":{marginTop:2}},textField:{width:"20ch"},submit:{marginRight:2},snack:{width:"50%","& > * ":{width:"100%"}}},w=function(e){var n=e.movie,t=(0,r.useState)(3),o=(0,a.Z)(t,2),w=o[0],b=o[1],j=(0,r.useState)(!1),Z=(0,a.Z)(j,2),y=Z[0],k=Z[1],_=(0,v.s0)(),C=(0,r.useContext)(h.m),S=(0,l.cI)({author:"",review:"",agree:!1,rating:"3"}),E=S.control,R=S.formState.errors,q=S.handleSubmit,I=S.reset,U=function(e){b(e.target.value)},P=function(e){k(!1),_("/movies/favorites")};return(0,m.jsxs)(f.Z,{component:"div",sx:x.root,children:[(0,m.jsx)(s.Z,{component:"h2",variant:"h3",children:"Write a review"}),(0,m.jsx)(d.Z,{sx:x.snack,anchorOrigin:{vertical:"top",horizontal:"right"},open:y,onClose:P,children:(0,m.jsx)(p.Z,{severity:"success",variant:"filled",onClose:P,children:(0,m.jsx)(s.Z,{variant:"h4",children:"Thank you for submitting a review"})})}),(0,m.jsxs)("form",{sx:x.form,onSubmit:q((function(e){e.movieId=n.id,e.rating=w,console.log(e),C.addReview(n,e),k(!0)})),noValidate:!0,children:[(0,m.jsx)(l.Qr,{name:"author",control:E,rules:{required:"Name is required"},defaultValue:"",render:function(e){var n=e.field,t=n.onChange,r=n.value;return(0,m.jsx)(c.Z,{sx:{width:"40ch",input:{color:"white"}},InputLabelProps:{style:{color:"white"}},variant:"outlined",margin:"normal",required:!0,onChange:t,value:r,id:"author",label:"Author's name",name:"author",autoFocus:!0})}}),R.author&&(0,m.jsx)(s.Z,{variant:"h6",component:"p",children:R.author.message}),(0,m.jsx)(l.Qr,{name:"review",control:E,rules:{required:"Review cannot be empty.",minLength:{value:10,message:"Review is too short"}},defaultValue:"",render:function(e){var n=e.field,t=n.onChange,r=n.value;return(0,m.jsx)(c.Z,{inputProps:{style:{color:"white"}},InputLabelProps:{style:{color:"white"}},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"review",value:r,onChange:t,label:"Review text",id:"review",multiline:!0,minRows:10})}}),R.review&&(0,m.jsx)(s.Z,{variant:"h6",component:"p",children:R.review.message}),(0,m.jsx)(l.Qr,{control:E,name:"rating",render:function(e){var n=e.field;n.onChange,n.value;return(0,m.jsx)(c.Z,{InputLabelProps:{style:{color:"white"}},id:"select-rating",select:!0,variant:"outlined",label:"Rating Select",value:w,onChange:U,helperText:"Don't forget your rating",children:g.map((function(e){return(0,m.jsx)(u.Z,{value:e.value,children:e.label},e.value)}))})}}),(0,m.jsxs)(f.Z,{sx:x.buttons,children:[(0,m.jsx)(i.Z,{type:"submit",variant:"contained",color:"primary",sx:x.submit,children:"Submit"}),(0,m.jsx)(i.Z,{type:"reset",variant:"contained",color:"secondary",sx:x.submit,onClick:function(){I({author:"",content:""})},children:"Reset"})]})]})]})},b=t(1933),j=t(3030),Z=t(3219),y=function(e){var n=(0,v.TH)().state.movieId,t=(0,b.useQuery)(["movie",{id:n}],j.HI),r=t.data,a=t.error,i=t.isLoading,c=t.isError;return i?(0,m.jsx)(Z.Z,{}):c?(0,m.jsx)("h1",{children:a.message}):(0,m.jsx)(o.Z,{movie:r,children:(0,m.jsx)(w,{movie:r})})}}}]);
//# sourceMappingURL=669.7bcc8700.chunk.js.map