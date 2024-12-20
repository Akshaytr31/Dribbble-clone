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








