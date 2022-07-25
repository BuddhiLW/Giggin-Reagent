// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('devtools.formatters.state');
goog.require('cljs.core');
devtools.formatters.state._STAR_current_state_STAR_ = null;
devtools.formatters.state.valid_current_state_QMARK_ = (function devtools$formatters$state$valid_current_state_QMARK_(){
return (!((devtools.formatters.state._STAR_current_state_STAR_ == null)));
});
devtools.formatters.state.get_default_state = (function devtools$formatters$state$get_default_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
devtools.formatters.state.get_current_state = (function devtools$formatters$state$get_current_state(){
if(devtools.formatters.state.valid_current_state_QMARK_.call(null)){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return devtools.formatters.state._STAR_current_state_STAR_;
});
devtools.formatters.state.update_current_state_BANG_ = (function devtools$formatters$state$update_current_state_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___17877 = arguments.length;
var i__4865__auto___17878 = (0);
while(true){
if((i__4865__auto___17878 < len__4864__auto___17877)){
args__4870__auto__.push((arguments[i__4865__auto___17878]));

var G__17879 = (i__4865__auto___17878 + (1));
i__4865__auto___17878 = G__17879;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(devtools.formatters.state.valid_current_state_QMARK_.call(null)){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return (devtools.formatters.state._STAR_current_state_STAR_ = cljs.core.apply.call(null,f,devtools.formatters.state._STAR_current_state_STAR_,args));
}));

(devtools.formatters.state.update_current_state_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.state.update_current_state_BANG_.cljs$lang$applyTo = (function (seq17875){
var G__17876 = cljs.core.first.call(null,seq17875);
var seq17875__$1 = cljs.core.next.call(null,seq17875);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17876,seq17875__$1);
}));

devtools.formatters.state.push_object_to_current_history_BANG_ = (function devtools$formatters$state$push_object_to_current_history_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,object);
});
devtools.formatters.state.get_current_history = (function devtools$formatters$state$get_current_history(){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.is_circular_QMARK_ = (function devtools$formatters$state$is_circular_QMARK_(object){
var history = devtools.formatters.state.get_current_history.call(null);
return cljs.core.some.call(null,(function (p1__17880_SHARP_){
return (p1__17880_SHARP_ === object);
}),history);
});
devtools.formatters.state.get_last_object_from_current_history = (function devtools$formatters$state$get_last_object_from_current_history(){
return cljs.core.first.call(null,devtools.formatters.state.get_current_history.call(null));
});
devtools.formatters.state.get_second_last_object_from_current_history = (function devtools$formatters$state$get_second_last_object_from_current_history(){
return cljs.core.second.call(null,devtools.formatters.state.get_current_history.call(null));
});
devtools.formatters.state.present_path_segment = (function devtools$formatters$state$present_path_segment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___17887 = arguments.length;
var i__4865__auto___17888 = (0);
while(true){
if((i__4865__auto___17888 < len__4864__auto___17887)){
args__4870__auto__.push((arguments[i__4865__auto___17888]));

var G__17889 = (i__4865__auto___17888 + (1));
i__4865__auto___17888 = G__17889;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.formatters.state.present_path_segment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.formatters.state.present_path_segment.cljs$core$IFn$_invoke$arity$variadic = (function (v,p__17883){
var vec__17884 = p__17883;
var starting_index = cljs.core.nth.call(null,vec__17884,(0),null);
if(typeof v === 'string'){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return v;
} else {
if(((typeof v === 'number') && (typeof starting_index === 'number'))){
return (v + starting_index);
} else {
if(typeof v === 'number'){
return v;
} else {
return "?";

}
}
}
}
}));

(devtools.formatters.state.present_path_segment.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.state.present_path_segment.cljs$lang$applyTo = (function (seq17881){
var G__17882 = cljs.core.first.call(null,seq17881);
var seq17881__$1 = cljs.core.next.call(null,seq17881);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17882,seq17881__$1);
}));

devtools.formatters.state.seek_path_segment = (function devtools$formatters$state$seek_path_segment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___17901 = arguments.length;
var i__4865__auto___17902 = (0);
while(true){
if((i__4865__auto___17902 < len__4864__auto___17901)){
args__4870__auto__.push((arguments[i__4865__auto___17902]));

var G__17903 = (i__4865__auto___17902 + (1));
i__4865__auto___17902 = G__17903;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return devtools.formatters.state.seek_path_segment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(devtools.formatters.state.seek_path_segment.cljs$core$IFn$_invoke$arity$variadic = (function (coll,val,p__17893){
var vec__17894 = p__17893;
var seq_SINGLEQUOTE_d_map_QMARK_ = cljs.core.nth.call(null,vec__17894,(0),null);
var starting_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,devtools.formatters.state.get_last_object_from_current_history.call(null)));
var _STAR_ = (function (p__17897){
var vec__17898 = p__17897;
var k = cljs.core.nth.call(null,vec__17898,(0),null);
var v = cljs.core.nth.call(null,vec__17898,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = seq_SINGLEQUOTE_d_map_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (k === val);
} else {
return and__4251__auto__;
}
})())){
return devtools.formatters.state.present_path_segment.call(null,k);
} else {
if((v === val)){
return devtools.formatters.state.present_path_segment.call(null,k,starting_index);
} else {
return null;
}
}
});
return cljs.core.some.call(null,_STAR_,coll);
}));

