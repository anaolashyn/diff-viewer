(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(243)},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},242:function(e){e.exports={left:{nodes:{"EXAMPLE.COM_192.168.0.1":{storage:["EXAMPLE.COM_192.168.0.1-storages-12","EXAMPLE.COM_192.168.0.1-storages-37","EXAMPLE.COM_192.168.0.1-storages-41"],interfaces:["EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth0","EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth1","EXAMPLE.COM_192.168.0.1-snmp-interfaces-br.lxc-4"]},"Cisco3745new-1.SAMPLE.COM_192.168.0.120":{interfaces:["Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth0","Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth1","Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth2"]},"Cisco3640new-1.SAMPLE.COM_192.168.0.180":{interfaces:["Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth0","Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth1","Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth2","Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth3"]}},info:{id:"Dailysync0d464eb75582c5da0f7b3285d460557dd3d2843a",endTimestamp:1534685151333}},right:{nodes:{"EXAMPLE.COM_192.168.0.1":{status:"modified",storage:{status:"modified",elements:[{name:"EXAMPLE.COM_192.168.0.1-storages-12",status:"unchanged"},{name:"EXAMPLE.COM_192.168.0.1-storages-37",status:"absent"},{name:"EXAMPLE.COM_192.168.0.1-storages-38",status:"new"},{name:"EXAMPLE.COM_192.168.0.1-storages-41",status:"absent"},{name:"EXAMPLE.COM_192.168.0.1-storages-54",status:"new"},{name:"EXAMPLE.COM_192.168.0.1-storages-55",status:"new"},{name:"EXAMPLE.COM_192.168.0.1-storages-56",status:"new"}]},interfaces:{status:"modified",elements:[{name:"EXAMPLE.COM_192.168.0.1-snmp-interfaces-br.lxc-4",status:"modified",changes:{physAddress:{old:"6acbee9c82da",new:"6acbee9b75fd"}}},{name:"EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth0",status:"unchanged"},{name:"EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth1",status:"unchanged"}]}},"Cisco3745new-1.SAMPLE.COM_192.168.0.120":{status:"absent"},"Cisco3640new-1.SAMPLE.COM_192.168.0.180":{status:"absent"},"Huawei1421_192.168.0.120":{status:"new"}},info:{id:"Dailysync0d464eb75582c5da0f7b3285d460557dd3d2843a",endTimestamp:1534685151333}}}},243:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(24),l=a.n(i),r=(a(123),a(42)),c=a(43),o=a(48),d=a(44),u=a(47),m=a(14),p=(a(124),a(248)),E=(a(73),a(125),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={nodes:a.props.dataList.nodes},a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.toogleClick=a.toogleClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({nodes:e.dataList.nodes})}},{key:"handleClick",value:function(e,t){this.props.onChangeDisplay(t)}},{key:"toogleClick",value:function(e,t){this.props.onChangeDisplay2Level(t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,void 0!==this.state.nodes&&s.a.createElement(p.a,{id:"listBlock",as:"ol"},Object.keys(this.state.nodes).map(function(t,a){return s.a.createElement(p.a.Item,{as:"li",value:"\u2022"},s.a.createElement(p.a.Content,{className:"listItem",onClick:function(t){return e.handleClick(t,a)}},void 0!==e.state.nodes[t].status&&s.a.createElement(p.a.Header,{id:e.state.nodes[t].status},t),void 0===e.state.nodes[t].status&&s.a.createElement(p.a.Header,{id:"unchanged"},t)),e.props.display.indexOf(a)>-1&&s.a.createElement(p.a.List,null,void 0!==e.state.nodes[t].storage&&s.a.createElement(p.a.Item,{as:"li",value:"\u2022"},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Header,{className:"listItem",onClick:function(t){return e.toogleClick(t,a.toString()+".1")}},"storage")),e.props.display2level.indexOf(a.toString()+".1")>-1&&s.a.createElement(p.a.List,null,!1===Array.isArray(e.state.nodes[t].storage)&&e.state.nodes[t].storage.elements.map(function(e){return s.a.createElement(p.a.Item,{as:"li",value:" "},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Header,{id:e.status},e.name.substring((t+"-storages-").length))))}),Array.isArray(e.state.nodes[t].storage)&&e.state.nodes[t].storage.map(function(e){return s.a.createElement(p.a.Item,{as:"li",value:" "},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Header,null,e.substring((t+"-storages-").length))))}))),void 0!==e.state.nodes[t].interfaces&&s.a.createElement(p.a.Item,{as:"li",value:"\u2022"},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Header,{className:"listItem",onClick:function(t){return e.toogleClick(t,a.toString()+".2")}},"interfaces")),e.props.display2level.indexOf(a.toString()+".2")>-1&&s.a.createElement(p.a.List,null,!1===Array.isArray(e.state.nodes[t].interfaces)&&e.state.nodes[t].interfaces.elements.map(function(e){return s.a.createElement(p.a.Item,{as:"li",value:" "},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Header,{id:e.status},e.name.substring((t+"-snmp-interfaces-").length),void 0!==e.changes&&s.a.createElement(p.a.List,null,s.a.createElement(p.a.Item,{as:"li",value:" "},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Header,{id:"adress"},e.changes.physAddress.new)))))))}),Array.isArray(e.state.nodes[t].interfaces)&&e.state.nodes[t].interfaces.map(function(e){return s.a.createElement(p.a.Item,{as:"li",value:" "},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Header,null,e.substring((t+"-snmp-interfaces-").length))))})))))})))}}]),t}(s.a.Component)),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={leftList:{},rightList:{},display:[],display2level:[]},a.updateArray=a.updateArray.bind(Object(m.a)(Object(m.a)(a))),a.displayChange=a.displayChange.bind(Object(m.a)(Object(m.a)(a))),a.display2levelChange=a.display2levelChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getJson()}},{key:"getJson",value:function(){var e=a(242);this.setState({leftList:e.left,rightList:e.right})}},{key:"updateArray",value:function(e,t){var a=[];return a=-1!==e.indexOf(t)?e.filter(function(e){return e!==t}):a.concat(e,[t])}},{key:"displayChange",value:function(e){var t=this.updateArray(this.state.display,e);this.setState({display:t})}},{key:"display2levelChange",value:function(e){var t=this.updateArray(this.state.display2level,e);this.setState({display2level:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"page"},s.a.createElement("div",{className:"lists"},s.a.createElement(E,{dataList:this.state.leftList,display:this.state.display,display2level:this.state.display2level,onChangeDisplay:this.displayChange,onChangeDisplay2Level:this.display2levelChange}),s.a.createElement(E,{dataList:this.state.rightList,display:this.state.display,display2level:this.state.display2level,onChangeDisplay:this.displayChange,onChangeDisplay2Level:this.display2levelChange})))}}]),t}(s.a.Component);l.a.render(s.a.createElement(h,null),document.querySelector("#root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.f811001a.chunk.js.map