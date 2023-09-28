const menu = [
  {
    id: 1,
    title: "Express",
    category: "breakfast",
    price: 450,
    img: "./images/express.webp",
    desc: `2 eggs, 2 sausages, baked beans, tea/fruit slices/ Juice`,
  },
  {
    id: 2,
    title: "Mini",
    category: "breakfast",
    price: 400,
    img: "./images/mini].jpeg",
    desc: `1 egg, 1 sausage, baked beans, tea/ fruit slices, juice `,
  },
  {
    id: 3,
    title: "Chicken Tikka Burger",
    category: "signature dishes",
    price: 450,
    img: "./images/item-5.jpeg",
    // img: "./images/item-3.jpeg",
    desc: `Grilled chicken fillet, onion tomato, lettuce, 'mint chutney'`,
  },
  {
    id: 4,
    title: "Grilled Fish Fillet",
    category: "signature dishes",
    price: 400,
    img: "./images/grilledfish.jpeg",
    desc: `Nile perch fillet, well marinated, grilled and served with homemade 'tartar sauce' `,
  },
  {
    id: 5,
    title: "Fish Fingers",
    category: "signature dishes",
    price: 400,
    img: "./images/fishfingers.jpeg",
    desc: `Bread crumbed nile perch fillet cut into stripes, served with 'tartar sauce' `,
  },
  {
    id: 6,
    title: "Chicken Wings",
    category: "signature dishes",
    price: 400,
    img: "./images/chickenwings.jpeg",
    desc: `Marinated Wings (honey glazed/ sweet / spicy), served `,
  },
  {
    id: 7,
    title: "Grilled Chicken Pepper Steak",
    category: "signature dishes",
    price: 600,
    img: "./images/grilled-chicken.avif",
    desc: `Marinated chicken fillet, served with Chips and creamy pepper sauce `,
  },
  {
    id: 8,
    title: "Creamy Fried Chicken",
    category: "signature dishes",
    price: 500,
    img: "./images/creamy-chicken.jpeg",
    desc: `Buttered quarter chicken done with oriental spices, to cripy perfection, served with chips. All served with garden salad and chips, black pepper, or mushroom sauce, all done to your choice(well done, medium rare)  `,
  },
  {
    id: 9,
    title: "Sirion",
    category: "signature dishes",
    price: 600,
    img: "./images/sirion.jpeg",
    desc: ``,
  },
  {
    id: 10,
    title: "Fillet Steak",
    category: "signature dishes",
    price: 600,
    img: "./images/fillet-steak.jpeg",
    desc: ``,
  },
  ,
  {
    id: 10,
    title: "Fillet Steak",
    category: "signature dishes",
    price: 600,
    img: "./images/item-10.jpeg",
    desc: ``,
  },
  ,
  {
    id: 11,
    title: "Fillet Steak",
    category: "signature dishes",
    price: 600,
    img: "./images/item-10.jpeg",
    desc: ``,
  },
  ,
  {
    id: 12,
    title: "Steak",
    category: "signature dishes",
    price: 650,
    img: "./images/item-10.jpeg",
    desc: ``,
  },
  ,
  {
    id: 13,
    title: "T-Bone Steak",
    category: "signature dishes",
    price: 600,
    img: "./images/item-10.jpeg",
    desc: ``,
  },
  {
    id: 13,
    title: "Butter Chicken",
    category: "Swahili Quisine",
    price: 550,
    img: "./images/buttered-chicken.jpeg",
    desc: `Boneless chicken cubes well marinated, and cooked in special masala sauce`,
  },
  {
    id: 14,
    title: "Mutton Pilau",
    category: "Swahili Quisine",
    price: 200,
    img: "./images/mutton-pilau.jpeg",
    desc: ``,
  },
  {
    id: 15,
    title: "Mutton Biryani",
    category: "Swahili Quisine",
    price: 500,
    img: "./images/MuttonBiryani.webp",
    desc: `mutton cubes cooked in oriental spices, served with basmatic rice`,
  },
  {
    id: 16,
    title: "Chicken Curry",
    category: "Swahili Quisine",
    price: 400,
    img: "./images/chicken-curry.jpeg",
    desc: ``,
  },
  {
    id: 17,
    title: "Basmatic rice",
    category: "Swahili Quisine",
    price: 500,
    img: "./images/basmatic-rice.jpeg",
    desc: ``,
  },
];
const btnContainer= document.querySelector('.btn-container')
const sectionCenter = document.querySelector('.section-center')


//load all items 
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu); 
  displayMenuButtons ()
})

function displayMenuButtons (){
  const categories = menu.reduce(function (values, item) {
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  }, ['all'])
  const categoryBtn = categories.map(function (category){
    return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
  }).join('')
  btnContainer.innerHTML = categoryBtn
  const filterBtns = document.querySelectorAll('.filter-btn')
  //filter buttons 
  filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id
    const menuCategory = menu.filter(function (menuItem){
      if (menuItem.category == category){
        return menuItem
      }
    })
      if (category === 'all'){
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      }
  })
})
}





function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item){
    return `<article class="menu-item">
    <img src=${item.img} class="photo">
    <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      <h4 class="price"> Ksh. ${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`
  }).join('')
  sectionCenter.innerHTML = displayMenu
}

