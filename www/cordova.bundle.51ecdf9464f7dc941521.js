webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _assign = __webpack_require__(647);
var index_js_1 = __webpack_require__(66);
var routerActions = { stateGo: index_js_1.stateGo, stateReload: index_js_1.stateReload, stateTransitionTo: index_js_1.stateTransitionTo };

var BaseController = function BaseController($scope, $timeout, $ngRedux, $transitions) {
    _classCallCheck(this, BaseController);

    this.$timeout = $timeout;
    this.$ngRedux = $ngRedux;
    this.$transitions = $transitions;
    // overloads scope with redux store
    this.$scope = _assign($scope, {
        state: {}
    });
    var disconnect = $ngRedux.connect(function (state) {
        return {
            state: state
        };
    }, routerActions)($scope);
    this.$scope.$on('$destroy', disconnect);
};

BaseController.injects = ['$scope', '$timeout', '$ngRedux', '$transitions'];
exports.BaseController = BaseController;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auth_actions_1 = __webpack_require__(67);
function auth_signInEmail(email, password) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_EMAIL,
        payload: {
            email: email,
            password: password
        }
    };
}
exports.auth_signInEmail = auth_signInEmail;
function auth_signOut() {
    return {
        type: auth_actions_1.AUTH_SIGN_OUT
    };
}
exports.auth_signOut = auth_signOut;
function auth_signOutSuccess() {
    return {
        type: auth_actions_1.AUTH_SIGN_OUT_SUCCESS
    };
}
exports.auth_signOutSuccess = auth_signOutSuccess;
function auth_signOutError() {
    return {
        type: auth_actions_1.AUTH_SIGN_OUT_ERROR
    };
}
exports.auth_signOutError = auth_signOutError;
function auth_signUpEmail(email, password) {
    return {
        type: auth_actions_1.AUTH_SIGN_UP_EMAIL,
        payload: {
            email: email,
            password: password
        }
    };
}
exports.auth_signUpEmail = auth_signUpEmail;
function auth_signUpEmailSuccess() {
    return {
        type: auth_actions_1.AUTH_SIGN_UP_EMAIL_SUCCESS
    };
}
exports.auth_signUpEmailSuccess = auth_signUpEmailSuccess;
function auth_signUpEmailError(error) {
    return {
        type: auth_actions_1.AUTH_SIGN_UP_EMAIL_ERROR,
        payload: error
    };
}
exports.auth_signUpEmailError = auth_signUpEmailError;
function auth_setTargetState(targetState) {
    return {
        type: auth_actions_1.AUTH_SET_TARGET_STATE,
        payload: targetState
    };
}
exports.auth_setTargetState = auth_setTargetState;
function auth_resetTargetState() {
    return {
        type: auth_actions_1.AUTH_SET_TARGET_STATE
    };
}
exports.auth_resetTargetState = auth_resetTargetState;
function auth_resetPassword(email) {
    return {
        type: auth_actions_1.AUTH_RESET_PASSWORD,
        payload: email
    };
}
exports.auth_resetPassword = auth_resetPassword;
function auth_resetPasswordSuccess() {
    return {
        type: auth_actions_1.AUTH_RESET_PASSWORD_SUCCESS
    };
}
exports.auth_resetPasswordSuccess = auth_resetPasswordSuccess;
function auth_resetPasswordError(error) {
    return {
        type: auth_actions_1.AUTH_RESET_PASSWORD_ERROR,
        payload: error
    };
}
exports.auth_resetPasswordError = auth_resetPasswordError;
function auth_signInGoogleLogin() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN
    };
}
exports.auth_signInGoogleLogin = auth_signInGoogleLogin;
function auth_signInGoogleLoginWToken(GoogleUser) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_GOOGLE_WITH_TOKEN,
        payload: GoogleUser
    };
}
exports.auth_signInGoogleLoginWToken = auth_signInGoogleLoginWToken;
function auth_signInGoogleLoginSuccess() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_SUCCESS
    };
}
exports.auth_signInGoogleLoginSuccess = auth_signInGoogleLoginSuccess;
function auth_signInGoogleLoginError(error) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_ERROR,
        payload: error
    };
}
exports.auth_signInGoogleLoginError = auth_signInGoogleLoginError;
function auth_signInGoogleLoginCordova() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_CORDOVA
    };
}
exports.auth_signInGoogleLoginCordova = auth_signInGoogleLoginCordova;
function auth_signInGoogleLoginWTokenCordova(pluginAuthResponse) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_GOOGLE_WITH_TOKEN_CORDOVA,
        payload: pluginAuthResponse
    };
}
exports.auth_signInGoogleLoginWTokenCordova = auth_signInGoogleLoginWTokenCordova;
function auth_signInGoogleLoginSuccessCordova() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_SUCCESS_CORDOVA
    };
}
exports.auth_signInGoogleLoginSuccessCordova = auth_signInGoogleLoginSuccessCordova;
function auth_signInGoogleLoginErrorCordova(error) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_ERROR_CORDOVA,
        payload: error
    };
}
exports.auth_signInGoogleLoginErrorCordova = auth_signInGoogleLoginErrorCordova;
function auth_signInFacebook() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK
    };
}
exports.auth_signInFacebook = auth_signInFacebook;
function auth_signInFacebookWToken(response) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK_WITH_TOKEN,
        payload: response
    };
}
exports.auth_signInFacebookWToken = auth_signInFacebookWToken;
function auth_signInFacebookSuccess() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK_SUCCESS
    };
}
exports.auth_signInFacebookSuccess = auth_signInFacebookSuccess;
function auth_signInFacebookError(error) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK_ERROR,
        payload: error
    };
}
exports.auth_signInFacebookError = auth_signInFacebookError;
function auth_signInFacebookCordova() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK_CORDOVA
    };
}
exports.auth_signInFacebookCordova = auth_signInFacebookCordova;
function auth_signInFacebookWTokenCordova(response) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK_WITH_TOKEN_CORDOVA,
        payload: response
    };
}
exports.auth_signInFacebookWTokenCordova = auth_signInFacebookWTokenCordova;
function auth_signInFacebookSuccessCordova() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK_SUCCESS_CORDOVA
    };
}
exports.auth_signInFacebookSuccessCordova = auth_signInFacebookSuccessCordova;
function auth_signInFacebookErrorCordova(error) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK_ERROR_CORDOVA,
        payload: error
    };
}
exports.auth_signInFacebookErrorCordova = auth_signInFacebookErrorCordova;
function auth_signInFacebookCancelledCordova() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_FACEBOOK_CANCELLED_CORDOVA
    };
}
exports.auth_signInFacebookCancelledCordova = auth_signInFacebookCancelledCordova;
function auth_signInEmailSuccess() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_EMAIL_SUCCESS
    };
}
exports.auth_signInEmailSuccess = auth_signInEmailSuccess;
function auth_signInEmailErrorInvalidEmail() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_EMAIL_ERROR_INVALID_EMAIL
    };
}
exports.auth_signInEmailErrorInvalidEmail = auth_signInEmailErrorInvalidEmail;
function auth_signInAddInvalidEmail(invalidEmail) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_ADD_INVALID_EMAIL,
        payload: invalidEmail
    };
}
exports.auth_signInAddInvalidEmail = auth_signInAddInvalidEmail;
function auth_signInRemoveInvalidEmail(invalidEmail) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_REMOVE_INVALID_EMAIL,
        payload: invalidEmail
    };
}
exports.auth_signInRemoveInvalidEmail = auth_signInRemoveInvalidEmail;
function auth_signInResetInvalidEmails() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_RESET_INVALID_EMAILS
    };
}
exports.auth_signInResetInvalidEmails = auth_signInResetInvalidEmails;
function auth_signInEmailErrorWrongPassword() {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_EMAIL_ERROR_WRONG_PASSWORD
    };
}
exports.auth_signInEmailErrorWrongPassword = auth_signInEmailErrorWrongPassword;
function auth_signInEmailOtherError(err) {
    return {
        type: auth_actions_1.AUTH_SIGN_IN_EMAIL_OTHER_ERROR,
        payload: err
    };
}
exports.auth_signInEmailOtherError = auth_signInEmailOtherError;
function auth_setUser(user) {
    return {
        type: auth_actions_1.AUTH_SET_USER,
        payload: user
    };
}
exports.auth_setUser = auth_setUser;
function auth_setUserAlreadyLoggedIn() {
    return {
        type: auth_actions_1.AUTH_SET_USER_ALREADY_LOGGED_IN
    };
}
exports.auth_setUserAlreadyLoggedIn = auth_setUserAlreadyLoggedIn;
function auth_setUserNotLoggedIn() {
    return {
        type: auth_actions_1.AUTH_SET_USER_NOT_LOGGED_IN
    };
}
exports.auth_setUserNotLoggedIn = auth_setUserNotLoggedIn;
function auth_resetUser() {
    return {
        type: auth_actions_1.AUTH_RESET_USER
    };
}
exports.auth_resetUser = auth_resetUser;
function auth_goToTargetState() {
    return {
        type: auth_actions_1.AUTH_GO_TO_TARGET_STATE
    };
}
exports.auth_goToTargetState = auth_goToTargetState;

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//================================================================
// POLYFILL
//================================================================

__webpack_require__(256);
__webpack_require__(257);
//================================================================
// VENDOR LIBRARIES
//================================================================
// *** loaded with script tag, see app-external.html
// import 'jquery';
// import 'angular';
// ***
// *** Exposed as globals with expose plugin, see expose-libraries.conf.js ***
__webpack_require__(260);
__webpack_require__(258);
__webpack_require__(259);
// ***
// import 'contentful/browser.js'; // DO NOT USE, conflicts with recent lodash... see contentful service
__webpack_require__(237);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(151); // see https://github.com/angular-ui/ui-router/releases/
// import 'owlcarousel/owl-carousel/owl.carousel.js';
__webpack_require__(263);
__webpack_require__(66);
//================================================================
// VENDOR STYLES
//================================================================
__webpack_require__(262);
__webpack_require__(261);
// import 'owlcarousel/owl-carousel/owl.carousel.css';
// import 'owlcarousel/owl-carousel/owl.theme.css';
var app_component_1 = __webpack_require__(239);
//================================================================
// VARIABLES
//================================================================
//Initial viewport
var viewportHeight = 0;
var viewportWidth = 0;
//================================================================
// MODULE
//================================================================
var components_1 = __webpack_require__(242);
var AppModule = angular.module('app', ['ui.router', 'ngAnimate', 'ngMessages', 'LocalStorageModule', 'ngRedux', 'ng-ui-router-middleware', components_1.ComponentsModule.name]);
//================================================================
// COMPONENTS
//================================================================
AppModule.component('app', app_component_1.AppComponent);
//================================================================
// CONFIG AND RUN BLOCKS
//================================================================
var app_config_1 = __webpack_require__(240);
var app_run_1 = __webpack_require__(241);
AppModule.config(app_config_1.AppConfig);
AppModule.run(app_run_1.AppRun);
//================================================================
// ANIMATIONS
//================================================================
var app_animations_1 = __webpack_require__(238);
AppModule.animation('.app__ui-view-animate', app_animations_1.AppAnimations);
//================================================================
// SERVICES
//================================================================
// import { ResizeSensorService } from '../shared/services/resize-sensor.service';
var logging_service_1 = __webpack_require__(249);
var facebook_service_1 = __webpack_require__(246);
var contentful_service_1 = __webpack_require__(244);
var firebase_service_1 = __webpack_require__(247);
var google_analytics_service_1 = __webpack_require__(251);
var firebase_analytics_service_1 = __webpack_require__(254);
var device_service_1 = __webpack_require__(245);
var on_screen_notifications_service_1 = __webpack_require__(253);
var navigation_service_1 = __webpack_require__(252);
var one_signal_service_1 = __webpack_require__(250);
var push_notifications_service_1 = __webpack_require__(255);
var analytics_service_1 = __webpack_require__(243);
var google_login_service_1 = __webpack_require__(248);
AppModule.service('navigationService', navigation_service_1.NavigationService);
AppModule.service('contentfulService', contentful_service_1.ContentfulService);
AppModule.service('firebaseAnalyticsService', firebase_analytics_service_1.FirebaseAnalyticsService);
AppModule.service('analyticsService', analytics_service_1.AnalyticsService);
AppModule.service('firebaseService', firebase_service_1.FirebaseService);
AppModule.service('googleAnalyticsService', google_analytics_service_1.GoogleAnalyticsService);
AppModule.service('facebookService', facebook_service_1.FacebookService);
AppModule.service('loggingService', logging_service_1.LoggingService);
AppModule.service('oneSignalService', one_signal_service_1.OneSignalService);
AppModule.service('deviceService', device_service_1.DeviceService);
AppModule.service('onScreenNotificationsService', on_screen_notifications_service_1.OnScreenNotificationsService);
AppModule.service('pushNotificationsService', push_notifications_service_1.PushNotificationsService);
AppModule.service('googleLoginService', google_login_service_1.GoogleLoginService);
exports.injector = angular.bootstrap(jQuery('body'), [AppModule.name]);

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app_actions_1 = __webpack_require__(156);
function appResetState() {
    return {
        type: app_actions_1.APP_RESET_STATE
    };
}
exports.appResetState = appResetState;
function appLoading() {
    return {
        type: app_actions_1.APP_LOADING
    };
}
exports.appLoading = appLoading;
function appNotLoading() {
    return {
        type: app_actions_1.APP_NOT_LOADING
    };
}
exports.appNotLoading = appNotLoading;

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.LOCAL_STORAGE_PREFIX = "implant-compare";
//================================================================
// REDUX
//================================================================
exports.REDUX_LOGGER_OPTIONS = {
    level: 'info',
    collapsed: true
};
//================================================================
// CONTENTFUL
//================================================================
exports.CONTENTFUL_INIT_OPTIONS = {
    space: 'gcjcs5p8y33w',
    accessToken: 'd0642800aced517292c377cabdda43f5ce847b67475deeb2fc689463db30f9bc'
};
//================================================================
// GOOGLE LOGIN
//================================================================
exports.GOOGLE_LOGIN_SDK_URL = 'https://apis.google.com/js/api:client.js';
exports.GOOGLE_LOGIN_INIT_OPTIONS = {
    client_id: '807764475515-o7n4kpi2f728fc6ir7rgl11oaf2u5bis.apps.googleusercontent.com',
    cookiepolicy: 'single_host_origin',
    ux_mode: 'redirect'
};
exports.GOOGLE_LOGIN_CORDOVA_OPTIONS = {
    scopes: 'profile email',
    webClientId: '807764475515-o7n4kpi2f728fc6ir7rgl11oaf2u5bis.apps.googleusercontent.com',
    offline: true
};
//================================================================
// FACEBOOK
//================================================================
exports.FACEBOOK_APP_IDS = {
    appId: '1834783516803213',
    xfbml: true,
    cookie: true,
    version: 'v2.7'
};
exports.FACEBOOK_LOGIN_OPTIONS = {
    scope: 'public_profile,email',
    return_scopes: true
};
exports.FACEBOOK_LOGIN_SCOPES = ['public_profile', 'email'];
exports.FACEBOOK_OAUTH_ENDPOINT = "https://www.facebook.com/dialog/oauth";
exports.FACEBOOK_OAUTH_REDIRECT_URL_PROD = exports.FACEBOOK_OAUTH_ENDPOINT + "?client_id=" + exports.FACEBOOK_APP_IDS.appId + "&redirect_uri=https://app-implantcompare.com/auth/login&response_type=token";
exports.FACEBOOK_OAUTH_REDIRECT_URL_DEV = exports.FACEBOOK_OAUTH_ENDPOINT + "?client_id=" + exports.FACEBOOK_APP_IDS.appId + "&redirect_uri=http://localhost:9000/auth/login&response_type=token";
//================================================================
// FIREBASE
//================================================================
exports.FIREBASE_SDK_URL = 'https://www.gstatic.com/firebasejs/3.7.3/firebase.js';
exports.FIREBASE_API_KEY = "AIzaSyB7gKyae7d6isU8XMB3Vnc6UWds7-0mk9Y";
exports.FIREBASE_API_DOMAIN = "implant-compare.firebaseapp.com";
exports.FIREBASE_API_DATABASE_URL = "https://implant-compare.firebaseio.com";
exports.FIREBASE_API_STORAGE_BUCKET = "implant-compare.appspot.com";
exports.FIREBASE_API_MESSAGIN_SENDER_ID = "807764475515";
exports.FIREBASE_INIT_WEB_OPTIONS_PROD = {
    apiKey: exports.FIREBASE_API_KEY,
    authDomain: exports.FIREBASE_API_DOMAIN,
    databaseURL: exports.FIREBASE_API_DATABASE_URL,
    storageBucket: exports.FIREBASE_API_STORAGE_BUCKET,
    messagingSenderId: exports.FIREBASE_API_MESSAGIN_SENDER_ID
};
exports.FIREBASE_INIT_CORDOVA_OPTIONS_PROD = {
    apiKey: exports.FIREBASE_API_KEY,
    databaseURL: exports.FIREBASE_API_DATABASE_URL,
    storageBucket: exports.FIREBASE_API_STORAGE_BUCKET,
    messagingSenderId: exports.FIREBASE_API_MESSAGIN_SENDER_ID
};
exports.FIREBASE_API_KEY_STAGING = "AIzaSyDLfB4gHPMvebioaINDbjvW3zkYgn8cHaQ";
exports.FIREBASE_API_DOMAIN_STAGING = "implant-compare-staging.firebaseapp.com";
exports.FIREBASE_API_DATABASE_URL_STAGING = "https://implant-compare-staging.firebaseio.com";
exports.FIREBASE_API_STORAGE_BUCKET_STAGING = "implant-compare-staging.appspot.com";
exports.FIREBASE_API_MESSAGIN_SENDER_ID_STAGING = "494675556039";
exports.FIREBASE_INIT_CORDOVA_OPTIONS_STAGING = {
    apiKey: exports.FIREBASE_API_KEY_STAGING,
    databaseURL: exports.FIREBASE_API_DATABASE_URL_STAGING,
    storageBucket: exports.FIREBASE_API_STORAGE_BUCKET_STAGING,
    messagingSenderId: exports.FIREBASE_API_MESSAGIN_SENDER_ID_STAGING
};
exports.FIREBASE_INIT_WEB_OPTIONS_STAGING = {
    apiKey: exports.FIREBASE_API_KEY_STAGING,
    authDomain: exports.FIREBASE_API_DOMAIN_STAGING,
    databaseURL: exports.FIREBASE_API_DATABASE_URL_STAGING,
    storageBucket: exports.FIREBASE_API_STORAGE_BUCKET_STAGING,
    messagingSenderId: exports.FIREBASE_API_MESSAGIN_SENDER_ID_STAGING
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.FACEBOOK_LOADING = '@@app/facebookLoading';
exports.FACEBOOK_NOT_LOADING = '@@app/facebookNotLoading';
exports.FACEBOOK_ENABLE_LOGIN = '@@app/facebookEnableLogin';
exports.FACEBOOK_DISABLE_LOGIN = '@@app/facebookDisableLogin';
exports.FACEBOOK_LOAD_SCRIPT_SUCCESS = '@@app/facebookLoadScriptSuccess';
exports.FACEBOOK_LOAD_SCRIPT_ERROR = '@@app/facebookLoadScriptError';
exports.FACEBOOK_SIGN_IN_OAUTH = '@@app/facebookSignInOAuth';
exports.FACEBOOK_SIGN_IN_OAUTH_CORDOVA = '@@app/facebookSignInOAuthCordova';
exports.FACEBOOK_SIGN_IN_OAUTH_SUCCESS = '@@app/facebookSignInOAuthSuccess';
exports.FACEBOOK_SIGN_IN_OAUTH_SUCCESS_CORDOVA = '@@app/facebookSignInOAuthSuccessCordova';
exports.FACEBOOK_INIT_WEB = '@@app/facebookInitWeb';
exports.FACEBOOK_INIT_WEB_SUCCESS = '@@app/facebookInitWebSuccess';
exports.FACEBOOK_INIT_WEB_ERROR = '@@app/facebookInitWebError';
exports.FACEBOOK_GLOBAL_READY = '@@app/facebookGlobalReady';
exports.FACEBOOK_GLOBAL_READY_CORDOVA = '@@app/facebookGlobalReadyCordova';
exports.FACEBOOK_INIT_CORDOVA = '@@app/facebookInitCordova';
exports.FACEBOOK_INIT_CORDOVA_SUCCESS = '@@app/facebookInitCordovaSuccess';
exports.FACEBOOK_INIT_CORDOVA_ERROR = '@@app/facebookInitCordovaError';

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.AUTH = '@@app/auth';
exports.AUTH_SET_USER = '@@app/authSetUser';
exports.AUTH_RESET_USER = '@@app/authResetUser';
exports.AUTH_SET_USER_ALREADY_LOGGED_IN = '@@app/authSetUserAlreadyLoggedIn';
exports.AUTH_SET_USER_NOT_LOGGED_IN = '@@app/authSetUserNotLoggedIn';
exports.AUTH_GO_TO_TARGET_STATE = '@@app/authGoToTargetState';
exports.AUTH_SET_TARGET_STATE = '@@app/authSetTargetState';
exports.AUTH_RESET_TARGET_STATE = '@@app/authResetTargetState';
exports.AUTH_RESET_PASSWORD = '@@app/authResetPassword';
exports.AUTH_RESET_PASSWORD_SUCCESS = '@@app/authResetPasswordSuccess';
exports.AUTH_RESET_PASSWORD_ERROR = '@@app/authResetPasswordError';
exports.AUTH_SIGN_UP_EMAIL = '@@app/authSignUpEmail';
exports.AUTH_SIGN_UP_EMAIL_SUCCESS = '@@app/authSignUpEmailSuccess';
exports.AUTH_SIGN_UP_EMAIL_ERROR = '@@app/authSignUpEmailError';
exports.AUTH_SIGN_IN_EMAIL = '@@app/authSignInEmail';
exports.AUTH_SIGN_IN_EMAIL_SUCCESS = '@@app/authSignInEmailSuccess';
exports.AUTH_SIGN_IN_EMAIL_ERROR_INVALID_EMAIL = '@@app/authSignInEmailErrorInvalidEmail';
exports.AUTH_SIGN_IN_EMAIL_ERROR_WRONG_PASSWORD = '@@app/authSignInEmailErrorWrongPassword';
exports.AUTH_SIGN_IN_EMAIL_OTHER_ERROR = '@@app/authSignInEmailOtherError';
exports.AUTH_SIGN_IN_ADD_INVALID_EMAIL = '@@app/authSignInAddInvalidEmail';
exports.AUTH_SIGN_IN_REMOVE_INVALID_EMAIL = '@@app/authSignInRemoveInvalidEmail';
exports.AUTH_SIGN_IN_RESET_INVALID_EMAILS = '@@app/authSignInResetInvalidEmails';
exports.AUTH_SIGN_IN_FACEBOOK = '@@app/authSignInFacebook';
exports.AUTH_SIGN_IN_FACEBOOK_WITH_TOKEN = '@@app/authSignInFacebookWithToken';
exports.AUTH_SIGN_IN_FACEBOOK_SUCCESS = '@@app/authSignInFacebookSuccess';
exports.AUTH_SIGN_IN_FACEBOOK_ERROR = '@@app/authSignInFacebookError';
exports.AUTH_SIGN_IN_FACEBOOK_CORDOVA = '@@app/authSignInFacebookCordova';
exports.AUTH_SIGN_IN_FACEBOOK_WITH_TOKEN_CORDOVA = '@@app/authSignInFacebookWithTokenCordova';
exports.AUTH_SIGN_IN_FACEBOOK_SUCCESS_CORDOVA = '@@app/authSignInFacebookSuccessCordova';
exports.AUTH_SIGN_IN_FACEBOOK_ERROR_CORDOVA = '@@app/authSignInFacebookErrorCordova';
exports.AUTH_SIGN_IN_FACEBOOK_CANCELLED_CORDOVA = '@@app/authSignInFacebookCancelledCordova';
exports.AUTH_SIGN_IN_GOOGLE_LOGIN = '@@app/authSignInGoogleLogin';
exports.AUTH_SIGN_IN_GOOGLE_WITH_TOKEN = '@@app/authSignInGoogleWithToken';
exports.AUTH_SIGN_IN_GOOGLE_LOGIN_SUCCESS = '@@app/authSignInGoogleLoginSuccess';
exports.AUTH_SIGN_IN_GOOGLE_LOGIN_ERROR = '@@app/authSignInGoogleLoginError';
exports.AUTH_SIGN_IN_GOOGLE_LOGIN_CORDOVA = '@@app/authSignInGoogleLoginCordova';
exports.AUTH_SIGN_IN_GOOGLE_WITH_TOKEN_CORDOVA = '@@app/authSignInGoogleWithTokenCordova';
exports.AUTH_SIGN_IN_GOOGLE_LOGIN_SUCCESS_CORDOVA = '@@app/authSignInGoogleLoginSuccessCordova';
exports.AUTH_SIGN_IN_GOOGLE_LOGIN_ERROR_CORDOVA = '@@app/authSignInGoogleLoginErrorCordova';
exports.AUTH_SIGN_OUT = '@@app/authSignOut';
exports.AUTH_SIGN_OUT_SUCCESS = '@@app/authSignOutSuccess';
exports.AUTH_SIGN_OUT_ERROR = '@@app/authSignOutError';

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.CONTENTFUL_LOADING = '@@app/contentfulLoading';
exports.CONTENTFUL_NOT_LOADING = '@@app/contentfulNotLoading';
exports.CONTENTFUL_INIT_WEB = '@@app/contentfulInitWeb';
exports.CONTENTFUL_INIT_WEB_SUCCESS = '@@app/contentfulInitWebSuccess';
exports.CONTENTFUL_INIT_WEB_ERROR = '@@app/contentfulInitWebError';
exports.CONTENTFUL_SET_CLIENT = '@@app/contentfulSetClient';
exports.CONTENTFUL_RESET_CLIENT = '@@app/contentfulResetClient';

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var events_actions_1 = __webpack_require__(70);
function events_loading() {
    return {
        type: events_actions_1.EVENTS_LOADING
    };
}
exports.events_loading = events_loading;
function events_notLoading() {
    return {
        type: events_actions_1.EVENTS_NOT_LOADING
    };
}
exports.events_notLoading = events_notLoading;
function events_setEvents(events) {
    return {
        type: events_actions_1.EVENTS_SET_EVENTS,
        payload: events
    };
}
exports.events_setEvents = events_setEvents;
function events_setUpcomingEvents(upcomingEvents) {
    return {
        type: events_actions_1.EVENTS_SET_UPCOMING_EVENTS,
        payload: upcomingEvents
    };
}
exports.events_setUpcomingEvents = events_setUpcomingEvents;
function events_setPastEvents(pastEvents) {
    return {
        type: events_actions_1.EVENTS_SET_PAST_EVENTS,
        payload: pastEvents
    };
}
exports.events_setPastEvents = events_setPastEvents;
function events_getEventsFromContentful(skip, limit) {
    return {
        type: events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL,
        payload: {
            skip: skip,
            limit: limit
        }
    };
}
exports.events_getEventsFromContentful = events_getEventsFromContentful;
function events_getUpcomingEventsFromContentful() {
    return {
        type: events_actions_1.EVENTS_GET_UPCOMING_EVENTS_CONTENTFUL
    };
}
exports.events_getUpcomingEventsFromContentful = events_getUpcomingEventsFromContentful;
function events_getPastEventsFromContentful() {
    return {
        type: events_actions_1.EVENTS_GET_PAST_EVENTS_CONTENTFUL
    };
}
exports.events_getPastEventsFromContentful = events_getPastEventsFromContentful;
function events_getEventsFromContentfulSuccess() {
    return {
        type: events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL_SUCCESS
    };
}
exports.events_getEventsFromContentfulSuccess = events_getEventsFromContentfulSuccess;
function events_getEventsFromContentfulError(error) {
    return {
        type: events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL_ERROR,
        payload: error
    };
}
exports.events_getEventsFromContentfulError = events_getEventsFromContentfulError;
function events_getEventFromContentful(eventId) {
    return {
        type: events_actions_1.EVENTS_GET_EVENT_CONTENTFUL,
        payload: eventId
    };
}
exports.events_getEventFromContentful = events_getEventFromContentful;
function events_getEventFromContentfulSuccess() {
    return {
        type: events_actions_1.EVENTS_GET_EVENT_CONTENTFUL_SUCCESS
    };
}
exports.events_getEventFromContentfulSuccess = events_getEventFromContentfulSuccess;
function events_getEventFromContentfulError(error) {
    return {
        type: events_actions_1.EVENTS_GET_EVENT_CONTENTFUL_ERROR,
        payload: error
    };
}
exports.events_getEventFromContentfulError = events_getEventFromContentfulError;
function events_resetEventsState() {
    return {
        type: events_actions_1.EVENTS_RESET_EVENTS_STATE
    };
}
exports.events_resetEventsState = events_resetEventsState;
function events_showUpcomingEvents() {
    return {
        type: events_actions_1.EVENTS_SHOW_UPCOMING
    };
}
exports.events_showUpcomingEvents = events_showUpcomingEvents;
function events_showPastEvents() {
    return {
        type: events_actions_1.EVENTS_SHOW_PAST
    };
}
exports.events_showPastEvents = events_showPastEvents;
function events_setSkip(number) {
    return {
        type: events_actions_1.EVENTS_SET_SKIP,
        payload: number
    };
}
exports.events_setSkip = events_setSkip;
function events_setSelectedEvent(event) {
    return {
        type: events_actions_1.EVENTS_SET_SELECTED_EVENT,
        payload: event
    };
}
exports.events_setSelectedEvent = events_setSelectedEvent;
function events_goToSelectedEvent() {
    return {
        type: events_actions_1.EVENTS_GO_TO_SELECTED_EVENT
    };
}
exports.events_goToSelectedEvent = events_goToSelectedEvent;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.EVENTS_LOADING = '@@app/eventsLoading';
exports.EVENTS_NOT_LOADING = '@@app/eventsNotLoading';
exports.EVENTS_SET_EVENTS = '@@app/eventsSet';
exports.EVENTS_RESET_EVENTS_STATE = '@@app/eventsResetState';
exports.EVENTS_SHOW_UPCOMING = '@@app/eventsSetShowUpcoming';
exports.EVENTS_SET_UPCOMING_EVENTS = '@@app/eventsSetUpcomingEvents';
exports.EVENTS_SET_PAST_EVENTS = '@@app/eventsSetPastEvents';
exports.EVENTS_SHOW_PAST = '@@app/eventsSetShowPast';
exports.EVENTS_SET_SKIP = '@@app/eventsSetSkip';
exports.EVENTS_SET_SELECTED_EVENT = '@@app/eventsSelectedEvent';
exports.EVENTS_GO_TO_SELECTED_EVENT = '@@app/eventsGoToSelectedEvent';
exports.EVENTS_GET_EVENT_CONTENTFUL = '@@app/eventsGetEventFromContentful';
exports.EVENTS_GET_EVENT_CONTENTFUL_SUCCESS = '@@app/eventGetEventsFromContentfulSuccess';
exports.EVENTS_GET_EVENT_CONTENTFUL_ERROR = '@@app/eventGetEventsFromContentfulError';
exports.EVENTS_GET_EVENTS_CONTENTFUL = '@@app/eventsGetEventsFromContentful';
exports.EVENTS_GET_EVENTS_CONTENTFUL_SUCCESS = '@@app/eventsGetEventsFromContentfulSuccess';
exports.EVENTS_GET_EVENTS_CONTENTFUL_ERROR = '@@app/eventsGetEventsFromContentfulError';
exports.EVENTS_GET_UPCOMING_EVENTS_CONTENTFUL = '@@app/eventsGetUpcomingEventsFromContentful';
exports.EVENTS_GET_PAST_EVENTS_CONTENTFUL = '@@app/eventsGetPastEventsFromContentful';

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.FIREBASE_LOAD_SCRIPT_SUCCESS = '@@app/firebaseLoadScriptSuccess';
exports.FIREBASE_LOAD_SCRIPT_ERROR = '@@app/firebaseLoadScriptError';
exports.FIREBASE_INIT_WEB = '@@app/firebaseInitWeb';
exports.FIREBASE_INIT_WEB_SUCCESS = '@@app/firebaseInitWebSuccess';
exports.FIREBASE_INIT_WEB_ERROR = '@@app/firebaseInitWebError';
exports.FIREBASE_INIT_CORDOVA = '@@app/firebaseInitCordova';
exports.FIREBASE_INIT_CORDOVA_SUCCESS = '@@app/firebaseInitCordovaSuccess';
exports.FIREBASE_INIT_CORDOVA_ERROR = '@@app/firebaseCordovaError';
exports.FIREBASE_LOADING = '@@app/firebaseLoading';
exports.FIREBASE_NOT_LOADING = '@@app/firebaseNotLoading';
exports.FIREBASE_GLOBAL_READY = '@@app/firebaseGlobalReady';

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.GOOGLE_LOGIN_OAUTH_SUCCESS = '@@app/googleLoginOAuthSuccess';
exports.GOOGLE_LOGIN_OAUTH_ERROR = '@@app/googleLoginOAuthError';
exports.GOOGLE_LOGIN_OAUTH = '@@app/googleLoginOAuth';
exports.GOOGLE_LOGIN_ERROR = '@@app/googleLoginSuccess';
exports.GOOGLE_LOGIN_CANCELLED = '@@app/googleLoginCancelled';
exports.GOOGLE_LOGIN_LOADING = '@@app/googleLoginLoading';
exports.GOOGLE_LOGIN_NOT_LOADING = '@@app/googleLoginNotLoading';
exports.GOOGLE_LOGIN_DISABLE = '@@app/googleLoginDisable';
exports.GOOGLE_LOGIN_ENABLE = '@@app/googleLoginEnable';
exports.GOOGLE_LOGIN_LOAD_SCRIPT_SUCCESS = '@@app/googleLoginLoadScriptSuccess';
exports.GOOGLE_LOGIN_LOAD_SCRIPT_ERROR = '@@app/googleLoginLoadScriptError';
exports.GOOGLE_LOGIN_INIT_WEB = '@@app/googleLoginInitWeb';
exports.GOOGLE_LOGIN_INIT_WEB_SUCCESS = '@@app/googleLoginInitWebSuccess';
exports.GOOGLE_LOGIN_INIT_WEB_ERROR = '@@app/googleLoginInitWebError';
exports.GOOGLE_LOGIN_INIT_CORDOVA = '@@app/googleLoginInitCordova';
exports.GOOGLE_LOGIN_INIT_CORDOVA_SUCCESS = '@@app/googleLoginInitCordovaSuccess';
exports.GOOGLE_LOGIN_INIT_CORDOVA_ERROR = '@@app/googleLoginInitCordovaErrorCordova';
exports.GOOGLE_LOGIN_PLUGIN_READY = '@@app/googleLoginPluginReady';
exports.GOOGLE_LOGIN_GLOBAL_READY = '@@app/googleLoginGlobalReady';
exports.GOOGLE_LOGIN_AUTH2_READY = '@@app/googleLoginAuth2Ready';

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseService = function BaseService($q, $filter, loggingService) {
    _classCallCheck(this, BaseService);

    this.$q = $q;
    this.$filter = $filter;
    this.loggingService = loggingService;
};

BaseService.injects = ['$q', '$filter', 'loggingService'];
exports.BaseService = BaseService;

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var facebook_actions_1 = __webpack_require__(57);
var facebook_actions_2 = __webpack_require__(57);
function facebookLoading() {
    return {
        type: facebook_actions_1.FACEBOOK_LOADING
    };
}
exports.facebookLoading = facebookLoading;
function facebookNotLoading() {
    return {
        type: facebook_actions_1.FACEBOOK_NOT_LOADING
    };
}
exports.facebookNotLoading = facebookNotLoading;
function facebookDisableLogin() {
    return {
        type: facebook_actions_1.FACEBOOK_DISABLE_LOGIN
    };
}
exports.facebookDisableLogin = facebookDisableLogin;
function facebookEnableLogin() {
    return {
        type: facebook_actions_1.FACEBOOK_ENABLE_LOGIN
    };
}
exports.facebookEnableLogin = facebookEnableLogin;
function facebookInitWebError(error) {
    return {
        type: facebook_actions_1.FACEBOOK_INIT_WEB_ERROR,
        payload: error
    };
}
exports.facebookInitWebError = facebookInitWebError;
function facebookInitWebSuccess() {
    return {
        type: facebook_actions_1.FACEBOOK_INIT_WEB_SUCCESS
    };
}
exports.facebookInitWebSuccess = facebookInitWebSuccess;
function facebookInitWeb() {
    return {
        type: facebook_actions_1.FACEBOOK_INIT_WEB
    };
}
exports.facebookInitWeb = facebookInitWeb;
function facebookLoadScriptSuccess() {
    return {
        type: facebook_actions_1.FACEBOOK_LOAD_SCRIPT_SUCCESS
    };
}
exports.facebookLoadScriptSuccess = facebookLoadScriptSuccess;
function facebookLoadScriptError() {
    return {
        type: facebook_actions_1.FACEBOOK_LOAD_SCRIPT_ERROR
    };
}
exports.facebookLoadScriptError = facebookLoadScriptError;
function facebookInitCordova() {
    return {
        type: facebook_actions_1.FACEBOOK_INIT_CORDOVA
    };
}
exports.facebookInitCordova = facebookInitCordova;
function facebookInitSuccessCordova() {
    return {
        type: facebook_actions_2.FACEBOOK_INIT_CORDOVA_SUCCESS
    };
}
exports.facebookInitSuccessCordova = facebookInitSuccessCordova;
function facebookInitErrorCordova(error) {
    return {
        type: facebook_actions_1.FACEBOOK_INIT_CORDOVA_ERROR,
        payload: error
    };
}
exports.facebookInitErrorCordova = facebookInitErrorCordova;
function facebookSignInOAuth() {
    return {
        type: facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH
    };
}
exports.facebookSignInOAuth = facebookSignInOAuth;
function facebookSignInOAuthSuccess() {
    return {
        type: facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH_SUCCESS
    };
}
exports.facebookSignInOAuthSuccess = facebookSignInOAuthSuccess;
function facebookGlobalReady() {
    return {
        type: facebook_actions_1.FACEBOOK_GLOBAL_READY
    };
}
exports.facebookGlobalReady = facebookGlobalReady;
function facebookCordovaGlobalReady() {
    return {
        type: facebook_actions_1.FACEBOOK_GLOBAL_READY
    };
}
exports.facebookCordovaGlobalReady = facebookCordovaGlobalReady;
function facebookSignInOAuthCordova() {
    return {
        type: facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH_CORDOVA
    };
}
exports.facebookSignInOAuthCordova = facebookSignInOAuthCordova;
function facebookSignInOAuthSuccessCordova() {
    return {
        type: facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH_SUCCESS_CORDOVA
    };
}
exports.facebookSignInOAuthSuccessCordova = facebookSignInOAuthSuccessCordova;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var google_login_actions_1 = __webpack_require__(72);
function googleLoginLoading() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_LOADING
    };
}
exports.googleLoginLoading = googleLoginLoading;
function googleLoginNotLoading() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_NOT_LOADING
    };
}
exports.googleLoginNotLoading = googleLoginNotLoading;
function googleLoginEnable() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_ENABLE
    };
}
exports.googleLoginEnable = googleLoginEnable;
function googleLoginDisable() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_DISABLE
    };
}
exports.googleLoginDisable = googleLoginDisable;
function googleLoginSuccess() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_OAUTH_SUCCESS
    };
}
exports.googleLoginSuccess = googleLoginSuccess;
function googleLoginOAuth() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_OAUTH
    };
}
exports.googleLoginOAuth = googleLoginOAuth;
function googleLoginOAuthSuccess() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_OAUTH_SUCCESS
    };
}
exports.googleLoginOAuthSuccess = googleLoginOAuthSuccess;
function googleLoginCancelled() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_CANCELLED
    };
}
exports.googleLoginCancelled = googleLoginCancelled;
function googleLoginError(error) {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_ERROR,
        payload: error
    };
}
exports.googleLoginError = googleLoginError;
function googleLoginInitWeb() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_INIT_WEB
    };
}
exports.googleLoginInitWeb = googleLoginInitWeb;
function googleLoginLoadScriptSuccess() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_LOAD_SCRIPT_SUCCESS
    };
}
exports.googleLoginLoadScriptSuccess = googleLoginLoadScriptSuccess;
function googleLoginLoadScriptError(error) {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_LOAD_SCRIPT_ERROR,
        payload: error
    };
}
exports.googleLoginLoadScriptError = googleLoginLoadScriptError;
function googleLoginInitWebSuccess() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_INIT_WEB_SUCCESS
    };
}
exports.googleLoginInitWebSuccess = googleLoginInitWebSuccess;
function googleLoginInitWebError(error) {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_INIT_WEB_ERROR,
        payload: error
    };
}
exports.googleLoginInitWebError = googleLoginInitWebError;
function googleLoginInitCordova() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_INIT_CORDOVA
    };
}
exports.googleLoginInitCordova = googleLoginInitCordova;
function googleLoginInitCordovaSuccess() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_INIT_CORDOVA_SUCCESS
    };
}
exports.googleLoginInitCordovaSuccess = googleLoginInitCordovaSuccess;
function googleLoginInitCordovaError(error) {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_INIT_CORDOVA_ERROR,
        payload: error
    };
}
exports.googleLoginInitCordovaError = googleLoginInitCordovaError;
function googleLoginPluginReady() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_PLUGIN_READY
    };
}
exports.googleLoginPluginReady = googleLoginPluginReady;
function googleLoginGlobalReady() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_GLOBAL_READY
    };
}
exports.googleLoginGlobalReady = googleLoginGlobalReady;
function googleLoginAuth2Ready() {
    return {
        type: google_login_actions_1.GOOGLE_LOGIN_AUTH2_READY
    };
}
exports.googleLoginAuth2Ready = googleLoginAuth2Ready;

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.DEVICE_SET_DEVICE_TYPE = '@@app/deviceSetDeviceType';
exports.DEVICE_SET_PLATFORM = '@@app/deviceSetPlatform';
exports.DEVICE_SET_DEVICE_TOKEN = '@@app/deviceSetDeviceToken';
exports.DEVICE_SET_BADGE_NUMBER = '@@app/deviceSetBadgeNumber';

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.GOOGLE_ANALYTICS_LOADING = '@@app/gaLoading';
exports.GOOGLE_ANALYTICS_NOT_LOADING = '@@app/gaNotLoading';

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports) {

module.exports = angular;

/***/ }),
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);
var app_action_creators_1 = __webpack_require__(44);
var auth_action_creators_1 = __webpack_require__(29);
var facebook_action_creators_1 = __webpack_require__(84);
var google_login_action_creators_1 = __webpack_require__(85);

