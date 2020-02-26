/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

function getDuration(milli){
  let minutes = Math.floor(milli / 60000);
  let hours = Math.round(minutes / 60);
  let days = Math.round(hours / 24);

  return (
    (days && {days: days}) ||
    (hours && {hours: hours}) ||
    {minutes: minutes}
  )
};

const createTweetElement = (tweet) => {
  
  const { name, avatars, handle } = tweet.user;
  const tweetText = tweet.content.text;
  const timespamp = tweet.created_at;
  let days = getDuration(timespamp).days + " days ago";
  
  // console.log(handle, getDuration(timespamp).days, days)
  let $tweet = $(
    `<article class="tweet-container">
      <header>
        <div>
          <img src=${avatars}> 
          <p class="name">${name}</p>
        </div>
        <span class="handle">${handle}</span>
      </header>
      
      <textarea name="text" class="tweet">${tweetText}</textarea>
      <footer>
         <h6 class="timestamp">${days}</h6>
      </footer>
    </article>
  `).addClass('tweet');
  return $tweet;
}

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
      $('.tweets-container').append($tweet); 
  }   
}
  
 renderTweets(data);
  
})


// console.log($tweet); // to see what it looks like
// $('.tweets-container').append($tweet); 

