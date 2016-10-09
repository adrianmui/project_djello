class ListsController < ApplicationController

  def index
    @lists = List.all
    respond_to do |format|
      format.json { render json: @lists.to_json(include: :tasks)}
    end
  end

  def show
    @list = List.find(params[:id])
    respond_to do |format|
      format.json { render json: @list.to_json }
    end
  end

  def create
    @list = List.create(list_params)

    respond_to do |format|
      if @list.persisted?
        format.json { render json: @list.to_json, status: 200}
      end
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list.destroy
    respond_to do |format|
        format.json {render json: @list.to_json, status: 200}
      end
    end
  end

  private
    def list_params
      params.require(:list)
        .permit(:title,
                :board_id)
    end
end
