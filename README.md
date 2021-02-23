# Lucky Draw Gaming Service

This README will document the partial fulfilment of the Grofers assignment. We explains each task briefly and how we accomplish them. We also provide a detailed view of all the services, tools, databases, programming languages used for the same.

* Ruby version
    * ruby 2.4.10p364 (2020-03-31 revision 67879) [x86_64-linux]

* Rails version
    * Rails 5.2.4.4

* Services
    * Cronjob
    * Sidekiq
    * Redis

* Database
    * Name: postgresql

* Tools
    * pgadmin: UI to view database tables
    * Postman: To make API calls to server

* Frontend
    * React

# Objective
Lucky Draw Gaming Service

# Task
Design & Implement a service which allows users to get Lucky Draw Raffle tickets and use one lucky draw raffle ticket to participate in a lucky draw game.

# Functional Requirements

# 1. API which allows users to get the raffle tickets

* If the user dosen't have generated any raffle ticket for the event, then she call an API 'generate_raffle_ticket', which issue them a raffle ticket from available tickets.

* User place order and Buy 
    * For eg. 5 tickets

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/1.1.png?raw=true)


![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/1.2.png?raw=true)

# 2. - Design an API which shows the next Lucky Draw Event timing & the corresponding reward.

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/2.1.png?raw=true)


![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/2.2.png?raw=true)

* A cron_job will run everyday at 8AM which will compute the winner using API 'find_winner'.
* The job will also resets the users (ticket_id) and tikets (used) data.
* The same users can participate in next event and we can use the same ticket from database.

# 3. Design an API which allows users to participate in the game. Once a user has participated with a raffle ticket, she shouldn’t be able to participate again in the same event.

* First we check if user has any ticket left in their account
![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/3.1.png?raw=true)

* Then user can participate by click on "Participate" button for any active events
* A user can participate in multiple active events
* On successful participation we decrease ticket count by 1
![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/3.2.png?raw=true)

* We also check if user has already participated in same event
![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/3.3.png?raw=true)


# 4. Design an API which lists all the winners of all the events in the last one week.

* Our API will show all the events past one week
![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/4.1.png?raw=true)

* User can click on "Show List" button to see all the winners
![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/4.2.png?raw=true)

# 5. Compute the winner for the event and announce the winner.

* We have made a CronJob which will run everyday at 8:00 AM. The task of the job is to run the "RewardWorker" to compute the winner for all the active events that are finished on current date.

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/5.1.png?raw=true)


![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/5.2.png?raw=true)

# Non-Functional Requirements

* Please share the github repository when you start working on the project.
    * Done

* Code should be modular and readable.
    * Done (improvements possible)

* Make your ReadMe as descriptive as possible.
    * Done

* Code should be properly documented.
    * Done

* You can use Language and Database of your choice
    * Language: Ruby, React
    * Database: postgresql

* Building UI on top of this is completely optional. Brownie points if you build the entire app.
    * Done (improvements possible)

# Extra Work

* Also made a complete user authentication system and handling cookies using session store.

* Also made front-end for "New Event" and "Reward" addition