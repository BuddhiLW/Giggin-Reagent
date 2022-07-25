// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16577__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16578__i = 0, G__16578__a = new Array(arguments.length -  0);
while (G__16578__i < G__16578__a.length) {G__16578__a[G__16578__i] = arguments[G__16578__i + 0]; ++G__16578__i;}
  args = new cljs.core.IndexedSeq(G__16578__a,0,null);
} 
return G__16577__delegate.call(this,args);};
G__16577.cljs$lang$maxFixedArity = 0;
G__16577.cljs$lang$applyTo = (function (arglist__16579){
var args = cljs.core.seq(arglist__16579);
return G__16577__delegate(args);
});
G__16577.cljs$core$IFn$_invoke$arity$variadic = G__16577__delegate;
return G__16577;
})()
);

(o.error = (function() { 
var G__16580__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16581__i = 0, G__16581__a = new Array(arguments.length -  0);
while (G__16581__i < G__16581__a.length) {G__16581__a[G__16581__i] = arguments[G__16581__i + 0]; ++G__16581__i;}
  args = new cljs.core.IndexedSeq(G__16581__a,0,null);
} 
return G__16580__delegate.call(this,args);};
G__16580.cljs$lang$maxFixedArity = 0;
G__16580.cljs$lang$applyTo = (function (arglist__16582){
var args = cljs.core.seq(arglist__16582);
return G__16580__delegate(args);
});
G__16580.cljs$core$IFn$_invoke$arity$variadic = G__16580__delegate;
return G__16580;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
