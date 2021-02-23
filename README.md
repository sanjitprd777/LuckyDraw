# Lucky Draw Gaming Service

In this readme, we explains each task briefly and how we accomplish them. We also provide a detailed view of all the services, tools, databases, programming languages used for the same.

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
    * pgadmin: User interface to view database tables entries
    * Postman: To test API calls on the localhost server

* Frontend
    * React

# Objective
Lucky Draw Gaming Service

# Task
Design & Implement a service which allows users to get Lucky Draw Raffle tickets and use one lucky draw raffle ticket to participate in a lucky draw game.

# Functional Requirements

# 1. API which allows users to get the raffle tickets

* User place order and Buy 
    * For eg. 5 tickets

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/1.1.png?raw=true)


* When user place order for 5 tickets, "Tickets left" updated

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/1.2.png?raw=true)

# 2. - Design an API which shows the next Lucky Draw Event timing & the corresponding reward.

* List of all upcoming events

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/2.1.png?raw=true)


* List of rewards for any upcoming event

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/2.2.png?raw=true)


* List of rewards for any Active event

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/2.3.png?raw=true)



# 3. Design an API which allows users to participate in the game. Once a user has participated with a raffle ticket, she shouldn’t be able to participate again in the same event.

* First we check if user has any ticket left in their account, if not we won't allow participation

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/3.1.png?raw=true)

* Then user can participate by click on "Participate" button for any active events
* A user can participate in multiple active events

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/3.2.png?raw=true)


* On successful participation we decrease ticket count by 1
* We also check if user has already participated in the event

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/3.3.png?raw=true)


# 4. Design an API which lists all the winners of all the events in the last one week.

* We have made an API will show all the "Finished Events" for the past week

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/4.1.png?raw=true)


* A user can click on "Show List" button to see all the winners for that event below

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/4.2.png?raw=true)

# 5. Compute the winner for the event and announce the winner.

* We have made a CronJob which will run everyday at 8:00 AM.
* The task of the sidekiq-scheduler job is to run the "RewardWorker" which then computes the winner for all the events that are finished on current date.

* Sidekiq Job Scheduler

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/5.1.png?raw=true)


* RewardWorker

![alt text](https://github.com/Sanjit-Prasad/LuckyDraw/blob/main/images/5.2.png?raw=true)


# Non-Functional Requirements

* Please share the github repository when you start working on the project.
    * Completed

* Code should be modular and readable.
    * Completed (improvements possible)

* Make your ReadMe as descriptive as possible.
    * Completed

* Code should be properly documented.
    * Completed

* You can use Language and Database of your choice
    * Language: Ruby, React
    * Database: postgresql

* Building UI on top of this is completely optional. Brownie points if you build the entire app.
    * Completed (improvements possible)

# Extra Work

* Made a complete user authentication system and handling cookies using session store.

* Developed the front-end for "New Event" and "Reward" addition to database at ease.