var AuthLoginController = function (_base_controller_1$Ba) {
    _inherits(AuthLoginController, _base_controller_1$Ba);

    function AuthLoginController($scope, $timeout, $ngRedux, $transitions, navigationService, loggingService, firebaseService, facebookService, $location, $element) {
        _classCallCheck(this, AuthLoginController);

        var _this = _possibleConstructorReturn(this, (AuthLoginController.__proto__ || Object.getPrototypeOf(AuthLoginController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.navigationService = navigationService;
        _this.loggingService = loggingService;
        _this.firebaseService = firebaseService;
        _this.facebookService = facebookService;
        _this.$location = $location;
        _this.$element = $element;
        return _this;
    }

    _createClass(AuthLoginController, [{
        key: "$onInit",
        value: function $onInit() {
            this.$ngRedux.dispatch(auth_action_creators_1.auth_signInResetInvalidEmails());
            this.handleRouteRedirect();
            this.watchForInvalidPasswordAttempts();
        }
        // cordova & web compatible

    }, {
        key: "signInWithEmailAndPassword",
        value: function signInWithEmailAndPassword(email, password) {
            var _this2 = this;

            this.$element.find('#auth-login-email__form__email').blur();
            this.$element.find('#auth-login-email__form__password').blur();
            if (this.$scope.loginForm.$invalid) {
                return;
            }
            this.$ngRedux.dispatch(app_action_creators_1.appLoading());
            this.$timeout(function () {
                _this2.$ngRedux.dispatch(auth_action_creators_1.auth_signInEmail(email, password));
            }, 100);
        }
    }, {
        key: "signInFB",
        value: function signInFB() {
            var _this3 = this;

            this.$ngRedux.dispatch(facebook_action_creators_1.facebookLoading());
            this.$timeout(function () {
                if (_this3.$ngRedux.getState().app.device.platform === 'cordova') {
                    _this3.$ngRedux.dispatch(auth_action_creators_1.auth_signInFacebookCordova());
                } else {
                    _this3.$ngRedux.dispatch(auth_action_creators_1.auth_signInFacebook());
                }
            }, 100);
        }
    }, {
        key: "signInGoogle",
        value: function signInGoogle() {
            var _this4 = this;

            this.$ngRedux.dispatch(google_login_action_creators_1.googleLoginLoading());
            this.$timeout(function () {
                if (_this4.$ngRedux.getState().app.device.platform === 'cordova') {
                    _this4.$ngRedux.dispatch(auth_action_creators_1.auth_signInGoogleLoginCordova());
                } else {
                    _this4.$ngRedux.dispatch(auth_action_creators_1.auth_signInGoogleLogin());
                }
            }, 100);
        }
    }, {
        key: "go",
        value: function go(state, email, backState) {
            this.$scope.stateGo(state, {
                email: email && email.$viewValue ? email.$viewValue : '',
                backState: backState
            });
        }
    }, {
        key: "watchForInvalidPasswordAttempts",
        value: function watchForInvalidPasswordAttempts() {
            var _this5 = this;

            this.$scope.$watch('state.app.auth.invalidPasswordAttempts', function (newValue, oldValue) {
                if (newValue > oldValue) {
                    _this5.password = '';
                }
            }, false);
        }
        //================================================================
        // HELPER METHODS
        //================================================================

    }, {
        key: "handleRouteRedirect",
        value: function handleRouteRedirect() {
            if (this.getFBOAuthRedirectError()) {
                this.handleFBOAuthRedirectError();
            } else if (this.getGoogleLoginOAuthRedirectError()) {
                this.handleGoogleLoginOAuthRedirectError();
            } else if (this.validateFBOAuthToken()) {
                this.cleanURLHash();
                this.handleFBOAuthRedirectSuccess();
            } else if (this.validateGoogleLoginOAuthToken()) {
                // no need to clear the token in the has,
                // the iframe does it automatically
                this.handleGoogleLoginOAuthRedirectSuccess();
            }
        }
    }, {
        key: "getFBOAuthRedirectError",
        value: function getFBOAuthRedirectError() {
            var error = this.$scope.state.router.currentParams['error'];
            if (error && error.length) {
                return error;
            }
            return null;
        }
    }, {
        key: "handleFBOAuthRedirectError",
        value: function handleFBOAuthRedirectError() {
            var _this6 = this;

            this.loggingService.log({
                level: 2,
                entity: AuthLoginController,
                message: 'Facebook login was denied or cancelled.',
                displayOnScreen: true
            });
            this.cleanURLHash();
            this.$timeout(function () {
                _this6.$scope.stateGo('login', undefined, {
                    location: true, reload: false
                });
            });
        }
    }, {
        key: "getGoogleLoginOAuthRedirectError",
        value: function getGoogleLoginOAuthRedirectError() {
            var error = this.getURLHash();
            if (error && error.length && error.indexOf('error=') === 0) {
                return error;
            }
            return null;
        }
    }, {
        key: "handleGoogleLoginOAuthRedirectError",
        value: function handleGoogleLoginOAuthRedirectError() {
            this.loggingService.log({
                level: 2,
                entity: AuthLoginController,
                message: 'Google login was denied or cancelled.',
                displayOnScreen: true
            });
        }
        // TODO move to redux listener

    }, {
        key: "handleFBOAuthRedirectSuccess",
        value: function handleFBOAuthRedirectSuccess() {
            var _this7 = this;

            this.$scope.$watch('state.app.facebook.facebook', function (facebook) {
                if (facebook) {
                    _this7.$ngRedux.dispatch(app_action_creators_1.appLoading());
                    _this7.$ngRedux.dispatch(facebook_action_creators_1.facebookSignInOAuth());
                }
            }, false);
        }
    }, {
        key: "validateFBOAuthToken",
        value: function validateFBOAuthToken() {
            var hash = this.getURLHash();
            if (hash && hash.length) {
                var access_token = hash.match(/access_token=[A-Z,a-z,0-9,_]*/);
                if (access_token && access_token.length) {
                    return true;
                }
            }
            return false;
        }
        // TODO move to redux listener

    }, {
        key: "handleGoogleLoginOAuthRedirectSuccess",
        value: function handleGoogleLoginOAuthRedirectSuccess() {
            var _this8 = this;

            this.$scope.$watch('state.app.googleLogin.auth2Ready', function (auth2Ready) {
                if (auth2Ready) {
                    _this8.$ngRedux.dispatch(app_action_creators_1.appLoading());
                    _this8.$ngRedux.dispatch(google_login_action_creators_1.googleLoginOAuth());
                }
            }, false);
        }
    }, {
        key: "validateGoogleLoginOAuthToken",
        value: function validateGoogleLoginOAuthToken() {
            var hash = this.getURLHash();
            if (hash && hash.length) {
                var id_token = hash.match(/id_token=[A-Z,a-z,0-9,_,@,=]*/);
                if (id_token && id_token.length) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "getURLHash",
        value: function getURLHash() {
            var paramsHash = this.$scope.state.router.currentParams['#'];
            if (paramsHash && paramsHash.length) {
                return paramsHash;
            }
            return this.$location.hash();
        }
    }, {
        key: "cleanURLHash",
        value: function cleanURLHash() {
            this.$location.hash('');
        }
    }]);

    return AuthLoginController;
}(base_controller_1.BaseController);

exports.AuthLoginController = AuthLoginController;
AuthLoginController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['navigationService', 'loggingService', 'firebaseService', 'facebookService', '$location', '$element']);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);
var auth_action_creators_1 = __webpack_require__(29);
var packageJson = __webpack_require__(747);

var MainSidebarController = function (_base_controller_1$Ba) {
    _inherits(MainSidebarController, _base_controller_1$Ba);

    function MainSidebarController($scope, $timeout, $ngRedux, $transitions) {
        _classCallCheck(this, MainSidebarController);

        var _this = _possibleConstructorReturn(this, (MainSidebarController.__proto__ || Object.getPrototypeOf(MainSidebarController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.version = packageJson.version;
        return _this;
    }

    _createClass(MainSidebarController, [{
        key: "signOut",
        value: function signOut() {
            this.$ngRedux.dispatch(auth_action_creators_1.auth_signOut());
        }
    }, {
        key: "selectPlayerTab",
        value: function selectPlayerTab() {
            var selectedEvent = this.$ngRedux.getState().app.events.selectedEvent;
            this.$scope.stateGo('main.player', {
                eventId: selectedEvent && selectedEvent.sys.id ? selectedEvent.sys.id : ''
            });
        }
    }]);

    return MainSidebarController;
}(base_controller_1.BaseController);

exports.MainSidebarController = MainSidebarController;
MainSidebarController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects));

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogEventModel = function LogEventModel(options) {
    _classCallCheck(this, LogEventModel);

    this.level = options.level;
    this.message = options.message ? options.message : '';
    this.displayOnScreen = angular.isDefined(options.displayOnScreen) ? options.displayOnScreen : false;
    this.autoDismiss = angular.isDefined(options.autoDismiss) ? options.autoDismiss : true;
    this.dismissAfter = options.dismissAfter > 0 ? options.dismissAfter : 3500;
    switch (options.level ? options.level : 0) {
        case 0:
            this.levelName = 'info';
            break;
        case 1:
            this.levelName = 'success';
            break;
        case 2:
            this.levelName = 'warning';
            break;
        case 3:
            this.levelName = 'error';
            break;
        default:
            this.levelName = 'info';
    }
    // TODO move to utilities
    // function capsToUnderscores(StringWithCaps) {
    //     let string_with_underscores = StringWithCaps.toString().replace(/[A-Z]/g, function (c: string) {
    //         return '_' + c.toLowerCase()
    //     }).slice(1);
    //     return string_with_underscores;
    // }
};

exports.LogEventModel = LogEventModel;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.APP_LOADING = '@@app/appLoading';
exports.APP_NOT_LOADING = '@@app/appNotLoading';
exports.APP_RESET_STATE = '@@app/appResetState';

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppState = function AppState() {
    _classCallCheck(this, AppState);

    this.loading = true;
    this.auth = new AuthState();
    this.firebase = new FirebaseState();
    this.facebook = new FacebookState();
    this.googleLogin = new GoogleLoginState();
    this.googleAnalytics = new GoogleAnalyticsState();
    this.contentful = new ContentfulState();
    this.cordova = new CordovaState();
    this.events = new EventsState();
    this.device = new DeviceState();
    // TODO persistent caching, settings etc
};

exports.AppState = AppState;

var AuthState = function AuthState() {
    _classCallCheck(this, AuthState);

    this.user = undefined;
    this.userAlreadyLoggedIn = false;
    this.signingOut = false;
    this.invalidEmails = [];
    this.invalidPasswordAttempts = 0;
};

exports.AuthState = AuthState;

var EventsState = function EventsState() {
    _classCallCheck(this, EventsState);

    this.events = [];
    this.displayedEvents = [];
    this.upcomingEvents = [];
    this.pastEvents = [];
    this.eventsLoading = false;
    this.eventsShowUpcoming = true;
    this.eventsShowPast = false;
    this.eventsSkip = 0;
    this.selectedEvent = null;
};

exports.EventsState = EventsState;

var FirebaseState = function FirebaseState() {
    _classCallCheck(this, FirebaseState);

    this.firebaseReady = false;
    this.firebaseLoading = true;
};

exports.FirebaseState = FirebaseState;

var ContentfulState = function ContentfulState() {
    _classCallCheck(this, ContentfulState);

    this.contentfulClient = null;
};

exports.ContentfulState = ContentfulState;

var GoogleAnalyticsState = function GoogleAnalyticsState() {
    _classCallCheck(this, GoogleAnalyticsState);

    this.googleAnalyticsLoading = false;
};

exports.GoogleAnalyticsState = GoogleAnalyticsState;

var GoogleLoginState = function GoogleLoginState() {
    _classCallCheck(this, GoogleLoginState);

    this.googleLoginLoading = true;
    this.googleLoginDisabled = true;
    this.gapiReady = false;
    this.auth2Ready = false;
    this.pluginReady = false;
};

exports.GoogleLoginState = GoogleLoginState;

var FacebookState = function FacebookState() {
    _classCallCheck(this, FacebookState);

    this.facebook = false;
    this.facebookCordovaPlugin = false;
    this.facebookLoading = true;
    this.facebookLoginDisabled = false;
};

exports.FacebookState = FacebookState;

var DeviceState = function DeviceState() {
    _classCallCheck(this, DeviceState);

    this.badgeNumber = null;
    this.deviceToken = null;
    this.platform = ''; // web, cordova
    this.deviceType = ''; // ios, android
};

exports.DeviceState = DeviceState;

var CordovaState = function CordovaState() {
    _classCallCheck(this, CordovaState);

    this.cordova = null;
};

exports.CordovaState = CordovaState;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var contentful_actions_1 = __webpack_require__(68);
function contentfulLoading() {
    return {
        type: contentful_actions_1.CONTENTFUL_LOADING
    };
}
exports.contentfulLoading = contentfulLoading;
function contentfulNotLoading() {
    return {
        type: contentful_actions_1.CONTENTFUL_NOT_LOADING
    };
}
exports.contentfulNotLoading = contentfulNotLoading;
function contentfulInitWeb() {
    return {
        type: contentful_actions_1.CONTENTFUL_INIT_WEB
    };
}
exports.contentfulInitWeb = contentfulInitWeb;
function contentfulInitWebSuccess() {
    return {
        type: contentful_actions_1.CONTENTFUL_INIT_WEB_SUCCESS
    };
}
exports.contentfulInitWebSuccess = contentfulInitWebSuccess;
function contentfulInitWebError(error) {
    return {
        type: contentful_actions_1.CONTENTFUL_INIT_WEB_ERROR,
        payload: error
    };
}
exports.contentfulInitWebError = contentfulInitWebError;
function contentfulSetClient(contentfulClient) {
    return {
        type: contentful_actions_1.CONTENTFUL_SET_CLIENT,
        payload: contentfulClient
    };
}
exports.contentfulSetClient = contentfulSetClient;
function contentfulResetClient() {
    return {
        type: contentful_actions_1.CONTENTFUL_RESET_CLIENT
    };
}
exports.contentfulResetClient = contentfulResetClient;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.CORDOVA_INIT = '@@app/cordovaInit';
exports.CORDOVA_RESET = '@@app/cordovaReset';

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firebase_actions_1 = __webpack_require__(71);
function firebaseLoading() {
    return {
        type: firebase_actions_1.FIREBASE_LOADING
    };
}
exports.firebaseLoading = firebaseLoading;
function firebaseNotLoading() {
    return {
        type: firebase_actions_1.FIREBASE_NOT_LOADING
    };
}
exports.firebaseNotLoading = firebaseNotLoading;
function firebaseInitWeb() {
    return {
        type: firebase_actions_1.FIREBASE_INIT_WEB
    };
}
exports.firebaseInitWeb = firebaseInitWeb;
function firebaseInitWebError(error) {
    return {
        type: firebase_actions_1.FIREBASE_INIT_WEB_ERROR,
        payload: error
    };
}
exports.firebaseInitWebError = firebaseInitWebError;
function firebaseInitWebSuccess() {
    return {
        type: firebase_actions_1.FIREBASE_INIT_WEB_SUCCESS
    };
}
exports.firebaseInitWebSuccess = firebaseInitWebSuccess;
function firebaseLoadScriptSuccess() {
    return {
        type: firebase_actions_1.FIREBASE_LOAD_SCRIPT_SUCCESS
    };
}
exports.firebaseLoadScriptSuccess = firebaseLoadScriptSuccess;
function firebaseLoadScriptError(error) {
    return {
        type: firebase_actions_1.FIREBASE_LOAD_SCRIPT_ERROR,
        payload: error
    };
}
exports.firebaseLoadScriptError = firebaseLoadScriptError;
function firebaseInitCordova() {
    return {
        type: firebase_actions_1.FIREBASE_INIT_CORDOVA
    };
}
exports.firebaseInitCordova = firebaseInitCordova;
function firebaseInitCordovaError(error) {
    return {
        type: firebase_actions_1.FIREBASE_INIT_CORDOVA_ERROR,
        payload: error
    };
}
exports.firebaseInitCordovaError = firebaseInitCordovaError;
function firebaseInitCordovaSuccess() {
    return {
        type: firebase_actions_1.FIREBASE_INIT_CORDOVA_SUCCESS
    };
}
exports.firebaseInitCordovaSuccess = firebaseInitCordovaSuccess;
function firebaseGlobalReady() {
    return {
        type: firebase_actions_1.FIREBASE_GLOBAL_READY
    };
}
exports.firebaseGlobalReady = firebaseGlobalReady;

/***/ }),
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"--ios-chrome":"main-tabs--ios-chrome","__wrapper":"main-tabs__wrapper","__button":"main-tabs__button","bounce-up-down":"main-tabsbounce-up-down","tap-effect-in":"main-tabstap-effect-in","tap-effect-out":"main-tabstap-effect-out"};

/***/ }),
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scssAnimationsVariables = __webpack_require__(726);
function AppAnimations(navigationService) {
    return {
        enter: function enter(element, doneFn) {
            if (document.documentElement.clientWidth < 768) {
                if (navigationService.isAnimationAllowed()) {
                    setTimeout(function () {
                        element.removeClass('app-animations__fade-in');
                        element.removeClass('app-animations__leave-left');
                        element.removeClass('app-animations__leave-right');
                        element.removeClass('app-animations__enter-right');
                        if (navigationService.comingFromBackButton) {
                            element.addClass('app-animations__enter-left');
                        } else {
                            element.addClass('app-animations__enter-right');
                        }
                        doneFn();
                    }, +scssAnimationsVariables['tapEffectOutDuration'].replace('ms', ''));
                } else {
                    element.removeClass('app-animations__fade-in');
                    element.removeClass('app-animations__leave-left');
                    element.removeClass('app-animations__leave-right');
                    element.removeClass('app-animations__enter-right');
                    element.removeClass('app-animations__instant-fade-out');
                    element.addClass('app-animations__instant-fade-in');
                    element.addClass('app-animations__tap-effect-cancel');
                    setTimeout(function () {
                        element.removeClass('app-animations__tap-effect-cancel');
                    }, +scssAnimationsVariables['tapEffectOutDuration'].replace('ms', ''));
                    doneFn();
                }
            } else {
                element.removeClass('app-animations__fade-out');
                element.addClass('app-animations__fade-in');
                setTimeout(function () {
                    doneFn();
                }, +scssAnimationsVariables['tapEffectOutDuration'].replace('ms', ''));
            }
        },
        leave: function leave(element, doneFn) {
            if (document.documentElement.clientWidth < 768) {
                if (navigationService.isAnimationAllowed()) {
                    setTimeout(function () {
                        element.removeClass('app-animations__fade-in');
                        element.removeClass('app-animations__enter-right');
                        element.removeClass('app-animations__enter-left');
                        element.removeClass('app-animations__leave-left');
                        if (navigationService.comingFromBackButton) {
                            element.addClass('app-animations__leave-right');
                        } else {
                            element.addClass('app-animations__leave-left');
                        }
                        setTimeout(function () {
                            doneFn();
                        }, +scssAnimationsVariables['uiRouterTransitionDuration'].replace('ms', ''));
                    }, +scssAnimationsVariables['tapEffectOutDuration'].replace('ms', ''));
                } else {
                    element.removeClass('app-animations__fade-in');
                    element.removeClass('app-animations__enter-right');
                    element.removeClass('app-animations__enter-left');
                    element.removeClass('app-animations__leave-left');
                    element.removeClass('app-animations__instant-fade-in');
                    element.addClass('app-animations__instant-fade-out');
                    doneFn();
                }
            } else {
                element.removeClass('app-animations__fade-in');
                element.addClass('app-animations__fade-out');
                setTimeout(function () {
                    doneFn();
                }, +scssAnimationsVariables['uiRouterTransitionDuration'].replace('ms', ''));
            }
        }
    };
}
exports.AppAnimations = AppAnimations;
AppAnimations.$inject = ['navigationService'];

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//================================================================
// GLOBAL STYLES
//================================================================

//================================================================
// LAYOUTS & UTILITY CLASSES
//
// (flexbox helper classes, commonly used layouts,
// grids, media-queries, ...)
//================================================================

