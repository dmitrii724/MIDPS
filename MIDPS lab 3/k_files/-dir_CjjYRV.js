/*!CK:2888615107!*//*1459741841,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WSwTv"]); }

__d("PluginConnectButtonType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BLUE_BASE:1,WHITE_BASE:2};},null);
__d("PluginShareLogTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={IMPRESSION:"impression",CLICK:"click"};},null);
__d('PlatformDialog',['cx','DOMEventListener','DOMEvent','CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i;j.getInstance=function(){'use strict';return i;};function j(k,l,m){'use strict';i=this;this.$PlatformDialog1=k;this.$PlatformDialog2=l;this.$PlatformDialog3=false;c('DOMEventListener').add(this.$PlatformDialog1,'submit',function(n){if(this.$PlatformDialog3){new (c('DOMEvent'))(n).kill();return;}this.$PlatformDialog3=true;if(m)c('CSS').addClass(k,"_32qa");}.bind(this));}j.prototype.getForm=function(){'use strict';return this.$PlatformDialog1;};j.prototype.getDisplay=function(){'use strict';return this.$PlatformDialog2;};j.prototype.hasBeenSubmitted=function(){'use strict';return this.$PlatformDialog3;};j.RESPONSE='platform/dialog/response';f.exports=j;},null);
__d('StrSet',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$StrSet2={};this.$StrSet1=0;if(i)this.addAll(i);}h.prototype.add=function(i){'use strict';if(!this.$StrSet2.hasOwnProperty(i)){this.$StrSet2[i]=true;this.$StrSet1++;}return this;};h.prototype.addAll=function(i){'use strict';i.forEach(this.add,this);return this;};h.prototype.remove=function(i){'use strict';if(this.$StrSet2.hasOwnProperty(i)){delete this.$StrSet2[i];this.$StrSet1--;}return this;};h.prototype.removeAll=function(i){'use strict';i.forEach(this.remove,this);return this;};h.prototype.toArray=function(){'use strict';return Object.keys(this.$StrSet2);};h.prototype.toMap=function(i){'use strict';var j={};Object.keys(this.$StrSet2).forEach(function(k){j[k]=typeof i=='function'?i(k):i||true;});return j;};h.prototype.contains=function(i){'use strict';return this.$StrSet2.hasOwnProperty(i);};h.prototype.count=function(){'use strict';return this.$StrSet1;};h.prototype.clear=function(){'use strict';this.$StrSet2={};this.$StrSet1=0;return this;};h.prototype.clone=function(){'use strict';return new h(this);};h.prototype.forEach=function(i,j){'use strict';Object.keys(this.$StrSet2).forEach(i,j);};h.prototype.map=function(i,j){'use strict';return Object.keys(this.$StrSet2).map(i,j);};h.prototype.some=function(i,j){'use strict';return Object.keys(this.$StrSet2).some(i,j);};h.prototype.every=function(i,j){'use strict';return Object.keys(this.$StrSet2).every(i,j);};h.prototype.filter=function(i,j){'use strict';return new h(Object.keys(this.$StrSet2).filter(i,j));};h.prototype.union=function(i){'use strict';return this.clone().addAll(i);};h.prototype.intersect=function(i){'use strict';return this.filter(function(j){return i.contains(j);});};h.prototype.difference=function(i){'use strict';return i.filter(function(j){return !this.contains(j);}.bind(this));};h.prototype.equals=function(i){'use strict';var j=function(n,o){return n===o?0:n<o?-1:1;},k=this.toArray(),l=i.toArray();if(k.length!==l.length)return false;var m=k.length;k=k.sort(j);l=l.sort(j);while(m--)if(k[m]!==l[m])return false;return true;};f.exports=h;},null);
__d('transferTextStyles',['Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={fontFamily:null,fontSize:null,fontStyle:null,fontWeight:null,lineHeight:null,wordWrap:null};function i(j,k){for(var l in h)if(h.hasOwnProperty(l))h[l]=c('Style').get(j,l);c('Style').apply(k,h);}f.exports=i;},null);
__d('TextMetrics',['DOM','Style','UserAgent','transferTextStyles'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){var k=j.clientWidth,l=c('Style').get(j,'-moz-box-sizing')=='border-box';if(l&&c('UserAgent').isBrowser('Firefox < 29'))return k;var m=c('Style').getFloat(j,'paddingLeft')+c('Style').getFloat(j,'paddingRight');return k-m;}function i(j,k){'use strict';this.$TextMetrics1=j;this.$TextMetrics2=!!k;var l='textarea',m='textMetrics';if(this.$TextMetrics2){l='div';m+=' textMetricsInline';}this.$TextMetrics3=c('DOM').create(l,{className:m});c('transferTextStyles')(j,this.$TextMetrics3);document.body.appendChild(this.$TextMetrics3);}i.prototype.measure=function(j){'use strict';var k=this.$TextMetrics1,l=this.$TextMetrics3;j=(j||k.value)+'...';if(!this.$TextMetrics2){var m=h(k);c('Style').set(l,'width',Math.max(m,0)+'px');}if(k.nodeName==='TEXTAREA'){l.value=j;}else c('DOM').setContent(l,j);return {width:l.scrollWidth,height:l.scrollHeight};};i.prototype.destroy=function(){'use strict';c('DOM').remove(this.$TextMetrics3);};f.exports=i;},null);
__d('PlatformBaseVersioning',['invariant','PlatformVersions','getObjectValues','StrSet'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=new (c('StrSet'))(c('getObjectValues')(c('PlatformVersions').versions)),j=location.pathname,k=j.substring(1,j.indexOf('/',1)),l=i.contains(k)?k:c('PlatformVersions').versions.UNVERSIONED;function m(p,q){if(q==c('PlatformVersions').versions.UNVERSIONED)return p;!i.contains(q)?h(0):void 0;if(p.indexOf('/')!==0)p='/'+p;return '/'+q+p;}function n(p){if(i.contains(p.substring(1,p.indexOf('/',1))))return p.substring(p.indexOf('/',1));return p;}var o={addVersionToPath:m,getLatestVersion:function(){return c('PlatformVersions').LATEST;},versionAwareURI:function(p){return p.setPath(m(p.getPath(),l));},versionAwarePath:function(p){return m(p,l);},getUnversionedPath:n};f.exports=o;},null);
__d('PlatformWidgetEndpoint',['PlatformBaseVersioning'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(m,n){return c('PlatformBaseVersioning').versionAwarePath('/dialog'+'/'+m+(n?'/'+n:''));}function i(m,n){return c('PlatformBaseVersioning').versionAwarePath('/plugins'+'/'+m+(n?'/'+n:''));}function j(m){return (/^\/plugins\//.test(c('PlatformBaseVersioning').getUnversionedPath(m)));}function k(m){return (/^\/dialog\//.test(c('PlatformBaseVersioning').getUnversionedPath(m)));}var l={dialog:h,plugins:i,isPluginEndpoint:j,isDialogEndpoint:k};f.exports=l;},null);
__d('ArbiterFrame',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={inform:function(i,j,k){var l=parent.frames,m=l.length,n;j.crossFrame=true;for(var o=0;o<m;o++){n=l[o];try{if(!n||n==window)continue;if(n.require){n.require('Arbiter').inform(i,j,k);}else if(n.ServerJSAsyncLoader)n.ServerJSAsyncLoader.wakeUp(i,j,k);}catch(p){}}}};f.exports=h;},null);
__d('FormSubmit',['AsyncRequest','AsyncResponse','CSS','DOMQuery','Event','Form','Parent','trackReferrer'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={send:function(i,j){var k=(c('Form').getAttribute(i,'method')||'GET').toUpperCase();j=c('Parent').byTag(j,'button')||j;var l=c('Parent').byClass(j,'stat_elem')||i;if(c('CSS').hasClass(l,'async_saving'))return null;if(j&&(j.form!==i||j.nodeName!='INPUT'&&j.nodeName!='BUTTON'||j.type!='submit')){var m=c('DOMQuery').scry(i,'.enter_submit_target')[0];m&&(j=m);}var n=c('Form').serialize(i,j);c('Form').setDisabled(i,true);var o=c('Form').getAttribute(i,'ajaxify')||c('Form').getAttribute(i,'action'),p=!!c('Form').getAttribute(i,'data-cors');c('trackReferrer')(i,o);var q=new (c('AsyncRequest'))().setAllowCrossOrigin(p).setURI(o).setData(n).setNectarModuleDataSafe(i).setReadOnly(k=='GET').setMethod(k).setRelativeTo(i).setStatusElement(l).setInitialHandler(c('Form').setDisabled.bind(null,i,false)).setHandler(function(r){c('Event').fire(i,'success',{response:r});}).setErrorHandler(function(r){if(c('Event').fire(i,'error',{response:r})!==false)c('AsyncResponse').defaultErrorHandler(r);}).setFinallyHandler(c('Form').setDisabled.bind(null,i,false));q.send();return q;}};f.exports=h;},null);
__d('Popup',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={open:function(i,j,k){var l=document.body,m='screenX' in window?window.screenX:window.screenLeft,n='screenY' in window?window.screenY:window.screenTop,o='outerWidth' in window?window.outerWidth:l.clientWidth,p='outerHeight' in window?window.outerHeight:l.clientHeight-22,q=Math.floor(m+(o-j)/2),r=Math.floor(n+(p-k)/2.5),s=['width='+j,'height='+k,'left='+q,'top='+r,'scrollbars'];return window.open(i,'_blank',s.join(','));}};f.exports=h;},null);
__d('PopupLink',['DOMEvent','DOMEventListener','Popup'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={listen:function(i,j,k){c('DOMEventListener').add(i,'click',function(l){new (c('DOMEvent'))(l).kill();c('Popup').open(i.href,j,k);});}};f.exports=h;},null);
__d('PopupWindow',['DOMDimensions','DOMQuery','Layer','Popup','getViewportDimensions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={_opts:{allowShrink:true,strategy:'vector',timeout:100,widthElement:null},init:function(i){Object.assign(h._opts,i);setInterval(h._resizeCheck,h._opts.timeout);},_resizeCheck:function(){var i=c('getViewportDimensions')(),j=h._getDocumentSize(),k=c('Layer').getTopmostLayer();if(k){var l=k.getRoot().firstChild,m=c('DOMDimensions').getElementDimensions(l);m.height+=c('DOMDimensions').measureElementBox(l,'height',true,true,true);m.width+=c('DOMDimensions').measureElementBox(l,'width',true,true,true);j.height=Math.max(j.height,m.height);j.width=Math.max(j.width,m.width);}var n=j.height-i.height,o=j.width-i.width;if(o<0&&!h._opts.widthElement)o=0;o=o>1?o:0;if(!h._opts.allowShrink&&n<0)n=0;if(n||o)try{window.console&&window.console.firebug;window.resizeBy(o,n);if(o)window.moveBy(o/-2,0);}catch(p){}},_getDocumentSize:function(){var i=c('DOMDimensions').getDocumentDimensions();if(h._opts.strategy==='offsetHeight')i.height=document.body.offsetHeight;if(h._opts.widthElement){var j=c('DOMQuery').scry(document.body,h._opts.widthElement)[0];if(j)i.width=c('DOMDimensions').getElementDimensions(j).width;}var k=b.Dialog;if(k&&k.max_bottom&&k.max_bottom>i.height)i.height=k.max_bottom;return i;},open:function(i,j,k){return c('Popup').open(i,k,j);}};f.exports=h;},null);
__d('Queue',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(j){'use strict';this._opts=babelHelpers['extends']({interval:0,processor:null},j);this._queue=[];this._stopped=true;}i.prototype._dispatch=function(j){'use strict';if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available');}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(this._dispatch.bind(this),this._opts.interval);}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());};i.prototype.enqueue=function(j){'use strict';if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,j);}else this._queue.push(j);return this;};i.prototype.start=function(j){'use strict';if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this;};i.prototype.isStarted=function(){'use strict';return !this._stopped;};i.prototype.dispatch=function(){'use strict';this._dispatch(true);};i.prototype.stop=function(j){'use strict';this._stopped=true;if(j)clearTimeout(this._timeout);return this;};i.prototype.merge=function(j,k){'use strict';this._queue[k?'unshift':'push'].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this;};i.prototype.getLength=function(){'use strict';return this._queue.length;};i.get=function(j,k){'use strict';var l;if(j in h){l=h[j];}else l=h[j]=new i(k);return l;};i.exists=function(j){'use strict';return j in h;};i.remove=function(j){'use strict';return delete h[j];};f.exports=i;},null);
__d('TextInputControl',['DOMControl','Event','Input','debounce'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('DOMControl'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);var l=this.getRoot(),m=c('debounce')(this.update.bind(this),0);c('Event').listen(l,{input:m,keydown:m,paste:m});}j.prototype.setMaxLength=function(k){'use strict';c('Input').setMaxLength(this.getRoot(),k);return this;};j.prototype.getValue=function(){'use strict';return c('Input').getValue(this.getRoot());};j.prototype.isEmpty=function(){'use strict';return c('Input').isEmpty(this.getRoot());};j.prototype.setValue=function(k){'use strict';c('Input').setValue(this.getRoot(),k);this.update();return this;};j.prototype.clear=function(){'use strict';return this.setValue('');};j.prototype.setPlaceholderText=function(k){'use strict';c('Input').setPlaceholder(this.getRoot(),k);return this;};f.exports=j;},null);
__d('TextAreaControl',['Arbiter','ArbiterMixin','CSS','DOMControl','Event','Style','TextInputControl','TextMetrics','classWithMixins','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();function j(l,m){return c('Style').getFloat(l,m)||0;}h=babelHelpers.inherits(k,c('classWithMixins')(c('TextInputControl'),c('mixin')(c('ArbiterMixin'))));i=h&&h.prototype;function k(l){'use strict';i.constructor.call(this,l);this.autogrow=c('CSS').hasClass(l,'uiTextareaAutogrow');this.autogrowWithPlaceholder=c('CSS').hasClass(l,'uiTextareaAutogrowWithPlaceholder');this.width=null;c('Event').listen(l,'focus',this._handleFocus.bind(this));}k.prototype.setAutogrow=function(l){'use strict';this.autogrow=l;return this;};k.prototype.onupdate=function(){'use strict';i.onupdate.call(this);this.updateHeight();};k.prototype.updateHeight=function(){'use strict';if(this.autogrow){var l=this.getRoot();if(!this.metrics)this.metrics=new (c('TextMetrics'))(l);if(typeof this.initialHeight==='undefined'){this.isBorderBox=c('Style').get(l,'box-sizing')==='border-box'||c('Style').get(l,'-moz-box-sizing')==='border-box'||c('Style').get(l,'-webkit-box-sizing')==='border-box';this.borderBoxOffset=j(l,'padding-top')+j(l,'padding-bottom')+j(l,'border-top-width')+j(l,'border-bottom-width');this.initialHeight=l.offsetHeight-this.borderBoxOffset;}var m=null;if((!l.value||l.value.length===0)&&this.autogrowWithPlaceholder){m=this.metrics.measure(l.placeholder);}else m=this.metrics.measure();var n=Math.max(this.initialHeight,m.height);if(this.isBorderBox)n+=this.borderBoxOffset;if(this.maxHeight&&n>this.maxHeight){n=this.maxHeight;c('Arbiter').inform('maxHeightExceeded',{textArea:l});}if(n!==this.height){this.height=n;c('Style').set(l,'height',n+'px');c('Arbiter').inform('reflow');this.inform('resize');}}else if(this.metrics){this.metrics.destroy();this.metrics=null;}};k.prototype.resetHeight=function(){'use strict';this.height=-1;this.update();};k.prototype.setMaxHeight=function(l){'use strict';this.maxHeight=l;};k.prototype.setAutogrowWithPlaceholder=function(l){'use strict';this.autogrowWithPlacedholder=l;};k.prototype._handleFocus=function(){'use strict';this.width=null;};k.getInstance=function(l){'use strict';return c('DOMControl').getInstance(l)||new k(l);};f.exports=k;},null);
__d('resolveWindow',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=window,k=i.split('.');try{for(var m=0;m<k.length;m++){var n=k[m],o=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(n);if(o){j=j.frames[o[1]];}else if(n==='opener'||n==='parent'||n==='top'){j=j[n];}else return null;}}catch(l){return null;}return j;}f.exports=h;},null);
__d('XD',['Arbiter','DOM','DOMDimensions','Log','PHPQuerySerializer','URI','Queue','isFacebookURI','isInIframe','resolveWindow'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='fb_xdm_frame_'+location.protocol.replace(':',''),i={_callbacks:[],_opts:{autoResize:false,allowShrink:true,channelUrl:null,hideOverflow:false,resizeTimeout:1000,resizeWidth:false,expectResizeAck:false,resizeAckTimeout:6000},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function(k){this._opts=babelHelpers['extends']({},this._opts,k);if(this._opts.autoResize)this._startResizeMonitor();c('Arbiter').subscribe('Connect.Unsafe.resize.ack',function(l,m){if(!m.id)m.id=this._resizeCount;if(m.id>this._lastResizeAckId)this._lastResizeAckId=m.id;}.bind(this));},getQueue:function(){if(!this._queue)this._queue=new (c('Queue'))();return this._queue;},setChannelUrl:function(k){this.getQueue().start(function(l){return this.send(l,k);}.bind(this));},send:function(k,l){l=l||this._opts.channelUrl;if(!l){this.getQueue().enqueue(k);return;}var m={},n=new (c('URI'))(l);Object.assign(m,k,c('PHPQuerySerializer').deserialize(n.getFragment()));var o=new (c('URI'))(m.origin).getOrigin(),p=c('resolveWindow')(m.relation.replace(/^parent\./,'')),q=50,r=function(){var s=p.frames[h];try{s.proxyMessage(c('PHPQuerySerializer').serialize(m),o);}catch(t){if(--q){setTimeout(r,100);}else c('Log').warn('No such frame "'+h+'" to proxyMessage to');}};r();},_computeSize:function(){var k=c('DOMDimensions').getDocumentDimensions(),l=0;if(this._opts.resizeWidth){var m=document.body;if(m.clientWidth<m.scrollWidth){l=k.width;}else{var n=m.childNodes;for(var o=0;o<n.length;o++){var p=n[o],q=p.offsetLeft+p.offsetWidth;if(q>l)l=q;}}l=Math.max(l,i.forced_min_width);}k.width=l;if(this._opts.allowShrink){if(!this._shrinker)this._shrinker=c('DOM').create('div');c('DOM').appendContent(document.body,this._shrinker);k.height=Math.max(this._shrinker.offsetTop,0);}return k;},_startResizeMonitor:function(){var k,l=document.documentElement;if(this._opts.hideOverflow){l.style.overflow='hidden';document.body.style.overflow='hidden';}var m=function(){var n=this._computeSize(),o=Date.now(),p=this._lastResizeAckId<this._resizeCount&&o-this._resizeTimestamp>this._opts.resizeAckTimeout;if(!k||this._opts.expectResizeAck&&p||this._opts.allowShrink&&k.width!=n.width||!this._opts.allowShrink&&k.width<n.width||this._opts.allowShrink&&k.height!=n.height||!this._opts.allowShrink&&k.height<n.height){k=n;this._resizeCount++;this._resizeTimestamp=o;var q={type:'resize',height:n.height,ackData:{id:this._resizeCount}};if(n.width&&n.width!=0)q.width=n.width;try{if(c('isFacebookURI')(new (c('URI'))(document.referrer))&&c('isInIframe')()&&window.name&&window.parent.location&&window.parent.location.toString&&c('isFacebookURI')(new (c('URI'))(window.parent.location))){var s=window.parent.document.getElementsByTagName('iframe');for(var t=0;t<s.length;t=t+1)if(s[t].name==window.name){if(this._opts.resizeWidth)s[t].style.width=q.width+'px';s[t].style.height=q.height+'px';}}this.send(q);}catch(r){this.send(q);}}}.bind(this);m();setInterval(m,this._opts.resizeTimeout);}},j=babelHelpers['extends']({},i);f.exports.UnverifiedXD=j;f.exports.XD=i;b.UnverifiedXD=j;b.XD=i;},null);
__d('Plugin',['Arbiter','ArbiterFrame'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={CONNECT:'platform/plugins/connect',DISCONNECT:'platform/plugins/disconnect',ERROR:'platform/plugins/error',RELOAD:'platform/plugins/reload',DIALOG:'platform/plugins/dialog',connect:function(i,j){var k={identifier:i,href:i,story_fbid:j};c('Arbiter').inform(h.CONNECT,k);c('ArbiterFrame').inform(h.CONNECT,k);},disconnect:function(i,j){var k={identifier:i,href:i,story_fbid:j};c('Arbiter').inform(h.DISCONNECT,k);c('ArbiterFrame').inform(h.DISCONNECT,k);},error:function(i,j){c('Arbiter').inform(h.ERROR,{action:i,content:j});},reload:function(i){c('Arbiter').inform(h.RELOAD,{reloadUrl:i||''});c('ArbiterFrame').inform(h.RELOAD,{reloadUrl:i||''});},reloadOtherPlugins:function(){c('ArbiterFrame').inform(h.RELOAD,{reloadUrl:''});}};f.exports=h;},null);
__d('PluginFlyout',['csx','Arbiter','Button','CSS','DOM','DOMEvent','DOMEventListener','Focus','FormSubmit','Plugin','TextAreaControl'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('Arbiter').SUBSCRIBE_NEW,j=c('Arbiter').subscribe,k=c('Arbiter').inform,l=function(n,o){return c('DOMEventListener').add(n,'click',o);};function m(n,o,p){var q=this,r=j(c('Plugin').CONNECT,function(event,s){c('Arbiter').unsubscribe(r);q.init(n,o,p);q.connect(event,s);},i);j(c('Plugin').DIALOG,function(){q.init(n,o,p);q.toggle();},i);}Object.assign(m.prototype,{init:function(n,o,p){if(this.initialized)return;this.initialized=true;c('DOM').appendContent(n,JSON.parse(p));var q=c('DOM').find(n,'form'),r=c('DOM').find(q,"._56zw"),s=c('DOM').find(q,"._56zx"),t=c('DOM').find(q,"._42x4"),u=c('TextAreaControl').getInstance(t);c('DOMEventListener').add(t,'keyup',function(y){c('Button').setEnabled(r,!!u.getValue());});c('DOMEventListener').add(window,'keydown',function(y){if(y.keyCode===27)w();});c('DOMEventListener').add(q,'submit',function(y){new (c('DOMEvent'))(y).kill();c('FormSubmit').send(q);});var v=o==='tiny'?c('DOM').find(document.body,'.pluginPostFlyoutPrompt'):null;this.flyout=n;this.form=q;this.post_button=r;this.prompt=v;var w=this.hide.bind(this),x=this.show.bind(this);l(s,function(y){new (c('DOMEvent'))(y).kill();w();});if(v)l(v,function(y){new (c('DOMEvent'))(y).kill();x();});j(c('Plugin').CONNECT,this.connect.bind(this),i);j(c('Plugin').DISCONNECT,function(){w();},i);j(m.SUCCESS,function(){w();if(v)c('CSS').hide(v);},i);j(c('Plugin').ERROR,function(event,y){if(y.action!=='comment')return;c('DOM').setContent(c('DOM').find(q,"._56zy"),y.content);c('CSS').hide(r);},i);},connect:function(event,n){if(n.crossFrame)return;if(this.prompt)c('CSS').show(this.prompt);if(!n.story_fbid)this.show();},show:function(){this.shown=true;c('CSS').show(this.flyout);c('CSS').show(this.post_button);var n=c('DOM').scry(this.form,"._5jjo");if(n){c('Focus').set(n[0]);}else c('Focus').set(this.form.comment);k(m.SHOW);},hide:function(){this.shown=false;c('CSS').hide(this.flyout);k(m.HIDE);},toggle:function(){if(this.shown){this.hide();}else this.show();}});Object.assign(m,{SUCCESS:'platform/plugins/flyout/success',SHOW:'platform/plugins/flyout/show',HIDE:'platform/plugins/flyout/hide',success:function(){k(m.SUCCESS);}});f.exports=m;},null);
__d('PluginMessage',['DOMEventListener'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={listen:function(){c('DOMEventListener').add(window,'message',function(event){if(/\.facebook\.com$/.test(event.origin)&&/^FB_POPUP:/.test(event.data)){var i=JSON.parse(event.data.substring(9));if('reload' in i&&/^https?:/.test(i.reload))document.location.replace(i.reload);}});}};f.exports=h;},null);
__d('PluginOptin',['DOMEvent','DOMEventListener','PluginMessage','PopupWindow','URI','UserAgent_DEPRECATED','PlatformWidgetEndpoint'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){Object.assign(this,{return_params:c('URI').getRequestURI().getQueryData(),login_params:{},optin_params:{},plugin:i,api_key:j});this.addReturnParams({ret:'optin'});this.login_params.nux=false;delete this.return_params.hash;}Object.assign(h.prototype,{addReturnParams:function(i){Object.assign(this.return_params,i);return this;},addLoginParams:function(i){Object.assign(this.login_params,i);return this;},addOptinParams:function(i){Object.assign(this.optin_params,i);return this;},start:function(){var i=new (c('URI'))(c('PlatformWidgetEndpoint').dialog('plugin.optin')).addQueryData(this.optin_params).addQueryData({app_id:this.api_key||127760087237610,secure:c('URI').getRequestURI().isSecure(),social_plugin:this.plugin,return_params:JSON.stringify(this.return_params),login_params:JSON.stringify(this.login_params)});if(c('UserAgent_DEPRECATED').mobile()){i.setSubdomain('m');}else i.addQueryData({display:'popup'});this.popup=c('PopupWindow').open(i.toString(),420,450);c('PluginMessage').listen();return this;}});h.starter=function(i,j,k,l){var m=new h(i);m.addReturnParams(j||{});m.addLoginParams(k||{});m.addOptinParams(l||{});return m.start.bind(m);};h.listen=function(i,j,k,l,m){c('DOMEventListener').add(i,'click',function(n){new (c('DOMEvent'))(n).kill();h.starter(j,k,l,m)();});};f.exports=h;},null);
__d('PluginConnectButton',['csx','cx','Arbiter','CSS','DOM','DOMDimensions','DOMEvent','DOMEventListener','Focus','FormSubmit','PlatformWidgetEndpoint','Plugin','PluginConnectButtonType','PluginFlyout','PluginOptin','Style','URI','getElementPosition'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('Arbiter').SUBSCRIBE_NEW,k=c('Arbiter').subscribe,l=function(n,o){return c('DOMEventListener').add(n,'click',o);};function m(n){this.config=n;this.busy=false;var o=c('DOM').find(n.form,'.pluginConnectButton');this.buttons=o;this.node_connected=c('DOM').find(o,'.pluginConnectButtonConnected');this.node_disconnected=c('DOM').find(o,'.pluginConnectButtonDisconnected');var p=function(r){new (c('DOMEvent'))(r).kill();if(!this.busy){this.submit();this.busy=this.canpersonalize;}}.bind(this);l(this.node_disconnected,p);if(n.buttontype===c('PluginConnectButtonType').BLUE_BASE){l(c('DOM').find(o,'.pluginButtonX button'),p);}else if(n.buttontype===c('PluginConnectButtonType').WHITE_BASE)l(this.node_connected,p);l(this.node_connected,function(r){return c('Arbiter').inform(c('Plugin').DIALOG,r);});var q=this.update.bind(this);k(c('Plugin').CONNECT,q,j);k(c('Plugin').DISCONNECT,q,j);k(c('Plugin').ERROR,this.error.bind(this),j);k('Connect.Unsafe.xd/reposition',this.flip.bind(this));k(c('PluginFlyout').HIDE,this.hideFlyout.bind(this));if(n.autosubmit)setTimeout(this.submit.bind(this),0);}Object.assign(m.prototype,{update:function(n,event){this.busy=false;var o=this.config;if(event.identifier!==o.identifier)return;var p=n===c('Plugin').CONNECT,q=c('PlatformWidgetEndpoint').plugins(o.plugin);q+='/'+(!p?'connect':'disconnect');c('CSS')[p?'show':'hide'](this.node_connected);c('CSS')[p?'hide':'show'](this.node_disconnected);try{if(document.activeElement.nodeName.toLowerCase()==='button'){var s=p?this.node_connected:this.node_disconnected,t=c('DOM').find(s,'button');t.disabled=false;c('Focus').set(t);}}catch(r){}o.connected=p;o.form.setAttribute('action',q);o.form.setAttribute('ajaxify',q);},error:function(event,n){this.busy=false;if(n.action in {connect:1,disconnect:1}){c('DOM').setContent(this.buttons,n.content);var o=c('DOM').scry(this.buttons,'.confirmButton');if(o.length===1)c('Focus').set(o[0]);}},submit:function(){if(!this.config.canpersonalize)return this.login();c('FormSubmit').send(this.config.form);this.fireStateToggle();},fireStateToggle:function(){var n=this.config;if(n.connected){c('Plugin').disconnect(n.identifier);}else c('Plugin').connect(n.identifier);},login:function(){var n=this.config.plugin;new (c('PluginOptin'))(n,c('URI').getRequestURI().getQueryData().api_key).addReturnParams({act:'connect'}).addLoginParams({social_plugin_action:this.config.pluginaction}).start();},flip:function(n,o){var p=c('DOM').scry(document.body,"._4xn8");if(p.length===0){return;}else p=p[0];var q=c('DOM').scry(this.config.form,'.pluginConnectButtonConnected .pluginButtonIcon'),r=c('Style').get(q[0],'display')!=='none'?q[0]:q[1],s=c('DOM').find(document.body,'.pluginConnectButtonLayoutRoot'),t;if(o.type==='reposition'){c('CSS').addClass(s,"_1f8a");c('Style').set(s,'padding-left',450-s.offsetWidth+'px');c('CSS').removeClass(s,"_1f8b");t=c('getElementPosition')(r).x+c('DOMDimensions').getElementDimensions(r).width/2-6;}else{c('CSS').addClass(s,"_1f8b");c('Style').set(s,'padding-left','0px');c('CSS').removeClass(s,"_1f8a");t=6;}c('Style').set(p,'left',t+'px');},hideFlyout:function(){c('Focus').set(this.connected?this.node_disconnected:this.node_connected);}});f.exports=m;},null);
__d('UnverifiedXD',['XD'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('XD').UnverifiedXD;f.exports=h;},null);
__d('PluginResize',['Locale','Log','UnverifiedXD','getOffsetParent','getStyleProperty'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l){l=l||document.body;var m=0,n=c('getOffsetParent')(l);if(c('Locale').isRTL()&&n){m=n.offsetWidth-l.offsetLeft-l.offsetWidth;}else if(!c('Locale').isRTL())m=l.offsetLeft;return i(l)+m;}function i(l){return Math.ceil(parseFloat(c('getStyleProperty')(l,'width')))||l.offsetWidth;}function j(l){l=l||document.body;return l.offsetHeight+l.offsetTop;}function k(l,m,event,n){this.calcWidth=l||h;this.calcHeight=m||j;this.width=undefined;this.height=undefined;this.reposition=!!n;this.event=event||'resize';}Object.assign(k.prototype,{resize:function(){var l=this.calcWidth(),m=this.calcHeight();if(l!==this.width||m!==this.height){c('Log').debug('Resizing Plugin: (%s, %s, %s, %s)',l,m,this.event,this.reposition);this.width=l;this.height=m;c('UnverifiedXD').send({type:this.event,width:l,height:m,reposition:this.reposition});}return this;},auto:function(l){setInterval(this.resize.bind(this),l||250);return this;}});k.auto=function(l,event,m){return new k(h.bind(null,l),j.bind(null,l),event).resize().auto(m);};k.autoHeight=function(l,m,event,n){return new k(function(){return l;},j.bind(null,m),event).resize().auto(n);};k.getElementWidth=i;f.exports=k;},null);
__d('PluginConnectButtonResize',['DOMDimensions','DOMQuery','PluginResize','Style','getElementPosition'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){if(k)c('Style').set(i,'width',k+'px');c('PluginResize').auto(i,'resize.flow');function l(){var m=c('DOMQuery').scry(document.body,'.uiTypeaheadView')[0];if(!m)return {x:0,y:0};var n=c('getElementPosition')(m),o=c('DOMDimensions').getElementDimensions(m);return {x:n.x+o.width,y:n.y+o.height};}new (c('PluginResize'))(function(){return (Math.max(c('PluginResize').getElementWidth(i),j&&j.offsetWidth,l().x));},function(){return (Math.max(i.offsetHeight,j?j.offsetHeight+j.offsetTop:0,l().y));},'resize.iframe',true).resize().auto();}f.exports=h;},null);
__d('PluginConnection',['Arbiter','CSS','Plugin'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(){};Object.assign(h.prototype,{init:function(i,j,k,event){event=event||c('Plugin').CONNECT;this.identifier=i;this.element=j;this.css=k;c('Arbiter').subscribe([c('Plugin').CONNECT,c('Plugin').DISCONNECT],function(l,m){if(i===m.href)c('CSS')[l===event?'addClass':'removeClass'](j,k);return true;});return this;},connected:function(){return c('CSS').hasClass(this.element,this.css);},connect:function(){return c('Arbiter').inform(c('Plugin').CONNECT,{href:this.identifier},c('Arbiter').BEHAVIOR_STATE);},disconnect:function(){return c('Arbiter').inform(c('Plugin').DISCONNECT,{href:this.identifier},c('Arbiter').BEHAVIOR_STATE);},toggle:function(){return this.connected()?this.disconnect():this.connect();}});h.init=function(i){for(var j,k=0;k<i.length;k++){j=new h();j.init.apply(j,i[k]);}};f.exports=h;},null);
__d('PluginReturn',['invariant','Arbiter','Log','PlatformDialog','Plugin','URI','PlatformWidgetEndpoint'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();c('Arbiter').subscribe(c('PlatformDialog').RESPONSE,function(event,j){if(j.error_code){c('Log').debug('Plugin Return Error (%s): %s',j.error_code,j.error_message||j.error_description);return;}c('Plugin').reload(j.plugin_reload);});var i={auto:function(){c('Arbiter').subscribe(c('Plugin').RELOAD,function(event,j){var k=typeof j=='object'?j.reloadUrl:j;i.reload(k);});},syncPlugins:function(){c('Arbiter').subscribe(c('Plugin').RELOAD,function(event,j){if(j.crossFrame)i.reload(j.reloadUrl);});},reload:function(j){var k=c('URI').getRequestURI().removeQueryData('ret').removeQueryData('act').removeQueryData('hash');if(j){var l=new (c('URI'))(j);!c('PlatformWidgetEndpoint').isPluginEndpoint(l.getPath())?h(0):void 0;k.setPath(l.getPath()).addQueryData(l.getQueryData());}window.location.replace(k.toString());}};f.exports=i;},null);
__d("XSharePluginLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/plugin\/share\/logging\/",{});},null);
__d('PluginShareActions',['AsyncRequest','Event','UnverifiedXD','PluginShareLogTypes','XSharePluginLoggingController'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j,k,l,m,n){c('Event').listen(m,'click',function(o){new (c('AsyncRequest'))().setURI(c('XSharePluginLoggingController').getURIBuilder().getURI()).setData({app_id:n,href:i,layout:j,event:c('PluginShareLogTypes').CLICK,has_iframe:k,referer_url:l}).send();});},triggerMobileIframe:function(i,j){c('Event').listen(j,'click',function(k){c('UnverifiedXD').send({type:'shareTriggerMobileIframe',data:JSON.stringify({href:i})});});}};f.exports=h;},null);
__d('PluginXDReady',['Arbiter','UnverifiedXD'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={handleMessage:function(i){if(!i.method)return;try{c('Arbiter').inform('Connect.Unsafe.'+i.method,JSON.parse(i.params),c('Arbiter').BEHAVIOR_PERSISTENT);}catch(j){}}};b.XdArbiter=h;c('UnverifiedXD').send({xd_action:'plugin_ready',name:window.name});f.exports=null;},null);