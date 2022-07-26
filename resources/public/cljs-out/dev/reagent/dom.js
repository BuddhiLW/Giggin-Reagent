// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__17115 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__17116 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__17116);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__17117 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__17118 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__17118);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__17117);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__17115);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__17120 = arguments.length;
switch (G__17120) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__17121 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__17121,(0),null);
var callback = cljs.core.nth.call(null,vec__17121,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__17125_17141 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__17126_17142 = null;
var count__17127_17143 = (0);
var i__17128_17144 = (0);
while(true){
if((i__17128_17144 < count__17127_17143)){
var vec__17135_17145 = cljs.core._nth.call(null,chunk__17126_17142,i__17128_17144);
var container_17146 = cljs.core.nth.call(null,vec__17135_17145,(0),null);
var comp_17147 = cljs.core.nth.call(null,vec__17135_17145,(1),null);
reagent.dom.re_render_component.call(null,comp_17147,container_17146);


var G__17148 = seq__17125_17141;
var G__17149 = chunk__17126_17142;
var G__17150 = count__17127_17143;
var G__17151 = (i__17128_17144 + (1));
seq__17125_17141 = G__17148;
chunk__17126_17142 = G__17149;
count__17127_17143 = G__17150;
i__17128_17144 = G__17151;
continue;
} else {
var temp__5720__auto___17152 = cljs.core.seq.call(null,seq__17125_17141);
if(temp__5720__auto___17152){
var seq__17125_17153__$1 = temp__5720__auto___17152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17125_17153__$1)){
var c__4679__auto___17154 = cljs.core.chunk_first.call(null,seq__17125_17153__$1);
var G__17155 = cljs.core.chunk_rest.call(null,seq__17125_17153__$1);
var G__17156 = c__4679__auto___17154;
var G__17157 = cljs.core.count.call(null,c__4679__auto___17154);
var G__17158 = (0);
seq__17125_17141 = G__17155;
chunk__17126_17142 = G__17156;
count__17127_17143 = G__17157;
i__17128_17144 = G__17158;
continue;
} else {
var vec__17138_17159 = cljs.core.first.call(null,seq__17125_17153__$1);
var container_17160 = cljs.core.nth.call(null,vec__17138_17159,(0),null);
var comp_17161 = cljs.core.nth.call(null,vec__17138_17159,(1),null);
reagent.dom.re_render_component.call(null,comp_17161,container_17160);


var G__17162 = cljs.core.next.call(null,seq__17125_17153__$1);
var G__17163 = null;
var G__17164 = (0);
var G__17165 = (0);
seq__17125_17141 = G__17162;
chunk__17126_17142 = G__17163;
count__17127_17143 = G__17164;
i__17128_17144 = G__17165;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
