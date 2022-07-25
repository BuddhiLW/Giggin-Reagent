// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22385){
var map__22386 = p__22385;
var map__22386__$1 = cljs.core.__destructure_map.call(null,map__22386);
var m = map__22386__$1;
var n = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22387_22415 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22388_22416 = null;
var count__22389_22417 = (0);
var i__22390_22418 = (0);
while(true){
if((i__22390_22418 < count__22389_22417)){
var f_22419 = cljs.core._nth.call(null,chunk__22388_22416,i__22390_22418);
cljs.core.println.call(null,"  ",f_22419);


var G__22420 = seq__22387_22415;
var G__22421 = chunk__22388_22416;
var G__22422 = count__22389_22417;
var G__22423 = (i__22390_22418 + (1));
seq__22387_22415 = G__22420;
chunk__22388_22416 = G__22421;
count__22389_22417 = G__22422;
i__22390_22418 = G__22423;
continue;
} else {
var temp__5720__auto___22424 = cljs.core.seq.call(null,seq__22387_22415);
if(temp__5720__auto___22424){
var seq__22387_22425__$1 = temp__5720__auto___22424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22387_22425__$1)){
var c__4679__auto___22426 = cljs.core.chunk_first.call(null,seq__22387_22425__$1);
var G__22427 = cljs.core.chunk_rest.call(null,seq__22387_22425__$1);
var G__22428 = c__4679__auto___22426;
var G__22429 = cljs.core.count.call(null,c__4679__auto___22426);
var G__22430 = (0);
seq__22387_22415 = G__22427;
chunk__22388_22416 = G__22428;
count__22389_22417 = G__22429;
i__22390_22418 = G__22430;
continue;
} else {
var f_22431 = cljs.core.first.call(null,seq__22387_22425__$1);
cljs.core.println.call(null,"  ",f_22431);


var G__22432 = cljs.core.next.call(null,seq__22387_22425__$1);
var G__22433 = null;
var G__22434 = (0);
var G__22435 = (0);
seq__22387_22415 = G__22432;
chunk__22388_22416 = G__22433;
count__22389_22417 = G__22434;
i__22390_22418 = G__22435;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22436 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22436);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22436)))?cljs.core.second.call(null,arglists_22436):arglists_22436));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22391_22437 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22392_22438 = null;
var count__22393_22439 = (0);
var i__22394_22440 = (0);
while(true){
if((i__22394_22440 < count__22393_22439)){
var vec__22403_22441 = cljs.core._nth.call(null,chunk__22392_22438,i__22394_22440);
var name_22442 = cljs.core.nth.call(null,vec__22403_22441,(0),null);
var map__22406_22443 = cljs.core.nth.call(null,vec__22403_22441,(1),null);
var map__22406_22444__$1 = cljs.core.__destructure_map.call(null,map__22406_22443);
var doc_22445 = cljs.core.get.call(null,map__22406_22444__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22446 = cljs.core.get.call(null,map__22406_22444__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22442);

cljs.core.println.call(null," ",arglists_22446);

if(cljs.core.truth_(doc_22445)){
cljs.core.println.call(null," ",doc_22445);
} else {
}


var G__22447 = seq__22391_22437;
var G__22448 = chunk__22392_22438;
var G__22449 = count__22393_22439;
var G__22450 = (i__22394_22440 + (1));
seq__22391_22437 = G__22447;
chunk__22392_22438 = G__22448;
count__22393_22439 = G__22449;
i__22394_22440 = G__22450;
continue;
} else {
var temp__5720__auto___22451 = cljs.core.seq.call(null,seq__22391_22437);
if(temp__5720__auto___22451){
var seq__22391_22452__$1 = temp__5720__auto___22451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22391_22452__$1)){
var c__4679__auto___22453 = cljs.core.chunk_first.call(null,seq__22391_22452__$1);
var G__22454 = cljs.core.chunk_rest.call(null,seq__22391_22452__$1);
var G__22455 = c__4679__auto___22453;
var G__22456 = cljs.core.count.call(null,c__4679__auto___22453);
var G__22457 = (0);
seq__22391_22437 = G__22454;
chunk__22392_22438 = G__22455;
count__22393_22439 = G__22456;
i__22394_22440 = G__22457;
continue;
} else {
var vec__22407_22458 = cljs.core.first.call(null,seq__22391_22452__$1);
var name_22459 = cljs.core.nth.call(null,vec__22407_22458,(0),null);
var map__22410_22460 = cljs.core.nth.call(null,vec__22407_22458,(1),null);
var map__22410_22461__$1 = cljs.core.__destructure_map.call(null,map__22410_22460);
var doc_22462 = cljs.core.get.call(null,map__22410_22461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22463 = cljs.core.get.call(null,map__22410_22461__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22459);

cljs.core.println.call(null," ",arglists_22463);

if(cljs.core.truth_(doc_22462)){
cljs.core.println.call(null," ",doc_22462);
} else {
}


var G__22464 = cljs.core.next.call(null,seq__22391_22452__$1);
var G__22465 = null;
var G__22466 = (0);
var G__22467 = (0);
seq__22391_22437 = G__22464;
chunk__22392_22438 = G__22465;
count__22393_22439 = G__22466;
i__22394_22440 = G__22467;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__22411 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22412 = null;
var count__22413 = (0);
var i__22414 = (0);
while(true){
if((i__22414 < count__22413)){
var role = cljs.core._nth.call(null,chunk__22412,i__22414);
var temp__5720__auto___22468__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22468__$1)){
var spec_22469 = temp__5720__auto___22468__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22469));
} else {
}


var G__22470 = seq__22411;
var G__22471 = chunk__22412;
var G__22472 = count__22413;
var G__22473 = (i__22414 + (1));
seq__22411 = G__22470;
chunk__22412 = G__22471;
count__22413 = G__22472;
i__22414 = G__22473;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__22411);
if(temp__5720__auto____$1){
var seq__22411__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22411__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__22411__$1);
var G__22474 = cljs.core.chunk_rest.call(null,seq__22411__$1);
var G__22475 = c__4679__auto__;
var G__22476 = cljs.core.count.call(null,c__4679__auto__);
var G__22477 = (0);
seq__22411 = G__22474;
chunk__22412 = G__22475;
count__22413 = G__22476;
i__22414 = G__22477;
continue;
} else {
var role = cljs.core.first.call(null,seq__22411__$1);
var temp__5720__auto___22478__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22478__$2)){
var spec_22479 = temp__5720__auto___22478__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22479));
} else {
}


