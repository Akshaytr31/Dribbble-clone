



document.addEventListener("scroll",function(){
  const navbar=document.querySelector('.nav')
  const button= document.querySelector('.nav-container-elm1-button')
  const btntop=document.querySelector('.container_btntop')
  if(window.scrollY > 270){
    button.classList.add('searchButton')
    navbar.classList.add("sticky")
    btntop.classList.add('btntop')
  }else{
    navbar.classList.remove("sticky")
    button.classList.remove('searchButton')
    btntop.classList.remove('btntop')
  }
})


// const listUL=document.querySelector('.listtop_dropdown')
// const listDown=document.querySelector('.listDown')

// listUL.addEventListener('click',()=>{
//   listUL.classList.toggle('listDown')
// })

// const exploreMenu = document.querySelector('.Explore');
// const listUL = document.querySelector('.listtop_dropdown');
// const dim=document.querySelector('.dim')

// exploreMenu.addEventListener('click', (e) => {
//   e.preventDefault();
//   listUL.classList.toggle('listDown');
//   listUL.classList.toggle('dim')
// });


// document.addEventListener('click', (e) => {
//   if (!exploreMenu.contains(e.target) && !listUL.contains(e.target)) {
//     listUL.classList.remove('listDown');
//   }
// });


// listUL.addEventListener('click', (e) => {
//   e.stopPropagation();
// });
document.addEventListener("DOMContentLoaded", () => {
  const dropdownHeaders = document.querySelectorAll('.Explore > a');
  
  dropdownHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdownMenu = header.nextElementSibling;

      // Toggle the 'show' class
      dropdownMenu.classList.toggle('listDown');
    });
  });
});







const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const navButton = document.querySelector('.nav-button');



dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});


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

 
  shotsSVG.addEventListener('click', () => {
    shotsDropdown.classList.toggle('open');
    
    shotsSVG.classList.toggle('rotated', shotsDropdown.classList.contains('open'));
  });


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
    
    //     dropdownShots.classList.toggle('activeSg');
     
    //     svgIcon.classList.toggle('rotate');
    // });





const popularBtn=document.querySelector('.container_block2-btn1')
const popularElm=document.querySelector('.Popular-elm')

popularBtn.addEventListener('click',()=>{
  popularElm.classList.toggle('see')
})










    



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
      
      







// const itemList=document.getElementById('item-list')
// data.items.forEach(item=>{
//   const li=document.createElement('li')


//   li.innerHTML=`
//     <div class="block3-image2">
//         <img src="${item.image.src}" alt="${item.image.alt}">
//       </div>
//       <div class="block3_prop">
//         <div class="block3_prop-main">
//           <div class="block3_prop-sub">
//             <img class="photo lazyloaded" alt="${item.profile.name}" width="${item.profile.photo.width}" height="${item.profile.photo.height}" src="${item.profile.photo.src}">
//             <span>${item.profile.name}</span>
//           </div>
//           <div>
//             ${item.profile.isPro ? '<a href="#" class="property-a2"><span class="pro">PRO</span></a>' : ''}
//             ${item.profile.isTeam ? '<a href="#" class="property-a2"><span class="in-category">Team</span></a>' : ''}
//           </div>
//           <div class="property-elm2">
//             <div class="property-elm2-like">
//               <div class="likes">
//                 <a href="#">
//                   <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" role=\"img\" class=\"icon fill-current shot-tools-icon\"><path d=\"M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"
//                   <span>Likes</span>
//                 </a>
//               </div>
//               <div class="likes">
//                 <a href="#">
//                   <span>${item.likes.count}</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>`
    
//       itemList.appendChild(li)
// })










