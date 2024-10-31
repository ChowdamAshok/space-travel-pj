let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}



document.getElementById('launch-btn').addEventListener('click', function () {
    const rocket = document.getElementById('rocket');
    const countdownDisplay = document.getElementById('countdown');

    // Initialize countdown
    let countdown = 3; // 3 seconds countdown
    countdownDisplay.innerText = countdown;

    const countdownInterval = setInterval(() => {
        countdown -= 1;
        countdownDisplay.innerText = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            launchRocket();
        }
    }, 1000); // Update every second

    function launchRocket() {
        // Set rocket to fixed to move over all sections
        rocket.style.position = 'fixed';
        rocket.style.top = '50%'; // Start from the middle of the screen

        // Set up scrolling effect
        let scrollPosition = window.scrollY;
        const scrollStep = 4;  // Small increment for slower scroll
        const rocketMovement = 800; // Distance the rocket should travel

        const scrollInterval = setInterval(() => {
            if (scrollPosition > 0) {
                scrollPosition -= scrollStep;
                window.scrollTo(0, scrollPosition);

                // Synchronize rocket position with scroll
                const scrollProgress = (window.innerHeight + scrollPosition) / rocketMovement;
                rocket.style.transform = `translateY(-${scrollProgress * 100}vh)`;
            } else {
                clearInterval(scrollInterval);  // Stop scrolling when at the top
                rocket.style.opacity = '0'; // Fade out rocket at the end
            }
        }, 10); // 10ms interval for a slower scroll effect
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.querySelector('.loading-overlay').style.display = 'none';
    }, 2000);
});

