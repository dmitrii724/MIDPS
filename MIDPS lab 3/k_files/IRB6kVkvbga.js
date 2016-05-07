/*!CK:110121421!*//*1459901626,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Iqlcg"]); }

__d('EmbeddedVideoQualityControl.react',['cx','fbt','AbstractButton.react','Image.react','React','ReactDOM','shallowCompare'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.shouldComponentUpdate=function(n,o){'use strict';return c('shallowCompare')(this,n,o);};m.prototype.onMouseOut=function(n){'use strict';c('ReactDOM').findDOMNode(this.refs.button).blur();};m.prototype.render=function(){'use strict';var n=c('React').createElement(c('Image.react'),{className:"_5i0o",src:'/images/video/player/embedded_controls/icons/hd.svg'}),o="_3u33"+(!this.props.isHD?' '+"_17bp":''),p=this.props.isHD?i._("Toggle HD off"):i._("Toggle HD on");return (c('React').createElement(c('AbstractButton.react'),{'aria-label':p,className:o,image:n,onClick:this.props.onToggleHD,onMouseOut:this.onMouseOut.bind(this),ref:'button',tabIndex:this.props.tabIndex,type:'button'}));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={isHD:l.bool,onToggleHD:l.func,tabIndex:l.string};f.exports=m;},null);
__d('EmbeddedVideoSettingsMenu.react',['cx','fbt','React','URI','CurrentEnvironment','shallowCompare'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.shouldComponentUpdate=function(n,o){'use strict';return c('shallowCompare')(this,n,o);};m.prototype.createCheckboxItem=function(n,o,p,q){'use strict';var r=null;if(o&&p)r=c('React').createElement('div',{className:"_25d1"});var s=function(){};if(o)s=function(u){q();u.preventDefault();};var t="_4v8v"+(!o?' '+"_5rk-":'');return (c('React').createElement('a',{href:'#',className:t,onBlur:this.props.onBlurMenuItem,onClick:s,onFocus:this.props.onFocusMenuItem,tabIndex:this.props.tabIndex},c('React').createElement('div',{className:"_4v8w"},r),c('React').createElement('div',{className:"_4v8x"},n)));};m.prototype.render=function(){'use strict';var n=this.createCheckboxItem(i._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD),o=this.createCheckboxItem(i._("Descrieri"),this.props.hasSubtitles,this.props.areSubtitlesActive,this.props.onToggleSubtitles),p=i._("Mai multe set\u0103ri"),q=new (c('URI'))('/settings/?tab=videos');if(c('CurrentEnvironment').messengerdotcom){var r=q.getQualifiedURI().getSubdomain();q.setDomain('facebook.com').setSubdomain(r).setProtocol('https');}var s=c('React').createElement('a',{href:q,target:'_blank',className:"_5rl2",onBlur:this.props.onBlurMenuItem,onFocus:this.props.onFocusMenuItem,tabIndex:this.props.tabIndex},p);return (c('React').createElement('div',{className:"_4v8y"},c('React').createElement('div',{className:"_28h1"},n,o,s),c('React').createElement('div',{className:"_4v8z"})));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={areSubtitlesActive:l.bool,hasHD:l.bool,hasSubtitles:l.bool,isHD:l.bool,onToggleHD:l.func,onToggleSubtitles:l.func,tabIndex:l.string};m.defaultProps={tabIndex:'-1'};f.exports=m;},null);
__d('EmbeddedVideoSettingsControl.react',['cx','fbt','ix','AbstractButton.react','Image.react','React','ReactDOM','EmbeddedVideoSettingsMenu.react','setImmediate','shallowCompare'],function a(b,c,d,e,f,g,h,i,j){var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;function n(o){'use strict';l.constructor.call(this,o);this.state={isFocus:false,isFocusMenuItem:false};}n.prototype.shouldComponentUpdate=function(o,p){'use strict';return c('shallowCompare')(this,o,p);};n.prototype.onMouseOut=function(o){'use strict';c('ReactDOM').findDOMNode(this.refs.button).blur();};n.prototype.onButtonFocus=function(o){'use strict';this.setState({isFocus:true});};n.prototype.onButtonBlur=function(){'use strict';this.setState({isFocusMenuItem:false});c('setImmediate')(function(){if(!this.state.isFocusMenuItem)this.setState({isFocus:false});}.bind(this));};n.prototype.render=function(){'use strict';var o=c('React').createElement(c('Image.react'),{className:"_5i0o",src:j('/images/video/player_redesign/gear.png')}),p=i._("Additional Visual Settings"),q=c('React').createElement('div',{className:"_42fl"+(this.state.isFocus?' '+"_4v4":'')},c('React').createElement(c('EmbeddedVideoSettingsMenu.react'),{areSubtitlesActive:this.props.areSubtitlesActive,hasHD:this.props.hasHD,hasSubtitles:this.props.hasSubtitles,isHD:this.props.isHD,onBlurMenuItem:this.onButtonBlur.bind(this),onFocusMenuItem:function(){this.setState({isFocusMenuItem:true});}.bind(this),onToggleHD:this.props.onToggleHD,onToggleSubtitles:this.props.onToggleSubtitles})),r=c('React').createElement(c('AbstractButton.react'),{'aria-label':p,className:"_3u33",image:o,onBlur:this.onButtonBlur.bind(this),onFocus:this.onButtonFocus.bind(this),onMouseOut:this.onMouseOut.bind(this),tabIndex:this.props.tabIndex,type:'button',ref:'button'});return (c('React').createElement('div',{className:"_1esn"},q,r));};n.propTypes={hasHD:m.bool,hasSubtitles:m.bool,isHD:m.bool,areSubtitlesActive:m.bool,onToggleHD:m.func,onToggleSubtitles:m.func,tabIndex:m.string};n.defaultProps={tabIndex:'-1'};f.exports=n;},null);