__webpack_require__(572);
__webpack_require__(566);
//================================================================
// BASE (html, body, typography...)
//================================================================
__webpack_require__(562);
__webpack_require__(564);
__webpack_require__(568);
//================================================================
// STYLE COMPONENTS
//
// (can be composed of BASE elements and other components)
//================================================================
__webpack_require__(571);
__webpack_require__(569);
__webpack_require__(565);
__webpack_require__(570);
// import '../shared/styles/partials/_badges.scss';
__webpack_require__(567);
__webpack_require__(563);
//================================================================
// ICONS AND FONTS
//================================================================
__webpack_require__(538);
//================================================================
// LOCAL STYLES
//================================================================
__webpack_require__(540);
__webpack_require__(539);
var app_controller_1 = __webpack_require__(276);
var AppTemplate = __webpack_require__(577);
exports.AppComponent = {
    template: AppTemplate,
    controller: app_controller_1.AppController
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redux_1 = __webpack_require__(78);
var redux_thunk_1 = __webpack_require__(675);
var redux_logger_1 = __webpack_require__(674);
var index_js_1 = __webpack_require__(66);
var ui_router_sticky_states_1 = __webpack_require__(744);
var app_constants_1 = __webpack_require__(56);
var app_reducers_1 = __webpack_require__(326);
var app_listener_middleware_1 = __webpack_require__(325);
var auth_listeners_1 = __webpack_require__(327);
var logging_listeners_1 = __webpack_require__(344);
var firebase_listeners_1 = __webpack_require__(338);
var facebook_listeners_1 = __webpack_require__(336);
var google_login_listeners_1 = __webpack_require__(342);
var contentful_listeners_1 = __webpack_require__(329);
var events_listeners_1 = __webpack_require__(334);
function AppConfig($stateProvider, $uiRouterProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider, $ngReduxProvider, $uiViewScrollProvider) {
    //================================================================
    // LOCATION
    //================================================================
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    // $locationProvider.html5Mode(true).hashPrefix('#');
    if (window['cordova']) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false,
            rewriteLinks: false
        });
    } else {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
            rewriteLinks: true
        });
    }
    $locationProvider.hashPrefix('!');
    //================================================================
    // UI ROUTER
    //================================================================    
    $stateProvider.state('app', {
        url: '/',
        redirectTo: 'login'
    });
    $uiViewScrollProvider.useAnchorScroll(); // TODO.. still needed ?
    $uiRouterProvider.plugin(ui_router_sticky_states_1.StickyStatesPlugin);
    //================================================================
    // URL
    //================================================================
    $urlRouterProvider.otherwise('/');
    //================================================================
    // LOCAL STORAGE
    //================================================================    
    localStorageServiceProvider.setPrefix(app_constants_1.LOCAL_STORAGE_PREFIX);
    //================================================================
    // REDUX AND REDUX-UI-ROUTER
    //================================================================
    var logger = redux_logger_1.createLogger(app_constants_1.REDUX_LOGGER_OPTIONS);
    // *** example of a simple middleware
    // const logger = store => next => action => {
    //     console.log(action.type, action);
    //     return next(action);
    //     // console.log('next state', store.getState())
    // };
    // ***
    var reducers = redux_1.combineReducers({
        router: index_js_1.router,
        app: app_reducers_1.appStateReducer
    });
    var listeners = [events_listeners_1.eventsListener, contentful_listeners_1.contentfulListener, google_login_listeners_1.googleLoginListener, facebook_listeners_1.facebookListener, firebase_listeners_1.firebaseListener, auth_listeners_1.authListener, logging_listeners_1.loggingListeners];
    var middlewares = ['ngUiRouterMiddleware', redux_thunk_1.default, app_listener_middleware_1.listenerMiddleWare(listeners), logger];
    var enhancers = [];
    // *** for redux dev tool (chrome extension)
    if (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) {
        var DevToolCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
        enhancers.push(DevToolCompose());
    }
    $ngReduxProvider.createStoreWith(reducers, middlewares, enhancers);
}
exports.AppConfig = AppConfig;
AppConfig.$inject = ['$stateProvider', '$uiRouterProvider', '$urlRouterProvider', '$locationProvider', 'localStorageServiceProvider', '$ngReduxProvider', '$uiViewScrollProvider'];

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auth_action_creators_1 = __webpack_require__(29);
function AppRun($rootScope, $ngRedux, $transitions, $timeout) {
    //================================================================
    // AUTHENTICATION INTERCEPTOR
    //================================================================
    var requiresAuthCriteria = {
        to: function to(state) {
            return state.params && state.params.authRequired && state.params.authRequired.config.value;
        }
    };
    var validateAuth = function validateAuth($transition$) {
        var firebaseService = $transition$.injector().get('firebaseService');
        var $ngRedux = $transition$.injector().get('$ngRedux');
        var $state = $transition$.router.stateService;
        var state = $ngRedux.getState();
        // allow route when we have a valid user
        if (state.app.auth.user) {
            return;
        }
        var targetState = $state.target('login', undefined, {
            location: false,
            reload: false
        });
        // we know the state when firebase has initialized,
        // this can happen when user hit the back button after logging out
        if (state.app.firebase.firebaseReady && !state.app.firebase.firebaseLoading) {
            return targetState;
        }
        // if firebase is loading, we register a promise that
        // resolves when we have information on the auth status of the user
        return new Promise(function (resolve, reject) {
            var unsubscribeReduxEvents = $ngRedux.subscribe(function () {
                // important to get fresh state
                var state = $ngRedux.getState();
                if (!state.app.firebase.firebaseLoading && state.app.firebase.firebaseReady) {
                    if (firebaseService.getFirebaseGlobal()) {
                        var onAuthStateChangedUnsubscribe = firebaseService.getFirebaseGlobal().auth().onAuthStateChanged(function (user) {
                            if (user === null) {
                                resolve(targetState);
                            } else if (user) {
                                resolve();
                            }
                            onAuthStateChangedUnsubscribe();
                        });
                        unsubscribeReduxEvents();
                    }
                }
            });
        });
    };
    $transitions.onBefore(requiresAuthCriteria, validateAuth, { priority: 10 });
    //================================================================
    // TARGET STATE INTERCEPTOR
    //================================================================
    var loginAndLoginWEmailStatesCriteria = {
        to: function to(state) {
            return state.name === 'login';
        }
    };
    var setTargetStateInAppState = function setTargetStateInAppState($transition$) {
        var $ngRedux = $transition$.injector().get('$ngRedux');
        // let $state: any = $transition$.router.stateService;
        // let state = $ngRedux.getState();
        if ($transition$.redirectedFrom() != null) {
            // The auth was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
            // Return to the original attempted target state (e.g., contacts)
            $ngRedux.dispatch(auth_action_creators_1.auth_setTargetState($transition$.redirectedFrom().targetState()));
            return;
        }
        var $state = $transition$.injector().get('$state');
        // let $state = $transition$.router.stateService;
        // The auth was not redirected to the login state; they directly activated the login state somehow.
        // Return them to the state they came from.
        if ($transition$.from().name !== '' && $transition$.from().name !== 'signup' && $transition$.from().name !== 'main.settings' && $transition$.from().name !== 'login' && $transition$.from().name !== 'loginEmail' && $transition$.from().name !== 'resetPassword') {
            $ngRedux.dispatch(auth_action_creators_1.auth_setTargetState($state.target($transition$.from(), $transition$.params("from"))));
            return;
        }
        // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
        $ngRedux.dispatch(auth_action_creators_1.auth_setTargetState($state.target('main')));
    };
    $transitions.onFinish(loginAndLoginWEmailStatesCriteria, setTargetStateInAppState);
}
exports.AppRun = AppRun;
AppRun.$inject = ['$rootScope', '$ngRedux', '$transitions', '$timeout'];

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auth_1 = __webpack_require__(288);
var ui_components_1 = __webpack_require__(286);
var helpers_1 = __webpack_require__(302);
var main_1 = __webpack_require__(313);
exports.ComponentsModule = angular.module('app-components', [main_1.MainModule.name, auth_1.AuthModule.name, ui_components_1.UIComponentsModule.name, helpers_1.HelperModule.name]);

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnalyticsService = function () {
    function AnalyticsService($q, deviceService, googleAnalyticsService, firebaseAnalyticsService) {
        _classCallCheck(this, AnalyticsService);

        this.$q = $q;
        this.deviceService = deviceService;
        this.googleAnalyticsService = googleAnalyticsService;
        this.firebaseAnalyticsService = firebaseAnalyticsService;
    }

    _createClass(AnalyticsService, [{
        key: 'log',
        value: function log(logEvent) {
            // warnings and errors are logged to analytics, depending on platform
            if (this.deviceService.isCordovaApp()) {
                this.firebaseAnalyticsService.sendEvent();
            } else {
                this.googleAnalyticsService.sendEvent(logEvent);
            }
        }
    }]);

    return AnalyticsService;
}();

exports.AnalyticsService = AnalyticsService;
AnalyticsService.$inject = ['$q', 'deviceService', 'googleAnalyticsService', 'firebaseAnalyticsService'];

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _forEach = __webpack_require__(651);
var _filter = __webpack_require__(650);
var _groupBy = __webpack_require__(652);
// Do not use the node_modules version.. it requires lodash locally... which can be a different version from
// the one the author intended to use. This version is a prod ready version, I added exports to it.
var contentful = __webpack_require__(746);

var ContentfulService = function () {
    function ContentfulService($q, $filter) {
        _classCallCheck(this, ContentfulService);

        this.$q = $q;
        this.$filter = $filter;
        this.dateFormat = 'yyyy-MM-dd';
    }

    _createClass(ContentfulService, [{
        key: "createClient",
        value: function createClient(options) {
            return contentful.createClient(options);
        }
    }, {
        key: "getEvents",
        value: function getEvents(client, skip, limit) {
            var _this = this;

            var deferred = this.$q.defer();
            client.getEntries({
                'content_type': 'event',
                'include': 1,
                'order': '-fields.date',
                'limit': limit && limit > 0 ? limit : 10,
                'skip': skip && skip > 0 ? skip : 0
            }, true).then(function (entries) {
                if (entries && entries.items && entries.items.length) {
                    _forEach(entries.items, _this.formatEventDate);
                    deferred.resolve(entries.items);
                } else {
                    deferred.reject("No events could be retrieved.");
                }
            }).catch(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }, {
        key: "getEventBySysId",
        value: function getEventBySysId(client, id) {
            var _this2 = this;

            var deferred = this.$q.defer();
            client.getEntry(id, {
                'include': 1
            }).then(function (event) {
                if (event) {
                    deferred.resolve(_this2.formatEventDate(event));
                } else {
                    deferred.reject("Event could not be retrieved.");
                }
            }).catch(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }, {
        key: "formatEventDate",
        value: function formatEventDate(event) {
            event.timestamp = new Date(event.fields.date).getTime();
            event.fields.formattedDate = moment(event.timestamp).fromNow();
            event.playEvent = false;
            return event;
        }
    }, {
        key: "getUpcomingEvents",
        value: function getUpcomingEvents(contentfulEvents) {
            var upcomingEvents = _filter(contentfulEvents, function (e) {
                if (moment(e.timestamp).isAfter(moment().subtract(8, 'hour'))) {
                    return e;
                }
            });
            return this.$filter('orderBy')(upcomingEvents, 'timestamp', false);
        }
    }, {
        key: "getPastEvents",
        value: function getPastEvents(contentfulEvents) {
            var pastEvents = _filter(contentfulEvents, function (e) {
                if (moment(e.timestamp).isBefore(moment().subtract(8, 'hour'))) {
                    return e;
                }
            });
            return this.$filter('orderBy')(pastEvents, 'timestamp', true);
        }
    }, {
        key: "groupEventsByDay",
        value: function groupEventsByDay(events) {
            var _this3 = this;

            return _groupBy(events, function (e) {
                return _this3.$filter('date')(e.timestamp, _this3.dateFormat);
            });
        }
    }, {
        key: "getContentfulGlobal",
        value: function getContentfulGlobal() {
            if (contentful) {
                return contentful;
            }
        }
    }]);

    return ContentfulService;
}();

exports.ContentfulService = ContentfulService;
ContentfulService.$inject = ['$q', '$filter'];

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeviceService = function () {
    function DeviceService($q, $ngRedux) {
        _classCallCheck(this, DeviceService);

        this.$q = $q;
        this.$ngRedux = $ngRedux;
    }

    _createClass(DeviceService, [{
        key: 'isCordovaApp',
        value: function isCordovaApp() {
            return this.getCordovaGlobal();
        }
    }, {
        key: 'isiOS',
        value: function isiOS() {
            return this.matchUserAgent(/iPhone|iPad|iPod/i);
        }
    }, {
        key: 'isChromeiOS',
        value: function isChromeiOS() {
            return this.matchUserAgent(/CriOS/);
        }
    }, {
        key: 'isAndroid',
        value: function isAndroid() {
            return this.matchUserAgent(/Android/i);
        }
    }, {
        key: 'matchUserAgent',
        value: function matchUserAgent(regExp) {
            var matches = navigator.userAgent.match(regExp);
            return matches !== null && matches.length !== 0;
        }
    }, {
        key: 'isWeb',
        value: function isWeb() {
            return !this.isCordovaApp();
        }
    }, {
        key: 'getPlatform',
        value: function getPlatform() {
            if (this.isCordovaApp()) {
                if (this.isiOS()) {
                    return 'ios';
                } else {
                    return 'android';
                }
            } else {
                return 'web';
            }
        }
    }, {
        key: 'getCordovaGlobal',
        value: function getCordovaGlobal() {
            if (window['cordova']) {
                return window['cordova'];
            }
        }
    }]);

    return DeviceService;
}();

exports.DeviceService = DeviceService;
DeviceService.$inject = ['$q', '$ngRedux'];

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_service_1 = __webpack_require__(73);

var FacebookService = function (_base_service_1$BaseS) {
    _inherits(FacebookService, _base_service_1$BaseS);

    function FacebookService($q, $filter, loggingService) {
        _classCallCheck(this, FacebookService);

        return _possibleConstructorReturn(this, (FacebookService.__proto__ || Object.getPrototypeOf(FacebookService)).call(this, $q, $filter, loggingService));
    }
    //================================================================
    // WEB
    //================================================================


    _createClass(FacebookService, [{
        key: "jQueryLoadFacebookSDKScript",
        value: function jQueryLoadFacebookSDKScript() {
            return jQuery.getScript("https://connect.facebook.net/en_US/sdk.js");
        }
    }, {
        key: "getLoginStatus",
        value: function getLoginStatus(cb) {
            this.getFBGlobal().getLoginStatus(cb);
        }
    }, {
        key: "getFBGlobal",
        value: function getFBGlobal() {
            if (window['FB']) {
                return window['FB'];
            }
        }
        //================================================================
        // CORDOVA
        //================================================================

    }, {
        key: "signOutCordova",
        value: function signOutCordova() {
            if (this.getFBPluginGlobal()) {
                this.getFBPluginGlobal().logout();
            }
        }
    }, {
        key: "getLoginStatusCordova",
        value: function getLoginStatusCordova(cb) {
            var forceServerRoundTrip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.getFBPluginGlobal()) {
                this.getFBPluginGlobal().getLoginStatus(cb, forceServerRoundTrip);
            }
        }
    }, {
        key: "getFBPluginGlobal",
        value: function getFBPluginGlobal() {
            if (window['facebookConnectPlugin']) {
                return window['facebookConnectPlugin'];
            }
        }
    }]);

    return FacebookService;
}(base_service_1.BaseService);

exports.FacebookService = FacebookService;
FacebookService.$inject = [].concat(_toConsumableArray(base_service_1.BaseService.injects));

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _map = __webpack_require__(661);
var base_service_1 = __webpack_require__(73);
var app_constants_1 = __webpack_require__(56);

var FirebaseService = function (_base_service_1$BaseS) {
    _inherits(FirebaseService, _base_service_1$BaseS);

    function FirebaseService($q, $filter, loggingService, deviceService, facebookService, googleLoginService, $ngRedux) {
        _classCallCheck(this, FirebaseService);

        var _this = _possibleConstructorReturn(this, (FirebaseService.__proto__ || Object.getPrototypeOf(FirebaseService)).call(this, $q, $filter, loggingService));

        _this.deviceService = deviceService;
        _this.facebookService = facebookService;
        _this.googleLoginService = googleLoginService;
        _this.$ngRedux = $ngRedux;
        return _this;
    }

    _createClass(FirebaseService, [{
        key: "signInWithEmailAndPassword",
        value: function signInWithEmailAndPassword(email, password) {
            var deferred = this.$q.defer();
            deferred.resolve(this.getFirebaseGlobal().auth().signInWithEmailAndPassword(email, password));
            return deferred.promise;
        }
    }, {
        key: "createUserWithEmailAndPassword",
        value: function createUserWithEmailAndPassword(email, password) {
            var deferred = this.$q.defer();
            deferred.resolve(this.getFirebaseGlobal().auth().createUserWithEmailAndPassword(email, password));
            return deferred.promise;
        }
    }, {
        key: "resetPassword",
        value: function resetPassword(email) {
            var deferred = this.$q.defer();
            deferred.resolve(this.getFirebaseGlobal().auth().sendPasswordResetEmail(email));
            return deferred.promise;
        }
    }, {
        key: "signOut",
        value: function signOut() {
            this.getFirebaseGlobal().auth().signOut();
        }
        //================================================================
        // WEB
        //================================================================

    }, {
        key: "initWeb",
        value: function initWeb() {
            //================================================================
            // STAGING
            //================================================================
            // this.getFirebaseGlobal().initializeApp(FIREBASE_INIT_OPTIONS_STAGING);
            //================================================================
            // PROD
            //================================================================
            this.getFirebaseGlobal().initializeApp(app_constants_1.FIREBASE_INIT_WEB_OPTIONS_PROD);
        }
    }, {
        key: "signInGoogle",
        value: function signInGoogle(GoogleUser) {
            var deferred = this.$q.defer();
            if (GoogleUser) {
                deferred.resolve(this.passGoogleLoginCredentialToFirebase(GoogleUser));
            } else {
                var GoogleAuth = this.googleLoginService.getGoogleAuthInstance();
                if (GoogleAuth.isSignedIn.get()) {
                    // pass credentials to firebase auth
                    deferred.resolve(this.passGoogleLoginCredentialToFirebase(GoogleAuth.currentUser.get()));
                } else {
                    // redirection to OAuth consent screen
                    GoogleAuth.signIn();
                }
            }
            return deferred.promise;
        }
    }, {
        key: "jQueryLoadFirebaseScript",
        value: function jQueryLoadFirebaseScript() {
            return jQuery.getScript(app_constants_1.FIREBASE_SDK_URL);
        }
    }, {
        key: "signInFB",
        value: function signInFB(response) {
            var _this2 = this;

            var deferred = this.$q.defer();
            if (response) {
                this.handleFBLoginStatusResponse.bind(this)(deferred, response);
            } else {
                this.facebookService.getLoginStatus(function (response) {
                    _this2.handleFBLoginStatusResponse.bind(_this2)(deferred, response);
                });
            }
            return deferred.promise;
        }
    }, {
        key: "handleFBLoginStatusResponse",
        value: function handleFBLoginStatusResponse(deferred, response) {
            // connected.       The person is logged into Facebook, and has logged into your app.
            // not_authorized.  The person is logged into Facebook, but has not logged into your app.
            // unknown.         The person is not logged into Facebook, so you don't know if they've logged into your app.
            switch (response.status) {
                case 'connected':
                    {
                        deferred.resolve(this.passFacebookCredentialToFirebase(response));
                        break;
                    }
                case 'not_authorized':
                case 'unknown':
                    {
                        // location.href = encodeURI(FACEBOOK_OAUTH_REDIRECT_URL_DEV);
                        location.href = encodeURI(app_constants_1.FACEBOOK_OAUTH_REDIRECT_URL_PROD);
                        deferred.resolve();
                        break;
                    }
            }
        }
        //================================================================
        // CORDOVA
        //================================================================

    }, {
        key: "initCordova",
        value: function initCordova() {
            //================================================================
            // STAGING
            //================================================================
            // this.getFirebaseGlobal().initializeApp(FIREBASE_INIT_CORDOVA_OPTIONS_STAGING);
            //================================================================
            // PROD
            //================================================================
            this.getFirebaseGlobal().initializeApp(app_constants_1.FIREBASE_INIT_CORDOVA_OPTIONS_PROD);
        }
    }, {
        key: "signInGoogleCordova",
        value: function signInGoogleCordova(pluginAuthResponse) {
            var _this3 = this;

            var deferred = this.$q.defer();
            try {
                this.googleLoginService.signInCordova(app_constants_1.GOOGLE_LOGIN_CORDOVA_OPTIONS, function (response) {
                    deferred.resolve(_this3.passGoogleLoginPluginCredentialToFirebase(response));
                }, function (error) {
                    deferred.reject(error);
                });
            } catch (error) {
                deferred.reject(error);
            }
            return deferred.promise;
        }
    }, {
        key: "signInFBCordova",
        value: function signInFBCordova(response) {
            var _this4 = this;

            var deferred = this.$q.defer();
            if (response) {
                this.handleFBLoginStatusResponseCordova.bind(this)(deferred, response);
            } else {
                this.facebookService.getLoginStatusCordova(function (response) {
                    _this4.handleFBLoginStatusResponseCordova.bind(_this4)(deferred, response);
                });
            }
            return deferred.promise;
        }
    }, {
        key: "handleFBLoginStatusResponseCordova",
        value: function handleFBLoginStatusResponseCordova(deferred, response) {
            var _this5 = this;

            switch (response.status) {
                case 'connected':
                    {
                        deferred.resolve(this.passFacebookCredentialToFirebase(response));
                        break;
                    }
                case 'not_authorized':
                case 'unknown':
                    {
                        this.facebookService.getFBPluginGlobal().login(app_constants_1.FACEBOOK_LOGIN_SCOPES, function (response) {
                            deferred.resolve(_this5.passFacebookCredentialToFirebase(response));
                        }, function (error) {
                            deferred.reject(error);
                        });
                        break;
                    }
            }
        }
    }, {
        key: "getDeviceToken",
        value: function getDeviceToken() {
            this.getFirebasePluginGlobal().getToken(function (token) {
                // save this server-side and use it to push notifications to this device
                console.log(token);
            }, function (error) {
                console.error(error);
            });
        }
    }, {
        key: "onTokenRefresh",
        value: function onTokenRefresh() {
            this.getFirebasePluginGlobal().onTokenRefresh(function (token) {
                // save this server-side and use it to push notifications to this device
                console.log(token);
            }, function (error) {
                console.error(error);
            });
        }
    }, {
        key: "onNotificationOpen",
        value: function onNotificationOpen() {
            this.getFirebasePluginGlobal().onNotificationOpen(function (notification) {
                // save this server-side and use it to push notifications to this device
                console.log(notification);
            }, function (error) {
                console.error(error);
            });
        }
    }, {
        key: "grantPermissioniOS",
        value: function grantPermissioniOS() {
            this.getFirebasePluginGlobal().hasPermission(function (data) {
                console.log(data.isEnabled);
            });
        }
    }, {
        key: "setBadgeNumber",
        value: function setBadgeNumber() {
            var badgeNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.getFirebasePluginGlobal().setBadgeNumber(badgeNumber);
        }
    }, {
        key: "getBadgeNumber",
        value: function getBadgeNumber() {
            this.getFirebasePluginGlobal().getBadgeNumber(function (n) {
                console.log(n);
            });
        }
    }, {
        key: "getFirebasePluginGlobal",
        value: function getFirebasePluginGlobal() {
            if (window['FirebasePlugin']) {
                return window['FirebasePlugin'];
            }
        }
        //================================================================
        // HELPERS METHODS
        //================================================================

    }, {
        key: "passFacebookCredentialToFirebase",
        value: function passFacebookCredentialToFirebase(response) {
            return this.signInWithCredential(this.getFirebaseGlobal().auth.FacebookAuthProvider.credential(response.authResponse.accessToken));
        }
    }, {
        key: "passGoogleLoginCredentialToFirebase",
        value: function passGoogleLoginCredentialToFirebase(GoogleUser) {
            return this.signInWithCredential(this.getFirebaseGlobal().auth.GoogleAuthProvider.credential(GoogleUser.getAuthResponse().id_token));
        }
    }, {
        key: "passGoogleLoginPluginCredentialToFirebase",
        value: function passGoogleLoginPluginCredentialToFirebase(pluginAuthResponse) {
            return this.signInWithCredential(this.getFirebaseGlobal().auth.GoogleAuthProvider.credential(pluginAuthResponse.idToken));
        }
    }, {
        key: "getFirebaseGlobal",
        value: function getFirebaseGlobal() {
            if (window['firebase']) {
                return window['firebase'];
            }
        }
    }, {
        key: "signInWithCredential",
        value: function signInWithCredential(credential) {
            return this.getFirebaseGlobal().auth().signInWithCredential(credential);
        }
        //================================================================
        // TODO REMOVE
        //================================================================

    }, {
        key: "authProviderIsFB",
        value: function authProviderIsFB() {
            return _map(this.getFirebaseGlobal().auth().currentUser.providerData, function (d) {
                return d.providerId === 'facebook.com';
            })[0];
        }
    }, {
        key: "checkIfUserIsEqual",
        value: function checkIfUserIsEqual(authProviderResponse, firebaseUser) {
            if (firebaseUser && authProviderResponse) {
                var providerData = firebaseUser.providerData;
                for (var i = 0; i < providerData.length; i++) {
                    if (providerData[i].providerId === this.getFirebaseGlobal().auth.FacebookAuthProvider.PROVIDER_ID && providerData[i].uid === authProviderResponse.userID) {
                        // We don't need to re-auth the Firebase connection.
                        return true;
                    }
                }
            }
            return false;
        }
    }]);

    return FirebaseService;
}(base_service_1.BaseService);

exports.FirebaseService = FirebaseService;
FirebaseService.$inject = [].concat(_toConsumableArray(base_service_1.BaseService.injects), ['deviceService', 'facebookService', 'googleLoginService', '$ngRedux']);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_service_1 = __webpack_require__(73);
var app_constants_1 = __webpack_require__(56);

var GoogleLoginService = function (_base_service_1$BaseS) {
    _inherits(GoogleLoginService, _base_service_1$BaseS);

    function GoogleLoginService($q, $filter, loggingService) {
        _classCallCheck(this, GoogleLoginService);

        return _possibleConstructorReturn(this, (GoogleLoginService.__proto__ || Object.getPrototypeOf(GoogleLoginService)).call(this, $q, $filter, loggingService));
    }
    //================================================================
    // WEB
    //================================================================


    _createClass(GoogleLoginService, [{
        key: "signOut",
        value: function signOut() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                if (_this2.getGoogleLoginGlobal() && _this2.getGoogleLoginGlobal().auth2 && _this2.getGoogleLoginGlobal().auth2.getAuthInstance()) {
                    resolve(_this2.getGoogleLoginGlobal().auth2.getAuthInstance().signOut());
                } else {
                    resolve();
                }
            });
        }
    }, {
        key: "getGoogleAuthInstance",
        value: function getGoogleAuthInstance() {
            if (this.getGoogleLoginGlobal()) {
                return this.getGoogleLoginGlobal().auth2.getAuthInstance();
            }
        }
    }, {
        key: "revokeGoogleLoginAuthorization",
        value: function revokeGoogleLoginAuthorization() {
            if (this.getGoogleLoginGlobal()) {
                this.getGoogleLoginGlobal().auth2.getAuthInstance().disconnect();
            }
        }
    }, {
        key: "jQueryLoadGoogleLoginSDKScript",
        value: function jQueryLoadGoogleLoginSDKScript() {
            return jQuery.getScript(app_constants_1.GOOGLE_LOGIN_SDK_URL);
        }
    }, {
        key: "getGoogleLoginGlobal",
        value: function getGoogleLoginGlobal() {
            if (window['gapi']) {
                return window['gapi'];
            }
        }
        //================================================================
        // CORDOVA
        //================================================================

    }, {
        key: "signInCordova",
        value: function signInCordova(config, success, error) {
            if (this.getGooglePluginGlobal()) {
                this.getGooglePluginGlobal().login(config, success, error);
            }
        }
    }, {
        key: "trySilentLogin",
        value: function trySilentLogin(config, success, error) {
            if (this.getGooglePluginGlobal()) {
                this.getGooglePluginGlobal().trySilentLogin(config, success, error);
            }
        }
    }, {
        key: "signOutCordova",
        value: function signOutCordova(cb) {
            if (this.getGooglePluginGlobal()) {
                this.getGooglePluginGlobal().logout(cb);
            }
        }
    }, {
        key: "getGooglePluginGlobal",
        value: function getGooglePluginGlobal() {
            if (window['plugins'] && window['plugins']['googleplus']) {
                return window['plugins']['googleplus'];
            }
        }
    }]);

    return GoogleLoginService;
}(base_service_1.BaseService);

exports.GoogleLoginService = GoogleLoginService;
GoogleLoginService.$inject = [].concat(_toConsumableArray(base_service_1.BaseService.injects));

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var log_event_model_1 = __webpack_require__(155);

var LoggingService = function () {
    function LoggingService($q, onScreenNotificationsService, pushNotificationsService, analyticsService, deviceService, $log) {
        _classCallCheck(this, LoggingService);

        this.$q = $q;
        this.onScreenNotificationsService = onScreenNotificationsService;
        this.pushNotificationsService = pushNotificationsService;
        this.analyticsService = analyticsService;
        this.deviceService = deviceService;
        this.$log = $log;
    }

    _createClass(LoggingService, [{
        key: "log",
        value: function log(logEvent) {
            var log = new log_event_model_1.LogEventModel(logEvent);
            // on screen
            if (log.displayOnScreen) {
                this.onScreenNotificationsService.publishFromLogEvent(log);
            }
            // analytics reporting
            if (log.level > 1) {
                this.analyticsService.log(log);
            }
        }
    }]);

    return LoggingService;
}();

exports.LoggingService = LoggingService;
LoggingService.$inject = ['$q', 'onScreenNotificationsService', 'pushNotificationsService', 'analyticsService', 'deviceService', '$log'];

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_service_1 = __webpack_require__(73);
//================================================================
// CORDOVA: https://documentation.onesignal.com/docs/cordova-sdk
// WEB: https://documentation.onesignal.com/docs/web-push-sdk
//================================================================

var OneSignalService = function (_base_service_1$BaseS) {
    _inherits(OneSignalService, _base_service_1$BaseS);

    function OneSignalService($q, $filter, loggingService) {
        _classCallCheck(this, OneSignalService);

        return _possibleConstructorReturn(this, (OneSignalService.__proto__ || Object.getPrototypeOf(OneSignalService)).call(this, $q, $filter, loggingService));
    }

    _createClass(OneSignalService, [{
        key: "getOneSignalGlobal",
        value: function getOneSignalGlobal() {
            if (window['OneSignal']) {
                return window['OneSignal'];
            }
        }
        //================================================================
        // WEB
        //================================================================

    }, {
        key: "initWeb",
        value: function initWeb() {
            var _this2 = this;

            var deferred = this.$q.defer();
            jQuery.getScript("https://cdn.onesignal.com/sdks/OneSignalSDK.js").done(function (script, textStatus) {
                _this2.checkOneSignalIsLoaded(deferred);
                try {
                    _this2.getOneSignalGlobal().push(["init", {
                        appId: "a4acb3bb-f4db-4e8a-b631-cf1f725e8269",
                        autoRegister: false,
                        notifyButton: {
                            enable: true /* Set to false to hide */
                        },
                        persistNotification: false,
                        safari_web_id: 'web.onesignal.auto.370dd028-ab8a-4720-9087-4e2c917686de'
                    }]);
                    deferred.resolve({
                        level: 1,
                        entity: OneSignalService,
                        message: 'OneSignal loaded successfully.'
                    });
                } catch (err) {
                    deferred.reject({
                        level: 3,
                        entity: OneSignalService,
                        message: 'OneSignal init failed.'
                    });
                }
            }).fail(function (jqxhr, settings, exception) {
                deferred.reject({
                    level: 2,
                    entity: OneSignalService,
                    message: 'OneSignal not be loaded.'
                });
            });
            return deferred.promise;
        }
    }, {
        key: "checkOneSignalIsLoaded",
        value: function checkOneSignalIsLoaded(deferred) {
            if (!this.getOneSignalGlobal()) {
                deferred.reject({
                    level: 3,
                    entity: OneSignalService,
                    message: 'OneSignal could not be loaded.'
                });
            }
        }
        //================================================================
        // CORDOVA
        //================================================================

    }, {
        key: "initCordova",
        value: function initCordova() {
            // document.addEventListener('deviceready', function () {
            //     // Enable to debug issues.
            //     // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
            //
            //     var notificationOpenedCallback = function(jsonData) {
            //         console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            //     };
            //
            //     window.plugins.OneSignal
            //         .startInit("YOUR_APPID")
            //         .handleNotificationOpened(notificationOpenedCallback)
            //         .endInit();
            //
            //     // Call syncHashedEmail anywhere in your app if you have the auth's email.
            //     // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
            //     // window.plugins.OneSignal.syncHashedEmail(userEmail);
            // }, false);
            // window.plugins.OneSignal
            //     .startInit("a4acb3bb-f4db-4e8a-b631-cf1f725e8269")
            //     .endInit();
        }
    }]);

    return OneSignalService;
}(base_service_1.BaseService);

