# re:GAF
A theme for NeoGAF.

## Requirements
Ruby 2.0
SASS

## Optional
Sinatra
Thin
Greasemonkey/Scriptish (Firefox only)

## Run
To make live updates, run a `.bat`. Edit `$s-username` to highlight personal quotes. The userstyles version will output `/*[[username]]*/` for custom settings options.

To view live updates on NeoGAF, install the user script (regaf-view.user.js) and run the server.* Note that once installed with Stylish the script may look a bit different due to CSS priority levels. (Don't forget to use `!important`.)

Run the server:

    ruby regaf.rb

The style will be found at `http://localhost:<port>/css/regaf.css`.

*Depending on Thin, the port may be different, so the link in script must be edited.

## About
(c) 2013