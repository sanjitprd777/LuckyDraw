class ParticipatesController < ApplicationController
    include CurrentUserConcern

    def create
        participate = Participate.find_by(user_id: @current_user.id, event_id: params['id'])

        if participate
            render json: {
                status: :already_participated
            }
        else
            if @current_user.ticket === 0
                render json: {
                    status: :no_ticket_left
                }
            else
                participate = Participate.create!(
                    user_id: @current_user.id,
                    event_id: params['id']
                )

                if participate
                    newTicket = @current_user.ticket - 1
                    @current_user.update_attributes(ticket: newTicket)
                    render json: {
                        status: :participated,
                    }
                else
                    render json: { status: 500 }
                end
            end
        end
    end
end