exports.OneSignalService = OneSignalService;
OneSignalService.$inject = [].concat(_toConsumableArray(base_service_1.BaseService.injects));

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleAnalyticsService = function () {
    function GoogleAnalyticsService($q, deviceService) {
        _classCallCheck(this, GoogleAnalyticsService);

        this.$q = $q;
        this.deviceService = deviceService;
    }

    _createClass(GoogleAnalyticsService, [{
        key: "initWeb",
        value: function initWeb() {
            var _this = this;

            var deferred = this.$q.defer();
            jQuery.getScript("https://www.google-analytics.com/analytics.js").done(function (script, textStatus) {
                _this.checkGAIsLoaded(deferred);
                try {
                    _this.ga()('create', 'UA-91537408-3', 'auto');
                    _this.ga()(function (tracker) {
                        deferred.resolve({
                            level: 1,
                            entity: GoogleAnalyticsService,
                            message: 'Google Analytics init successful.'
                        });
                    });
                } catch (err) {
                    deferred.reject({
                        level: 2,
                        entity: GoogleAnalyticsService,
                        message: 'Google Analytics init failed.'
                    });
                }
            }).fail(function (jqxhr, settings, exception) {
                deferred.reject({
                    level: 2,
                    entity: GoogleAnalyticsService,
                    message: 'Google Analytics could not be loaded.'
                });
            });
            return deferred.promise;
        }
    }, {
        key: "sendPageViewEvent",
        value: function sendPageViewEvent() {
            var deferred = this.$q.defer();
            this.checkGAIsLoaded(deferred);
            try {
                this.ga()('send', 'pageview');
                deferred.resolve({
                    level: 1,
                    entity: GoogleAnalyticsService,
                    message: "Google Analytics 'pageview' event was sent."
                });
            } catch (err) {
                deferred.reject({
                    level: 2,
                    entity: GoogleAnalyticsService,
                    message: "Google Analytics 'pageview' event failed."
                });
            }
            return deferred.promise;
        }
    }, {
        key: "sendEvent",
        value: function sendEvent(logEvent) {}
    }, {
        key: "ga",
        value: function ga() {
            if (window['ga']) {
                return window['ga'];
            }
        }
    }, {
        key: "checkGAIsLoaded",
        value: function checkGAIsLoaded(deferred) {
            if (!this.ga()) {
                deferred.reject({
                    level: 2,
                    entity: GoogleAnalyticsService,
                    message: 'ga.js could not be loaded.'
                });
            }
        }
    }]);

    return GoogleAnalyticsService;
}();

exports.GoogleAnalyticsService = GoogleAnalyticsService;
GoogleAnalyticsService.$inject = ['$q', 'deviceService'];

var GAEvent =
// constructor(category, action, label?, value?) {
//     this.hitType = 'event';
//     this.eventCategory = category;
//     this.eventAction = action;
//     if (label) {
//         this.eventLabel = label;
//     }
//     if (value) {
//         this.eventValue = value;
//     }
// }
function GAEvent(category, action, label, value) {
    _classCallCheck(this, GAEvent);

    //     ga('send', {
    //     hitType: 'event',
    //     eventCategory: 'Videos',
    //     eventAction: 'play',
    //     eventLabel: 'Fall Campaign'
    //     eventValue: 32
    // });
    this.hitType = 'event';
    this.eventCategory = '';
    this.eventAction = '';
    this.hitType = 'event';
    this.eventCategory = category;
    this.eventAction = action;
    if (label) {
        this.eventLabel = label;
    }
    if (value) {
        this.eventValue = value;
    }
};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import TweenLite from 'gsap/src/uncompressed/TweenLite.js';
// import CSSPlugin from 'gsap/src/uncompressed/plugins/CSSPlugin.js';
// import ScrollToPlugin from 'gsap/src/uncompressed/plugins/ScrollToPlugin.js';
// import TimelineLite from 'gsap/src/uncompressed/TimelineLite.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_service_1 = __webpack_require__(73);

var NavigationService = function (_base_service_1$BaseS) {
    _inherits(NavigationService, _base_service_1$BaseS);

    function NavigationService($q, $filter, loggingService, $transitions, $timeout, $state, deviceService) {
        _classCallCheck(this, NavigationService);

        var _this = _possibleConstructorReturn(this, (NavigationService.__proto__ || Object.getPrototypeOf(NavigationService)).call(this, $q, $filter, loggingService));

        _this.$transitions = $transitions;
        _this.$timeout = $timeout;
        _this.$state = $state;
        _this.deviceService = deviceService;
        _this.lastBackState = null;
        _this.allowAnimation = false;
        _this.comingFromBackButton = false;
        _this.browserNavigationButtons = false;
        _this.trackNavigation();
        return _this;
    }

    _createClass(NavigationService, [{
        key: "trackNavigation",
        value: function trackNavigation() {
            var _this2 = this;

            this.$transitions.onSuccess({ to: function to(x) {
                    return true;
                } }, function (transition) {
                _this2.comingFromBackButton = !!transition.targetState().params()['comingFromBackButton'];
                _this2.browserNavigationButtons = transition.options().source === 'url';
            }, {
                bind: this
            });
        }
    }, {
        key: "isAnimationAllowed",
        value: function isAnimationAllowed() {
            return !this.browserNavigationButtons;
        }
    }]);

    return NavigationService;
}(base_service_1.BaseService);

exports.NavigationService = NavigationService;
NavigationService.$inject = [].concat(_toConsumableArray(base_service_1.BaseService.injects), ['$transitions', '$timeout', '$state', 'deviceService']);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subject_1 = __webpack_require__(209);
var on_screen_notification_model_1 = __webpack_require__(324);

var OnScreenNotificationsService = function () {
    function OnScreenNotificationsService() {
        _classCallCheck(this, OnScreenNotificationsService);

        this.counter = 0;
        this.onScreenNotificationsSource = new Subject_1.Subject();
        this.onScreenNotificationsQueue$ = this.onScreenNotificationsSource.asObservable();
        this.onScreenNotificationssToBeDeleted = [];
        this.onScreenNotificationsToBeDeletedSource = new Subject_1.Subject();
        this.onScreenNotificationsToBeDeletedQueue$ = this.onScreenNotificationsToBeDeletedSource.asObservable();
    }

    _createClass(OnScreenNotificationsService, [{
        key: "publishFromLogEvent",
        value: function publishFromLogEvent(logEvent) {
            var notif = new on_screen_notification_model_1.OnScreenNotificationModel(logEvent);
            notif.id = this.counter++;
            this.onScreenNotificationsSource.next(notif);
        }
    }, {
        key: "publish",
        value: function publish(notification) {
            notification.id = this.counter++;
            this.onScreenNotificationsSource.next(notification);
        }
    }]);

    return OnScreenNotificationsService;
}();

exports.OnScreenNotificationsService = OnScreenNotificationsService;
OnScreenNotificationsService.$inject = [];

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FirebaseAnalyticsService = function () {
    function FirebaseAnalyticsService($q) {
        _classCallCheck(this, FirebaseAnalyticsService);

        this.$q = $q;
    }
    //================================================================
    // CORDOVA
    //================================================================


    _createClass(FirebaseAnalyticsService, [{
        key: "sendEvent",
        value: function sendEvent() {
            if (this.getFirebasePluginGlobal()) {
                this.getFirebasePluginGlobal().logEvent("select_content", {
                    content_type: "page_view",
                    item_id: "home"
                });
            }
        }
    }, {
        key: "setScreenName",
        value: function setScreenName() {
            this.getFirebasePluginGlobal().setScreenName("Home");
        }
    }, {
        key: "setUserId",
        value: function setUserId() {
            this.getFirebasePluginGlobal().setUserId("user_id");
        }
    }, {
        key: "setUserProperty",
        value: function setUserProperty() {
            this.getFirebasePluginGlobal().setUserProperty("name", "value");
        }
    }, {
        key: "getFirebasePluginGlobal",
        value: function getFirebasePluginGlobal() {
            if (window['FirebasePlugin']) {
                return window['FirebasePlugin'];
            }
        }
    }]);

    return FirebaseAnalyticsService;
}();

exports.FirebaseAnalyticsService = FirebaseAnalyticsService;
FirebaseAnalyticsService.$inject = ['$q'];

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PushNotificationsService = function PushNotificationsService($q) {
    _classCallCheck(this, PushNotificationsService);

    this.$q = $q;
};

exports.PushNotificationsService = PushNotificationsService;
PushNotificationsService.$inject = ['$q', '$filter'];

/***/ }),
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(210);
__webpack_require__(692);
__webpack_require__(695);
__webpack_require__(212);
__webpack_require__(697);
__webpack_require__(211);
__webpack_require__(694);
__webpack_require__(696);
var base_controller_1 = __webpack_require__(12);
var app_action_creators_1 = __webpack_require__(44);
var google_login_action_creators_1 = __webpack_require__(85);
var google_analytics_action_creators_1 = __webpack_require__(340);
var contentful_action_creators_1 = __webpack_require__(158);
var firebase_action_creators_1 = __webpack_require__(160);
var facebook_action_creators_1 = __webpack_require__(84);
var device_action_creators_1 = __webpack_require__(332);

var AppController = function (_base_controller_1$Ba) {
    _inherits(AppController, _base_controller_1$Ba);

    function AppController($scope, $timeout, $ngRedux, $transitions, $q, firebaseService, facebookService, googleAnalyticsService, firebaseAnalyticsService, loggingService, deviceService, oneSignalService, navigationService, contentfulService, $element) {
        _classCallCheck(this, AppController);

        var _this = _possibleConstructorReturn(this, (AppController.__proto__ || Object.getPrototypeOf(AppController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.$q = $q;
        _this.firebaseService = firebaseService;
        _this.facebookService = facebookService;
        _this.googleAnalyticsService = googleAnalyticsService;
        _this.firebaseAnalyticsService = firebaseAnalyticsService;
        _this.loggingService = loggingService;
        _this.deviceService = deviceService;
        _this.oneSignalService = oneSignalService;
        _this.navigationService = navigationService;
        _this.contentfulService = contentfulService;
        _this.$element = $element;
        _this.logEvent = _this.loggingService.log.bind(_this.loggingService);
        return _this;
    }

    _createClass(AppController, [{
        key: "$onInit",
        value: function $onInit() {
            // can be removed once we get rid of the slido embed.
            this.changeDocumentBackgroundColor();
        }
    }, {
        key: "$postLink",
        value: function $postLink() {
            this.configJQueryCaching();
            this.initFastClick();
            this.setInitialAnimation();
            this.deviceService.isiOS() ? this.$ngRedux.dispatch(device_action_creators_1.device_setDeviceType('ios')) : this.$ngRedux.dispatch(device_action_creators_1.device_setDeviceType('android'));
            if (this.deviceService.isCordovaApp()) {
                ////////////////////////////////
                // Cordova app initialization //
                ////////////////////////////////
                this.$ngRedux.dispatch(device_action_creators_1.device_setPlatform('cordova'));
                this.initCordova();
            } else {
                ////////////////////////////
                // Web app initialization //
                ////////////////////////////
                this.$ngRedux.dispatch(device_action_creators_1.device_setPlatform('web'));
                this.initWebApp();
            }
        }
    }, {
        key: "changeDocumentBackgroundColor",
        value: function changeDocumentBackgroundColor() {
            this.$transitions.onSuccess({
                to: function to(state) {
                    return state.name === 'login' || state.name === 'resetPassword' || state.name === 'signup';
                }
            }, function (transition) {
                jQuery('html').removeClass('app__html--white').removeClass('app__html--grey');
            });
            this.$transitions.onSuccess({
                to: function to(state) {
                    return (state.name === 'main' || state.parent.name === 'main') && state.name !== 'main.eventDetails';
                }
            }, function (transition) {
                jQuery('html').addClass('app__html--white').removeClass('app__html--grey');
            });
            this.$transitions.onSuccess({
                to: function to(state) {
                    return state.name === 'main.eventDetails';
                }
            }, function (transition) {
                jQuery('html').addClass('app__html--grey');
            });
        }
    }, {
        key: "displayWatchersCount",
        value: function displayWatchersCount() {
            var root = angular.element(document.documentElement);
            var watcherCount = 0;
            function getElemWatchers(element) {
                var isolateWatchers = getWatchersFromScope(element.data().$isolateScope);
                var scopeWatchers = getWatchersFromScope(element.data().$scope);
                var watchers = scopeWatchers.concat(isolateWatchers);
                angular.forEach(element.children(), function (childElement) {
                    watchers = watchers.concat(getElemWatchers(angular.element(childElement)));
                });
                return watchers;
            }
            function getWatchersFromScope(scope) {
                if (scope) {
                    return scope.$$watchers || [];
                } else {
                    return [];
                }
            }
            console.log(getElemWatchers(root).length);
        }
    }, {
        key: "removeInitialLoader",
        value: function removeInitialLoader() {
            this.$timeout(function () {
                jQuery('#loader').addClass('not-loading');
            }, 50);
        }
    }, {
        key: "initFastClick",
        value: function initFastClick() {
            FastClick.attach(document.body); // Remove 300ms click delay on old Safari/Android versions
        }
    }, {
        key: "setInitialAnimation",
        value: function setInitialAnimation() {
            var _this2 = this;

            this.$timeout(function () {
                var uiView = _this2.$element.find('.app__wrapper > [ui-view]');
                if (!uiView.hasClass('app-animations__enter-right') && !uiView.hasClass('app-animations__enter-left')) {
                    uiView.addClass('app-animations__fade-in');
                }
            }, 200);
        }
        //================================================================
        // WEB
        //================================================================

    }, {
        key: "configJQueryCaching",
        value: function configJQueryCaching() {
            jQuery.ajaxSetup({
                cache: true
            });
        }
    }, {
        key: "initWebApp",
        value: function initWebApp() {
            this.$ngRedux.dispatch(app_action_creators_1.appLoading());
            this.initWebFirebase();
            this.initWebContentful();
            this.initWebGoogleLogin();
            this.initWebFacebook();
            this.initWebGA();
            this.initWebOneSignal();
        }
    }, {
        key: "initWebGA",
        value: function initWebGA() {
            var _this3 = this;

            this.$ngRedux.dispatch(google_analytics_action_creators_1.googleAnalyticsLoading());
            this.googleAnalyticsService.initWeb().then(this.logEvent).then(function () {
                _this3.$ngRedux.dispatch(google_analytics_action_creators_1.googleAnalyticsNotLoading());
            }).then(function () {
                return _this3.googleAnalyticsService.sendPageViewEvent();
            }).then(this.logEvent).catch(this.logEvent);
        }
    }, {
        key: "initWebContentful",
        value: function initWebContentful() {
            this.$ngRedux.dispatch(contentful_action_creators_1.contentfulInitWeb());
        }
    }, {
        key: "initWebFirebase",
        value: function initWebFirebase() {
            this.$ngRedux.dispatch(firebase_action_creators_1.firebaseInitWeb());
            this.watchForWebFirebase();
        }
        // TODO move to redux listeners

    }, {
        key: "watchForWebFirebase",
        value: function watchForWebFirebase() {
            var _this4 = this;

            var unregisterWatchForWebFirebase = this.$scope.$watch('state.app.auth.user', function (user, oldValue) {
                if (user || user === null) {
                    _this4.$ngRedux.dispatch(app_action_creators_1.appNotLoading());
                    _this4.removeInitialLoader();
                    _this4.setInitialAnimation();
                    unregisterWatchForWebFirebase();
                }
            }, false);
        }
    }, {
        key: "initWebGoogleLogin",
        value: function initWebGoogleLogin() {
            this.$ngRedux.dispatch(google_login_action_creators_1.googleLoginInitWeb());
        }
    }, {
        key: "initWebFacebook",
        value: function initWebFacebook() {
            this.$ngRedux.dispatch(facebook_action_creators_1.facebookInitWeb());
        }
    }, {
        key: "initWebOneSignal",
        value: function initWebOneSignal() {
            var _this5 = this;

            this.$timeout(function () {
                _this5.oneSignalService.initWeb().then(_this5.logEvent).catch(_this5.logEvent);
            }, 3000);
        }
        //================================================================
        // CORDOVA
        //================================================================

    }, {
        key: "initCordova",
        value: function initCordova() {
            var _this6 = this;

            document.addEventListener('deviceready', function (event) {
                _this6.$ngRedux.dispatch(app_action_creators_1.appLoading());
                _this6.initCordovaFirebase();
                _this6.initWebContentful(); // works for cordova
                _this6.initCordovaFacebook();
                _this6.initCordovaGoogleLogin();
            });
        }
    }, {
        key: "initCordovaFirebase",
        value: function initCordovaFirebase() {
            this.$ngRedux.dispatch(firebase_action_creators_1.firebaseInitCordova());
            this.watchForWebFirebase();
        }
    }, {
        key: "initCordovaGoogleLogin",
        value: function initCordovaGoogleLogin() {
            this.$ngRedux.dispatch(google_login_action_creators_1.googleLoginInitCordova());
        }
    }, {
        key: "initCordovaFacebook",
        value: function initCordovaFacebook() {
            this.$ngRedux.dispatch(facebook_action_creators_1.facebookInitCordova());
        }
    }]);

    return AppController;
}(base_controller_1.BaseController);

exports.AppController = AppController;
AppController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['$q', 'firebaseService', 'facebookService', 'googleAnalyticsService', 'firebaseAnalyticsService', 'loggingService', 'deviceService', 'oneSignalService', 'navigationService', 'contentfulService', '$element']);

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.InputValidationAnimation = [function () {
    return {
        // make note that other events (like addClass/removeClass)
        // have different function input parameters
        enter: function enter(element, doneFn) {
            element.addClass('on-screen-notifications-animations__enter');
            doneFn();
            // remember to call doneFn so that angular
            // knows that the animation has concluded
        },
        move: function move(element, doneFn) {},
        leave: function leave(element, doneFn) {
            element.removeClass('on-screen-notifications-animations__enter');
            setTimeout(function () {
                doneFn();
            }, 500);
        }
    };
}];

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);

var InputValidationController = function (_base_controller_1$Ba) {
    _inherits(InputValidationController, _base_controller_1$Ba);

    function InputValidationController($scope, $timeout, $ngRedux, $transitions) {
        _classCallCheck(this, InputValidationController);

        return _possibleConstructorReturn(this, (InputValidationController.__proto__ || Object.getPrototypeOf(InputValidationController)).call(this, $scope, $timeout, $ngRedux, $transitions));
    }

    _createClass(InputValidationController, [{
        key: "$onInit",
        value: function $onInit() {}
    }, {
        key: "$postLink",
        value: function $postLink() {}
    }]);

    return InputValidationController;
}(base_controller_1.BaseController);

exports.InputValidationController = InputValidationController;
InputValidationController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects));

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input_validation_controller_1 = __webpack_require__(278);
__webpack_require__(542);
__webpack_require__(541);
var InputValidationTemplate = __webpack_require__(578);
function InputValidationDirective() {
    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        template: InputValidationTemplate,
        bindToController: true,
        controller: input_validation_controller_1.InputValidationController,
        controllerAs: 'vm'
    };
}
exports.InputValidationDirective = InputValidationDirective;
;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input_wrapper_controller_1 = __webpack_require__(281);
var InputWrapperTemplate = __webpack_require__(579);
__webpack_require__(543);
exports.InputWrapperComponent = {
    restrict: 'E',
    bindings: {
        inputId: '<',
        inputName: '<',
        inputType: '<',
        inputPlaceholder: '<',
        inputIcon: '<',
        inputMinLength: '<',
        inputIsFocused: '=',
        inputNotEqualTo: '<',
        inputAutoCapitalize: '<',
        inputAutoCorrect: '<',
        inputAutocomplete: '<',
        inputModel: '=',
        inputValidateEmail: '<',
        inputRequired: '<',
        form: '=',
        formPropName: '<'
    },
    template: InputWrapperTemplate,
    controller: input_wrapper_controller_1.InputWrapperController,
    controllerAs: 'vm'
};

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);

var InputWrapperController = function (_base_controller_1$Ba) {
    _inherits(InputWrapperController, _base_controller_1$Ba);

    function InputWrapperController($scope, $timeout, $ngRedux, $transitions) {
        _classCallCheck(this, InputWrapperController);

        return _possibleConstructorReturn(this, (InputWrapperController.__proto__ || Object.getPrototypeOf(InputWrapperController)).call(this, $scope, $timeout, $ngRedux, $transitions));
    }

    _createClass(InputWrapperController, [{
        key: "$onInit",
        value: function $onInit() {}
    }, {
        key: "$postLink",
        value: function $postLink() {}
    }]);

    return InputWrapperController;
}(base_controller_1.BaseController);

exports.InputWrapperController = InputWrapperController;
InputWrapperController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects));

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(544);
var template = "\n    <div class=\"loader__wrapper\">\n        <div class=\"png-loader\"></div>\n    </div>";
function LoaderDirective() {
    return {
        restrict: 'A',
        scope: true,
        controllerAs: 'vm',
        link: {
            pre: function preLink(scope, iElement, iAttrs, controller) {
                var wrapperElementRef = void 0;
                iElement.append(template);
                if (iElement.is('button')) {
                    saveWrapperRef();
                    wrapperElementRef.addClass('loader--small');
                }
                scope.$watch(iAttrs['loader'], function (value) {
                    value ? loading() : notLoading();
                });
                function saveWrapperRef() {
                    if (!wrapperElementRef) {
                        wrapperElementRef = iElement.children('.loader__wrapper');
                    }
                }
                function loading() {
                    saveWrapperRef();
                    wrapperElementRef.addClass('loader__wrapper--loading');
                    wrapperElementRef.removeClass('loader__wrapper--not-loading');
                }
                function notLoading() {
                    saveWrapperRef();
                    if (wrapperElementRef.hasClass('loader__wrapper--loading')) {
                        wrapperElementRef.addClass('loader__wrapper--not-loading');
                        wrapperElementRef.removeClass('loader__wrapper--loading');
                    }
                }
            }
        }
    };
}
exports.LoaderDirective = LoaderDirective;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.OnScreenNotificationsAnimation = [function () {
    return {
        // make note that other events (like addClass/removeClass)
        // have different function input parameters
        enter: function enter(element, doneFn) {
            element.addClass('on-screen-notifications-animations__enter');
            doneFn();
            // remember to call doneFn so that angular
            // knows that the animation has concluded
        },
        move: function move(element, doneFn) {},
        leave: function leave(element, doneFn) {
            element.removeClass('on-screen-notifications-animations__enter');
            setTimeout(function () {
                doneFn();
            }, 500);
        }
    };
}];

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var on_screen_notifications_controller_1 = __webpack_require__(285);
__webpack_require__(546);
__webpack_require__(545);
var OnScreenNotificationsTemplate = __webpack_require__(580);
exports.OnScreenNotificationsComponent = {
    restrict: 'E',
    bindings: {},
    template: OnScreenNotificationsTemplate,
    controller: on_screen_notifications_controller_1.OnScreenNotificationsController,
    controllerAs: 'vm'
};

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Observable_1 = __webpack_require__(11);
var Subject_1 = __webpack_require__(209);
__webpack_require__(693);
__webpack_require__(211);
__webpack_require__(699);
__webpack_require__(698);
var _remove = __webpack_require__(662);
var base_controller_1 = __webpack_require__(12);

var OnScreenNotificationsController = function (_base_controller_1$Ba) {
    _inherits(OnScreenNotificationsController, _base_controller_1$Ba);

    function OnScreenNotificationsController($scope, $timeout, $ngRedux, $transitions, onScreenNotificationsService) {
        _classCallCheck(this, OnScreenNotificationsController);

        var _this = _possibleConstructorReturn(this, (OnScreenNotificationsController.__proto__ || Object.getPrototypeOf(OnScreenNotificationsController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.onScreenNotificationsService = onScreenNotificationsService;
        _this.notifications = [];
        return _this;
    }

    _createClass(OnScreenNotificationsController, [{
        key: "$postLink",
        value: function $postLink() {
            this.subscribeToService();
        }
    }, {
        key: "subscribeToService",
        value: function subscribeToService() {
            var _this2 = this;

            this.onScreenNotificationsService.onScreenNotificationsQueue$.subscribe(function (notification) {
                // comes from redux listener logging.listeners, need to trigger digest
                _this2.$scope.$applyAsync(function () {
                    _this2.notifications.push(notification);
                    if (notification.autoDismiss) {
                        _this2.scheduleAutohide(notification);
                    }
                });
            });
            // only delete one message at a time
            this.onScreenNotificationsService.onScreenNotificationsToBeDeletedQueue$.subscribe(function (message) {
                _this2.onScreenNotificationsService.onScreenNotificationssToBeDeleted.push(message);
                if (_this2.onScreenNotificationsService.onScreenNotificationssToBeDeleted.length && _this2.deletionSub.closed) {
                    // re-schedule deletion if it was closed
                    _this2.deletionSub = _this2.subscribeForDeletion();
                }
            });
            // schedule deletion
            this.deletionSub = this.subscribeForDeletion();
        }
    }, {
        key: "subscribeForDeletion",
        value: function subscribeForDeletion() {
            var _this3 = this;

            var timer$ = new Subject_1.Subject();
            return Observable_1.Observable.timer(0, 1500).map(function (i) {
                timer$.closed = !_this3.onScreenNotificationsService.onScreenNotificationssToBeDeleted.length;
            }).takeWhile(function (i) {
                return !timer$.closed;
            }).subscribe(function (timer) {
                _this3.$timeout(function () {
                    _this3.remove(_this3.onScreenNotificationsService.onScreenNotificationssToBeDeleted.splice(0, 1)[0]);
                });
            });
        }
    }, {
        key: "scheduleAutohide",
        value: function scheduleAutohide(message) {
            var _this4 = this;

            setTimeout(function () {
                _this4.onScreenNotificationsService.onScreenNotificationsToBeDeletedSource.next(message);
            }, message.dismissAfter);
        }
    }, {
        key: "remove",
        value: function remove(message) {
            _remove(this.notifications, function (n) {
                return n.id == message.id;
            });
        }
    }]);

    return OnScreenNotificationsController;
}(base_controller_1.BaseController);

exports.OnScreenNotificationsController = OnScreenNotificationsController;
OnScreenNotificationsController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['onScreenNotificationsService']);

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var on_screen_notifications_animation_1 = __webpack_require__(283);
var input_validation_animation_1 = __webpack_require__(277);
var on_screen_notifications_component_1 = __webpack_require__(284);
var input_wrapper_component_1 = __webpack_require__(280);
var input_validation_directive_1 = __webpack_require__(279);
var loader_directive_1 = __webpack_require__(282);
exports.UIComponentsModule = angular.module('app.ui-components', ['ngAnimate']);
exports.UIComponentsModule.animation('.on-screen-notifications__animate', on_screen_notifications_animation_1.OnScreenNotificationsAnimation);
exports.UIComponentsModule.animation('.input-validation__animate', input_validation_animation_1.InputValidationAnimation);
exports.UIComponentsModule.component('onScreenNotifications', on_screen_notifications_component_1.OnScreenNotificationsComponent);
exports.UIComponentsModule.component('inputWrapper', input_wrapper_component_1.InputWrapperComponent);
exports.UIComponentsModule.directive('inputValidation', input_validation_directive_1.InputValidationDirective);
exports.UIComponentsModule.directive('loader', loader_directive_1.LoaderDirective);

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function AuthConfig($stateProvider) {
    $stateProvider.state('login', {
        url: '/auth/login?error',
        params: {
            authRequired: false,
            hideAuthNavigation: true
        },
        component: 'login'
    }).state('loginEmail', {
        url: '/auth/login-email',
        params: {
            authRequired: false,
            hideAuthNavigation: false,
            title: 'Sign In',
            backState: 'login'
        },
        component: 'loginEmail'
    }).state('resetPassword', {
        url: '/auth/reset',
        component: 'resetPassword',
        params: {
            authRequired: false,
            email: '',
            title: 'Reset Password',
            backState: 'login',
            hideAuthNavigation: false
        }
    }).state('signup', {
        url: '/auth/signup',
        component: 'signUp',
        params: {
            authRequired: false,
            email: '',
            title: 'Sign Up',
            backState: 'login',
            hideAuthNavigation: false
        }
    });
}
exports.AuthConfig = AuthConfig;
AuthConfig.$inject = ['$stateProvider'];

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auth_login_component_1 = __webpack_require__(289);
var auth_reset_password_component_1 = __webpack_require__(295);
var auth_toolbar_component_1 = __webpack_require__(299);
var auth_signup_component_1 = __webpack_require__(297);
var auth_login_already_logged_in_component_1 = __webpack_require__(290);
var auth_login_email_component_1 = __webpack_require__(292);
var auth_login_header_component_1 = __webpack_require__(293);
var auth_config_1 = __webpack_require__(287);
__webpack_require__(547);
exports.AuthModule = angular.module('auth', ['ui.router', 'ngAnimate']);
exports.AuthModule.config(auth_config_1.AuthConfig);
exports.AuthModule.component('resetPassword', auth_reset_password_component_1.AuthResetPassword);
exports.AuthModule.component('authToolbar', auth_toolbar_component_1.AuthToolbarComponent);
exports.AuthModule.component('signUp', auth_signup_component_1.AuthSignUpComponent);
exports.AuthModule.component('login', auth_login_component_1.AuthLoginComponent);
exports.AuthModule.component('loginEmail', auth_login_email_component_1.AuthLoginEmailComponent);
exports.AuthModule.component('loginAlreadyLoggedIn', auth_login_already_logged_in_component_1.AuthLoginAlreadyLoggedInComponent);
exports.AuthModule.component('loginHeader', auth_login_header_component_1.AuthLoginHeaderComponent);

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auth_login_controller_1 = __webpack_require__(153);
var AuthLoginTemplate = __webpack_require__(581);
__webpack_require__(548);
exports.AuthLoginComponent = {
    bindings: {
        returnTo: '<'
    },
    template: AuthLoginTemplate,
    controller: auth_login_controller_1.AuthLoginController,
    controllerAs: 'vm'
};

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auth_login_already_logged_in_controller_1 = __webpack_require__(291);
var AuthLoginAlreadyLoggedInTemplate = __webpack_require__(582);
exports.AuthLoginAlreadyLoggedInComponent = {
    bindings: {
        loggedIn: '<'
    },
    template: AuthLoginAlreadyLoggedInTemplate,
    controller: auth_login_already_logged_in_controller_1.AuthLoginAlreadyLoggedInController,
    controllerAs: 'vm'
};

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);
var auth_action_creators_1 = __webpack_require__(29);

var AuthLoginAlreadyLoggedInController = function (_base_controller_1$Ba) {
    _inherits(AuthLoginAlreadyLoggedInController, _base_controller_1$Ba);

    function AuthLoginAlreadyLoggedInController($scope, $timeout, $ngRedux, $transitions) {
        _classCallCheck(this, AuthLoginAlreadyLoggedInController);

        return _possibleConstructorReturn(this, (AuthLoginAlreadyLoggedInController.__proto__ || Object.getPrototypeOf(AuthLoginAlreadyLoggedInController)).call(this, $scope, $timeout, $ngRedux, $transitions));
    }

    _createClass(AuthLoginAlreadyLoggedInController, [{
        key: "signOut",
        value: function signOut() {
            this.$ngRedux.dispatch(auth_action_creators_1.auth_setUserNotLoggedIn()); // sets auth.userAlreadyLoggedIn right away...
            this.$ngRedux.dispatch(auth_action_creators_1.auth_signOut());
        }
    }]);

    return AuthLoginAlreadyLoggedInController;
}(base_controller_1.BaseController);

exports.AuthLoginAlreadyLoggedInController = AuthLoginAlreadyLoggedInController;
AuthLoginAlreadyLoggedInController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects));

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auth_login_controller_1 = __webpack_require__(153);
var AuthLoginEmailTemplate = __webpack_require__(583);
__webpack_require__(549);
exports.AuthLoginEmailComponent = {
    bindings: {
        returnTo: '<'
    },
    template: AuthLoginEmailTemplate,
    controller: auth_login_controller_1.AuthLoginController,
    controllerAs: 'vm'
};

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auth_login_header_controller_1 = __webpack_require__(294);
var AuthLoginHeaderTemplate = __webpack_require__(584);
__webpack_require__(550);
exports.AuthLoginHeaderComponent = {
    bindings: {},
    template: AuthLoginHeaderTemplate,
    controller: auth_login_header_controller_1.AuthLoginHeaderController,
    controllerAs: 'vm'
};

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);

