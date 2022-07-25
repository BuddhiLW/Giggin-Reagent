(ns giggin.helpers)

(defn format-price
  [cents]
  (str " R$" (/ cents 100)))

(defn toggle-modal
  ([{:keys [active]} modal]
   (swap! modal assoc :active active))
  ([{:keys [active gig]} modal values]
   (swap! modal assoc :active active)
   (reset! values gig)))
