const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];



// Selectors

let allButtonDOM=document.querySelector("#all")
let koreanButtonDOM=document.querySelector("#korean")
let japanButtonDOM=document.querySelector("#japan")
let chinaButtonDOM=document.querySelector("#china")
let itemDOM=document.querySelector("#menuItems");

// Event Listener

allButtonDOM.addEventListener("click",showAll)
koreanButtonDOM.addEventListener("click",showKorean)
japanButtonDOM.addEventListener("click",showJapan)
chinaButtonDOM.addEventListener("click",showChina)

// Main function -- Show Menu 
showAll()
function showMenu(country)
{
  // For .. in yapısıyla menü içerisindeki objeleri dönüyoruz. 
  for(let key in menu)
  {
    // menu[key] yapısıyla birlikte menüdeki değerler arasından category properysine erişiyoruz ve parametreye eşit olup olmadığına bakıyoruz. 

    // Örneğin Korea butonuna tıklandığında bu fonksiyonun parametresini korea olarak çağırıyoruz. Sonrasında döngüdeki değerin kategorisi tıklanılan buttonun ismine eşit mi ? 
    if(menu[key].category==country)
    {
    // Eşitse if koşulunun içine giriyor ve yukarıda tanımlanan dive yazılıyor.

    // HTML'de hazırlamış olduğum kodu tanımladığım divin innerHTML'ine aktarıyorum. Ve literal template ile gelmesi gereken yerlere menünün infolarını yazdım.
      itemDOM.innerHTML +=
      `
      <div id="items" class="menu-items col-6">
        <img class="photo mr" src="${menu[key].img}" alt="">
          <div>
            <span>            
               <h4 class="menu-title" style="white-space: pre;" >${menu[key].title}                              ${menu[key].price}
               </h4>
            </span>
           <div>     
          <p class="menu-info">${menu[key].desc}</p>
        </div>
       </div>
    </div>
      `   
    }    
  } 
}

// Functions


function showJapan()
{   
  itemDOM.innerHTML=""
  showMenu("Japan")
}

function showKorean()
{  
  itemDOM.innerHTML="";
  showMenu("Korea")
}
function showChina()
{
  itemDOM.innerHTML="";
  showMenu("China")
}
function showAll()
{
  itemDOM.innerHTML="";
  for(let key in menu)
   {    
      itemDOM.innerHTML+=
      `
       <div id="items" class="menu-items col-6">
         <img class="photo mr" src="${menu[key].img}" alt="">
           <div>
             <span>            
                <h4 class="menu-title" style="white-space: pre;" >${menu[key].title}                               ${menu[key].price}</h4>
             </span>
            <div>     
           <p class="menu-info">${menu[key].desc}</p>
         </div>
        </div>
     </div>
     ` 
    }    
}
 