var AuthLoginHeaderController = function (_base_controller_1$Ba) {
    _inherits(AuthLoginHeaderController, _base_controller_1$Ba);

    function AuthLoginHeaderController($scope, $timeout, $ngRedux, $transitions) {
        _classCallCheck(this, AuthLoginHeaderController);

        return _possibleConstructorReturn(this, (AuthLoginHeaderController.__proto__ || Object.getPrototypeOf(AuthLoginHeaderController)).call(this, $scope, $timeout, $ngRedux, $transitions));
    }

    return AuthLoginHeaderController;
}(base_controller_1.BaseController);

exports.AuthLoginHeaderController = AuthLoginHeaderController;
AuthLoginHeaderController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects));

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(551);
var auth_reset_password_controller_1 = __webpack_require__(296);
var AuthResetPasswordTemplate = __webpack_require__(585);
exports.AuthResetPassword = {
    bindings: {},
    template: AuthResetPasswordTemplate,
    controller: auth_reset_password_controller_1.AuthResetPasswordController,
    controllerAs: 'vm'
};

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);
var app_action_creators_1 = __webpack_require__(44);
var auth_action_creators_1 = __webpack_require__(29);

var AuthResetPasswordController = function (_base_controller_1$Ba) {
    _inherits(AuthResetPasswordController, _base_controller_1$Ba);

    function AuthResetPasswordController($scope, $timeout, $ngRedux, $transitions, navigationService, firebaseService, loggingService, $element) {
        _classCallCheck(this, AuthResetPasswordController);

        var _this = _possibleConstructorReturn(this, (AuthResetPasswordController.__proto__ || Object.getPrototypeOf(AuthResetPasswordController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.navigationService = navigationService;
        _this.firebaseService = firebaseService;
        _this.loggingService = loggingService;
        _this.$element = $element;
        _this.email = '';
        return _this;
    }

    _createClass(AuthResetPasswordController, [{
        key: "$onInit",
        value: function $onInit() {
            this.$ngRedux.dispatch(auth_action_creators_1.auth_signInResetInvalidEmails());
            if (this.$scope.state.router.currentParams['email']) {
                this.email = angular.copy(this.$scope.state.router.currentParams['email']);
            }
        }
    }, {
        key: "go",
        value: function go(state, email, backState) {
            this.$scope.stateGo(state, {
                email: email && email.$viewValue ? email.$viewValue : '',
                backState: backState
            });
        }
    }, {
        key: "resetPassword",
        value: function resetPassword(email) {
            this.$element.find('#auth-reset-password__form__email').blur();
            if (this.$scope.resetForm.$invalid) {
                return;
            }
            this.$ngRedux.dispatch(app_action_creators_1.appLoading());
            this.$ngRedux.dispatch(auth_action_creators_1.auth_resetPassword(email));
        }
    }]);

    return AuthResetPasswordController;
}(base_controller_1.BaseController);

exports.AuthResetPasswordController = AuthResetPasswordController;
AuthResetPasswordController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['navigationService', 'firebaseService', 'loggingService', '$element']);

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(552);
var auth_signup_controller_1 = __webpack_require__(298);
var AuthSignUpTemplate = __webpack_require__(586);
exports.AuthSignUpComponent = {
    bindings: {},
    template: AuthSignUpTemplate,
    controller: auth_signup_controller_1.AuthSignUpController,
    controllerAs: 'vm'
};

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);
var app_action_creators_1 = __webpack_require__(44);
var auth_action_creators_1 = __webpack_require__(29);

var AuthSignUpController = function (_base_controller_1$Ba) {
    _inherits(AuthSignUpController, _base_controller_1$Ba);

    function AuthSignUpController($scope, $timeout, $ngRedux, $transitions, navigationService, loggingService, firebaseService, $element) {
        _classCallCheck(this, AuthSignUpController);

        var _this = _possibleConstructorReturn(this, (AuthSignUpController.__proto__ || Object.getPrototypeOf(AuthSignUpController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.navigationService = navigationService;
        _this.loggingService = loggingService;
        _this.firebaseService = firebaseService;
        _this.$element = $element;
        _this.email = '';
        return _this;
    }

    _createClass(AuthSignUpController, [{
        key: "$onInit",
        value: function $onInit() {
            if (this.$scope.state.router.currentParams['email']) {
                this.email = angular.copy(this.$scope.state.router.currentParams['email']);
            }
            this.$ngRedux.dispatch(auth_action_creators_1.auth_signInResetInvalidEmails());
        }
    }, {
        key: "go",
        value: function go(state, email, backState) {
            this.$scope.stateGo(state, {
                email: email && email.$viewValue ? email.$viewValue : '',
                backState: backState
            });
        }
    }, {
        key: "signUp",
        value: function signUp(email, password) {
            this.$element.find('#auth-signup__form__email').blur();
            this.$element.find('#auth-signup__form__password').blur();
            if (this.$scope.signUpForm.$invalid) {
                return;
            }
            this.$ngRedux.dispatch(app_action_creators_1.appLoading());
            this.$ngRedux.dispatch(auth_action_creators_1.auth_signUpEmail(email, password));
        }
    }]);

    return AuthSignUpController;
}(base_controller_1.BaseController);

exports.AuthSignUpController = AuthSignUpController;
AuthSignUpController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['navigationService', 'loggingService', 'firebaseService', '$element']);

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(553);
var auth_toolbar_controller_1 = __webpack_require__(300);
var AuthToolbarTemplate = __webpack_require__(587);
exports.AuthToolbarComponent = {
    bindings: {},
    template: AuthToolbarTemplate,
    controller: auth_toolbar_controller_1.AuthToolbarController,
    controllerAs: 'vm'
};

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);

var AuthToolbarController = function (_base_controller_1$Ba) {
    _inherits(AuthToolbarController, _base_controller_1$Ba);

    function AuthToolbarController($scope, $timeout, $ngRedux, $transitions, navigationService, loggingService, deviceService) {
        _classCallCheck(this, AuthToolbarController);

        var _this = _possibleConstructorReturn(this, (AuthToolbarController.__proto__ || Object.getPrototypeOf(AuthToolbarController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.navigationService = navigationService;
        _this.loggingService = loggingService;
        _this.deviceService = deviceService;
        _this.visible = false;
        return _this;
    }

    _createClass(AuthToolbarController, [{
        key: "goBack",
        value: function goBack() {
            if (!this.$scope.state.router.currentParams.backState) {
                return;
            }
            this.$scope.stateGo(this.$scope.state.router.currentParams.backState, {
                comingFromBackButton: true
            });
        }
    }, {
        key: "$onInit",
        value: function $onInit() {
            var _this2 = this;

            this.$timeout(function () {
                _this2.visible = true;
            }, 600);
        }
    }]);

    return AuthToolbarController;
}(base_controller_1.BaseController);

exports.AuthToolbarController = AuthToolbarController;
AuthToolbarController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['navigationService', 'loggingService', 'deviceService']);

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FakeActionDirective() {
    return {
        restrict: 'A',
        link: function NotEqualTo(scope, elm, attr, ctrl) {
            elm.attr('action', '');
        }
    };
}
exports.FakeActionDirective = FakeActionDirective;
FakeActionDirective.$inject = [];

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validate_email_directive_1 = __webpack_require__(306);
var email_w_dot_validator_directive_1 = __webpack_require__(304);
var not_equal_to_validator_directive_1 = __webpack_require__(305);
var select_on_focus_directive_1 = __webpack_require__(303);
var fake_action_directive_1 = __webpack_require__(301);
exports.HelperModule = angular.module('helpers', []);
exports.HelperModule.directive('onFocusSelect', select_on_focus_directive_1.OnFocusSelectDirective);
exports.HelperModule.directive('notEqualTo', not_equal_to_validator_directive_1.NotEqualToValidator);
exports.HelperModule.directive('validateEmail', validate_email_directive_1.ValidateEmailValidator);
exports.HelperModule.directive('emailWithDot', email_w_dot_validator_directive_1.EmailWithDotValidatorDirective);
exports.HelperModule.directive('fakeAction', fake_action_directive_1.FakeActionDirective);

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Observable_1 = __webpack_require__(11);
__webpack_require__(210);
__webpack_require__(212);
function OnFocusSelectDirective() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function NotEqualTo(scope, elm, attr, ctrl) {
            if (!ctrl) return;
            var subscription = Observable_1.Observable.fromEvent(elm, 'focus').throttleTime(500).subscribe(function (e) {
                setTimeout(function () {
                    var value = elm.val();
                    if (value && value.length) {
                        try {
                            if (elm['setSelectionRange']) {
                                elm['setSelectionRange'](0, value.length);
                            } else {
                                // seems to work on ipad
                                document.getElementById(elm[0].id)['selectionStart'] = 0;
                                document.getElementById(elm[0].id)['selectionEnd'] = value.length;
                            }
                        } catch (e) {
                            elm.select();
                        }
                    }
                }, 100);
            });
            elm.on('$destroy', function () {
                subscription.unsubscribe();
            });
        }
    };
}
exports.OnFocusSelectDirective = OnFocusSelectDirective;
OnFocusSelectDirective.$inject = [];

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringEndingWithDotSomething = /[\S]*(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9]))$/;
function EmailWithDotValidatorDirective() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function link(scope, elm, attr, ctrl) {
            if (!ctrl) return;
            var name = 'emailWithDot';
            if (scope.$eval(attr[name]) == false) {
                return;
            }
            ctrl.$validators[name] = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                return ctrl.$isEmpty(value) || stringEndingWithDotSomething.test(value);
            };
            attr.$observe(name, function () {
                ctrl.$validate();
            });
        }
    };
}
exports.EmailWithDotValidatorDirective = EmailWithDotValidatorDirective;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function NotEqualToValidator() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function NotEqualTo(scope, elm, attr, ctrl) {
            if (!ctrl) return;
            var name = 'notEqualTo';
            if (scope.$eval(attr[name]) == undefined) {
                return;
            }
            attr.$observe(name, function (value) {
                ctrl.$validate();
            });
            ctrl.$validators[name] = function (modelValue, viewValue) {
                var attrValue = scope.$eval(attr[name]);
                return !attr[name] || !attrValue || attrValue !== viewValue;
            };
        }
    };
}
exports.NotEqualToValidator = NotEqualToValidator;
NotEqualToValidator.$inject = [];

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ValidateEmailValidator(firebaseService) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function ValidateUserValidatorDirectiveLink(scope, elm, attr, ctrl) {
            if (!ctrl) return;
            var name = 'validateEmail';
            attr.$observe(name, function (invalidEmails) {
                ctrl.$validate();
            });
            ctrl.$validators[name] = function (modelValue, viewValue) {
                var attrValue = scope.$eval(attr[name]);
                return !attr[name] || !attrValue || !attrValue.length || attrValue.indexOf(viewValue) === -1;
            };
        }
    };
}
exports.ValidateEmailValidator = ValidateEmailValidator;
ValidateEmailValidator.$inject = ['firebaseService'];

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var events_controller_1 = __webpack_require__(308);
var EventsTemplate = __webpack_require__(588);
__webpack_require__(554);
exports.EventsComponent = {
    bindings: {
        title: '<'
    },
    template: EventsTemplate,
    controller: events_controller_1.EventsController,
    controllerAs: 'vm'
};

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);
var events_action_creators_1 = __webpack_require__(69);

var EventsController = function (_base_controller_1$Ba) {
    _inherits(EventsController, _base_controller_1$Ba);

    function EventsController($scope, $timeout, $ngRedux, $transitions, onScreenNotificationsService, contentfulService, loggingService, $location, $element) {
        _classCallCheck(this, EventsController);

        var _this = _possibleConstructorReturn(this, (EventsController.__proto__ || Object.getPrototypeOf(EventsController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.onScreenNotificationsService = onScreenNotificationsService;
        _this.contentfulService = contentfulService;
        _this.loggingService = loggingService;
        _this.$location = $location;
        _this.$element = $element;
        return _this;
    }

    _createClass(EventsController, [{
        key: "$onInit",
        value: function $onInit() {
            var _this2 = this;

            this.$timeout(function () {
                _this2.initEventsList();
            }, 1200);
        }
    }, {
        key: "selectEvent",
        value: function selectEvent(event) {
            this.$ngRedux.dispatch(events_action_creators_1.events_setSelectedEvent(event));
            this.$ngRedux.dispatch(events_action_creators_1.events_goToSelectedEvent());
        }
    }, {
        key: "showUpcomingEvents",
        value: function showUpcomingEvents() {
            this.$ngRedux.dispatch(events_action_creators_1.events_showUpcomingEvents());
        }
    }, {
        key: "showPastEvents",
        value: function showPastEvents() {
            this.$ngRedux.dispatch(events_action_creators_1.events_showPastEvents());
        }
    }, {
        key: "initEventsList",
        value: function initEventsList() {
            if (!this.$ngRedux.getState().app.events.events.length) {
                this.$ngRedux.dispatch(events_action_creators_1.events_getEventsFromContentful(this.$ngRedux.getState().app.events.eventsSkip, 10));
            }
        }
    }, {
        key: "loadMore",
        value: function loadMore() {
            this.$ngRedux.dispatch(events_action_creators_1.events_getEventsFromContentful(this.$ngRedux.getState().app.events.eventsSkip, 10));
        }
    }]);

    return EventsController;
}(base_controller_1.BaseController);

exports.EventsController = EventsController;
EventsController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['onScreenNotificationsService', 'contentfulService', 'loggingService', '$location', '$element']);

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function MainAnimations(navigationService) {
    return {
        addClass: function addClass(element, addedClasses, doneFn) {
            if (navigationService.isAnimationAllowed()) {
                setTimeout(function () {
                    element.removeClass('main-animations__leave');
                    element.removeClass('main-animations__leave-instant');
                    element.removeClass('main-animations__enter-instant');
                    element.addClass('main-animations__enter');
                    doneFn();
                }, 100);
            } else {
                element.removeClass('main-animations__enter');
                element.removeClass('main-animations__leave-instant');
                element.removeClass('main-animations__leave');
                element.addClass('main-animations__enter-instant');
                doneFn();
            }
        },
        removeClass: function removeClass(element, removedClasses, doneFn) {
            if (navigationService.isAnimationAllowed()) {
                element.removeClass('main-animations__enter-instant');
                element.removeClass('main-animations__enter');
                element.removeClass('main-animations__leave-instant');
                element.addClass('main-animations__leave');
                doneFn();
            } else {
                element.removeClass('main-animations__enter-instant');
                element.removeClass('main-animations__enter');
                element.removeClass('main-animations__leave');
                element.addClass('main-animations__leave-instant');
                doneFn();
            }
        }
    };
}
exports.MainAnimations = MainAnimations;
MainAnimations.$inject = ['navigationService'];

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var main_controller_1 = __webpack_require__(312);
var MainTemplate = __webpack_require__(589);
__webpack_require__(556);
__webpack_require__(555);
exports.MainComponent = {
    bindings: {},
    template: MainTemplate,
    controller: main_controller_1.MainController,
    controllerAs: 'vm'
};

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function MainConfig($stateProvider) {
    $stateProvider.state({
        name: 'main',
        url: '/main',
        component: 'main',
        params: {
            authRequired: true
        },
        redirectTo: 'main.events'
    }).state({
        name: 'main.player',
        url: '/player/:eventId',
        sticky: true,
        params: {
            authRequired: true,
            title: 'Watch'
        },
        views: {
            'player': {
                component: 'mainPlayer',
                bindings: {
                    title: 'playerTitle'
                }
            }
        },
        resolve: {
            playerTitle: function playerTitle() {
                return 'Events Listing';
            }
        }
    }).state({
        name: 'main.events',
        url: '/events',
        sticky: true,
        params: {
            authRequired: true,
            title: 'Events'
        },
        views: {
            'events': {
                component: 'events',
                bindings: {
                    title: 'eventsTitle'
                }
            }
        },
        resolve: {
            eventsTitle: function eventsTitle() {
                return 'Events Listing';
            }
        }
    }).state({
        name: 'main.profile',
        url: '/profile',
        sticky: true,
        params: {
            authRequired: true,
            title: 'Profile'
        },
        views: {
            'profile': {
                component: 'profile',
                bindings: {
                    title: 'profileTitle'
                }
            }
        },
        resolve: {
            profileTitle: function profileTitle() {
                return 'Profile';
            }
        }
    }).state({
        name: 'main.settings',
        url: '/settings',
        sticky: true,
        params: {
            authRequired: true,
            title: 'Settings'
        },
        views: {
            'settings': {
                component: 'settings',
                bindings: {
                    title: 'settingsTitle'
                }
            }
        },
        resolve: {
            settingsTitle: function settingsTitle() {
                return 'Settings';
            }
        }
    });
}
exports.MainConfig = MainConfig;
MainConfig.$inject = ['$stateProvider'];

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);

var MainController = function (_base_controller_1$Ba) {
    _inherits(MainController, _base_controller_1$Ba);

    function MainController($scope, $timeout, $ngRedux, $transitions, $element) {
        _classCallCheck(this, MainController);

        var _this = _possibleConstructorReturn(this, (MainController.__proto__ || Object.getPrototypeOf(MainController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.$element = $element;
        return _this;
    }

    _createClass(MainController, [{
        key: "$postLink",
        value: function $postLink() {
            var _this2 = this;

            this.$timeout(function () {
                var activeView = _this2.$element.find('.main__scrolling.main__scrolling--active');
                if (activeView && activeView.length) {
                    activeView.addClass('main-animations__enter');
                }
            }, 300);
        }
    }]);

    return MainController;
}(base_controller_1.BaseController);

exports.MainController = MainController;
MainController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['$element']);

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var main_component_1 = __webpack_require__(310);
var main_toolbar_component_1 = __webpack_require__(322);
var main_sidebar_component_1 = __webpack_require__(319);
var main_animations_1 = __webpack_require__(309);
var main_config_1 = __webpack_require__(311);
var main_tabs_component_1 = __webpack_require__(320);
var events_component_1 = __webpack_require__(307);
var main_player_component_1 = __webpack_require__(314);
var settings_component_1 = __webpack_require__(318);
var profile_component_1 = __webpack_require__(316);
exports.MainModule = angular.module('main', ['ui.router', 'ngAnimate']);
exports.MainModule.config(main_config_1.MainConfig);
exports.MainModule.component('main', main_component_1.MainComponent);
exports.MainModule.component('mainTabs', main_tabs_component_1.MainTabsComponent);
exports.MainModule.component('mainToolbar', main_toolbar_component_1.MainToolbarComponent);
exports.MainModule.component('mainSidebar', main_sidebar_component_1.MainSidebarComponent);
exports.MainModule.animation('.main__animate', main_animations_1.MainAnimations);
exports.MainModule.component('mainPlayer', main_player_component_1.MainPlayerComponent);
exports.MainModule.component('events', events_component_1.EventsComponent);
exports.MainModule.component('settings', settings_component_1.SettingsComponent);
exports.MainModule.component('profile', profile_component_1.ProfileComponent);

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var main_player_controller_1 = __webpack_require__(315);
var MainPlayerTemplate = __webpack_require__(590);
__webpack_require__(557);
exports.MainPlayerComponent = {
    bindings: {},
    template: MainPlayerTemplate,
    controller: main_player_controller_1.MainPlayerController,
    controllerAs: 'vm'
};

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);
var events_action_creators_1 = __webpack_require__(69);

var MainPlayerController = function (_base_controller_1$Ba) {
    _inherits(MainPlayerController, _base_controller_1$Ba);

    function MainPlayerController($scope, $timeout, $ngRedux, $transitions, onScreenNotificationsService, contentfulService, loggingService, $sce, $element) {
        _classCallCheck(this, MainPlayerController);

        var _this = _possibleConstructorReturn(this, (MainPlayerController.__proto__ || Object.getPrototypeOf(MainPlayerController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.onScreenNotificationsService = onScreenNotificationsService;
        _this.contentfulService = contentfulService;
        _this.loggingService = loggingService;
        _this.$sce = $sce;
        _this.$element = $element;
        _this.chatEmbedEnabled = false;
        return _this;
    }

    _createClass(MainPlayerController, [{
        key: "$onInit",
        value: function $onInit() {
            this.watchEventId();
        }
    }, {
        key: "$postLink",
        value: function $postLink() {
            this.watchStateAndShowHideOneSignalWidget();
        }
    }, {
        key: "watchEventId",
        value: function watchEventId() {
            var _this2 = this;

            this.$scope.$watch('state.app.events.selectedEvent', function (unsafe_selectedEvent) {
                if (unsafe_selectedEvent && unsafe_selectedEvent.sys && unsafe_selectedEvent.sys.id) {
                    // most common state, probably coming from events list
                    _this2.sanitizeEventFieldsAndSetToVm(unsafe_selectedEvent);
                    return;
                }
                var routeEventIdParam = _this2.$ngRedux.getState().router.currentParams['eventId'];
                if (routeEventIdParam && routeEventIdParam.length) {
                    // probably after a page refresh or direct link to event
                    _this2.getEventFromContentful(routeEventIdParam);
                    return;
                }
                if (!unsafe_selectedEvent) {
                    // brand new state, we get the most recent event
                    unsafe_selectedEvent = _this2.getMostRecentEvent();
                    if (unsafe_selectedEvent) {
                        _this2.sanitizeEventFieldsAndSetToVm(unsafe_selectedEvent);
                    } else if (_this2.$ngRedux.getState().router.currentState.name === 'main.player') {
                        _this2.watchForEventsAndLoadMostRecent();
                    }
                }
            }, false);
        }
    }, {
        key: "watchForEventsAndLoadMostRecent",
        value: function watchForEventsAndLoadMostRecent() {
            var _this3 = this;

            var unregisterEventsWatcher = this.$scope.$watch('state.app.events.events', function (events) {
                if (events) {
                    if (events.length === 0) {
                        _this3.$ngRedux.dispatch(events_action_creators_1.events_getEventsFromContentful(_this3.$ngRedux.getState().app.events.eventsSkip, 10));
                    } else {
                        var unsafe_selectedEvent = _this3.getMostRecentEvent();
                        if (unsafe_selectedEvent) {
                            _this3.sanitizeEventFieldsAndSetToVm(unsafe_selectedEvent);
                            unregisterEventsWatcher();
                        }
                    }
                }
            }, false);
        }
    }, {
        key: "sanitizeEventFieldsAndSetToVm",
        value: function sanitizeEventFieldsAndSetToVm(unsafe_selectedEvent) {
            this.selectedEvent = unsafe_selectedEvent;
            var livestreamUrl = this.selectedEvent.fields.url;
            var youTubeUrl = this.selectedEvent.fields.youTubeUrl;
            var uStreamUrl = this.selectedEvent.fields.uStreamUrl;
            var uStreamChatUrl = this.selectedEvent.fields.uStreamChatUrl;
            if (uStreamUrl && uStreamUrl.length) {
                this.validateUStreamURL();
                if (uStreamChatUrl && uStreamChatUrl.length) {
                    this.validateUStreamChatURL();
                }
            } else if (livestreamUrl && livestreamUrl.length) {
                this.validateLivestreamURL();
                this.validateSlidoURL();
            } else if (youTubeUrl && youTubeUrl.length) {
                this.validateYouTubeURL();
            }
        }
    }, {
        key: "getEventFromContentful",
        value: function getEventFromContentful(eventId) {
            this.$ngRedux.dispatch(events_action_creators_1.events_getEventFromContentful(eventId));
        }
    }, {
        key: "getMostRecentEvent",
        value: function getMostRecentEvent() {
            var events = this.$ngRedux.getState().app.events.events;
            var upcomingEvents = this.$ngRedux.getState().app.events.upcomingEvents;
            var pastEvents = this.$ngRedux.getState().app.events.pastEvents;
            if (upcomingEvents && upcomingEvents.length) {
                return upcomingEvents[0];
            }
            if (pastEvents && pastEvents.length) {
                return pastEvents[0];
            }
            if (events && events.length) {
                // fallback in case it's not set yet
                upcomingEvents = this.contentfulService.getUpcomingEvents(events);
                pastEvents = this.contentfulService.getUpcomingEvents(events);
                if (upcomingEvents && upcomingEvents.length) {
                    return upcomingEvents[0];
                }
                if (pastEvents && pastEvents.length) {
                    return pastEvents[0];
                }
            }
            return null;
        }
    }, {
        key: "validateUStreamChatURL",
        value: function validateUStreamChatURL() {
            if (this.selectedEvent.fields.uStreamChatUrl.search(/https:\/\/www\.ustream\.tv\/socialstream/) === 0) {
                this.safeChatEmbedURL = this.$sce.trustAsResourceUrl(this.selectedEvent.fields.uStreamChatUrl);
                this.chatEmbedEnabled = true;
            } else {
                this.loggingService.log({ level: 3, message: 'Could not retrieve the event info.' });
            }
        }
    }, {
        key: "validateUStreamURL",
        value: function validateUStreamURL() {
            if (this.selectedEvent.fields.uStreamUrl.search(/https:\/\/www\.ustream\.tv\/embed\//) === 0) {
                this.safePlayerIframeURL = this.$sce.trustAsResourceUrl(this.selectedEvent.fields.uStreamUrl);
            } else {
                this.loggingService.log({ level: 3, message: 'Could not retrieve the event info.' });
            }
        }
    }, {
        key: "validateYouTubeURL",
        value: function validateYouTubeURL() {
            if (this.selectedEvent.fields.youTubeUrl.search(/https:\/\/www\.youtube\.com\/embed/) === 0) {
                this.safePlayerIframeURL = this.$sce.trustAsResourceUrl(this.selectedEvent.fields.youTubeUrl);
            } else {
                this.loggingService.log({ level: 3, message: 'Could not retrieve the event info.' });
            }
        }
    }, {
        key: "validateLivestreamURL",
        value: function validateLivestreamURL() {
            if (this.selectedEvent.fields.url.search(/https:\/\/livestream\.com/) === 0) {
                this.safePlayerIframeURL = this.$sce.trustAsResourceUrl(this.selectedEvent.fields.url);
            } else {
                this.loggingService.log({ level: 3, message: 'Could not retrieve the event info.' });
            }
        }
    }, {
        key: "validateSlidoURL",
        value: function validateSlidoURL() {
            if (this.selectedEvent.fields.slidoId) {
                if (this.selectedEvent.fields.slidoId.search(/[A-Z,a-z,0-9,_]{1,20}/) === 0) {
                    this.safeChatEmbedURL = this.$sce.trustAsResourceUrl("https://app.sli.do/event/" + this.selectedEvent.fields.slidoId + "/ask");
                    this.chatEmbedEnabled = true;
                } else {
                    this.loggingService.log({ level: 3, message: 'Could not retrieve the event info.' });
                }
            }
        }
    }, {
        key: "watchStateAndShowHideOneSignalWidget",
        value: function watchStateAndShowHideOneSignalWidget() {
            var _this4 = this;

            this.$scope.$watch('state.router.currentState.name', function (state) {
                if (state === 'main.player') {
                    _this4.hideOneSignalWidget();
                } else {
                    _this4.showOneSignalWidget();
                }
            }, false);
        }
    }, {
        key: "hideOneSignalWidget",
        value: function hideOneSignalWidget() {
            document.querySelector("body").classList.add('hide-one-signal');
        }
    }, {
        key: "showOneSignalWidget",
        value: function showOneSignalWidget() {
            document.querySelector("body").classList.add('hide-one-signal');
        }
    }]);

    return MainPlayerController;
}(base_controller_1.BaseController);

exports.MainPlayerController = MainPlayerController;
MainPlayerController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['onScreenNotificationsService', 'contentfulService', 'loggingService', '$sce', '$element']);

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var profile_controller_1 = __webpack_require__(317);
var ProfileTemplate = __webpack_require__(591);
__webpack_require__(558);
exports.ProfileComponent = {
    bindings: {},
    template: ProfileTemplate,
    controller: profile_controller_1.ProfileController,
    controllerAs: 'vm'
};

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);

var ProfileController = function (_base_controller_1$Ba) {
    _inherits(ProfileController, _base_controller_1$Ba);

    function ProfileController($scope, $timeout, $ngRedux, $transitions) {
        _classCallCheck(this, ProfileController);

        return _possibleConstructorReturn(this, (ProfileController.__proto__ || Object.getPrototypeOf(ProfileController)).call(this, $scope, $timeout, $ngRedux, $transitions));
    }

    return ProfileController;
}(base_controller_1.BaseController);

exports.ProfileController = ProfileController;
ProfileController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects));

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var main_sidebar_controller_1 = __webpack_require__(154);
var SettingsTemplate = __webpack_require__(592);
__webpack_require__(559);
exports.SettingsComponent = {
    bindings: {},
    template: SettingsTemplate,
    controller: main_sidebar_controller_1.MainSidebarController,
    controllerAs: 'vm'
};

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var main_sidebar_controller_1 = __webpack_require__(154);
var MainSidebarTemplate = __webpack_require__(593);
__webpack_require__(560);
exports.MainSidebarComponent = {
    bindings: {},
    template: MainSidebarTemplate,
    controller: main_sidebar_controller_1.MainSidebarController,
    controllerAs: 'vm'
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(191);
var main_tabs_controller_1 = __webpack_require__(321);
var MainTabsTemplate = __webpack_require__(594);
__webpack_require__(191);
exports.MainTabsComponent = {
    bindings: {},
    template: MainTabsTemplate,
    controller: main_tabs_controller_1.MainTabsController,
    controllerAs: 'vm'
};

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);

var MainTabsController = function (_base_controller_1$Ba) {
    _inherits(MainTabsController, _base_controller_1$Ba);

    function MainTabsController($scope, $timeout, $ngRedux, $transitions) {
        _classCallCheck(this, MainTabsController);

        return _possibleConstructorReturn(this, (MainTabsController.__proto__ || Object.getPrototypeOf(MainTabsController)).call(this, $scope, $timeout, $ngRedux, $transitions));
    }

    _createClass(MainTabsController, [{
        key: "selectPlayerTab",
        value: function selectPlayerTab() {
            var selectedEvent = this.$ngRedux.getState().app.events.selectedEvent;
            this.$scope.stateGo('main.player', {
                eventId: selectedEvent && selectedEvent.sys.id ? selectedEvent.sys.id : ''
            });
        }
    }]);

    return MainTabsController;
}(base_controller_1.BaseController);

exports.MainTabsController = MainTabsController;
MainTabsController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects));

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(561);
var main_toolbar_controller_1 = __webpack_require__(323);
var MainToolbarTemplate = __webpack_require__(595);
exports.MainToolbarComponent = {
    bindings: {},
    template: MainToolbarTemplate,
    controller: main_toolbar_controller_1.MainToolbarController,
    controllerAs: 'vm'
};

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_controller_1 = __webpack_require__(12);
var events_action_creators_1 = __webpack_require__(69);

