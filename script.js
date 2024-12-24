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



const shotsDropdown = document.querySelector('.shots-dropdown');
  const shotsSVG = shotsDropdown.querySelector('svg');
  const shotsOptions = shotsDropdown.querySelectorAll('.shots-options li');
  const hiddenInput = shotsDropdown.querySelector('input[type="hidden"]');

  // Toggle dropdown visibility when clicking the SVG icon
  shotsSVG.addEventListener('click', () => {
    shotsDropdown.classList.toggle('open');
    // Rotate the SVG when the dropdown is open
    shotsSVG.classList.toggle('rotated', shotsDropdown.classList.contains('open'));
  });

  // Handle option selection
  shotsOptions.forEach(option => {
    option.addEventListener('click', () => {
      shotsDropdown.querySelector('.shots-selected').textContent = option.textContent;
      hiddenInput.value = option.dataset.value;
      shotsOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      shotsDropdown.classList.remove('open');
      shotsSVG.classList.remove('rotated'); // Reset rotation when the dropdown is closed
    });
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    if (!shotsDropdown.contains(e.target)) {
      shotsDropdown.classList.remove('open');
      shotsSVG.classList.remove('rotated'); // Reset rotation if clicking outside
    }
  });










    // const dropdownBtnShots = document.getElementById('dropdown-btnShots');
    // const dropdownShots = document.getElementById('dropdownShots');
    // const svgIcon = document.querySelector('.svg-icon');

  
    // dropdownBtnShots.addEventListener('click', () => {
    
    //     dropdownShots.classList.toggle('activeS');
     
    //     svgIcon.classList.toggle('rotate');
    // });

    



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
    const scrollAmount = 300;

    checkButtonsVisibility();

    forwardButton.addEventListener("click", function (e) {
        e.preventDefault();
        ulElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(checkButtonsVisibility, 300); 
    });

    backButton.addEventListener("click", function (e) {
        e.preventDefault();
        ulElement.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setTimeout(checkButtonsVisibility, 300); 
    });

    function checkButtonsVisibility() {
        const scrollLeft = ulElement.scrollLeft;
        const scrollWidth = ulElement.scrollWidth;
        const clientWidth = ulElement.clientWidth;

        if (scrollLeft <= 0) {
            backButton.style.display = "none";
        } else {
            backButton.style.display = "block";
        }

        if (scrollLeft + clientWidth >= scrollWidth) {
            forwardButton.style.display = "none";
        } else {
            forwardButton.style.display = "block";
        }
    }













    const dropdowns = document.querySelectorAll('.custom-dropdown');

    dropdowns.forEach(dropdown => {
      const selected = dropdown.querySelector('.drop-flex');
      const optionsContainer = dropdown.querySelector('.dropdown-options');
      const options = dropdown.querySelectorAll('.dropdown-options li');
      const hiddenInput = dropdown.querySelector('input[type="hidden"]');
  
      
      selected.addEventListener('click', () => {
        dropdowns.forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('open');
          }
        });
        dropdown.classList.toggle('open');
      });
  
      options.forEach(option => {
        option.addEventListener('click', () => {
          dropdown.querySelector('.dropdown-selected').textContent = option.textContent;
          hiddenInput.value = option.dataset.value;
  
          options.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
  
          dropdown.classList.remove('open');
        });
      });
    });
  
    document.addEventListener('click', e => {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
    });
      
      








