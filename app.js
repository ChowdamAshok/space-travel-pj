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



document.getElementById('launch-btn').addEventListener('click', function() {
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
        // Start the rocket's upward movement with a slow animation
        rocket.style.transition = 'transform 8s ease-in, opacity 2s ease-in 7.5s';
        rocket.style.transform = 'translateY(-500vh)';
        rocket.style.opacity = '0';

        // Scroll the page up very slowly
        let scrollPosition = window.scrollY;
        const scrollStep = 7;  // Small increment for slower scroll
        const scrollInterval = setInterval(() => {
            if (scrollPosition > 0) {
                scrollPosition -= scrollStep; 
                window.scrollTo(0, scrollPosition);
            } else {
                clearInterval(scrollInterval);  // Stop scrolling when at the top
            }
        }, 30); // 30ms interval for a slower scroll effect
    }
});