var MainToolbarController = function (_base_controller_1$Ba) {
    _inherits(MainToolbarController, _base_controller_1$Ba);

    function MainToolbarController($scope, $timeout, $ngRedux, $transitions, navigationService, loggingService, deviceService) {
        _classCallCheck(this, MainToolbarController);

        var _this = _possibleConstructorReturn(this, (MainToolbarController.__proto__ || Object.getPrototypeOf(MainToolbarController)).call(this, $scope, $timeout, $ngRedux, $transitions));

        _this.navigationService = navigationService;
        _this.loggingService = loggingService;
        _this.deviceService = deviceService;
        return _this;
    }

    _createClass(MainToolbarController, [{
        key: "refreshEvents",
        value: function refreshEvents() {
            this.$ngRedux.dispatch(events_action_creators_1.events_resetEventsState());
            this.$ngRedux.dispatch(events_action_creators_1.events_getEventsFromContentful(0, 10));
        }
    }, {
        key: "goBack",
        value: function goBack() {
            var _this2 = this;

            if (!this.$scope.state.router.currentParams.backState) {
                return;
            }
            this.$timeout(function () {
                _this2.$scope.stateGo(_this2.$scope.state.router.currentParams.backState);
            }, 160);
        }
    }]);

    return MainToolbarController;
}(base_controller_1.BaseController);

exports.MainToolbarController = MainToolbarController;
MainToolbarController.$inject = [].concat(_toConsumableArray(base_controller_1.BaseController.injects), ['navigationService', 'loggingService', 'deviceService']);

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var log_event_model_1 = __webpack_require__(155);

var OnScreenNotificationModel = function (_log_event_model_1$Lo) {
    _inherits(OnScreenNotificationModel, _log_event_model_1$Lo);

    function OnScreenNotificationModel(logEvent) {
        _classCallCheck(this, OnScreenNotificationModel);

        return _possibleConstructorReturn(this, (OnScreenNotificationModel.__proto__ || Object.getPrototypeOf(OnScreenNotificationModel)).call(this, logEvent));
    }

    return OnScreenNotificationModel;
}(log_event_model_1.LogEventModel);

exports.OnScreenNotificationModel = OnScreenNotificationModel;

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.listenerMiddleWare = function (listeners) {
    return function (store) {
        return function (next) {
            return function (action) {
                // listeners are provided with a picture
                // of the world before the action is applied
                var preActionState = store.getState();
                // release the action to reducers before
                // firing additional actions
                next(action);
                // always async
                setTimeout(function () {
                    // can have multiple listeners listening
                    // against the same action.type
                    listeners.forEach(function (listener) {
                        if (listener[action.type]) {
                            listener[action.type](action, store.dispatch, preActionState);
                        }
                    });
                });
            };
        };
    };
};

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app_initial_state_1 = __webpack_require__(157);
var auth_actions_1 = __webpack_require__(67);
var events_actions_1 = __webpack_require__(70);
var app_actions_1 = __webpack_require__(156);
var google_analytics_actions_1 = __webpack_require__(105);
var firebase_actions_1 = __webpack_require__(71);
var facebook_actions_1 = __webpack_require__(57);
var contentful_actions_1 = __webpack_require__(68);
var cordova_actions_1 = __webpack_require__(159);
var google_login_actions_1 = __webpack_require__(72);
var device_actions_1 = __webpack_require__(104);
var auth_reducer_1 = __webpack_require__(328);
var events_reducer_1 = __webpack_require__(335);
var google_analytics_reducer_1 = __webpack_require__(341);
var firebase_reducer_1 = __webpack_require__(339);
var facebook_reducer_1 = __webpack_require__(337);
var contentful_reducer_1 = __webpack_require__(330);
var cordova_reducer_1 = __webpack_require__(331);
var device_reducer_1 = __webpack_require__(333);
var google_login_reducer_1 = __webpack_require__(343);
var INITIAL_APP_STATE = new app_initial_state_1.AppState();
function appStateReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_APP_STATE;
    var action = arguments[1];

    switch (action.type) {
        case app_actions_1.APP_LOADING:
            {
                return Object.assign({}, state, { loading: true });
            }
        case app_actions_1.APP_NOT_LOADING:
            {
                return Object.assign({}, state, { loading: false });
            }
        case auth_actions_1.AUTH_SET_USER:
        case auth_actions_1.AUTH_SET_USER_ALREADY_LOGGED_IN:
        case auth_actions_1.AUTH_SET_USER_NOT_LOGGED_IN:
        case auth_actions_1.AUTH_RESET_USER:
        case auth_actions_1.AUTH_SET_TARGET_STATE:
        case auth_actions_1.AUTH_RESET_TARGET_STATE:
        case auth_actions_1.AUTH_GO_TO_TARGET_STATE:
        case auth_actions_1.AUTH_SIGN_OUT:
        case auth_actions_1.AUTH_SIGN_OUT_SUCCESS:
        case auth_actions_1.AUTH_SIGN_OUT_ERROR:
        case auth_actions_1.AUTH_SIGN_UP_EMAIL:
        case auth_actions_1.AUTH_SIGN_UP_EMAIL_SUCCESS:
        case auth_actions_1.AUTH_SIGN_UP_EMAIL_ERROR:
        case auth_actions_1.AUTH_RESET_PASSWORD:
        case auth_actions_1.AUTH_RESET_PASSWORD_SUCCESS:
        case auth_actions_1.AUTH_RESET_PASSWORD_ERROR:
        case auth_actions_1.AUTH_SIGN_IN_ADD_INVALID_EMAIL:
        case auth_actions_1.AUTH_SIGN_IN_REMOVE_INVALID_EMAIL:
        case auth_actions_1.AUTH_SIGN_IN_RESET_INVALID_EMAILS:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK_CORDOVA:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK_WITH_TOKEN:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK_WITH_TOKEN_CORDOVA:
        case auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_SUCCESS:
        case auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_ERROR:
        case auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN:
        case auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_CORDOVA:
        case auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_SUCCESS_CORDOVA:
        case auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_ERROR_CORDOVA:
        case auth_actions_1.AUTH_SIGN_IN_GOOGLE_WITH_TOKEN:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK_SUCCESS:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK_CANCELLED_CORDOVA:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK_ERROR_CORDOVA:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK_SUCCESS_CORDOVA:
        case auth_actions_1.AUTH_SIGN_IN_FACEBOOK_ERROR:
        case auth_actions_1.AUTH_SIGN_IN_EMAIL_OTHER_ERROR:
        case auth_actions_1.AUTH_SIGN_IN_EMAIL_ERROR_WRONG_PASSWORD:
        case auth_actions_1.AUTH_SIGN_IN_EMAIL:
            {
                return Object.assign({}, state, { auth: auth_reducer_1.authReducer(state.auth, action) });
            }
        case events_actions_1.EVENTS_GET_EVENT_CONTENTFUL:
        case events_actions_1.EVENTS_GET_EVENT_CONTENTFUL_ERROR:
        case events_actions_1.EVENTS_GET_EVENT_CONTENTFUL_SUCCESS:
        case events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL:
        case events_actions_1.EVENTS_GET_UPCOMING_EVENTS_CONTENTFUL:
        case events_actions_1.EVENTS_GET_PAST_EVENTS_CONTENTFUL:
        case events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL_ERROR:
        case events_actions_1.EVENTS_GO_TO_SELECTED_EVENT:
        case events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL_SUCCESS:
        case events_actions_1.EVENTS_SET_EVENTS:
        case events_actions_1.EVENTS_SET_PAST_EVENTS:
        case events_actions_1.EVENTS_SET_UPCOMING_EVENTS:
        case events_actions_1.EVENTS_LOADING:
        case events_actions_1.EVENTS_NOT_LOADING:
        case events_actions_1.EVENTS_RESET_EVENTS_STATE:
        case events_actions_1.EVENTS_SET_SKIP:
        case events_actions_1.EVENTS_SHOW_UPCOMING:
        case events_actions_1.EVENTS_SET_SELECTED_EVENT:
        case events_actions_1.EVENTS_SHOW_PAST:
            {
                return Object.assign({}, state, { events: events_reducer_1.eventsReducer(state.events, action) });
            }
        case google_analytics_actions_1.GOOGLE_ANALYTICS_LOADING:
        case google_analytics_actions_1.GOOGLE_ANALYTICS_NOT_LOADING:
            {
                return Object.assign({}, state, { googleAnalyticsLoading: google_analytics_reducer_1.googleAnalyticsReducer(state.googleAnalytics, action) });
            }
        case firebase_actions_1.FIREBASE_LOADING:
        case firebase_actions_1.FIREBASE_INIT_WEB:
        case firebase_actions_1.FIREBASE_INIT_CORDOVA:
        case firebase_actions_1.FIREBASE_INIT_WEB_SUCCESS:
        case firebase_actions_1.FIREBASE_INIT_CORDOVA_SUCCESS:
        case firebase_actions_1.FIREBASE_INIT_WEB_ERROR:
        case firebase_actions_1.FIREBASE_INIT_CORDOVA_ERROR:
        case firebase_actions_1.FIREBASE_LOAD_SCRIPT_SUCCESS:
        case firebase_actions_1.FIREBASE_LOAD_SCRIPT_ERROR:
        case firebase_actions_1.FIREBASE_GLOBAL_READY:
        case firebase_actions_1.FIREBASE_NOT_LOADING:
            {
                return Object.assign({}, state, { firebase: firebase_reducer_1.firebaseReducer(state.firebase, action) });
            }
        case facebook_actions_1.FACEBOOK_LOADING:
        case facebook_actions_1.FACEBOOK_NOT_LOADING:
        case facebook_actions_1.FACEBOOK_LOAD_SCRIPT_SUCCESS:
        case facebook_actions_1.FACEBOOK_LOAD_SCRIPT_ERROR:
        case facebook_actions_1.FACEBOOK_INIT_WEB:
        case facebook_actions_1.FACEBOOK_INIT_WEB_SUCCESS:
        case facebook_actions_1.FACEBOOK_INIT_WEB_ERROR:
        case facebook_actions_1.FACEBOOK_INIT_CORDOVA:
        case facebook_actions_1.FACEBOOK_INIT_CORDOVA_SUCCESS:
        case facebook_actions_1.FACEBOOK_INIT_CORDOVA_ERROR:
        case facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH:
        case facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH_CORDOVA:
        case facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH_SUCCESS:
        case facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH_SUCCESS_CORDOVA:
        case facebook_actions_1.FACEBOOK_GLOBAL_READY:
        case facebook_actions_1.FACEBOOK_GLOBAL_READY_CORDOVA:
        case facebook_actions_1.FACEBOOK_DISABLE_LOGIN:
        case facebook_actions_1.FACEBOOK_ENABLE_LOGIN:
            {
                return Object.assign({}, state, { facebook: facebook_reducer_1.facebookReducer(state.facebook, action) });
            }
        case google_login_actions_1.GOOGLE_LOGIN_LOADING:
        case google_login_actions_1.GOOGLE_LOGIN_GLOBAL_READY:
        case google_login_actions_1.GOOGLE_LOGIN_PLUGIN_READY:
        case google_login_actions_1.GOOGLE_LOGIN_AUTH2_READY:
        case google_login_actions_1.GOOGLE_LOGIN_NOT_LOADING:
        case google_login_actions_1.GOOGLE_LOGIN_LOAD_SCRIPT_SUCCESS:
        case google_login_actions_1.GOOGLE_LOGIN_LOAD_SCRIPT_ERROR:
        case google_login_actions_1.GOOGLE_LOGIN_INIT_WEB:
        case google_login_actions_1.GOOGLE_LOGIN_INIT_WEB_SUCCESS:
        case google_login_actions_1.GOOGLE_LOGIN_INIT_WEB_ERROR:
        case google_login_actions_1.GOOGLE_LOGIN_INIT_CORDOVA:
        case google_login_actions_1.GOOGLE_LOGIN_INIT_CORDOVA_SUCCESS:
        case google_login_actions_1.GOOGLE_LOGIN_INIT_CORDOVA_ERROR:
        case google_login_actions_1.GOOGLE_LOGIN_OAUTH:
        case google_login_actions_1.GOOGLE_LOGIN_OAUTH_SUCCESS:
        case google_login_actions_1.GOOGLE_LOGIN_OAUTH_ERROR:
        case google_login_actions_1.GOOGLE_LOGIN_DISABLE:
        case google_login_actions_1.GOOGLE_LOGIN_ENABLE:
            {
                return Object.assign({}, state, { googleLogin: google_login_reducer_1.googleLoginReducer(state.googleLogin, action) });
            }
        case contentful_actions_1.CONTENTFUL_INIT_WEB:
        case contentful_actions_1.CONTENTFUL_INIT_WEB_SUCCESS:
        case contentful_actions_1.CONTENTFUL_INIT_WEB_ERROR:
        case contentful_actions_1.CONTENTFUL_NOT_LOADING:
        case contentful_actions_1.CONTENTFUL_SET_CLIENT:
        case contentful_actions_1.CONTENTFUL_RESET_CLIENT:
            {
                return Object.assign({}, state, { contentful: contentful_reducer_1.contentfulReducer(state.contentful, action) });
            }
        case device_actions_1.DEVICE_SET_PLATFORM:
        case device_actions_1.DEVICE_SET_DEVICE_TYPE:
        case device_actions_1.DEVICE_SET_DEVICE_TOKEN:
        case device_actions_1.DEVICE_SET_BADGE_NUMBER:
            {
                return Object.assign({}, state, { device: device_reducer_1.deviceReducer(state.device, action) });
            }
        case cordova_actions_1.CORDOVA_INIT:
        case cordova_actions_1.CORDOVA_RESET:
            {
                return Object.assign({}, state, { cordova: cordova_reducer_1.cordovaReducer(state.cordova, action) });
            }
    }
    // for initial
    return Object.assign({}, state);
}
exports.appStateReducer = appStateReducer;

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exports$authListener;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var redux_ui_router_1 = __webpack_require__(66);
var app_1 = __webpack_require__(39);
var auth_actions_1 = __webpack_require__(67);
var facebook_action_creators_1 = __webpack_require__(84);
var google_login_action_creators_1 = __webpack_require__(85);
var app_action_creators_1 = __webpack_require__(44);
var auth_action_creators_1 = __webpack_require__(29);
var events_action_creators_1 = __webpack_require__(69);
exports.authListener = (_exports$authListener = {}, _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_OUT, function (action, dispatch, state) {
    var firebaseService = app_1.injector.get('firebaseService');
    var googleLoginService = app_1.injector.get('googleLoginService');
    var facebookService = app_1.injector.get('facebookService');
    dispatch(app_action_creators_1.appLoading());
    firebaseService.signOut();
    //================================================================
    // WEB
    //================================================================
    if (state.app.device.platform === 'web') {
        googleLoginService.signOut().catch(function (error) {
            // normal to get error in dev mode
        });
    }
    //================================================================
    // CORDOVA
    //================================================================
    if (state.app.device.platform === 'cordova') {
        facebookService.signOutCordova();
        googleLoginService.signOutCordova(function (response) {});
    }
    //
    // Clean up
    //
    dispatch(events_action_creators_1.events_resetEventsState());
    dispatch(auth_action_creators_1.auth_resetUser());
    dispatch(auth_action_creators_1.auth_signOutSuccess());
    setTimeout(function () {
        dispatch(redux_ui_router_1.stateGo('login', {
            comingFromBackButton: true
        }));
        dispatch(app_action_creators_1.appNotLoading());
    }, 1000);
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_UP_EMAIL, function (action, dispatch, state) {
    var firebaseService = app_1.injector.get('firebaseService');
    dispatch(app_action_creators_1.appLoading());
    firebaseService.createUserWithEmailAndPassword(action.payload.email, action.payload.password).then(function (user) {
        dispatch(auth_action_creators_1.auth_signUpEmailSuccess());
        dispatch(auth_action_creators_1.auth_setUser(user));
        dispatch(auth_action_creators_1.auth_goToTargetState());
        setTimeout(function () {
            dispatch(auth_action_creators_1.auth_setUserAlreadyLoggedIn());
        }, 1000);
    }).catch(function (error) {
        switch (error.code) {
            case 'auth/email-already-in-use':
                dispatch(auth_action_creators_1.auth_signInAddInvalidEmail(action.payload.email));
                break;
        }
        dispatch(auth_action_creators_1.auth_signUpEmailError(error));
        dispatch(auth_action_creators_1.auth_resetUser());
    }).finally(function () {
        dispatch(app_action_creators_1.appNotLoading());
    });
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_RESET_PASSWORD, function (action, dispatch, state) {
    var firebaseService = app_1.injector.get('firebaseService');
    dispatch(app_action_creators_1.appLoading());
    firebaseService.resetPassword(action.payload).then(function (result) {
        dispatch(auth_action_creators_1.auth_resetPasswordSuccess());
    }).catch(function (error) {
        switch (error.code) {
            case 'auth/user-not-found':
            case 'auth/user-disabled':
            case 'auth/invalid-email':
                {
                    error.message = 'Invalid email.';
                    dispatch(auth_action_creators_1.auth_resetPasswordError(error));
                    dispatch(auth_action_creators_1.auth_signInAddInvalidEmail(action.payload));
                    break;
                }
            default:
                dispatch(auth_action_creators_1.auth_resetPasswordError(error));
                break;
        }
    }).finally(function () {
        dispatch(app_action_creators_1.appNotLoading());
    });
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_EMAIL, function (action, dispatch, state) {
    var firebaseService = app_1.injector.get('firebaseService');
    firebaseService.signInWithEmailAndPassword(action.payload.email, action.payload.password).then(function (user) {
        if (user) {
            dispatch(auth_action_creators_1.auth_signInEmailSuccess());
            dispatch(auth_action_creators_1.auth_setUser(user));
            dispatch(auth_action_creators_1.auth_goToTargetState());
            setTimeout(function () {
                dispatch(auth_action_creators_1.auth_setUserAlreadyLoggedIn());
            }, 1000);
        } else {
            dispatch(auth_action_creators_1.auth_signInEmailOtherError(new Error('Invalid user returned')));
        }
    }).catch(function (error) {
        switch (error.code) {
            case 'auth/user-not-found':
            case 'auth/user-disabled':
            case 'auth/invalid-email':
                dispatch(auth_action_creators_1.auth_signInEmailErrorInvalidEmail());
                dispatch(auth_action_creators_1.auth_signInAddInvalidEmail(action.payload.email));
                break;
            case 'auth/wrong-password':
                dispatch(auth_action_creators_1.auth_signInEmailErrorWrongPassword());
                break;
            default:
                dispatch(auth_action_creators_1.auth_signInEmailOtherError(error));
                break;
        }
        dispatch(auth_action_creators_1.auth_resetUser());
    }).finally(function () {
        dispatch(app_action_creators_1.appNotLoading());
    });
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_GO_TO_TARGET_STATE, function (action, dispatch, state) {
    var targetState = state.app.auth.targetState;
    if (targetState && targetState.state() && targetState.state().name !== 'app') {
        var _state = targetState.state();
        var params = targetState.params();
        var options = { reload: true, location: true };
        dispatch(redux_ui_router_1.stateGo(_state.name, params, options));
    } else {
        dispatch(redux_ui_router_1.stateGo('main'));
    }
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_FACEBOOK, function (action, dispatch, state) {
    signInFacebookHelper(dispatch);
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_FACEBOOK_WITH_TOKEN, function (action, dispatch, state) {
    signInFacebookHelper(dispatch, action.payload);
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_FACEBOOK_CORDOVA, function (action, dispatch, state) {
    signInFacebookHelperCordova(dispatch);
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_FACEBOOK_WITH_TOKEN_CORDOVA, function (action, dispatch, state) {
    signInFacebookHelperCordova(dispatch, action.payload);
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN, function (action, dispatch, state) {
    signInGoogleLoginHelper(dispatch);
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_GOOGLE_WITH_TOKEN, function (action, dispatch, state) {
    signInGoogleLoginHelper(dispatch, action.payload);
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_CORDOVA, function (action, dispatch, state) {
    signInGoogleLoginHelperCordova(dispatch);
}), _defineProperty(_exports$authListener, auth_actions_1.AUTH_SIGN_IN_GOOGLE_WITH_TOKEN_CORDOVA, function (action, dispatch, state) {
    signInGoogleLoginHelperCordova(dispatch, action.payload);
}), _exports$authListener);
function signInFacebookHelper(dispatch) {
    var oAuthResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var firebaseService = app_1.injector.get('firebaseService');
    firebaseService.signInFB(oAuthResponse).then(function (user) {
        if (user) {
            dispatch(auth_action_creators_1.auth_signInFacebookSuccess());
            dispatch(auth_action_creators_1.auth_setUser(user));
            dispatch(auth_action_creators_1.auth_goToTargetState());
            setTimeout(function () {
                dispatch(auth_action_creators_1.auth_setUserAlreadyLoggedIn());
            }, 1000);
        }
    }).catch(function (error) {
        dispatch(auth_action_creators_1.auth_signInFacebookError(error));
        dispatch(auth_action_creators_1.auth_resetUser());
    }).finally(function () {
        dispatch(app_action_creators_1.appNotLoading());
        dispatch(facebook_action_creators_1.facebookNotLoading());
    });
}
function signInFacebookHelperCordova(dispatch) {
    var oAuthResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var firebaseService = app_1.injector.get('firebaseService');
    firebaseService.signInFBCordova(oAuthResponse).then(function (user) {
        if (user) {
            dispatch(auth_action_creators_1.auth_signInFacebookSuccessCordova());
            dispatch(auth_action_creators_1.auth_setUser(user));
            dispatch(auth_action_creators_1.auth_goToTargetState());
            setTimeout(function () {
                dispatch(auth_action_creators_1.auth_setUserAlreadyLoggedIn());
            }, 1000);
        }
    }).catch(function (error) {
        // can happen if user have remove authorization from facebook.com
        // the token is still cached in the plugin, so we need to sign out
        if (error.code === "auth/internal-error") {
            // sign out from firebase, facebook plugin, and google login plugin
            dispatch(auth_action_creators_1.auth_signOut());
            // retry to login
            setTimeout(function () {
                dispatch(auth_action_creators_1.auth_signInFacebookCordova());
            });
        } else if (error.status === "unknown") {
            // unknown is returned when pop up is closed with no action
            dispatch(auth_action_creators_1.auth_signInFacebookCancelledCordova());
        } else {
            dispatch(auth_action_creators_1.auth_signInFacebookErrorCordova(error));
        }
        dispatch(auth_action_creators_1.auth_resetUser());
    }).finally(function () {
        dispatch(app_action_creators_1.appNotLoading());
        dispatch(facebook_action_creators_1.facebookNotLoading());
    });
}
function signInGoogleLoginHelper(dispatch) {
    var GoogleUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var firebaseService = app_1.injector.get('firebaseService');
    firebaseService.signInGoogle(GoogleUser).then(function (user) {
        if (user) {
            dispatch(auth_action_creators_1.auth_signInGoogleLoginSuccess());
            dispatch(auth_action_creators_1.auth_setUser(user));
            dispatch(auth_action_creators_1.auth_goToTargetState());
            setTimeout(function () {
                dispatch(auth_action_creators_1.auth_setUserAlreadyLoggedIn());
            }, 1000);
        }
    }).catch(function (error) {
        dispatch(auth_action_creators_1.auth_signInGoogleLoginError(error));
        dispatch(auth_action_creators_1.auth_resetUser());
    }).finally(function () {
        dispatch(app_action_creators_1.appNotLoading());
        dispatch(google_login_action_creators_1.googleLoginNotLoading());
    });
}
function signInGoogleLoginHelperCordova(dispatch) {
    var pluginAuthResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var firebaseService = app_1.injector.get('firebaseService');
    firebaseService.signInGoogleCordova(pluginAuthResponse).then(function (user) {
        if (user) {
            dispatch(auth_action_creators_1.auth_signInGoogleLoginSuccessCordova());
            dispatch(auth_action_creators_1.auth_setUser(user));
            dispatch(auth_action_creators_1.auth_goToTargetState());
            setTimeout(function () {
                dispatch(auth_action_creators_1.auth_setUserAlreadyLoggedIn());
            }, 1000);
        }
    }).catch(function (error) {
        dispatch(auth_action_creators_1.auth_signInGoogleLoginErrorCordova(error));
        dispatch(auth_action_creators_1.auth_resetUser());
    }).finally(function () {
        dispatch(app_action_creators_1.appNotLoading());
        dispatch(google_login_action_creators_1.googleLoginNotLoading());
    });
}

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var auth_actions_1 = __webpack_require__(67);
function authReducer(authState, action) {
    switch (action.type) {
        case auth_actions_1.AUTH_SET_USER:
            {
                if (!action.payload) {
                    return Object.assign({}, authState, { user: null });
                }
                return Object.assign({}, authState, { user: {
                        email: action.payload.email,
                        photoURL: action.payload.photoURL,
                        providerData: action.payload.providerData && action.payload.providerData.length ? action.payload.providerData[0] : null
                    } });
            }
        case auth_actions_1.AUTH_SET_USER_ALREADY_LOGGED_IN:
            {
                return Object.assign({}, authState, { userAlreadyLoggedIn: true });
            }
        case auth_actions_1.AUTH_SET_USER_NOT_LOGGED_IN:
            {
                return Object.assign({}, authState, { userAlreadyLoggedIn: false });
            }
        case auth_actions_1.AUTH_RESET_USER:
            {
                return Object.assign({}, authState, { user: null, userAlreadyLoggedIn: false });
            }
        case auth_actions_1.AUTH_SET_TARGET_STATE:
            {
                return Object.assign({}, authState, { targetState: action.payload });
            }
        case auth_actions_1.AUTH_RESET_TARGET_STATE:
            {
                return Object.assign({}, authState, { targetState: null });
            }
        case auth_actions_1.AUTH_SIGN_OUT:
            {
                return Object.assign({}, authState, { signingOut: true });
            }
        case auth_actions_1.AUTH_SIGN_OUT_SUCCESS:
        case auth_actions_1.AUTH_SIGN_OUT_ERROR:
            {
                return Object.assign({}, authState, { signingOut: false });
            }
        case auth_actions_1.AUTH_SIGN_IN_ADD_INVALID_EMAIL:
            {
                var index = authState.invalidEmails.indexOf(action.payload);
                if (index === -1) {
                    return Object.assign({}, authState, { invalidEmails: [].concat(_toConsumableArray(authState.invalidEmails), [action.payload]) });
                }
                break;
            }
        case auth_actions_1.AUTH_SIGN_IN_RESET_INVALID_EMAILS:
            {
                return Object.assign({}, authState, { invalidEmails: [] });
            }
        case auth_actions_1.AUTH_SIGN_IN_REMOVE_INVALID_EMAIL:
            {
                var index = authState.invalidEmails.indexOf(action.payload);
                if (index !== -1) {
                    return Object.assign({}, authState, { invalidEmails: [].concat(_toConsumableArray(authState.invalidEmails.slice(0, index)), _toConsumableArray(authState.invalidEmails.slice(index + 1))) });
                }
                break;
            }
        case auth_actions_1.AUTH_SIGN_IN_EMAIL_ERROR_WRONG_PASSWORD:
            {
                return Object.assign({}, authState, { invalidPasswordAttempts: authState.invalidPasswordAttempts + 1 });
            }
    }
    return Object.assign({}, authState);
}
exports.authReducer = authReducer;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app_1 = __webpack_require__(39);
var contentful_actions_1 = __webpack_require__(68);
var app_constants_1 = __webpack_require__(56);
var contentful_action_creators_1 = __webpack_require__(158);
exports.contentfulListener = _defineProperty({}, contentful_actions_1.CONTENTFUL_INIT_WEB, function (action, dispatch, state) {
    var contentfulService = app_1.injector.get('contentfulService');
    dispatch(contentful_action_creators_1.contentfulLoading());
    try {
        if (!contentfulService.getContentfulGlobal()) {
            throw new Error("Contentful is not loaded.");
        } else {
            var contentfulClient = contentfulService.createClient(app_constants_1.CONTENTFUL_INIT_OPTIONS);
            if (!contentfulClient) {
                throw new Error("Contentful init failed.");
            }
            dispatch(contentful_action_creators_1.contentfulSetClient(contentfulClient));
            dispatch(contentful_action_creators_1.contentfulInitWebSuccess());
        }
    } catch (error) {
        dispatch(contentful_action_creators_1.contentfulInitWebError(error));
        dispatch(contentful_action_creators_1.contentfulResetClient());
    }
    dispatch(contentful_action_creators_1.contentfulNotLoading());
});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var contentful_actions_1 = __webpack_require__(68);
function contentfulReducer(contentfulState, action) {
    switch (action.type) {
        case contentful_actions_1.CONTENTFUL_LOADING:
            {
                return Object.assign({}, contentfulState, { contentfulLoading: true });
            }
        case contentful_actions_1.CONTENTFUL_NOT_LOADING:
            {
                return Object.assign({}, contentfulState, { contentfulLoading: false });
            }
        case contentful_actions_1.CONTENTFUL_SET_CLIENT:
            {
                return Object.assign({}, contentfulState, { contentfulClient: action.payload });
            }
        case contentful_actions_1.CONTENTFUL_RESET_CLIENT:
            {
                return Object.assign({}, contentfulState, { contentfulClient: null });
            }
    }
    return Object.assign({}, contentfulState);
}
exports.contentfulReducer = contentfulReducer;

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cordova_actions_1 = __webpack_require__(159);
function cordovaReducer(cordovaState, action) {
    switch (action.type) {
        case cordova_actions_1.CORDOVA_INIT:
            {
                return Object.assign({}, cordovaState, { cordova: action.payload });
            }
        case cordova_actions_1.CORDOVA_RESET:
            {
                return Object.assign({}, cordovaState, { cordova: null });
            }
    }
    return Object.assign({}, cordovaState);
}
exports.cordovaReducer = cordovaReducer;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var device_actions_1 = __webpack_require__(104);
function device_setDeviceType(type) {
    return {
        type: device_actions_1.DEVICE_SET_DEVICE_TYPE,
        payload: type
    };
}
exports.device_setDeviceType = device_setDeviceType;
function device_setPlatform() {
    var platformName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'web';

    return {
        type: device_actions_1.DEVICE_SET_PLATFORM,
        payload: platformName
    };
}
exports.device_setPlatform = device_setPlatform;
function device_setDeviceBadge(number) {
    return {
        type: device_actions_1.DEVICE_SET_BADGE_NUMBER,
        payload: number
    };
}
exports.device_setDeviceBadge = device_setDeviceBadge;
function device_setDeviceToken(token) {
    return {
        type: device_actions_1.DEVICE_SET_DEVICE_TOKEN,
        payload: token
    };
}
exports.device_setDeviceToken = device_setDeviceToken;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var device_actions_1 = __webpack_require__(104);
function deviceReducer(deviceState, action) {
    switch (action.type) {
        case device_actions_1.DEVICE_SET_BADGE_NUMBER:
            {
                return Object.assign({}, deviceState, { badgeNumber: action.payload });
            }
        case device_actions_1.DEVICE_SET_DEVICE_TOKEN:
            {
                return Object.assign({}, deviceState, { deviceToken: action.payload });
            }
        case device_actions_1.DEVICE_SET_DEVICE_TYPE:
            {
                return Object.assign({}, deviceState, { deviceType: action.payload });
            }
        case device_actions_1.DEVICE_SET_PLATFORM:
            {
                return Object.assign({}, deviceState, { platform: action.payload });
            }
    }
    return Object.assign({}, deviceState);
}
exports.deviceReducer = deviceReducer;

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exports$eventsListen;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app_1 = __webpack_require__(39);
var events_actions_1 = __webpack_require__(70);
var events_action_creators_1 = __webpack_require__(69);
var redux_ui_router_1 = __webpack_require__(66);
var _concat = __webpack_require__(648);
var _uniqBy = __webpack_require__(663);
exports.eventsListener = (_exports$eventsListen = {}, _defineProperty(_exports$eventsListen, events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL, function (action, dispatch, state) {
    var contentfulService = app_1.injector.get('contentfulService');
    dispatch(events_action_creators_1.events_loading());
    contentfulService.getEvents(state.app.contentful.contentfulClient, action.payload.skip, action.payload.limit).then(function (contentfulEvents) {
        if (contentfulEvents && contentfulEvents.length) {
            var events = filterUniques(state.app.events.events, contentfulEvents);
            setTimeout(function () {
                dispatch(events_action_creators_1.events_getEventsFromContentfulSuccess());
            }, 400);
            dispatch(events_action_creators_1.events_setEvents(events));
            dispatch(events_action_creators_1.events_setSkip(events.length));
            return events;
        } else {
            throw new Error('Could not retrieve events.');
        }
    }).then(function (events) {
        var upcomingEvents = contentfulService.getUpcomingEvents(events);
        dispatch(events_action_creators_1.events_setUpcomingEvents(upcomingEvents));
        if (upcomingEvents && upcomingEvents.length) {
            if (state.app.events.eventsShowUpcoming) {
                dispatch(events_action_creators_1.events_showUpcomingEvents());
            }
        }
        return events;
    }).then(function (events) {
        var pastEvents = contentfulService.getPastEvents(events);
        dispatch(events_action_creators_1.events_setPastEvents(pastEvents));
        if (pastEvents && pastEvents.length) {
            if (state.app.events.eventsShowPast) {
                dispatch(events_action_creators_1.events_showPastEvents());
            }
        }
    }).catch(function (error) {
        dispatch(events_action_creators_1.events_getEventsFromContentfulError(error));
    }).finally(function () {
        dispatch(events_action_creators_1.events_notLoading());
    });
    function filterUniques(events, contentfulEvents) {
        return _uniqBy(_concat(events, contentfulEvents), function (event) {
            return event.sys.id;
        });
    }
}), _defineProperty(_exports$eventsListen, events_actions_1.EVENTS_GET_EVENT_CONTENTFUL, function (action, dispatch, state) {
    var contentfulService = app_1.injector.get('contentfulService');
    dispatch(events_action_creators_1.events_loading());
    contentfulService.getEventBySysId(state.app.contentful.contentfulClient, action.payload).then(function (contentfulEvent) {
        if (contentfulEvent) {
            setTimeout(function () {
                dispatch(events_action_creators_1.events_getEventFromContentfulSuccess());
            }, 400);
            dispatch(events_action_creators_1.events_setSelectedEvent(contentfulEvent));
        } else {
            throw new Error('Could not retrieve event.');
        }
    }).catch(function (error) {
        dispatch(events_action_creators_1.events_getEventFromContentfulError(error));
    }).finally(function () {
        dispatch(events_action_creators_1.events_notLoading());
    });
}), _defineProperty(_exports$eventsListen, events_actions_1.EVENTS_GO_TO_SELECTED_EVENT, function (action, dispatch, state) {
    if (state.app.events.selectedEvent && state.app.events.selectedEvent.sys.id) {
        dispatch(redux_ui_router_1.stateGo('main.player', {
            eventId: state.app.events.selectedEvent.sys.id
        }));
    }
}), _exports$eventsListen);

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var app_initial_state_1 = __webpack_require__(157);
var events_actions_1 = __webpack_require__(70);
function eventsReducer(eventsState, action) {
    switch (action.type) {
        case events_actions_1.EVENTS_LOADING:
            {
                return Object.assign({}, eventsState, { eventsLoading: true });
            }
        case events_actions_1.EVENTS_NOT_LOADING:
            {
                return Object.assign({}, eventsState, { eventsLoading: false });
            }
        case events_actions_1.EVENTS_RESET_EVENTS_STATE:
            {
                return Object.assign({}, new app_initial_state_1.EventsState());
            }
        case events_actions_1.EVENTS_SET_EVENTS:
            {
                return Object.assign({}, eventsState, { events: [].concat(_toConsumableArray(action.payload)) });
            }
        case events_actions_1.EVENTS_SET_UPCOMING_EVENTS:
            {
                return Object.assign({}, eventsState, { upcomingEvents: [].concat(_toConsumableArray(action.payload)) });
            }
        case events_actions_1.EVENTS_SET_PAST_EVENTS:
            {
                return Object.assign({}, eventsState, { pastEvents: [].concat(_toConsumableArray(action.payload)) });
            }
        case events_actions_1.EVENTS_SHOW_UPCOMING:
            {
                return Object.assign({}, eventsState, { eventsShowUpcoming: true, eventsShowPast: false, displayedEvents: [].concat(_toConsumableArray(eventsState.upcomingEvents)) });
            }
        case events_actions_1.EVENTS_SHOW_PAST:
            {
                return Object.assign({}, eventsState, { eventsShowUpcoming: false, eventsShowPast: true, displayedEvents: [].concat(_toConsumableArray(eventsState.pastEvents)) });
            }
        case events_actions_1.EVENTS_SET_SKIP:
            {
                return Object.assign({}, eventsState, { eventsSkip: action.payload });
            }
        case events_actions_1.EVENTS_SET_SELECTED_EVENT:
            {
                return Object.assign({}, eventsState, { selectedEvent: Object.assign({}, action.payload) });
            }
    }
    return Object.assign({}, eventsState);
}
exports.eventsReducer = eventsReducer;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exports$facebookList;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app_1 = __webpack_require__(39);
var app_constants_1 = __webpack_require__(56);
var facebook_actions_1 = __webpack_require__(57);
var app_action_creators_1 = __webpack_require__(44);
var facebook_action_creators_1 = __webpack_require__(84);
var auth_action_creators_1 = __webpack_require__(29);
exports.facebookListener = (_exports$facebookList = {}, _defineProperty(_exports$facebookList, facebook_actions_1.FACEBOOK_INIT_WEB, function (action, dispatch, state) {
    var facebookService = app_1.injector.get('facebookService');
    dispatch(facebook_action_creators_1.facebookLoading());
    dispatch(facebook_action_creators_1.facebookDisableLogin());
    facebookService.jQueryLoadFacebookSDKScript().done(function (script, textStatus) {
        try {
            if (!facebookService.getFBGlobal()) {
                dispatch(facebook_action_creators_1.facebookLoadScriptError());
                dispatch(facebook_action_creators_1.facebookNotLoading());
                return;
            }
            dispatch(facebook_action_creators_1.facebookGlobalReady());
            dispatch(facebook_action_creators_1.facebookLoadScriptSuccess());
            dispatch(facebook_action_creators_1.facebookNotLoading());
            dispatch(facebook_action_creators_1.facebookEnableLogin());
            facebookService.getFBGlobal().init(app_constants_1.FACEBOOK_APP_IDS);
        } catch (error) {
            dispatch(facebook_action_creators_1.facebookInitWebError(error));
            dispatch(facebook_action_creators_1.facebookNotLoading());
        }
    }).fail(function (jqxhr, settings, exception) {
        dispatch(facebook_action_creators_1.facebookLoadScriptError());
        dispatch(facebook_action_creators_1.facebookNotLoading());
    });
}), _defineProperty(_exports$facebookList, facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH, function (action, dispatch, state) {
    var facebookService = app_1.injector.get('facebookService');
    try {
        dispatch(facebook_action_creators_1.facebookLoading());
        dispatch(facebook_action_creators_1.facebookDisableLogin());
        facebookService.getLoginStatus(function (response) {
            dispatch(app_action_creators_1.appLoading());
            if (response.status === 'connected') {
                dispatch(facebook_action_creators_1.facebookSignInOAuthSuccess());
                dispatch(auth_action_creators_1.auth_signInFacebookWToken(response));
            }
            dispatch(facebook_action_creators_1.facebookEnableLogin());
            dispatch(facebook_action_creators_1.facebookNotLoading());
        });
    } catch (error) {
        dispatch(facebook_action_creators_1.facebookEnableLogin());
        dispatch(facebook_action_creators_1.facebookNotLoading());
    }
}), _defineProperty(_exports$facebookList, facebook_actions_1.FACEBOOK_INIT_CORDOVA, function (action, dispatch, state) {
    var facebookService = app_1.injector.get('facebookService');
    dispatch(facebook_action_creators_1.facebookLoading());
    dispatch(facebook_action_creators_1.facebookDisableLogin());
    try {
        if (facebookService.getFBPluginGlobal()) {
            dispatch(facebook_action_creators_1.facebookCordovaGlobalReady());
            dispatch(facebook_action_creators_1.facebookInitSuccessCordova());
            dispatch(facebook_action_creators_1.facebookEnableLogin());
            dispatch(facebook_action_creators_1.facebookNotLoading());
        } else {
            throw new Error('Facebook plugin not available!');
        }
    } catch (error) {
        dispatch(facebook_action_creators_1.facebookInitErrorCordova(error));
        dispatch(facebook_action_creators_1.facebookNotLoading());
    }
}), _defineProperty(_exports$facebookList, facebook_actions_1.FACEBOOK_SIGN_IN_OAUTH_CORDOVA, function (action, dispatch, state) {
    var facebookService = app_1.injector.get('facebookService');
    try {
        dispatch(facebook_action_creators_1.facebookLoading());
        dispatch(facebook_action_creators_1.facebookDisableLogin());
        facebookService.getLoginStatusCordova(function (response) {
            dispatch(app_action_creators_1.appLoading());
            if (response.status === 'connected') {
                dispatch(facebook_action_creators_1.facebookSignInOAuthSuccessCordova());
                dispatch(auth_action_creators_1.auth_signInFacebookWTokenCordova(response));
            }
            dispatch(facebook_action_creators_1.facebookEnableLogin());
            dispatch(facebook_action_creators_1.facebookNotLoading());
        });
    } catch (error) {
        dispatch(facebook_action_creators_1.facebookEnableLogin());
        dispatch(facebook_action_creators_1.facebookNotLoading());
    }
}), _exports$facebookList);

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var facebook_actions_1 = __webpack_require__(57);
function facebookReducer(facebookState, action) {
    switch (action.type) {
        case facebook_actions_1.FACEBOOK_LOADING:
            {
                return Object.assign({}, facebookState, { facebookLoading: true });
            }
        case facebook_actions_1.FACEBOOK_NOT_LOADING:
            {
                return Object.assign({}, facebookState, { facebookLoading: false });
            }
        case facebook_actions_1.FACEBOOK_DISABLE_LOGIN:
            {
                return Object.assign({}, facebookState, { facebookLoginDisabled: true });
            }
        case facebook_actions_1.FACEBOOK_ENABLE_LOGIN:
            {
                return Object.assign({}, facebookState, { facebookLoginDisabled: false });
            }
        case facebook_actions_1.FACEBOOK_GLOBAL_READY:
            {
                return Object.assign({}, facebookState, { facebook: true });
            }
        case facebook_actions_1.FACEBOOK_GLOBAL_READY_CORDOVA:
            {
                return Object.assign({}, facebookState, { facebookCordovaPlugin: true });
            }
    }
    return Object.assign({}, facebookState);
}
exports.facebookReducer = facebookReducer;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exports$firebaseList;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app_1 = __webpack_require__(39);
var firebase_actions_1 = __webpack_require__(71);
var auth_action_creators_1 = __webpack_require__(29);
var firebase_action_creators_1 = __webpack_require__(160);
exports.firebaseListener = (_exports$firebaseList = {}, _defineProperty(_exports$firebaseList, firebase_actions_1.FIREBASE_INIT_WEB, function (action, dispatch, state) {
    var firebaseService = app_1.injector.get('firebaseService');
    dispatch(firebase_action_creators_1.firebaseLoading());
    firebaseService.jQueryLoadFirebaseScript().done(function (script, textStatus) {
        try {
            if (!firebaseService.getFirebaseGlobal()) {
                throw new Error("Firebase not loaded.");
            }
            dispatch(firebase_action_creators_1.firebaseLoadScriptSuccess());
            firebaseService.initWeb(); // this is synchronous
            dispatch(firebase_action_creators_1.firebaseInitWebSuccess());
            dispatch(firebase_action_creators_1.firebaseGlobalReady());
            dispatch(firebase_action_creators_1.firebaseNotLoading());
            var onAuthStateChangedUnsubscribe = firebaseService.getFirebaseGlobal().auth().onAuthStateChanged(function (user) {
                if (user) {
                    dispatch(auth_action_creators_1.auth_setUser(user));
                    dispatch(auth_action_creators_1.auth_setUserAlreadyLoggedIn());
                } else {
                    dispatch(auth_action_creators_1.auth_resetUser());
                }
                onAuthStateChangedUnsubscribe();
            });
        } catch (error) {
            dispatch(firebase_action_creators_1.firebaseInitWebError(error));
            dispatch(auth_action_creators_1.auth_resetUser());
            dispatch(firebase_action_creators_1.firebaseNotLoading());
        }
    }).fail(function (jqxhr, settings, exception) {
        dispatch(firebase_action_creators_1.firebaseLoadScriptError(exception));
        dispatch(firebase_action_creators_1.firebaseNotLoading());
    });
}), _defineProperty(_exports$firebaseList, firebase_actions_1.FIREBASE_INIT_CORDOVA, function (action, dispatch, state) {
    var firebaseService = app_1.injector.get('firebaseService');
    dispatch(firebase_action_creators_1.firebaseLoading());
    try {
        if (!firebaseService.getFirebaseGlobal()) {
            throw new Error("Firebase not loaded.");
        }
        if (!firebaseService.getFirebasePluginGlobal()) {
            throw new Error("Firebase plugin not loaded.");
        }
        firebaseService.initCordova(); // this is synchronous
        dispatch(firebase_action_creators_1.firebaseInitCordovaSuccess());
        dispatch(firebase_action_creators_1.firebaseGlobalReady());
        dispatch(firebase_action_creators_1.firebaseNotLoading());
        var onAuthStateChangedUnsubscribe = firebaseService.getFirebaseGlobal().auth().onAuthStateChanged(function (user) {
            if (user) {
                dispatch(auth_action_creators_1.auth_setUser(user));
                dispatch(auth_action_creators_1.auth_setUserAlreadyLoggedIn());
            } else {
                dispatch(auth_action_creators_1.auth_resetUser());
            }
            onAuthStateChangedUnsubscribe();
        });
    } catch (error) {
        dispatch(firebase_action_creators_1.firebaseInitCordovaError(error));
        dispatch(auth_action_creators_1.auth_resetUser());
        dispatch(firebase_action_creators_1.firebaseNotLoading());
    }
}), _exports$firebaseList);

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firebase_actions_1 = __webpack_require__(71);
function firebaseReducer(firebaseState, action) {
    switch (action.type) {
        case firebase_actions_1.FIREBASE_LOADING:
            {
                return Object.assign({}, firebaseState, { firebaseLoading: true });
            }
        case firebase_actions_1.FIREBASE_NOT_LOADING:
            {
                return Object.assign({}, firebaseState, { firebaseLoading: false });
            }
        case firebase_actions_1.FIREBASE_GLOBAL_READY:
            {
                return Object.assign({}, firebaseState, { firebaseReady: true });
            }
    }
    return Object.assign({}, firebaseState);
}
exports.firebaseReducer = firebaseReducer;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var google_analytics_actions_1 = __webpack_require__(105);
function googleAnalyticsLoading() {
    return {
        type: google_analytics_actions_1.GOOGLE_ANALYTICS_LOADING
    };
}
exports.googleAnalyticsLoading = googleAnalyticsLoading;
function googleAnalyticsNotLoading() {
    return {
        type: google_analytics_actions_1.GOOGLE_ANALYTICS_NOT_LOADING
    };
}
exports.googleAnalyticsNotLoading = googleAnalyticsNotLoading;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var google_analytics_actions_1 = __webpack_require__(105);
function googleAnalyticsReducer(googleAnalyticsState, action) {
    switch (action.type) {
        case google_analytics_actions_1.GOOGLE_ANALYTICS_LOADING:
            {
                return Object.assign({}, googleAnalyticsState, { googleAnalyticsLoading: true });
            }
        case google_analytics_actions_1.GOOGLE_ANALYTICS_NOT_LOADING:
            {
                return Object.assign({}, googleAnalyticsState, { googleAnalyticsLoading: false });
            }
    }
    return Object.assign({}, googleAnalyticsState);
}
exports.googleAnalyticsReducer = googleAnalyticsReducer;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exports$googleLoginL;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app_1 = __webpack_require__(39);
var google_login_actions_1 = __webpack_require__(72);
var app_constants_1 = __webpack_require__(56);
var google_login_action_creators_1 = __webpack_require__(85);
var app_action_creators_1 = __webpack_require__(44);
var auth_action_creators_1 = __webpack_require__(29);
exports.googleLoginListener = (_exports$googleLoginL = {}, _defineProperty(_exports$googleLoginL, google_login_actions_1.GOOGLE_LOGIN_INIT_WEB, function (action, dispatch, state) {
    var googleLoginService = app_1.injector.get('googleLoginService');
    dispatch(google_login_action_creators_1.googleLoginLoading());
    dispatch(google_login_action_creators_1.googleLoginDisable());
    googleLoginService.jQueryLoadGoogleLoginSDKScript().done(function (script, textStatus) {
        try {
            dispatch(google_login_action_creators_1.googleLoginLoadScriptSuccess());
            if (googleLoginService.getGoogleLoginGlobal()) {
                dispatch(google_login_action_creators_1.googleLoginGlobalReady());
            }
            googleLoginService.getGoogleLoginGlobal().load('auth2', function () {
                var auth2Ready = googleLoginService.getGoogleLoginGlobal().auth2.init(app_constants_1.GOOGLE_LOGIN_INIT_OPTIONS);
                if (auth2Ready) {
                    dispatch(google_login_action_creators_1.googleLoginAuth2Ready());
                }
                dispatch(google_login_action_creators_1.googleLoginInitWebSuccess());
                dispatch(google_login_action_creators_1.googleLoginNotLoading());
                dispatch(google_login_action_creators_1.googleLoginEnable());
            });
        } catch (error) {
            dispatch(google_login_action_creators_1.googleLoginInitWebError(error));
            dispatch(google_login_action_creators_1.googleLoginNotLoading());
        }
    }).fail(function (jqxhr, settings, exception) {
        dispatch(google_login_action_creators_1.googleLoginLoadScriptError(exception));
        dispatch(google_login_action_creators_1.googleLoginNotLoading());
    });
}), _defineProperty(_exports$googleLoginL, google_login_actions_1.GOOGLE_LOGIN_OAUTH, function (action, dispatch, state) {
    var googleLoginService = app_1.injector.get('googleLoginService');
    try {
        dispatch(google_login_action_creators_1.googleLoginLoading());
        dispatch(google_login_action_creators_1.googleLoginDisable());
        var GoogleAuth = googleLoginService.getGoogleLoginGlobal().auth2.getAuthInstance();
        GoogleAuth.currentUser.listen(function (GoogleUser) {
            if (GoogleAuth.isSignedIn.get()) {
                dispatch(app_action_creators_1.appLoading());
                dispatch(google_login_action_creators_1.googleLoginOAuthSuccess());
                dispatch(auth_action_creators_1.auth_signInGoogleLoginWToken(GoogleUser));
                dispatch(google_login_action_creators_1.googleLoginNotLoading());
                dispatch(google_login_action_creators_1.googleLoginEnable());
            }
        });
    } catch (error) {
        dispatch(google_login_action_creators_1.googleLoginNotLoading());
        dispatch(google_login_action_creators_1.googleLoginEnable());
    }
}), _defineProperty(_exports$googleLoginL, google_login_actions_1.GOOGLE_LOGIN_INIT_CORDOVA, function (action, dispatch, state) {
    var googleLoginService = app_1.injector.get('googleLoginService');
    dispatch(google_login_action_creators_1.googleLoginLoading());
    dispatch(google_login_action_creators_1.googleLoginDisable());
    try {
        if (googleLoginService.getGooglePluginGlobal()) {
            dispatch(google_login_action_creators_1.googleLoginPluginReady());
            dispatch(google_login_action_creators_1.googleLoginInitCordovaSuccess());
        } else {
            throw new Error('Google Login plugin not available!');
        }
        dispatch(google_login_action_creators_1.googleLoginNotLoading());
        dispatch(google_login_action_creators_1.googleLoginEnable());
    } catch (error) {
        dispatch(google_login_action_creators_1.googleLoginInitCordovaError(error));
        dispatch(google_login_action_creators_1.googleLoginNotLoading());
    }
}), _exports$googleLoginL);

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var google_login_actions_1 = __webpack_require__(72);
function googleLoginReducer(googleLoginState, action) {
    switch (action.type) {
        case google_login_actions_1.GOOGLE_LOGIN_LOADING:
            {
                return Object.assign({}, googleLoginState, { googleLoginLoading: true });
            }
        case google_login_actions_1.GOOGLE_LOGIN_NOT_LOADING:
            {
                return Object.assign({}, googleLoginState, { googleLoginLoading: false });
            }
        case google_login_actions_1.GOOGLE_LOGIN_ENABLE:
            {
                return Object.assign({}, googleLoginState, { googleLoginDisabled: false });
            }
        case google_login_actions_1.GOOGLE_LOGIN_GLOBAL_READY:
            {
                return Object.assign({}, googleLoginState, { gapiReady: true });
            }
        case google_login_actions_1.GOOGLE_LOGIN_PLUGIN_READY:
            {
                return Object.assign({}, googleLoginState, { pluginReady: true });
            }
        case google_login_actions_1.GOOGLE_LOGIN_AUTH2_READY:
            {
                return Object.assign({}, googleLoginState, { auth2Ready: true });
            }
    }
    return Object.assign({}, googleLoginState);
}
exports.googleLoginReducer = googleLoginReducer;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exports$loggingListe;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app_1 = __webpack_require__(39);
var auth_actions_1 = __webpack_require__(67);
var firebase_actions_1 = __webpack_require__(71);
var google_login_actions_1 = __webpack_require__(72);
var facebook_actions_1 = __webpack_require__(57);
var contentful_actions_1 = __webpack_require__(68);
var events_actions_1 = __webpack_require__(70);
exports.loggingListeners = (_exports$loggingListe = {}, _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_OUT, function (action, dispatch, state) {
    loggerHelper({
        level: 0,
        action: action,
        message: 'Signing out...'
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_OUT_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Sign out successful !',
        displayOnScreen: true,
        dismissAfter: 2000
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_RESET_PASSWORD_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 2,
        action: action,
        message: action.payload.message ? action.payload.message : 'Error while resetting password.'
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_RESET_PASSWORD_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        message: 'Ok done! Check your inbox.',
        autoDismiss: false,
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_UP_EMAIL_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        message: 'Account created!',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_UP_EMAIL_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 2,
        action: action,
        message: action.payload.message ? action.payload.message : 'Error while creating account.'
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_EMAIL_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Sign In Successful',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_EMAIL_ERROR_INVALID_EMAIL, function (action, dispatch, state) {
    loggerHelper({
        level: 2,
        action: action,
        message: 'Email is not registered.'
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_EMAIL_ERROR_WRONG_PASSWORD, function (action, dispatch, state) {
    loggerHelper({
        level: 2,
        action: action,
        message: 'Invalid password.'
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_EMAIL_OTHER_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: action.payload.message,
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_FACEBOOK_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Sign In Successful (with Facebook).',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_FACEBOOK_SUCCESS_CORDOVA, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Sign In Successful (with Facebook).',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_FACEBOOK_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Error occurred with Facebook login.',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_FACEBOOK_ERROR_CORDOVA, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Error occurred with Facebook login.',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_FACEBOOK_CANCELLED_CORDOVA, function (action, dispatch, state) {
    loggerHelper({
        level: 2,
        action: action,
        message: 'Facebook login was probably cancelled.',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Sign In Successful (with Google).',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Error occurred with Google login.',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_SUCCESS_CORDOVA, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Sign In Successful (with Google).',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, auth_actions_1.AUTH_SIGN_IN_GOOGLE_LOGIN_ERROR_CORDOVA, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Error occurred with Google login.',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, firebase_actions_1.FIREBASE_LOAD_SCRIPT_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Firebase script was successfully loaded.'
    });
}), _defineProperty(_exports$loggingListe, firebase_actions_1.FIREBASE_LOAD_SCRIPT_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Firebase script could not be loaded.'
    });
}), _defineProperty(_exports$loggingListe, firebase_actions_1.FIREBASE_INIT_WEB_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Firebase init successful.'
    });
}), _defineProperty(_exports$loggingListe, firebase_actions_1.FIREBASE_INIT_WEB_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Firebase init failed.',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, firebase_actions_1.FIREBASE_INIT_CORDOVA_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Firebase init successful (Cordova).'
    });
}), _defineProperty(_exports$loggingListe, firebase_actions_1.FIREBASE_INIT_CORDOVA_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Firebase init failed (Cordova).',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, facebook_actions_1.FACEBOOK_LOAD_SCRIPT_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Facebook script was successfully loaded.'
    });
}), _defineProperty(_exports$loggingListe, facebook_actions_1.FACEBOOK_LOAD_SCRIPT_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Facebook script could not be loaded.'
    });
}), _defineProperty(_exports$loggingListe, facebook_actions_1.FACEBOOK_INIT_WEB_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Facebook SDK init successful.'
    });
}), _defineProperty(_exports$loggingListe, facebook_actions_1.FACEBOOK_INIT_WEB_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Facebook SDK init failed.'
    });
}), _defineProperty(_exports$loggingListe, facebook_actions_1.FACEBOOK_INIT_CORDOVA_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        action: action,
        message: 'Facebook SDK init successful.'
    });
}), _defineProperty(_exports$loggingListe, facebook_actions_1.FACEBOOK_INIT_CORDOVA_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Facebook SDK init failed.'
    });
}), _defineProperty(_exports$loggingListe, google_login_actions_1.GOOGLE_LOGIN_INIT_WEB_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Google Login init failed.'
    });
}), _defineProperty(_exports$loggingListe, google_login_actions_1.GOOGLE_LOGIN_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 2,
        action: action,
        message: 'Error occurred with Google login.',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, google_login_actions_1.GOOGLE_LOGIN_CANCELLED, function (action, dispatch, state) {
    loggerHelper({
        level: 2,
        message: 'Google login was cancelled.',
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, contentful_actions_1.CONTENTFUL_INIT_WEB_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: 'Contentful init failed.'
    });
}), _defineProperty(_exports$loggingListe, events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL, function (action, dispatch, state) {
    loggerHelper({
        level: 0,
        message: 'Retrieving events.'
    });
}), _defineProperty(_exports$loggingListe, events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL_SUCCESS, function (action, dispatch, state) {
    loggerHelper({
        level: 1,
        message: 'Events list is up to date.'
    });
}), _defineProperty(_exports$loggingListe, events_actions_1.EVENTS_GET_EVENTS_CONTENTFUL_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: action.payload.message,
        displayOnScreen: true
    });
}), _defineProperty(_exports$loggingListe, events_actions_1.EVENTS_GET_EVENT_CONTENTFUL_ERROR, function (action, dispatch, state) {
    loggerHelper({
        level: 3,
        action: action,
        message: action.payload.message,
        displayOnScreen: true
    });
}), _exports$loggingListe);
function loggerHelper(log) {
    var loggingService = app_1.injector.get('loggingService');
    loggingService.log(log);
}

