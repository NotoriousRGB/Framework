require 'sinatra'


get '/' do
  @title = "Neptune - A Wordpress Theme"
  erb :index
end

get '/about' do
  @title = "About"
  erb :page_about
end

get '/portfolio' do
  @title = "About"
  erb :page_portfolio
end

__END__



  		 
    