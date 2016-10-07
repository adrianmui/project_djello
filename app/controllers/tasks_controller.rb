class TasksController < ApplicationController

  def index
    @tasks = Task.all
    respond_to do |format|
      format.json { render json: @tasks.to_json}
    end
  end

  def show
    @task = Task.find_by_id(params[:id])
    respond_to do |format|
      format.json { render json: @task }
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
    respond_to do |format|
        format.json {render json: @task.to_json, status: 200}
      end

    end
  end

  def create
    @task = Task.create(task_params)

    respond_to do |format|
      if @task.persisted?
        format.json { render json: @task.to_json, status: 200}
      end
    end
  end

  def update
    @task = Task.find_by_id(params[:id])
    if @task.update(task_params)
      respond_to do |format|
        format.json { render json: @task.to_json, status: 200}
      end
    end
  end

  private
    def task_params
      params.require(:task)
        .permit(:title,
                :description,
                :votes,
                :completed,
                :list_id)
    end
end