/***/ }),
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 539 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__leave-right":"app-animations__leave-right","__leave-left":"app-animations__leave-left","__fade-out-opacity":"app-animations__fade-out-opacity","__enter-right":"app-animations__enter-right","__enter-left":"app-animations__enter-left","__fade-in-opacity":"app-animations__fade-in-opacity","__fade-in":"app-animations__fade-in","__fade-out":"app-animations__fade-out","__instant-fade-in":"app-animations__instant-fade-in","__instant-fade-out":"app-animations__instant-fade-out","bounce-up-down":"app-animationsbounce-up-down","tap-effect-in":"app-animationstap-effect-in","tap-effect-out":"app-animationstap-effect-out"};

/***/ }),
/* 540 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tile":"apptile","__wrapper":"app__wrapper","__ui-view":"app__ui-view","__html--white":"app__html--white","__html--grey":"app__html--grey","bounce-up-down":"appbounce-up-down","tap-effect-in":"apptap-effect-in","tap-effect-out":"apptap-effect-out"};

/***/ }),
/* 541 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__leave":"input-validation-animations__leave","__leave--mobile":"input-validation-animations__leave--mobile","__enter":"input-validation-animations__enter","__enter--mobile":"input-validation-animations__enter--mobile","bounce-up-down":"input-validation-animationsbounce-up-down","tap-effect-in":"input-validation-animationstap-effect-in","tap-effect-out":"input-validation-animationstap-effect-out"};

/***/ }),
/* 542 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"input-validation__wrapper","__danger":"input-validation__danger","__warning":"input-validation__warning","__primary":"input-validation__primary","__blue-green":"input-validation__blue-green","__default":"input-validation__default","__success":"input-validation__success","__icon-wrapper":"input-validation__icon-wrapper","__icon":"input-validation__icon","__arrow":"input-validation__arrow","bounce-up-down":"input-validationbounce-up-down","tap-effect-in":"input-validationtap-effect-in","tap-effect-out":"input-validationtap-effect-out"};

/***/ }),
/* 543 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"input-wrapper__wrapper","__danger":"input-wrapper__danger","__warning":"input-wrapper__warning","__primary":"input-wrapper__primary","__blue-green":"input-wrapper__blue-green","__default":"input-wrapper__default","__success":"input-wrapper__success","__icon-wrapper":"input-wrapper__icon-wrapper","__icon":"input-wrapper__icon","bounce-up-down":"input-wrapperbounce-up-down","tap-effect-in":"input-wrappertap-effect-in","tap-effect-out":"input-wrappertap-effect-out"};

/***/ }),
/* 544 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"--small":"loader--small","__wrapper":"loader__wrapper","loader-style__show-loader":"loaderloader-style__show-loader","__wrapper--not-loading":"loader__wrapper--not-loading","__wrapper--loading":"loader__wrapper--loading","bounce-up-down":"loaderbounce-up-down","tap-effect-in":"loadertap-effect-in","tap-effect-out":"loadertap-effect-out"};

/***/ }),
/* 545 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__leave":"on-screen-notifications-animations__leave","__leave--mobile":"on-screen-notifications-animations__leave--mobile","__enter":"on-screen-notifications-animations__enter","__enter--mobile":"on-screen-notifications-animations__enter--mobile","bounce-up-down":"on-screen-notifications-animationsbounce-up-down","tap-effect-in":"on-screen-notifications-animationstap-effect-in","tap-effect-out":"on-screen-notifications-animationstap-effect-out"};

/***/ }),
/* 546 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"on-screen-notifications__wrapper","__notification":"on-screen-notifications__notification","__message":"on-screen-notifications__message","__message--long":"on-screen-notifications__message--long","__danger":"on-screen-notifications__danger","__warning":"on-screen-notifications__warning","__primary":"on-screen-notifications__primary","__blue-green":"on-screen-notifications__blue-green","__default":"on-screen-notifications__default","__success":"on-screen-notifications__success","__close":"on-screen-notifications__close","__icon-wrapper":"on-screen-notifications__icon-wrapper","__icon":"on-screen-notifications__icon","bounce-up-down":"on-screen-notificationsbounce-up-down","tap-effect-in":"on-screen-notificationstap-effect-in","tap-effect-out":"on-screen-notificationstap-effect-out"};

/***/ }),
/* 547 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tile":"authtile","__column":"auth__column","__separator":"auth__separator","__separator-text":"auth__separator-text","__link":"auth__link","__prompt":"auth__prompt","__prompt__label":"auth__prompt__label","bounce-up-down":"authbounce-up-down","tap-effect-in":"authtap-effect-in","tap-effect-out":"authtap-effect-out"};

/***/ }),
/* 548 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tile":"auth-logintile","__wrapper":"auth-login__wrapper","__form":"auth-login__form","__social-buttons":"auth-login__social-buttons","bounce-up-down":"auth-loginbounce-up-down","tap-effect-in":"auth-logintap-effect-in","tap-effect-out":"auth-logintap-effect-out"};

/***/ }),
/* 549 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tile":"auth-login-emailtile","__wrapper":"auth-login-email__wrapper","__form":"auth-login-email__form","__column":"auth-login-email__column","__sign-in-button":"auth-login-email__sign-in-button","bounce-up-down":"auth-login-emailbounce-up-down","tap-effect-in":"auth-login-emailtap-effect-in","tap-effect-out":"auth-login-emailtap-effect-out"};

/***/ }),
/* 550 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__logo":"auth-login-header__logo","__square-logo":"auth-login-header__square-logo","__logo-banner":"auth-login-header__logo-banner","__logo-wrapper":"auth-login-header__logo-wrapper","__greetings":"auth-login-header__greetings","bounce-up-down":"auth-login-headerbounce-up-down","tap-effect-in":"auth-login-headertap-effect-in","tap-effect-out":"auth-login-headertap-effect-out"};

/***/ }),
/* 551 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tile":"auth-reset-passwordtile","__wrapper":"auth-reset-password__wrapper","__form":"auth-reset-password__form","bounce-up-down":"auth-reset-passwordbounce-up-down","tap-effect-in":"auth-reset-passwordtap-effect-in","tap-effect-out":"auth-reset-passwordtap-effect-out"};

/***/ }),
/* 552 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tile":"auth-signuptile","__wrapper":"auth-signup__wrapper","__form":"auth-signup__form","bounce-up-down":"auth-signupbounce-up-down","tap-effect-in":"auth-signuptap-effect-in","tap-effect-out":"auth-signuptap-effect-out"};

/***/ }),
/* 553 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"--hidden":"auth-toolbar--hidden","__back-button":"auth-toolbar__back-button","__animate":"auth-toolbar__animate","__appear":"auth-toolbar__appear","__title":"auth-toolbar__title","bounce-up-down":"auth-toolbarbounce-up-down","tap-effect-in":"auth-toolbartap-effect-in","tap-effect-out":"auth-toolbartap-effect-out"};

/***/ }),
/* 554 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"events__wrapper","__controls":"events__controls","__controls--align-left":"events__controls--align-left","__list__wrapper":"events__list__wrapper","__list":"events__list","__item":"events__item","__item-img":"events__item-img","__item-description":"events__item-description","__item-title":"events__item-title","__item-date":"events__item-date","__load-more":"events__load-more","bounce-up-down":"eventsbounce-up-down","tap-effect-in":"eventstap-effect-in","tap-effect-out":"eventstap-effect-out"};

/***/ }),
/* 555 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__leave":"main-animations__leave","__leave-instant":"main-animations__leave-instant","__enter":"main-animations__enter","__enter-instant":"main-animations__enter-instant","bounce-up-down":"main-animationsbounce-up-down","tap-effect-in":"main-animationstap-effect-in","tap-effect-out":"main-animationstap-effect-out"};

/***/ }),
/* 556 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"main__wrapper","__scrolling":"main__scrolling","bounce-up-down":"mainbounce-up-down","tap-effect-in":"maintap-effect-in","tap-effect-out":"maintap-effect-out"};

/***/ }),
/* 557 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"main-player__wrapper","__item__wrapper":"main-player__item__wrapper","__item":"main-player__item","__player":"main-player__player","__livestream-player":"main-player__livestream-player","__description":"main-player__description","__slido-embed-wrapper":"main-player__slido-embed-wrapper","__slido-embed":"main-player__slido-embed","bounce-up-down":"main-playerbounce-up-down","tap-effect-in":"main-playertap-effect-in","tap-effect-out":"main-playertap-effect-out"};

/***/ }),
/* 558 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"profile__wrapper","bounce-up-down":"profilebounce-up-down","tap-effect-in":"profiletap-effect-in","tap-effect-out":"profiletap-effect-out"};

/***/ }),
/* 559 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"settings__wrapper","bounce-up-down":"settingsbounce-up-down","tap-effect-in":"settingstap-effect-in","tap-effect-out":"settingstap-effect-out"};

/***/ }),
/* 560 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__wrapper":"main-sidebar__wrapper","__toolbar":"main-sidebar__toolbar","__toolbar__title":"main-sidebar__toolbar__title","__icon":"main-sidebar__icon","__button--border-top":"main-sidebar__button--border-top","__buttons":"main-sidebar__buttons","__buttons--bottom":"main-sidebar__buttons--bottom","__version":"main-sidebar__version","bounce-up-down":"main-sidebarbounce-up-down","tap-effect-in":"main-sidebartap-effect-in","tap-effect-out":"main-sidebartap-effect-out"};

/***/ }),
/* 561 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"__back-button":"main-toolbar__back-button","__refresh-button":"main-toolbar__refresh-button","__menu-button":"main-toolbar__menu-button","__title":"main-toolbar__title","bounce-up-down":"main-toolbarbounce-up-down","tap-effect-in":"main-toolbartap-effect-in","tap-effect-out":"main-toolbartap-effect-out"};

/***/ }),
/* 562 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bounce-up-down":"_basebounce-up-down","tap-effect-in":"_basetap-effect-in","tap-effect-out":"_basetap-effect-out"};

/***/ }),
/* 563 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bounce-up-down":"_linksbounce-up-down","tap-effect-in":"_linkstap-effect-in","tap-effect-out":"_linkstap-effect-out"};

/***/ }),
/* 564 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 565 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bounce-up-down":"_buttonsbounce-up-down","tap-effect-in":"_buttonstap-effect-in","tap-effect-out":"_buttonstap-effect-out"};

/***/ }),
/* 566 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 567 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bounce-up-down":"_formsbounce-up-down","tap-effect-in":"_formstap-effect-in","tap-effect-out":"_formstap-effect-out"};

/***/ }),
/* 568 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bounce-up-down":"_headingsbounce-up-down","tap-effect-in":"_headingstap-effect-in","tap-effect-out":"_headingstap-effect-out"};

/***/ }),
/* 569 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bounce-up-down":"_iconsbounce-up-down","tap-effect-in":"_iconstap-effect-in","tap-effect-out":"_iconstap-effect-out"};

/***/ }),
/* 570 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bounce-up-down":"_social-media-buttonsbounce-up-down","tap-effect-in":"_social-media-buttonstap-effect-in","tap-effect-out":"_social-media-buttonstap-effect-out"};

/***/ }),
/* 571 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tile":"_tilestile"};

/***/ }),
/* 572 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 573 */,
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fav-icon-med-res.63f3c4919262c25325d6986f6a55d14e.png";

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/facebook.8593cd795512e43eb14dcba8c9bec5d3.svg";

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/google.eef22780f91e2286d65bb76f2f9f6106.svg";

