const product = [
    {
        id: 0,
        image: 'https://www.pngarts.com/files/8/Nike-Air-Force-One-PNG-Image.png',
        title: 'NIKE AIR FORCE 1.07',
        price: 120,
    },
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1621-001-1.png?v=1677492710',
        title: 'Nike Force 1 LV8 2',
        price: 320,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-x-UNDERCOVER-Air-Force-1-Low-SP---White-White-Sail-DQ7558-101---08-02-22---Feature-JAYLEEN.jpg?v=1659640460',
        title: 'Nike Air Force 1 Low SP x UNDERCOVER',
        price: 230,
    },
    {
        id: 3,
        image: 'https://static.nike.com/a/images/t_default/a7c6d610-5b5c-4480-ae9a-f9d6aa867853/air-force-1-lxx-shoes-p34XS5.png',
        title: 'Nike Air Force 1 LXX',
        price: 140,
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
