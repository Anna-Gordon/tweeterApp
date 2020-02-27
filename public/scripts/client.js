/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {


  // BUTTON IN NAVBAR ====================================

  
  $('#toggle').on('click', () => {
    $('.new-tweet').slideToggle();
    $('#tweet-text').focus(); 
  });


  
  // CREATE TWEETS ARTICLES ==================================
  
  const createTweetElement = (tweet) => {
    
    const { name, avatars, handle } = tweet.user;
    const tweetText = tweet.content.text;
    const timespamp = tweet.created_at;
    
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
      <h6 class="timestamp">${moment(timespamp).fromNow()}</h6>
      </footer>
      </article>
      `).addClass('tweet');
      return $tweet;
    };
    
    const renderTweets = function(tweets) {
      for (let tweet of tweets) {
        let $tweet = createTweetElement(tweet);
        $('.tweets-container').prepend($tweet); 
      }   
    };
    
  // FORM SUBMISSION ==============================================

  const loadtweets = () => {
    $.get('/tweets', { method: 'GET' })
      .then((response) => {
        let newTweet = [response[response.length - 1]]
        renderTweets(newTweet); 
        $('#tweet-text').val('').focus();  
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      })
  }
  
  $('#post-tweet').submit(function () {
    event.preventDefault();
    $('.error-message').slideUp(200);
    
    let tweetText = $('#tweet-text').val();
    const safeHTML = `<p>${escape(tweetText)}</p>`;
    if (tweetText === null || tweetText.length < 1 ) {  
      $('.error-message').text('Type your tweet').slideDown(200)  
      // $('#error-message-text').text('Type your tweet')
      $('.error-message').slideDown(200)
      $('#tweet-text').focus();
    } if (tweetText.length - 1 >= 140) {
      $('.error-message').text("Your tweet is too long. Maxlength 140 characters").slideDown(200);
      $('#tweet-text').focus();
    } else if (safeHTML.includes('%3C')) {
      $('.error-message').text("Unsecure text tweet has been submitted").slideDown(200);
      $('#tweet-text').val('').focus();
    } else {
      $.ajax('/tweets', { method: 'POST', data: $(this).serialize() })
      .then(() => {
        loadtweets();
      })
    }   
  });

  $.get('/tweets', { method: 'GET' })
    .then((response) => {
      renderTweets(response);
    })
    .fail((err) => {
      console.log('Something went wrong', err);
    })
    
  
    
})


