class BoardsController < ApplicationController

  def index
    @boards = current_user.boards.all
    respond_to do |format|
      format.json { render json: @boards.to_json}
    end
  end

  def show
    @board = Board.find_by_id(params[:id])
    respond_to do |format|
      format.json { render json: @board }
    end
  end

  def create
    @board = current_user.boards.build(board_params)

    respond_to do |format|
      if @board.save
        format.json { render json: @board.to_json }
      else
        format.json { render json: {error: "Couldn't created board"}, status: 400}
      end
    end
  end

  def destroy
    @board = Board.find(params[:id])
    if @board.destroy
      respond_to do |format|
        format.json { render json: @board.to_json, status: 200}
      end
    end
  end

  def update
    @board = Board.find_by_id(params[:id])
    if @board.update(board_params)
      respond_to do |format|
        format.json { render json: @board.to_json, status: 200}
      end
    end
  end

  private
    def board_params
      params.require(:board)
        .permit(
          :title,
          :user_id
        )
    end
end
