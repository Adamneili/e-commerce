const product = [
    {
        id: 0,
        image: 'https://cdn.shopify.com/s/files/1/1115/8382/products/nike-footwear-nike-crater-impact-men-s-28191210504288_2000x.png?v=1632953208',
        title: 'Nike Crater Impact',
        price: 120,
    },
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM1086-101-1.png?v=1657006881',
        title: 'Nike Air Force 1 Crater',
        price: 60,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0670/7323/products/DQ4531-700-PHSRH000-2000_600x.png?v=1662592171',
        title: 'Nike Force 1 Crater Next Nature',
        price: 230,
    },
    {
        id: 3,
        image: 'https://img1.freepng.fr/20180418/sje/kisspng-air-force-nike-free-sneakers-huarache-shoe-running-shoes-5ad78bf011a3c1.2550225615240755040723.jpg',
        title: 'Nike Air Huarache Crater Premium',
        price: 100,
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
