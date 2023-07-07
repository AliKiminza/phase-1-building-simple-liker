// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const hearts = document.getElementsByClassName("like-glyph");

  // Hide the error modal initially
  errorModal.classList.add("hidden");

  // Function to mimic server call
  const mimicServerCall = (url = "http://mimicServer.example.com", config = {}) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isRandomFailure = Math.random() < 0.2;
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  };

  // Function to handle the like event
  const handleLike = async (event) => {
    const heart = event.target;
    try {
      // Make a server request to mimic like
      await mimicServerCall();
      // Update heart appearance on successful response
      heart.classList.toggle("activated-heart");
      heart.classList.toggle("like-glyph");
    } catch (error) {
      // Show error modal on error response
      const errorMessage = document.getElementById("modal-message");
      errorMessage.textContent = error;
      errorModal.classList.remove("hidden");
      // Hide error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    }
  };

  // Add click event listener to each heart
  Array.from(hearts).forEach((heart) => {
    heart.addEventListener("click", handleLike);
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
