/*! jQuery v1.12.2 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.2",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){
return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/**
 * Javascript BibTex Parser v0.1
 * Copyright (c) 2008 Simon Fraser University
 * @author Steve Hannah <shannah at sfu dot ca>
 *
 *
 * License:
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Credits:
 *
 * This library is a port of the PEAR Structures_BibTex parser written
 * in PHP (http://pear.php.net/package/Structures_BibTex).
 *
 * In order to make porting the parser into javascript easier, I have made
 * use of many phpjs functions, which are distributed here under the MIT License:
 *
 *
 * More info at: http://kevin.vanzonneveld.net/techblog/category/php2js
 *
 * php.js is copyright 2008 Kevin van Zonneveld.
 *
 * Portions copyright Ates Goral (http://magnetiq.com), Legaev Andrey,
 * _argos, Jonas Raoni Soares Silva (http://www.jsfromhell.com),
 * Webtoolkit.info (http://www.webtoolkit.info/), Carlos R. L. Rodrigues, Ash
 * Searle (http://hexmen.com/blog/), Tyler Akins (http://rumkin.com), mdsjack
 * (http://www.mdsjack.bo.it), Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), Andrea Giammarchi
 * (http://webreflection.blogspot.com), Bayron Guevara, Cord, David, Karol
 * Kowalski, Leslie Hoare, Lincoln Ramsay, Mick@el, Nick Callen, Peter-Paul
 * Koch (http://www.quirksmode.org/js/beat.html), Philippe Baumann, Steve
 * Clay, booeyOH
 *
 * Licensed under the MIT (MIT-LICENSE.txt) license.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * Synopsis:
 * ----------
 *
 * This class provides the following functionality:
 *    1. Parse BibTex into a logical data javascript data structure.
 *    2. Output parsed BibTex entries as HTML, RTF, or BibTex.
 *
 *
 * The following usage instructions have been copyed and adapted from the PHP instructions located
 * at http://pear.php.net/manual/en/package.structures.structures-bibtex.intro.php
 * Introduction
 * --------------
 * Overview
 * ----------
 * This package provides methods to access information stored in a BibTex
 * file. During parsing it is possible to let the data be validated. In
 * addition. the creation of BibTex Strings as well as RTF Strings is also
 * supported. A few examples
 *
 * Example 1. Loading a BibTex File and printing the parsed array
 * <script src="BibTex.js"></script>
 * <script>
 * bibtex�=�new�BibTex();
 * bibtex.content = content; // the bibtex content as a string
 *
 * bibtex->parse();
 * alert(print_r($bibtex->data,true));
 * </script>
 *
 *
 * Options
 * --------
 * Options can be set either in the constructor or with the method
 * setOption(). When setting in the constructor the options are given in an
 * associative array. The options are:
 *
 * 	-	stripDelimiter (default: true) Stripping the delimiter surrounding the entries.
 * 	-	validate (default: true) Validation while parsing.
 * 	-	unwrap (default: false) Unwrapping entries while parsing.
 * 	-	wordWrapWidth (default: false) If set to a number higher one
 * 	    that the entries are wrapped after that amount of characters.
 * 	-	wordWrapBreak (default: \n) String used to break the line (attached to the line).
 * 	-	wordWrapCut (default: 0) If set to zero the line will we
 * 	    wrapped at the next possible space, if set to one the line will be
 * 	    wrapped exactly after the given amount of characters.
 * 	-	removeCurlyBraces (default: false) If set to true Curly Braces will be removed.
 *
 * Example of setting options in the constructor:
 *
 * Example 2. Setting options in the constructor
 * bibtex�=�new�BibTex({'validate':false,�'unwrap':true});
 *
 *
 * Example of setting options using the method setOption():
 *
 * Example 62-3. Setting options using setOption
 * bibtex�=�new�BibTex();
 * bibtex.setOption('validate',�false);
 * bibtex.setOption('unwrap',�true);
 *
 * Stored Data
 * ------------
 * The data is stored in the class variable data. This is a a list where
 * each entry is a hash table representing one bibtex-entry. The keys of
 * the hash table correspond to the keys used in bibtex and the values are
 * the corresponding values. Some of these keys are:
 *
 * 	-	cite - The key used in a LaTeX source to do the citing.
 * 	-	entryType - The type of the entry, like techreport, book and so on.
 * 	-	author - One or more authors of the entry. This entry is also a
 * 	    list with hash tables representing the authors as entries. The
 * 	    author has table is explained later.
 * 	-	title - Title of the entry.
 *
 * Author
 * ------
 * As described before the authors are stored in a list. Every entry
 * representing one author as a has table. The hash table consits of four
 * keys: first, von, last and jr. The keys are explained in the following
 * list:
 *
 * 	-	first - The first name of the author.
 * 	-	von - Some names have a 'von' part in their name. This is usually a sign of nobleness.
 * 	-	last - The last name of the author.
 * 	-	jr - Sometimes a author is the son of his father and has the
 * 	    same name, then the value would be jr. The same is true for the
 * 	    value sen but vice versa.
 *
 * Adding an entry
 * ----------------
 * To add an entry simply create a hash table with the needed keys and
 * values and call the method addEntry().
 * Example 4. Adding an entry
 * bibtex�������������������������=�new�BibTex();
 * var addarray�����������������������=�{};
 * addarray['entryType']����������=�'Article';
 * addarray['cite']���������������=�'art2';
 * addarray['title']��������������=�'Titel�of�the�Article';
 * addarray['author'] = [];
 * addarray['author'][0]['first']�=�'John';
 * addarray['author'][0]['last']��=�'Doe';
 * addarray['author'][1]['first']�=�'Jane';
 * addarray['author'][1]['last']��=�'Doe';
 * bibtex.addEntry(addarray);
 */

// ------------BEGIN PHP FUNCTIONS -------------------------------------------------------------- //

// {{{ array
function array( ) {
    // #!#!#!#!# array::$descr1 does not contain valid 'array' at line 258
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array/
    // +       version: 805.1716
    // +   original by: d3x
    // *     example 1: array('Kevin', 'van', 'Zonneveld');
    // *     returns 1: ['Kevin', 'van', 'Zonneveld'];

    return Array.prototype.slice.call(arguments);
}// }}}

// {{{ array_key_exists
function array_key_exists ( key, search ) {
    // Checks if the given key or index exists in the array
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_key_exists/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Felix Geisendoerfer (http://www.debuggable.com/felix)
    // *     example 1: array_key_exists('kevin', {'kevin': 'van Zonneveld'});
    // *     returns 1: true

    // input sanitation
    if( !search || (search.constructor !== Array && search.constructor !== Object) ){
        return false;
    }

    return key in search;
}// }}}// {{{ array_keys
function array_keys( input, search_value, strict ) {
    // Return all the keys of an array
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_keys/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
    // *     returns 1: {0: 'firstname', 1: 'surname'}

    var tmp_arr = new Array(), strict = !!strict, include = true, cnt = 0;

    for ( key in input ){
        include = true;
        if ( search_value != undefined ) {
            if( strict && input[key] !== search_value ){
                include = false;
            } else if( input[key] != search_value ){
                include = false;
            }
        }

        if( include ) {
            tmp_arr[cnt] = key;
            cnt++;
        }
    }

    return tmp_arr;
}// }}}

// {{{ in_array
function in_array(needle, haystack, strict) {
    // Checks if a value exists in an array
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_in_array/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true

    var found = false, key, strict = !!strict;

    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }

    return found;
}// }}}

// {{{ sizeof
function sizeof ( mixed_var, mode ) {
    // Alias of count()
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sizeof/
    // +       version: 804.1712
    // +   original by: Philip Peterson
    // -    depends on: count
    // *     example 1: sizeof([[0,0],[0,-4]], 'COUNT_RECURSIVE');
    // *     returns 1: 6
    // *     example 2: sizeof({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
    // *     returns 2: 6

    return count( mixed_var, mode );
}// }}}

// {{{ count
function count( mixed_var, mode ) {
    // Count elements in an array, or properties in an object
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_count/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: _argos
    // *     example 1: count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
    // *     returns 1: 6
    // *     example 2: count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
    // *     returns 2: 6

    var key, cnt = 0;

    if( mode == 'COUNT_RECURSIVE' ) mode = 1;
    if( mode != 1 ) mode = 0;

    for (key in mixed_var){
        cnt++;
        if( mode==1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor === Object) ){
            cnt += count(mixed_var[key], 1);
        }
    }

    return cnt;
}// }}}

// {{{ explode
function explode( delimiter, string, limit ) {
    // Split a string by string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_explode/
    // +       version: 805.1715
    // +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: kenneth
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: d3x
    // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: explode(' ', 'Kevin van Zonneveld');
    // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
    // *     example 2: explode('=', 'a=bc=d', 2);
    // *     returns 2: ['a', 'bc=d']

    var emptyArray = { 0: '' };

    // third argument is not required
    if ( arguments.length < 2
        || typeof arguments[0] == 'undefined'
        || typeof arguments[1] == 'undefined' )
    {
        return null;
    }

    if ( delimiter === ''
        || delimiter === false
        || delimiter === null )
    {
        return false;
    }

    if ( typeof delimiter == 'function'
        || typeof delimiter == 'object'
        || typeof string == 'function'
        || typeof string == 'object' )
    {
        return emptyArray;
    }

    if ( delimiter === true ) {
        delimiter = '1';
    }

    if (!limit) {
        return string.toString().split(delimiter.toString());
    } else {
        // support for limit argument
        var splitted = string.toString().split(delimiter.toString());
        var partA = splitted.splice(0, limit - 1);
        var partB = splitted.join(delimiter.toString());
        partA.push(partB);
        return partA;
    }
}// }}}

// {{{ implode
function implode( glue, pieces ) {
    // Join array elements with a string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_implode/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: _argos
    // *     example 1: implode(' ', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin van Zonneveld'

    return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );
}// }}}

// {{{ join
function join( glue, pieces ) {
    // Alias of implode()
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_join/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: implode
    // *     example 1: join(' ', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin van Zonneveld'

    return implode( glue, pieces );
}// }}}

// {{{ split
function split( delimiter, string ) {
    // Split string into array by regular expression
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_split/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: explode
    // *     example 1: split(' ', 'Kevin van Zonneveld');
    // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}

    return explode( delimiter, string );
}// }}}

// {{{ str_replace
function str_replace(search, replace, subject) {
    // Replace all occurrences of the search string with the replacement string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_replace/
    // +       version: 805.3114
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // -    depends on: is_array
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'

    var f = search, r = replace, s = subject;
    var ra = is_array(r), sa = is_array(s), f = [].concat(f), r = [].concat(r), i = (s = [].concat(s)).length;

    while (j = 0, i--) {
        while (s[i] = s[i].split(f[j]).join(ra ? r[j] || "" : r[0]), ++j in f){};
    };

    return sa ? s : s[0];
}// }}}

// {{{ strlen
function strlen( string ){
    // Get string length
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strlen/
    // +       version: 805.1616
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Sakimori
    // *     example 1: strlen('Kevin van Zonneveld');
    // *     returns 1: 19

    return ("" + string).length;
}// }}}

// {{{ strpos
function strpos( haystack, needle, offset){
    // Find position of first occurrence of a string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strpos/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);
    // *     returns 1: 14

    var i = haystack.indexOf( needle, offset ); // returns -1
    return i >= 0 ? i : false;
}// }}}

// {{{ strrpos
function strrpos( haystack, needle, offset){
    // Find position of last occurrence of a char in a string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strrpos/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strrpos('Kevin van Zonneveld', 'e');
    // *     returns 1: 16

    var i = haystack.lastIndexOf( needle, offset ); // returns -1
    return i >= 0 ? i : false;
}// }}}

// {{{ strtolower
function strtolower( str ) {
    // Make a string lowercase
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strtolower/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strtolower('Kevin van Zonneveld');
    // *     returns 1: 'kevin van zonneveld'

    return str.toLowerCase();
}// }}}

// {{{ strtoupper
function strtoupper( str ) {
    // Make a string uppercase
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strtoupper/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strtoupper('Kevin van Zonneveld');
    // *     returns 1: 'KEVIN VAN ZONNEVELD'

    return str.toUpperCase();
}// }}}

// {{{ substr
function substr( f_string, f_start, f_length ) {
    // Return part of a string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_substr/
    // +       version: 804.1712
    // +     original by: Martijn Wieringa
    // *         example 1: substr('abcdef', 0, -1);
    // *         returns 1: 'abcde'

    if(f_start < 0) {
        f_start += f_string.length;
    }

    if(f_length == undefined) {
        f_length = f_string.length;
    } else if(f_length < 0){
        f_length += f_string.length;
    } else {
        f_length += f_start;
    }

    if(f_length < f_start) {
        f_length = f_start;
    }

    return f_string.substring(f_start, f_length);
}// }}}

// {{{ trim
function trim( str, charlist ) {
    // Strip whitespace (or other characters) from the beginning and end of a string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_trim/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: mdsjack (http://www.mdsjack.bo.it)
    // +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
    // +      input by: Erkekjetter
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: DxGx
    // +   improved by: Steven Levithan (http://blog.stevenlevithan.com)
    // *     example 1: trim('    Kevin van Zonneveld    ');
    // *     returns 1: 'Kevin van Zonneveld'
    // *     example 2: trim('Hello World', 'Hdle');
    // *     returns 2: 'o Wor'

    var whitespace;

    if(!charlist){
        whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    } else{
        whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
    }

	for (var i = 0; i < str.length; i++) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
		str = str.substring(i);
		break;
		}
	}
	for (i = str.length - 1; i >= 0; i--) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(0, i + 1);
			break;
    	}
	}
	return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}// }}}


// {{{ wordwrap
function wordwrap( str, int_width, str_break, cut ) {
    // Wraps a string to a given number of characters
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_wordwrap/
    // +       version: 804.1715
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Nick Callen
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // *     example 1: wordwrap('Kevin van Zonneveld', 6, '|', true);
    // *     returns 1: 'Kevin |van |Zonnev|eld'

    var m = int_width, b = str_break, c = cut;
    var i, j, l, s, r;

    if(m < 1) {
        return str;
    }
    for(i = -1, l = (r = str.split("\n")).length; ++i < l; r[i] += s) {
        for(s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : "")){
            j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
        }
    }

    return r.join("\n");
}// }}}

// {{{ is_string
function is_string( mixed_var ){
    // Find whether the type of a variable is string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_string/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: is_string('23');
    // *     returns 1: true
    // *     example 2: is_string(23.5);
    // *     returns 2: false

    return (typeof( mixed_var ) == 'string');
}// }}}


// {{{ ord
function ord( string ) {
    // Return ASCII value of character
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ord/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: ord('K');
    // *     returns 1: 75

    return string.charCodeAt(0);
}// }}}

// {{{ array_unique
function array_unique( array ) {
    // Removes duplicate values from an array
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_unique/
    // +       version: 805.211
    // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // +      input by: duncan
    // +    bufixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_unique(['Kevin','Kevin','van','Zonneveld']);
    // *     returns 1: ['Kevin','van','Zonneveld']

    var p, i, j, tmp_arr = array;
    for(i = tmp_arr.length; i;){
        for(p = --i; p > 0;){
            if(tmp_arr[i] === tmp_arr[--p]){
                for(j = p; --p && tmp_arr[i] === tmp_arr[p];);
                i -= tmp_arr.splice(p + 1, j - p).length;
            }
        }
    }

    return tmp_arr;
}// }}}

// {{{ print_r
function print_r( array, return_val ) {
    // Prints human-readable information about a variable
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_print_r/
    // +       version: 805.2023
    // +   original by: Michael White (http://crestidg.com)
    // +   improved by: Ben Bryan
    // *     example 1: print_r(1, true);
    // *     returns 1: 1

    var output = "", pad_char = " ", pad_val = 4;

    var formatArray = function (obj, cur_depth, pad_val, pad_char) {
        if (cur_depth > 0) {
            cur_depth++;
        }

        var base_pad = repeat_char(pad_val*cur_depth, pad_char);
        var thick_pad = repeat_char(pad_val*(cur_depth+1), pad_char);
        var str = "";

        if (obj instanceof Array || obj instanceof Object) {
            str += "Array\n" + base_pad + "(\n";
            for (var key in obj) {
                if (obj[key] instanceof Array || obj[key] instanceof Object) {
                    str += thick_pad + "["+key+"] => "+formatArray(obj[key], cur_depth+1, pad_val, pad_char);
                } else {
                    str += thick_pad + "["+key+"] => " + obj[key] + "\n";
                }
            }
            str += base_pad + ")\n";
        } else {
            str = obj.toString();
        }

        return str;
    };

    var repeat_char = function (len, pad_char) {
        var str = "";
        for(var i=0; i < len; i++) {
            str += pad_char;
        };
        return str;
    };
    output = formatArray(array, 0, pad_val, pad_char);

    if (return_val !== true) {
        document.write("<pre>" + output + "</pre>");
        return true;
    } else {
        return output;
    }
}// }}}
// {{{ is_array
function is_array( mixed_var ) {
    // Finds whether a variable is an array
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_array/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   bugfixed by: Cord
    // *     example 1: is_array(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
    // *     example 2: is_array('Kevin van Zonneveld');
    // *     returns 2: false

    return ( mixed_var instanceof Array );
}// }}}

//------------END PHP FUNCTIONS --------------------------------------------------------------   //

/**
 * BibTex
 *
 * A class which provides common methods to access and
 * create Strings in BibTex format+
 * Example 1: Parsing a BibTex File and returning the number of entries
 * <code>
 * bibtex = new BibTex();
 * bibtex.content = '....';
 *
 * bibtex.parse();
 * print "There are "+bibtex.amount()+" entries";
 * </code>
 * Example 2: Parsing a BibTex File and getting all Titles
 * <code>
 * bibtex = new BibTex();
 * bibtex.content="...";
 * bibtex.parse();
 * for (var i in bibtex.data) {
 *  alert( bibtex.data[i]['title']+"<br />");
 * }
 * </code>
 * Example 3: Adding an entry and printing it in BibTex Format
 * <code>
 * bibtex                         = new BibTex();
 * addarray                       = {}
 * addarray['entryType']          = 'Article';
 * addarray['cite']               = 'art2';
 * addarray['title']              = 'Titel2';
 * addarray['author']			  = [];
 * addarray['author'][0]['first'] = 'John';
 * addarray['author'][0]['last']  = 'Doe';
 * addarray['author'][1]['first'] = 'Jane';
 * addarray['author'][1]['last']  = 'Doe';
 * bibtex.addEntry(addarray);
 * alert( nl2br(bibtex.bibTex()));
 * </code>
 *
 * @category   Structures
 * @package    BibTex
 * @author     Steve Hannah <shannah at sfu dot ca>
 * @adapted-from Structures_BibTex by  Elmar Pitschke <elmar+pitschke@gmx+de>
 * @copyright  2008 Simon Fraser University
 * @license    http://www.gnu.org/licenses/lgpl.html
 * @version    Release: 0.1
 * @link       http://webgroup.fas.sfu.ca/projects/JSBibTexParser
 */
function BibTex(options)
{

	if ( typeof options == 'undefined' ) options = {};
    /**
     * Array with the BibTex Data
     *
     * @access public
     * @var array
     */
    this.data;
    /**
     * String with the BibTex content
     *
     * @access public
     * @var string
     */
    this.content;
    /**
     * Array with possible Delimiters for the entries
     *
     * @access private
     * @var array
     */
    this._delimiters;
    /**
     * Array to store warnings
     *
     * @access public
     * @var array
     */
    this.warnings;
    /**
     * Run-time configuration options
     *
     * @access private
     * @var array
     */
    this._options;
    /**
     * RTF Format String
     *
     * @access public
     * @var string
     */
    this.rtfstring;
    /**
     * HTML Format String
     *
     * @access public
     * @var string
     */
    this.htmlstring;
    /**
     * Array with the "allowed" entry types
     *
     * @access public
     * @var array
     */
    this.allowedEntryTypes;
    /**
     * Author Format Strings
     *
     * @access public
     * @var string
     */
    this.authorstring;

    this._delimiters     = {'"':'"',
                                        '{':'}'};
	this.data            = [];
	this.content         = '';
	//this._stripDelimiter = stripDel;
	//this._validate       = val;
	this.warnings        = [];
	this._options        = {
		'stripDelimiter'    : true,
		'validate'          : true,
		'unwrap'            : false,
		'wordWrapWidth'     : false,
		'wordWrapBreak'     : "\n",
		'wordWrapCut'       : 0,
		'removeCurlyBraces' : false,
		'extractAuthors'    : true
	};
	for (option in options) {
		test = this.setOption(option, options[option]);
		if (this.isError(test)) {
			//Currently nothing is done here, but it could for example raise an warning
		}
	}
	this.rtfstring         = 'AUTHORS, "{\b TITLE}", {\i JOURNAL}, YEAR';
	this.htmlstring        = 'AUTHORS, "<strong>TITLE</strong>", <em>JOURNAL</em>, YEAR<br />';
	this.allowedEntryTypes = array(
		'article',
		'book',
		'booklet',
		'confernce',
		'inbook',
		'incollection',
		'inproceedings',
		'manual',
		'mastersthesis',
		'misc',
		'phdthesis',
		'proceedings',
		'techreport',
		'unpublished'
	);
	this.authorstring = 'VON LAST, JR, FIRST';

}


