const product = [
    {
        id: 0,
        image: 'https://www.hoopsstation.com/image/hoopsstation/image/cache/data/all_product_images/product-6461/PQO2hdga1676610453-500x500.png',
        title: 'Playoffs',
        price: 120,
    },
    {
        id: 1,
        image: 'https://www.pngfind.com/pngs/m/606-6065106_air-jordan-1-retro-mid-gs-nike-jordan.png',
        title: 'Air Jordan 1 Mid',
        price: 170,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0991/7938/articles/LAUNCHES_GRID_960px_89057810-2ea6-4b86-9e0f-f77e194bd313.png?v=1676331857',
        title: 'Game Royal and Varsity Maize',
        price: 230,
    },
    {
        id: 3,
        image: 'https://images.squarespace-cdn.com/content/v1/5afceb6f5ffd2052611eff46/1674770356396-ZPGPRR21BYJJ9FN0ORTM/PhotoRoom_20230126_164858.PNG?format=2500w',
        title: 'Air Jordan 5 Retro',
        price: 200,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
