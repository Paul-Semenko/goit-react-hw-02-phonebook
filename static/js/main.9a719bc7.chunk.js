(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),i=n(12),s=n(2),l=n(3),u=n(5),m=n(4),_=n(20),b=n(7),d=n.n(b),h=n(11),f=n(6),j=n.n(f),p=n(0),O=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).nameInputId=Object(_.a)(),t.numberInputId=Object(_.a)(),t.state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(h.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.nameInputId,r=this.numberInputId,c=this.handleInputChange,o=this.handleSubmit;return Object(p.jsxs)("form",{onSubmit:o,className:j.a.form,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsxs)("label",{htmlFor:a,className:j.a.form__title,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:c,id:a,className:j.a.form__input})]}),Object(p.jsxs)("label",{htmlFor:r,className:j.a.form__title,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:c,id:r,className:j.a.form__input})]}),Object(p.jsx)("button",{className:j.a.form__button,children:"Add contact"})]})}}]),n}(a.Component),v=n(8),x=n.n(v),y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("ul",{className:x.a.contacts__list,children:this.props.contacts.map((function(e){return Object(p.jsxs)("li",{className:x.a.contacts__item,children:[e.name," : ",e.number,Object(p.jsx)("button",{type:"button",id:e.id,onClick:t.props.handleRemove,className:x.a.contact__button,children:"Delete"})]},e.id)}))})}}]),n}(a.Component),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{htmlFor:"search",className:d.a.filter__title,children:["Find contacts by name",Object(p.jsx)("input",{autoComplete:"off",id:"search",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]",onChange:function(e){e.preventDefault(),t.props.handleChange(e)},className:d.a.filter__input})]})})}}]),n}(a.Component),g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number;t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{name:n,number:a,id:Object(_.a)()}])}}))},t.handleFilter=function(){return t.state.contacts.filter((function(e){for(var n=e.name.toLowerCase().split(" "),a=0;a<n.length;a++)if(null!==n[a].toLowerCase().match(t.state.filter))return!0;return!1}))},t.handleChange=function(e){var n=new RegExp("^".concat(e.target.value.toLowerCase()));t.setState({filter:n})},t.handleRemove=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.formSubmitHandler,e=this.handleChange,n=this.handleFilter,a=this.handleRemove;return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{onSubmit:t}),Object(p.jsx)("h2",{className:d.a.contacts__title,children:"Contacts"}),Object(p.jsx)(C,{handleChange:e}),Object(p.jsx)(y,{contacts:n(),handleRemove:a})]})}}]),n}(a.Component),S=g;o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),o.a.render(Object(p.jsx)(S,{}),document.querySelector("#root"))},6:function(t,e,n){t.exports={form:"Style_form__SBEp0",form__title:"Style_form__title__PYYaY",form__input:"Style_form__input__2BnF4",form__button:"Style_form__button__1Dn-w"}},7:function(t,e,n){t.exports={filter__title:"style_filter__title__29xeX",filter__input:"style_filter__input__1RA0L",contacts__title:"style_contacts__title__zWwp0"}},8:function(t,e,n){t.exports={contact__button:"style_contact__button__DfsfH",contacts__list:"style_contacts__list__2W5En",contacts__item:"style_contacts__item__2meIA"}}},[[19,1,2]]]);
//# sourceMappingURL=main.9a719bc7.chunk.js.map