(devtools.formatters.state.seek_path_segment.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.state.seek_path_segment.cljs$lang$applyTo = (function (seq17890){
var G__17891 = cljs.core.first.call(null,seq17890);
var seq17890__$1 = cljs.core.next.call(null,seq17890);
var G__17892 = cljs.core.first.call(null,seq17890__$1);
var seq17890__$2 = cljs.core.next.call(null,seq17890__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17891,G__17892,seq17890__$2);
}));

devtools.formatters.state.build_path_segment = (function devtools$formatters$state$build_path_segment(parent_object,object){
if(cljs.core.map_QMARK_.call(null,parent_object)){
return devtools.formatters.state.seek_path_segment.call(null,cljs.core.seq.call(null,parent_object),object,true);
} else {
if(cljs.core.sequential_QMARK_.call(null,parent_object)){
return devtools.formatters.state.seek_path_segment.call(null,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,x], null);
}),parent_object),object);
} else {
if(((cljs.core.set_QMARK_.call(null,parent_object)) && (((cljs.core.contains_QMARK_.call(null,parent_object,object)) && (((typeof object === 'string') || ((((object instanceof cljs.core.Keyword)) || (cljs.core.integer_QMARK_.call(null,object)))))))))){
return object;
} else {
if(((cljs.core.set_QMARK_.call(null,parent_object)) && (cljs.core.contains_QMARK_.call(null,parent_object,object)))){
return devtools.formatters.state.seek_path_segment.call(null,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,x], null);
}),parent_object),object);
} else {
return null;
}
}
}
}
});
devtools.formatters.state.mapping_QMARK_ = (function devtools$formatters$state$mapping_QMARK_(history,obj){
var first_kw = ((((cljs.core.vector_QMARK_.call(null,obj)) && (cljs.core.map_QMARK_.call(null,history))))?cljs.core.nth.call(null,obj,(0),null):null);
var valid_kw_QMARK_ = (function (){var and__4251__auto__ = first_kw;
if(cljs.core.truth_(and__4251__auto__)){
return (((((first_kw instanceof cljs.core.Keyword)) || (((typeof first_kw === 'string') || (typeof first_kw === 'number'))))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,obj),(2))));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(valid_kw_QMARK_)){
return cljs.core.contains_QMARK_.call(null,history,first_kw);
} else {
return null;
}
});
devtools.formatters.state.ignore_path_in_fake_vector = (function devtools$formatters$state$ignore_path_in_fake_vector(history,obj,path){
if(cljs.core.truth_(devtools.formatters.state.mapping_QMARK_.call(null,history,obj))){
var or__4253__auto__ = path;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return null;
}
});
devtools.formatters.state.find_path_in_fake_vector = (function devtools$formatters$state$find_path_in_fake_vector(history,path){
var second_last_history = devtools.formatters.state.get_second_last_object_from_current_history.call(null);
if(cljs.core.truth_(devtools.formatters.state.mapping_QMARK_.call(null,second_last_history,history))){
return cljs.core.conj.call(null,(function (){var or__4253__auto__ = path;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.nth.call(null,history,(0),null));
} else {
return null;
}
});
devtools.formatters.state.find_path = (function devtools$formatters$state$find_path(history,obj,path){
var path_segment = devtools.formatters.state.build_path_segment.call(null,history,obj);
if((!((path_segment == null)))){
return cljs.core.conj.call(null,(function (){var or__4253__auto__ = path;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),path_segment);
} else {
return null;
}
});
devtools.formatters.state.extend_path_info = (function devtools$formatters$state$extend_path_info(path_info,object){
var parent_object = devtools.formatters.state.get_last_object_from_current_history.call(null);
var or__4253__auto__ = devtools.formatters.state.ignore_path_in_fake_vector.call(null,parent_object,object,path_info);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = devtools.formatters.state.find_path_in_fake_vector.call(null,parent_object,path_info);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = devtools.formatters.state.find_path.call(null,parent_object,object,path_info);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return path_info;
}
}
}
});
devtools.formatters.state.add_object_to_current_path_info_BANG_ = (function devtools$formatters$state$add_object_to_current_path_info_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"path-info","path-info",-1932254250),devtools.formatters.state.extend_path_info,object);
});
devtools.formatters.state.get_current_path_info = (function devtools$formatters$state$get_current_path_info(){
return new cljs.core.Keyword(null,"path-info","path-info",-1932254250).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.prevent_recursion_QMARK_ = (function devtools$formatters$state$prevent_recursion_QMARK_(){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null)));
});
devtools.formatters.state.set_prevent_recursion = (function devtools$formatters$state$set_prevent_recursion(state,val){
if((!((val == null)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606));
}
});
devtools.formatters.state.get_managed_print_level = (function devtools$formatters$state$get_managed_print_level(){
return new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.set_managed_print_level = (function devtools$formatters$state$set_managed_print_level(state,val){
if((!((val == null)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473));
}
});
devtools.formatters.state.get_depth_budget = (function devtools$formatters$state$get_depth_budget(){
return new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.set_depth_budget = (function devtools$formatters$state$set_depth_budget(state,val){
if((!((val == null)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888));
}
});
devtools.formatters.state.reset_depth_limits = (function devtools$formatters$state$reset_depth_limits(state){
return devtools.formatters.state.set_managed_print_level.call(null,devtools.formatters.state.set_depth_budget.call(null,state,null),null);
});

//# sourceMappingURL=state.js.map
