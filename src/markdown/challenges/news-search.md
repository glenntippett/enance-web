# Guardian news search.

## To start
* (In a terminal window) Install dependencies with `npm install`
* Rename `.env.dist` to `.env` and add your guardian api key
* (In a terminal window) Run `npm start` to start server.

## Firstly
You should then be able to browse to `http://localhost:3000` and see our beautiful application screen. You should be able to type some words into the box, hit search, and get a set of results back.

Except - it's not *quite* doing the right thing. No matter what you type, it's giving us the same result back.

If you look in the `doSearch` function in `pages/index.jsx` it seems like we are passing the search term to `api/search`, but it's not being passed through. Looking at the documentation for [NextJS api routes](https://nextjs.org/docs/api-routes/api-middlewares) and the [Guardian content API](https://open-platform.theguardian.com/documentation/search), make sure the user is being returned relevant results.


## Some bonus tasks
There is no expectation to get through all, or even most of these, but if you feel like you have some extra time after you get the search working, you can start looking at a few of them, in any order.

* All of the app is in one component in index.jsx, which is a bit weird. It would be good to start refactoring the app into separate components for reusability/maintainability. Make a top level components folder and start extracting individual components into there.
* We don't like that you can submit an empty search field. Please make it so that it won't search until you've typed something in.
* Oh and also, we should probably stop people hitting submit again until the last result has been displayed. Even better if it can show a 'loading...' message or [spinner](https://loading.io/) while it loads.
* Add some styling. The design team would like to see the results be a grid of cards rather than just a text list. Would be good to tidy up the styling generally as well, make it look nice.
* The API won't return an image we can use for the article - any ideas how we could get around this or what we could do instead?
* Can you include the publication date in the result listing? In brackets after the link title, like
 **This Very Interesting Story (20 January 2021)**
* Add a checkbox to the form that lets a user specify that they only want *recent* results. If this box is checked it should only return articles that have been published in *the last 3 months*
* Reformat the result listing so that articles in the same *section* are grouped together. It should show the section name then the list of articles in that section, eg:
  * News
    * article 1
    * article 2
  * Politics
    * article 3
    * article 4