(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(21),c=n.n(r),i=(n(31),n(12)),s=n(4),l=n(5),u=n(7),h=n(6),m=n(8),d=n.n(m),g=n(0),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(g.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})]})})}}]),n}(a.Component),b=n(22),j=n.n(b),f=n(11),O=n.n(f),v=function(e){var t=e.webformatURL,n=e.largeImageURL,a=e.tags,o=e.handleBigImg,r=a.split(",")[0];return Object(g.jsx)("li",{className:O.a.ImageGalleryItem,onClick:function(){return o(n)},children:Object(g.jsx)("img",{src:t,alt:r,className:O.a.ImageGalleryItemImage})})},y=function(e){var t=e.images,n=e.handleBigImg,a=t.map((function(e){return Object(g.jsx)(v,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,handleBigImg:n},e.id)}));return Object(g.jsx)("ul",{className:j.a.ImageGallery,children:a})},I=n(9),w=n.n(I),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onCloseModal=function(t){"Escape"!==t.code&&"IMG"===t.target.nodeName||e.props.closeModal()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal),window.addEventListener("click",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal),window.removeEventListener("click",this.onCloseModal)}},{key:"render",value:function(){return Object(g.jsx)("div",{className:w.a.Overlay,children:Object(g.jsx)("div",{className:w.a.Modal,children:Object(g.jsx)("img",{src:this.props.largeImg,alt:"",className:w.a.Img})})})}}]),n}(a.Component),S=n(23),k=n.n(S),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("button",{type:"button",className:k.a.Button,onClick:this.props.onClick,children:"Load more"})}}]),n}(a.Component),L=(n(33),n(24)),M=n.n(L),N=n(25),B=n.n(N),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:B.a.loader,children:Object(g.jsx)(M.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80})})}}]),n}(a.Component),F=n(26),R=n.n(F),U=n(2),Q=n.n(U),D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return R.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=20288180-4caa270ad2507bbc2eb049f3e&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};D.propTypes={searchQuery:Q.a.string.isRequired,page:Q.a.number.isRequired};var T=D,V=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchQuery:"",images:[],page:1,largeImg:"",error:null,loading:!1,found:!0},e.fetchImages=function(){var t=e.state,n=t.searchQuery,a=t.page;if(e.setState({loading:!0}),T(n,a).then((function(t){0===t.length?e.setState({found:!1}):e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1,found:!0}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})})),a>1){var o=document.documentElement.scrollHeight;window.scrollTo({top:o,behavior:"smooth"})}},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.handleBigImg=function(t){e.setState({largeImg:t}),document.body.classList.add("modal-isOpen")},e.closeModal=function(){e.setState({largeImg:""}),document.body.classList.remove("modal-isOpen")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){if(this.state.page>2){var n=document.documentElement,a=n.scrollTop,o=n.clientHeight;window.scrollTo({top:a+o-165,behavior:"smooth"})}t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,n=e.loading,a=e.error,o=e.found,r=e.largeImg;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{onSubmit:this.handleSearchFormSubmit}),(a||!o)&&!t.length&&Object(g.jsx)("h2",{style:{textAlign:"center"},children:"Oops, something went wrong. Enter a correct query"}),Object(g.jsx)(y,{images:t,handleBigImg:this.handleBigImg}),n&&Object(g.jsx)(E,{}),t.length>0&&!n&&o&&Object(g.jsx)(C,{onClick:this.fetchImages}),r&&Object(g.jsx)(x,{largeImg:r,closeModal:this.closeModal})]})}}]),n}(a.Component);n(72);c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root"))},8:function(e,t,n){},9:function(e,t,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.9b8380e6.chunk.js.map