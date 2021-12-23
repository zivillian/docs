"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3808],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,g=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90421:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],s={sidebar_position:2},o="site",d={unversionedId:"reference/configuration/site",id:"reference/configuration/site",title:"site",description:"Beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig.",source:"@site/docs/reference/configuration/site.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/site",permalink:"/docs/reference/configuration/site",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/site.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Grundlagen",permalink:"/docs/reference/configuration/home"},next:{title:"loadpoints",permalink:"/docs/reference/configuration/loadpoints"}},p=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",children:[{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>meters</code>",id:"meters",children:[],level:3}],level:2},{value:"Optionale Parameter",id:"optionale-parameter",children:[{value:"<code>meters.grid</code>",id:"metersgrid",children:[],level:3},{value:"<code>meters.pvs</code>",id:"meterspvs",children:[],level:3},{value:"<code>meters.batteries</code>",id:"metersbatteries",children:[],level:3},{value:"<code>bufferSoC</code>",id:"buffersoc",children:[],level:3},{value:"<code>prioritySoC</code>",id:"prioritysoc",children:[],level:3},{value:"<code>residualPower</code>",id:"residualpower",children:[{value:"<code>grid</code> <code>meter</code> vorhanden",id:"grid-meter-vorhanden",children:[],level:4},{value:"Nur <code>pv</code> <code>meter</code> vorhanden",id:"nur-pv-meter-vorhanden",children:[],level:4}],level:3}],level:2}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"site"},(0,i.kt)("inlineCode",{parentName:"h1"},"site")),(0,i.kt)("p",null,"Beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig."),(0,i.kt)("p",null,"Um das Laden mit PV \xdcberschuss zu regeln, ist ein auslesbarer Z\xe4hler direkt hinter dem Netzanschlusspunkt notwendig. Zus\xe4tzlich k\xf6nnen auch Ger\xe4te f\xfcr die PV Leistung und Hausbatterie angegeben werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"site:\n- title: Zuhause # display name for UI\n  meters:\n    grid: sdm630 # grid meter reference\n    pvs: \n    - sma # pv meter reference\n    batteries:\n    - byd # battery meter reference\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"erforderliche-parameter"},"Erforderliche Parameter"),(0,i.kt)("h3",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h3"},"title")),(0,i.kt)("p",null,"Eine Beschreibung des Ladepunktes, wird in der UI angezeigt."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  title: Zuhause\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"meters"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters")),(0,i.kt)("p",null,"Definiert welche ",(0,i.kt)("a",{parentName:"p",href:"meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te) welche Art von Daten zur Verf\xfcgung stellen."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Es ist mindestens die Konfiguration eines ",(0,i.kt)("inlineCode",{parentName:"p"},"grid")," oder mindestens eines ",(0,i.kt)("inlineCode",{parentName:"p"},"pvs")," Elementes notwendig!"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"site:\n  meters:\n    grid: sdm630 # grid meter reference\n    pvs: \n    - sma # pv meter reference\n    batteries: \n    - byd # battery meter reference\n  residualPower: 100\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"optionale-parameter"},"Optionale Parameter"),(0,i.kt)("h3",{id:"metersgrid"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters.grid")),(0,i.kt)("p",null,"Definiert das ",(0,i.kt)("a",{parentName:"p",href:"meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te), welches die Werte des Netzanschlusspunktes liefert."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Wert eines ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,i.kt)("a",{parentName:"p",href:"#meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meters"))," Konfiguration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    grid: sdm630 # grid meter reference\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"meterspvs"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters.pvs")),(0,i.kt)("p",null,"Definiert die ",(0,i.kt)("a",{parentName:"p",href:"meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te), welches die PV Stromerzeugungswerte liefert."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Eine Liste von Werten eines ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,i.kt)("a",{parentName:"p",href:"#meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meters"))," Konfiguration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    pvs: \n    - sma # pv meter reference\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"metersbatteries"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters.batteries")),(0,i.kt)("p",null,"Definiert die ",(0,i.kt)("a",{parentName:"p",href:"meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te), welches die Werte Hausbatterien liefert."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Eine Liste von Werten eines ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,i.kt)("a",{parentName:"p",href:"#meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meters"))," Konfiguration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    batteries: \n    - byd # battery meter reference\n")),(0,i.kt)("h3",{id:"buffersoc"},(0,i.kt)("inlineCode",{parentName:"h3"},"bufferSoC")),(0,i.kt)("p",null,"Ignoriere das Entladen einer Hausbatterie oberhalb dem angegebenen SoC (%) Wert.\nDie Ladung wird im PV-Modus bei zu wenig \xdcberschuss (unterhalb der Mindestladeleistung) nicht unterbrochen wenn sich die Hausbatterie(n) oberhalb dieses Ladezustandes befindet. Somit werden Schwankungen in der Erzeugung oder beim Verbrauch prim\xe4r von der Hausbatterie ausgeglichen wenn diese entsprechend geladen ist.\nIst deaktiviert (entspricht >100%) wenn kein Wert angegeben wird."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"bufferSoC")," muss einen gr\xf6\xdferen Wert als ",(0,i.kt)("inlineCode",{parentName:"p"},"prioritySoC")," haben."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    bufferSoC: 80 # Hausbatterie wird oberhalb SoC 80% als Puffer genutzt\n")),(0,i.kt)("h3",{id:"prioritysoc"},(0,i.kt)("inlineCode",{parentName:"h3"},"prioritySoC")),(0,i.kt)("p",null,"Die Ladung der Hausbatterie hat Priorit\xe4t vor der Fahrzeugladung unterhalb des angegebenen SoC (%) Werts.\nSteht unterhalb dieses Wertes mehr Erzeugungsleistung zur Verf\xfcgung wie der Batteriespeicher aufnimmt kann dieser \xdcberschuss trotzdem nachrangig zur Fahrzeugladung verwendet werden.\nWenn die Hausbatterie oberhalb des Wertes geladen wird, wird die Batterieladeleistung f\xfcr das Laden des EVs als verf\xfcgbare \xdcberschussleistung betrachtet. Somit hat dann die Fahrzeugladung Priorit\xe4t bei der Verwendung der \xdcberschussleistung.\nIst deaktiviert (entspricht 0%) wenn kein Wert angegeben wird."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"prioritySoC")," muss einen kleineren Wert als ",(0,i.kt)("inlineCode",{parentName:"p"},"bufferSoC")," haben."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    prioritySoC: 50 # Hausbatterie bekommt bis zum SoC 50% Priorit\xe4t beim laden\n")),(0,i.kt)("h3",{id:"residualpower"},(0,i.kt)("inlineCode",{parentName:"h3"},"residualPower")),(0,i.kt)("p",null,"Definiert eine Leistung in Watt (W). Die Verwendung wird in folgenden unterschiedlichen Szenarien verdeutlicht."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  residualPower: 100\n")),(0,i.kt)("h4",{id:"grid-meter-vorhanden"},(0,i.kt)("inlineCode",{parentName:"h4"},"grid")," ",(0,i.kt)("inlineCode",{parentName:"h4"},"meter")," vorhanden"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positiver Wert: Sicherheitspuffer."),(0,i.kt)("li",{parentName:"ul"},"Negativer Wert: Laden im PV Modus erlaubt den Wert als Netzanteil.")),(0,i.kt)("h4",{id:"nur-pv-meter-vorhanden"},"Nur ",(0,i.kt)("inlineCode",{parentName:"h4"},"pv")," ",(0,i.kt)("inlineCode",{parentName:"h4"},"meter")," vorhanden"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positiver Wert: Typischer Hausverbrauch, um damit den PV \xdcberschuss absch\xe4tzen zu k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},"Negativer Wert: -")))}c.isMDXComponent=!0}}]);