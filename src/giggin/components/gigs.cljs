(ns giggin.components.gigs
  (:require [giggin.state :as state]
            [giggin.helpers :as help :refer [format-price]]
            [giggin.components.gig-editor :refer [gig-editor]]
            [reagent.core :as r]))

(defn gig
  "Display the gigs, based on the database. Also, tie addiction of orders to the
  button 'Add to order'."
  [id img title price desc modal gig-data values]
  (let [add-to-order #(swap! state/orders update % inc)]
    [:div.gig {:key id}
     [:img.gig__artwork.gig__edit {:src      img
                                   :alt      title
                                   :on-click #(do (help/toggle-modal {:active true
                                                                      :gig    gig-data}
                                                                     modal
                                                                     values))}]
     [:div.gig__body
      [:div.gig__title
       [:div.btn.btn--primary.float--right.tooltip
        {:data-tooltip "Add to order"
         :on-click     #(add-to-order id)}
        [:i.icon.icon--plus]] title]
      [:p.gig__price (format-price price)]
      [:p.gig__desc desc]]]))

(defn modal-add
  "Element that enables the modal for the =gig-editor=-component."
  [modal]
  [:button.add-gig
   {:on-click #(help/toggle-modal {:active true} modal)}
   [:div.add__title
    [:p "------"]
    [:i.icon.icon--plus]
    [:p "------"]
    [:p "Add gig"]]])

;; ---------
;; Responsable for tying current state to the model;
;; Interface the model to the state;
;; ---------------

(defn gigs
  "Display the gigs in the local database, as well as accumulated states.
  Also, has the =modal-add= and =gig-editor= components, which interface
  the inserted data into the model, to the current state of the application.
  Finally, the =gig=-component displays the gigs from the current state, e.i.,
  =@state/gigs=."
  []
  (let [modal  (r/atom {:active false})
        initial-values {:id (str "gig-" (random-uuid)) :title "" :desc "" :img "" :price 0 :sold-out false}
        values (r/atom initial-values)]
    (fn []
      [:main
       [:div.gigs
        (modal-add modal)
        (gig-editor modal values)
        (for [{:keys [id img title price desc] :as gig-data} (vals @state/gigs)]
         (gig id img title price desc modal gig-data values))]])))
