class TasksController < ApplicationController

  def index
    @tasks = Task.all
    respond_to do |format|
      format.json { render json: @tasks.to_json}
    end
  end
end
