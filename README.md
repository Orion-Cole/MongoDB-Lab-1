Assignment
Add a second Schema/Model File For Vegetables to our app (veggie.js)
Create the following routes in server.js
'/create_veggie' - this route will get information from the front end and create a new Veggie in the collection
'/veggies' - this route will get all Veggie objects from the database and send them to the front end
'/veggie/:veggieName' - this route will take the veggieName and get that specific veggie from the database and send it to the front end to be displayed
Create the following HTML files:
show all veggies - this page will wait to get the viggie information from the backend ('/veggies'), when it gets the data, will display it on the page.
create new veggie - form to create new veggie
show single veggie - the JS of this page will make a request to '/veggie/:veggieName' and wait for the response. Will display response on the page.
Add 5 Vegetables to a new collection called Veggies (with your HTML form)
Make sure all pages work
