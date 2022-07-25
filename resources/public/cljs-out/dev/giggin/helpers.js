// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('giggin.helpers');
goog.require('cljs.core');
giggin.helpers.format_price = (function giggin$helpers$format_price(cents){
return [" R$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cents / (100)))].join('');
});
giggin.helpers.toggle_modal = (function giggin$helpers$toggle_modal(var_args){
var G__19734 = arguments.length;
switch (G__19734) {
case 2:
return giggin.helpers.toggle_modal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return giggin.helpers.toggle_modal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(giggin.helpers.toggle_modal.cljs$core$IFn$_invoke$arity$2 = (function (p__19735,modal){
var map__19736 = p__19735;
var map__19736__$1 = cljs.core.__destructure_map.call(null,map__19736);
var active = cljs.core.get.call(null,map__19736__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.swap_BANG_.call(null,modal,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),active);
}));

(giggin.helpers.toggle_modal.cljs$core$IFn$_invoke$arity$3 = (function (p__19737,modal,values){
var map__19738 = p__19737;
var map__19738__$1 = cljs.core.__destructure_map.call(null,map__19738);
var active = cljs.core.get.call(null,map__19738__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var gig = cljs.core.get.call(null,map__19738__$1,new cljs.core.Keyword(null,"gig","gig",-702014211));
cljs.core.swap_BANG_.call(null,modal,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),active);

return cljs.core.reset_BANG_.call(null,values,gig);
}));

(giggin.helpers.toggle_modal.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=helpers.js.map