BibTex.prototype = {

    /**
     * Constructor
     *
     * @access public
     * @return void
     */


    /**
     * Sets run-time configuration options
     *
     * @access public
     * @param string option option name
     * @param mixed  value value for the option
     * @return mixed true on success PEAR_Error on failure
     */
    setOption : function(option, value)
    {
        ret = true;
        if (array_key_exists(option, this._options)) {
            this._options[option] = value;
        } else {
            ret = this.raiseError('Unknown option '+option);
        }
        return ret;
    },

    /**
     * Reads a give BibTex File
     *
     * @access public
     * @param string filename Name of the file
     * @return mixed true on success PEAR_Error on failure
     *
    function loadFile(filename)
    {
        if (file_exists(filename)) {
            if ((this.content = @file_get_contents(filename)) === false) {
                return PEAR::raiseError('Could not open file '+filename);
            } else {
                this._pos    = 0;
                this._oldpos = 0;
                return true;
            }
        } else {
            return PEAR::raiseError('Could not find file '+filename);
        }
    }
	*/
    /**
     * Parses what is stored in content and clears the content if the parsing is successfull+
     *
     * @access public
     * @return boolean true on success and PEAR_Error if there was a problem
     */
    parse: function()
    {
    	//alert("starting to parse");
        //The amount of opening braces is compared to the amount of closing braces
        //Braces inside comments are ignored
        this.warnings = [];
        this.data     = [];
        var valid          = true;
        var open           = 0;
        var entry          = false;
        var charv           = '';
        var lastchar       = '';
        var buffer         = '';
        for (var i = 0; i < strlen(this.content); i++) {
            charv = substr(this.content, i, 1);
            if ((0 != open) && ('@' == charv)) {
                if (!this._checkAt(buffer)) {
                    this._generateWarning('WARNING_MISSING_END_BRACE', '', buffer);
                    //To correct the data we need to insert a closing brace
                    charv     = '}';
                    i--;
                }
            }
            if ((0 == open) && ('@' == charv)) { //The beginning of an entry
                entry = true;
            } else if (entry && ('{' == charv) && ('\\' != lastchar)) { //Inside an entry and non quoted brace is opening
                open++;
            } else if (entry && ('}' == charv) && ('\\' != lastchar)) { //Inside an entry and non quoted brace is closing
                open--;
                if (open < 0) { //More are closed than opened
                    valid = false;
                }
                if (0 == open) { //End of entry
                    entry     = false;
                    var entrydata = this._parseEntry(buffer);
                    if (!entrydata) {
                        /**
                         * This is not yet used+
                         * We are here if the Entry is either not correct or not supported+
                         * But this should already generate a warning+
                         * Therefore it should not be necessary to do anything here
                         */
                    } else {
                        this.data[this.data.length] = entrydata;
                    }
                    buffer = '';
                }
            }
            if (entry) { //Inside entry
                buffer += charv;
            }
            lastchar = charv;
        }
        //If open is one it may be possible that the last ending brace is missing
        if (1 == open) {
            entrydata = this._parseEntry(buffer);
            if (!entrydata) {
                valid = false;
            } else {
                this.data[this.data.length] = entrydata;
                buffer = '';
                open   = 0;
            }
        }
        //At this point the open should be zero
        if (0 != open) {
            valid = false;
        }
        //Are there Multiple entries with the same cite?
        if (this._options['validate']) {
            cites = array();
            for (var i=0; i< this.data.length; i++ ) {
                cites[cites.length] = this.data[i]['cite'];
            }
            unique = array_unique(cites.slice(0));
            if (sizeof(cites) != sizeof(unique)) { //Some values have not been unique!
                notuniques = array();
                for (var i = 0; i < sizeof(cites); i++) {
                    if ('' == unique[i] || unique[i] == undefined) {
                        notuniques[notuniques.length] = cites[i];
                    }
                }
                this._generateWarning('WARNING_MULTIPLE_ENTRIES', implode(',',notuniques));
            }
        }
        //alert("finished parsing");
        if (valid) {
            this.content = '';
            return true;
        } else {
            return this.raiseError('Unbalanced parenthesis');
        }
    },

    /**
     * Extracting the data of one content
     *
     * The parse function splits the content into its entries+
     * Then every entry is parsed by this function+
     * It parses the entry backwards+
     * First the last '=' is searched and the value extracted from that+
     * A copy is made of the entry if warnings should be generated+ This takes quite
     * some memory but it is needed to get good warnings+ If nor warnings are generated
     * then you don have to worry about memory+
     * Then the last ',' is searched and the field extracted from that+
     * Again the entry is shortened+
     * Finally after all field:value pairs the cite and type is extraced and the
     * authors are splitted+
     * If there is a problem false is returned+
     *
     * @access private
     * @param string entry The entry
     * @return array The representation of the entry or false if there is a problem
     */
    '_parseEntry': function(entry)
    {
        var entrycopy = '';
        if (this._options['validate']) {
            entrycopy = entry; //We need a copy for printing the warnings
        }
        var ret = {};
        if ('@string' ==  strtolower(substr(entry, 0, 7))) {
            //String are not yet supported!
            if (this._options['validate']) {
                this._generateWarning('STRING_ENTRY_NOT_YET_SUPPORTED', '', entry+'}');
            }
        } else if ('@preamble' ==  strtolower(substr(entry, 0, 9))) {
            //Preamble not yet supported!
            if (this._options['validate']) {
                this._generateWarning('PREAMBLE_ENTRY_NOT_YET_SUPPORTED', '', entry+'}');
            }
        } else {
            //Parsing all fields
            while (strrpos(entry,'=') !== false) {
                position = strrpos(entry, '=');
                //Checking that the equal sign is not quoted or is not inside a equation (For example in an abstract)
                proceed  = true;
                if (substr(entry, position-1, 1) == '\\') {
                    proceed = false;
                }
                if (proceed) {
                    proceed = this._checkEqualSign(entry, position);
                }
                while (!proceed) {
                    substring = substr(entry, 0, position);
                    position  = strrpos(substring,'=');
                    proceed   = true;
                    if (substr(entry, position-1, 1) == '\\') {
                        proceed = false;
                    }
                    if (proceed) {
                        proceed = this._checkEqualSign(entry, position);
                    }
                }

                value = trim(substr(entry, position+1));
                entry = substr(entry, 0, position);

                if (',' == substr(value, strlen(value)-1, 1)) {
                    value = substr(value, 0, -1);
                }
                if (this._options['validate']) {
                    this._validateValue(value, entrycopy);
                }
                if (this._options['stripDelimiter']) {
                    value = this._stripDelimiter(value);
                }
                if (this._options['unwrap']) {
                    value = this._unwrap(value);
                }
                if (this._options['removeCurlyBraces']) {
                    value = this._removeCurlyBraces(value);
                }
                position    = strrpos(entry, ',');
                field       = strtolower(trim(substr(entry, position+1)));
                ret[field] = value;
                entry       = substr(entry, 0, position);
            }
            //Parsing cite and entry type
            var arr = split('{', entry);
            ret['cite'] = trim(arr[1]);
            ret['entryType'] = strtolower(trim(arr[0]));
            //alert(array_keys(ret));
            if ('@' == ret['entryType'].substring(0,1)) {
                ret['entryType'] = substr(ret['entryType'], 1);
            }
            if (this._options['validate']) {
                if (!this._checkAllowedEntryType(ret['entryType'])) {
                    this._generateWarning('WARNING_NOT_ALLOWED_ENTRY_TYPE', ret['entryType'], entry+'}');
                }
            }
            //Handling the authors
            if (in_array('author', array_keys(ret)) && this._options['extractAuthors']) {
                ret['author'] = this._extractAuthors(ret['author']);
            }
        }
        return ret;
    },

    /**
     * Checking whether the position of the '=' is correct
     *
     * Sometimes there is a problem if a '=' is used inside an entry (for example abstract)+
     * This method checks if the '=' is outside braces then the '=' is correct and true is returned+
     * If the '=' is inside braces it contains to a equation and therefore false is returned+
     *
     * @access private
     * @param string entry The text of the whole remaining entry
     * @param int the current used place of the '='
     * @return bool true if the '=' is correct, false if it contains to an equation
     */
    '_checkEqualSign': function(entry, position)
    {
        var ret = true;
        //This is getting tricky
        //We check the string backwards until the position and count the closing an opening braces
        //If we reach the position the amount of opening and closing braces should be equal
        var length = strlen(entry);
        var open   = 0;
        for (var i = length-1; i >= position; i--) {
            precedingchar = substr(entry, i-1, 1);
            charv          = substr(entry, i, 1);
            if (('{' == charv) && ('\\' != precedingchar)) {
                open++;
            }
            if (('}' == charv) && ('\\' != precedingchar)) {
                open--;
            }
        }
        if (0 != open) {
            ret = false;
        }
        //There is still the posibility that the entry is delimited by double quotes+
        //Then it is possible that the braces are equal even if the '=' is in an equation+
        if (ret) {
            entrycopy = trim(entry);
            lastchar  = substr(entrycopy,strlen(entrycopy)-1,1);
            if (',' == lastchar) {
                lastchar = substr(entrycopy, strlen(entrycopy)-2, 1);
            }
            if ('"' == lastchar) {
                //The return value is set to false
                //If we find the closing " before the '=' it is set to true again+
                //Remember we begin to search the entry backwards so the " has to show up twice - ending and beginning delimiter
                ret = false;
                found = 0;
                for (var i = length; i >= position; i--) {
                    precedingchar = substr(entry, i-1, 1);
                    charv          = substr(entry, i, 1);
                    if (('"' == charv) && ('\\' != precedingchar)) {
                        found++;
                    }
                    if (2 == found) {
                        ret = true;
                        break;
                    }
                }
            }
        }
        return ret;
    },

    /**
     * Checking if the entry type is allowed
     *
     * @access private
     * @param string entry The entry to check
     * @return bool true if allowed, false otherwise
     */
    '_checkAllowedEntryType': function(entry)
    {
        return in_array(entry, this.allowedEntryTypes);
    },

    /**
     * Checking whether an at is outside an entry
     *
     * Sometimes an entry misses an entry brace+ Then the at of the next entry seems to be
     * inside an entry+ This is checked here+ When it is most likely that the at is an opening
     * at of the next entry this method returns true+
     *
     * @access private
     * @param string entry The text of the entry until the at
     * @return bool true if the at is correct, false if the at is likely to begin the next entry+
     */
    '_checkAt': function(entry)
    {
        var ret     = false;
        var opening = array_keys(this._delimiters);
        var closing = array_values(this._delimiters);
        //Getting the value (at is only allowd in values)
        if (strrpos(entry,'=') !== false) {
            position = strrpos(entry, '=');
            proceed  = true;
            if (substr(entry, position-1, 1) == '\\') {
                proceed = false;
            }
            while (!proceed) {
                substring = substr(entry, 0, position);
                position  = strrpos(substring,'=');
                proceed   = true;
                if (substr(entry, position-1, 1) == '\\') {
                    proceed = false;
                }
            }
            value    = trim(substr(entry, position+1));
            open     = 0;
            charv     = '';
            lastchar = '';
            for (var i = 0; i < strlen(value); i++) {
                charv = substr(this.content, i, 1);
                if (in_array(charv, opening) && ('\\' != lastchar)) {
                    open++;
                } else if (in_array(charv, closing) && ('\\' != lastchar)) {
                    open--;
                }
                lastchar = charv;
            }
            //if open is grater zero were are inside an entry
            if (open>0) {
                ret = true;
            }
        }
        return ret;
    },

    /**
     * Stripping Delimiter
     *
     * @access private
     * @param string entry The entry where the Delimiter should be stripped from
     * @return string Stripped entry
     */
    '_stripDelimiter': function(entry)
    {
        var beginningdels = array_keys(this._delimiters);
        var ength        = strlen(entry);
        var firstchar     = substr(entry, 0, 1);
        var lastchar      = substr(entry, -1, 1);
        while (in_array(firstchar, beginningdels)) { //The first character is an opening delimiter
            if (lastchar == this._delimiters[firstchar]) { //Matches to closing Delimiter
                entry = substr(entry, 1, -1);
            } else {
                break;
            }
            firstchar = substr(entry, 0, 1);
            lastchar  = substr(entry, -1, 1);
        }
        return entry;
    },

    /**
     * Unwrapping entry
     *
     * @access private
     * @param string entry The entry to unwrap
     * @return string unwrapped entry
     */
    '_unwrap': function(entry)
    {
        entry = entry.replace(/\s+/, ' ');
        return trim(entry);
    },

    /**
     * Wordwrap an entry
     *
     * @access private
     * @param string entry The entry to wrap
     * @return string wrapped entry
     */
    '_wordwrap': function(entry)
    {
        if ( (''!=entry) && (is_string(entry)) ) {
            entry = wordwrap(entry, this._options['wordWrapWidth'], this._options['wordWrapBreak'], this._options['wordWrapCut']);
        }
        return entry;
    },

    /**
     * Extracting the authors
     *
     * @access private
     * @param string entry The entry with the authors
     * @return array the extracted authors
     */
    '_extractAuthors': function(entry) {
        entry       = this._unwrap(entry);
        var authorarray = array();
        authorarray = split(' and ', entry);
        for (var i = 0; i < sizeof(authorarray); i++) {
            var author = trim(authorarray[i]);
            /*The first version of how an author could be written (First von Last)
             has no commas in it*/
            var first    = '';
            var von      = '';
            var last     = '';
            var jr       = '';
            if (strpos(author, ',') === false) {
                var tmparray = array();
                //tmparray = explode(' ', author);
                tmparray = split(' |~', author);
                var size     = sizeof(tmparray);
                if (1 == size) { //There is only a last
                    last = tmparray[0];
                } else if (2 == size) { //There is a first and a last
                    first = tmparray[0];
                    last  = tmparray[1];
                } else {
                    var invon  = false;
                    var inlast = false;
                    for (var j=0; j<(size-1); j++) {
                        if (inlast) {
                            last += ' '+tmparray[j];
                        } else if (invon) {
                            casev = this._determineCase(tmparray[j]);
                            if (this.isError(casev)) {
                                // IGNORE?
                            } else if ((0 == casev) || (-1 == casev)) { //Change from von to last
                                //You only change when there is no more lower case there
                                islast = true;
                                for (var k=(j+1); k<(size-1); k++) {
                                    futurecase = this._determineCase(tmparray[k]);
                                    if (this.isError(casev)) {
                                        // IGNORE?
                                    } else if (0 == futurecase) {
                                        islast = false;
                                    }
                                }
                                if (islast) {
                                    inlast = true;
                                    if (-1 == casev) { //Caseless belongs to the last
                                        last += ' '+tmparray[j];
                                    } else {
                                        von  += ' '+tmparray[j];
                                    }
                                } else {
                                    von    += ' '+tmparray[j];
                                }
                            } else {
                                von += ' '+tmparray[j];
                            }
                        } else {
                            var casev = this._determineCase(tmparray[j]);
                            if (this.isError(casev)) {
                                // IGNORE?
                            } else if (0 == casev) { //Change from first to von
                                invon = true;
                                von   += ' '+tmparray[j];
                            } else {
                                first += ' '+tmparray[j];
                            }
                        }
                    }
                    //The last entry is always the last!
                    last += ' '+tmparray[size-1];
                }
            } else { //Version 2 and 3
                var tmparray     = array();
                tmparray     = explode(',', author);
                //The first entry must contain von and last
                vonlastarray = array();
                vonlastarray = explode(' ', tmparray[0]);
                size         = sizeof(vonlastarray);
                if (1==size) { //Only one entry.got to be the last
                    last = vonlastarray[0];
                } else {
                    inlast = false;
                    for (var j=0; j<(size-1); j++) {
                        if (inlast) {
                            last += ' '+vonlastarray[j];
                        } else {
                            if (0 != (this._determineCase(vonlastarray[j]))) { //Change from von to last
                                islast = true;
                                for (var k=(j+1); k<(size-1); k++) {
                                    this._determineCase(vonlastarray[k]);
                                    casev = this._determineCase(vonlastarray[k]);
                                    if (this.isError(casev)) {
                                        // IGNORE?
                                    } else if (0 == casev) {
                                        islast = false;
                                    }
                                }
                                if (islast) {
                                    inlast = true;
                                    last   += ' '+vonlastarray[j];
                                } else {
                                    von    += ' '+vonlastarray[j];
                                }
                            } else {
                                von    += ' '+vonlastarray[j];
                            }
                        }
                    }
                    last += ' '+vonlastarray[size-1];
                }
                //Now we check if it is version three (three entries in the array (two commas)
                if (3==sizeof(tmparray)) {
                    jr = tmparray[1];
                }
                //Everything in the last entry is first
                first = tmparray[sizeof(tmparray)-1];
            }
            authorarray[i] = {'first':trim(first), 'von':trim(von), 'last':trim(last), 'jr':trim(jr)};
        }
        return authorarray;
    },

    /**
     * Case Determination according to the needs of BibTex
     *
     * To parse the Author(s) correctly a determination is needed
     * to get the Case of a word+ There are three possible values:
     * - Upper Case (return value 1)
     * - Lower Case (return value 0)
     * - Caseless   (return value -1)
     *
     * @access private
     * @param string word
     * @return int The Case or PEAR_Error if there was a problem
     */
    '_determineCase': function(word) {
        var ret         = -1;
        var trimmedword = trim (word);
        /*We need this variable+ Without the next of would not work
         (trim changes the variable automatically to a string!)*/
        if (is_string(word) && (strlen(trimmedword) > 0)) {
            var i         = 0;
            var found     = false;
            var openbrace = 0;
            while (!found && (i <= strlen(word))) {
                var letter = substr(trimmedword, i, 1);
                var ordv    = ord(letter);
                if (ordv == 123) { //Open brace
                    openbrace++;
                }
                if (ordv == 125) { //Closing brace
                    openbrace--;
                }
                if ((ordv>=65) && (ordv<=90) && (0==openbrace)) { //The first character is uppercase
                    ret   = 1;
                    found = true;
                } else if ( (ordv>=97) && (ordv<=122) && (0==openbrace) ) { //The first character is lowercase
                    ret   = 0;
                    found = true;
                } else { //Not yet found
                    i++;
                }
            }
        } else {
            ret = this.raiseError('Could not determine case on word: '+word);
        }
        return ret;
    },


    'isError': function(obj){
    	return ( typeof(obj) == 'Object' && obj.isError == 1 );

    },

    /**
     * Validation of a value
     *
     * There may be several problems with the value of a field+
     * These problems exist but do not break the parsing+
     * If a problem is detected a warning is appended to the array warnings+
     *
     * @access private
     * @param string entry The entry aka one line which which should be validated
     * @param string wholeentry The whole BibTex Entry which the one line is part of
     * @return void
     */
    '_validateValue': function(entry, wholeentry)
    {
        //There is no @ allowed if the entry is enclosed by braces
        if ( entry.match(/^{.*@.*}/)) {
            this._generateWarning('WARNING_AT_IN_BRACES', entry, wholeentry);
        }
        //No escaped " allowed if the entry is enclosed by double quotes
        if (entry.match(/^\".*\\".*\"/)) {
            this._generateWarning('WARNING_ESCAPED_DOUBLE_QUOTE_INSIDE_DOUBLE_QUOTES', entry, wholeentry);
        }
        //Amount of Braces is not correct
        var open     = 0;
        var lastchar = '';
        var charv     = '';
        for (var i = 0; i < strlen(entry); i++) {
            charv = substr(entry, i, 1);
            if (('{' == charv) && ('\\' != lastchar)) {
                open++;
            }
            if (('}' == charv) && ('\\' != lastchar)) {
                open--;
            }
            lastchar = charv;
        }
        if (0 != open) {
            this._generateWarning('WARNING_UNBALANCED_AMOUNT_OF_BRACES', entry, wholeentry);
        }
    },

    /**
     * Remove curly braces from entry
     *
     * @access private
     * @param string value The value in which curly braces to be removed
     * @param string Value with removed curly braces
     */
    '_removeCurlyBraces': function(value)
    {
        //First we save the delimiters
        var beginningdels = array_keys(this._delimiters);
        var firstchar     = substr(value, 0, 1);
        var lastchar      = substr(value, -1, 1);
        var begin         = '';
        var end           = '';
        while (in_array(firstchar, beginningdels)) { //The first character is an opening delimiter
            if (lastchar == this._delimiters[firstchar]) { //Matches to closing Delimiter
                begin += firstchar;
                end   += lastchar;
                value  = substr(value, 1, -1);
            } else {
                break;
            }
            firstchar = substr(value, 0, 1);
            lastchar  = substr(value, -1, 1);
        }
        //Now we get rid of the curly braces
        var pattern     = '/([^\\\\])\{(+*?[^\\\\])\}/';
        var replacement = '12';
        value       = value.replace(/([^\\\\])\{(.*?[^\\\\])\}/, replacement);
        //Reattach delimiters
        value       = begin+value+end;
        return value;
    },

    /**
     * Generates a warning
     *
     * @access private
     * @param string type The type of the warning
     * @param string entry The line of the entry where the warning occurred
     * @param string wholeentry OPTIONAL The whole entry where the warning occurred
     */
    '_generateWarning': function(type, entry, wholeentry)
    {
    	if ( typeof wholeentry == 'undefined' ) wholeentry = '';
        var warning = {};
        warning['warning']    = type;
        warning['entry']      = entry;
        warning['wholeentry'] = wholeentry;
        this.warnings[this.warnings.length]      = warning;
    },

    /**
     * Cleares all warnings
     *
     * @access public
     */
    'clearWarnings': function()
    {
        this.warnings = array();
    },

    /**
     * Is there a warning?
     *
     * @access public
     * @return true if there is, false otherwise
     */
    'hasWarning': function()
    {
        if (sizeof(this.warnings)>0) return true;
        else return false;
    },

    /**
     * Returns the amount of available BibTex entries
     *
     * @access public
     * @return int The amount of available BibTex entries
     */
    'amount': function()
    {
        return sizeof(this.data);
    },
    /**
     * Returns the author formatted
     *
     * The Author is formatted as setted in the authorstring
     *
     * @access private
     * @param array array Author array
     * @return string the formatted author string
     */
    '_formatAuthor': function(array)
    {
        if (!array_key_exists('von', array)) {
            array['von'] = '';
        } else {
            array['von'] = trim(array['von']);
        }
        if (!array_key_exists('last', array)) {
            array['last'] = '';
        } else {
            array['last'] = trim(array['last']);
        }
        if (!array_key_exists('jr', array)) {
            array['jr'] = '';
        } else {
            array['jr'] = trim(array['jr']);
        }
        if (!array_key_exists('first', array)) {
            array['first'] = '';
        } else {
            array['first'] = trim(array['first']);
        }
        ret = this.authorstring;
        ret = str_replace("VON", array['von'], ret);
        ret = str_replace("LAST", array['last'], ret);
        ret = str_replace("JR", array['jr'], ret);
        ret = str_replace("FIRST", array['first'], ret);
        return trim(ret);
    },

    /**
     * Converts the stored BibTex entries to a BibTex String
     *
     * In the field list, the author is the last field+
     *
     * @access public
     * @return string The BibTex string
     */
    'bibTex': function()
    {
        var bibtex = '';
        for (var i=0 ; i<this.data.length; i++) {
        	var entry = this.data[i];
            //Intro
            bibtex += '@'+strtolower(entry['entryType'])+' { '+entry['cite']+",\n";
            //Other fields except author
            for (key in entry) {
            	var val = entry[key];
                if (this._options['wordWrapWidth']>0) {
                    val = this._wordWrap(val);
                }
                if (!in_array(key, array('cite','entryType','author'))) {
                    bibtex += "\t"+key+' = {'+val+"},\n";
                }
            }
            //Author
            if (array_key_exists('author', entry)) {
                if (this._options['extractAuthors']) {
                    tmparray = array(); //In this array the authors are saved and the joind with an and
                    for (j in entry['author']) {
                    	var authorentry = entry['author'][j];
                        tmparray[tmparray.length] = this._formatAuthor(authorentry);
                    }
                    author = join(' and ', tmparray);
                } else {
                    author = entry['author'];
                }
            } else {
                author = '';
            }
            bibtex += "\tauthor = {"+author+"}\n";
            bibtex+="}\n\n";
        }
        return bibtex;
    },

    /**
     * Adds a new BibTex entry to the data
     *
     * @access public
     * @param array newentry The new data to add
     * @return void
     */
    'addEntry': function(newentry)
    {
        this.data[this.data.length] = newentry;
    },

    /**
     * Returns statistic
     *
     * This functions returns a hash table+ The keys are the different
     * entry types and the values are the amount of these entries+
     *
     * @access public
     * @return array Hash Table with the data
     */
    'getStatistic': function()
    {
        var ret = array();
        for (var i=0; i<this.data.length; i++) {
        	var entry = this.data[i];
            if (array_key_exists(entry['entryType'], ret)) {
                ret[entry['entryType']]++;
            } else {
                ret[entry['entryType']] = 1;
            }
        }
        return ret;
    },

    /**
     * Returns the stored data in RTF format
     *
     * This method simply returns a RTF formatted string+ This is done very
     * simple and is not intended for heavy using and fine formatting+ This
     * should be done by BibTex! It is intended to give some kind of quick
     * preview or to send someone a reference list as word/rtf format (even
     * some people in the scientific field still use word)+ If you want to
     * change the default format you have to override the class variable
     * "rtfstring"+ This variable is used and the placeholders simply replaced+
     * Lines with no data cause an warning!
     *
     * @return string the RTF Strings
     */
    'rtf': function()
    {
        var ret = "{\\rtf\n";
        for (var i=0; i<this.data.length; i++) {
        	var entry = this.data[i];
            line    = this.rtfstring;
            title   = '';
            journal = '';
            year    = '';
            authors = '';
            if (array_key_exists('title', entry)) {
                title = this._unwrap(entry['title']);
            }
            if (array_key_exists('journal', entry)) {
                journal = this._unwrap(entry['journal']);
            }
            if (array_key_exists('year', entry)) {
                year = this._unwrap(entry['year']);
            }
            if (array_key_exists('author', entry)) {
                if (this._options['extractAuthors']) {
                    tmparray = array(); //In this array the authors are saved and the joind with an and
                    for (var j in entry['author']) {
                    	var authorentry = entry['author'][j];
                        tmparray[tmparray.length] = this._formatAuthor(authorentry);
                    }
                    authors = join(', ', tmparray);
                } else {
                    authors = entry['author'];
                }
            }
            if ((''!=title) || (''!=journal) || (''!=year) || (''!=authors)) {
                line = str_replace("TITLE", title, line);
                line = str_replace("JOURNAL", journal, line);
                line = str_replace("YEAR", year, line);
                line = str_replace("AUTHORS", authors, line);
                line += "\n\\par\n";
                ret  += line;
            } else {
                this._generateWarning('WARNING_LINE_WAS_NOT_CONVERTED', '', print_r(entry,1));
            }
        }
        ret += '}';
        return ret;
    },

    /**
     * Returns the stored data in HTML format
     *
     * This method simply returns a HTML formatted string+ This is done very
     * simple and is not intended for heavy using and fine formatting+ This
     * should be done by BibTex! It is intended to give some kind of quick
     * preview+ If you want to change the default format you have to override
     * the class variable "htmlstring"+ This variable is used and the placeholders
     * simply replaced+
     * Lines with no data cause an warning!
     *
     * @return string the HTML Strings
     */
    'html': function(min,max)
    {
    	if ( typeof min == 'undefined' ) min = 0;
    	if ( typeof max == 'undefined' ) max = this.data.length;
        var ret = "<p>\n";
        for (var i =min; i<max; i++){
        	var entry = this.data[i];
            var line    = this.htmlstring;
            var title   = '';
            var journal = '';
            var year    = '';
            var authors = '';
            if (array_key_exists('title', entry)) {
                title = this._unwrap(entry['title']);
            }
            if (array_key_exists('journal', entry)) {
                journal = this._unwrap(entry['journal']);
            }
            if (array_key_exists('year', entry)) {
                year = this._unwrap(entry['year']);
            }
            if (array_key_exists('author', entry)) {
                if (this._options['extractAuthors']) {
                    tmparray = array(); //In this array the authors are saved and the joind with an and
                    for (j in entry['author'] ) {
                    	var authorentry = entry['author'][j];
                        tmparray[tmparray.length] = this._formatAuthor(authorentry);
                    }
                    authors = join(', ', tmparray);
                } else {
                    authors = entry['author'];
                }
            }

            if ((''!=title) || (''!=journal) || (''!=year) || (''!=authors)) {
                line = str_replace("TITLE", title, line);
                line = str_replace("JOURNAL", journal, line);
                line = str_replace("YEAR", year, line);
                line = str_replace("AUTHORS", authors, line);
                line += "\n";
                ret  += line;
            } else {
                this._generateWarning('WARNING_LINE_WAS_NOT_CONVERTED', '', print_r(entry,1));
            }
        }
        ret += "</p>\n";
        return ret;
    }
};

/*
 Highcharts JS v4.2.5 (2016-05-06)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(D,aa){typeof module==="object"&&module.exports?module.exports=D.document?aa(D):aa:D.Highcharts=aa(D)})(typeof window!=="undefined"?window:this,function(D){function aa(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw Error(c);D.console&&console.log(c)}function pb(a,b,c){this.options=b;this.elem=a;this.prop=c}function E(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&
Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function C(a,b){return parseInt(a,b||10)}function xa(a){return typeof a==="string"}function Z(a){return a&&typeof a==="object"}function Ea(a){return Object.prototype.toString.call(a)==="[object Array]"}function pa(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);
break}}function r(a){return a!==y&&a!==null}function P(a,b,c){var d,e;if(xa(b))r(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(r(b)&&Z(b))for(d in b)a.setAttribute(d,b[d]);return e}function ta(a){return Ea(a)?a:[a]}function Pa(a,b,c){if(b)return setTimeout(a,b,c);a.call(0,c)}function M(a,b){if(ya&&!fa&&b&&b.opacity!==y)b.filter="alpha(opacity="+b.opacity*100+")";u(a.style,b)}function ba(a,b,c,d,e){a=A.createElement(a);b&&u(a,b);e&&M(a,{padding:0,border:"none",margin:0});
c&&M(a,c);d&&d.appendChild(a);return a}function qa(a,b){var c=function(){};c.prototype=new a;u(c.prototype,b);return c}function Fa(a,b,c){return Array((b||2)+1-String(a).length).join(c||0)+a}function Ya(a){return(Za&&Za(a)||qb||0)*6E4}function Ka(a,b){for(var c="{",d=!1,e,f,g,h,i,k=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=U.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:
-1,e!==null&&(e=x.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=Qa(f,e)}k.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}k.push(a);return k.join("")}function rb(a){return Y.pow(10,V(Y.log(a)/Y.LN10))}function sb(a,b,c,d,e){var f,g=a,c=o(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function hb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].safeI=e;a.sort(function(a,
c){d=b(a,c);return d===0?a.safeI-c.safeI:d});for(e=0;e<c;e++)delete a[e].safeI}function La(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ga(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Ra(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Sa(a){ib||(ib=ba(Ma));a&&ib.appendChild(a);ib.innerHTML=""}function ca(a,b){return parseFloat(a.toPrecision(b||14))}function Ta(a,b){b.renderer.globalAnimation=o(a,b.animation)}function $a(a){return Z(a)?
E(a):{duration:a?500:0}}function Eb(){var a=U.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";la=a.Date||D.Date;qb=b&&a.timezoneOffset;Za=b&&a.getTimezoneOffset;jb=function(a,c,d,h,i,k){var j;b?(j=la.UTC.apply(0,arguments),j+=Ya(j)):j=(new la(a,c,o(d,1),o(h,0),o(i,0),o(k,0))).getTime();return j};tb=c+"Minutes";ub=c+"Hours";vb=c+"Day";Ua=c+"Date";ab=c+"Month";bb=c+"FullYear";Fb=d+"Milliseconds";Gb=d+"Seconds";Hb=d+"Minutes";Ib=d+"Hours";kb=d+"Date";wb=d+"Month";xb=d+"FullYear"}function ma(a){if(!(this instanceof
ma))return new ma(a);this.init(a)}function O(){}function Va(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Jb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:o(b.y,f?4:c?14:-6),x:o(b.x,f?c?-6:6:0)};this.textAlign=
b.textAlign||(f?c?"right":"left":"center")}var y,A=D.document,Y=Math,B=Y.round,V=Y.floor,ua=Y.ceil,t=Y.max,F=Y.min,Q=Y.abs,W=Y.cos,da=Y.sin,ra=Y.PI,ja=ra*2/360,za=D.navigator&&D.navigator.userAgent||"",Kb=D.opera,ya=/(msie|trident|edge)/i.test(za)&&!Kb,lb=A&&A.documentMode===8,mb=!ya&&/AppleWebKit/.test(za),Na=/Firefox/.test(za),Lb=/(Mobile|Android|Windows Phone)/.test(za),Ha="http://www.w3.org/2000/svg",fa=A&&A.createElementNS&&!!A.createElementNS(Ha,"svg").createSVGRect,Pb=Na&&parseInt(za.split("Firefox/")[1],
10)<4,ka=A&&!fa&&!ya&&!!A.createElement("canvas").getContext,cb,db,Mb={},yb=0,ib,U,Qa,H,Aa=function(){},T=[],eb=0,Ma="div",Qb=/^[0-9]+$/,nb=["plotTop","marginRight","marginBottom","plotLeft"],la,jb,qb,Za,tb,ub,vb,Ua,ab,bb,Fb,Gb,Hb,Ib,kb,wb,xb,L={},x;x=D.Highcharts?aa(16,!0):{win:D};x.seriesTypes=L;var Ia=[],na,sa,p,Ba,zb,Ca,N,X,I,Wa,Oa;pb.prototype={dSetter:function(){var a=this.paths[0],b=this.paths[1],c=[],d=this.now,e=a.length,f;if(d===1)c=this.toD;else if(e===b.length&&d<1)for(;e--;)f=parseFloat(a[e]),
c[e]=isNaN(f)?a[e]:d*parseFloat(b[e]-f)+f;else c=b;this.elem.attr("d",c)},update:function(){var a=this.elem,b=this.prop,c=this.now,d=this.options.step;if(this[b+"Setter"])this[b+"Setter"]();else a.attr?a.element&&a.attr(b,c):a.style[b]=c+this.unit;d&&d.call(a,c,this)},run:function(a,b,c){var d=this,e=function(a){return e.stopped?!1:d.step(a)},f;this.startTime=+new la;this.start=a;this.end=b;this.unit=c;this.now=this.start;this.pos=0;e.elem=this.elem;if(e()&&Ia.push(e)===1)e.timerId=setInterval(function(){for(f=
0;f<Ia.length;f++)Ia[f]()||Ia.splice(f--,1);Ia.length||clearInterval(e.timerId)},13)},step:function(a){var b=+new la,c,d=this.options;c=this.elem;var e=d.complete,f=d.duration,g=d.curAnim,h;if(c.attr&&!c.element)c=!1;else if(a||b>=f+this.startTime){this.now=this.end;this.pos=1;this.update();a=g[this.prop]=!0;for(h in g)g[h]!==!0&&(a=!1);a&&e&&e.call(c);c=!1}else this.pos=d.easing((b-this.startTime)/f),this.now=this.start+(this.end-this.start)*this.pos,this.update(),c=!0;return c},initPath:function(a,
b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h=a.isArea,i=h?2:1,k=function(a){for(g=a.length;g--;)(a[g]==="M"||a[g]==="L")&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(k(b),k(c));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=c.slice(0,f).concat(c),h&&(c=c.concat(c.slice(c.length-f)));a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=b.slice().splice(b.length/i-f,f*i),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),[].splice.apply(b,[b.length/i,0].concat(d));return[b,
c]}};var u=x.extend=function(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a},J=x.isNumber=function(a){return typeof a==="number"&&!isNaN(a)},o=x.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==y&&c!==null)return c},fb=x.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};Qa=function(a,b,c){if(!J(b))return U.lang.invalidDate||"";var a=o(a,"%Y-%m-%d %H:%M:%S"),d=new la(b-Ya(b)),e,f=d[ub](),
g=d[vb](),h=d[Ua](),i=d[ab](),k=d[bb](),j=U.lang,l=j.weekdays,m=j.shortWeekdays,d=u({a:m?m[g]:l[g].substr(0,3),A:l[g],d:Fa(h),e:Fa(h,2," "),w:g,b:j.shortMonths[i],B:j.months[i],m:Fa(i+1),y:k.toString().substr(2,2),Y:k,H:Fa(f),k:f,I:Fa(f%12||12),l:f%12||12,M:Fa(d[tb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Fa(d.getSeconds()),L:Fa(B(b%1E3),3)},x.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):
a};H={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};x.numberFormat=function(a,b,c,d){var a=+a||0,b=+b,e=U.lang,f=(a.toString().split(".")[1]||"").length,g,h,i=Math.abs(a);b===-1?b=Math.min(f,20):J(b)||(b=2);g=String(C(i.toFixed(b)));h=g.length>3?g.length%3:0;c=o(c,e.decimalPoint);d=o(d,e.thousandsSep);a=a<0?"-":"";a+=h?g.substr(0,h)+d:"";a+=g.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+d);b&&(d=Math.abs(i-g+Math.pow(10,-Math.max(b,f)-1)),a+=c+d.toFixed(b).slice(2));
return a};Math.easeInOutSine=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};na=function(a,b){var c;if(b==="width")return Math.min(a.offsetWidth,a.scrollWidth)-na(a,"padding-left")-na(a,"padding-right");else if(b==="height")return Math.min(a.offsetHeight,a.scrollHeight)-na(a,"padding-top")-na(a,"padding-bottom");return(c=D.getComputedStyle(a,void 0))&&C(c.getPropertyValue(b))};sa=function(a,b){return b.indexOf?b.indexOf(a):[].indexOf.call(b,a)};Ba=function(a,b){return[].filter.call(a,b)};Ca=function(a,
b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],a[d],d,a);return c};zb=function(a){var b=A.documentElement,a=a.getBoundingClientRect();return{top:a.top+(D.pageYOffset||b.scrollTop)-(b.clientTop||0),left:a.left+(D.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};Oa=function(a){for(var b=Ia.length;b--;)if(Ia[b].elem===a)Ia[b].stopped=!0};p=function(a,b){return Array.prototype.forEach.call(a,b)};N=function(a,b,c){function d(b){b.target=b.srcElement||D;c.call(a,b)}var e=a.hcEvents=a.hcEvents||{};
if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent){if(!a.hcEventsIE)a.hcEventsIE={};a.hcEventsIE[c.toString()]=d;a.attachEvent("on"+b,d)}e[b]||(e[b]=[]);e[b].push(c)};X=function(a,b,c){function d(b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.attachEvent&&(c=a.hcEventsIE[c.toString()],a.detachEvent("on"+b,c))}function e(){var c,e,f;if(a.nodeName)for(f in b?(c={},c[b]=!0):c=g,c)if(g[f])for(e=g[f].length;e--;)d(f,g[f][e])}var f,g=a.hcEvents,h;if(g)b?(f=g[b]||[],c?(h=
sa(c,f),h>-1&&(f.splice(h,1),g[b]=f),d(b,c)):(e(),g[b]=[])):(e(),a.hcEvents={})};I=function(a,b,c,d){var e;e=a.hcEvents;var f,g,c=c||{};if(A.createEvent&&(a.dispatchEvent||a.fireEvent))e=A.createEvent("Events"),e.initEvent(b,!0,!0),e.target=a,u(e,c),a.dispatchEvent?a.dispatchEvent(e):a.fireEvent(b,e);else if(e){e=e[b]||[];f=e.length;if(!c.preventDefault)c.preventDefault=function(){c.defaultPrevented=!0};c.target=a;if(!c.type)c.type=b;for(b=0;b<f;b++)g=e[b],g.call(a,c)===!1&&c.preventDefault()}d&&
!c.defaultPrevented&&d(c)};Wa=function(a,b,c){var d,e="",f,g,h;Z(c)||(d=arguments,c={duration:d[2],easing:d[3],complete:d[4]});if(!J(c.duration))c.duration=400;c.easing=typeof c.easing==="function"?c.easing:Math[c.easing]||Math.easeInOutSine;c.curAnim=E(b);for(h in b)g=new pb(a,c,h),f=null,h==="d"?(g.paths=g.initPath(a,a.d,b.d),g.toD=b.d,d=0,f=1):a.attr?d=a.attr(h):(d=parseFloat(na(a,h))||0,h!=="opacity"&&(e="px")),f||(f=b[h]),f.match&&f.match("px")&&(f=f.replace(/px/g,"")),g.run(d,f,e)};if(D.jQuery)D.jQuery.fn.highcharts=
function(){var a=[].slice.call(arguments);if(this[0])return a[0]?(new (x[xa(a[0])?a.shift():"Chart"])(this[0],a[0],a[1]),this):T[P(this[0],"data-highcharts-chart")]};A&&!A.defaultView&&(na=function(a,b){var c;c={width:"clientWidth",height:"clientHeight"}[b];if(a.style[b])return C(a.style[b]);b==="opacity"&&(b="filter");if(c)return a.style.zoom=1,Math.max(a[c]-2*na(a,"padding"),0);c=a.currentStyle[b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})];b==="filter"&&(c=c.replace(/alpha\(opacity=([0-9]+)\)/,
function(a,b){return b/100}));return c===""?1:C(c)});Array.prototype.forEach||(p=function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===!1)return c});Array.prototype.indexOf||(sa=function(a,b){var c,d=0;if(b)for(c=b.length;d<c;d++)if(b[d]===a)return d;return-1});Array.prototype.filter||(Ba=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c});x.Fx=pb;x.inArray=sa;x.each=p;x.grep=Ba;x.offset=zb;x.map=Ca;x.addEvent=N;x.removeEvent=X;x.fireEvent=I;x.animate=
Wa;x.animObject=$a;x.stop=Oa;U={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),
resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.2.5/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",
align:"center",margin:15,style:{color:"#333333",fontSize:"18px"},widthAdjust:-44},subtitle:{text:"",align:"center",style:{color:"#555555"},widthAdjust:-44},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return this.y===
null?"":x.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},
borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,
textAlign:"center"}},tooltip:{enabled:!0,animation:fa,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
shadow:!0,snap:Lb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var ea=U.plotOptions,ga=ea.line;Eb();ma.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[C(a[1]),
C(a[2]),C(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[C(a[1],16),C(a[2],16),C(a[3],16),1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[C(a[1]),C(a[2]),C(a[3]),1]}}],init:function(a){var b,c,d,e;if((this.input=a)&&a.stops)this.stops=Ca(a.stops,function(a){return new ma(a[1])});else for(d=this.parsers.length;d--&&!c;)e=this.parsers[d],(b=e.regex.exec(a))&&(c=e.parse(b));this.rgba=
c||[]},get:function(a){var b=this.input,c=this.rgba,d;this.stops?(d=E(b),d.stops=[].concat(d.stops),p(this.stops,function(b,c){d.stops[c]=[d.stops[c][0],b.get(a)]})):d=c&&J(c[0])?a==="rgb"||!a&&c[3]===1?"rgb("+c[0]+","+c[1]+","+c[2]+")":a==="a"?c[3]:"rgba("+c.join(",")+")":b;return d},brighten:function(a){var b,c=this.rgba;if(this.stops)p(this.stops,function(b){b.brighten(a)});else if(J(a)&&a!==0)for(b=0;b<3;b++)c[b]+=C(a*255),c[b]<0&&(c[b]=0),c[b]>255&&(c[b]=255);return this},setOpacity:function(a){this.rgba[3]=
a;return this}};O.prototype={opacity:1,textProps:"direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),init:function(a,b){this.element=b==="span"?ba(b):A.createElementNS(Ha,b);this.renderer=a},animate:function(a,b,c){b=o(b,this.renderer.globalAnimation,!0);Oa(this);if(b){if(c)b.complete=c;Wa(this,a,b)}else this.attr(a,null,c);return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,k,j,l,m,n,q,z=[],s;a.linearGradient?
f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];i=d.gradients;j=a.stops;n=c.radialReference;Ea(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&n&&!r(g.gradientUnits)&&(h=g,g=E(g,d.getRadialAttr(n,h),{gradientUnits:"userSpaceOnUse"}));for(q in g)q!=="id"&&z.push(q,g[q]);for(q in j)z.push(j[q]);z=z.join(",");i[z]?n=i[z].attr("id"):(g.id=n="highcharts-"+yb++,i[z]=k=d.createElement(f).attr(g).add(d.defs),k.radAttr=h,k.stops=[],
p(j,function(a){a[1].indexOf("rgba")===0?(e=ma(a[1]),l=e.get("rgb"),m=e.get("a")):(l=a[1],m=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":l,"stop-opacity":m}).add(k);k.stops.push(a)}));s="url("+d.url+"#"+n+")";c.setAttribute(b,s);c.gradient=z;a.toString=function(){return s}}},applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport,g=f||b.style.textShadow!==y&&!ya;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));
if(mb||f)e.textRendering="geometricPrecision";g?this.css(e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),p(a.split(/\s?,\s?/g),function(a){var d=b.firstChild,e,f,a=a.split(" ");e=a[a.length-1];(f=a[a.length-2])&&p(c,function(a,c){var g;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);P(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/t(C(f),
3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b,c){var d,e=this.element,f,g=this,h;typeof a==="string"&&b!==y&&(d=a,a={},a[d]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(d in a){b=a[d];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(d==="x"||d==="y"))this.doTransform=!0;h||(h=this[d+"Setter"]||this._defaultSetter,
h.call(this,b,d,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,b,h))}if(this.doTransform)this.updateTransform(),this.doTransform=!1}c&&c();return g},updateShadows:function(a,b,c){for(var d=this.shadows,e=d.length;e--;)c.call(d[e],a==="height"?Math.max(b-(d[e].cutHeight||0),0):a==="d"?this.d:b,a,d[e])},addClass:function(a){var b=this.element,c=P(b,"class")||"";c.indexOf(a)===-1&&P(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;
p("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=o(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a){var b,c={},d,e=this.strokeWidth||0;d=B(e)%2/2;a.x=V(a.x||this.x||0)+d;a.y=V(a.y||this.y||0)+d;a.width=V((a.width||this.width||0)-2*d);a.height=V((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&
(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&C(a.width)||this.textWidth;b&&(a=u(b,c));this.styles=a;e&&(ka||!fa&&this.renderer.forExport)&&delete a.width;if(ya&&!fa)M(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";P(d,"style",g)}e&&this.added&&
this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;db&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=la.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(za.indexOf("Android")===-1||la.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},
translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(r(c)||r(d))&&
a.push("scale("+o(c,1)+" "+o(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||xa(c))this.alignTo=d=c||"renderer",pa(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=o(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+
(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=B(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=B(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a,b){var c,d=this.renderer,e,f,g,h=this.element,i=this.styles;e=this.textStr;var k,j=h.style,l,m=d.cache,n=d.cacheKeys,q;f=o(b,this.rotation);g=f*ja;e!==y&&(q=["",f||0,i&&i.fontSize,
h.style.width].join(","),q=e===""||Qb.test(e)?"num:"+e.toString().length+q:e+q);q&&!a&&(c=m[q]);if(!c){if(h.namespaceURI===Ha||d.forExport){try{l=this.fakeTS&&function(a){p(h.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=a})},Na&&j.textShadow?(k=j.textShadow,j.textShadow=""):l&&l("none"),c=h.getBBox?u({},h.getBBox()):{width:h.offsetWidth,height:h.offsetHeight},k?j.textShadow=k:l&&l("")}catch(z){}if(!c||c.width<0)c={width:0,height:0}}else c=this.htmlGetBBox();if(d.isSVG){d=
c.width;e=c.height;if(ya&&i&&i.fontSize==="11px"&&e.toPrecision(3)==="16.9")c.height=e=14;if(f)c.width=Q(e*da(g))+Q(d*W(g)),c.height=Q(e*W(g))+Q(d*da(g))}if(q){for(;n.length>250;)delete m[n.shift()];m[q]||n.push(q);m[q]=c}}return c},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,
c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=
null;Oa(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&p(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&pa(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,k,j;if(a){i=o(a.width,3);k=(a.opacity||0.15)/i;j=this.parentInverted?
"(-1,-1)":"("+o(a.offsetX,1)+", "+o(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;P(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":k*e,"stroke-width":h,transform:"translate"+j,fill:"none"});if(c)P(f,"height",t(P(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=
o(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b,c=this["stroke-width"];c==="inherit"&&(c=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,
"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=C(a[b])*c;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=A.createElementNS(Ha,"title"),this.element.appendChild(b));b.firstChild&&
b.removeChild(b.firstChild);b.appendChild(A.createTextNode(String(o(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},visibilitySetter:function(a,b,c){a==="inherit"?c.removeAttribute(b):c.setAttribute(b,a)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=
this.element,h;e=this.added;var i;if(r(a))g.zIndex=a,a=+a,this[b]===a&&(e=!1),this[b]=a;if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=d[i],f=e.zIndex,e!==g&&(C(f)>a||!r(a)&&r(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};O.prototype.yGetter=O.prototype.xGetter;O.prototype.translateXSetter=O.prototype.translateYSetter=O.prototype.rotationSetter=O.prototype.verticalAlignSetter=O.prototype.scaleXSetter=
O.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};O.prototype["stroke-widthSetter"]=O.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],O.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var Da=function(){this.init.apply(this,arguments)};
Da.prototype={Element:O,init:function(a,b,c,d,e,f){var g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&P(g,"xmlns",Ha);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Na||mb)&&A.getElementsByTagName("base").length?D.location.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(A.createTextNode("Created with Highcharts 4.2.5"));
this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);var h;if(Na&&a.getBoundingClientRect)this.subPixelFix=b=function(){M(a,{left:0,top:0});h=a.getBoundingClientRect();M(a,{left:ua(h.left)-h.left+"px",top:ua(h.top)-h.top+"px"})},b(),N(D,"resize",b)},getStyle:function(a){return this.style=u({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},
a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Ra(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&X(D,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},buildText:function(a){for(var b=
a.element,c=this,d=c.forExport,e=o(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,k,j=P(b,"x"),l=a.styles,m=a.textWidth,n=l&&l.lineHeight,q=l&&l.textShadow,z=l&&l.textOverflow==="ellipsis",s=g.length,G=m&&!a.added&&this.box,w=function(a){return n?C(n):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:l&&l.fontSize||c.style.fontSize||12,a).h},v=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};s--;)b.removeChild(g[s]);!f&&!q&&!z&&e.indexOf(" ")===
-1?b.appendChild(A.createTextNode(v(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,G&&G.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e=Ba(e,function(a){return a!==""}),p(e,function(e,f){var g,n=0,e=e.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");p(g,
function(e){if(e!==""||g.length===1){var q={},s=A.createElementNS(Ha,"tspan"),o;h.test(e)&&(o=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),P(s,"style",o));i.test(e)&&!d&&(P(s,"onclick",'location.href="'+e.match(i)[1]+'"'),M(s,{cursor:"pointer"}));e=v(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){s.appendChild(A.createTextNode(e));if(n)q.dx=0;else if(f&&j!==null)q.x=j;P(s,q);b.appendChild(s);!n&&f&&(!fa&&d&&M(s,{display:"block"}),P(s,"dy",w(s)));if(m){for(var q=e.replace(/([^\^])-/g,"$1- ").split(" "),
p=g.length>1||f||q.length>1&&l.whiteSpace!=="nowrap",G,S,r=[],t=w(s),u=1,B=a.rotation,y=e,x=y.length;(p||z)&&(q.length||r.length);)a.rotation=0,G=a.getBBox(!0),S=G.width,!fa&&c.forExport&&(S=c.measureSpanWidth(s.firstChild.data,a.styles)),G=S>m,k===void 0&&(k=G),z&&k?(x/=2,y===""||!G&&x<0.5?q=[]:(y=e.substring(0,y.length+(G?-1:1)*ua(x)),q=[y+(m>3?"\u2026":"")],s.removeChild(s.firstChild))):!G||q.length===1?(q=r,r=[],q.length&&(u++,s=A.createElementNS(Ha,"tspan"),P(s,{dy:t,x:j}),o&&P(s,"style",o),
b.appendChild(s)),S>m&&(m=S)):(s.removeChild(s.firstChild),r.unshift(q.pop())),q.length&&s.appendChild(A.createTextNode(q.join(" ").replace(/- /g,"-")));a.rotation=B}n++}}})}),k&&a.attr("title",a.textStr),G&&G.removeChild(b),q&&a.applyTextShadow&&a.applyTextShadow(q))},getContrast:function(a){a=ma(a).rgba;return a[0]+a[1]+a[2]>384?"#000000":"#FFFFFF"},button:function(a,b,c,d,e,f,g,h,i){var k=this.label(a,b,c,i,null,null,null,null,"button"),j=0,l,m,n,q,z,s,a={x1:0,y1:0,x2:0,y2:1},e=E({"stroke-width":1,
stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=E(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);q=f.style;delete f.style;g=E(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);z=g.style;delete g.style;h=E(e,{style:{color:"#CCC"}},h);s=h.style;delete h.style;N(k.element,ya?"mouseover":"mouseenter",function(){j!==3&&k.attr(f).css(q)});N(k.element,ya?"mouseout":
"mouseleave",function(){j!==3&&(l=[e,f,g][j],m=[n,q,z][j],k.attr(l).css(m))});k.setState=function(a){(k.state=j=a)?a===2?k.attr(g).css(z):a===3&&k.attr(h).css(s):k.attr(e).css(n)};return k.on("click",function(a){j!==3&&d.call(k,a)}).attr(e).css(u({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=B(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=B(a[2])+b%2/2);return a},path:function(a){var b={fill:"none"};Ea(a)?b.d=a:Z(a)&&u(b,a);return this.createElement("path").attr(b)},circle:function(a,
b,c){a=Z(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,c){c.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(Z(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=Z(a)?a.r:e,g=this.createElement("rect"),a=Z(a)?a:a===y?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==y)g.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a,
b,c){P(c,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[o(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return r(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:"none"};arguments.length>1&&u(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink",
"href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g=this,h,i=this.symbols[a],i=i&&i(B(b),B(c),d,e,f),k=/^url\((.*?)\)$/,j,l;if(i)h=this.path(i),u(h,{symbolName:a,x:b,y:c,width:d,height:e}),f&&u(h,f);else if(k.test(a))l=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(B((d-b[0])/2),B((e-b[1])/2)))},j=a.match(k)[1],a=Mb[j]||f&&f.width&&f.height&&[f.width,f.height],h=this.image(j).attr({x:b,y:c}),h.isImg=!0,a?l(h,a):
(h.attr({width:0,height:0}),ba("img",{onload:function(){this.width===0&&(M(this,{position:"absolute",top:"-999em"}),A.body.appendChild(this));l(h,Mb[j]=[this.width,this.height]);this.parentNode&&this.parentNode.removeChild(this);g.imgCount--;if(!g.imgCount&&T[g.chartIndex].onload)T[g.chartIndex].onload()},src:j}),this.imgCount++);return h},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",
a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=W(f),k=da(f),j=W(g),g=da(g),e=e.end-f<ra?0:1;return["M",a+c*i,b+c*k,"A",c,c,0,e,1,a+c*j,b+c*g,h?"M":"L",a+d*j,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*k,h?"":"Z"]},
callout:function(a,b,c,d,e){var f=F(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,"L",a,e+6,a-6,e,a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",
h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+yb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=ka||!fa&&this.forExport,f={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,
b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),m;for(m=0;m<d.length;m++)e=d[m],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){var c,d,a=a||this.style.fontSize;!a&&b&&D.getComputedStyle&&(b=b.element||b,a=(c=D.getComputedStyle(b,""))&&c.fontSize);a=/px/.test(a)?C(a):/em/.test(a)?parseFloat(a)*12:12;c=a<24?a+3:B(a*1.2);d=B(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=t(d*W(b*ja),4));return{x:-a/3*da(b*ja),
y:d}},label:function(a,b,c,d,e,f,g,h,i){var k=this,j=k.g(i),l=k.text("",0,0,g).attr({zIndex:1}),m,n,q=0,z=3,s=0,o,w,v,S,t=0,$={},x,A,Ab,F,D;Ab=function(){var a,b;a=l.element.style;n=(o===void 0||w===void 0||j.styles.textAlign)&&r(l.textStr)&&l.getBBox();j.width=(o||n.width||0)+2*z+s;j.height=(w||n.height||0)+2*z;x=z+k.fontMetrics(a&&a.fontSize,l).b;if(A){if(!m)a=t,b=(h?-x:0)+t,j.box=m=d?k.symbol(d,a,b,j.width,j.height,$):k.rect(a,b,j.width,j.height,0,$["stroke-width"]),m.isImg||m.attr("fill","none"),
m.add(j);m.isImg||m.attr(u({width:B(j.width),height:B(j.height)},$));$=null}};F=function(){var a=j.styles,a=a&&a.textAlign,b=s+z,c;c=h?0:x;if(r(o)&&n&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(o-n.width);if(b!==l.x||c!==l.y)l.attr("x",b),c!==y&&l.attr("y",c);l.x=b;l.y=c};D=function(a,b){m?m.attr(a,b):$[a]=b};j.onAdd=function(){l.add(j);j.attr({text:a||a===0?a:"",x:b,y:c});m&&r(e)&&j.attr({anchorX:e,anchorY:f})};j.widthSetter=function(a){o=a};j.heightSetter=function(a){w=a};j.paddingSetter=
function(a){if(r(a)&&a!==z)z=j.padding=a,F()};j.paddingLeftSetter=function(a){r(a)&&a!==s&&(s=a,F())};j.alignSetter=function(a){a={left:0,center:0.5,right:1}[a];a!==q&&(q=a,n&&j.attr({x:v}))};j.textSetter=function(a){a!==y&&l.textSetter(a);Ab();F()};j["stroke-widthSetter"]=function(a,b){a&&(A=!0);t=a%2/2;D(b,a)};j.strokeSetter=j.fillSetter=j.rSetter=function(a,b){b==="fill"&&a&&(A=!0);D(b,a)};j.anchorXSetter=function(a,b){e=a;D(b,B(a)-t-v)};j.anchorYSetter=function(a,b){f=a;D(b,a-S)};j.xSetter=function(a){j.x=
a;q&&(a-=q*((o||n.width)+2*z));v=B(a);j.attr("translateX",v)};j.ySetter=function(a){S=j.y=B(a);j.attr("translateY",S)};var C=j.css;return u(j,{css:function(a){if(a){var b={},a=E(a);p(j.textProps,function(c){a[c]!==y&&(b[c]=a[c],delete a[c])});l.css(b)}return C.call(j,a)},getBBox:function(){return{width:n.width+2*z,height:n.height+2*z,x:n.x-z,y:n.y-z}},shadow:function(a){m&&m.shadow(a);return j},destroy:function(){X(j.element,"mouseenter");X(j.element,"mouseleave");l&&(l=l.destroy());m&&(m=m.destroy());
O.prototype.destroy.call(j);j=k=Ab=F=D=null}})}};cb=Da;u(O.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=u(this.styles,a);M(this.element,a);return this},htmlGetBBox:function(){var a=this.element;if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},
htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,k=this.styles;M(b,{marginLeft:c,marginTop:d});i&&p(i,function(a){M(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&p(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var i=this.rotation,j=C(this.textWidth),l=k&&k.whiteSpace,m=[i,g,b.innerHTML,this.textWidth,
this.textAlign].join(",");if(m!==this.cTT){k=a.fontMetrics(b.style.fontSize).b;r(i)&&this.setSpanRotation(i,h,k);if(b.offsetWidth>j&&/[ \-]/.test(b.textContent||b.innerText))M(b,{width:j+"px",display:"block",whiteSpace:l||"normal"}),this.hasTextWidth=!0;else if(this.hasTextWidth)M(b,{width:"",display:"",whiteSpace:l||"nowrap"}),this.hasTextWidth=!1;this.getSpanCorrection(this.hasTextWidth?j:b.offsetWidth,k,h,i,g)}M(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(mb)k=b.offsetHeight;
this.cTT=m}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=ya?"-ms-transform":mb?"-webkit-transform":Na?"MozTransform":Kb?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Na?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";M(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});u(Da.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer,g=f.isSVG,h=function(a,b){p(["opacity","visibility"],function(c){fb(a,
c+"Setter",function(a,c,d,e){a.call(this,c,d,e);b[d]=c})})};d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};g&&h(d,d.element.style);d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:B(b),y:B(c)}).css({position:"absolute",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(g)d.add=function(a){var b,
c=f.box.parentNode,g=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)g.push(a),a=a.parentGroup;p(g.reverse(),function(a){var d,e=P(a.element,"class");e&&(e={className:e});b=a.div=a.div||ba(Ma,e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",opacity:a.opacity},b||c);d=b.style;u(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0}});h(a,d)})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&
d.htmlUpdateTransform();return d};return d}});var K;if(!fa&&!ka){K={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===Ma;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=ba(c);this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,e=a&&a.inverted,d=a?a.element||a:d;if(a)this.parentGroup=
a;e&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:O.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=W(a*ja),c=da(a*ja);M(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var f=d?W(d*ja):1,g=d?
da(d*ja):0,h=o(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),M(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(J(a[b]))c[b]=B(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=
a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,pa(c,b),c.push(b),b.destroyClip=function(){pa(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:lb?"inherit":"rect(auto)"});return b.css(a)},css:O.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Sa(a)},destroy:function(){this.destroyClip&&this.destroyClip();return O.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=D.event;a.target=a.srcElement;b(a)};
return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=C(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,k,j=f.path,l,m,n,q;j&&typeof j.value!=="string"&&(j="x");m=j;if(a){n=o(a.width,3);q=(a.opacity||0.15)/n;for(e=1;e<=3;e++){l=n*2+1-2*e;c&&(m=this.cutOffPath(j.value,l+0.5));k=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',m,'" coordsize="10 10" style="',f.style.cssText,
'" />'];h=ba(g.prepVML(k),null,{left:C(i.left)+o(a.offsetX,1),top:C(i.top)+o(a.offsetY,1)});if(c)h.cutOff=l+1;k=['<stroke color="',a.color||"black",'" opacity="',q*e,'"/>'];ba(g.prepVML(k),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:Aa,setAttr:function(a,b){lb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||
ba(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!=="none",this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},"fill-opacitySetter":function(a,b,c){ba(this.renderer.prepVML(["<",
b.split("-")[0],' opacity="',a,'"/>']),null,null,c)},opacitySetter:Aa,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-B(da(a*ja)+1)+"px";c.top=B(W(a*ja))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;J(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&p(this.shadows,
function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,lb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};K["stroke-opacitySetter"]=K["fill-opacitySetter"];x.VMLElement=K=qa(O,K);K.prototype.ySetter=K.prototype.widthSetter=K.prototype.heightSetter=K.prototype.xSetter;var Bb={Element:K,isIE8:za.indexOf("MSIE 8.0")>
-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ma).css(u(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!A.namespaces.hcv){A.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{A.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){A.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=Z(a);return u(e,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+B(a?e:d)+"px,"+
B(a?f:b)+"px,"+B(a?b:f)+"px,"+B(a?d:e)+"px)"};!a&&lb&&c==="DIV"&&u(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){p(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,k="none";a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var j,l,m=a.linearGradient||a.radialGradient,n,q,z,s,o,w="",a=a.stops,v,S=[],r=function(){h=['<fill colors="'+S.join(",")+'" opacity="',z,'" o:opacity2="',q,'" type="',i,'" ',
w,'focus="100%" method="any" />'];ba(e.prepVML(h),null,null,b)};n=a[0];v=a[a.length-1];n[0]>0&&a.unshift([0,n[1]]);v[0]<1&&a.push([1,v[1]]);p(a,function(a,b){g.test(a[1])?(f=ma(a[1]),j=f.get("rgb"),l=f.get("a")):(j=a[1],l=1);S.push(a[0]*100+"% "+j);b?(z=l,s=j):(q=l,o=j)});if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,n=m.x2||m[2]||0,m=m.y2||m[3]||0,w='angle="'+(90-Y.atan((m-a)/(n-c))*180/ra)+'"',r();else{var k=m.r,$=k*2,t=k*2,u=m.cx,y=m.cy,B=b.radialReference,x,k=function(){B&&(x=
d.getBBox(),u+=(B[0]-x.x)/x.width-0.5,y+=(B[1]-x.y)/x.height-0.5,$*=B[2]/x.width,t*=B[2]/x.height);w='src="'+U.global.VMLRadialGradientURL+'" size="'+$+","+t+'" origin="0.5,0.5" position="'+u+","+y+'" color2="'+o+'" ';r()};d.added?k():d.onAdd=k;k=s}else k=j}else if(g.test(a)&&b.tagName!=="IMG")f=ma(a),d[c+"-opacitySetter"](f.get("a"),c,b),k=f.get("rgb");else{k=b.getElementsByTagName(c);if(k.length)k[0].opacity=1,k[0].type="solid";k=a}return k},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=
a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:Da.prototype.html,path:function(a){var b={coordsize:"10 10"};Ea(a)?b.d=a:Z(a)&&u(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(Z(a))c=a.r,b=a.y,a=a.x;d.isCircle=
!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ma).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):Da.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;M(a,{flip:"x",left:C(d.width)-(e?C(e.top):
1),top:C(d.height)-(e?C(e.left):1),rotation:-90});p(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||d,c=e.innerR,d=W(f),i=da(f),k=W(g),j=da(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*k,b+h*j];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*k,b+c*j,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+
c,b+d/2,"e"]},rect:function(a,b,c,d,e){return Da.prototype.symbols[!r(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};x.VMLRenderer=K=function(){this.init.apply(this,arguments)};K.prototype=E(Da.prototype,Bb);cb=K}Da.prototype.measureSpanWidth=function(a,b){var c=A.createElement("span"),d;d=A.createTextNode(a);c.appendChild(d);M(c,b);this.box.appendChild(c);d=c.offsetWidth;Sa(c);return d};var Nb;if(ka)x.CanVGRenderer=K=function(){Ha="http://www.w3.org/1999/xhtml"},K.prototype.symbols={},Nb=function(){function a(){var a=
b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){if(b.length===0){var e=A.getElementsByTagName("head")[0],f=A.createElement("script");f.type="text/javascript";f.src=d;f.onload=a;e.appendChild(f)}b.push(c)}}}(),cb=K;Va.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],k=f===h[h.length-1],e=d?o(d[f],e[f],f):f,d=this.label,h=h.info,j;a.isDatetimeAxis&&h&&(j=b.dateTimeLabelFormats[h.higherRanks[f]||
h.unitName]);this.isFirst=i;this.isLast=k;b=a.labelFormatter.call({axis:a,chart:c,isFirst:i,isLast:k,dateTimeLabelFormat:j,value:a.isLog?ca(a.lin2log(e)):e});r(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=r(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).css(E(g.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,
e=b.chart.spacing,f=o(b.labelLeft,F(b.pos,e[3])),e=o(b.labelRight,t(b.pos+b.len,d-e[1])),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],k=g.getBBox().width,j=b.getSlotWidth(),l=j,m=1,n,q={};if(h)h<0&&c-i*k<f?n=B(c/W(h*ja)-f):h>0&&c+i*k>e&&(n=B((d-c)/W(h*ja)));else if(d=c+(1-i)*k,c-i*k<f?l=a.x+l*(1-i)-f:d>e&&(l=e-a.x+l*i,m=-1),l=F(j,l),l<j&&b.labelAlign==="center"&&(a.x+=m*(j-l-i*(j-F(k,l)))),k>l||b.autoRotation&&g.styles.width)n=l;if(n){q.width=n;if(!b.options.labels.style.textOverflow)q.textOverflow=
"ellipsis";g.css(q)}},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,k=i.transA,j=i.reversed,l=i.staggerLines,m=i.tickRotCorr||{x:0,y:0},n=e.y;r(n)||(n=i.side===0?c.rotation?-8:
-c.getBBox().height:i.side===2?m.y+8:W(c.rotation*ja)*(m.y-c.getBBox(!1,0).height/2));a=a+e.x+m.x-(f&&d?f*k*(j?-1:1):0);b=b+n-(f&&!d?f*k*(j?1:-1):0);l&&(c=g/(h||1)%l,i.opposite&&(c=l-c-1),b+=c*(i.labelOffset/l));return{x:a,y:B(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,k=this.pos,j=e.labels,l=this.gridLine,m=h?h+"Grid":"grid",n=h?h+"Tick":"tick",
q=e[m+"LineWidth"],z=e[m+"LineColor"],s=e[m+"LineDashStyle"],m=d.tickSize(n),n=e[n+"Color"],p=this.mark,w=j.step,v=!0,S=d.tickmarkOffset,r=this.getPosition(g,k,S,b),$=r.x,r=r.y,t=g&&$===d.pos+d.len||!g&&r===d.pos?-1:1,c=o(c,1);this.isActive=!0;if(q){k=d.getPlotLinePath(k+S,q*t,b,!0);if(l===y){l={stroke:z,"stroke-width":q};if(s)l.dashstyle=s;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=q?f.path(k).attr(l).add(d.gridGroup):null}if(!b&&l&&k)l[this.isNew?"attr":"animate"]({d:k,opacity:c})}if(m)d.opposite&&
(m[0]=-m[0]),h=this.getMarkPath($,r,m[0],m[1]*t,g,f),p?p.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:n,"stroke-width":m[1],opacity:c}).add(d.axisGroup);if(i&&J($))i.xy=r=this.getLabelPosition($,r,i,g,j,S,a,w),this.isFirst&&!this.isLast&&!o(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!o(e.showLastLabel,1)?v=!1:g&&!d.isRadial&&!j.step&&!j.rotation&&!b&&c!==0&&this.handleOverflow(r),w&&a%w&&(v=!1),v&&J(r.y)?(r.opacity=c,i[this.isNew?"attr":"animate"](r),this.isNew=!1):i.attr("y",-9999)},
destroy:function(){Ra(this,this.axis)}};x.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};x.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,k=r(i)&&r(h),j=d.value,l=d.dashStyle,m=a.svgElem,n=[],q,z=d.color,s=o(d.zIndex,0),p=d.events,w={},v=b.chart.renderer,n=b.log2lin;b.isLog&&(i=n(i),h=n(h),j=n(j));if(g){if(n=b.getPlotLinePath(j,g),w={stroke:z,"stroke-width":g},l)w.dashstyle=l}else if(k){n=
b.getPlotBandPath(i,h,d);if(z)w.fill=z;if(d.borderWidth)w.stroke=d.borderColor,w["stroke-width"]=d.borderWidth}else return;w.zIndex=s;if(m)if(n)m.show(),m.animate({d:n});else{if(m.hide(),f)a.label=f=f.destroy()}else if(n&&n.length&&(a.svgElem=m=v.path(n).attr(w).add(),p))for(q in d=function(b){m.on(b,function(c){p[b].apply(a,[c])})},p)d(q);e&&r(e.text)&&n&&n.length&&b.width>0&&b.height>0&&!n.flat?(e=E({align:c&&k&&"center",x:c?!k&&4:10,verticalAlign:!c&&k&&"middle",y:c?k?16:10:k?6:-4,rotation:c&&
!k&&90},e),this.renderLabel(e,n,k,s)):f&&f.hide();return a},renderLabel:function(a,b,c,d){var e=this.label,f=this.axis.chart.renderer;if(!e)e={align:a.textAlign||a.align,rotation:a.rotation},e.zIndex=d,this.label=e=f.text(a.text,0,0,a.useHTML).attr(e).css(a.style).add();d=[b[1],b[4],c?b[6]:b[1]];b=[b[2],b[5],c?b[7]:b[2]];c=La(d);f=La(b);e.align(a,!1,{x:c,y:f,width:Ga(d)-c,height:Ga(b)-f});e.show()},destroy:function(){pa(this.axis.plotLinesAndBands,this);delete this.axis;Ra(this)}};var ha=x.Axis=function(){this.init.apply(this,
arguments)};ha.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0},lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,
startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return x.numberFormat(this.total,-1)},style:E(ea.line.dataLabels.style,{color:"#000000"})}},
defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=a;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=
this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=d.visible!==!1;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=this.names||[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=r(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=
this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=o(d.crosshair,ta(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;sa(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===y)this.reversed=!0;this.removePlotLine=this.removePlotBand=
this.removePlotBandOrLine;for(f in d)N(this,f,d[f]);if(this.isLog)this.val2lin=this.log2lin,this.lin2val=this.lin2log},setOptions:function(a){this.options=E(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],E(U[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=U.lang.numericSymbols,f=e&&e.length,
g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ka(h,this);else if(c)g=b;else if(d)g=Qa(d,b);else if(f&&a>=1E3)for(;f--&&g===y;)c=Math.pow(1E3,f+1),a>=c&&b*10%c===0&&e[f]!==null&&(g=x.numberFormat(b/c,-1)+e[f]);g===y&&(g=Q(b)>=1E4?x.numberFormat(b,-1):x.numberFormat(b,-1,y,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();p(a.series,function(c){if(c.visible||
!b.options.chart.ignoreHiddenSeries){var d=c.options,e=d.threshold,f;a.hasVisibleSeries=!0;a.isLog&&e<=0&&(e=null);if(a.isXAxis){if(d=c.xData,d.length)c=La(d),!J(c)&&!(c instanceof la)&&(d=Ba(d,function(a){return J(a)}),c=La(d)),a.dataMin=F(o(a.dataMin,d[0]),c),a.dataMax=t(o(a.dataMax,d[0]),Ga(d))}else{c.getExtremes();f=c.dataMax;c=c.dataMin;if(r(c)&&r(f))a.dataMin=F(o(a.dataMin,c),c),a.dataMax=t(o(a.dataMax,f),f);if(r(e))a.threshold=e;if(!d.softThreshold||a.isLog)a.softThreshold=!1}}})},translate:function(a,
b,c,d,e,f){var g=this.linkedParent||this,h=1,i=0,k=d?g.oldTransA:g.transA,d=d?g.oldMin:g.min,j=g.minPixelPadding,e=(g.isOrdinal||g.isBroken||g.isLog&&e)&&g.lin2val;if(!k)k=g.transA;if(c)h*=-1,i=g.len;g.reversed&&(h*=-1,i-=h*(g.sector||g.len));b?(a=a*h+i,a-=j,a=a/k+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),f==="between"&&(f=0.5),a=h*(a-d)*k+i+h*j+(J(f)?k*f*g.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-
(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,k,j=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,m;i=this.transB;var n=function(a,b,c){if(a<b||a>c)d?a=F(t(b,a),c):m=!0;return a},e=o(e,this.translate(a,null,null,c)),a=c=B(e+i);i=k=B(j-e-i);J(e)?this.horiz?(i=h,k=j-this.bottom,a=c=n(a,g,g+this.width)):(a=g,c=l-this.right,i=k=n(i,h,h+this.height)):m=!0;return m&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,
k],b||1)},getLinearTickPositions:function(a,b,c){var d,e=ca(V(b/a)*a),f=ca(ua(c/a)*a),g=[];if(b===c&&J(b))return[b];for(b=e;b<=f;){g.push(b);b=ca(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.pointRangePadding||0;e=this.min-f;var f=this.max+f,g=f-e;if(g&&g/c<this.len/3)if(this.isLog){f=b.length;for(e=1;e<f;e++)d=d.concat(this.getLogTickPositions(c,b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval===
"auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),e,f,a.startOfWeek));else for(b=e+(b[0]-e)%c;b<=f;b+=c)d.push(b);d.length!==0&&this.trimTicks(d,a.startOnTick,a.endOnTick);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,k,j;if(this.isXAxis&&this.minRange===y&&!this.isLog)r(a.min)||r(a.max)?this.minRange=null:(p(this.series,function(a){i=a.xData;for(g=k=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-
i[g-1],f===y||h<f)f=h}),this.minRange=F(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){j=this.minRange;d=(j-c+b)/2;d=[b-d,o(a.min,b-d)];if(e)d[2]=this.dataMin;b=Ga(d);c=[b+j,o(a.max,b+j)];if(e)c[2]=this.dataMax;c=La(c);c-b<j&&(d[0]=c-j,d[1]=o(a.min,c-j),b=Ga(d))}this.min=b;this.max=c},getClosest:function(){var a;p(this.series,function(b){var c=b.closestPointRange;!b.noSharedTooltip&&r(c)&&(a=r(a)?F(a,c):c)});return a},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||
0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,k=b.transA,j=b.isXAxis;if(j||i||d)if(h?(f=h.minPointOffset,g=h.pointRangePadding):(e=b.getClosest(),p(b.series,function(a){var c=i?1:j?o(a.options.pointRange,e,0):b.axisPointRange||0,a=a.options.pointPlacement;d=t(d,c);b.single||(f=t(f,xa(a)?0:c/2),g=t(g,a==="on"?0:c))})),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=F(d,c),j)b.closestPointRange=e;if(a)b.oldTransA=k;b.translationSlope=b.transA=k=b.len/
(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=k*f},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.log2lin,g=b.isDatetimeAxis,h=b.isXAxis,i=b.isLinked,k=d.maxPadding,j=d.minPadding,l=d.tickInterval,m=d.tickPixelInterval,n=b.categories,q=b.threshold,z=b.softThreshold,s,G,w,v;!g&&!n&&!i&&this.getTickAmount();w=o(b.userMin,d.min);v=o(b.userMax,d.max);i?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),
b.min=o(c.min,c.dataMin),b.max=o(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&aa(11,1)):(!z&&r(q)&&(b.dataMin>=q?(s=q,j=0):b.dataMax<=q&&(G=q,k=0)),b.min=o(w,s,b.dataMin),b.max=o(v,G,b.dataMax));if(e)!a&&F(b.min,o(b.dataMin,b.min))<=0&&aa(10,1),b.min=ca(f(b.min),15),b.max=ca(f(b.max),15);if(b.range&&r(b.max))b.userMin=b.min=w=t(b.min,b.minFromRange()),b.userMax=v=b.max,b.range=null;I(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!n&&!b.axisPointRange&&!b.usePercentage&&
!i&&r(b.min)&&r(b.max)&&(f=b.max-b.min))!r(w)&&j&&(b.min-=f*j),!r(v)&&k&&(b.max+=f*k);if(J(d.floor))b.min=t(b.min,d.floor);if(J(d.ceiling))b.max=F(b.max,d.ceiling);if(z&&r(b.dataMin))if(q=q||0,!r(w)&&b.min<q&&b.dataMin>=q)b.min=q;else if(!r(v)&&b.max>q&&b.dataMax<=q)b.max=q;b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:i&&!l&&m===b.linkedParent.options.tickPixelInterval?l=b.linkedParent.tickInterval:o(l,this.tickAmount?(b.max-b.min)/t(this.tickAmount-1,1):void 0,n?1:(b.max-b.min)*
m/t(b.len,m));h&&!a&&p(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange&&!l)b.tickInterval=t(b.pointRange,b.tickInterval);a=o(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!l&&b.tickInterval<a)b.tickInterval=a;if(!g&&!e&&!l)b.tickInterval=sb(b.tickInterval,null,rb(b.tickInterval),o(d.allowDecimals,
!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),!!this.tickAmount);if(!this.tickAmount&&this.len)b.tickInterval=b.unsquish();this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:0;this.minorTickInterval=a.minorTickInterval==="auto"&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=
b=c&&c.slice();if(!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max]))))this.tickPositions=b=d;if(!this.isLinked)this.trimTicks(b,e,
f),this.min===this.max&&r(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&this.adjustTickAmount()},trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;if(b)this.min=d;else for(;this.min-f>a[0];)a.shift();if(c)this.max=e;else for(;this.max+f<a[a.length-1];)a.pop();a.length===0&&r(d)&&a.push((e+d)/2)},alignToOthers:function(){var a={},b,c=this.options;this.chart.options.chart.alignTicks!==!1&&c.alignTicks!==!1&&p(this.chart[this.coll],
function(c){var e=c.options,e=[c.horiz?e.left:e.top,e.width,e.height,e.pane].join(",");c.series.length&&(a[e]?b=!0:a[e]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!r(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=ua(this.len/c)+1);if(b<4)this.finalTickAmt=b,b=5;this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=
this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push(ca(b[b.length-1]+a));this.transA*=(e-1)/(c-1);this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(r(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=y}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;p(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=
!0});if(b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()){if(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax}else this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=o(c,!0);p(f.series,function(a){delete a.kdTree});
e=u(e,{min:a,max:b});I(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options,f=F(c,o(e.min,c)),e=t(d,o(e.max,d));this.allowZoomOutside||(r(c)&&a<=f&&(a=f),r(d)&&b>=e&&(b=e));this.displayBtn=a!==y||b!==y;this.setExtremes(a,b,!1,y,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=o(b.width,a.plotWidth-c+(b.offsetRight||0)),f=o(b.height,
a.plotHeight),g=o(b.top,a.plotTop),b=o(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight));c.test(g)&&(g=Math.round(parseFloat(g)/100*a.plotHeight+a.plotTop));this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=t(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?ca(b(this.min)):this.min,max:a?ca(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,
userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=this.lin2log,d=b?c(this.min):this.min,b=b?c(this.max):this.max;a===null?a=b<0?b:d:d>a?a=d:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(o(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},tickSize:function(a){var b=this.options,c=b[a+"Length"],d=o(b[a+"Width"],a==="tick"&&this.isXAxis?1:0);if(d&&c)return b[a+"Position"]==="inside"&&(c=-c),[c,d]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,
this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,d=c,e=this.len/(((this.categories?1:0)+this.max-this.min)/c),f,g=a.rotation,h=this.labelMetrics(),i,k=Number.MAX_VALUE,j,l=function(a){a/=e||1;a=a>1?ua(a):1;return a*c};b?(j=!a.staggerLines&&!a.step&&(r(g)?[g]:e<o(a.autoRotationLimit,80)&&a.autoRotation))&&p(j,function(a){var b;if(a===g||a&&a>=-90&&a<=90)i=l(Q(h.h/da(ja*a))),b=i+Q(a/360),b<k&&(k=b,f=a,d=i)}):a.step||(d=l(h.h));this.autoRotation=
j;this.labelRotation=o(f,g);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),e=a.margin[3];return b&&(c.step||0)<2&&!c.rotation&&(this.staggerLines||1)*a.plotWidth/d||!b&&(e&&e-a.spacing[3]||a.chartWidth*0.33)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,e=this.options.labels,f=this.horiz,g=this.getSlotWidth(),h=t(1,B(g-2*(e.padding||5))),i={},k=this.labelMetrics(),
j=e.style.textOverflow,l,m=0,n,q;if(!xa(e.rotation))i.rotation=e.rotation||0;if(this.autoRotation)p(c,function(a){if((a=d[a])&&a.labelLength>m)m=a.labelLength}),m>h&&m>k.h?i.rotation=this.labelRotation:this.labelRotation=0;else if(g&&(l={width:h+"px"},!j)){l.textOverflow="clip";for(n=c.length;!f&&n--;)if(q=c[n],h=d[q].label)if(h.styles.textOverflow==="ellipsis"?h.css({textOverflow:"clip"}):d[q].labelLength>g&&h.css({width:g+"px"}),h.getBBox().height>this.len/c.length-(k.h-k.f))h.specCss={textOverflow:"ellipsis"}}if(i.rotation&&
(l={width:(m>a.chartHeight*0.5?a.chartHeight*0.33:a.chartHeight)+"px"},!j))l.textOverflow="ellipsis";if(this.labelAlign=e.align||this.autoLabelAlign(this.labelRotation))i.align=this.labelAlign;p(c,function(a){var b=(a=d[a])&&a.label;if(b)b.attr(i),l&&b.css(E(l,b.specCss)),delete b.specCss,a.rotation=i.rotation});this.tickRotCorr=b.rotCorr(k.b,this.labelRotation||0,this.side!==0)},hasData:function(){return this.hasVisibleSeries||r(this.min)&&r(this.max)&&!!this.tickPositions},getOffset:function(){var a=
this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,k,j,l=0,m,n=0,q=d.title,z=d.labels,s=0,G=a.opposite,w=b.axisOffset,b=b.clipOffset,v=[-1,1,1,-1][h],S,u=a.axisParent,$=this.tickSize("tick");k=a.hasData();a.showAxis=j=k||o(d.showEmpty,!0);a.staggerLines=a.horiz&&z.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(u),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(u),a.labelGroup=c.g("axis-labels").attr({zIndex:z.zIndex||
7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add(u);if(k||a.isLinked){if(p(e,function(b){f[b]?f[b].addLabel():f[b]=new Va(a,b)}),a.renderUnsquish(),z.reserveSpace!==!1&&(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign||a.labelAlign==="center")&&p(e,function(a){s=t(f[a].getLabelSize(),s)}),a.staggerLines)s*=a.staggerLines,a.labelOffset=s*(a.opposite?-1:1)}else for(S in f)f[S].destroy(),delete f[S];if(q&&q.text&&q.enabled!==!1){if(!a.axisTitle)(S=q.textAlign)||(S=(g?{low:"left",middle:"center",
high:"right"}:{low:G?"right":"left",middle:"center",high:G?"left":"right"})[q.align]),a.axisTitle=c.text(q.text,0,0,q.useHTML).attr({zIndex:7,rotation:q.rotation||0,align:S}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(q.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(j)l=a.axisTitle.getBBox()[g?"height":"width"],m=q.offset,n=r(m)?0:o(q.margin,g?5:10);a.axisTitle[j?"show":"hide"](!0)}a.offset=v*o(d.offset,w[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=h===0?-a.labelMetrics().h:h===
2?a.tickRotCorr.y:0;n=Math.abs(s)+n;s&&(n-=c,n+=v*(g?o(z.y,a.tickRotCorr.y+v*8):z.x));a.axisTitleMargin=o(m,n);w[h]=t(w[h],a.axisTitleMargin+l+v*a.offset,n,k&&e.length&&$?$[0]:0);d=d.offset?0:V(d.lineWidth/2)*2;b[i]=t(b[i],d)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-
this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=e.x||0,k=e.y||0,j=C(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?j:0);return{x:a?d+i:b+(g?this.width:0)+h+i,y:a?b+k-(g?this.height:0)+h:d+k}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.lin2log,g=a.isLinked,
h=a.tickPositions,i=a.axisTitle,k=a.ticks,j=a.minorTicks,l=a.alternateBands,m=d.stackLabels,n=d.alternateGridColor,q=a.tickmarkOffset,z=d.lineWidth,s,o=b.hasRendered&&J(a.oldMin),w=a.showAxis,v=$a(c.globalAnimation),r,t;a.labelEdge.length=0;a.overlap=!1;p([k,j,l],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||g){a.minorTickInterval&&!a.categories&&p(a.getMinorTickPositions(),function(b){j[b]||(j[b]=new Va(a,b,"minor"));o&&j[b].isNew&&j[b].render(null,!0);j[b].render(null,!1,1)});if(h.length&&
(p(h,function(b,c){if(!g||b>=a.min&&b<=a.max)k[b]||(k[b]=new Va(a,b)),o&&k[b].isNew&&k[b].render(c,!0,0.1),k[b].render(c)}),q&&(a.min===0||a.single)))k[-1]||(k[-1]=new Va(a,-1,null,!0)),k[-1].render(-1);n&&p(h,function(c,d){t=h[d+1]!==y?h[d+1]+q:a.max-q;if(d%2===0&&c<a.max&&t<=a.max+(b.polar?-q:q))l[c]||(l[c]=new x.PlotLineOrBand(a)),r=c+q,l[c].options={from:e?f(r):r,to:e?f(t):t,color:n},l[c].render(),l[c].isActive=!0});if(!a._addedPlotLB)p((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),
a._addedPlotLB=!0}p([k,j,l],function(a){var c,d,e=[],f=v.duration;for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);Pa(function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])},a===l||!b.hasRendered||!f?0:f)});if(z)s=a.getLinePath(z),a.axisLine?a.axisLine.animate({d:s}):a.axisLine=c.path(s).attr({stroke:d.lineColor,"stroke-width":z,zIndex:7}).add(a.axisGroup),a.axisLine[w?"show":"hide"](!0);if(i&&w)i[i.isNew?"attr":"animate"](a.getTitlePosition()),
i.isNew=!1;m&&m.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),p(this.plotLinesAndBands,function(a){a.render()}));p(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||X(b);for(d in c)Ra(c[d]),c[d]=null;p([b.ticks,b.minorTicks,b.alternateBands],function(a){Ra(a)});for(a=e.length;a--;)e[a].destroy();p("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&
(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){var c,d=this.crosshair,e,f;if(!this.crosshair||(r(b)||!o(d.snap,!0))===!1)this.hideCrosshair();else if(o(d.snap,!0)?r(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:o(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,null,c)||null,c===null)this.hideCrosshair();else if(e=this.categories&&!this.isRadial,
f=o(d.width,e?this.transA:1),this.cross)this.cross.attr({d:c,visibility:"visible","stroke-width":f});else{e={"pointer-events":"none","stroke-width":f,stroke:d.color||(e?"rgba(155,200,255,0.2)":"#C0C0C0"),zIndex:o(d.zIndex,2)};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&this.cross.hide()}};u(ha.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,
!0);d&&c?(d.flat=d.toString()===c.toString(),d.push(c[4],c[5],c[1],c[2])):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new x.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,
e=b.length;e--;)b[e].id===a&&b[e].destroy();p([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&pa(b,b[e])})}});ha.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=U.global.useUTC,h,i=new la(b-Ya(b)),k=a.unitRange,j=a.count;if(r(b)){i[Fb](k>=H.second?0:j*V(i.getMilliseconds()/j));if(k>=H.second)i[Gb](k>=H.minute?0:j*V(i.getSeconds()/j));if(k>=H.minute)i[Hb](k>=H.hour?0:j*V(i[tb]()/j));if(k>=H.hour)i[Ib](k>=H.day?0:j*V(i[ub]()/j));
if(k>=H.day)i[kb](k>=H.month?1:j*V(i[Ua]()/j));k>=H.month&&(i[wb](k>=H.year?0:j*V(i[ab]()/j)),h=i[bb]());k>=H.year&&(h-=h%j,i[xb](h));if(k===H.week)i[kb](i[Ua]()-i[vb]()+o(d,1));b=1;if(qb||Za)i=i.getTime(),i=new la(i+Ya(i));h=i[bb]();for(var d=i.getTime(),l=i[ab](),m=i[Ua](),n=!g||!!Za,q=(H.day+(g?Ya(i):i.getTimezoneOffset()*6E4))%H.day;d<c;)e.push(d),k===H.year?d=jb(h+b*j,0):k===H.month?d=jb(h,l+b*j):n&&(k===H.day||k===H.week)?d=jb(h,l,m+b*j*(k===H.day?1:7)):d+=k*j,b++;e.push(d);p(Ba(e,function(a){return k<=
H.hour&&a%H.day===q}),function(a){f[a]="day"})}e.info=u(a,{higherRanks:f,totalRange:k*j});return e};ha.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=H[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=H[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+H[c[g+1][0]])/2)break;e===H.year&&
a<5*e&&(f=[1,2,5]);c=sb(a/e,f,d[0]==="year"?t(rb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};ha.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=this.lin2log,h=this.log2lin,i=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=B(a),i=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=V(b),k,j,l,m,n,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!n;f++){j=e.length;for(k=0;k<j&&!n;k++)l=h(g(f)*e[k]),l>b&&(!d||m<=c)&&m!==y&&i.push(m),m>
c&&(n=!0),m=l}else if(b=g(b),c=g(c),a=e[d?"minorTickInterval":"tickInterval"],a=o(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=sb(a,null,rb(a)),i=Ca(this.getLinearTickPositions(a,b,c),h),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return i};ha.prototype.log2lin=function(a){return Y.log(a)/Y.LN10};ha.prototype.lin2log=function(a){return Y.pow(10,a)};var Ob=x.Tooltip=function(){this.init.apply(this,arguments)};Ob.prototype=
{init:function(a,b){var c=b.borderWidth,d=b.style,e=C(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});ka||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);
clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(Q(a-f.x)>1||Q(b-f.y)>1),h=e.followPointer||e.len>1;u(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?y:g?(2*f.anchorX+c)/3:c,anchorY:h?y:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=o(a,this.options.hideDelay,500);if(!this.isHidden)this.hideTimer=
Pa(function(){b.label[a?"fadeOut":"hide"]();b.isHidden=!0},a)},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=d.plotLeft,h=0,i=0,k,j,a=ta(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===y&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(p(a,function(a){k=a.series.yAxis;j=a.series.xAxis;h+=a.plotX+(!e&&j?j.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&k?k.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>
1&&b?b.chartY-f:e?d.plotHeight-h:i]);return Ca(c,B)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g=c.h||0,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],k=["x",d.chartWidth,a,c.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],j=!this.followPointer&&o(c.ttBelow,!d.inverted===!!c.negative),l=function(a,b,c,d,h,i){var k=c<d-e,m=d+e+c<b,l=d-e-c;d+=e;if(j&&m)f[a]=d;else if(!j&&k)f[a]=l;else if(k)f[a]=F(i-c,l-g<0?l:l-g);else if(m)f[a]=t(h,d+g+c>b?d:
d+g);else return!1},m=function(a,b,c,d){var g;d<e||d>b-e?g=!1:f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return g},n=function(a){var b=i;i=k;k=b;h=a},q=function(){l.apply(0,i)!==!1?m.apply(0,k)===!1&&!h&&(n(!0),q()):h?f.x=f.y=0:(n(!0),q())};(d.inverted||this.len>1)&&n();q();return f},defaultFormatter:function(a){var b=this.points||ta(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=
this.chart,d=this.label,e=this.options,f,g,h,i={},k,j=[];k=e.formatter||this.defaultFormatter;var i=c.hoverPoints,l,m=this.shared;clearTimeout(this.hideTimer);this.followPointer=ta(a)[0].series.tooltipOptions.followPointer;h=this.getAnchor(a,b);f=h[0];g=h[1];m&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&p(i,function(a){a.setState()}),p(a,function(a){a.setState("hover");j.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=j,this.len=j.length,a=a[0]):i=a.getLabelConfig();
k=k.call(i,this);i=a.series;this.distance=o(i.tooltipOptions.distance,16);k===!1?this.hide():(this.isHidden&&(Oa(d),d.attr("opacity",1).show()),d.attr({text:k}),l=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:l}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0}),this.isHidden=!1);I(c,"tooltipRefresh",{text:k,x:f+c.plotLeft,y:g+c.plotTop,borderColor:l})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,
c.width,c.height,a);this.move(B(c.x),B(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,b,c){var d,b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,hour:6,day:3},h,i="millisecond";if(e){h=Qa("%m-%d %H:%M:%S.%L",a.x);for(f in H){if(e===H.week&&+Qa("%w",a.x)===c.options.startOfWeek&&h.substr(6)==="00:00:00.000"){f="week";break}if(H[f]>e){f=i;break}if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=
b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,e=d.tooltipOptions,f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&J(a.key),c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return Ka(c,{point:a,series:d})},bodyFormatter:function(a){return Ca(a,function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};
var ia;db=A&&A.documentElement.ontouchstart!==y;var Xa=x.Pointer=function(a,b){this.init(a,b)};Xa.prototype={init:function(a,b){var c=b.chart,d=c.events,e=ka?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(x.Tooltip&&b.tooltip.enabled)a.tooltip=new Ob(a,b.tooltip),this.followTouchMove=o(b.tooltip.followTouchMove,
!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||D.event;if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=zb(this.chart.container);d.pageX===y?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return u(a,{chartX:B(c),chartY:B(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};p(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":
"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e=d?d.shared:!1,f=b.hoverPoint,g=b.hoverSeries,h,i=[Number.MAX_VALUE,Number.MAX_VALUE],k,j,l=[],m=[],n;if(!e&&!g)for(h=0;h<c.length;h++)if(c[h].directTouch||!c[h].options.stickyTracking)c=[];g&&(e?g.noSharedTooltip:g.directTouch)&&f?m=[f]:(p(c,function(b){k=b.noSharedTooltip&&e;j=!e&&b.directTouch;b.visible&&!k&&!j&&o(b.options.enableMouseTracking,!0)&&(n=b.searchPoint(a,!k&&b.kdDimensions===1))&&l.push(n)}),
p(l,function(a){a&&p(["dist","distX"],function(b,c){if(J(a[b])){var d=a[b]===i[c]&&a.series.group.zIndex>=m[c].series.group.zIndex;if(a[b]<i[c]||d)i[c]=a[b],m[c]=a}})}));if(e)for(h=l.length;h--;)(l[h].clientX!==m[1].clientX||l[h].series.noSharedTooltip)&&l.splice(h,1);if(m[0]&&(m[0]!==this.prevKDPoint||d&&d.isHidden))if(e&&!m[0].series.noSharedTooltip)l.length&&d&&d.refresh(l,a),p(l,function(b){b.onMouseOver(a,b!==(g&&g.directTouch&&f||m[0]))}),this.prevKDPoint=m[1];else{d&&d.refresh(m[0],a);if(!g||
!g.directTouch)m[0].onMouseOver(a);this.prevKDPoint=m[0]}else c=g&&g.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));if(!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if(T[ia])T[ia].pointer.onDocumentMouseMove(a)},N(A,"mousemove",this._onDocumentMouseMove);p(e?l:[o(f,m[1])],function(c){p(b.axes,function(b){(!c||c.series[b.coll]===b)&&b.drawCrosshair(a,c)})})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=
c.hoverPoint,f=c.hoverPoints,g=c.tooltip,h=g&&g.shared?f:e;a&&h&&p(ta(h),function(b){b.series.isCartesian&&b.plotX===void 0&&(a=!1)});if(a)g&&h&&(g.refresh(h),e&&(e.setState(e.state,!0),p(c.axes,function(a){o(a.crosshair&&a.crosshair.snap,!0)?a.drawCrosshair(null,e):a.hideCrosshair()})));else{if(e)e.onMouseOut();f&&p(f,function(a){a.setState()});if(d)d.onMouseOut();g&&g.hide(b);if(this._onDocumentMouseMove)X(A,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;p(c.axes,function(a){a.hideCrosshair()});
this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;p(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,k=b.plotWidth,j=b.plotHeight,l,m=this.selectionMarker,n=this.mouseDownX,q=this.mouseDownY,o=c.panKey&&a[c.panKey+"Key"];if(!m||!m.touch)if(d<h?d=h:d>h+k&&(d=h+k),e<i?e=i:e>i+j&&(e=i+j),this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(q-e,2)),this.hasDragged>10){l=b.isInsidePlot(n-h,q-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!o&&!m)this.selectionMarker=m=b.renderer.rect(h,i,
f?1:k,g?1:j,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();m&&f&&(d-=n,m.attr({width:Q(d),x:(d>0?0:d)+n}));m&&g&&(d=e-q,m.attr({height:Q(d),y:(d>0?0:d)+q}));l&&!m&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},f=this.selectionMarker,g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,k=f.attr?f.attr("height"):f.height,j;if(this.hasDragged||
d)p(c.axes,function(c){if(c.zoomEnabled&&r(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,n=a.type==="touchend"?c.minPixelPadding:0,q=c.toValue((f?g:h)+n),f=c.toValue((f?g+i:h+k)-n);e[c.coll].push({axis:c,min:F(q,f),max:t(q,f)});j=!0}}),j&&I(c,"selection",e,function(a){c.zoom(u(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}if(c)M(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=
this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){T[ia]&&T[ia].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(a){var b=T[ia];if(b&&(a.relatedTarget||a.toElement))b.pointer.reset(),
b.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;if(!r(ia)||!T[ia]||!T[ia].mouseIsDown)ia=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=P(a,"class")){if(c.indexOf(b)!==-1)return!0;if(c.indexOf("highcharts-container")!==-1)return!1}a=a.parentNode}},
onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,a=a.relatedTarget||a.toElement;if(b&&a&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&!this.inClass(a,"highcharts-series-"+b.index))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(I(c.series,"click",u(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(u(a,this.getCoordinates(a)),
b.isInsidePlot(a.chartX-d,a.chartY-e)&&I(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};N(b,"mouseleave",a.onContainerMouseLeave);eb===1&&N(A,"mouseup",a.onDocumentMouseUp);if(db)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},eb===1&&N(A,"touchend",a.onDocumentTouchEnd)},
destroy:function(){var a;X(this.chart.container,"mouseleave",this.onContainerMouseLeave);eb||(X(A,"mouseup",this.onDocumentMouseUp),X(A,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};u(x.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=
this.chart,k=a?"x":"y",j=a?"X":"Y",l="chart"+j,m=a?"width":"height",n=i["plot"+(a?"Left":"Top")],q,o,s=h||1,p=i.inverted,w=i.bounds[a?"h":"v"],v=b.length===1,r=b[0][l],t=c[0][l],u=!v&&b[1][l],x=!v&&c[1][l],B,c=function(){!v&&Q(r-u)>20&&(s=h||Q(t-x)/Q(r-u));o=(n-t)/s+r;q=i["plot"+(a?"Width":"Height")]/s};c();b=o;b<w.min?(b=w.min,B=!0):b+q>w.max&&(b=w.max-q,B=!0);B?(t-=0.8*(t-g[k][0]),v||(x-=0.8*(x-g[k][1])),c()):g[k]=[t,x];p||(f[k]=o-n,f[m]=q);f=p?1/s:s;e[m]=q;e[k]=b;d[p?a?"scaleY":"scaleX":"scale"+
j]=s;d["translate"+j]=f*n+(t-f*r)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=a.touches,f=e.length,g=b.lastValidTouch,h=b.hasZoom,i=b.selectionMarker,k={},j=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),l={};if(f>1)b.initiated=!0;h&&b.initiated&&!j&&a.preventDefault();Ca(e,function(a){return b.normalize(a)});if(a.type==="touchstart")p(e,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=[d[0].chartY,d[1]&&
d[1].chartY],p(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(o(a.options.min,a.dataMin)),f=a.toPixels(o(a.options.max,a.dataMax)),g=F(e,f),e=t(e,f);b.min=F(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=u({destroy:Aa,touch:!0},c.plotBox);b.pinchTranslate(d,e,k,i,l,g);b.hasPinched=h;b.scaleGroups(k,l);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,
0)}},touch:function(a,b){var c=this.chart,d;ia=c.index;if(a.touches.length===1)if(a=this.normalize(a),c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)&&!c.openMenu){b&&this.runPointActions(a);if(a.type==="touchmove")c=this.pinchDown,d=c[0]?Math.sqrt(Math.pow(c[0].chartX-a.chartX,2)+Math.pow(c[0].chartY-a.chartY,2))>=4:!1;o(d,!0)&&this.pinch(a)}else b&&this.reset();else a.touches.length===2&&this.pinch(a)},onContainerTouchStart:function(a){this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},
onDocumentTouchEnd:function(a){T[ia]&&T[ia].pointer.drop(a)}});if(D.PointerEvent||D.MSPointerEvent){var va={},Cb=!!D.PointerEvent,Rb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in va)va.hasOwnProperty(a)&&b.push({pageX:va[a].pageX,pageY:va[a].pageY,target:va[a].target});return b},Db=function(a,b,c,d){if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&T[ia])d(a),d=T[ia].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:Aa,touches:Rb()})};u(Xa.prototype,
{onContainerPointerDown:function(a){Db(a,"onContainerTouchStart","touchstart",function(a){va[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Db(a,"onContainerTouchMove","touchmove",function(a){va[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!va[a.pointerId].target)va[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Db(a,"onDocumentTouchEnd","touchend",function(a){delete va[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,
Cb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,Cb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(A,Cb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});fb(Xa.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&M(b.container,{"-ms-touch-action":"none","touch-action":"none"})});fb(Xa.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(N)});fb(Xa.prototype,"destroy",function(a){this.batchMSEvents(X);
a.call(this)})}var ob=x.Legend=function(a,b){this.init(a,b)};ob.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=E(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=d=o(b.padding,8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=o(b.symbolWidth,16),c.pages=[],c.render(),N(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,
d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},k;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(k in i.stroke=h,g=a.convertAttribs(g),g)d=g[k],d!==y&&(i[k]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-
e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;p(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Sa(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight,e=this.titleHeight;if(b)c=b.translateY,p(this.allItems,function(f){var g=f.checkbox,h;g&&(h=c+e+g.y+(a||0)+3,M(g,
{left:b.translateX+f.checkboxOffset+g.x-20+"px",top:h+"px",display:h>c-6&&h<c+d-6?"":"none"}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?
Ka(b.labelFormat,a):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,k=this.padding,j=e?o(d.itemDistance,20):0,l=!d.rtl,m=d.width,n=d.itemMarginBottom||0,q=this.itemMarginTop,z=this.initialItemX,s=a.legendItem,p=a.series&&a.series.drawLegendSymbol?a.series:a,w=p.options,w=this.createCheckboxForItem&&w&&w.showCheckbox,v=d.useHTML;if(!s){a.legendGroup=
c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=s=c.text("",l?f+g:-g,this.baseline||0,v).css(E(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,s),this.baseline=this.fontMetrics.f+3+q,s.attr("y",this.baseline);p.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,s,v,h,i);w&&this.createCheckboxForItem(a)}this.colorizeItem(a,a.visible);this.setText(a);c=s.getBBox();f=a.checkboxOffset=
d.itemWidth||a.legendItemWidth||f+g+c.width+j+(w?20:0);this.itemHeight=g=B(a.legendItemHeight||c.height);if(e&&this.itemX-z+f>(m||b.chartWidth-2*k-z-d.x))this.itemX=z,this.itemY+=q+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,f);this.lastItemY=q+this.itemY+n;this.lastLineHeight=t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=q+g+n,this.lastLineHeight=g);this.offsetWidth=m||t((e?this.itemX-z-j:f)+k,this.offsetWidth)},
getAllItems:function(){var a=[];p(this.chart.series,function(b){var c=b.options;if(o(c.showInLegend,!r(c.linkedTo)?y:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0);this.display&&!d.floating&&p([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!r(a[g])&&(c[nb[g]]=t(c[nb[g]],c.legend[(g+1)%2?"legendHeight":
"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+o(d.margin,12)+b[g]))})},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,k=a.options,j=a.padding,l=k.borderWidth,m=k.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();hb(e,function(a,b){return(a.options&&a.options.legendIndex||
0)-(b.options&&b.options.legendIndex||0)});k.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;a.lastLineHeight=0;p(e,function(b){a.renderItem(b)});g=(k.width||a.offsetWidth)+j;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=j;if(l||m){if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,k.borderRadius,l||0).attr({stroke:k.borderColor,"stroke-width":l||0,fill:m||"none"}).add(d).shadow(k.shadow),i.isNew=!0;i[f?
"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;p(e,function(b){a.positionItem(b)});f&&d.align(u({width:g,height:h},k),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,k=e.navigation,j=o(k.animation,!0),l=k.arrowSize||12,m=this.nav,n=this.pages,q=this.padding,z,s=this.allItems,r=function(a){i.attr({height:a});
if(b.contentGroup.div)b.contentGroup.div.style.clip="rect("+q+"px,9999px,"+(q+a)+"px,0)"};e.layout==="horizontal"&&(f/=2);g&&(f=F(f,g));n.length=0;if(a>f&&k.enabled!==!1){this.clipHeight=h=t(f-20-this.titleHeight-q,0);this.currentPage=o(this.currentPage,1);this.fullHeight=a;p(s,function(a,b){var c=a._legendItemPos[1],d=B(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(z||c)!==n[e-1])n.push(z||c),e++;b===s.length-1&&c+d-n[e-1]>h&&n.push(c);c!==z&&(z=c)});if(!i)i=b.clipRect=d.clipRect(0,
q,9999,0),b.contentGroup.clip(i);r(h);if(!m)this.nav=m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,j)}).add(m),this.pager=d.text("",15,10).css(k.style).add(m),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,j)}).add(m);b.scroll(0);a=f}else if(m)r(c.chartHeight),m.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,
f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,k=this.padding;e>d&&(e=d);if(e>0)b!==y&&Ta(b,this.chart),this.nav.attr({translateX:k,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),
this.currentPage=e,this.positionCheckboxes(c)}};K=x.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||a.fontMetrics.f;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,e=this.chart.renderer,f=this.legendGroup,a=a.baseline-B(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=
b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=c=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).add(f),c.isMarker=!0}};(/Trident\/7\.0/.test(za)||Na)&&fb(ob.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});var gb=x.Chart=function(){this.getArgs.apply(this,arguments)};x.chart=function(a,b,c){return new gb(a,b,c)};gb.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);
if(xa(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(a,b){var c,d=a.series;a.series=null;c=E(U,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=T.length;T.push(f);eb++;d.reflow!==!1&&N(f,"load",function(){f.initReflow()});
if(e)for(g in e)N(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=ka?!1:o(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=L[a.type||b.type||b.defaultSeriesType])||aa(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,
k=this.isDirtyBox,j=c.length,l=j,m=this.renderer,n=m.isHidden(),q=[];Ta(a,this);n&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=j;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;p(c,function(a){a.isDirty&&a.options.legendType==="point"&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&I(a,"updatedData")});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=
null,p(b,function(a){a.setScale()});this.getMargins();i&&(p(b,function(a){a.isDirty&&(k=!0)}),p(b,function(a){var b=a.min+","+a.max;if(a.extKey!==b)a.extKey=b,q.push(function(){I(a,"afterSetExtremes",u(a.eventArgs,a.getExtremes()));delete a.eventArgs});(k||g)&&a.redraw()}));k&&this.drawChartBox();p(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);m.draw();I(this,"redraw");n&&this.cloneRenderTo(!0);p(q,function(a){a.call()})},get:function(a){var b=this.axes,
c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ta(b.xAxis||{}),b=b.yAxis=ta(b.yAxis||{});p(c,function(a,b){a.index=b;a.isX=!0});p(b,function(a,b){a.index=b});c=c.concat(b);p(c,function(b){new ha(a,b)})},getSelectedPoints:function(){var a=[];p(this.series,
function(b){a=a.concat(Ba(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return Ba(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=E(e.title,a);g=e.subtitle=E(e.subtitle,b),e=g;p([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||
4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox;if(c&&(c.css({width:(f.width||h.width+f.widthAdjust)+"px"}).align(u({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,h),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h.width+e.widthAdjust)+"px"}).align(u({y:b+(f.margin-13)+g.fontMetrics(e.style.fontSize,c).b},e),!1,h),!e.floating&&!e.verticalAlign&&
(b=ua(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&o(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!r(b))this.containerWidth=na(c,"width");if(!r(a))this.containerHeight=na(c,"height");this.chartWidth=t(0,b||this.containerWidth||600);this.chartHeight=t(0,o(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=
this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Sa(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),M(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),A.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options,c=b.chart,d,e;a=this.renderTo;var f="highcharts-"+yb++;if(!a)this.renderTo=
a=c.renderTo;if(xa(a))this.renderTo=a=A.getElementById(a);a||aa(13,!0);d=C(P(a,"data-highcharts-chart"));J(d)&&T[d]&&T[d].hasRendered&&T[d].destroy();P(a,"data-highcharts-chart",this.index);a.innerHTML="";!c.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();d=this.chartWidth;e=this.chartHeight;this.container=a=ba(Ma,{className:"highcharts-container"+(c.className?" "+c.className:""),id:f},u({position:"relative",overflow:"hidden",width:d+"px",height:e+"px",textAlign:"left",lineHeight:"normal",
zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=new (x[c.renderer]||cb)(a,d,e,c.style,c.forExport,b.exporting&&b.exporting.allowHTML);ka&&this.renderer.create(this,a,d,e);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!r(c[0]))this.plotTop=t(this.plotTop,d+this.options.title.margin+b[0]);this.legend.adjustMargins(c,b);this.extraBottomMargin&&
(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&p(a.axes,function(a){a.visible&&a.getOffset()});p(nb,function(d,e){r(c[e])||(a[d]+=b[e])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||na(d,"width"),f=c.height||na(d,"height"),c=a?a.target:D;if(!b.hasUserSize&&!b.isPrinting&&e&&f&&(c===
D||c===A)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=Pa(function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null},a?100:0);b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};N(D,"resize",b);N(a,"destroy",function(){X(D,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g=d.renderer;d.isResizing+=1;Ta(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(r(a))d.chartWidth=e=t(0,
B(a)),d.hasUserSize=!!e;if(r(b))d.chartHeight=f=t(0,B(b));a=g.globalAnimation;(a?Wa:M)(d.container,{width:e+"px",height:f+"px"},a);d.setChartSize(!0);g.setSize(e,f,c);d.maxTicks=null;p(d.axes,function(a){a.isDirty=!0;a.setScale()});p(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;I(d,"resize");Pa(function(){d&&I(d,"endResize",null,function(){d.isResizing-=1})},$a(a).duration)},setChartSize:function(a){var b=
this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,k,j,l;this.plotLeft=i=B(this.plotLeft);this.plotTop=k=B(this.plotTop);this.plotWidth=j=t(0,B(d-i-this.marginRight));this.plotHeight=l=t(0,B(e-k-this.marginBottom));this.plotSizeX=b?l:j;this.plotSizeY=b?j:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:k,width:j,height:l};
d=2*V(this.plotBorderWidth/2);b=ua(t(d,h[3])/2);c=ua(t(d,h[0])/2);this.clipBox={x:b,y:c,width:V(this.plotSizeX-t(d,h[1])/2-b),height:t(0,V(this.plotSizeY-t(d,h[2])/2-c))};a||p(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;p(nb,function(b,c){a[b]=o(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,
f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,k=a.backgroundColor,j=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||0,n,q=this.plotLeft,o=this.plotTop,p=this.plotWidth,r=this.plotHeight,w=this.plotBox,v=this.clipRect,t=this.clipBox;n=i+(a.shadow?8:0);if(i||k)if(e)e.animate(e.crisp({width:c-n,height:d-n}));else{e={fill:k||"none"};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(j)f?
f.animate(w):this.plotBackground=b.rect(q,o,p,r,0).attr({fill:j}).add().shadow(a.plotShadow);if(l)h?h.animate(w):this.plotBGImage=b.image(l,q,o,p,r).add();v?v.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);if(m)g?(g.strokeWidth=-m,g.animate(g.crisp({x:q,y:o,width:p,height:r}))):this.plotBorder=b.rect(q,o,p,r,0,-m).attr({stroke:a.plotBorderColor,"stroke-width":m,fill:"none",zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,
e,f;p(["inverted","angular","polar"],function(g){c=L[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=L[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;p(b,function(a){a.linkedSeries.length=0});p(b,function(b){var d=b.options.linkedTo;if(xa(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d,b.visible=o(b.options.visible,d.options.visible,b.visible)})},renderSeries:function(){p(this.series,
function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&p(b.items,function(c){var d=u(b.style,c.style),e=C(d.left)+a.plotLeft,f=C(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=new ob(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=
21;p(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.05;if(f||g)this.maxTicks=null,p(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&p(a,function(a){a.visible&&a.render()});if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&
!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)D.location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;I(a,"destroy");T[a.index]=y;eb--;a.renderTo.removeAttribute("data-highcharts-chart");X(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();p("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),
function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",X(d),f&&Sa(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!fa&&D==D.top&&A.readyState!=="complete"||ka&&!D.canvg?(ka?Nb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):A.attachEvent("onreadystatechange",function(){A.detachEvent("onreadystatechange",a.firstRender);A.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();
I(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();p(b.series||[],function(b){a.initSeries(b)});a.linkSeries();I(a,"beforeRender");if(x.Pointer)a.pointer=new Xa(a,b);a.render();a.renderer.draw();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){var a=this;p([this.callback].concat(this.callbacks),function(b){b&&a.index!==void 0&&b.apply(a,[a])});I(a,"load");this.onload=null},splashArray:function(a,b){var c=b[a],c=Z(c)?c:[c,c,c,c];return[o(b[a+
"Top"],c[0]),o(b[a+"Right"],c[1]),o(b[a+"Bottom"],c[2]),o(b[a+"Left"],c[3])]}};var Bb=x.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[o(e[0],"50%"),o(e[1],"50%"),a.size||"100%",a.innerSize||0],f=F(d,b),g,h;for(g=0;g<4;++g)h=e[g],a=g<2||g===2&&/%$/.test(h),e[g]=(/%$/.test(h)?[d,b,f,e[2]][g]*parseFloat(h)/100:parseFloat(h))+(a?c:0);e[3]>e[2]&&(e[3]=e[2]);return e}},Ja=function(){};Ja.prototype={init:function(a,
b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ja.prototype.optionsToObject.call(this,a);u(this,a);this.options=this.options?u(this.options,a):a;if(d)this.y=this[d];this.isNull=this.x===null||
this.y===null;if(this.x===void 0&&c)this.x=b===void 0?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(J(a)||a===null)b[e[0]]=a;else if(Ea(a)){if(!d&&a.length>f){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;){if(!d||a[g]!==void 0)b[e[h]]=a[g];g++;h++}}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},
destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),pa(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)X(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,
y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=o(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";p(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ka(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;
(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});I(this,a,b,c)},visible:!0};var R=x.Series=function(){};R.prototype={isCartesian:!0,type:"line",pointClass:Ja,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x",
"y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return o(a.options.index,a._i)-o(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();u(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(ka)b.animation=!1;e=b.events;for(d in e)N(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();p(c.parallelArrays,function(a){c[a+"Data"]=
[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;hb(f,g);this.yAxis&&hb(this.yAxis.series,g);p(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;p(a.axisTypes||[],function(e){p(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==y&&b[e]===d.id||b[e]===y&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&aa(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,
d=arguments,e=J(b)?function(d){var e=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=e}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};p(c.parallelArrays,e)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=o(b,a.pointStart,0);this.pointInterval=c=o(this.pointInterval,a.pointInterval,1);d&&(a=new la(b),d==="day"?a=+a[kb](a[Ua]()+c):d==="month"?a=+a[wb](a[ab]()+c):d==="year"&&(a=+a[xb](a[bb]()+c)),c=a-b);this.xIncrement=
b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=E(e,c.series,a);this.tooltipOptions=E(U.tooltip,U.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+"Threshold"]||
c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&r(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(r(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||ea[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=
this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=0},drawLegendSymbol:K.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,k=e.chart,j=null,l=e.xAxis,m=l&&!!l.categories,n=i.turboThreshold,q=this.xData,z=this.yData,s=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=o(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)p(a,function(a,b){f[b].update&&a!==i.data[b]&&f[b].update(a,
!1,null,!1)});else{e.xIncrement=null;e.colorCounter=0;p(this.parallelArrays,function(a){e[a+"Data"].length=0});if(n&&h>n){for(c=0;j===null&&c<h;)j=a[c],c++;if(J(j)){m=o(i.pointStart,0);j=o(i.pointInterval,1);for(c=0;c<h;c++)q[c]=m,z[c]=a[c],m+=j;e.xIncrement=m}else if(Ea(j))if(s)for(c=0;c<h;c++)j=a[c],q[c]=j[0],z[c]=j.slice(1,s+1);else for(c=0;c<h;c++)j=a[c],q[c]=j[0],z[c]=j[1];else aa(12)}else for(c=0;c<h;c++)if(a[c]!==y&&(j={series:e},e.pointClass.prototype.applyOptions.apply(j,[a[c]]),e.updateParallelArrays(j,
c),m&&r(j.name)))l.names[j.x]=j.name;xa(z[0])&&aa(14,!0);e.data=[];e.options.data=e.userOptions.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=k.isDirtyBox=!0;c=!1}i.legendType==="point"&&(this.processData(),this.generatePoints());b&&k.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,k=this.options;i=k.cropThreshold;var j=this.getExtremesFromAll||k.getExtremesFromAll,l=this.isCartesian,
k=h&&h.val2lin,m=h&&h.isLog,n,q;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)a=h.getExtremes(),n=a.min,q=a.max;if(l&&this.sorted&&!j&&(!i||d>i||this.forceCrop))if(b[d-1]<n||b[0]>q)b=[],c=[];else if(b[0]<n||b[d-1]>q)e=this.cropData(this.xData,this.yData,n,q),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length||1;--i;)d=m?k(b[i])-k(b[i-1]):b[i]-b[i-1],d>0&&(g===y||d<g)?g=d:d<0&&this.requireSorting&&aa(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=
c;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=o(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(c=i;c<e;c++)if(a[c]>d){g=c+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,k=this.hasGroupedData,j,l=[],m;if(!b&&!k)b=[],b.length=a.length,b=this.data=b;for(m=0;m<g;m++)i=
h+m,k?(l[m]=(new f).init(this,[d[m]].concat(ta(e[m]))),l[m].dataGroup=this.groupMap[m]):(b[i]?j=b[i]:a[i]!==y&&(b[i]=j=(new f).init(this,a[i],d[m])),l[m]=j),l[m].index=i;if(b&&(g!==(c=b.length)||k))for(m=0;m<c;m++)if(m===h&&!k&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=y;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,k,j,l,a=a||this.stackedYData||this.processedYData||[];d=a.length;for(l=0;l<
d;l++)if(k=c[l],j=a[l],i=j!==null&&j!==y&&(!b.isLog||j.length||j>0),k=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[l+1]||k)>=g&&(c[l-1]||k)<=h,i&&k)if(i=j.length)for(;i--;)j[i]!==null&&(e[f++]=j[i]);else e[f++]=j;this.dataMin=La(e);this.dataMax=Ga(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,
k=i==="between"||J(i),j=a.threshold,l=a.startFromThreshold?j:0,m,n,q,p,s=Number.MAX_VALUE,a=0;a<g;a++){var G=f[a],w=G.x,v=G.y;n=G.low;var u=b&&e.stacks[(this.negStacks&&v<(l?0:j)?"-":"")+this.stackKey];if(e.isLog&&v!==null&&v<=0)G.y=v=null,aa(10);G.plotX=m=ca(F(t(-1E5,c.translate(w,0,0,0,1,i,this.type==="flags")),1E5));if(b&&this.visible&&!G.isNull&&u&&u[w])p=this.getStackIndicator(p,w,this.index),u=u[w],v=u.points[p.key],n=v[0],v=v[1],n===l&&(n=o(j,e.min)),e.isLog&&n<=0&&(n=null),G.total=G.stackTotal=
u.total,G.percentage=u.total&&G.y/u.total*100,G.stackY=v,u.setOffset(this.pointXOffset||0,this.barW||0);G.yBottom=r(n)?e.translate(n,0,1,0,1):null;h&&(v=this.modifyValue(v,G));G.plotY=n=typeof v==="number"&&v!==Infinity?F(t(-1E5,e.translate(v,0,1,0,1)),1E5):y;G.isInside=n!==y&&n>=0&&n<=e.len&&m>=0&&m<=c.len;G.clientX=k?c.translate(w,0,0,0,1):m;G.negative=G.y<(j||0);G.category=d&&d[G.x]!==y?d[G.x]:G.x;G.isNull||(q!==void 0&&(s=F(s,Q(m-q))),q=m)}this.closestPointRangePx=s},getValidPoints:function(a,
b){var c=this.chart;return Ba(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,f=this.clipBox,g=f||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(","),i=b[h],k=b[h+"m"];if(!i){if(a)g.width=0,b[h+"m"]=k=d.clipRect(-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight);b[h]=i=d.clipRect(g)}a&&(i.count+=1);if(c.clip!==
!1)this.group.clip(a||f?i:b.clipRect),this.markerGroup.clip(k),this.sharedClipKey=h;a||(i.count-=1,i.count<=0&&h&&b[h]&&(f||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=this.options.animation,d;if(c&&!Z(c))c=ea[this.type].animation;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();I(this,"afterAnimate")},
drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,k,j,l=this.options.marker,m=this.pointAttr[""],n,q,p,s=this.markerGroup,r=o(l.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=V(g.plotX),e=g.plotY,j=g.graphic,n=g.marker||{},q=!!g.marker,a=r&&n.enabled===y||n.enabled,p=g.isInside,a&&J(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||m,h=a.r,i=o(n.symbol,this.symbol),k=i.indexOf("url")===
0,j)j[p?"show":"hide"](!0).attr(a).animate(u({x:d-h,y:e-h},j.symbolName?{width:2*h,height:2*h}:{}));else{if(p&&(h>0||k))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,q?n:l).attr(a).add(s)}else if(j)g.graphic=j.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=o(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ea[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor,
i={stroke:g,fill:g},k=a.points||[],j,l=[],m,n=a.pointAttrToOptions;f=a.hasPointSpecificOptions;var q=c.lineColor,z=c.fillColor;j=b.turboThreshold;var s=a.zones,t=a.zoneAxis||"y",w,v;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||ma(e.color||g).brighten(e.brightness).get(),e.negativeColor=e.negativeColor||ma(e.negativeColor||h).brighten(e.brightness).get());l[""]=a.convertAttribs(c,i);p(["hover","select"],function(b){l[b]=
a.convertAttribs(d[b],l[""])});a.pointAttr=l;g=k.length;if(!j||g<j||f)for(;g--;){j=k[g];if((c=j.options&&j.options.marker||j.options)&&c.enabled===!1)c.radius=0;i=null;if(s.length){f=0;for(i=s[f];j[t]>=i.value;)i=s[++f];j.color=j.fillColor=i=o(i.color,a.color)}f=b.colorByPoint||j.color;if(j.options)for(v in n)r(c[n[v]])&&(f=!0);if(f){c=c||{};m=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker||j.negative&&!f.fillColor&&!e.fillColor)f[a.pointAttrToOptions.fill]=f.color||!j.options.color&&e[j.negative&&
h?"negativeColor":"color"]||ma(j.color).brighten(f.brightness||e.brightness).get();w={color:j.color};if(!z)w.fillColor=j.color;if(!q)w.lineColor=j.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;if(i&&!e.fillColor)f.fillColor=i;m[""]=a.convertAttribs(u(w,c),l[""]);m.hover=a.convertAttribs(d.hover,l.hover,m[""]);m.select=a.convertAttribs(d.select,l.select,m[""])}else m=l;j.pointAttr=m}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(za),d,e=a.data||[],f,g,h;I(a,"destroy");
X(a);p(a.axisTypes||[],function(b){if(h=a[b])pa(h.series,a),h.isDirty=h.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof O&&!a[g].survive&&(d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;pa(b.series,a);for(g in a)delete a[g]},getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,g,h=[],i,a=a||d.points;(g=a.reversed)&&
a.reverse();(f={right:1,center:2}[f]||f&&3)&&g&&(f=4-f);e.connectNulls&&!b&&!c&&(a=this.getValidPoints(a));p(a,function(g,j){var l=g.plotX,m=g.plotY,n=a[j-1];if((g.leftCliff||n&&n.rightCliff)&&!c)i=!0;g.isNull&&!r(b)&&j>0?i=!e.connectNulls:g.isNull&&!b?i=!0:(j===0||i?n=["M",g.plotX,g.plotY]:d.getPointSpline?n=d.getPointSpline(a,g,j):f?(n=f===1?["L",n.plotX,m]:f===2?["L",(n.plotX+l)/2,n.plotY,"L",(n.plotX+l)/2,m]:["L",l,n.plotY],n.push("L",l,m)):n=["L",l,m],h.push.apply(h,n),i=!1)});return d.graphPath=
h},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=(this.gappedPath||this.getGraphPath).call(this),g=this.fillGraph&&this.color||"none";p(this.zones,function(d,e){c.push(["zoneGraph"+e,d.color||a.color,d.dashStyle||b.dashStyle])});p(c,function(c,i){var k=c[0],j=a[k];if(j)j.animate({d:f});else if((d||g)&&f.length)j={stroke:c[1],"stroke-width":d,fill:g,zIndex:1},c[2]?j.dashstyle=c[2]:e&&(j["stroke-linecap"]=j["stroke-linejoin"]=
"round"),a[k]=a.chart.renderer.path(f).attr(j).add(a.group).shadow(i<2&&b.shadow)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,k=this.area,j=t(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+"Axis"],m,n=l.reversed,q=b.inverted,z=l.horiz,s,r,w,v=!1;if(d.length&&(i||k)&&l.min!==y)i&&i.hide(),k&&k.hide(),m=l.getExtremes(),p(d,function(d,p){e=n?z?b.plotWidth:0:z?0:l.toPixels(m.min);e=F(t(o(f,e),0),j);f=F(t(B(l.toPixels(o(d.value,
m.max),!0)),0),j);v&&(e=f=l.toPixels(m.max));s=Math.abs(e-f);r=F(e,f);w=t(e,f);if(l.isXAxis){if(h={x:q?w:r,y:0,width:s,height:j},!z)h.x=b.plotHeight-h.x}else if(h={x:0,y:q?w:r,width:j,height:s},z)h.y=b.plotWidth-h.y;b.inverted&&c.isVML&&(h=l.isXAxis?{x:0,y:n?r:w,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[p]?g[p].animate(h):(g[p]=c.clipRect(h),i&&a["zoneGraph"+p].clip(g[p]),k&&a["zoneArea"+p].clip(g[p]));v=d.value>m.max}),this.clips=
g},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};p(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)N(c,"resize",a),N(b,"destroy",function(){X(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({zIndex:d||0.1}).add(e),f.addClass("highcharts-series-"+this.index));f.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=
this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&$a(d.animation).duration,f=a.visible?"inherit":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:
!1;a.drawGraph&&(a.drawGraph(),a.applyZones());p(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)a.animationTimeout=Pa(function(){a.afterAnimate()},e);a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,
d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:o(d&&d.left,a.plotLeft),translateY:o(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,
e,f){var g,h;if(h=c&&c.length)return g=b.kdAxisArray[e%f],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),e+1,f),right:a(c.slice(h+1),e+1,f)}}var b=this,c=b.kdDimensions;delete b.kdTree;Pa(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,k,j){var l=b.point,m=d.kdAxisArray[k%j],n,q,o=l;q=r(a[e])&&r(l[e])?Math.pow(a[e]-l[e],2):null;n=r(a[f])&&r(l[f])?Math.pow(a[f]-l[f],2):null;
n=(q||0)+(n||0);l.dist=r(n)?Math.sqrt(n):Number.MAX_VALUE;l.distX=r(q)?Math.sqrt(q):Number.MAX_VALUE;m=a[m]-l[m];n=m<0?"left":"right";q=m<0?"right":"left";b[n]&&(n=c(a,b[n],k+1,j),o=n[g]<o[g]?n:l);b[q]&&Math.sqrt(m*m)<o[g]&&(a=c(a,b[q],k+1,j),o=a[g]<o[g]?a:o);return o}var d=this,e=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Jb.prototype={destroy:function(){Ra(this,this.axis)},
render:function(a){var b=this.options,c=b.format,c=c?Ka(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Q(g-c),h=d.xAxis[0].translate(this.x)+
a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};gb.prototype.getStacks=function(){var a=this;p(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});p(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+o(b.options.stack,"")})};ha.prototype.buildStacks=
function(){var a=this.series,b,c=o(this.options.reversedStacks,!0),d=a.length,e;if(!this.isXAxis){this.usePercentage=!1;for(e=d;e--;)a[c?e:d-e-1].setStackedPoints();for(e=d;e--;)b=a[c?e:d-e-1],b.setStackCliffs&&b.setStackCliffs();if(this.usePercentage)for(e=0;e<d;e++)a[e].setPercentStacks()}};ha.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,
a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};ha.prototype.resetStacks=function(){var a=this.stacks,b,c;if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].touched<this.stacksTouched?(a[b][c].destroy(),delete a[b][c]):(a[b][c].total=null,a[b][c].cum=0)};ha.prototype.cleanStacks=function(){var a,b,c;if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}};R.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==
!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.startFromThreshold?f:0,h=e.stack,e=e.stacking,i=this.stackKey,k="-"+i,j=this.negStacks,l=this.yAxis,m=l.stacks,n=l.oldStacks,q,p,s,r,w,v,u;l.stacksTouched+=1;for(w=0;w<d;w++){v=a[w];u=b[w];q=this.getStackIndicator(q,v,this.index);r=q.key;s=(p=j&&u<(g?0:f))?k:i;m[s]||(m[s]={});if(!m[s][v])n[s]&&n[s][v]?(m[s][v]=n[s][v],m[s][v].total=null):m[s][v]=new Jb(l,
l.options.stackLabels,p,v,h);s=m[s][v];if(u!==null)s.points[r]=s.points[this.index]=[o(s.cum,g)],s.touched=l.stacksTouched,q.index>0&&this.singleStacks===!1&&(s.points[r][0]=s.points[this.index+","+v+",0"][0]);e==="percent"?(p=p?i:k,j&&m[p]&&m[p][v]?(p=m[p][v],s.total=p.total=t(p.total,s.total)+Q(u)||0):s.total=ca(s.total+(Q(u)||0))):s.total=ca(s.total+(u||0));s.cum=o(s.cum,g)+(u||0);if(u!==null)s.points[r].push(s.cum),c[w]=s.cum}if(e==="percent")l.usePercentage=!0;this.stackedYData=c;l.oldStacks=
{}}};R.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData,e;p([b,"-"+b],function(b){var f;for(var g=d.length,h,i;g--;)if(h=d[g],e=a.getStackIndicator(e,h,a.index),f=(i=c[b]&&c[b][h])&&i.points[e.key],h=f)i=i.total?100/i.total:0,h[0]=ca(h[0]*i),h[1]=ca(h[1]*i),a.stackedYData[g]=h[1]})};R.prototype.getStackIndicator=function(a,b,c){!r(a)||a.x!==b?a={x:b,index:0}:a.index++;a.key=[c,b,a.index].join(",");return a};u(gb.prototype,{addSeries:function(a,b,c){var d,
e=this;a&&(b=o(b,!0),I(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options,a=E(a,{index:this[e].length,isX:b});new ha(this,a);f[e]=ta(f[e]||{});f[e].push(a);o(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&M(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=
d=ba(Ma,{className:"highcharts-loading"},u(e.style,{zIndex:10,display:"none"}),b.container),b.loadingSpan=ba("span",null,e.labelStyle,d),N(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)M(d,{opacity:0,display:""}),Wa(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&Wa(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){M(b,{display:"none"})}});this.loadingShown=
!1}});u(Ja.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(f.y===null&&h)f.graphic=h.destroy();if(Z(a)&&!Ea(a))f.redraw=function(){if(h&&h.element&&a&&a.marker&&a.marker.symbol)f.graphic=h.destroy();if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);if(l&&f.name)l[f.x]=f.name;j.data[i]=Z(j.data[i])&&!Ea(j.data[i])?f.options:a;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)k.isDirtyBox=!0;if(j.legendType===
"point")k.isDirtyLegend=!0;b&&k.redraw(c)}var f=this,g=f.series,h=f.graphic,i,k=g.chart,j=g.options,l=g.xAxis&&g.xAxis.names,b=o(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(sa(this,this.series.data),a,b)}});u(R.prototype,{addPoint:function(a,b,c,d){var e=this,f=e.options,g=e.data,h=e.graph,i=e.area,k=e.chart,j=e.xAxis&&e.xAxis.names,l=h&&h.shift||0,m=["graph","area"],h=f.data,n,q=e.xData;Ta(d,k);if(c){for(d=e.zones.length;d--;)m.push("zoneGraph"+
d,"zoneArea"+d);p(m,function(a){if(e[a])e[a].shift=l+(f.step?2:1)})}if(i)i.isArea=!0;b=o(b,!0);i={series:e};e.pointClass.prototype.applyOptions.apply(i,[a]);m=i.x;d=q.length;if(e.requireSorting&&m<q[d-1])for(n=!0;d&&q[d-1]>m;)d--;e.updateParallelArrays(i,"splice",d,0,0);e.updateParallelArrays(i,d);if(j&&i.name)j[m]=i.name;h.splice(d,0,a);n&&(e.data.splice(d,0,null),e.processData());f.legendType==="point"&&e.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),e.updateParallelArrays(i,
"shift"),h.shift()));e.isDirty=!0;e.isDirtyData=!0;b&&(e.getAttribs(),k.redraw())},removePoint:function(a,b,c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){g&&g.length===e.length&&g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};Ta(c,h);b=o(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b){var c=this,d=c.chart;I(c,"remove",null,function(){c.destroy();
d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();o(a,!0)&&d.redraw(b)})},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=L[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;p(h,function(a){h[a]=c[a];delete c[a]});a=E(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)this[i]=y;u(this,L[a.type||f].prototype);p(h,function(a){c[a]=h[a]});this.init(d,
a);d.linkSeries();o(b,!0)&&d.redraw(!1)}});u(ha.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=E(this.userOptions,a);this.destroy(!0);this._addedPlotLB=this.chart._labelPanes=y;this.init(c,u(a,{events:y}));c.isDirtyBox=!0;o(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);pa(b.axes,this);pa(b[c],this);b.options[c].splice(this.options.index,1);p(b[c],function(a,b){a.options.index=
b});this.destroy();b.isDirtyBox=!0;o(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});var wa=qa(R);L.line=wa;ea.area=E(ga,{softThreshold:!1,threshold:0});var oa=qa(R,{type:"area",singleStacks:!1,getStackPoints:function(){var a=[],b=[],c=this.xAxis,d=this.yAxis,e=d.stacks[this.stackKey],f={},g=this.points,h=this.index,i=d.series,k=i.length,j,l=o(d.options.reversedStacks,!0)?1:-1,m,n;if(this.options.stacking){for(m=0;m<
g.length;m++)f[g[m].x]=g[m];for(n in e)e[n].total!==null&&b.push(n);b.sort(function(a,b){return a-b});j=Ca(i,function(){return this.visible});p(b,function(g,i){var n=0,o,r;if(f[g]&&!f[g].isNull)a.push(f[g]),p([-1,1],function(a){var c=a===1?"rightNull":"leftNull",d=0,n=e[b[i+a]];if(n)for(m=h;m>=0&&m<k;)o=n.points[m],o||(m===h?f[g][c]=!0:j[m]&&(r=e[g].points[m])&&(d-=r[1]-r[0])),m+=l;f[g][a===1?"rightCliff":"leftCliff"]=d});else{for(m=h;m>=0&&m<k;){if(o=e[g].points[m]){n=o[1];break}m+=l}n=d.toPixels(n,
!0);a.push({isNull:!0,plotX:c.toPixels(g,!0),plotY:n,yBottom:n})}})}return a},getGraphPath:function(a){var b=R.prototype.getGraphPath,c=this.options,d=c.stacking,e=this.yAxis,f,g,h=[],i=[],k=this.index,j,l=e.stacks[this.stackKey],m=c.threshold,n=e.getThreshold(c.threshold),q,c=c.connectNulls||d==="percent",p=function(b,c,f){var g=a[b],b=d&&l[g.x].points[k],q=g[f+"Null"]||0,f=g[f+"Cliff"]||0,o,p,g=!0;f||q?(o=(q?b[0]:b[1])+f,p=b[0]+f,g=!!q):!d&&a[c]&&a[c].isNull&&(o=p=m);o!==void 0&&(i.push({plotX:j,
plotY:o===null?n:e.getThreshold(o),isNull:g}),h.push({plotX:j,plotY:p===null?n:e.getThreshold(p)}))},a=a||this.points;d&&(a=this.getStackPoints());for(f=0;f<a.length;f++)if(g=a[f].isNull,j=o(a[f].rectPlotX,a[f].plotX),q=o(a[f].yBottom,n),!g||c){c||p(f,f-1,"left");if(!g||d||!c)i.push(a[f]),h.push({x:f,plotX:j,plotY:q});c||p(f,f+1,"right")}f=b.call(this,i,!0,!0);h.reversed=!0;g=b.call(this,h,!0,!0);g.length&&(g[0]="L");f=f.concat(g);b=b.call(this,i,!1,c);this.areaPath=f;return b},drawGraph:function(){this.areaPath=
[];R.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];p(this.zones,function(b,f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||c.fillColor])});p(d,function(d){var f=d[0],g=a[f];g?g.animate({d:b}):(g={fill:d[2]||d[1],zIndex:0},d[2]||(g["fill-opacity"]=o(c.fillOpacity,0.75)),a[f]=a.chart.renderer.path(b).attr(g).add(a.group))})},drawLegendSymbol:K.drawRectangle});L.area=oa;ea.spline=E(ga);wa=qa(R,{type:"spline",getPointSpline:function(a,
b,c){var d=b.plotX,e=b.plotY,f=a[c-1],c=a[c+1],g,h,i,k;if(f&&!f.isNull&&c&&!c.isNull){a=f.plotY;i=c.plotX;var c=c.plotY,j=0;g=(1.5*d+f.plotX)/2.5;h=(1.5*e+a)/2.5;i=(1.5*d+i)/2.5;k=(1.5*e+c)/2.5;i!==g&&(j=(k-h)*(i-d)/(i-g)+e-k);h+=j;k+=j;h>a&&h>e?(h=t(a,e),k=2*e-h):h<a&&h<e&&(h=F(a,e),k=2*e-h);k>c&&k>e?(k=t(c,e),h=2*e-k):k<c&&k<e&&(k=F(c,e),h=2*e-k);b.rightContX=i;b.rightContY=k}b=["C",o(f.rightContX,f.plotX),o(f.rightContY,f.plotY),o(g,d),o(h,e),d,e];f.rightContX=f.rightContY=null;return b}});L.spline=
wa;ea.areaspline=E(ea.area);oa=oa.prototype;wa=qa(wa,{type:"areaspline",getStackPoints:oa.getStackPoints,getGraphPath:oa.getGraphPath,setStackCliffs:oa.setStackCliffs,drawGraph:oa.drawGraph,drawLegendSymbol:K.drawRectangle});L.areaspline=wa;ea.column=E(ga,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,
verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0});wa=qa(R,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){R.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&p(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=
a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h=0;b.grouping===!1?h=1:p(a.chart.series,function(b){var c=b.options,e=b.yAxis,i;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===y&&(g[f]=h++),i=g[f]):c.grouping!==!1&&(i=h++),b.columnIndex=i});var i=F(Q(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),k=i*b.groupPadding,j=(i-2*k)/h,b=F(b.maxPointWidth||c.len,o(b.pointWidth,j*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(j-
b)/2+(k+((a.columnIndex||0)+(e?1:0))*j-i/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,b,c,d){var e=this.chart,f=this.borderWidth,g=-(f%2?0.5:0),f=f%2?0.5:1;e.inverted&&e.renderer.isVML&&(f+=1);c=Math.round(a+c)+g;a=Math.round(a)+g;c-=a;d=Math.round(b+d)+f;g=Q(b)<=0.5&&d>0.5;b=Math.round(b)+f;d-=b;g&&d&&(b-=1,d+=1);return{x:a,y:b,width:c,height:d}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=o(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,f=
a.translatedThreshold=e.getThreshold(c.threshold),g=o(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,k=a.barW=t(i,1+2*d),j=a.pointXOffset=h.offset;b.inverted&&(f-=0.5);c.pointPadding&&(k=ua(k));R.prototype.translate.apply(a);p(a.points,function(c){var d=F(o(c.yBottom,f),9E4),h=999+Q(d),h=F(t(-h,c.plotY),e.len+h),q=c.plotX+j,p=k,s=F(h,d),r,w=t(h,d)-s;Q(w)<g&&g&&(w=g,r=!e.reversed&&!c.negative||e.reversed&&c.negative,s=Q(s-f)>g?d-g:f-(r?g:0));c.barX=q;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len+
e.pos-b.plotLeft-h,a.xAxis.len-q-p/2,w]:[q+p/2,h+e.pos-b.plotTop,w];c.shapeType="rect";c.shapeArgs=a.crispCol(q,s,p,w)})},getSymbol:Aa,drawLegendSymbol:K.drawRectangle,drawGraph:Aa,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;p(a.points,function(h){var i=h.graphic,k;if(J(h.plotY)&&h.y!==null)f=h.shapeArgs,k=r(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],i?(Oa(i),i.attr(k).attr(g)[b.pointCount<
e?"animate":"attr"](E(f))):h.graphic=d[h.shapeType](f).attr(k).attr(g).add(h.group||a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(i)h.graphic=i.destroy()})},animate:function(a){var b=this,c=this.yAxis,d=b.options,e=this.chart.inverted,f={};if(fa)a?(f.scaleY=0.001,a=F(c.pos+c.len,t(c.pos,c.toPixels(d.threshold))),e?f.translateX=a-c.len:f.translateY=a,b.group.attr(f)):(f[e?"translateX":"translateY"]=c.pos,b.group.animate(f,u($a(b.options.animation),{step:function(a,c){b.group.attr({scaleY:t(0.001,
c.pos)})}})),b.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&p(b.series,function(b){if(b.type===a.type)b.isDirty=!0});R.prototype.remove.apply(a,arguments)}});L.column=wa;ea.bar=E(ea.column);oa=qa(wa,{type:"bar",inverted:!0});L.bar=oa;ea.scatter=E(ga,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});
oa=qa(R,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&R.prototype.drawGraph.call(this)}});L.scatter=oa;ea.pie=E(ga,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.y===null?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,
size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});ga={type:"pie",isCartesian:!1,pointClass:qa(Ja,{init:function(){Ja.prototype.init.apply(this,arguments);var a=this,b;a.name=o(a.name,"Slice");b=function(b){a.slice(b.type==="select")};N(a,"select",b);N(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint,b=o(b,f);if(a!==c.visible){c.visible=c.options.visible=
a=a===y?!c.visible:a;d.options.data[sa(c,d.data)]=c.options;p(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)});c.legendItem&&e.legend.colorizeItem(c,a);!a&&c.state==="hover"&&c.setState("");if(f)d.isDirty=!0;b&&e.redraw()}},slice:function(a,b,c){var d=this.series;Ta(c,d.chart);o(b,!0);this.sliced=this.options.sliced=a=r(a)?a:!this.sliced;d.options.data[sa(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);
this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},animate:function(a){var b=this,
c=b.points,d=b.startAngleRad;if(!a)p(c,function(a){var c=a.graphic,g=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},updateTotals:function(){var a,b=0,c=this.points,d=c.length,e,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){R.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,k=this.startAngleRad=ra/180*(i-90),i=(this.endAngleRad=ra/180*(o(c.endAngle,i+360)-90))-k,j=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,m,n=j.length,q;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=Y.asin(F((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*W(h)*(a[2]/2+l)};for(m=0;m<n;m++){q=j[m];f=k+b*i;if(!c||q.visible)b+=q.percentage/
100;g=k+b*i;q.shapeType="arc";q.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:B(f*1E3)/1E3,end:B(g*1E3)/1E3};h=(g+f)/2;h>1.5*ra?h-=2*ra:h<-ra/2&&(h+=2*ra);q.slicedTranslation={translateX:B(W(h)*d),translateY:B(da(h)*d)};f=W(h)*a[2]/2;g=da(h)*a[2]/2;q.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];q.half=h<-ra/2||h>ra/2?1:0;q.angle=h;e=F(e,l/2);q.labelPos=[a[0]+f+W(h)*l,a[1]+g+da(h)*l,a[0]+f+W(h)*e,a[1]+g+da(h)*e,a[0]+f,a[1]+g,l<0?"center":q.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=
this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g,h,i;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);p(a.points,function(k){if(k.y!==null){d=k.graphic;h=k.shapeArgs;f=k.shadowGroup;g=k.pointAttr[k.selected?"select":""];if(!g.stroke)g.stroke=g.fill;if(e&&!f)f=k.shadowGroup=b.g("shadow").add(a.shadowGroup);c=k.sliced?k.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);if(d)d.setRadialReference(a.center).attr(g).animate(u(h,c));else{i={"stroke-linejoin":"round"};if(!k.visible)i.visibility=
"hidden";k.graphic=d=b[k.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e,f)}}})},searchPoint:Aa,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:K.drawRectangle,getCenter:Bb.getCenter,getSymbol:Aa};ga=qa(R,ga);L.pie=ga;R.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,k,j=o(d.defer,!0),l=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&
a.dlProcessOptions(d),k=a.plotGroup("dataLabelsGroup","data-labels",j&&!h?"hidden":"visible",d.zIndex||6),j&&(k.attr({opacity:+h}),h||N(a,"afterAnimate",function(){a.visible&&k.show();k[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,p(e,function(e){var h,j=e.dataLabel,p,s,t=e.connector,w=!0,v,x={};f=e.dlOptions||e.options&&e.options.dataLabels;h=o(f&&f.enabled,g.enabled)&&e.y!==null;if(j&&!h)e.dataLabel=j.destroy();else if(h){d=E(g,f);v=d.style;h=d.rotation;p=e.getLabelConfig();
i=d.format?Ka(d.format,p):d.formatter.call(p,d);v.color=o(d.color,v.color,a.color,"black");if(j)if(r(i))j.attr({text:i}),w=!1;else{if(e.dataLabel=j=j.destroy(),t)e.connector=t.destroy()}else if(r(i)){j={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};if(v.color==="contrast")x.color=d.inside||d.distance<0||b.stacking?l.getContrast(e.color||a.color):"#000000";if(c)x.cursor=c;for(s in j)j[s]===y&&delete j[s];j=e.dataLabel=
l[h?"text":"label"](i,0,-9999,d.shape,null,null,d.useHTML).attr(j).css(u(v,x)).add(k).shadow(d.shadow)}j&&a.alignDataLabel(e,j,d,null,w)}})};R.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=o(a.plotX,-9999),i=o(a.plotY,-9999),k=b.getBBox(),j=f.renderer.fontMetrics(c.style.fontSize).b,l=c.rotation,m=c.align,n=this.visible&&(a.series.forceDL||f.isInsidePlot(h,B(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)),q=o(c.overflow,"justify")==="justify";if(n)d=u({x:g?f.plotWidth-
i:h,y:B(g?f.plotHeight-h:i),width:0,height:0},d),u(c,{width:k.width,height:k.height}),l?(q=!1,g=f.renderer.rotCorr(j,l),g={x:d.x+c.x+d.width/2+g.x,y:d.y+c.y+{top:0,middle:0.5,bottom:1}[c.verticalAlign]*d.height},b[e?"attr":"animate"](g).attr({align:m}),h=(l+720)%360,h=h>180&&h<360,m==="left"?g.y-=h?k.height:0:m==="center"?(g.x-=k.width/2,g.y-=k.height/2):m==="right"&&(g.x-=k.width,g.y-=h?0:k.height)):(b.align(c,null,d),g=b.alignAttr),q?this.justifyDataLabel(b,c,g,k,d,e):o(c.crop,!0)&&(n=f.isInsidePlot(g.x,
g.y)&&f.isInsidePlot(g.x+k.width,g.y+k.height)),c.shape&&!l&&b.attr({anchorX:a.plotX,anchorY:a.plotY});if(!n)Oa(b),b.attr({y:-9999}),b.placed=!1};R.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,k,j,l=a.box?0:a.padding||0;k=c.x+l;if(k<0)h==="right"?b.align="left":b.x=-k,j=!0;k=c.x+d.width-l;if(k>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-k,j=!0;k=c.y+l;if(k<0)i==="bottom"?b.verticalAlign="top":b.y=-k,j=!0;k=c.y+d.height-l;if(k>g.plotHeight)i===
"top"?b.verticalAlign="bottom":b.y=g.plotHeight-k,j=!0;if(j)a.placed=!f,a.align(b,null,e)};if(L.pie)L.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=o(e.connectorPadding,10),g=o(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,k,j,l=o(e.softConnector,!0),m=e.distance,n=a.center,q=n[2]/2,r=n[1],s=m>0,u,w,v,x=[[],[]],y,A,D,E,C,H=[0,0,0,0],M=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){R.prototype.drawDataLabels.apply(a);
p(b,function(a){if(a.dataLabel&&a.visible)x[a.half].push(a),a.dataLabel._pos=null});for(E=2;E--;){var I=[],N=[],J=x[E],L=J.length,K;if(L){a.sortByAngle(J,E-0.5);for(C=b=0;!b&&J[C];)b=J[C]&&J[C].dataLabel&&(J[C].dataLabel.getBBox().height||21),C++;if(m>0){w=F(r+q+m,d.plotHeight);for(C=t(0,r-q-m);C<=w;C+=b)I.push(C);w=I.length;if(L>w){c=[].concat(J);c.sort(M);for(C=L;C--;)c[C].rank=C;for(C=L;C--;)J[C].rank>=w&&J.splice(C,1);L=J.length}for(C=0;C<L;C++){c=J[C];v=c.labelPos;c=9999;var P,O;for(O=0;O<w;O++)P=
Q(I[O]-v[1]),P<c&&(c=P,K=O);if(K<C&&I[C]!==null)K=C;else for(w<L-C+K&&I[C]!==null&&(K=w-L+C);I[K]===null;)K++;N.push({i:K,y:I[K]});I[K]=null}N.sort(M)}for(C=0;C<L;C++){c=J[C];v=c.labelPos;u=c.dataLabel;D=c.visible===!1?"hidden":"inherit";c=v[1];if(m>0){if(w=N.pop(),K=w.i,A=w.y,c>A&&I[K+1]!==null||c<A&&I[K-1]!==null)A=F(t(0,c),d.plotHeight)}else A=c;y=e.justify?n[0]+(E?-1:1)*(q+m):a.getX(A===r-q-m||A===r+q+m?c:A,E);u._attr={visibility:D,align:v[6]};u._pos={x:y+e.x+({left:f,right:-f}[v[6]]||0),y:A+
e.y-10};u.connX=y;u.connY=A;if(this.options.size===null)w=u.width,y-w<f?H[3]=t(B(w-y+f),H[3]):y+w>h-f&&(H[1]=t(B(y+w-h+f),H[1])),A-b/2<0?H[0]=t(B(-A+b/2),H[0]):A+b/2>i&&(H[2]=t(B(A+b/2-i),H[2]))}}}if(Ga(H)===0||this.verifyDataLabelOverflow(H))this.placeDataLabels(),s&&g&&p(this.points,function(b){k=b.connector;v=b.labelPos;if((u=b.dataLabel)&&u._pos&&b.visible)D=u._attr.visibility,y=u.connX,A=u.connY,j=l?["M",y+(v[6]==="left"?5:-5),A,"C",y,A,2*v[2]-v[4],2*v[3]-v[5],v[2],v[3],"L",v[4],v[5]]:["M",y+
(v[6]==="left"?5:-5),A,"L",v[2],v[3],"L",v[4],v[5]],k?(k.animate({d:j}),k.attr("visibility",D)):b.connector=k=a.chart.renderer.path(j).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:D}).add(a.dataLabelsGroup);else if(k)b.connector=k.destroy()})}},L.pie.prototype.placeDataLabels=function(){p(this.points,function(a){var b=a.dataLabel;if(b&&a.visible)(a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999})})},L.pie.prototype.alignDataLabel=
Aa,L.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f=e,g;d[0]!==null?f=t(b[2]-t(a[1],a[3]),e):(f=t(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2);d[1]!==null?f=t(F(f,b[2]-t(a[0],a[2])),e):(f=t(F(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2);f<b[2]?(b[2]=f,b[3]=Math.min(/%$/.test(c.innerSize||0)?f*parseFloat(c.innerSize||0)/100:parseFloat(c.innerSize||0),f),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):g=!0;return g};if(L.column)L.column.prototype.alignDataLabel=
function(a,b,c,d,e){var f=this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=o(a.below,a.plotY>o(this.translatedThreshold,g.yAxis.len)),k=o(c.inside,!!this.options.stacking);if(h){d=E(h);if(d.y<0)d.height+=d.y,d.y=0;h=d.y+d.height-g.yAxis.len;h>0&&(d.height-=h);f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width});if(!k)f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0)}c.align=o(c.align,!f||k?"center":i?"right":"left");c.verticalAlign=o(c.verticalAlign,
f||k?"middle":i?"top":"bottom");R.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=a.Chart,c=a.each,d=a.pick,e=a.addEvent;b.prototype.callbacks.push(function(a){function b(){var e=[];c(a.series,function(a){var b=a.options.dataLabels,f=a.dataLabelCollections||["dataLabel"];(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(f,function(b){c(a.points,function(a){if(a[b])a[b].labelrank=d(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a[b])})})});a.hideOverlappingLabels(e)}
b();e(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,d,e,k,j,l,m,n,q,o;for(e=0;e<b;e++)if(d=a[e])d.oldOpacity=d.opacity,d.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(e=0;e<b;e++){k=a[e];for(d=e+1;d<b;++d)if(j=a[d],k&&j&&k.placed&&j.placed&&k.newOpacity!==0&&j.newOpacity!==0&&(l=k.alignAttr,m=j.alignAttr,n=k.parentGroup,q=j.parentGroup,o=2*(k.box?0:k.padding),l=!(m.x+q.translateX>l.x+n.translateX+(k.width-o)||m.x+q.translateX+(j.width-
o)<l.x+n.translateX||m.y+q.translateY>l.y+n.translateY+(k.height-o)||m.y+q.translateY+(j.height-o)<l.y+n.translateY)))(k.labelrank<j.labelrank?k:j).newOpacity=0}c(a,function(a){var b,c;if(a){c=a.newOpacity;if(a.oldOpacity!==c&&a.placed)c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b);a.isOld=!0}})}})(x);ga=x.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=
a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==y&&d!==b.hoverPoint)d.onMouseOver(a)};p(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)p(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),db))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:
a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,k=a.tracker,j=b.cursor,l=j&&{cursor:j},m=function(){if(f.hoverSeries!==a)a.onMouseOver()},n="rgba(192,192,192,"+(fa?1.0E-4:0.002)+")";if(e&&!c)for(j=e+1;j--;)d[j]==="M"&&d.splice(j+1,0,d[j+1]-i,d[j+2],"L"),(j&&d[j]==="M"||j===e)&&d.splice(j,0,"L",d[j-2]+i,d[j-1]);k?k.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:n,fill:c?n:"none","stroke-width":b.lineWidth+
(c?0:2*i),zIndex:2}).add(a.group),p([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if(db)a.on("touchstart",m)}))}};if(L.column)wa.prototype.drawTracker=ga.drawTrackerPoint;if(L.pie)L.pie.prototype.drawTracker=ga.drawTrackerPoint;if(L.scatter)oa.prototype.drawTracker=ga.drawTrackerPoint;u(ob.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");
b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):I(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=ba("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);N(a.checkbox,"click",function(b){I(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});U.legend.itemStyle.cursor="pointer";u(gb.prototype,{showResetZoom:function(){var a=this,b=U.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;I(a,"selection",{resetSelection:!0},
function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?p(this.axes,function(a){b=a.zoom()}):p(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&Z(e))this.resetZoomButton=e.destroy();b&&this.redraw(o(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,
e;d&&p(d,function(a){a.setState()});p(b==="xy"?[1,0]:[1],function(b){var b=c[b?"xAxis":"yAxis"][0],d=b.horiz,h=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",i=c[d],k=(b.pointRange||0)/2,j=b.getExtremes(),l=b.toValue(i-h,!0)+k,k=b.toValue(i+b.len-h,!0)-k,i=i>h;if(b.series.length&&(i||l>F(j.dataMin,j.min))&&(!i||k<t(j.dataMax,j.max)))b.setExtremes(l,k,!1,!1,{trigger:"pan"}),e=!0;c[d]=h});e&&c.redraw(!1);M(c.container,{cursor:"move"})}});u(Ja.prototype,{select:function(a,b){var c=this,d=c.series,
e=d.chart,a=o(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[sa(c,d.data)]=c.options;c.setState(a&&"select");b||p(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[sa(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;if(d.hoverSeries!==c)c.onMouseOver();if(f&&f!==this)f.onMouseOut();
if(this.series&&(this.firePointEvent("mouseOver"),e&&(!e.shared||c.noSharedTooltip)&&e.refresh(this,a),this.setState("hover"),!b))d.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||sa(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=E(this.series.options.point,this.options).events,b;this.events=a;for(b in a)N(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=
V(this.plotX),d=this.plotY,e=this.series,f=e.options.states,g=ea[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],k=i&&i.enabled===!1,j=e.stateMarkerGraphic,l=this.marker||{},m=e.chart,n=e.halo,o,a=a||"";o=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(k||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&o.r,this.graphic.attr(E(o,g?{x:c-g,y:d-
g,width:2*g,height:2*g}:{})),j&&j.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,j&&j.currentSymbol!==l&&(j=j.destroy()),j)j[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=j=m.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(o).add(e.markerGroup),j.currentSymbol=l;if(j)j[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"](),j.element.point=this}if((c=f[a]&&f[a].halo)&&c.size){if(!n)e.halo=n=m.renderer.path().add(m.seriesGroup);n.attr(u({fill:this.color||e.color,"fill-opacity":c.opacity,
zIndex:-1},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else n&&n.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted,f=Math.floor(this.plotX);return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:f)-a,d.translateY+(e?b.xAxis.len-f:this.plotY)-a,a*2,a*2)}});u(R.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&I(this,"mouseOver");this.setState("hover");
a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&I(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState()},setState:function(a){var b=this.options,c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};
for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===y?!h:a)?"show":"hide";p(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&p(d.series,function(a){if(a.options.stacking&&
a.visible)a.isDirty=!0});p(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();I(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===y?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;I(this,a?"select":"unselect")},drawTracker:ga.drawTrackerGraph});u(x,{Color:ma,Point:Ja,Tick:Va,Renderer:cb,SVGElement:O,SVGRenderer:Da,arrayMin:La,arrayMax:Ga,charts:T,correctFloat:ca,dateFormat:Qa,error:aa,
format:Ka,pathAnim:void 0,getOptions:function(){return U},hasBidiBug:Pb,isTouchDevice:Lb,setOptions:function(a){U=E(!0,U,a);Eb();return U},addEvent:N,removeEvent:X,createElement:ba,discardElement:Sa,css:M,each:p,map:Ca,merge:E,splat:ta,stableSort:hb,extendClass:qa,pInt:C,svg:fa,canvas:ka,vml:!fa&&!ka,product:"Highcharts",version:"4.2.5"});return x});

/*!
 DataTables 1.10.11
 ©2008-2015 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(D){return h(D,window,document)}):"object"===typeof exports?module.exports=function(D,I){D||(D=window);I||(I="undefined"!==typeof window?require("jquery"):require("jquery")(D));return h(I,D,D.document)}:h(jQuery,window,document)})(function(h,D,I,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function K(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),K(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&E(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&E(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&db(a)}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&K(m.models.oSearch,a[b])}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;b&&!h.isArray(b)&&(a.aDataSort=[b])}function gb(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,
width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function hb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&
(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:I.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);ja(a,d,h(b).data())}function ja(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=
(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),K(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),E(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),E(b,c,"aDataSort"));var g=b.mData,j=Q(g),i=b.mRender?Q(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&
(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return R(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):
!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function U(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ka(a);u(a,null,"column-sizing",[a])}function Z(a,b){var c=la(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function $(a,b){var c=la(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}
function aa(a){return h(F(a.aoColumns,"nTh")).filter(":visible").length}function la(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,t;e=0;for(f=b.length;e<f;e++)if(l=b[e],t=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){t[i]===k&&(t[i]=B(a,i,e,"type"));q=d[g](t[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=
q;break}}l.sType||(l.sType="string")}}function ib(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}
function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,
i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(L(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function jb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||
[""],function(a){return a.replace(/\\./g,".")})}function Q(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=Q(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);for(var i=0,n=j.length;i<n;i++){f=j[i].match(ba);g=
j[i].match(V);if(f){j[i]=j[i].replace(ba,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function R(a){if(h.isPlainObject(a))return R(a._);if(null===a)return function(){};if("function"===
typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ba);j=e[i].match(V);if(g){e[i]=e[i].replace(ba,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,""),a=a[e[i]](d));if(null===a[e[i]]||
a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(ba,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return F(a.aoData,"_aData")}function na(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function oa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function ca(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],t=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
-1!==c&&(c=a.substring(c+1),R(a)(d,b.getAttribute(c)))}},S=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(R(j.mData._)(d,n),t(j.mData.sort,a),t(j.mData.type,a),t(j.mData.filter,a)):q?(j._setter||(j._setter=R(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)S(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)S(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&R(a.rowId)(d,b);return{data:d,cells:e}}
function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||I.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:I.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}u(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?pa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function kb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);i&&da(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function ea(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function O(a){var b=u(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
-1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!lb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var t=d[c%e];q._sRowStripe!=t&&(h(l).removeClass(q._sRowStripe).addClass(t),q._sRowStripe=t)}u(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:aa(a),"class":a.oClasses.sRowEmpty}).html(c))[0];u(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,i]);u(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));u(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;
c.bSort&&mb(a);d?fa(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=!1}function nb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,t=0;t<f.length;t++){g=null;j=f[t];if("<"==j){i=h("<div/>")[0];
n=f[t+1];if("'"==n||'"'==n){l="";for(q=2;f[t+q]!=n;)l+=f[t+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;t+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=ob(a);else if("f"==j&&d.bFilter)g=pb(a);else if("r"==j&&d.bProcessing)g=qb(a);else if("t"==j)g=rb(a);else if("i"==j&&d.bInfo)g=sb(a);else if("p"==
j&&d.bPaginate)g=tb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function da(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,t;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;t=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:t},a[f+g].nTr=d}e=e.nextSibling}}}function qa(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],da(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ra(a,b,c){u(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){u(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&L(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=u(a,null,"xhr",
[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?L(a,0,"Invalid JSON response",1):4===b.readyState&&L(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;u(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
!0),ra(a,ub(a),function(b){vb(a,b)}),!1):!0}function ub(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,q=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var k=function(a,b){j.push({name:a,value:b})};k("sEcho",a.iDraw);k("iColumns",c);k("sColumns",F(b,"sName").join(","));k("iDisplayStart",g);k("iDisplayLength",i);var S={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
l=f[g],i="function"==typeof n.mData?"function":n.mData,S.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),k("mDataProp_"+g,i),d.bFilter&&(k("sSearch_"+g,l.sSearch),k("bRegex_"+g,l.bRegex),k("bSearchable_"+g,n.bSearchable)),d.bSort&&k("bSortable_"+g,n.bSortable);d.bFilter&&(k("sSearch",e.sSearch),k("bRegex",e.bRegex));d.bSort&&(h.each(q,function(a,b){S.order.push({column:b.col,dir:b.dir});k("iSortCol_"+a,b.col);k("sSortDir_"+
a,b.dir)}),k("iSortingCols",q.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:S:b?j:S}function vb(a,b){var c=sa(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}na(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||
ta(a,b);a.bAjaxDataGet=!0;C(a,!1)}function sa(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?Q(c)(b):b}function pb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
"":this.value;b!=e.sSearch&&(fa(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",g?ua(f,g):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==I.activeElement&&i.val(e.sSearch)}catch(d){}});
return b[0]}function fa(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);yb(a)}else f(b);a.bFiltered=!0;u(a,null,"search",[a])}function yb(a){for(var b=
m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function xb(a,b,c,d,e,f){if(""!==b)for(var g=a.aiDisplay,d=Qa(b,d,e,f),e=g.length-1;0<=e;e--)b=a.aoData[g[e]]._aFilterData[c],d.test(b)||g.splice(e,1)}function wb(a,b,c,d,e,f){var d=Qa(b,d,e,f),e=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;0!==m.ext.search.length&&(c=!0);g=zb(a);if(0>=b.length)a.aiDisplay=f.slice();
else{if(g||c||e.length>b.length||0!==b.indexOf(e)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=c;c--)d.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Qa(a,b,c,d){a=b?a:va(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function va(a){return a.replace(Zb,"\\$1")}function zb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=
m.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(wa.innerHTML=i,i=$b?wa.textContent:wa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Ab(a){return{search:a.sSearch,smart:a.bSmart,
regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,
d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Db(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Db(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,
c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ga(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);ea(a,a.aoHeader);ea(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=x(f.sWidth));u(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ra(a,[],function(c){var f=sa(a,c);for(b=0;b<f.length;b++)N(a,f[b]);
a.iInitDisplayStart=d;T(a);C(a,!1);ta(a,c)},a):(C(a,!1),ta(a))}else setTimeout(function(){ga(a)},200)}function ta(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&U(a);u(a,null,"plugin-init",[a,b]);u(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);u(a,null,"length",[a,c])}function ob(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),
g=0,j=f.length;g<j;g++)e[0][g]=new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).bind("change.DT",function(){Ra(a,h(this).val());O(a)});h(a.nTable).bind("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function tb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},
b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===
e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:L(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(u(a,null,"page",[a]),c&&O(a));return b}function qb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",
b?"block":"none");u(a,null,"processing",[a,b])}function rb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:x(d):"100%"}).append(h("<div/>",
{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:x(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:x(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],t=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(t.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=t;a.aoDrawCallback.push({fn:ka,sName:"scrolling"});return i[0]}function ka(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
j=a.nScrollBody,l=h(j),q=j.style,t=h(a.nScrollFoot).children("div"),m=t.children("table"),o=h(a.nTHead),G=h(a.nTable),p=G[0],r=p.style,u=a.nTFoot?h(a.nTFoot):null,Eb=a.oBrowser,Ua=Eb.bScrollOversize,s=F(a.aoColumns,"nTh"),P,v,w,y,z=[],A=[],B=[],C=[],D,E=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};v=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==v&&a.scrollBarVis!==k)a.scrollBarVis=v,U(a);else{a.scrollBarVis=v;G.children("thead, tfoot").remove();
u&&(w=u.clone().prependTo(G),P=u.find("tr"),w=w.find("tr"));y=o.clone().prependTo(G);o=o.find("tr");v=y.find("tr");y.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(qa(a,y),function(b,c){D=Z(a,b);c.style.width=a.aoColumns[D].sWidth});u&&J(function(a){a.style.width=""},w);f=G.outerWidth();if(""===c){r.width="100%";if(Ua&&(G.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=x(G.outerWidth()-b);f=G.outerWidth()}else""!==d&&(r.width=
x(d),f=G.outerWidth());J(E,v);J(function(a){B.push(a.innerHTML);z.push(x(h(a).css("width")))},v);J(function(a,b){if(h.inArray(a,s)!==-1)a.style.width=z[b]},o);h(v).height(0);u&&(J(E,w),J(function(a){C.push(a.innerHTML);A.push(x(h(a).css("width")))},w),J(function(a,b){a.style.width=A[b]},P),h(w).height(0));J(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+B[b]+"</div>";a.style.width=z[b]},v);u&&J(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
C[b]+"</div>";a.style.width=A[b]},w);if(G.outerWidth()<f){P=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(Ua&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=x(P-b);(""===c||""!==d)&&L(a,1,"Possible column misalignment",6)}else P="100%";q.width=x(P);g.width=x(P);u&&(a.nScrollFoot.style.width=x(P));!e&&Ua&&(q.height=x(p.offsetHeight+b));c=G.outerWidth();n[0].style.width=x(c);i.width=x(c);d=G.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
(Eb.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=x(c),t[0].style.width=x(c),t[0].style[e]=d?b+"px":"0px");G.children("colgroup").insertBefore(G.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function J(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=la(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,t=!1,m,o,p=a.oBrowser,d=p.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)o=c[i[m]],null!==o.sWidth&&(o.sWidth=Fb(o.sWidthOrig,k),t=!0);if(d||!t&&!f&&!e&&j==aa(a)&&j==n.length)for(m=0;m<j;m++)i=Z(a,m),null!==i&&(c[i].sWidth=x(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var r=h("<tr/>").appendTo(j.find("tbody"));
j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=qa(a,j.find("thead")[0]);for(m=0;m<i.length;m++)o=c[i[m]],n[m].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?x(o.sWidthOrig):"",o.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)t=i[m],o=c[t],h(Gb(a,t)).clone(!1).append(o.sContentPadding).appendTo(r);h("[name]",
j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=x(k-g);b.style.width=x(e);o.remove()}l&&(b.style.width=
x(l));if((l||f)&&!a._reszEvt)b=function(){h(D).bind("resize.DT-"+a.sInstance,ua(function(){U(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function ua(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}}function Fb(a,b){if(!a)return 0;var c=h("<div/>").css("width",x(a)).appendTo(b||I.body),d=c[0].offsetWidth;c.remove();return d}function Gb(a,b){var c=Hb(a,b);if(0>c)return null;var d=
a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Hb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(ac,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function x(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,
a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function mb(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Ib(a,
j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];
g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Va(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,
g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,F(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=
a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,d))})}function xa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(F(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(F(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Ib(a,
b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,$(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function ya(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),columns:h.map(a.aoColumns,
function(b,d){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[d])}})};u(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a){var b,c,d=a.aoColumns;if(a.oFeatures.bStateSave){var e=a.fnStateLoadCallback.call(a.oInstance,a);if(e&&e.time&&(b=u(a,"aoStateLoadParams","stateLoadParams",[a,e]),-1===h.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&e.time<+new Date-1E3*b)&&d.length===e.columns.length))){a.oLoadedState=h.extend(!0,{},e);
e.start!==k&&(a._iDisplayStart=e.start,a.iInitDisplayStart=e.start);e.length!==k&&(a._iDisplayLength=e.length);e.order!==k&&(a.aaSorting=[],h.each(e.order,function(b,c){a.aaSorting.push(c[0]>=d.length?[0,c[1]]:c)}));e.search!==k&&h.extend(a.oPreviousSearch,Bb(e.search));b=0;for(c=e.columns.length;b<c;b++){var f=e.columns[b];f.visible!==k&&(d[b].bVisible=f.visible);f.search!==k&&h.extend(a.aoPreSearchCols[b],Bb(f.search))}u(a,"aoStateLoaded","stateLoaded",[a,e])}}}function za(a){var b=m.settings,a=
h.inArray(a,F(b,"nTable"));return-1!==a?b[a]:null}function L(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)D.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&u(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function E(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?E(a,b,d[0],
d[1]):E(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Lb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Wa(a,b,c){h(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}
function u(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?
"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Aa(a,b){var c=[],c=Mb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function db(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Xa)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Xa)}},function(b,
c){v.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(v.type.search[b+a]=v.type.search.html)})}function Nb(a){return function(){var b=[za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m,v,r,p,s,Ya={},Ob=/[\r\n]/g,Ca=/<.*?>/g,bc=/^[\w\+\-]/,cc=/[\w\+\-]$/,Zb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Xa=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},
Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){Ya[b]||(Ya[b]=RegExp(va(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Ya[b],"."):a},Za=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Qb(a,b));c&&d&&(a=a.replace(Xa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:Za(a.replace(Ca,""),b,c)?!0:null},F=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<
f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ha=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Sb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},pa=function(a){var b=[],c,d,e=a.length,f,g=0;d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===
c)continue a;b.push(c);g++}return b},A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ba=/\[.*?\]$/,V=/\(\)$/,wa=h("<div>")[0],$b=wa.textContent!==k,ac=/<.*?>/g;m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new r(za(this[v.iApiIndex])):new r(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};
this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ka(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};
this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=
function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};
this.fnSettings=function(){return za(this[v.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=v.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=v.internal;for(var e in m.ext.internal)e&&(this[e]=
Nb(e));this.each(function(){var e={},e=1<d?Lb(e,a,!0):a,g=0,j,i=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())L(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);fb(l.column);K(l,l,!0);K(l.column,l.column,!0);K(l,h.extend(e,q.data()));var t=m.settings,g=0;for(j=t.length;g<j;g++){var p=t[g];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){g=e.bRetrieve!==k?e.bRetrieve:l.bRetrieve;if(c||g)return p.oInstance;
if(e.bDestroy!==k?e.bDestroy:l.bDestroy){p.oInstance.fnDestroy();break}else{L(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){t.splice(g,1);break}}if(null===i||""===i)this.id=i="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:i,sTableId:i});o.nTable=this;o.oApi=b.internal;o.oInit=e;t.push(o);o.oInstance=1===b.length?b:q.dataTable();eb(e);e.oLanguage&&Fa(e.oLanguage);e.aLengthMenu&&!e.iDisplayLength&&(e.iDisplayLength=
h.isArray(e.aLengthMenu[0])?e.aLengthMenu[0][0]:e.aLengthMenu[0]);e=Lb(h.extend(!0,{},l),e);E(o.oFeatures,e,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));E(o,e,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback",
"renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);E(o.oScroll,e,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);E(o.oLanguage,e,"fnInfoCallback");z(o,"aoDrawCallback",e.fnDrawCallback,"user");z(o,"aoServerParams",e.fnServerParams,"user");z(o,"aoStateSaveParams",e.fnStateSaveParams,"user");z(o,"aoStateLoadParams",
e.fnStateLoadParams,"user");z(o,"aoStateLoaded",e.fnStateLoaded,"user");z(o,"aoRowCallback",e.fnRowCallback,"user");z(o,"aoRowCreatedCallback",e.fnCreatedRow,"user");z(o,"aoHeaderCallback",e.fnHeaderCallback,"user");z(o,"aoFooterCallback",e.fnFooterCallback,"user");z(o,"aoInitComplete",e.fnInitComplete,"user");z(o,"aoPreDrawCallback",e.fnPreDrawCallback,"user");o.rowIdFn=Q(e.rowId);gb(o);i=o.oClasses;e.bJQueryUI?(h.extend(i,m.ext.oJUIClasses,e.oClasses),e.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom=
'<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&!o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(i,m.ext.classes,e.oClasses);q.addClass(i.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=e.iDisplayStart,o._iDisplayStart=e.iDisplayStart);null!==e.iDeferLoading&&(o.bDeferLoading=!0,g=h.isArray(e.iDeferLoading),o._iRecordsDisplay=g?e.iDeferLoading[0]:e.iDeferLoading,o._iRecordsTotal=g?e.iDeferLoading[1]:e.iDeferLoading);var r=o.oLanguage;h.extend(!0,
r,e.oLanguage);""!==r.sUrl&&(h.ajax({dataType:"json",url:r.sUrl,success:function(a){Fa(a);K(l.oLanguage,a);h.extend(true,r,a);ga(o)},error:function(){ga(o)}}),n=!0);null===e.asStripeClasses&&(o.asStripeClasses=[i.sStripeOdd,i.sStripeEven]);var g=o.asStripeClasses,v=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(g,function(a){return v.hasClass(a)}))&&(h("tbody tr",this).removeClass(g.join(" ")),o.asDestroyStripes=g.slice());t=[];g=this.getElementsByTagName("thead");0!==g.length&&(da(o.aoHeader,
g[0]),t=qa(o));if(null===e.aoColumns){p=[];g=0;for(j=t.length;g<j;g++)p.push(null)}else p=e.aoColumns;g=0;for(j=p.length;g<j;g++)Ga(o,t?t[g]:null);ib(o,e.aoColumnDefs,p,function(a,b){ja(o,a,b)});if(v.length){var s=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(v[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=s(b,"sort")||s(b,"order"),e=s(b,"filter")||s(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==
null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ja(o,a)}}})}var w=o.oFeatures;e.bStateSave&&(w.bStateSave=!0,Kb(o,e),z(o,"aoDrawCallback",ya,"state_save"));if(e.aaSorting===k){t=o.aaSorting;g=0;for(j=t.length;g<j;g++)t[g][1]=o.aoColumns[g].asSorting[0]}xa(o);w.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=W(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});u(o,null,"order",[o,a,b]);Jb(o)}});z(o,"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||w.bDeferRender)&&xa(o)},"sc");g=
q.children("caption").each(function(){this._captionSide=q.css("caption-side")});j=q.children("thead");0===j.length&&(j=h("<thead/>").appendTo(this));o.nTHead=j[0];j=q.children("tbody");0===j.length&&(j=h("<tbody/>").appendTo(this));o.nTBody=j[0];j=q.children("tfoot");if(0===j.length&&0<g.length&&(""!==o.oScroll.sX||""!==o.oScroll.sY))j=h("<tfoot/>").appendTo(this);0===j.length||0===j.children().length?q.addClass(i.sNoFooter):0<j.length&&(o.nTFoot=j[0],da(o.aoFooter,o.nTFoot));if(e.aaData)for(g=0;g<
e.aaData.length;g++)N(o,e.aaData[g]);else(o.bDeferLoading||"dom"==y(o))&&ma(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();o.bInitialised=!0;!1===n&&ga(o)}});b=null;return this};var Tb=[],w=Array.prototype,dc=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===
typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};r=function(a,b){if(!(this instanceof r))return new r(a,b);var c=[],d=function(a){(a=dc(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=pa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};r.extend(this,this,Tb)};m.Api=r;h.extend(r.prototype,{any:function(){return 0!==this.count()},concat:w.concat,
context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new r(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new r(this.context,b)},flatten:function(){var a=[];return new r(this.context,a.concat.apply(a,this.toArray()))},join:w.join,
indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,n,l=this.context,m,t,p=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var o=new r(l[g]);if("table"===b)f=c.call(o,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(o,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){t=this[g];"column-rows"===b&&(m=Da(l[g],
p.opts));i=0;for(n=t.length;i<n;i++)f=t[i],f="cell"===b?c.call(o,l[g],f.row,f.column,g,i):c.call(o,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new r(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=p.rows,b.cols=p.cols,b.opts=p.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new r(this.context,
b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return hb(this,a,b,0,this.length,1)},reduceRight:w.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new r(this.context,pa(this))},unshift:w.unshift});r.extend=
function(a,b,c){if(c.length&&b&&(b instanceof r||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);r.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,r.extend(a,b[f.name],f.propExt)}};r.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)r.register(a[c],b);else for(var e=a.split("."),f=Tb,g,j,c=0,d=e.length;c<d;c++){g=
(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};r.registerPlural=s=function(a,b,c){r.register(a,c);r.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof r?a.length?h.isArray(a[0])?new r(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=r;var c=this.context;if("number"===
typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new r(b[0]):a});s("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});s("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});s("tables().header()",
"table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});s("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});s("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===
k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});p("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:
k:this.iterator("table",function(b){Ra(b,a)})});var Ub=function(a,b,c){if(c){var d=new r(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ra(a,[],function(c){na(a);for(var c=sa(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,
b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});p("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});var $a=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===
i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split?b[i].split(","):[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=v.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return pa(f)},ab=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=
1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==
j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=b;return $a("row",a,function(a){var b=Pb(a);if(b!==null&&!e)return[b];var j=Da(c,e);if(b!==null&&h.inArray(b,j)!==-1)return[b];if(!a)return j;if(typeof a==="function")return h.map(j,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Sb(ha(c.aoData,j,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==
k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){j=c.aIds[a.replace(/^#/,"")];if(j!==k)return[j.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,
"rows",function(a,b){return ha(a.aoData,b,"_aData")},1)});s("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});s("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ca(b,c,a)})});s("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});s("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,
d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new r(c,b)});s("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<n;i++)l[i]._DT_CellIndex.row=g}oa(b.aiDisplayMaster,c);oa(b.aiDisplay,c);oa(a[d],c,!1);
Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return bb(this.rows(a,b))});p("row().data()",function(a){var b=
this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;ca(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:N(b,a)});return this.row(b[0])});var cb=function(a,b){var c=a.context;if(c.length&&
(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Vb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new r(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<F(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];
a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=aa(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&cb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===
a)cb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=aa(d),e.push(c[0]))};f(a,b);c._details&&c._details.remove();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Vb(this,
!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Vb(this,!1);return this});p(["row().child.remove()","row().child().remove()"],function(){cb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var ec=/^(.+):(name|visIdx|visible)$/,Wb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&
(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=F(g,"sName"),i=F(g,"nTh");return $a("column",e,function(a){var b=Pb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Wb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(ec):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});
return[m[m.length+b]]}return[Z(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});s("columns().header()","column().header()",function(){return this.iterator("column",
function(a,b){return a.aoColumns[b].nTh},1)});s("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});s("columns().data()","column().data()",function(){return this.iterator("column-rows",Wb,1)});s("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});s("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,
c,d,e,f){return ha(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});s("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ha(a.aoData,e,"anCells",b)},1)});s("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,d){if(a===k)return c.aoColumns[d].bVisible;var e=c.aoColumns,f=e[d],g=c.aoData,j,i,n;if(a!==k&&f.bVisible!==a){if(a){var l=h.inArray(!0,F(e,"bVisible"),d+1);j=0;for(i=g.length;j<
i;j++)n=g[j].nTr,e=g[j].anCells,n&&n.insertBefore(e[d],e[l]||null)}else h(F(c.aoData,"anCells",d)).detach();f.bVisible=a;ea(c,c.aoHeader);ea(c,c.aoFooter);(b===k||b)&&U(c);u(c,null,"column-visibility",[c,d,a,b]);ya(c)}})});s("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?$(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){U(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=
this.context[0];if("fromVisible"===a||"toData"===a)return Z(c,b);if("fromData"===a||"toVisible"===a)return $(c,b)}});p("column()",function(a,b){return bb(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=ab(c),f=b.aoData,g=Da(b,e),j=Sb(ha(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,p,r,u,v,s;return $a("cell",d,function(a){var c=
typeof a==="function";if(a===null||a===k||c){m=[];p=0;for(r=g.length;p<r;p++){l=g[p];for(u=0;u<n;u++){v={row:l,column:u};if(c){s=f[l];a(v,B(b,l,u),s.anCells?s.anCells[u]:null)&&m.push(v)}else m.push(v)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;s=h(a).closest("*[data-dt-row]");return s.length?[{row:s.data("dt-row"),column:s.data("dt-column")}]:[]},b,e)});var d=
this.columns(b,c),e=this.rows(a,c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});s("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});s("cells().cache()",
"cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});s("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});s("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:$(a,c)}},1)});s("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,
c,d){ca(b,c,a,d)})});p("cell()",function(a,b,c){return bb(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;jb(b[0],c[0].row,c[0].column,a);ca(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=
a.slice()})});p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,
b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&fa(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});s("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===
c?!0:c,bCaseInsensitive:null===d?!0:d}),fa(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){ya(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=
m.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,function(b){if(!a||
a&&h(b.nTable).is(":visible"))return b.nTable});return b?new r(c):c};m.util={throttle:ua,escapeRegex:va};m.camelToHungarian=K;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0].match(/\.dt\b/)||(a[0]+=".dt");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",
function(a){na(a)})});p("settings()",function(){return new r(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return F(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),
p;b.bDestroying=!0;u(b,"aoDestroyCallback","destroy",[b]);a||(new r(b)).columns().visible(!0);k.unbind(".DT").find(":not(tbody *)").unbind(".DT");h(D).unbind(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];xa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+
d.sSortIcon+", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column",
"row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,n){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,n)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=Q(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.11";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,
_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults=
{aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,
aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=
this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=v={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},
header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(v,{afnFiltering:v.search,aTypes:v.type.detect,ofnSearch:v.type.search,oSort:v.type.order,afnSortData:v.order,aoFeatures:v.feature,oApi:v.internal,oStdClasses:v.classes,oPagination:v.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",H=Ea+"ui-state-default",ia=Ea+"css_right ui-icon ui-icon-",Xb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,
m.ext.classes,{sPageButton:"fg-button ui-button "+H,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:H+" sorting_asc",sSortDesc:H+" sorting_desc",sSortable:H+" sorting",sSortableAsc:H+" sorting_asc_disabled",sSortableDesc:H+" sorting_desc_disabled",sSortableNone:H+" sorting_disabled",sSortJUIAsc:ia+"triangle-1-n",sSortJUIDesc:ia+"triangle-1-s",sSortJUI:ia+"carat-2-n-s",
sSortJUIAscAllowed:ia+"carat-1-n",sSortJUIDescAllowed:ia+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+H,sScrollFoot:"dataTables_scrollFoot "+H,sHeaderTH:H,sFooterTH:H,sJUIHeader:Xb+" ui-corner-tl ui-corner-tr",sJUIFooter:Xb+" ui-corner-bl ui-corner-br"});var Mb=m.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[Aa(a,
b)]},simple_numbers:function(a,b){return["previous",Aa(a,b),"next"]},full_numbers:function(a,b){return["first","previous",Aa(a,b),"next","last"]},_numbers:Aa,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},k,l,m=0,p=function(b,d){var o,r,u,s,v=function(b){Ta(a,b.data.action,true)};o=0;for(r=d.length;o<r;o++){s=d[o];if(h.isArray(s)){u=h("<"+(s.DT_el||"div")+"/>").appendTo(b);p(u,s)}else{k=null;
l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":k=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":k=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":k=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":k=j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:k=s+1;l=e===s?g.sPageButtonActive:""}if(k!==null){u=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[s],
"data-dt-idx":m,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(k).appendTo(b);Wa(u,{action:s},v);m++}}}},r;try{r=h(b).find(I.activeElement).data("dt-idx")}catch(o){}p(h(b).empty(),d);r&&h(b).find("[data-dt-idx="+r+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!bc.test(a)||!cc.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":
null},function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ca,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob,
" "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(v.type.order,{"date-pre":function(a){return Date.parse(a)||0},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,
b){return a<b?1:a>b?-1:0}});db("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,
f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Yb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};m.render={number:function(a,
b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Yb(f);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Yb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Nb,_fnBuildAjax:ra,_fnAjaxUpdate:lb,_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:sa,_fnAddColumn:Ga,_fnColumnOptions:ja,
_fnAdjustColumnSizing:U,_fnVisibleToColumnIndex:Z,_fnColumnIndexToVisible:$,_fnVisbleColumns:aa,_fnGetColumns:la,_fnColumnTypes:Ia,_fnApplyColumnDefs:ib,_fnHungarianMap:Y,_fnCamelToHungarian:K,_fnLanguageCompat:Fa,_fnBrowserDetect:gb,_fnAddData:N,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:jb,_fnSplitObjNotation:La,_fnGetObjectDataFn:Q,_fnSetObjectDataFn:R,
_fnGetDataMaster:Ma,_fnClearTable:na,_fnDeleteIndex:oa,_fnInvalidate:ca,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:kb,_fnDrawHead:ea,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:nb,_fnDetectHeader:da,_fnGetUniqueThs:qa,_fnFeatureHtmlFilter:pb,_fnFilterComplete:fa,_fnFilterCustom:yb,_fnFilterColumn:xb,_fnFilter:wb,_fnFilterCreateSearch:Qa,_fnEscapeRegex:va,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,_fnInfoMacros:Db,_fnInitialise:ga,_fnInitComplete:ta,_fnLengthChange:Ra,_fnFeatureHtmlLength:ob,
_fnFeatureHtmlPaginate:tb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:ka,_fnApplyToChildren:J,_fnCalculateColumnWidths:Ha,_fnThrottle:ua,_fnConvertToWidth:Fb,_fnGetWidestNode:Gb,_fnGetMaxLenString:Hb,_fnStringToCss:x,_fnSortFlatten:W,_fnSort:mb,_fnSortAria:Jb,_fnSortListener:Va,_fnSortAttachListener:Oa,_fnSortingClasses:xa,_fnSortData:Ib,_fnSaveState:ya,_fnLoadState:Kb,_fnSettingsFromNode:za,_fnLog:L,_fnMap:E,_fnBindAction:Wa,_fnCallbackReg:z,
_fnCallbackFire:u,_fnLengthOverflow:Sa,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/*
 *  Remodal - v1.0.7
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;c>e;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;c>e;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||("false"===d?!1:d)),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b("[data-"+p+'-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=this;e.settings=b.extend({},t,c),e.index=b[p].lookup.push(e)-1,e.state=u.CLOSED,e.$overlay=b("."+k("overlay")),e.$overlay.length||(e.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),d.append(e.$overlay)),e.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),e.$modal=a.addClass(q+" "+k("is-initialized")+" "+e.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),e.$wrapper=b("<div>").addClass(k("wrapper")+" "+e.settings.modifier+" "+k("is",u.CLOSED)).hide().append(e.$modal),d.append(e.$wrapper),e.$wrapper.on("click."+q,"[data-"+p+'-action="close"]',function(a){a.preventDefault(),e.close()}),e.$wrapper.on("click."+q,"[data-"+p+'-action="cancel"]',function(a){a.preventDefault(),e.$modal.trigger(v.CANCELLATION),e.settings.closeOnCancel&&e.close(v.CANCELLATION)}),e.$wrapper.on("click."+q,"[data-"+p+'-action="confirm"]',function(a){a.preventDefault(),e.$modal.trigger(v.CONFIRMATION),e.settings.closeOnConfirm&&e.close(v.CONFIRMATION)}),e.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&e.settings.closeOnOutsideClick&&e.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:""},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-"+p+"-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-"+p+"-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-"+p+"-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-"+p+"-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-"+p+"-target"),e=b("[data-"+p+'-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data(p+"-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});
/**
 * Copyright (c) 2016-2016 Thiago do Nascimento Ferreira
 * Licensed under the MIT license
 * http://github.com/thiagodnf/publications.js
 */

  function Publications (bibtexSource, bibtexTable, bibtextChart, options) {

    /** Events from object */
    this.events = {};

    /** */
    this.table = {};

    /** All entries parsed from bibtext file */
    this.entries = [];

    this.bibtexSource = "";

    this.bibtexTable = "";

    this.bibtexChart = "";

    this.warnings = [];

    this.defaultOptions = {
        visualization: true,
        defaultYear: "To Appear",
        chartTitle: "List of Publications",
        enabledLegend: true,
        enabledDataLabels: true,
        yAxisTitle: 'Number of Papers',
        defaultPagination: 10,
        transparentBackground: false,
        backgroundColor: 'white',
        dontShowBibtexEntryTypes: []
    };

    this.options = {};

     /** Contructor */
     this.initialize = function(bibtexSource, bibtexTable, bibtexChart, options){
         this.bibtexSource = bibtexSource;
         this.bibtexTable = bibtexTable;
         this.bibtexChart = bibtexChart;

         // Merge the options
         this.options = $.extend({}, this.defaultOptions, options || {});

         // Hide the bibtex source
         $(bibtexSource).hide();

         // Create the table and put it in the bibtext table
         $(bibtexTable).html(" \
             <table id='p-table' class='display' cellspacing='0' width='100%'> \
                 <thead> \
                     <tr> \
                         <th width='40px'>Year</th> \
                         <th width='80px'>Type</th> \
                         <th>Reference</th> \
                     </tr> \
                 </thead> \
                 <tbody> \
                 </tbody> \
             </table> \
         ");

         // Parse from bibtext file to javascript object
         this.entries = this.parse($(bibtexSource).html());

         $(document).on('click', ".pub-bib-link", function(){
             var key = $(this).attr("data-bibtex-open");
             $("[data-bibtex-key="+key+"]").remodal().open();
         });

         // Create datatable component
         this.table = $("#p-table").DataTable({
             "order": [[ 0, "desc" ]],   // Sort by year. Newer first.
             "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
             "iDisplayLength": this.options.defaultPagination
         });
     };

     /** Convert the entry type to readable text */
     this.getType = function(entryType){
         // types used for the different types of entries
         var types = {
             'article': 'Journal',
             'book': 'Book',
             'booklet': 'Booklet',
             'conference': 'Conference',
             'inbook': 'Book Chapter',
             'incollection': 'In Collection',
             'inproceedings': 'Conference',
             'manual': 'Manual',
             'mastersthesis': "Master's Thesis",
             'misc': 'Misc',
             'phdthesis': 'PhD Thesis',
             'proceedings': 'Conference Proceeding',
             'techreport': 'Technical Report',
             'unpublished': 'Unpublished'
         };

         return types[entryType];
     }

     /** Parse from bibtex file to javascript array */
     this.parse = function(content){
         // Creating the bibtex object for parse the bibtext file
         var bibtex = new BibTex();
         // Getting the div's content for parse it
         bibtex.content = content;
         // Parse the bibtext file
         bibtex.parse();

         this.warnings = bibtex.warnings;

         // Array with all entries
         var entries = [];
         // Save all converted entries
         for (var index = 0; index < bibtex.data.length; index++) {
           if(this.options.dontShowBibtexEntryTypes.indexOf(bibtex.data[index].entryType) == -1){
             entries.push(bibtex.data[index]);
           }
         }

         // Call TRIM function in the all fields
         $.each(entries, function(key, entry){
             for(c in entry){
                 if(!Array.isArray(entry[c])){
                     entry[c] = entry[c].trim();
                 }
             }
         });

         return entries;
     };

     /** Draw all components */
     this.draw = function(){
         this.updateTable();
         this.updateChart();
     };

     /** Update table component */
     this.updateTable = function(){
         var that = this;

         if(trigger = this.events['table.before.addRows']) trigger();

         // Remove all rows before add new rows
         this.table.clear();

         // Add all entries
         $.each(this.entries, function(key, entry){
            // Append new row
            that.table.row.add( [
                that._get("YEAR", entry.year),          // YEAR COLUMN
                that.getType(entry.entryType),          // TYPE COLUMN
                that.convertEntryToReference(entry),    // PUBLICATION COLUMN
            ]);

            if(trigger = that.events['table.process.entry']) trigger(entry);
         });

         if(trigger = this.events['table.after.addRows']) trigger();

         // Repaint the table
         this.table.draw( false );
     }

     this.updateChart = function(){

         if(! this.options.visualization){
             return;
         }

         var years = this.getYears(this.entries);

        var stats = {};

        $.each(this.entries, function(key, entry) {
            if(!stats[entry.entryType]){
                stats[entry.entryType] = {};
            }

            if(!stats[entry.entryType][entry.year]){
                stats[entry.entryType][entry.year] = 1;
            }else{
                stats[entry.entryType][entry.year]++;
            }
        });

         var series = [];

         for (s in stats){
             var data = [];

             $.each(years, function(key, year){
                 data.push(stats[s][year] || 0)
             });

             // Add only the series that have at least a value
             var sum = data.reduce(function(a, b){return a+b;});

             if(sum > 0){
                 series.push({name:this.getType(s), data:data});
             }
         }

         $(this.bibtexChart).highcharts({
             chart: {
                 type: 'column',
                 backgroundColor: this.options.transparentBackground? null : this.options.backgroundColor
             },
             title: {
                 text: this.options.chartTitle
             },
             xAxis: {
                 categories: years
             },
             yAxis: {
                 min: 0,
                 title: {
                     text: this.options.yAxisTitle
                 },
                 stackLabels: {
                     enabled: true,
                     style: {
                         fontWeight: 'bold',
                         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                     }
                 }
             },
             legend: {
                 enabled: this.options.enabledLegend,
                 align: 'right',
                 x: -30,
                 verticalAlign: 'top',
                 y: 25,
                 floating: true,
                 backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                 borderColor: '#CCC',
                 borderWidth: 1,
                 shadow: false
             },
             tooltip: {
                 headerFormat: '<b>{point.x}</b><br/>',
                 pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
             },
             plotOptions: {
                 column: {
                     stacking: 'normal',
                     dataLabels: {
                         enabled: this.options.enabledDataLabels,
                         color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                         style: {
                             textShadow: '0 0 3px black'
                         },
                         formatter: function() {
                             if (this.y !== 0) {
                                 return this.y;
                             } else {
                                 return null;
                             }
                        }
                     }
                 }
             },
             series: series
         });
     }

     /** Return only the years of the entries */
     this.getYears = function(entries){
         var that = this;

        var years = [];

        $.each(entries, function(key, entry){
            if(years.indexOf(entry.year) == -1){
                // Do not add the 'To Appear' from chart
                if(entry.year && entry.year !== ""){
                    years.push(entry.year);
                }
            }
        });

        // Sort the Array
        years.sort(function(a, b){return a-b});

        return years;
     };

     /** Append events to components */
     this.on = function(event, trigger){
         this.events[event] = trigger;
     };

     /** Convert the string to html format */
     this.htmlify = function(str){

         if(!str) return str;

         str = str.replace(/"/g,'&quot;'); // 34 22
         str = str.replace(/&/g,'&amp;'); // 38 26
         str = str.replace(/\'/g,'&#39;'); // 39 27
         str = str.replace(/</g,'&lt;'); // 60 3C
         str = str.replace(/>/g,'&gt;'); // 62 3E
         str = str.replace(/\^/g,'&circ;'); // 94 5E
         str = str.replace(/‘/g,'&lsquo;'); // 145 91
         str = str.replace(/’/g,'&rsquo;'); // 146 92
         str = str.replace(/“/g,'&ldquo;'); // 147 93
         str = str.replace(/”/g,'&rdquo;'); // 148 94
         str = str.replace(/•/g,'&bull;'); // 149 95
         str = str.replace(/–/g,'&ndash;'); // 150 96
         str = str.replace(/—/g,'&mdash;'); // 151 97
         str = str.replace(/˜/g,'&tilde;'); // 152 98
         str = str.replace(/™/g,'&trade;'); // 153 99
         str = str.replace(/š/g,'&scaron;'); // 154 9A
         str = str.replace(/›/g,'&rsaquo;'); // 155 9B
         str = str.replace(/œ/g,'&oelig;'); // 156 9C
         str = str.replace(/ž/g,'&#382;'); // 158 9E
         str = str.replace(/Ÿ/g,'&Yuml;'); // 159 9F
         str = str.replace(/¡/g,'&iexcl;'); // 161 A1
         str = str.replace(/¢/g,'&cent;'); // 162 A2
         str = str.replace(/£/g,'&pound;'); // 163 A3
         str = str.replace(/¤/g,'&curren;'); // 164 A4
         str = str.replace(/¥/g,'&yen;'); // 165 A5
         str = str.replace(/¦/g,'&brvbar;'); // 166 A6
         str = str.replace(/§/g,'&sect;'); // 167 A7
         str = str.replace(/¨/g,'&uml;'); // 168 A8
         str = str.replace(/©/g,'&copy;'); // 169 A9
         str = str.replace(/ª/g,'&ordf;'); // 170 AA
         str = str.replace(/«/g,'&laquo;'); // 171 AB
         str = str.replace(/¬/g,'&not;'); // 172 AC
         str = str.replace(/­/g,'&shy;'); // 173 AD
         str = str.replace(/®/g,'&reg;'); // 174 AE
         str = str.replace(/¯/g,'&macr;'); // 175 AF
         str = str.replace(/°/g,'&deg;'); // 176 B0
         str = str.replace(/±/g,'&plusmn;'); // 177 B1
         str = str.replace(/²/g,'&sup2;'); // 178 B2
         str = str.replace(/³/g,'&sup3;'); // 179 B3
         str = str.replace(/´/g,'&acute;'); // 180 B4
         str = str.replace(/µ/g,'&micro;'); // 181 B5
         str = str.replace(/¶/g,'&para'); // 182 B6
         str = str.replace(/·/g,'&middot;'); // 183 B7
         str = str.replace(/¸/g,'&cedil;'); // 184 B8
         str = str.replace(/¹/g,'&sup1;'); // 185 B9
         str = str.replace(/º/g,'&ordm;'); // 186 BA
         str = str.replace(/»/g,'&raquo;'); // 187 BB
         str = str.replace(/¼/g,'&frac14;'); // 188 BC
         str = str.replace(/½/g,'&frac12;'); // 189 BD
         str = str.replace(/¾/g,'&frac34;'); // 190 BE
         str = str.replace(/¿/g,'&iquest;'); // 191 BF
         str = str.replace(/À/g,'&Agrave;'); // 192 C0
         str = str.replace(/Á/g,'&Aacute;'); // 193 C1
         str = str.replace(/Â/g,'&Acirc;'); // 194 C2
         str = str.replace(/Ã/g,'&Atilde;'); // 195 C3
         str = str.replace(/Ä/g,'&Auml;'); // 196 C4
         str = str.replace(/Å/g,'&Aring;'); // 197 C5
         str = str.replace(/Æ/g,'&AElig;'); // 198 C6
         str = str.replace(/Ç/g,'&Ccedil;'); // 199 C7
         str = str.replace(/È/g,'&Egrave;'); // 200 C8
         str = str.replace(/É/g,'&Eacute;'); // 201 C9
         str = str.replace(/Ê/g,'&Ecirc;'); // 202 CA
         str = str.replace(/Ë/g,'&Euml;'); // 203 CB
         str = str.replace(/Ì/g,'&Igrave;'); // 204 CC
         str = str.replace(/Í/g,'&Iacute;'); // 205 CD
         str = str.replace(/Î/g,'&Icirc;'); // 206 CE
         str = str.replace(/Ï/g,'&Iuml;'); // 207 CF
         str = str.replace(/Ð/g,'&ETH;'); // 208 D0
         str = str.replace(/Ñ/g,'&Ntilde;'); // 209 D1
         str = str.replace(/Ò/g,'&Ograve;'); // 210 D2
         str = str.replace(/Ó/g,'&Oacute;'); // 211 D3
         str = str.replace(/Ô/g,'&Ocirc;'); // 212 D4
         str = str.replace(/Õ/g,'&Otilde;'); // 213 D5
         str = str.replace(/Ö/g,'&Ouml;'); // 214 D6
         str = str.replace(/×/g,'&times;'); // 215 D7
         str = str.replace(/Ø/g,'&Oslash;'); // 216 D8
         str = str.replace(/Ù/g,'&Ugrave;'); // 217 D9
         str = str.replace(/Ú/g,'&Uacute;'); // 218 DA
         str = str.replace(/Û/g,'&Ucirc;'); // 219 DB
         str = str.replace(/Ü/g,'&Uuml;'); // 220 DC
         str = str.replace(/Ý/g,'&Yacute;'); // 221 DD
         str = str.replace(/Þ/g,'&THORN;'); // 222 DE
         str = str.replace(/ß/g,'&szlig;'); // 223 DF
         str = str.replace(/à/g,'&aacute;'); // 224 E0
         str = str.replace(/á/g,'&aacute;'); // 225 E1
         str = str.replace(/â/g,'&acirc;'); // 226 E2
         str = str.replace(/ã/g,'&atilde;'); // 227 E3
         str = str.replace(/ä/g,'&auml;'); // 228 E4
         str = str.replace(/å/g,'&aring;'); // 229 E5
         str = str.replace(/æ/g,'&aelig;'); // 230 E6
         str = str.replace(/ç/g,'&ccedil;'); // 231 E7
         str = str.replace(/è/g,'&egrave;'); // 232 E8
         str = str.replace(/é/g,'&eacute;'); // 233 E9
         str = str.replace(/ê/g,'&ecirc;'); // 234 EA
         str = str.replace(/ë/g,'&euml;'); // 235 EB
         str = str.replace(/ì/g,'&igrave;'); // 236 EC
         str = str.replace(/í/g,'&iacute;'); // 237 ED
         str = str.replace(/î/g,'&icirc;'); // 238 EE
         str = str.replace(/ï/g,'&iuml;'); // 239 EF
         str = str.replace(/ð/g,'&eth;'); // 240 F0
         str = str.replace(/ñ/g,'&ntilde;'); // 241 F1
         str = str.replace(/ò/g,'&ograve;'); // 242 F2
         str = str.replace(/ó/g,'&oacute;'); // 243 F3
         str = str.replace(/ô/g,'&ocirc;'); // 244 F4
         str = str.replace(/õ/g,'&otilde;'); // 245 F5
         str = str.replace(/ö/g,'&ouml;'); // 246 F6
         str = str.replace(/÷/g,'&divide;'); // 247 F7
         str = str.replace(/ø/g,'&oslash;'); // 248 F8
         str = str.replace(/ù/g,'&ugrave;'); // 249 F9
         str = str.replace(/ú/g,'&uacute;'); // 250 FA
         str = str.replace(/û/g,'&ucirc;'); // 251 FB
         str = str.replace(/ü/g,'&uuml;'); // 252 FC
         str = str.replace(/ý/g,'&yacute;'); // 253 FD
         str = str.replace(/þ/g,'&thorn;'); // 254 FE
         str = str.replace(/ÿ/g,'&yuml;'); // 255 FF

         return str;
     }

     /** Generate UUID used to uniquely identify a component*/
     this.generateUUID = function(){
        var d = new Date().getTime();

        if(window.performance && typeof window.performance.now === "function"){
            //use high-precision timer if available
            d += performance.now();
        }

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });

        return uuid;
     }

     /* Converts the given author data into HTML*/
     this.convertAuthorsToHTML = function(authorData) {
        var authorsStr = '';

        for (var index = 0; index < authorData.length; index++) {
            if (index > 0) {
                authorsStr += ", ";
            }
            authorsStr += authorData[index].last;
        }

        return authorsStr;
     }

     /** Convert a entry object to bibtex format */
     this.convertEntryToBibtex = function(entry){

        var str = "@" + entry.entryType + "{" + entry.cite + ", \n";

        $.each(entry, function(key, value) {
            if (key == "author") {
                str += "  author = { ";
                for (var index = 0; index < value.length; index++) {
                    if (index > 0) {
                        str += " and ";
                    }
                    str += value[index].last;
                }
                str += " },\n";
            } else if (key != "entryType" && key != "cite") {
                str += '  ' + key + " = { " + value + " },\n";
            }
        });

        return str + "}";
     }

     /* Helper function for formatting different types of bibtex entries */
     this.convertEntryToReference = function(entry){
        var that = this;

        var reference = "";

        // The formatting is based on APA (American Psychological Association)
        if(entry.entryType == "inproceedings" || entry.entryType == "conference"){
            reference = "AUTHORS (YEAR). TITLE. In <em>BOOKTITLE<\/em>, pp. PAGES, ADDRESS.";
        } else if(entry.entryType == "article"){
            reference = "AUTHORS (YEAR). TITLE. <em> JOURNAL, VOLUME<\/em>(NUMBER), pp. PAGES.";
        } else if(entry.entryType == "book"){
            reference = "AUTHORS (YEAR). <em>TITLE<\/em>. ADDRESS: PUBLISHER.";
        } else if(entry.entryType == "phdthesis" || entry.entryType == "mastersthesis"){
            reference = "AUTHORS (YEAR). <em>TITLE<\/em>. TYPE. ORGANIZATION, SCHOOL.";
        } else if(entry.entryType == "misc"){
            reference = "AUTHORS (YEAR). <em>TITLE<\/em>. HOWPUBLISHED. NOTE.";
        } else if(entry.entryType == "techreport"){
            reference = "AUTHORS (YEAR). TITLE. <em>INSTITUTION. NUMBER. Tech. Rep.<\/em>";
        } else if(entry.entryType == "inbook"){
            reference = "AUTHORS (YEAR). TITLE in <em>BOOKTITLE<\/em>, Edited by EDITOR, PUBLISHER, pp. PAGES, <em> SERIES<\/em>, Vol. VOLUME, ISBN: ISBN'";
        } else {
            reference = "AUTHORS (YEAR). TITLE. In <em>BOOKTITLE<\/em>, pp. PAGES, ADDRESS.";
        }

        // Replace all key in the string;
        reference = this._replaceKey(reference, "AUTHORS", this.convertAuthorsToHTML(entry.author));
        reference = this._replaceKey(reference, "TITLE", entry.title);
        reference = this._replaceKey(reference, "BOOKTITLE", entry.booktitle);
        reference = this._replaceKey(reference, "YEAR", entry.year);
        reference = this._replaceKey(reference, "PAGES", entry.pages);
        reference = this._replaceKey(reference, "ADDRESS", entry.address);
        reference = this._replaceKey(reference, "JOURNAL", entry.journal);
        reference = this._replaceKey(reference, "VOLUME", entry.volume);
        reference = this._replaceKey(reference, "NUMBER", entry.number);
        reference = this._replaceKey(reference, "PUBLISHER", entry.publisher);
        reference = this._replaceKey(reference, "ISSN", entry.issn);
        reference = this._replaceKey(reference, "ISBN'", entry.isbn);
        reference = this._replaceKey(reference, "SCHOOL", entry.school);
        reference = this._replaceKey(reference, "ORGANIZATION", entry.organization);
        reference = this._replaceKey(reference, "TYPE", entry.type);
        reference = this._replaceKey(reference, "HOWPUBLISHED", entry.howpublished);
        reference = this._replaceKey(reference, "NOTE", entry.note);
        reference = this._replaceKey(reference, "INSTITUTION", entry.institution);
        reference = this._replaceKey(reference, "CHAPTER", entry.chapter);
        reference = this._replaceKey(reference, "EDITOR", entry.editor);
        reference = this._replaceKey(reference, "SERIES", entry.series);

        // Add a link to paper's url
        if(entry.url){
            reference += " (<a class='pub-link' href='"+entry.url+"' target='_blank'>url</a>)";
        }

        // Add a link to paper's url
        if(entry.supporting_page){
            reference += " (<a class='pub-link' href='"+entry.supporting_page+"' target='_blank'>supporting page</a>)";
        }

        // UUID used to identify this entry when the user click at (bib) link
        var uuid = this.generateUUID();

        reference += " (<a href='#' class='pub-link pub-bib-link' data-bibtex-open='" + uuid + "'>bib</a>)";

        reference += "<div data-remodal-id='modal' data-bibtex-key='" + uuid + "'>";
        reference += "<button data-remodal-action='close' class='remodal-close'></button>";
        reference += "<pre>";
        reference += this.convertEntryToBibtex(entry);
        reference += "</pre>";
        reference += "</div>";

        return reference;
     }

     /** Change a key of a string into a value */
     this._replaceKey = function(str, key, value){
         return str.replace(key, this._get(key, value));
     };

     /** Get bibtex object's field */
     this._get = function(key, field){
         if(key == "PAGES" &&  (! field || field === "")){
             return "<span class='pub-missing'>Missing " + key + "</span>";
         }else if(key == "YEAR" &&  (! field || field === "")){
             return this.options.defaultYear;
         }

         return this.htmlify(field || "");
     }

     // Call the constructor
     this.initialize(bibtexSource, bibtexTable, bibtextChart, options)
 }
