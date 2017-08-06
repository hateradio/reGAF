# re:GAF
A theme for NeoGAF.

## Requirements
* Ruby 2.x
* Sass

## Optional
* Sinatra (For server)
* Thin
* Greasemonkey (Firefox) / Tampermonkey (Chrome/Opera/Vivaldi)

## Get Gems

If you don't have `bundler`, install it.

```
gem install bundler

# from the source directory
bundle install
```

This will install all the recommended gems.

## Updates (Without Server)

To generate new CSS, run one of the `.bat` files. Edit `$s-username` inside of `_vars.scss` to highlight personal quotes.

## Stylish

To export a style that is compatible with Stylish, execute `out-nested-userstyles.bat`.

When the CSS is generated, copy the contents of `regaf-userstyles.css` into Stylish.

This version will output `/*[[username]]*/` for custom settings that can be used with userstyles.org. You will manually have to edit it.

However, you can edit `regaf.userstyles.scss` if you wish to use generate the files with your username instead.

## Server

To view the style as you edit the Sass, you can use the following steps. First, make sure you disable or remove the style from Stylish.

To view live updates on NeoGAF, install the user script (`regaf-view.user.js`) and run the server. Note that once the style is installed with Stylish, the CSS may look a bit different due to priority levels. (Don't forget to use `!important` to override troublesome items.)

Run the server:

    ruby regaf.rb

The direct CSS file will be found at `http://localhost:<port>/css/regaf.css`, where `<port>` is your sever port.

To customize your username, use the special URL `http://localhost:<port>/username/<my-username>`, where `<my-username>` is your username, of course. This will generate a CSS file with the username given. Open the userscript and update it with your username.

    Example:
    http://localhost:4567/username/user123

Important: Depending on Sinatra/Thin, the port may be different, so the link in the user script (`regaf-view.user.js`) must be edited.

## About

&copy; 2016
