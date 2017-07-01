/**
 * Solve problems with old browsers with es6 promise polyfill
 */
require('es6-promise').polyfill();


/**
 * We'll load Lodash, a modern JavaScript utility library delivering modularity, performance & extras.
 * Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
 * Lodash’s modular methods are great for: Iterating variables, Manipulating & testing values, Creating composite functions.
 */
window._ = require('lodash');


/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {}


/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */
window.Vue = require('vue');


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our WordPress back-end. Be careful! Use nonces for authorized requests!
 * https://codex.wordpress.org/WordPress_Nonces
 */
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';