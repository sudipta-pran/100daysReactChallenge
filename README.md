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