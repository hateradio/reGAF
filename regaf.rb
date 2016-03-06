require 'sinatra'
require 'sass'

def sass2css(src, out)
  sass_filename = src
  css = Sass::Engine.for_file(sass_filename, {}).render
  File.open(out, 'wb') { |f| f.write(css) }
  css
end


get '/' do
  erb :index
end

get '/username/:name' do
  content_type 'text/css'
  sass2css(Dir.pwd + '/regaf.userstyles.scss', Dir.pwd + '/public/css/regaf-userstyles.css')
  css = sass2css(Dir.pwd + '/regaf.scss', Dir.pwd + '/public/css/regaf.css')

  if (!params['name'].empty?)
    css.gsub(/data-username="(.*)"/i, "data-username=\"#{params['name']}\"")
  else
    css
  end
end
