class BoardsController < ApplicationController

  def index
    @boards = current_user.boards.all
    respond_to do |format|
      format.json { render json: @boards.to_json}
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

  private
    def board_params
      params.require(:board)
        .permit(
          :title,
          :user_id
        )
    end
end
