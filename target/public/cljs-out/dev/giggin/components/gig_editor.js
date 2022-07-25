// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('giggin.components.gig_editor');
goog.require('cljs.core');
goog.require('giggin.state');
goog.require('giggin.helpers');
/**
 * Display the Cancel and Save buttons as well as act, on-click.
 */
giggin.components.gig_editor.gig_editor_footer = (function giggin$components$gig_editor$gig_editor_footer(modal,values){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__footer","div.modal__footer",-705939360),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.float--left","button.btn.btn--link.float--left",833263894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
giggin.helpers.toggle_modal.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null),modal);

return cljs.core.reset_BANG_.call(null,values,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),["gig-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join(''),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"img","img",1442687358),"",new cljs.core.Keyword(null,"price","price",22129180),(0),new cljs.core.Keyword(null,"sold-out","sold-out",-139716632),false], null));
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--secondary","button.btn.btn--secondary",-1244606839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
giggin.state.insert_gig.call(null,cljs.core.deref.call(null,values));

giggin.helpers.toggle_modal.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null),modal);

return cljs.core.reset_BANG_.call(null,values,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),["gig-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join(''),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"img","img",1442687358),"",new cljs.core.Keyword(null,"price","price",22129180),(0),new cljs.core.Keyword(null,"sold-out","sold-out",-139716632),false], null));
})], null),"Save"], null)], null);
});
/**
 * Template for input forms. E.g., Title, Description, etc.
 */
giggin.components.gig_editor.gig_editor_body_form = (function giggin$components$gig_editor$gig_editor_body_form(p__20457){
var map__20458 = p__20457;
var map__20458__$1 = cljs.core.__destructure_map.call(null,map__20458);
var id = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"value","value",305978217));
var values = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"values","values",372645556));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form__group","div.form__group",1946497243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form__label","label.form__label",-685562599),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form__input","input.form__input",1204804891),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20456_SHARP_){
cljs.core.swap_BANG_.call(null,values,cljs.core.assoc,cljs.core.keyword.call(null,id),p1__20456_SHARP_.target.value);

return console.log(p1__20456_SHARP_.target.value);
})], null)], null)], null);
});
/**
 * Template for the soldout button
 */
giggin.components.gig_editor.gig_editor_body_form_soldout = (function giggin$components$gig_editor$gig_editor_body_form_soldout(values){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form__group","div.form__group",1946497243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form__label","label.form__label",-685562599),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"sold-out"], null),"sold-out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form__switch","label.form__switch",-170178703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"sold-out","sold-out",-139716632).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,values)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20459_SHARP_){
return cljs.core.swap_BANG_.call(null,values,cljs.core.assoc,new cljs.core.Keyword(null,"sold-out","sold-out",-139716632),p1__20459_SHARP_.target.checked);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.form__icon","i.form__icon",-2101217393)], null)], null)], null);
});
/**
 * Component responsible for bridging the user to the functionality of adding gigs to the plataform.
 *   So, it sends the inserted data into the model to the database, which in turn is displayed by =gig=.
 */
giggin.components.gig_editor.gig_editor = (function giggin$components$gig_editor$gig_editor(modal,values){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modal)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"active"], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__overlay","div.modal__overlay",2068934002)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__container","div.modal__container",-2058913087),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__body","div.modal__body",-1293108602),giggin.components.gig_editor.gig_editor_body_form.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"title",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,values)),new cljs.core.Keyword(null,"values","values",372645556),values], null)),giggin.components.gig_editor.gig_editor_body_form.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"desc",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,values)),new cljs.core.Keyword(null,"values","values",372645556),values], null)),giggin.components.gig_editor.gig_editor_body_form.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"img",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,values)),new cljs.core.Keyword(null,"values","values",372645556),values], null)),giggin.components.gig_editor.gig_editor_body_form.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"price",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,values)),new cljs.core.Keyword(null,"values","values",372645556),values], null)),giggin.components.gig_editor.gig_editor_body_form_soldout.call(null,values)], null),giggin.components.gig_editor.gig_editor_footer.call(null,modal,values)], null)], null);
});

//# sourceMappingURL=gig_editor.js.map
