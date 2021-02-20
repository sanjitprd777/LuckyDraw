if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_LuckyDraw_app", domain: "jdh-LuckyDraw.herokuapp.com"
else
    Rails.application.config.session_store :cookie_store, key: "_LuckyDraw_app"
end