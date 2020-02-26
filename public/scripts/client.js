/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}


const createTweetElement = (object) => {
  console.log( object)
  let name = object.user.name;
  console.log(object.user.name)
  
}
const markup = `
<header>
  <div>
    <p class="name">${tweetData.user.name}</p>
    </div>
    </header>
    `
    $('.name').html('<p>' + tweetData.user.name + '</p>');
// document.body.innerHTML = markup;
    // <p class="location">${person.location}</p>
    // <p class="bio">${person.bio}</p>
    
    /* <img src="https://i.imgur.com/73hZDYK.png"> 
            <p class="name">Newton</p>
          </div>
          <span>@Sirlsaac</span> */


const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweets-container').append($tweet); 

