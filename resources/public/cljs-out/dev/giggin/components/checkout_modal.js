// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('giggin.components.checkout_modal');
goog.require('cljs.core');
goog.require('reagent.core');
giggin.components.checkout_modal.checkout_modal = (function giggin$components$checkout_modal$checkout_modal(){
var modal = reagent.core.atom.call(null,false);
var toggle_modal = (function (p1__21565_SHARP_){
return cljs.core.reset_BANG_.call(null,modal,p1__21565_SHARP_);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkout-modal","div.checkout-modal",-1939844983),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--secondary","button.btn.btn--secondary",-1244606839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return toggle_modal.call(null,true);
})], null),"Checkout"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),(cljs.core.truth_(cljs.core.deref.call(null,modal))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"active"], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__overlay","div.modal__overlay",2068934002)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__container","div.modal__container",-2058913087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__body","div.modal__body",-1293108602),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.payment","div.payment",1880370085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.payment-logo","img.payment-logo",-1772119075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/paypal.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),"Paypal logo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.payment-logo","img.payment-logo",-1772119075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/stripe.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),"Stripe logo"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__footer","div.modal__footer",-705939360),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.float--left","button.btn.btn--link.float--left",833263894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return toggle_modal.call(null,false);
})], null),"Cancel"], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=checkout_modal.js.map
