// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('giggin.components.orders');
goog.require('cljs.core');
goog.require('giggin.state');
goog.require('giggin.helpers');
goog.require('giggin.components.checkout_modal');
giggin.components.orders.id_key = (function giggin$components$orders$id_key(id,key){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))], null));
});
giggin.components.orders.total = (function giggin$components$orders$total(){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p__20127){
var vec__20128 = p__20127;
var id = cljs.core.nth.call(null,vec__20128,(0),null);
var quant = cljs.core.nth.call(null,vec__20128,(1),null);
return (quant * giggin.components.orders.id_key.call(null,id,"price"));
}),cljs.core.deref.call(null,giggin.state.orders)));
});
giggin.components.orders.total_component = (function giggin$components$orders$total_component(orders){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.total","div.total",1164460301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),giggin.helpers.format_price.call(null,giggin.components.orders.total.call(null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,orders,cljs.core.PersistentArrayMap.EMPTY);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--delete","i.icon.icon--delete",1739225438)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.checkout_modal.checkout_modal], null)], null);
});
giggin.components.orders.empty_orders_component = (function giggin$components$orders$empty_orders_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty","div.empty",47401225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"You don't have any orders"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtitle","div.subtitle",-1871234920),"Click on a + to add an order"], null)], null);
});
giggin.components.orders.order_item = (function giggin$components$orders$order_item(id,quant,orders){
var id_key = cljs.core.partial.call(null,giggin.components.orders.id_key,id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),id_key.call(null,"img"),new cljs.core.Keyword(null,"alt","alt",-3214426),id_key.call(null,"title")], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_key.call(null,"title"))," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quant)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),giggin.helpers.format_price.call(null,(id_key.call(null,"price") * quant))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bnt.btn-link.tooltip","button.bnt.btn-link.tooltip",-946430638),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,orders,cljs.core.dissoc,id);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null);
});
giggin.components.orders.orders_component = (function giggin$components$orders$orders_component(orders){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order","div.order",-190189494),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),(function (){var iter__4652__auto__ = (function giggin$components$orders$orders_component_$_iter__20131(s__20132){
return (new cljs.core.LazySeq(null,(function (){
var s__20132__$1 = s__20132;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__20132__$1);
if(temp__5720__auto__){
var s__20132__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20132__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__20132__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__20134 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__20133 = (0);
while(true){
if((i__20133 < size__4651__auto__)){
var vec__20135 = cljs.core._nth.call(null,c__4650__auto__,i__20133);
var id = cljs.core.nth.call(null,vec__20135,(0),null);
var quant = cljs.core.nth.call(null,vec__20135,(1),null);
cljs.core.chunk_append.call(null,b__20134,giggin.components.orders.order_item.call(null,id,quant,orders));

var G__20141 = (i__20133 + (1));
i__20133 = G__20141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20134),giggin$components$orders$orders_component_$_iter__20131.call(null,cljs.core.chunk_rest.call(null,s__20132__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20134),null);
}
} else {
var vec__20138 = cljs.core.first.call(null,s__20132__$2);
var id = cljs.core.nth.call(null,vec__20138,(0),null);
var quant = cljs.core.nth.call(null,vec__20138,(1),null);
return cljs.core.cons.call(null,giggin.components.orders.order_item.call(null,id,quant,orders),giggin$components$orders$orders_component_$_iter__20131.call(null,cljs.core.rest.call(null,s__20132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.deref.call(null,orders));
})(),giggin.components.orders.total_component.call(null,giggin.state.orders)], null)], null);
});
giggin.components.orders.orders = (function giggin$components$orders$orders(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,giggin.state.orders)))?giggin.components.orders.empty_orders_component.call(null):giggin.components.orders.orders_component.call(null,giggin.state.orders))], null);
});

//# sourceMappingURL=orders.js.map
