(ns giggin.components.gig-editor
  (:require [giggin.state :refer [insert-gig]]
            [giggin.helpers :as help]))

            ;; [reagent.core :as r]))

;; ---------
;; Use this website to generate random high-quality images
;; https://source.unsplash.com/random
;; ------------------------

(defn gig-editor-footer
  "Display the Cancel and Save buttons as well as act, on-click."
  [modal values]
  [:div.modal__footer
   [:button.btn.btn--link.float--left
    {:on-click #(do (help/toggle-modal {:active false} modal)
                    (reset! values {:id (str "gig-" (random-uuid)) :title "" :desc "" :img "" :price 0 :sold-out false}))}
    "Cancel"]
   [:button.btn.btn--secondary
    {:on-click #(do (insert-gig @values)
                    (help/toggle-modal {:active false} modal)
                    (reset! values {:id (str "gig-" (random-uuid)) :title "" :desc "" :img "" :price 0 :sold-out false}))}
    "Save"]])

(defn gig-editor-body-form
  "Template for input forms. E.g., Title, Description, etc."
  [{:keys [id type value values]}]
  [:div.form__group
   [:label.form__label {:for id} id]
   [:input.form__input {:type      type
                        :id        id
                        :value     value ;;(:title @values)
                        :on-change #(do (swap! values assoc (keyword id) (.. % -target -value)))}]])
;;                                        (.log js/console (.. % -target -value)))}]])

(defn gig-editor-body-form-soldout
  "Template for the soldout button"
  [values]
  [:div.form__group
   [:label.form__label {:for "sold-out"} "sold-out"]
   [:label.form__switch
 ;;   (.log js/console (:sold-out @values))
    [:input {:type      :checkbox
             :checked   (:sold-out @values)
             :on-change #(swap! values assoc :sold-out (.. % -target -checked))}]
    [:i.form__icon]]])

(defn gig-editor
  "Component responsible for bridging the user to the functionality of adding gigs to the plataform.
  So, it sends the inserted data into the model to the database, which in turn is displayed by =gig=."
  [modal values]
  [:div.modal (when (:active @modal) {:class "active"})
   [:div.modal__overlay]
   [:div.modal__container
    [:div.modal__body
     (gig-editor-body-form {:id "title" :type "text"   :value (:title @values) :values values})
     (gig-editor-body-form {:id "desc"  :type "text"   :value (:desc @values) :values values})
     (gig-editor-body-form {:id "img"   :type "text"   :value (:img @values) :values values})
     (gig-editor-body-form {:id "price" :type "number" :value (:price @values) :values values})
     (gig-editor-body-form-soldout values)]
    (gig-editor-footer modal values)]])
