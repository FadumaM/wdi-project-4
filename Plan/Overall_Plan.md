##Landing page

The landing page will have small blurb about the hobbyist and a nice pic
button "find a new hobby" - register - normal register
                          - login - with Facebook
                          - login - with email



## Login page

- Form  to login.
- login with facebook
  - how to this ?
    - Passport - Facebook Strategy

## Register
- Register form.

## Quiz page

###Part 1

 there a 10 Categories
  will take 3 questions to narrow the Categories to one.

    First Question
      5 Answers/Categories shown - click on one which best suit you - that Categories is then saved.

      Second Question
        the next 5 Answers/Categories shown - click on one which best suit you - that Categories is then saved.

        third  Question
          The two Categories saved will be shown - user will click on one Categories which best suits them.


  After a Categories is SHOWN- make get request to get the Categories id.

  Then make a get request to find all the hobbies with the Categories id.

###Part 2
  Next set of questions will narrow down the hobbies.

  First Question
    3 Answers/hobbies shown - click on one which best suit you - that hobbies is then saved.

    Second Question
      the next 3 Answers/hobbies shown - click on one which best suit you - that hobbies is then saved.

      third  Question
        The two hobbies saved will be shown - user will click on one hobbies which best suits them.

  Then the chosen hobby is then SAVED onto the user model.

##infographic  of the meet-up available

###How Will i do this ?

- I'm gonna be making 3 different Api request from the following Apis
  - Eventful
  - Meet Up
  - Eventbrite

- The http request will be stored in 3 different  factory .
- All the the factories data in the  will same format

###Eventbrite
- info must be in the params
- Parameters:
  - popular	boolean - Boolean for whether or not you want to only return popular results.
  - venue.city - string - Only return events with venues in the given city.
  - categories - string -	Only return events under the given category IDs. This should be a comma        delimited string of category IDs.
  - subcategories- string - Only return events under the given subcategory IDs. This should be a comma delimited string of subcategory IDs.

###Eventful
- API Method http://api.eventful.com/json/events/search?...&location=San+Diego
- Parameters:
  - keywords - string - The search keywords.
  - location - string - "London, United Kingdom"
  - date -string - Limit this list of results to a date range, specified by label or exact range. Currently supported labels include: "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months by name, e.g. "October".
  - page_size - integer - The desired number of results per page.
  -image_sizes- string- A comma separted list of image_sizes desired.- see below:
   http://api.eventful.com/docs/faq

###Meet Up
- make a get request to https://api.meetup.com/2/groups.
- sending params
- the keys are the following
  - topic : "the hobby name"
  - lat: "51.5074" //London lat
  - lng: "0.1278" //London lng

- will get back array "results" with objects of different groups that have the hobby name as a topic.

## Make a group

look into this a little more.
https://secure.meetup.com/meetup_api/docs/recommended/groups/
