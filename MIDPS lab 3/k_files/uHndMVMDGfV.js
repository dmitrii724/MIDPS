/*!CK:1101285783!*//*1459907642,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GCn9f"]); }

__d('EmbeddedVideoWatchAndScrollControl.react',['cx','fbt','ix','AbstractButton.react','Image.react','React','ReactDOM','shallowCompare'],function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;n.prototype.shouldComponentUpdate=function(o,p){return c('shallowCompare')(this,o,p);};n.prototype.onMouseOut=function(o){c('ReactDOM').findDOMNode(this.refs.button).blur();};n.prototype.onButtonClick=function(){this.props.onEnterWatchAndScroll&&this.props.onEnterWatchAndScroll();};n.prototype.render=function(){var o=c('React').createElement(c('Image.react'),{className:"_5i0o _1r_x",src:j('/images/video/player/embedded_controls/icons/wns.png')});return (c('React').createElement(c('AbstractButton.react'),{'aria-label':i._("Enter Watch And Scroll"),className:"_3u33",image:o,onClick:this.onButtonClick.bind(this),onMouseOut:this.onMouseOut.bind(this),ref:'button',tabIndex:this.props.tabIndex,type:'button'}));};function n(){k.apply(this,arguments);}n.propTypes={onEnterWatchAndScroll:m.func,tabIndex:m.string};f.exports=n;},null);