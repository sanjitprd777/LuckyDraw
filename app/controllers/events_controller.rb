class EventsController < ApplicationController
    def create
        event = Event.create!(
            name: params['name'],
            startDate: params['startDate'],
            day: params['day'],
            winner: params['winner'],
            active: params['active'],
            finished: params['finished']
        )
        if event
            render json: {
                status: :created
            }
        else
            render json: { status: 500 }
        end
    end

    def index
        events = Event.all
        active = events.where(active: 1)
        upcoming = events.where(active: 0, finished: 0)
        finished = events.where(finished: 1)
        render json: {
            success: :ok,
            active: active,
            upcoming: upcoming,
            finished: finished
        }
    end
end