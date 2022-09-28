import restauranData from '../DATA.json';


const elementListData = document.querySelector('.list_item_resto');
elementListData.innerHTML = '';
restauranData.restaurants.forEach(restauran =>{
    elementListData.innerHTML += `
    <div tabindex="0" class="restaurant">
    <figure>
        <div class="city">
            <h4>${restauran.city}</h4>
        </div>
        <img src="${restauran.pictureId}" alt="">
        <figcaption>
            <p>Rating : ${restauran.rating}<span><i class="fa fa-star" aria-hidden="true"></i></span></p>
            <h3 class="tagline_resto">${restauran.name}</h3>
            <p>${restauran.description.slice(1,200)}</p>
        </figcaption>
    </figure>
  </div>
    `
})



const menuButton = document.querySelector('#menu_button');
const drawerElement = document.querySelector('#drawer_element');
const main = document.querySelector('main');

menuButton.addEventListener('click', function(event){
    drawerElement.classList.toggle('open');
    event.stopPropagation()
})

main.addEventListener('click', function(){
    drawerElement.classList.remove('open');
})