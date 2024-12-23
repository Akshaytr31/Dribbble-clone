const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const navButton = document.querySelector('.nav-button');


// Toggle dropdown visibility
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
});

navButton.addEventListener('click', () => {
  navButton.classList.toggle('active');
});







    const dropdownBtnShots = document.getElementById('dropdown-btnShots');
    const dropdownShots = document.getElementById('dropdownShots');
    const svgIcon = document.querySelector('.svg-icon');

  
    dropdownBtnShots.addEventListener('click', () => {
    
        dropdownShots.classList.toggle('activeS');
     
        svgIcon.classList.toggle('rotate');
    });

    



    const filterBtn=document.getElementById('filterBtn')
    const filterDrop=document.getElementById('filterDrop')


    filterBtn.addEventListener('click',()=>{
        if (filterDrop.classList.contains('visibleDrop')){
            filterDrop.style.opacity="0"



            setTimeout(()=>{
                filterDrop.style.display="none"
                filterDrop.classList.remove('visibleDrop')
            },300)
        }else{
            filterDrop.style.display='block'


            setTimeout(()=>{
                filterDrop.style.opacity='1'
                filterDrop.classList.add('visibleDrop')
            },10)
        }

    })






    const scrollContainer = document.querySelector(".container_block2-scroll");
    const backButton = document.querySelector(".scroll_span-back");
    const forwardButton = document.querySelector(".scroll_span-forword");
    const ulElement = document.querySelector(".container_block2-ul");
    const scrollAmount = 300; // Adjust as needed for the scrolling amount

    // Initial visibility check
    checkButtonsVisibility();

    // Scroll forward
    forwardButton.addEventListener("click", function (e) {
        e.preventDefault();
        ulElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(checkButtonsVisibility, 300); // Check visibility after scroll
    });

    // Scroll back
    backButton.addEventListener("click", function (e) {
        e.preventDefault();
        ulElement.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setTimeout(checkButtonsVisibility, 300); // Check visibility after scroll
    });

    // Check visibility of navigation buttons
    function checkButtonsVisibility() {
        const scrollLeft = ulElement.scrollLeft;
        const scrollWidth = ulElement.scrollWidth;
        const clientWidth = ulElement.clientWidth;

        // Hide or show back button
        if (scrollLeft <= 0) {
            backButton.style.display = "none";
        } else {
            backButton.style.display = "block";
        }

        // Hide or show forward button
        if (scrollLeft + clientWidth >= scrollWidth) {
            forwardButton.style.display = "none";
        } else {
            forwardButton.style.display = "block";
        }
    }


