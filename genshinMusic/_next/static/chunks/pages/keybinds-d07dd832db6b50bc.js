(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{1880:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/keybinds",function(){return n(5392)}])},3337:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(2253),s=n(4932),i=n(5893),c=n(8461);function o(e){var t,n,o,a,u;return(0,i.jsx)(c.J,(0,s._)((0,r._)({},e),{style:(0,r._)({width:null!==(t=e.size)&&void 0!==t?t:"2rem",height:null!==(n=e.size)&&void 0!==n?n:"2rem",minWidth:null!==(o=e.size)&&void 0!==o?o:"2rem",minHeight:null!==(a=e.size)&&void 0!==a?a:"2rem"},e.style),className:"icon-app-button flex-centered ".concat(null!==(u=e.className)&&void 0!==u?u:""),children:e.children}))}},6390:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(2253),s=n(4932),i=n(5893),c=n(369);function o(e){var t=e.excludeMenu,n=e.children,o=e.className,a=e.style,u=e.menu,l=e.cropped,d=void 0===l||l?a:(0,s._)((0,r._)({},a),{padding:0});return(0,i.jsxs)("div",{className:"default-page "+(void 0===o?"":o),style:d,children:[(!(void 0!==t&&t)||!u)&&(0,i.jsx)(c.O,{}),u,(0,i.jsx)("div",{className:"default-content appear-on-mount",children:n})]})}},369:function(e,t,n){"use strict";n.d(t,{O:function(){return f}});var r=n(1010),s=n(7582),i=n(5893),c=n(9583),o=n(7671),a=n(9255),u=n(2809),l=n(1163),d=n(1664),h=n.n(d),m=n(750);function f(e){var t,n=e.children,d=e.className,f=(0,l.useRouter)();return(0,i.jsx)("div",{className:"menu-wrapper "+(void 0===d?"":d),children:(0,i.jsxs)("div",{className:"menu menu-visible",style:{justifyContent:"flex-end"},children:[a.U.hasNavigated&&(0,i.jsx)(o.s,{style:{marginBottom:"auto"},onClick:function(){f.back()},ariaLabel:"Go back",children:(0,i.jsx)(c.x_l,{className:"icon"})}),void 0===n?void 0:n,(0,i.jsx)(h(),{href:"https://discord.gg/Arsf65YYHq",target:"_blank",rel:"noreferrer",title:"Go to discord",onClick:(t=(0,r._)(function(e){return(0,s.Jh)(this,function(t){switch(t.label){case 0:return e.preventDefault(),[4,(0,m.jH)("You are leaving the app to go to discord, do you want to continue?")];case 1:if(!t.sent())return[2];return window.open("https://discord.gg/Arsf65YYHq","_blank"),[2]}})}),function(e){return t.apply(this,arguments)}),children:(0,i.jsx)(o.s,{ariaLabel:"Go to discord",children:(0,i.jsx)(c.j2d,{className:"icon"})})}),(0,i.jsx)(o.s,{onClick:u.I.open,ariaLabel:"Open home menu",children:(0,i.jsx)(c.xng,{className:"icon"})})]})})}},4995:function(e,t,n){"use strict";n.d(t,{D:function(){return c}});var r=n(5893),s=n(9008),i=n.n(s);function c(e){var t=e.text,n=e.description;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:t}),n&&(0,r.jsx)("meta",{name:"description",content:n})]})}},1185:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(1010),s=n(8564),i=n(7582),c=n(5839),o=n(7557),a=function(){function e(t){(0,s._)(this,e),this.instruments=[],this.audioInstruments=[],this.basePitch="C",this.basePitch=t}var t=e.prototype;return t.setBasePitch=function(e){this.basePitch=e},t.destroy=function(){this.audioInstruments.forEach(function(e){o.n.disconnect(e.endNode),e.dispose()})},t.syncInstruments=function(e){return this.instruments=e,this.loadInstruments()},t.loadInstruments=function(){var e=this;return(0,r._)(function(){var t,n;return(0,i.Jh)(this,function(s){var a;return t=e.instruments,(n=e.audioInstruments).splice(t.length).forEach(function(e){o.n.disconnect(e.endNode),e.dispose()}),[2,Promise.all(t.map((a=(0,r._)(function(e,t){var r,s,a;return(0,i.Jh)(this,function(i){switch(i.label){case 0:if(void 0!==n[t])return[3,2];return r=new c.ZP(e.name),n[t]=r,[4,r.load(o.n.getAudioContext())];case 1:return i.sent(),o.n.connect(r.endNode),r.changeVolume(e.volume),[2,r];case 2:if(n[t].name!==e.name)return[3,3];return n[t].changeVolume(e.volume),[2,n[t]];case 3:return s=n[t],o.n.disconnect(s.endNode),s.dispose(),a=new c.ZP(e.name),n[t]=a,[4,a.load(o.n.getAudioContext())];case 4:return i.sent(),o.n.connect(a.endNode),a.changeVolume(e.volume),[2,a];case 5:return[2]}})}),function(e,t){return a.apply(this,arguments)})))]})})()},t.playNoteOfInstrument=function(e,t,n){var r=this.instruments[e];this.audioInstruments[e].play(t,null!=n?n:r.pitch||this.basePitch)},t.playNotesOfInstrument=function(e,t,n){var r=this;t.forEach(function(t){return r.playNoteOfInstrument(e,t,n)})},e}()},5392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(1309),s=n(5893),i=n(2169),c=n(6390),o=n(8376),a=n(8949),u=n(7294),l=n(5829),d=n(2114);function h(e){var t,n,c=e.data,h=e.noteText,y=e.handleClick,g=e.noteImage,p=e.clickClass,v=e.noteClass,x=e.noteRef,k=(0,r._)((0,u.useState)(f()),2),_=k[0],b=k[1];(0,u.useEffect)(function(){return(0,a.N7)(l.f6.state.data,function(){b(f())})},[]);var S=(t=c.status,n=i.Al.note,"clicked"===t&&(n+=" click-event ".concat(void 0===p?"":p)),n+" ".concat(void 0===v?"":v));return(0,s.jsx)("button",{onPointerDown:function(e){e.preventDefault(),y(c)},className:"button-hitbox-bigger",children:(0,s.jsxs)("div",{ref:x,className:S,style:{borderColor:m(c.status)},children:["Genshin"===i.iC&&(0,s.jsx)(o.Z,{className:"genshin-border",fill:m(c.status)}),g&&(0,s.jsx)(d.Z,{name:g,background:"clicked"===c.status?"var(--accent)":"var(--note-background)"}),(0,s.jsx)("div",{className:i.Al.noteName,style:{color:_},children:void 0===h?"A":h})]})})}function m(e){return"clicked"===e?"transparent":"wrong"===e?"#d66969":"right"===e?"#358a55":"Genshin"===i.iC?"#eae5ce":"unset"}function f(){var e=l.f6.get("note_background");return"Genshin"!==i.iC?e.isDark()?i.kx.text.light:i.kx.text.dark:e.luminosity()>.65?i.kx.text.note:e.isDark()?i.kx.text.light:i.kx.text.dark}var y=n(4995),g=n(7053),p=n(3707),v=n(1328),x=n(9714),k=n(5839),_=n(4339),b=n(6743),S=n(8461),j=n(9583),N=n(3033),C=n.n(N),w=n(3337);function I(e){var t=e.map,n=e.onChangeShortcut,i=Array.from(t.entries()),c=(0,r._)((0,u.useState)(null),2),o=c[0],a=c[1];return(0,s.jsx)("div",{className:"column",style:{gap:"0.4rem"},children:i.sort(function(e,t){return e[1].name<t[1].name?1:-1}).map(function(e,t){var i=(0,r._)(e,2),c=i[0],u=i[1];return(0,s.jsx)(P,{mapKey:c,value:u,selected:o===c,setSelected:a,onChangeShortcut:function(e,t){n(c,e,t),a(null)}},t)})})}function P(e){var t,n,i,c=e.mapKey,o=e.value,a=e.selected,l=e.setSelected,d=e.onChangeShortcut,h=(0,r._)((0,u.useState)(c),2),m=h[0],f=h[1];return(0,u.useEffect)(function(){if(a)return(0,x._T)("shortcut_".concat(o),function(e){f(e.keyCombo.join("+"))})},[a,o]),(0,u.useEffect)(function(){f(c)},[c,a]),(0,s.jsxs)("div",{className:(0,b.cn)("row ".concat(C()["shortcut-element"]),[a,C()["shortcut-element-selected"]]),children:[(0,s.jsxs)("div",{className:"row-centered",style:{gap:"0.4rem"},children:[(0,b.kC)(null!==(i=null===(t=(n=o.name).toString)||void 0===t?void 0:t.call(n).replaceAll("_"," "))&&void 0!==i?i:o),o.holdable&&(0,s.jsx)("div",{style:{fontSize:"0.8rem"},children:"(Holdable)"})]}),(0,s.jsxs)("div",{className:"row",style:{gap:"0.4rem"},children:[a&&(0,s.jsx)(w.h,{cssVar:"accent",onClick:function(){d(m,o)},children:(0,s.jsx)(j.l_A,{})}),(0,s.jsx)(S.J,{className:C()["shortcut-button"],onClick:function(){return l(c)},children:m})]})]})}var M=n(8737),K=n(8041),z=n.n(K),E=n(2678),T=n(1010),D=n(8564),V=n(8007),A=n(3304),L=n(7582),O=n(8067),q=n.n(O);function B(e){var t,n=e.status,r=e.onClick,i=e.type,c=e.selected,o=e.midi;return(0,s.jsx)(S.J,{className:"".concat(q()["midi-shortcut"]," ").concat(n),toggled:c,onClick:function(){return r(i)},children:((null===(t=i[0])||void 0===t?void 0:t.toUpperCase())+i.substring(1)).split("_").join(" ")+" (".concat(-1===o?"NA":o,")")})}var G=n(6138),J=n(7557),Z=n(1185),H=n(539),W=new k.ZP,X=function(e){(0,V._)(n,e);var t=(0,A._)(n);function n(e){(0,D._)(this,n),c=t.call(this,e);var s,c,o=(0,E._)(c);c.init=(0,T._)(function(){return(0,L.Jh)(this,function(e){switch(e.label){case 0:return[4,o.loadInstrument(i.BX[0])];case 1:return e.sent(),[4,G.mP.enable()];case 2:return e.sent(),G.mP.addInputsListener(o.midiStateChange),G.mP.addListener(o.handleMidi),o.setState({sources:G.mP.inputs,selectedSource:G.mP.currentMIDISource}),[2]}})}),c.midiStateChange=function(e){c.mounted&&(c.state.sources.length>e.length?_.kg.warn("Device disconnected"):e.length>0&&_.kg.warn("Device connected"),c.setState({sources:e}))},c.selectMidi=function(e){c.mounted&&e&&(G.mP.selectSource(e),c.setState({selectedSource:e}),G.mP.saveSettings())},c.deselectNotes=function(){var e=c.state.settings;e.notes.forEach(function(e){e.status=e.midi<0?"wrong":"right"}),c.setState({settings:e})};var a=(0,E._)(c);return c.loadInstrument=(s=(0,T._)(function(e){var t;return(0,L.Jh)(this,function(n){switch(n.label){case 0:return[4,(t=a.state.audioPlayer).syncInstruments([new H.WH({name:e})])];case 1:if(n.sent().some(function(e){return!e}))return[2,_.kg.error("Error loading instrument")];if(!a.mounted)return[2,t.destroy()];return a.setState({audioPlayer:t}),[2]}})}),function(e){return s.apply(this,arguments)}),c.checkIfUsed=function(e,t){var n=c.state.settings,r=n.shortcuts,s=n.notes;return!!(r.find(function(t){return t.midi===e})&&["all","shortcuts"].includes(t)||s.find(function(t){return t.midi===e})&&["all","notes"].includes(t))},c.handleMidi=function(e){var t=(0,r._)(e,3),n=t[0],s=t[1],i=t[2],o=c.state,a=o.selectedNote,u=o.settings,l=o.selectedShortcut;if(G.mP.isDown(n)&&0!==i){if(a){if(c.checkIfUsed(s,"shortcuts"))return _.kg.warn("Key already used");a.midi=s,c.deselectNotes(),c.setState({selectedNote:null}),G.mP.saveSettings()}if(l){var d=u.shortcuts.find(function(e){return e.type===l});if(c.checkIfUsed(s,"all"))return _.kg.warn("Key already used");d&&(d.midi=s,d.status=s<0?"wrong":"right",c.setState({settings:u}),G.mP.saveSettings())}var h=u.shortcuts.find(function(e){return e.midi===s});h&&(h.status="clicked",setTimeout(function(){h.status=s<0?"wrong":"right",c.setState({settings:u})},150),c.setState({settings:u})),u.notes.filter(function(e){return e.midi===s}).forEach(function(e){c.handleClick(e,!0)})}},c.handleClick=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=c.state.settings;t||c.deselectNotes(),e.status="clicked",t?(setTimeout(function(){e.status=e.midi<0?"wrong":"right",c.setState({settings:n})},200),c.setState({settings:n,selectedShortcut:null})):c.setState({settings:n,selectedNote:e,selectedShortcut:null}),c.playSound(e)},c.handleShortcutClick=function(e){if(c.deselectNotes(),c.state.selectedShortcut===e)return c.setState({selectedShortcut:null,selectedNote:null});c.setState({selectedShortcut:e,selectedNote:null})},c.playSound=function(e){void 0!==e&&c.state.audioPlayer.playNoteOfInstrument(0,e.index)},c.state={audioPlayer:new Z.z("C"),settings:G.mP.settings,selectedNote:null,selectedShortcut:null,sources:[],selectedSource:null},c.mounted=!0,c}var c=n.prototype;return c.componentDidMount=function(){this.init()},c.componentWillUnmount=function(){this.mounted=!1,this.state.audioPlayer.destroy(),G.mP.clear(),J.n.clear()},c.render=function(){var e=this,t=this.state,n=t.settings,r=t.sources,c=t.selectedShortcut,o=t.selectedSource;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"column ".concat(q()["midi-setup-column"]),children:[(0,s.jsxs)("div",{children:["Select MIDI device:",(0,s.jsxs)("select",{className:"midi-select",style:{marginLeft:"0.5rem"},value:o?o.id:"None",onChange:function(t){e.selectMidi(r.find(function(e){return e.id===t.target.value}))},children:[(0,s.jsx)("option",{disabled:!0,value:"None",children:" None"}),r.map(function(e,t){return(0,s.jsxs)("option",{value:e.id,children:[e.name," - ",e.id]},e.id)})]})]}),(0,s.jsx)("div",{style:{margin:"0.5rem 0"},children:"Click on the note to map, then press your MIDI keyboard"})]}),(0,s.jsxs)("div",{className:q()["midi-setup-content"],children:[(0,s.jsx)("div",{className:"Genshin"===i.iC?"keyboard":"keyboard keyboard-5",style:{marginTop:"auto",width:"fit-content"},children:n.notes.map(function(t,n){return(0,s.jsx)(h,{handleClick:function(){return e.handleClick(t)},data:t,noteImage:W.notes[n].noteImage,noteText:t.midi<0?"NA":String(t.midi)},n)})}),(0,s.jsxs)("div",{className:q()["midi-shortcuts-wrapper"],children:[(0,s.jsx)("div",{style:{fontSize:"1.5rem"},children:"MIDI Shortcuts"}),(0,s.jsx)("div",{className:q()["midi-shortcuts"],children:n.shortcuts.map(function(t){return(0,s.jsx)(B,{type:t.type,status:t.status,midi:t.midi,selected:c===t.type,onClick:e.handleShortcutClick},t.type)})})]})]})]})},n}(u.Component),F=new k.ZP;function U(){(0,r._)((0,p.Kq)(x.z5.getShortcutMap("keyboard")),1)[0];var e,t=(0,r._)((0,p.Kq)(x.z5.getShortcutMap("composer")),1)[0],n=(0,r._)((0,p.Kq)(x.z5.getShortcutMap("player")),1)[0],o=(0,r._)((0,p.Kq)(x.z5.getShortcutMap("vsrg_composer")),1)[0],a=(0,r._)((0,p.Kq)(x.z5.getShortcutMap("vsrg_player")),1)[0],l=(0,M.Z)().IS_MOBILE,d=(0,r._)((0,u.useState)({type:"",index:-1}),2),m=d[0],f=d[1];(0,u.useEffect)(function(){return v.w.listen(function(e){var t=e.letter,n=e.code;if("Escape"===t)return f({type:"",index:-1});var r=m.type,s=m.index,i=F.getNoteFromIndex(s);if("keyboard"===r&&-1!==s){var c=x.z5.setKeyboardKeybind(i.noteNames.keyboard,n);void 0!==c&&_.kg.warn("This keybind is already used by the ".concat(c.name," note")),f({type:"",index:-1})}if(["k4","k6","k8"].includes(r)&&-1!==s){var o=Number(r.replace("k",""));x.z5.setVsrgKeybind(o,s,t),f({type:"",index:-1})}},{id:"keybinds"}),function(){return v.w.unregisterById("keybinds")}},[m]);var g=(0,p.ih)(x.z5.getVsrgKeybinds(4)),k=(0,p.ih)(x.z5.getVsrgKeybinds(6));return(0,s.jsxs)(c.k,{children:[(0,s.jsx)(y.D,{text:"Keybinds",description:"Change the app keyboard keybinds and MIDI input keys"}),(0,s.jsx)("h1",{children:"MIDI keybinds"}),(0,s.jsx)(X,{}),!l&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Composer shortcuts"}),(0,s.jsx)("div",{className:"column",children:(0,s.jsx)(I,{map:t,onChangeShortcut:function(e,t){if(e!==t){var n=x.z5.setShortcut("composer",e,t);n&&_.kg.warn('This shortcut is already used by the "'.concat(n,'" action'))}}})}),(0,s.jsx)("h1",{children:"Player shortcuts"}),(0,s.jsx)("div",{className:"column",children:(0,s.jsx)(I,{map:n,onChangeShortcut:function(e,t){if(e!==t){var n=x.z5.setShortcut("player",e,t);n&&_.kg.warn('This shortcut is already used by the "'.concat(n,'" action'))}}})}),(0,s.jsx)("h1",{children:"Vsrg composer shortcuts"}),(0,s.jsx)("div",{className:"column",children:(0,s.jsx)(I,{map:o,onChangeShortcut:function(e,t){if(e!==t){var n=x.z5.setShortcut("vsrg_composer",e,t);n&&_.kg.warn('This shortcut is already used by the "'.concat(n,'" action'))}}})}),(0,s.jsx)("h1",{children:"Vsrg player shortcuts"}),(0,s.jsx)("div",{className:"column",children:(0,s.jsx)(I,{map:a,onChangeShortcut:function(e,t){if(e!==t){var n=x.z5.setShortcut("vsrg_player",e,t);n&&_.kg.warn('This shortcut is already used by the "'.concat(n,'" action'))}}})}),(0,s.jsx)("h1",{children:"Keyboard keybinds"}),(0,s.jsx)("div",{className:"flex-centered",children:(0,s.jsx)("div",{className:"keyboard ".concat("Sky"===i.iC?"keyboard-5":""),style:{margin:0},children:F.notes.map(function(t,n){return(0,s.jsx)(h,{data:{status:"keyboard"===m.type&&n===m.index?"clicked":""},noteImage:F.notes[n].noteImage,noteText:(null!==(e=x.z5.getKeyOfShortcut("keyboard",{name:t.noteNames.keyboard,holdable:!1}))&&void 0!==e?e:"???").replace("Key",""),handleClick:function(){f({type:"keyboard",index:m.index===n?-1:n})}},n)})})}),(0,s.jsx)("h1",{children:"Vsrg keybinds"}),(0,s.jsx)("div",{className:"column",style:{marginLeft:"1rem"},children:[g,k].map(function(e,t){return(0,s.jsxs)(u.Fragment,{children:[(0,s.jsxs)("h2",{children:[e.length," keys"]}),(0,s.jsx)("div",{className:"row",children:e.map(function(t,n){return(0,s.jsx)(Y,{letter:t,isActive:m.type==="k".concat(e.length)&&m.index===n,handleClick:function(t){return f({type:"k".concat(e.length),index:t?n:-1})}},n)})})]},t)})})]})]})}function Y(e){var t=e.letter,n=e.isActive,r=e.handleClick,i=(0,g.ZP)(function(){return r(!1)},{ignoreFocusable:!0,active:n});return(0,s.jsx)("button",{className:z()["vsrg-player-key-circle"],ref:i,style:{width:"3.5rem",fontSize:"1rem",height:"3.5rem",margin:"0.4rem",border:"none",backgroundColor:n?"var(--accent)":"var(--primary)",color:n?"var(--accent-text)":"var(--primary-text)",cursor:"pointer"},onClick:function(){return r(!n)},children:t})}},3033:function(e){e.exports={"shortcut-element":"ShortcutEditor_shortcut-element__dqLhT","shortcut-element-selected":"ShortcutEditor_shortcut-element-selected__fr3Tr","shortcut-button":"ShortcutEditor_shortcut-button__0MYpJ"}},8067:function(e){e.exports={"midi-setup-content":"MidiSetup_midi-setup-content__zLHSw","midi-shortcuts-wrapper":"MidiSetup_midi-shortcuts-wrapper__7T5B2","midi-shortcuts":"MidiSetup_midi-shortcuts__RrWmX","midi-shortcut":"MidiSetup_midi-shortcut__SrWBT",wrong:"MidiSetup_wrong__p_3Bl",right:"MidiSetup_right__4X9St",clicked:"MidiSetup_clicked__IlvB9",selected:"MidiSetup_selected__wLX2q","midi-setup-column":"MidiSetup_midi-setup-column__lbp4W"}},8041:function(e){e.exports={"vsrg-player-keyboard-circles":"VsrgPlayerKeyboard_vsrg-player-keyboard-circles__PV0cX","vsrg-player-keyboard-control-left":"VsrgPlayerKeyboard_vsrg-player-keyboard-control-left__8Tbtr","vsrg-player-keyboard-control-right":"VsrgPlayerKeyboard_vsrg-player-keyboard-control-right__ChG8u","vsrg-player-key-circle":"VsrgPlayerKeyboard_vsrg-player-key-circle__FDg11","vsrg-player-key-hitbox-circle":"VsrgPlayerKeyboard_vsrg-player-key-hitbox-circle___Tgg3","vsrg-player-key-hitbox-line":"VsrgPlayerKeyboard_vsrg-player-key-hitbox-line__oigWs","vsrg-player-key-line":"VsrgPlayerKeyboard_vsrg-player-key-line__rEK2G","vsrg-key-pressed":"VsrgPlayerKeyboard_vsrg-key-pressed__Z4sDu"}}},function(e){e.O(0,[208,774,888,179],function(){return e(e.s=1880)}),_N_E=e.O()}]);