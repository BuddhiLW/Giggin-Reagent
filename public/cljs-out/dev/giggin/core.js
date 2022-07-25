// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('giggin.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('giggin.components.header');
goog.require('giggin.components.gigs');
goog.require('giggin.components.orders');
goog.require('giggin.components.footer');
/**
 * This function loads the components.
 */
giggin.core.app = (function giggin$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.gigs.gigs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.orders.orders], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.footer.footer], null)], null);
});
giggin.core.get_app_element = (function giggin$core$get_app_element(){
return goog.dom.getElement("app");
});
giggin.core.mount = (function giggin$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.core.app], null),el);
});
giggin.core.mount_app_element = (function giggin$core$mount_app_element(){
var temp__5720__auto__ = giggin.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return giggin.core.mount.call(null,el);
} else {
return null;
}
});
giggin.core.mount_app_element.call(null);
giggin.core.on_reload = (function giggin$core$on_reload(){
return giggin.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
