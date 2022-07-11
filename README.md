######GIF demo of the project: 
![](src/images/react_movie_demo.gif)

######About the Project:

This is a sort of netflix-clone type 'movie database' project with these basic functionalities:
  1. The site's main page is located here:  https://thebethanyann-netflixclone.netlify.app/
  2. The main page loads with a hero image and blurb about the current 'most popular' movie as voted by users on The Movie Database site
  3. There is a grid component that displays movies in order of popularity and displays 20 movies at a time, with a 'Load More' button at the bottom of the screen that        will continue to load 20 more movies every time it is clicked. 
  4. There is a search bar that can be used to search for a specfic movie
  5. Each movie thumbnail can be clicked on, which will navigate to a 'Movie Information' page that displays rating, runtime, plot, and includes rotten tomatoes rating        data along with a link to the IMDB page for the movie and a link to open up the youtube trailer.
  6. Underneath each movie is a comprehensive list of the cast, and each cast photo is a clickable link that will navigate to an individual Actor's page
  7. Each Actor's page will display their name, birthday & age, and a biography if avalible, and also includes a grid of movie thumbnails that they appear in.

######I used two APIs for this project:
  1. The Movie Database for the bulk of the movie data which can be found here: https://www.themoviedb.org/documentation/api?language=en-US  
  2. MDBList on RapidAPI for the rotten tomatos rating system and youtube trailer link which can be found here: https://rapidapi.com/linaspurinis/api/mdblist/
  
######This is a personal project for the purpose of practicing unfamiliar React concepts like hooks and using fetch to get API data, and is a work in progress.  

This is a list of things I'd like to add to this project over time: 

- [ ]  Add a section under the main movie page to show the most recent 'popular' movies, followed by the grid that is filtered by newest release
- [ ]  Add a section under the individual Actors page to show their top movies in a section called 'known for' or something to that extent
     - [ ]   Add a way to toggle/display between movies and TV shows
- [ ]  Filter by movie type? Create categories?
- [ ]  I could add a small component that has the movie title and some basic info underneath each movie thumbnail
- [ ]  Maybe rethink the breadcrumb - hidden for now but it might be useful to have it somewhere
- [x]  Move the genres up into the tiny movie description area? - didn’t like this
    - [ ]  Make the genres links? - found the api call for this if I decide to do it.
- [ ]  Make the main movie page have an invisible scroll
- [ ]  Maybe create a little die-roll icon that navigates to a new page and has a user select a genre and then it pulls up recommendations or movies based on genre
