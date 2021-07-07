# karen-le-coding-challenge

## User story 1

1. When a user clicks the "Load NBA teams data" button, create a method that uses the JavaScript Fetch API to perform a `GET` request from `https://www.balldontlie.io/api/v1/teams`. Assign the response data to the `teams` data property.
2. Render a list of each NBA team.
3. When user clicks "Favorite" next to a team name, toggle the value of property `isFavorite` (type `boolean`).
4. When a user clicks the team name, it should open a new tab and load the appropriate URL of the team name on NBA.com (i.e. https://www.nba.com/bulls/).

## User story 2

1. When a user clicks the "Load NBA players" button, create a method that uses the JavaScript Fetch API to perform a `GET` request from `https://www.balldontlie.io/api/v1/players`. Assign the response data to the `players` data property.
2. Render a list of each NBA team.
3. When user clicks "Favorite" next to a player name, toggle the value of property `isFavorite` (type `boolean`).

## Rules

1. Write a single reusible method that handles the API requests and returns the response.
2. If `teams` or `players` has already been loaded, do not request that data again.
3. Use [Tailwind CSS](https://tailwindcss.com/) for all styles, following the design mockup below as closely as possible (less important, don't worry about perfection for this project)

## Notes

* Vue has already been added to `index.html` via CDN.
* Tailwind CSS has already been added to `index.html` via CDN.
* `index.html` and `app.js` are set up as starter templates for your work.
* Simply load `index.html` in your browser to see your work.

## Documentation

* [Fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Vue documentation](https://vuejs.org/v2/guide/)
