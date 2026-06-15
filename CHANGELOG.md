## [1.2.1](https://github.com/databk/rustdesk-console-web/compare/1.2.0...1.2.1) (2026-06-15)


### Bug Fixes

* align react and react-dom versions to 19.2.7 ([#160](https://github.com/databk/rustdesk-console-web/issues/160)) ([a6decec](https://github.com/databk/rustdesk-console-web/commit/a6dececa384e290cf61abf0720490b6c188eca07)), closes [#527](https://github.com/databk/rustdesk-console-web/issues/527)



# [1.2.0](https://github.com/databk/rustdesk-console-web/compare/1.1.2...1.2.0) (2026-06-14)


### Bug Fixes

* use explicit version tags for Docker images ([#155](https://github.com/databk/rustdesk-console-web/issues/155)) ([3dbc6f8](https://github.com/databk/rustdesk-console-web/commit/3dbc6f8468d03189998fb39cb26d56eba9defcae))


### Features

* add LDAP configuration settings page ([#153](https://github.com/databk/rustdesk-console-web/issues/153)) ([9754767](https://github.com/databk/rustdesk-console-web/commit/9754767baeff06c9f2f9d23d228e0abea1c25452))
* display user avatar in header navigation bar ([#150](https://github.com/databk/rustdesk-console-web/issues/150)) ([2cdba60](https://github.com/databk/rustdesk-console-web/commit/2cdba6051202f92739c8bcd3dfe5d5d72add9273))
* implement alarm audit query and extract shared name@ip logic ([#151](https://github.com/databk/rustdesk-console-web/issues/151)) ([669aa13](https://github.com/databk/rustdesk-console-web/commit/669aa137e0bed2b83cc00b742f59e846c0a92465))
* update release workflow to auto-generate version ([#154](https://github.com/databk/rustdesk-console-web/issues/154)) ([cd298ad](https://github.com/databk/rustdesk-console-web/commit/cd298adce8eaf7dc41a66e855c163c8b1fa2a771))



## [1.1.2](https://github.com/databk/rustdesk-console-web/compare/1.1.1...1.1.2) (2026-06-07)


### Bug Fixes

* hide SettingDrawer in production environment ([#143](https://github.com/databk/rustdesk-console-web/issues/143)) ([7b00e05](https://github.com/databk/rustdesk-console-web/commit/7b00e05fe591741f137ae4f7b0f145bb86356f5f))



## [1.1.1](https://github.com/databk/rustdesk-console-web/compare/1.1.0...1.1.1) (2026-06-07)


### Features

* add nginx reverse proxy config and docker-compose setup ([#141](https://github.com/databk/rustdesk-console-web/issues/141)) ([036f407](https://github.com/databk/rustdesk-console-web/commit/036f40731ee4375b31408058c9ffd292e6f9ad2a))



# [1.1.0](https://github.com/databk/rustdesk-console-web/compare/1.0.0...1.1.0) (2026-06-06)


### Bug Fixes

* **audit:** correct file audit search field to use deviceId ([#107](https://github.com/databk/rustdesk-console-web/issues/107)) ([c087fdc](https://github.com/databk/rustdesk-console-web/commit/c087fdc27141b8be91cd58a8ae23cc5c2b0ad5c4))
* **audit:** update connection audit note API to PATCH /audits/conn/:id ([#118](https://github.com/databk/rustdesk-console-web/issues/118)) ([2102aea](https://github.com/databk/rustdesk-console-web/commit/2102aea7e490c0e6be803cea194c9aa13b4f7ca3))
* **audit:** update disconnect API to POST /devices/:uuid/disconnect ([#119](https://github.com/databk/rustdesk-console-web/issues/119)) ([4aec270](https://github.com/databk/rustdesk-console-web/commit/4aec270d5fd1d6d1125451d32390b5827cbc9c70))
* **i18n:** add missing offline duration time unit translations ([#106](https://github.com/databk/rustdesk-console-web/issues/106)) ([a4a32e6](https://github.com/databk/rustdesk-console-web/commit/a4a32e6520fe9b2b4ca6f71248db5c31e8ba9172))
* **i18n:** add missing translation keys and remove unused ones ([#117](https://github.com/databk/rustdesk-console-web/issues/117)) ([c13c6d8](https://github.com/databk/rustdesk-console-web/commit/c13c6d8b23ac131070fefaf32a6c9a957030b152))
* skip global error handler for login API ([#131](https://github.com/databk/rustdesk-console-web/issues/131)) ([c22c05d](https://github.com/databk/rustdesk-console-web/commit/c22c05d292e08bf20f617d4618566e04cd85b110))
* skip global error handler for SMTP config API ([#132](https://github.com/databk/rustdesk-console-web/issues/132)) ([6b9848b](https://github.com/databk/rustdesk-console-web/commit/6b9848bf411dc6ecbbd075b065c886309b55b52f))
* update footer copyright and links ([#139](https://github.com/databk/rustdesk-console-web/issues/139)) ([ba97560](https://github.com/databk/rustdesk-console-web/commit/ba975605123a700f3f128c46643b35f3ad46c039))


### Features

* **account:** add account center page for user profile management ([#133](https://github.com/databk/rustdesk-console-web/issues/133)) ([bc778ab](https://github.com/databk/rustdesk-console-web/commit/bc778ab2d3b2d66d2c6d7c024cdedae000ddd36c))
* **account:** add change password feature ([#138](https://github.com/databk/rustdesk-console-web/issues/138)) ([a5c0354](https://github.com/databk/rustdesk-console-web/commit/a5c03548232714c33a550436d9ca9c82ec21d8cd))
* add OIDC providers management page ([#122](https://github.com/databk/rustdesk-console-web/issues/122)) ([74a8784](https://github.com/databk/rustdesk-console-web/commit/74a8784cc3865c5c44a7f51787c9465180199d69))
* **audit:** enhance connection audit page ([#109](https://github.com/databk/rustdesk-console-web/issues/109)) ([e0a9d05](https://github.com/databk/rustdesk-console-web/commit/e0a9d05a5c8dc85452e0631aea5e6320ee99332d)), closes [#999](https://github.com/databk/rustdesk-console-web/issues/999)
* **devices:** update delete API and add edit device feature ([#136](https://github.com/databk/rustdesk-console-web/issues/136)) ([7d5dce7](https://github.com/databk/rustdesk-console-web/commit/7d5dce703d8446c9bb7155e511258e5aa5f7616a))
* **login:** implement full login flow with email verification, TFA, and OIDC support ([#108](https://github.com/databk/rustdesk-console-web/issues/108)) ([d2a177c](https://github.com/databk/rustdesk-console-web/commit/d2a177c72f1dd7763ed4bacbbecacc81ae18a7b6)), closes [#1890](https://github.com/databk/rustdesk-console-web/issues/1890) [#110](https://github.com/databk/rustdesk-console-web/issues/110) [#111](https://github.com/databk/rustdesk-console-web/issues/111)
* **login:** implement OIDC login with GitHub, GitLab and Google ([#121](https://github.com/databk/rustdesk-console-web/issues/121)) ([2858e3f](https://github.com/databk/rustdesk-console-web/commit/2858e3fe24bc27602014949bb8715166cbe8a271))
* persist remember me checkbox state ([#115](https://github.com/databk/rustdesk-console-web/issues/115)) ([57fd6d3](https://github.com/databk/rustdesk-console-web/commit/57fd6d3a0d2f1c4375efc2cef4f4c0bff7a4eea4))
* **strategy:** add strategy assignments API and update assigned targets display ([#135](https://github.com/databk/rustdesk-console-web/issues/135)) ([7271645](https://github.com/databk/rustdesk-console-web/commit/7271645e50bc911fe572a284c84a000f1a7fc176))
* **strategy:** add strategy management page ([#123](https://github.com/databk/rustdesk-console-web/issues/123)) ([0506575](https://github.com/databk/rustdesk-console-web/commit/0506575ca570bedb776bf06ba449cbfb2d333a34))
* **users:** implement full user management with admin API ([#134](https://github.com/databk/rustdesk-console-web/issues/134)) ([3b6a89c](https://github.com/databk/rustdesk-console-web/commit/3b6a89c67c93b1532060181c3c59ae8050de5fdf))



