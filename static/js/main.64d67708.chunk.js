(this["webpackJsonptodo-v1"]=this["webpackJsonptodo-v1"]||[]).push([[0],{16:function(e,t,o){e.exports=o(29)},21:function(e,t,o){},22:function(e,t,o){},29:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(3),c=o.n(l),s=(o(21),o(4)),r=o(5),i=o(7),d=o(6),p=o(8),u=(o(22),function(e){return a.a.createElement("div",{className:"container",key:e.index},a.a.createElement("label",{className:"checkbox-container"},a.a.createElement("p",{style:e.todo.completed?{color:"#cdcdcd",textDecoration:"line-through"}:null,className:"todo-title"},e.todo.text),a.a.createElement("input",{type:"checkbox",onChange:function(){return e.handleClick(e.todo.text)},checked:e.todo.completed,className:"newCheckbox"}),a.a.createElement("span",{className:"checkmark"}),a.a.createElement("button",{className:"deleteBtn",onClick:e.delete.bind(void 0,e.todo)},"X")))}),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=null;return this.props.completedNumber>0&&(t=a.a.createElement("button",{className:"clear-completed",onClick:this.props.handleClear},"Clear Completed")),e=1!==this.props.activeNumber?a.a.createElement("p",{id:"todo-number-display"},this.props.activeNumber," items left"):a.a.createElement("p",{id:"todo-number-display"},this.props.activeNumber," item left"),a.a.createElement("div",{className:"list-footer"},e,a.a.createElement("div",{className:"toggleButtons"},a.a.createElement("a",{href:"#/all",onClick:this.props.handleAll},"All"),a.a.createElement("a",{href:"#/active",onClick:this.props.handleActive},"Active"),a.a.createElement("a",{href:"#/completed",onClick:this.props.handleComplete},"Completed")),t)}}]),t}(a.a.Component),m=o(2),f=Object(m.b)((function(e){return{todos:e.todo.todos}}),{})((function(e){return a.a.createElement(n.Fragment,null,a.a.createElement("h1",{className:"title"},"to-do"),a.a.createElement("div",{className:"todo-form"},a.a.createElement("input",{id:"todo-input",type:"text",placeholder:"What needs to be done?",onChange:e.handleChange,value:e.todo,onKeyDown:e.handleKeyDown}),e.todos.length?a.a.createElement("label",{className:"arrow-container"},a.a.createElement("input",{type:"checkbox",onChange:e.selectAll,className:"select-all",checked:0===e.activeTodosList().length}),a.a.createElement("span",{className:"arrow-checkmark"})):null))})),C=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleKeyDown=function(e){13===e.keyCode&&o.handleSubmit(e)},o.handleSubmit=function(e){e.preventDefault();var t=o.state,n=t.todo,a=t.todoCount,l=o.props.todos;l.push({text:n,completed:!1}),localStorage.setItem("todos",JSON.stringify(l)),o.props.addTodo(l),o.setState({todo:"",todoCount:a+1})},o.handleChange=function(e){o.setState({todo:e.target.value})},o.todosList=function(){return o.props.todos.map((function(e,t){return a.a.createElement(u,{todo:e,key:t,delete:o.delete,handleClick:o.handleClick})}))},o.completeTodosList=function(){return o.props.todos.filter((function(e){return!0===e.completed})).map((function(e,t){return a.a.createElement(u,{todo:e,key:t,delete:o.delete,handleClick:o.handleClick})}))},o.activeTodosList=function(){return o.props.todos.filter((function(e){return!1===e.completed})).map((function(e,t){return a.a.createElement(u,{todo:e,key:t,delete:o.delete,handleClick:o.handleClick})}))},o.handleClick=function(e){var t=o.props.todos.map((function(t){return t.text===e&&(t.completed=!t.completed),t}));o.props.clickBox(t),o.changeAll()},o.changeAll=function(){o.setState({showAll:!o.state.showAll})},o.handleActive=function(){o.setState({showActive:!0,showComplete:!1})},o.handleAll=function(){o.setState({showComplete:!1,showActive:!1})},o.handleComplete=function(){o.setState({showComplete:!0,showActive:!1})},o.clearComplete=function(){var e=o.props.todos.filter((function(e){return!1===e.completed}));localStorage.setItem("todos",JSON.stringify(e)),o.setState({showAll:!0}),o.props.clearComplete(e)},o.selectAll=function(){if(o.state.showAll){var e=o.props.todos.map((function(e){return e.completed=!0,e}));o.setState({showAll:!1}),o.props.checkAll(e)}else{var t=o.props.todos.map((function(e){return e.completed=!1,e}));o.setState({showAll:!0}),o.props.uncheckAll(t)}},o.delete=function(e){var t=o.props.todos.filter((function(t){return t!==e}));localStorage.setItem("todos",JSON.stringify(t)),o.props.deleteTodo(t)},o.state={todos:[],todo:"",todoCount:0,showActive:!1,showComplete:!1,showAll:!0},o}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");if(e){var t=JSON.parse(e);this.props.getTodos(t)}}},{key:"render",value:function(){return a.a.createElement("div",{className:"list"},a.a.createElement(f,{handleChange:this.handleChange,todo:this.state.todo,handleKeyDown:this.handleKeyDown,selectAll:this.selectAll,activeTodosList:this.activeTodosList,todos:this.state.todos}),this.state.showActive?this.activeTodosList():this.state.showComplete?this.completeTodosList():this.todosList(),this.props.todos.length>0?a.a.createElement(h,{activeNumber:this.activeTodosList().length,completedNumber:this.completeTodosList().length,handleActive:this.handleActive,handleAll:this.handleAll,handleComplete:this.handleComplete,handleClear:this.clearComplete}):null)}}]),t}(a.a.Component),v=Object(m.b)((function(e){return{todos:e.todo.todos}}),{addTodo:function(e){return function(t){t({type:"ADD_TODO",payload:e})}},getTodos:function(e){return function(t){t({type:"GET_TODOS",payload:e})}},deleteTodo:function(e){return function(t){t({type:"DELETE_TODO",payload:e})}},clearComplete:function(e){return function(t){t({type:"CLEAR_COMPLETE",payload:e})}},clickBox:function(e){return function(t){t({type:"CLICK_BOX",payload:e})}},checkAll:function(e){return function(t){t({type:"CHECK_ALL",payload:e})}},uncheckAll:function(e){return function(t){t({type:"UNCHECK_ALL",payload:e})}}})(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=o(1),y=o(15),k={todos:[]},A=Object(E.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_ALL":case"UNCHECK_ALL":case"CLEAR_COMPLETE":case"DELETE_TODO":case"ADD_TODO":case"GET_TODOS":case"CLICK_BOX":return Object(y.a)({},e,{todos:t.payload});default:return e}}}),b=[o(14).a],g=Object(E.d)(A,{},E.a.apply(void 0,b));c.a.render(a.a.createElement(m.a,{store:g},a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.64d67708.chunk.js.map