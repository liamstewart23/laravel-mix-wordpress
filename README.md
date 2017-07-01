# Laravel-Mix WordPress
I work a lot with [Laravel](https://laravel.com/), of course with [Laravel Mix](https://laravel.com/docs/5.4/mix) as well. However, someone asked me to create a [WordPress](https://wordpress.org/) theme. Piece of cake! Or not? How did I install Gulp? Or webpack? And how did I use that? That's when I got the brilliant idea to use Laravel Mix! :)

## Installation ##

 - Clone this repo to a directory in your localhost.
 - Go to the dir and run `npm install` (Windows/vagrant users don't forget `--no-bin-links`).

Now you have to add WordPress, it can be done in three ways.

 1. If you have [WP CLI](http://wp-cli.org/) installed run `npm run setup-wordpress`, done :).
 2. If you haven't WP CLI installed, install it! And go back to the
    first way :).
 3. If you don't want to install WP CLI add WordPress manually.
Create a `wordpress` directory in the dir where you cloned this repo.
[Download WordPress](https://wordpress.org/download/) and extract the files in de wordpress dir. 

Ok, run your apache/nginx/mysql/[homestead](https://laravel.com/docs/5.4/homestead)/etc. servers. Make sure you have created a database. Open your browser and go to the wordpress directory. If WordPress is added correcly you can setup your wp_config file and install WordPress.

## Theme setup ##
After everything has been installed you have to setup your theme. Here we go...

If you don't change anything and run `npm run dev` the theme "laravel-mix-theme" will be created (if you want to test).

 - Go to the directory where you cloned this repo to.
 - Copy the dir `laravel-mix-theme` and rename it to your theme directory name. It will be placed in the `wp-content/themes` directory.
 - Open the `webpack.mix.js` file and set your theme info data.  Directory should be the same as your directory name. All other values are the values used at the top of `style.css`.
 - Run `npm run dev` and your theme will be added to your WordPress installation. Open WordPress and activate it. It's a very basic blank bootstrap theme :)

**You are ready to start developing :)**

## Developing ##

### Styling
To style your webpages go to the `<your-theme-dir>/styles` directory. Open `style.scss` . Import NPM packages and custom SASS files.

### Javascript
Open the `<your-theme-dir>/javascript/bootstrap.js` file. In this file you can place  dependencies which includes libraries. By default I added Vue, Axios ad a promise polyfill (for IE :) ). Remove it when you don't want to use it. Bootstrap and jQuery are added by default too. Open the `app.js` and require/import your custom javascript libraries.

### PHP and Template Files
The php theme files are placed in the `<your-theme-dir>/files` directory. You know what to do with it.

### Compiling
Compile `style.css` (`style.scss`) and `js/app.js` with the following commands:

 - `npm run dev`
 - `npm run watch` (watch doesn't work for php files)
 - `npm run production` (if you thing you are ready to deploy)

# Tips

 - If you want to create a new theme copy the `laravel-mix-theme` directory. Edit your webpack mix file and compile it. You don't have to install WordPress ten times. Only activate your new theme.
 - Deregister WordPress defaults jQuery file. To be sure all JQuery needed plugin js files has the jQuery you included in app.js you can set the handle of app.js to jquery. Remove: 
    ```
    if(!is_admin()) {
        add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
    }
    
    function my_jquery_enqueue() {
       wp_deregister_script('jquery');
    }

    // Give handle in functions.php (default handle is javascript):
    wp_enqueue_script( 'jquery', $template_url . '/js/app.js', array(), null, true );
    ```
    
# Todo
What next?
- Add a default plugin directory and plugin webpack mix example file.
- Getting sourceMaps generated (It just does not work with .sourceMaps()).
- Easy switch between themes and plugins.
- Easy to use create theme and create plugin scripts.

# The following projects did help me create this one:

 - [webpack-wordpress](https://github.com/sloansparger/webpack-wordpress)
 - [laravel-mix-without-laravel](https://github.com/laravelista/laravel-mix-without-laravel)

Thanx :)



 
