const toggleButton = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
});


//to create a typewriter effect for my code in the header section
const text = "Restoring Hope To Children, One Life at a Time";
const speed = 80;
let index = 0;

function typeEffect(){
    const target = document.getElementById("typewriter")
    if (index < text.length){
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed)
    }else{
        setTimeout(() => {
            target.innerHTML = '';
            index = 0;
            typeEffect();
        }, 2000)
    }
}

//now let's give it some time before starting
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500)
})

//code for the mission text
setTimeout(() => {
    const missionText = document.getElementById('mission-text');
    missionText.classList.remove('opacity-0', 'translate-y-16'); // or whatever value you use
}, 500);

setTimeout(() => {
    document.getElementById('cta-button').classList.remove('opacity-0', 'translate-y-12');
}, 1000);

setTimeout(() => {
    document.getElementById('trust-text').classList.remove('opacity-0', 'translate-y-12');
}, 1500);


const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('dots-container');
        
        // Get all image containers (divs that wrap each image)
        //get all images in the container track
        //images.length gets the total number of image in the container (i.e 8)
        const images = track.querySelectorAll('div');
        const totalImages = images.length;
        
        // Keep track of which image we're currently showing
        let currentIndex = 0;
        
        // This will hold our auto-play timer
        let autoPlayTimer;
        
        // Create dots for each image
        function createDots() {
            // Loop through each image and create a dot
            for (let i = 0; i < totalImages; i++) {
                const dot = document.createElement('button');
                // Active dot is darker, inactive dots are lighter
                dot.className = `w-3 h-3 rounded-full transition-colors ${i === 0 ? 'bg-pink-900' : 'bg-gray-300'}`;
                //the tenary operator explains:  "If i equals 0 (first dot), make it pink-900, otherwise make it gray-300"
                // When clicked, go to that specific image
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }
        
        // Update which dot appears active
        function updateDots() {
            const dots = dotsContainer.querySelectorAll('button');
            dots.forEach((dot, index) => {
                // If this dot matches current image, make it active (dark)
                if (index === currentIndex) {
                    dot.className = 'w-3 h-3 rounded-full transition-colors bg-pink-900';
                } else {
                    dot.className = 'w-3 h-3 rounded-full transition-colors bg-gray-300';
                }
            });
        }
        
        // Move to a specific image
        function goToSlide(index) {
            currentIndex = index;
            // Move the track left by (index * 100%) to show the correct image
            // translateX(-100%) shows image 2, translateX(-200%) shows image 3, etc.
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }
        
        // Go to the next image
        function nextSlide() {
            // If we're at the last image, go back to first (infinite scroll)
            if (currentIndex >= totalImages - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            goToSlide(currentIndex);
        }
        
        // Go to the previous image
        function prevSlide() {
            // If we're at the first image, go to last (infinite scroll)
            if (currentIndex <= 0) {
                currentIndex = totalImages - 1;
            } else {
                currentIndex--;
            }
            goToSlide(currentIndex);
        }
        
        // Start auto-play (automatically go to next image every 4 seconds)
        function startAutoPlay() {
            autoPlayTimer = setInterval(nextSlide, 4000); // 4000ms = 4 seconds
        }
        
        // Stop auto-play
        function stopAutoPlay() {
            clearInterval(autoPlayTimer);
        }
        
        // Set up button click events
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay(); // Stop auto-play when user manually navigates
            startAutoPlay(); // Restart auto-play
        });
        
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay(); // Stop auto-play when user manually navigates
            startAutoPlay(); // Restart auto-play
        });
        
        // Pause auto-play when mouse hovers over carousel
        track.parentElement.addEventListener('mouseenter', stopAutoPlay);
        // Resume auto-play when mouse leaves carousel
        track.parentElement.addEventListener('mouseleave', startAutoPlay);
        
        // Initialize everything when page loads
        createDots();
        startAutoPlay();