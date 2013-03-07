class StaticPagesController < ApplicationController
  
  def home
    @value ||= params[:value] ||= "team"
  end
end
