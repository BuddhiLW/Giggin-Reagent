(ns giggin.core
  (:require
        [goog.dom :as gdom]
        [reagent.dom :as rdom]
        [giggin.components.header :refer [header]]
        [giggin.components.gigs :refer [gigs]]
        [giggin.components.orders :refer [orders]]
        [giggin.components.footer :refer [footer]]))
        ;; [reagent.core :as reagent]

(defn app
  "This function loads the components."
  []
  [:div.container
   [header]
   [gigs]
   [orders]
   [footer]])

;; ------
;; Starting the application
;; ------

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rdom/render [app] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))

;; (defn start []
;;   (reagent/render-component
;;    [app]
;;    (. js/document (getElementById "app"))))

;; (defn ^:export main []
;;   ;; init is called ONCE when the page loads
;;   ;; this is called in the index.html and must be exported
;;   ;; so it is available even in :advanced release builds
;;   (reagent/render-component
;;    [app]
;;    (. js/document (getElementById "app"))))


;; (defn stop []
;;   ;; stop is called before any code is reloaded
;;   ;; this is controlled by :before-load in the config
;;   (js/console.log "stop"))
