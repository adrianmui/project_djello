class ListsController < ApplicationController

  def index
    @lists = List.all
    respond_to do |format|
      format.json { render json: @lists.to_json(include: :tasks)}
    end
  end
end
