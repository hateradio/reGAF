# re:GAF
A theme for NeoGAF.

## Requirements
* Ruby 2.0
* Sass

## Optional
* Sinatra
* Thin
* Greasemonkey (Firefox only)

## Get Gems

If you don't have `bundler`, install it.

```
gem install bundler

# from the source directory
gem bundle install
```

This will install all the recommended gems.

## Run
To make live updates, run a `.bat`. Edit `$s-username` to highlight personal quotes. The userstyles version will output `/*[[username]]*/` for custom settings options.

## Server

To view live updates on NeoGAF, install the user script (`regaf-view.user.js`) and run the server. Note that once installed with Stylish the script may look a bit different due to CSS priority levels. (Don't forget to use `!important`.)

Run the server:

    ruby regaf.rb

The style will be found at `http://localhost:<port>/css/regaf.css`, where `<port>` is your sever port.

To customize the username, use `http://localhost:<port>/username/<my-username>`, where `<my-username>` is your username, of course.

Important: Depending on Thin, the port may be different, so the link in the user script (`regaf-view.user.js`) must be edited.

## About
&copy; 2016