var G__22480 = cljs.core.next.call(null,seq__22411__$1);
var G__22481 = null;
var G__22482 = (0);
var G__22483 = (0);
seq__22411 = G__22480;
chunk__22412 = G__22481;
count__22413 = G__22482;
i__22414 = G__22483;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__22484 = cljs.core.conj.call(null,via,t);
var G__22485 = cljs.core.ex_cause.call(null,t);
via = G__22484;
t = G__22485;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22488 = datafied_throwable;
var map__22488__$1 = cljs.core.__destructure_map.call(null,map__22488);
var via = cljs.core.get.call(null,map__22488__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__22488__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__22488__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22489 = cljs.core.last.call(null,via);
var map__22489__$1 = cljs.core.__destructure_map.call(null,map__22489);
var type = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22490 = data;
var map__22490__$1 = cljs.core.__destructure_map.call(null,map__22490);
var problems = cljs.core.get.call(null,map__22490__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__22490__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__22490__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22491 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__22491__$1 = cljs.core.__destructure_map.call(null,map__22491);
var top_data = map__22491__$1;
var source = cljs.core.get.call(null,map__22491__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__22492 = phase;
var G__22492__$1 = (((G__22492 instanceof cljs.core.Keyword))?G__22492.fqn:null);
switch (G__22492__$1) {
case "read-source":
var map__22493 = data;
var map__22493__$1 = cljs.core.__destructure_map.call(null,map__22493);
var line = cljs.core.get.call(null,map__22493__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22493__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22494 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__22494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22494);
var G__22494__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22494__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22494__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22494__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22495 = top_data;
var G__22495__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22495,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22495);
var G__22495__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22495__$1);
var G__22495__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22495__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22495__$2);
var G__22495__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22495__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22495__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22495__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22495__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22496 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22496,(0),null);
var method = cljs.core.nth.call(null,vec__22496,(1),null);
var file = cljs.core.nth.call(null,vec__22496,(2),null);
var line = cljs.core.nth.call(null,vec__22496,(3),null);
var G__22499 = top_data;
var G__22499__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__22499,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22499);
var G__22499__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__22499__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22499__$1);
var G__22499__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__22499__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22499__$2);
var G__22499__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22499__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22499__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22499__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22499__$4;
}

break;
case "execution":
var vec__22500 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22500,(0),null);
var method = cljs.core.nth.call(null,vec__22500,(1),null);
var file = cljs.core.nth.call(null,vec__22500,(2),null);
var line = cljs.core.nth.call(null,vec__22500,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__22487_SHARP_){
var or__4253__auto__ = (p1__22487_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__22487_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__22503 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22503__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__22503,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22503);
var G__22503__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22503__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22503__$1);
var G__22503__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.call(null,G__22503__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22503__$2);
var G__22503__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__22503__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22503__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22503__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22503__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22492__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22507){
var map__22508 = p__22507;
var map__22508__$1 = cljs.core.__destructure_map.call(null,map__22508);
var triage_data = map__22508__$1;
var phase = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22509 = phase;
var G__22509__$1 = (((G__22509 instanceof cljs.core.Keyword))?G__22509.fqn:null);
switch (G__22509__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22510_22519 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22511_22520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22512_22521 = true;
var _STAR_print_fn_STAR__temp_val__22513_22522 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22512_22521);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22513_22522);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__22505_SHARP_){
return cljs.core.dissoc.call(null,p1__22505_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22511_22520);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22510_22519);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22514_22523 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22515_22524 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22516_22525 = true;
var _STAR_print_fn_STAR__temp_val__22517_22526 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22516_22525);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22517_22526);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__22506_SHARP_){
return cljs.core.dissoc.call(null,p1__22506_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22515_22524);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22514_22523);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22509__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
