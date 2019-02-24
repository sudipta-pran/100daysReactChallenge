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