fetch('properties.json') 
  .then(response => response.json())
  .then(data => {
   
    const itemContainer = document.getElementById('item-list');

  
    data.items.forEach(item => {
      const itemElement = document.createElement('li');
      itemElement.innerHTML = `
        <div class="block3-image2">
          <img src="${item.image}" alt="">
          <div class="hover">
              <span>${item.hover}</span>
              <div class=inner-items>
                 <div class="save"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon ">
                         <path d="M3.33337 5.2C3.33337 4.0799 3.33337 3.51984 3.55136 3.09202C3.74311 2.71569 4.04907 2.40973 4.42539 2.21799C4.85322 2 5.41327 2 6.53337 2H9.46671C10.5868 2 11.1469 2 11.5747 2.21799C11.951 2.40973 12.257 2.71569 12.4487 3.09202C12.6667 3.51984 12.6667 4.0799 12.6667 5.2V14L8.00004 11.3333L3.33337 14V5.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       </svg>
                  </div>
                  <div class="love">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon ">
                         <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       </svg>
                  </div>
              </div>
          </div>
        </div>
        <div class="block3_prop">
          <div class="block3_prop-main">
            <div class="block3_prop-sub">
              <img class="photo" alt="${item.author.name}" width="24" height="24" src="${item.author.avatar}">
              <span>${item.author.name}</span>
            </div>
            <div class="block3_cat">
              ${item.isPro ? '<a href="#" class="property-a2"><span class="pro">PRO</span></a>' : ''}
              ${item.isTeam ? '<a href="#" class="property-a2"><span class="pro">TEAM</span></a>' : ''}
            </div>
            <div class="property-elm2">
              <div class="property-elm2-like">
                <div class="likes">
                  <a href="#">
                    <img src="${item.likes.icon}">
                    <span>${item.likes.count}</span>
                  </a>
                </div>
              </div>
              <div class="property-elm2-watch">
                <div class="watch">
                  <a href="#">
                    <img src="${item.watch.icon}">
                    <span>${item.watch.count}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      itemContainer.appendChild(itemElement);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));






  // filtering


// function filterByWatchRange(range){
//   return data.item.filter(item=>{
//     const watchCount =item.watch.count;

//     switch (range){
//       case "Blove 1000":
//       return watchCount<1000;
//       case "1001-5000":
//         return watchCount>=1001 && watchCount <=5000
//       case "5001-10000":
//         return watchCount>=5001 && watchCount <=10000
//       case "Above 10000":
//         return watchCount>10000
//       default:
//         return true

//     }
//   })
// }

// document.querySelectorAll(".dropdown-options li").forEach(li => {
//   li.addEventListener("click", function () {
//       const selectedRange = li.getAttribute("data-value");

//       // Update selected text
//       document.querySelector(".dropdown-selected").textContent = selectedRange;

//       // Filter data
//       const filteredItems = filterByWatchRange(selectedRange);

//       // Update UI
//       const resultsContainer = document.getElementById("filtered-results");
//       resultsContainer.innerHTML = ""; // Clear previous results

//       filteredItems.forEach(item => {
//           const div = document.createElement("div");
//           div.innerHTML = `<img src="${item.image}" alt="${item.hover}" /><p>${item.hover}</p>`;
//           resultsContainer.appendChild(div);
//       });
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  const categoryDropdown = document.getElementById('category-dropdown');
  const watchDropdown = document.getElementById('watch-dropdown');
  const itemContainer = document.getElementById('item-list');

  let selectedCategory = 'All'; // Default filter value for category
  let selectedWatch = 'All'; // Default filter value for watch count

  // Fetch data from properties.json
  fetch('properties.json')
      .then(response => response.json())
      .then(data => {
          // Event listener for category dropdown
          categoryDropdown.querySelectorAll('.dropdown-options li').forEach((item) => {
              item.addEventListener('click', (event) => {
                  selectedCategory = event.target.dataset.value; // Update selected category
                  categoryDropdown.querySelector('.dropdown-selected').textContent = event.target.textContent;
                  renderItems(data.items); // Re-render items
              });
          });

          // Event listener for watch dropdown
          watchDropdown.querySelectorAll('.dropdown-options li').forEach((item) => {
              item.addEventListener('click', (event) => {
                  selectedWatch = event.target.dataset.value; // Update selected watch count
                  watchDropdown.querySelector('.dropdown-selected').textContent = event.target.textContent;
                  renderItems(data.items); // Re-render items
              });
          });

          // Render items on page load
          renderItems(data.items);
      })
      .catch(error => {
          console.error('Error loading JSON:', error);
          itemContainer.innerHTML = '<li>Failed to load properties. Please try again later.</li>';
      });

  // Function to filter and render items
  function renderItems(items) {
      // Clear previous items
      itemContainer.innerHTML = '';

      // Filter based on selected category
      let filteredItems = items.filter(item => {
     
          if (selectedCategory === 'All') return item;
          return (selectedCategory === 'team' && item.isTeam) || (selectedCategory === 'pro' && item.isPro);
      });

      // Further filter based on watch count
      filteredItems = filteredItems.filter(item => {
          switch (selectedWatch) {
              case 'All':
                return true
              case 'below1000':
                  return item.watch.count < 1000;
              case '1001-5000':
                  return item.watch.count >= 1001 && item.watch.count <= 5000;
              case '5001-10000':
                  return item.watch.count >= 5001 && item.watch.count <= 10000;
              case 'above10000':
                  return item.watch.count > 10000;
              default:
                  return true;
          }
      });

      // If no items match the filters
      if (filteredItems.length === 0) {
          itemContainer.innerHTML = '<li>No items found for the selected filters.</li>';
          return;
      }

      // Display filtered items
      const fragment = document.createDocumentFragment();
      filteredItems.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.innerHTML = `
              <div class="block3-image2">
                  <img src="${item.image}" alt="">
                  <div class="hover">
                      <span>${item.hover}</span>
                      <div class="inner-items">
                          <div class="save"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon ">
                             <path d="M3.33337 5.2C3.33337 4.0799 3.33337 3.51984 3.55136 3.09202C3.74311 2.71569 4.04907 2.40973 4.42539 2.21799C4.85322 2 5.41327 2 6.53337 2H9.46671C10.5868 2 11.1469 2 11.5747 2.21799C11.951 2.40973 12.257 2.71569 12.4487 3.09202C12.6667 3.51984 12.6667 4.0799 12.6667 5.2V14L8.00004 11.3333L3.33337 14V5.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                          </div>
                          <div class="love">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon ">
                                  <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="block3_prop">
                  <div class="block3_prop-main">
                      <div class="block3_prop-sub">
                          <img class="photo" alt="${item.author.name}" width="24" height="24" src="${item.author.avatar}">
                          <span>${item.author.name}</span>
                      </div>
                      <div class="block3_cat">
                          ${item.isPro ? '<a href="#" class="property-a2"><span class="pro">PRO</span></a>' : ''}
                          ${item.isTeam ? '<a href="#" class="property-a2"><span class="pro">TEAM</span></a>' : ''}
                      </div>
                      <div class="property-elm2">
                          <div class="property-elm2-like">
                              <div class="likes">
                                  <a href="#">
                                      <img src="${item.likes.icon}">
                                      <span>${item.likes.count}</span>
                                  </a>
                              </div>
                          </div>
                          <div class="property-elm2-watch">
                              <div class="watch">
                                  <a href="#">
                                      <img src="${item.watch.icon}">
                                      <span>${item.watch.count}</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          fragment.appendChild(itemElement);
      });
      itemContainer.appendChild(fragment);
  }
});