/***/ }),
/* 577 */
/***/ (function(module, exports) {

module.exports = "<on-screen-notifications></on-screen-notifications> <div class=app__wrapper> <div ui-view id=ui-view class=\"app__ui-view app__ui-view-animate\"></div> </div>";

/***/ }),
/* 578 */
/***/ (function(module, exports) {

module.exports = "<div ng-transclude> </div> ";

/***/ }),
/* 579 */
/***/ (function(module, exports) {

module.exports = "<label for={{::vm.inputId}} class=pure-input-icon ng-class=\"{\n            'pure-input-icon--valid': vm.form[vm.formPropName].$valid,\n            'pure-input-icon--invalid': vm.form[vm.formPropName].$invalid && !vm.form[vm.formPropName].$untouched}\"> <div class={{::vm.inputIcon}}></div> </label> <input placeholder={{::vm.inputPlaceholder}} class=pure-input-1 id={{::vm.inputId}} name={{::vm.inputName}} ng-required=::vm.inputRequired validate-email={{vm.inputValidateEmail}} not-equal-to=vm.inputNotEqualTo autocorrect=\"{{::(vm.inputAutoCorrect ? vm.inputAutoCorrect : 'none')}}\" autocapitalize=\"{{::(vm.inputAutoCapitalize ? vm.inputAutoCapitalize : 'none')}}\" autocomplete=\"{{::(vm.inputAutocomplete ? vm.inputAutocomplete : 'off')}}\" email-with-dot=\"{{::(vm.inputType == 'email' ? true : false)}}\" ng-minlength=\"{{::(vm.inputMinLength ? vm.inputMinLength : '')}}\" ng-focus=\"vm.form[vm.formPropName].focused = true\" ng-blur=\"vm.form[vm.formPropName].focused = false\" ng-model=vm.inputModel type=\"{{::(vm.inputType ? vm.inputType : 'text')}}\"> ";

/***/ }),
/* 580 */
/***/ (function(module, exports) {

module.exports = "<div class=on-screen-notifications__wrapper> <div class=\"on-screen-notifications__notification on-screen-notifications__animate on-screen-notifications-animations__leave\" ng-class=\"::{\n      'on-screen-notifications__danger': notification.levelName == 'error',\n      'on-screen-notifications__warning': notification.levelName == 'warning',\n      'on-screen-notifications__blue-green': notification.levelName == 'info',\n      'on-screen-notifications__success': notification.levelName == 'success'\n      }\" ng-repeat=\"notification in vm.notifications track by notification.id\"> <div class=on-screen-notifications__icon-wrapper> <div class=on-screen-notifications__icon ng-class=\"::{\n                        'icon-exclamation-triangle': notification.levelName == 'error',\n                        'icon-exclamation-circle': notification.levelName == 'warning',\n                        'icon-info-circle': notification.levelName == 'info',\n                        'icon-check-circle': notification.levelName == 'success'}\"> </div> </div> <div class=on-screen-notifications__message ng-class=\"{'on-screen-notifications__message--long': notification.autoDismiss}\"> {{::notification.message}} </div> <button class=\"pure-button pure-button--square-corner pure-button--no-border pure-button--no-icon-margin on-screen-notifications__close\" ng-class=\"::{\n                        'pure-button-danger': notification.levelName == 'error',\n                        'pure-button-warning': notification.levelName == 'warning',\n                        'pure-button-blue-green': notification.levelName == 'info',\n                        'pure-button-success': notification.levelName == 'success'}\" ng-hide=notification.autoDismiss ng-click=vm.remove(notification)> <i class=icon-times></i> </button> </div> </div>";

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div> <auth-toolbar ng-class=\"{'auth-toolbar--hidden': router.currentParams.hideAuthNavigation}\"></auth-toolbar> <div class=auth-login__wrapper ng-cloak> <login-header></login-header> <div class=auth-login-header__greetings> <label>Welcome to Implant Compare!</label> </div> <login-already-logged-in logged-in=state.app.auth.userAlreadyLoggedIn></login-already-logged-in> <div ng-show=!state.app.auth.userAlreadyLoggedIn class=auth__column> <div class=auth__separator> <div class=auth__separator-text> Sign in with your email / password </div> </div> <div class=auth__prompt> <button class=\"auth-login__sign-up-button pure-button pure-button-primary\" ng-click=\"stateGo('loginEmail');\"> Sign In with Email </button> </div> <div class=auth__separator> <div class=auth__separator-text> New here? Sign up with your email </div> </div> <div class=auth__prompt> <button class=\"auth-login__sign-up-button pure-button pure-button-primary\" ng-click=\"stateGo('signup');\"> Sign Up with Email </button> </div> <div class=auth__separator> <div class=auth__separator-text> Or sign in with Facebook / Google </div> </div> <div class=auth-login__social-buttons> <button ng-disabled=\"state.app.facebook.facebookLoginDisabled || state.app.facebook.facebookLoading\" ng-click=vm.signInFB() class=\"pure-button facebook-button\" loader=\"state.app.facebook.facebookLoading && !state.app.facebook.facebookLoginDisabled\"> <img class=facebook-button-icon src=" + __webpack_require__(575) + "> <span class=facebook-button-text>Facebook</span> </button> <button class=\"pure-button google-button pure-button-default\" ng-disabled=\"state.app.googleLogin.googleLoginDisabled || state.app.googleLogin.googleLoginLoading\" loader=\"state.app.googleLogin.googleLoginLoading && !state.app.googleLogin.googleLoginDisabled\" ng-click=vm.signInGoogle()> <img class=facebook-button-icon src=" + __webpack_require__(576) + "> <span class=google-button-text>Google</span> </button> </div> </div> </div> </div> ";

/***/ }),
/* 582 */
/***/ (function(module, exports) {

module.exports = "<div ng-show=vm.loggedIn class=auth__separator> </div> <div ng-show=vm.loggedIn> <div class=auth__prompt> <label class=auth__prompt__label>You are already logged in!</label> <button class=\"auth-login__sign-up-button pure-button pure-button-primary\" ng-click=\"stateGo('main.events');\"> Go to Streaming / Events </button> </div> </div> <div ng-show=vm.loggedIn class=auth__separator> </div> <div ng-show=vm.loggedIn> <div class=auth__prompt> <label class=auth__prompt__label>Maybe you want to sign out?</label> <button class=\"auth-login__sign-up-button pure-button pure-button-primary\" loader=state.app.auth.signingOut ng-click=vm.signOut();> Sign Out </button> </div> </div> ";

/***/ }),
/* 583 */
/***/ (function(module, exports) {

module.exports = "<div> <auth-toolbar ng-class=\"{'auth-toolbar--hidden': router.currentParams.hideAuthNavigation}\"></auth-toolbar> <div class=auth-login-email__wrapper ng-cloak> <div class=auth-login-header__greetings> <label>Welcome back.</label> </div> <login-already-logged-in logged-in=state.app.auth.userAlreadyLoggedIn></login-already-logged-in> <div ng-show=!state.app.auth.userAlreadyLoggedIn class=auth__column> <div class=auth__separator> <div class=auth__separator-text> Sign in with your email and password </div> </div> <form fake-action name=loginForm class=\"auth-login-email__form pure-form pure-form-stacked\" ng-submit=\"vm.signInWithEmailAndPassword(vm.email, vm.password)\"> <fieldset> <input-wrapper input-id=\"'auth-login-email__form__email'\" input-name=\"'email'\" input-placeholder=\"'Email'\" input-icon=\"'icon-envelope'\" input-type=\"'email'\" input-required=true input-is-focused=\"loginForm['email']\" input-validate-email=state.app.auth.invalidEmails input-model=vm.email input-autocomplete=\"'email'\" form=loginForm form-prop-name=\"'email'\"> </input-wrapper> <input-validation> <div class=input-validation__wrapper ng-show=\"loginForm.email.$invalid\n                                      && loginForm.$submitted\n                                      && !loginForm.email.focused\n                                      && !loginForm.password.focused\"> <div class=input-validation__arrow></div> <div ng-show=loginForm.email.$error.required class=pure-form__message> Email is required. </div> <div class=pure-form__message ng-show=\"loginForm.email.$error.email || loginForm.email.$error.emailWithDot\"> Please enter a valid email. </div> <div class=pure-form__message ng-show=loginForm.email.$error.validateEmail> No user with that email. <span><a class=\"clickable a--no-side-padding\" ng-click=\"vm.go('signup', loginForm.email, 'loginEmail')\">Sign up instead?</a></span> </div> </div> </input-validation> </fieldset> <fieldset> <input-wrapper input-id=\"'auth-login-email__form__password'\" input-name=\"'password'\" input-placeholder=\"'Password'\" input-icon=\"'icon-lock'\" input-type=\"'password'\" input-required=true input-model=vm.password input-autocomplete=\"'password'\" input-min-length=\"'6'\" form=loginForm form-prop-name=\"'password'\"> </input-wrapper> <input-validation> <div class=input-validation__wrapper ng-show=\"loginForm.password.$invalid\n                                      && loginForm.$submitted\n                                      && !loginForm.password.focused\n                                      && !loginForm.email.focused\"> <div class=input-validation__arrow></div> <div ng-show=loginForm.password.$error.minlength class=pure-form__message> Password should be at least 6 characters. </div> <div ng-show=loginForm.password.$error.required class=pure-form__message> Whoops, the entered password was invalid. </div> <div ng-show=loginForm.password.$error.required class=pure-form__message> If needed, you can <span><a class=\"clickable a--no-side-padding\" ng-click=\"vm.go('resetPassword', loginForm.email, 'loginEmail')\">reset it.</a></span> </div> </div> </input-validation> </fieldset> <button ng-disabled=state.app.loading type=submit loader=state.app.loading class=\"pure-button pure-button-primary\"> Go </button> </form> <div class=auth__separator> <div class=auth__separator-text> Need to reset your password ? </div> </div> <div class=auth__prompt> <button type=button ng-click=\"vm.go('resetPassword', loginForm.email, 'loginEmail')\" class=\"auth-login-email__sign-in-button pure-button pure-button-primary\"> Reset Password </button> </div> </div> </div> </div> ";

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = " <div class=auth-login-header__logo-banner> <div class=auth-login-header__logo-wrapper> <img class=auth-login-header__square-logo src=" + __webpack_require__(574) + "> </div> </div> ";

/***/ }),
/* 585 */
/***/ (function(module, exports) {

module.exports = "<div> <auth-toolbar ng-class=\"{'auth-toolbar--hidden': router.currentParams.hideAuthNavigation}\"></auth-toolbar> <div class=auth-reset-password__wrapper ng-cloak> <div class=auth__separator> <div class=auth__separator-text> Enter your email below </div> </div> <form fake-action name=resetForm class=\"auth-reset-password__form pure-form pure-form-stacked\" ng-submit=vm.resetPassword(vm.email)> <fieldset> <input-wrapper input-id=\"'auth-reset-password__form__email'\" input-name=\"'email'\" input-placeholder=\"'Email'\" input-icon=\"'icon-envelope'\" input-type=\"'email'\" input-required=true input-is-focused=\"resetForm['email']\" input-validate-email=state.app.auth.invalidEmails input-model=vm.email input-autocomplete=\"'email'\" form=resetForm form-prop-name=\"'email'\"> </input-wrapper> <input-validation> <div class=input-validation__wrapper ng-show=\"resetForm.email.$invalid\n                                      && resetForm.$submitted\n                                      && !resetForm.email.focused\n                                      && !resetForm.password.focused\"> <div class=input-validation__arrow></div> <div ng-show=resetForm.email.$error.required class=pure-form__message> Email is required. </div> <div class=pure-form__message ng-show=\"resetForm.email.$error.email || resetForm.email.$error.emailWithDot\"> Please enter a valid email. </div> <div class=pure-form__message ng-show=resetForm.email.$error.validateEmail> No user with that email. <br> <span><a class=\"clickable a--no-side-padding\" ng-click=\"vm.go('signup', resetForm.email, 'loginEmail')\">Sign up instead?</a></span> </div> </div> </input-validation> </fieldset> <button class=\"pure-button pure-button-primary\" loader=state.app.loading ng-disabled=state.app.loading type=submit> Send Reset Email </button> </form> </div> </div>";

/***/ }),
/* 586 */
/***/ (function(module, exports) {

module.exports = "<div> <auth-toolbar ng-class=\"{'auth-toolbar--hidden': router.currentParams.hideAuthNavigation}\"></auth-toolbar> <div class=auth-signup__wrapper id=signup ng-cloak> <div class=auth-login-header__greetings> <label>Welcome to Implant Compare!</label> </div> <div class=auth__separator> <div class=auth__separator-text> Enter your email and a password </div> </div> <form fake-action name=signUpForm class=\"auth-signup__form pure-form pure-form-stacked\" ng-submit=\"vm.signUp(vm.email, vm.password)\"> <fieldset> <input-wrapper input-id=\"'auth-signup__form__email'\" input-name=\"'email'\" input-placeholder=\"'Email'\" input-icon=\"'icon-envelope'\" input-type=\"'email'\" input-required=true input-is-focused=\"signUpForm['email']\" input-validate-email=state.app.auth.invalidEmails input-model=vm.email input-autocomplete=\"'email'\" form=signUpForm form-prop-name=\"'email'\"> </input-wrapper> <input-validation> <div class=input-validation__wrapper ng-show=\"signUpForm.email.$invalid\n                                      && signUpForm.$submitted\n                                      && !signUpForm.email.focused\n                                      && !signUpForm.password.focused\"> <div class=input-validation__arrow></div> <div ng-show=signUpForm.email.$error.required class=pure-form__message> Email is required. </div> <div ng-show=signUpForm.email.$error.validateEmail class=pure-form__message> Email already in use. </div> <div ng-show=\"signUpForm.$submitted\n                                      && signUpForm.email.$error.validateEmail\" class=\"pure-form__message pure-form__message--no-top-padding\"> <span><a class=\"clickable a--no-side-padding\" ng-click=\"vm.go('resetPassword', signUpForm.email, 'signup')\">Reset password instead?</a></span> </div> </div> </input-validation> </fieldset> <fieldset> <input-wrapper input-id=\"'auth-signup__form__password'\" input-name=\"'password'\" input-placeholder=\"'Password'\" input-icon=\"'icon-lock'\" input-type=\"'text'\" input-required=true input-not-equal-to=vm.email input-model=vm.password input-min-length=\"'6'\" form=signUpForm form-prop-name=\"'password'\"> </input-wrapper> <input-validation> <div class=input-validation__wrapper ng-show=\"signUpForm.password.$invalid\n                                      && signUpForm.$submitted\n                                      && !signUpForm.password.focused\n                                      && !signUpForm.email.focused\"> <div class=input-validation__arrow></div> <div ng-show=signUpForm.password.$error.minlength class=pure-form__message> Password should be at least 6 characters. </div> <div ng-show=signUpForm.password.$error.notEqualTo class=pure-form__message> Password and email can't be the same. </div> </div> </input-validation> </fieldset> <button class=\"pure-button pure-button-primary\" loader=state.app.loading type=submit ng-disabled=state.app.loading> Go </button> </form> </div> </div> ";

/***/ }),
/* 587 */
/***/ (function(module, exports) {

module.exports = "<button class=\"pure-button pure-button--no-border pure-button--square-corner pure-button--no-text-shadow pure-button-default pure-button--navigation pure-button--back-button auth-toolbar__back-button\" ng-click=vm.goBack() ng-show=\"::state.router.currentParams.backState !== ''\" ng-class=\"::{'pure-button--back-button--ios': vm.deviceService.isiOS()}\"> <i ng-show=\"!vm.deviceService.isAndroid() && (vm.deviceService.isiOS() || vm.deviceService.isWeb())\" class=icon-angle-left></i> <i ng-show=vm.deviceService.isAndroid() class=icon-go-back-left-arrow></i> <span>Back</span> </button> <div class=\"auth-toolbar__title unselectable\">{{state.router.currentParams.title}}</div> ";

/***/ }),
/* 588 */
/***/ (function(module, exports) {

module.exports = "<div class=events__wrapper ng-cloak> <div class=\"pure-button-group-inline events__controls\"> <button class=\"pure-button pure-button-default\" ng-class=\"{'pure-button-primary': state.app.events.eventsShowUpcoming}\" ng-click=vm.showUpcomingEvents()> Upcoming Events </button> <button class=\"pure-button pure-button-default\" ng-class=\"{'pure-button-primary': state.app.events.eventsShowPast}\" ng-click=vm.showPastEvents()> Past Events </button> </div> <div class=events__list__wrapper> <div class=events__list> <div class=events__item ng-repeat=\"event in state.app.events.displayedEvents track by $index\" id={{event.sys.id}} ng-click=vm.selectEvent(event)> <div class=events__item-img style=\"background:url(https:{{event.fields.thumbnail.fields.file.url}}?fm=jpg&fl=progressive&w=400) no-repeat center center local;background-size:cover\"> </div> <div class=events__item-description> <div class=events__item-title>{{event.fields.title}}</div> <div>{{event.fields.description}}</div> <div class=events__item-date>{{event.fields.formattedDate}}</div> </div> </div> </div> <button class=\"pure-button pure-button-default events__load-more\" ng-disabled=state.app.events.eventsLoading ng-hide=\"state.app.events.eventsShowUpcoming && state.app.events.upcomingEvents.length < 10\" ng-click=vm.loadMore()> Load More </button> </div> </div>";

/***/ }),
/* 589 */
/***/ (function(module, exports) {

module.exports = "<div> <main-sidebar></main-sidebar> <div class=main__wrapper> <main-toolbar></main-toolbar> <div class=\"main__scrolling main__animate main-animations__leave\" ng-class=\"{'main__scrolling--active': ('main.player' | isState)}\"> <div ui-view=player class=main__ui-view></div> </div> <div class=\"main__scrolling main__animate main-animations__leave\" ng-class=\"{'main__scrolling--active': ('main.events' | isState)}\"> <div ui-view=events class=main__ui-view></div> </div> <div class=\"main__scrolling main__animate main-animations__leave\" ng-class=\"{'main__scrolling--active': ('main.profile' | isState)}\"> <div ui-view=profile class=main__ui-view></div> </div> <div class=\"main__scrolling main__animate main-animations__leave\" ng-class=\"{'main__scrolling--active': ('main.settings' | isState)}\"> <div ui-view=settings class=main__ui-view></div> </div> <main-tabs></main-tabs> </div> </div>";

/***/ }),
/* 590 */
/***/ (function(module, exports) {

module.exports = "<div class=main-player__wrapper ng-cloak> <div class=main-player__item__wrapper> <div class=main-player__item> <div class=main-player__player> <div class=main-player__livestream-player> <iframe id=ls_embed_1473917633 ng-src={{vm.safePlayerIframeURL}} width=auto height=100% frameborder=0 scrolling=no allowfullscreen> </iframe> </div> <div class=\"main-player__description selectable\"> <div class=events__item-title>{{vm.selectedEvent.fields.title}}</div> <div>{{vm.selectedEvent.fields.description}}</div> <div class=events__item-date>{{vm.selectedEvent.fields.formattedDate}}</div> </div> </div> <div class=main-player__slido-embed-wrapper ng-show=vm.chatEmbedEnabled> <div class=main-player__slido-embed> <iframe id=slidoapp ng-src={{vm.safeChatEmbedURL}} width=300 height=400 scrolling=yes> </iframe> </div> </div> </div> </div> </div> ";

/***/ }),
/* 591 */
/***/ (function(module, exports) {

module.exports = "<div class=profile__wrapper> Coming soon. </div> ";

/***/ }),
/* 592 */
/***/ (function(module, exports) {

module.exports = "<div class=settings__wrapper> <button class=\"pure-button pure-button-primary\" loader=state.app.loading ng-disabled=vm.waitingForLogout ng-click=vm.signOut()> <i class=icon-sign-out></i> <span>Sign Out</span> </button> <p></p> <a href=\"https://kn644.app.goo.gl/?link=https://app-implantcompare.com&apn=com.implantcompare.implantcompare&isi=1135654667&ibi=com.implantcompare.implantcompare\">Get the IC app for Android or iOS!</a> <div class=main-sidebar__version> {{vm.userAgent}} </div> <div class=main-sidebar__version> Implant Compare v {{vm.version}} </div> </div> ";

/***/ }),
/* 593 */
/***/ (function(module, exports) {

module.exports = "<div class=main-sidebar__wrapper> <div class=main-sidebar__toolbar> <img class=main-sidebar__icon src=/images/favicons/apple-icon-144x144.png> </div> <div class=main-sidebar__buttons> <button ng-class=\"{'pure-button-primary': ('main.player' | isState)}\" ng-click=vm.selectPlayerTab() class=\"pure-button pure-button--no-border pure-button--square-corner pure-button-default\"> <i class=icon-play></i> <span>Watch</span> </button> <button ng-class=\"{'pure-button-primary': ('main.events' | isState)}\" ng-click=\"stateGo('main.events')\" class=\"pure-button pure-button--no-border pure-button--square-corner pure-button-default\"> <i class=icon-list-ul></i> <span>Events</span> </button> </div> <div class=main-sidebar__buttons> <button ng-class=\"{'pure-button-primary': ('main.profile' | isState)}\" ng-click=\"stateGo('main.profile')\" class=\"pure-button pure-button--no-border pure-button--square-corner pure-button--no-text-shadow pure-button-default\"> <i class=icon-user></i> <span>Profile</span> </button> <button ng-class=\"{'pure-button-primary': ('main.settings' | isState)}\" ng-click=\"stateGo('main.settings')\" class=\"pure-button pure-button--no-border pure-button--square-corner pure-button-default\"> <i class=icon-gear></i> <span>Settings</span> </button> </div> <div class=\"main-sidebar__buttons main-sidebar__buttons--bottom\"> <div class=main-sidebar__version> Implant Compare v {{vm.version}} </div> </div> </div>";

/***/ }),
/* 594 */
/***/ (function(module, exports) {

module.exports = "<div class=main-tabs__wrapper> <button ng-class=\"{'pure-button-primary': ('main.player' | isState)}\" ng-click=vm.selectPlayerTab() class=\"pure-button pure-button--no-border pure-button--square-corner pure-button--no-text-shadow main-tabs__button pure-button-default\"> <i class=icon-play></i> <span>Watch</span> </button> <button ng-class=\"{'pure-button-primary': ('main.events' | isState)}\" ng-click=\"stateGo('main.events')\" class=\"pure-button pure-button--no-border pure-button--square-corner pure-button--no-text-shadow main-tabs__button pure-button-default\"> <i class=icon-list-ul></i> <span>Events</span> </button> <button ng-class=\"{'pure-button-primary': ('main.profile' | isState)}\" ng-click=\"stateGo('main.profile')\" class=\"pure-button pure-button--no-border pure-button--square-corner pure-button--no-text-shadow main-tabs__button pure-button-default\"> <i class=icon-user></i> <span>Profile</span> </button> <button ng-class=\"{'pure-button-primary': ('main.settings' | isState)}\" ng-click=\"stateGo('main.settings')\" class=\"pure-button pure-button--no-border pure-button--square-corner pure-button--no-text-shadow main-tabs__button pure-button-default\"> <i class=icon-gear></i> <span>Settings</span> </button> </div>";

/***/ }),
/* 595 */
/***/ (function(module, exports) {

module.exports = " <div class=\"main-toolbar__title unselectable\">{{state.router.currentParams.title}}</div> <button class=\"pure-button pure-button--no-border pure-button--square pure-button--no-text-shadow pure-button-default pure-button--navigation main-toolbar__refresh-button\" ng-show=\"isState('main.events')\" ng-click=vm.refreshEvents()> <i class=icon-repeat></i> </button> ";

/***/ }),
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */
/***/ (function(module, exports) {

module.exports = {"materialEaseIn":"cubic-bezier(0, 0, 0.2, 1)","materialEaseOut":"cubic-bezier(0.4, 0, 1, 1)","easeInOutCurveFunction":"cubic-bezier(0.35, 0, 0.25, 1)","swiftEaseOutDuration":"400ms","swiftEaseOutTimingFunction":"cubic-bezier(0.25, 0.8, 0.25, 1)","swiftEaseOut":"all 400ms cubic-bezier(0.25, 0.8, 0.25, 1)","swiftEaseInDuration":"300ms","swiftEaseInDurationShort":"195ms","swiftEaseInTimingFunction":"cubic-bezier(0.55, 0, 0.55, 0.2)","swiftEaseIn":"all 300ms cubic-bezier(0.55, 0, 0.55, 0.2)","swiftEaseInOutDuration":"500ms","swiftEaseInOutTimingFunction":"cubic-bezier(0.35, 0, 0.25, 1)","swiftEaseInOut":"all 500ms cubic-bezier(0.35, 0, 0.25, 1)","swiftLinearDuration":"80ms","swiftLinearTimingFunction":"linear","swiftLinear":"all 80ms linear","uiRouterTransitionDuration":"600ms","tapEffectOutDuration":"280ms","tapEffectInDuration":"40ms"};

/***/ })
],[39]);
//# sourceMappingURL=cordova.bundle.51ecdf9464f7dc941521.js.map