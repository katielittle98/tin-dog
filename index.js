import { dogs } from "./data.js"; 
import Dog from "./Dog.js";


const likeBtn = document.getElementById("likeBtn")
const dislikeBtn = document.getElementById("dislikeBtn")
const card = document.getElementById("card")

let currentIndex = 0
let currentDog = new Dog(dogs[currentIndex])


render()

// Function for liking a dog
likeBtn.addEventListener("click", function() {
    currentDog.hasBeenLiked = true;
        setTimeout(function() {
            card.innerHTML += `
            <div class= "dog-photo" id="dog-photo">
                <img src="images/badge-like.png" class="liked-dog">
            </div>`  
        }, 500)    

        setTimeout(function() {
           swipe() 
        }, 1500)
})

// Function for disliking a dog
dislikeBtn.addEventListener("click", function() {
    currentDog.hasBeenLiked = false;
        setTimeout(function() {
            card.innerHTML += `
            <div class="dog-photo" id="dog-photo">
                <span>
                    <img src="images/badge-nope.png" class="disliked-dog">
                </span>
            </div>`
        }, 500)

        setTimeout(function() {
            swipe() 
         }, 1500)
})

// Get new dog profile
function render() {
    card.innerHTML = currentDog.generateProfile()
}

// Function for swiping to receive next dog
function swipe() {
    if (currentIndex == (dogs.length) - 1) {
        
        setTimeout(function() {
            card.innerHTML = 
                `<div class="container2">
                    <div class="out-of-swipes">
                        <h1 class="h1-likes">You're out of Likes!</h1>
                        <h3>Get more likes in: </h3>
                        <div class="countdown" id="countdown" ></div>
                        <button class="btn-likes">Get Unlimited Likes with TinDog Premium.</button>
                    </div>
                </div>`  

        const countdownTimer = document.getElementById("countdown")

        const startingMin = 60
        let time = startingMin * 60
                
        function updateCountdown() {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60
                
            countdownTimer.innerHTML = `${minutes} minutes : ${seconds} seconds`
            time--
            }
            setInterval(updateCountdown, 1000)
        
        }, 1000)
        
    }

    else {
        currentDog.hasBeenSwiped = true;
        setTimeout(function() {
            currentIndex += 1
            currentDog = new Dog(dogs[currentIndex]) 
            console.log(currentIndex)
            console.log(dogs.length)
        render()
        }, 1000)
    }


}

