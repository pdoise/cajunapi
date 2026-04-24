OmniAuth.config.allowed_request_methods = [:post]

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook,
    ENV.fetch('FACEBOOK_APP_ID', '765683692014853'),
    ENV.fetch('FACEBOOK_APP_SECRET', ''),
    scope: 'public_profile,email',
    info_fields: 'id,name,first_name,last_name,email'
end
