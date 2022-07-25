// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('giggin.components.gigs');
goog.require('cljs.core');
goog.require('giggin.state');
goog.require('giggin.helpers');
goog.require('giggin.components.gig_editor');
goog.require('reagent.core');
/**
 * Display the gigs, based on the database. Also, tie addiction of orders to the
 *   button 'Add to order'.
 */
giggin.components.gigs.gig = (function giggin$components$gigs$gig(id,img,title,price,desc,modal,gig_data,values){
var add_to_order = (function (p1__20462_SHARP_){
return cljs.core.swap_BANG_.call(null,giggin.state.orders,cljs.core.update,p1__20462_SHARP_,cljs.core.inc);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork.gig__edit","img.gig__artwork.gig__edit",1044281950),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return giggin.helpers.toggle_modal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"gig","gig",-702014211),gig_data], null),modal,values);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--primary.float--right.tooltip","div.btn.btn--primary.float--right.tooltip",-597010778),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return add_to_order.call(null,id);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),giggin.helpers.format_price.call(null,price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null)], null)], null);
});
/**
 * Element that enables the modal for the =gig-editor=-component.
 */
giggin.components.gigs.modal_add = (function giggin$components$gigs$modal_add(modal){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.add-gig","button.add-gig",-1483986546),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return giggin.helpers.toggle_modal.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),true], null),modal);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.add__title","div.add__title",-1668889979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"------"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Add gig"], null)], null)], null);
});
/**
 * Display the gigs in the local database, as well as accumulated states.
 *   Also, has the =modal-add= and =gig-editor= components, which interface
 *   the inserted data into the model, to the current state of the application.
 *   Finally, the =gig=-component displays the gigs from the current state, e.i.,
 *   =@state/gigs=.
 */
giggin.components.gigs.gigs = (function giggin$components$gigs$gigs(){
var modal = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null));
var values = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),["gig-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join(''),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"img","img",1442687358),"",new cljs.core.Keyword(null,"price","price",22129180),(0),new cljs.core.Keyword(null,"sold-out","sold-out",-139716632),false], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),giggin.components.gigs.modal_add.call(null,modal),giggin.components.gig_editor.gig_editor.call(null,modal,values),(function (){var iter__4652__auto__ = (function giggin$components$gigs$gigs_$_iter__20463(s__20464){
return (new cljs.core.LazySeq(null,(function (){
var s__20464__$1 = s__20464;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__20464__$1);
if(temp__5720__auto__){
var s__20464__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20464__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__20464__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__20466 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__20465 = (0);
while(true){
if((i__20465 < size__4651__auto__)){
var map__20467 = cljs.core._nth.call(null,c__4650__auto__,i__20465);
var map__20467__$1 = cljs.core.__destructure_map.call(null,map__20467);
var gig_data = map__20467__$1;
var id = cljs.core.get.call(null,map__20467__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.call(null,map__20467__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.call(null,map__20467__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.call(null,map__20467__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.call(null,map__20467__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append.call(null,b__20466,giggin.components.gigs.gig.call(null,id,img,title,price,desc,modal,gig_data,values));

var G__20469 = (i__20465 + (1));
i__20465 = G__20469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20466),giggin$components$gigs$gigs_$_iter__20463.call(null,cljs.core.chunk_rest.call(null,s__20464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20466),null);
}
} else {
var map__20468 = cljs.core.first.call(null,s__20464__$2);
var map__20468__$1 = cljs.core.__destructure_map.call(null,map__20468);
var gig_data = map__20468__$1;
var id = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons.call(null,giggin.components.gigs.gig.call(null,id,img,title,price,desc,modal,gig_data,values),giggin$components$gigs$gigs_$_iter__20463.call(null,cljs.core.rest.call(null,s__20464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,giggin.state.gigs)));
})()], null)], null);
});
});

//# sourceMappingURL=gigs.js.map
