// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('giggin.components.gigs');
goog.require('cljs.core');
goog.require('giggin.state');
giggin.components.gigs.gigs = (function giggin$components$gigs$gigs(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),(function (){var iter__4652__auto__ = (function giggin$components$gigs$gigs_$_iter__24598(s__24599){
return (new cljs.core.LazySeq(null,(function (){
var s__24599__$1 = s__24599;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__24599__$1);
if(temp__5720__auto__){
var s__24599__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24599__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__24599__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__24601 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__24600 = (0);
while(true){
if((i__24600 < size__4651__auto__)){
var map__24602 = cljs.core._nth.call(null,c__4650__auto__,i__24600);
var map__24602__$1 = cljs.core.__destructure_map.call(null,map__24602);
var id = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append.call(null,b__24601,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--primary.float--right.tooltip","div.btn.btn--primary.float--right.tooltip",-597010778),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24600,map__24602,map__24602__$1,id,img,title,price,desc,c__4650__auto__,size__4651__auto__,b__24601,s__24599__$2,temp__5720__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,giggin.state.orders,cljs.core.update,id,cljs.core.inc);
});})(i__24600,map__24602,map__24602__$1,id,img,title,price,desc,c__4650__auto__,size__4651__auto__,b__24601,s__24599__$2,temp__5720__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),price], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null)], null)], null));

var G__24604 = (i__24600 + (1));
i__24600 = G__24604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24601),giggin$components$gigs$gigs_$_iter__24598.call(null,cljs.core.chunk_rest.call(null,s__24599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24601),null);
}
} else {
var map__24603 = cljs.core.first.call(null,s__24599__$2);
var map__24603__$1 = cljs.core.__destructure_map.call(null,map__24603);
var id = cljs.core.get.call(null,map__24603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.call(null,map__24603__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.call(null,map__24603__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.call(null,map__24603__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.call(null,map__24603__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--primary.float--right.tooltip","div.btn.btn--primary.float--right.tooltip",-597010778),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__24603,map__24603__$1,id,img,title,price,desc,s__24599__$2,temp__5720__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,giggin.state.orders,cljs.core.update,id,cljs.core.inc);
});})(map__24603,map__24603__$1,id,img,title,price,desc,s__24599__$2,temp__5720__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),price], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null)], null)], null),giggin$components$gigs$gigs_$_iter__24598.call(null,cljs.core.rest.call(null,s__24599__$2)));
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

//# sourceMappingURL=gigs89780DC.js.map
