# 100 days of React Challenge

My progress is documented in my blog http://jinsoft.in/100-days-of-react-challenge/

# day 001
20/2/19

I created a github repository. The folder name is React-app. It is just testing out the react library on a HTML file. I’m not using node or npm here. I’ve just used react, react-dom and babel libraries as CDN links

# day 002
21/2/19

I created a react app using Node and npx, and create-react-app CLI. It is a simple hello application, where you enter your name and press submit, then you are greeted with a message.

# day 003
22/2/19

Using a fake RESTFUL API (https://jsonplaceholder.typicode.com/posts) I've created a react app to display some posts.

# day 004
23/2/19

Using Reddit Api to display latest React JS subreddits. It doesn't require authentication. Next I'll try twitter api which requires authentication and is a bit more complex.

# day 005: 
24/2/19

Created my own API in express (node). It simple returns an array of posts stored in a file. The API is exposed at port 5000 while the react app runs at port 3000. In the lifecycle method ‘componentDidMount’, I’ve done a fetch API call, and when the promise resolves, I save the returned array in the component’s state. In the render method, I map over the values and display them as list items.

# day 006: 
25/2/19

Working on top of yesterday's app. So no new folder created. This code is pushed to day005 folder. Created POST request handling in the express API, so that we can create a post in the react app on a form, and after posting, the App component refreshes to show the new Post. No validation or sanitization implemented. This code is awefull. LOL.

# day 007: 
26/2/19

Working on top of 5th day's app. So no new folder created. This code is pushed to day005 folder. Added MongoDB using MLAB. Get and Post methods are implemeneted.

# day 008: 
27/2/19

Tried React Hooks for the first Time. I’m not using node or npm here. I’ve just used react, react-dom and babel libraries as CDN links. Worked on the addition game of the first day's project. Everything works perfectly. I love react hooks.

# day 009: 
28/2/19

Tried Redux for the first time. It is a predictable state container for JavaScript apps. Note "Javascript app". It doesn't have to be a React app. It works kinda in a publish-subscribe pattern. Since it is a javascript library, I first tried including it in script tags, in a simple html file and made a vanilla javascript application which just increments or decrements a number on button clicks. The code can be found in the folder 'day009Redux'.

# day 010: 
1/3/19

Tried Redux with React for the first time. Made a copy of my day 5's app and implemented app level state management with redux. To be honest, I'm still a bit confused. Need to work on this a few more days. The code can be found in the folder 'day10ReduxInReact'.

# day 011: 
2/3/19

Practiced redux in react with jsonplaceholder API. Need more practice, its still quite confusing.

# day 012: 
3/3/19

Practiced more redux in react with FAKE API!!!! I used setTimeout function to simulate network delays. It also provides Async feature, so thunk middleware can be used. Kinda getting the hang of it. Need more practice though.

# day 013: 
4/3/19

Attempted Next.js app. Its a server side React framework. Made an app that shows bitcoin prices using a free API. Followed a tutorial by Brad Traversy.

# day 014: 
5/3/19

Practiced more redux in react w with jsonplaceholder API. I re-did the day12 app. 

# day 015: 
6/3/19

Tried making a horoscope app using an API https://astrologyapi.com/ but cannot make requests from localhost as its protected by CORS policy. Will try to deploy and check tomorrow.

# day 016: 
7/3/19

Using API https://astrologyapi.com/ made a horoscope app in react with redux. Its a continuation of yesterday's project. Hosted on my shared Godaddy hosting. URL: http://jinsoft.in/games/astrology/

I have written a blog on how to host a react app, made with create-react-app in Shared Cpanel hosting. Link: http://jinsoft.in/host-react-app-on-shared-cpanel-hosting/

# day 017: 
8/3/19

Implemented redux in the react app I made in day 3. This was a quick redux practice.

# day 018: 
9/3/19

Learned about react router.

# day 019: 
10/3/19

Learned about Client Side Rendering, Server Side Rendering and Static Site Generators and their use cases. Practiced react router.

# day 020: 
11/3/19

Learned about Gatsby which is a Static Site Generator framework. Created a small broiler-plate.

# day 021: 
12/3/19

Learned more about Gatsby and GraphQL.

# day 022: 
13/3/19

Created a multi-part Form Submission App. Front end only

# day 023: 
14/3/19

Learned more about Server Side Rendering, webpack bundling and running react on node server.

# day 024: 
15/3/19

Spent a couple of hours in FFF Twitch Stream where MPJ started a new project, also in React. Had a discussion on my 100days challenge with MPJ and people in the chat. Got the first star in this repo!!!
Spent another hour watching this awesome youtube channel called ReactCasts https://www.youtube.com/channel/UCZkjWyyLvzWeoVWEpRemrDQ/videos
Hope I'll do some coding tomorrow!!!

# day 025:
16/3/19

React Children API: Made a slideShow of lions using react children API.

# day 026:
17/3/19

React Context API. Watched a few youtube videos on the context API.

# day 027:
18/3/19

Had an introductory session on Vue to get a comparision with React. Personally I like react better.

# day 028:
19/3/19

Started a TODO list app. Will complete tomorrow.

# day 029:
20/3/19

Worked on TODO list app.

# day 030:
21/3/19

Finished the Todo app using redux. Initial list is fetched from jsonplaceholder API.

# day 031:
22/3/19

Planning on a location tracker app using google geolocation tracking API. Went through some documentation and youtube videos.

# day 032:
23/3/19

Going through documentation of google maps API

# day 033:
24/3/19

Couldn't find a way to get live co-ordinates of my phone directly from any API(google account, manufacturer, IMEI number). Maybe need to create a mobile app to send the live co-ordinates to a server. Is it time to start learning react-native????

# day 034:
25/3/19

Finally starting to learn react-native. Used an online editor tool (https://snack.expo.io/) to experiment a little.

# day 035:
4/4/19

Been away to another city for a few days. In that trip had the opportunity to teach some university student about web development and react in particular. This was a 2 day workshop so it was just an introductory program. At the end the students were given to make a timer in react using state.

To add on it, I created a clock in a canvas and made it tick according to this timer, thus making the project a stopwatch. It is live here: http://jinsoft.in/games/stopwatch/index.html

# day 036:
8/4/19

Again had to be away for a couple of days. Today I listen to a podcast by the creator of hooks Dan Abramov with MPJ.

# day 037:
10/4/19

Watched an hour long tutorial on fileUploads using react hooks and bootstrap.

# day 038:
10/1/2020

Been away from this challenge, although I've worked in real react projects. Today wrote a blog about react-draft-wysiswg editor. Github repo: https://github.com/sudipta-pran/react-draft-wysiwyg-blogger
Blog: http://jinsoft.in/putting-a-react-draft-wysiwyg-editor-in-your-mern-application/
