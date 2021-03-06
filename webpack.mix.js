/*
 *--------------------------------------------------------------------------
 * Mix Asset Management
 *--------------------------------------------------------------------------
 *
 * Mix provides a clean, fluent API for defining some Webpack build steps
 * for Laravel applications. Instead of Laravel, we use it for WordPress
 * theme development now. By default, we are compiling the Sass file for
 * the application as well as bundling up all the JS files.
 *
 */

// Set your theme info data
const Theme = {
    directory: "laravel-mix-theme", 
    name: "Laravel Mix Theme", 
    URI: "",
    author: "Tom Brouwer",
    author_URI: "",
    description: "Basic blank bootstrap theme. Assets compiled with laravel-mix.", 
    version: "1.0.0",  
    license: "GNU General Public License v2 or later", 
    license_URI: "http://www.gnu.org/licenses/gpl-2.0.html", 
    tags: "blog, wordpress", 
    text_domain: "laravelmixtheme"
    
};

// Create theme dir if not exist to prevent for "no mix-manifest" error
const fs = require('fs');
const public_dir = 'wordpress/wp-content/themes/' + Theme.directory;

if (!fs.existsSync(public_dir)){
    fs.mkdirSync(public_dir);
}

// Require laravel mix
const { mix } = require('laravel-mix'); 

// Require smart banner plugin to add theme info in top of css file
const SmartBannerPlugin = require('smart-banner-webpack-plugin');

// Add theme info to top of style.css
mix.webpackConfig({
    plugins: [
        new SmartBannerPlugin(
          {
              banner:   "Theme Name: " + Theme.name + "\n" +
                        "Theme URI: " + Theme.URI + "\n" +
                        "Author: " + Theme.author + "\n" +
                        "Author URI: " + Theme.author_URI + "\n" +
                        "Description: " + Theme.description + "\n" +
                        "Version: " + Theme.version + "\n" +
                        "License: " + Theme.license + "\n" +
                        "License URI: " + Theme.license_URI + "\n" +
                        "Tags: " + Theme.tags + "\n" +
                        "Text Domain: " + Theme.text_domain + "\n"
          }
        )
    ]
});

// Set the public map to compile vendors to the right place
mix.setPublicPath(public_dir);

// Set resource path for fonts to prevent 404 no found fonts
mix.setResourceRoot('');

// Compile SASS and JS files to the theme
mix.sass(Theme.directory + '/styles/style.scss', 'wordpress/wp-content/themes/' + Theme.directory)
    .js(Theme.directory + '/javascript/app.js', 'wordpress/wp-content/themes/' + Theme.directory + '/js');
    
// Copy all theme files to WordPress theme directory
mix.copy(Theme.directory + '/files/', 'wordpress/wp-content/themes/' + Theme.directory, false);

/*
* If you need to add plain css to you sass files you can use the folowing rules.
* Remove ".sass(Theme.directory + '/styles/style.scss', 'wordpress/wp-content/themes/' + Theme.directory)" from above
* 
* This code will compile your sass files to a file appwithoutplain.css in the dir compiled.
* It will merge that css with the css files you want. You can remove the compiled file everytime
* it's only used to cache the appwithoutplain.css 
*
*/
// // Compile SASS files to the compiled dir
// mix.sass(Theme.directory + '/styles/style.scss', '/compiled/appwithoutplain.css');

// // Multiple plain css files to one
// mix.styles([  
//            'wordpress/wp-content/themes/' + Theme.directory + '/compiled/appwithoutplain.css',   
//            'node_modules/animate.css/animate.css'       
//        ], 'wordpress/wp-content/themes/' + Theme.directory +'/style.css');