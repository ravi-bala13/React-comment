# React-comment
Creating app for showing comment session

React Comments Pending
Problem
Create a react component Comments
It will accept an object for example in this format
{
id: "001",
author: "albert",
body: "Whats the status?",
timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
points: "2",
replies: [
  {
    id: "003",
    author: "haren",
    body: "Wrote the test suites, waiting for approval?",
    timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
    points: "3",
    replies: [
      {
        id: "004",
        author: "albert",
        body: "Thanks for the update!",
        timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
        points: "8"
      }
    ]
  },
  {
    id: "002",
    author: "Nrupul",
    body: "looking forward for the demo!",
    timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
    points: "2"
  }
]
};
It should give an output similar to this. https://i.imgur.com/iU0aPbo.png
You can check out [reddit](www.reddit.com] and check any post and see how comments and threads are formed

Bonus: ?

add a show replies button
show a line showing how the threads are linked
Extra bonus: ?

add a reply and add to appropriate location on the object
it should add a thread on to your UI as well
Examples:

https://i.imgur.com/zz5HdDH.mp4
https://i.imgur.com/40GlIgh.mp4
Hint:

use recursion
