(ns giggin.components.orders
  (:require [giggin.state :as state]
            [giggin.helpers :refer [format-price]]
            [giggin.components.checkout-modal :refer [checkout-modal]]))

;; ---------
;; Helper functions
;; ---------------
(defn id-key [id key]
  (get-in @state/gigs [id (keyword (str key))]))

;; ---------
;; Calculations
;; ---------------
(defn total
  []
  (->> (map (fn [[id quant]] (* quant (id-key id "price"))) @state/orders)
       (reduce +)))

;; ---------
;; Calculations
;; ---------------
(defn total-component [orders]
  [:div.total
   [:hr]
   [:div.item
    [:div.content "Total"]
    [:div.action
     [:div.price (format-price (total))]]
    [:button.btn.btn--link.tooltip
     {:data-tooltip "Remove all"
      :on-click     (fn [] (reset! orders {}))}
     [:i.icon.icon--delete]]]
   [checkout-modal]])

;; ---------
;; Orders-component
;; ---------------

(defn empty-orders-component []
  [:div.empty
   [:div.title "You don't have any orders"]
   [:div.subtitle "Click on a + to add an order"]])

;; An gig-order in the sidebar component
(defn order-item [id quant orders]
  (let [id-key (partial id-key id)]
    [:div.item {:key id}
     [:div.img
      [:img {:src (id-key "img")
             :alt (id-key "title")}]]
     [:div.content
      [:p.title (str (id-key "title") " \u00D7 " quant)]]
     [:div.action
      [:div.price (format-price (* (id-key "price") quant))]
      [:button.bnt.btn-link.tooltip
       {:data-tooltip "Remove"
        :on-click     (fn [] (swap! orders dissoc id))}
       [:i.icon.icon--cross]]]]))

;; Gigs-orders-and-total
(defn orders-component [orders]
  [:div.order
   [:div.body
    (doall (for [[id quant] @orders]
            (order-item id quant orders)))
    (total-component state/orders)]])

(defn orders
  []
  [:aside
   (if (empty? @state/orders)
     (empty-orders-component)
     (orders-component state/orders))])
