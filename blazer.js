const product = [
    {
        id: 0,
        image: 'https://e7.pngegg.com/pngimages/196/1000/png-clipart-sports-shoes-nike-blazers-blazer-mid-nike-blazers-white-outdoor-shoe-thumbnail.png',
        title: 'Nike SB Zoom Blazer Mid Premium',
        price: 120,
    },
    {
        id: 1,
        image: 'https://static.nike.com/a/images/t_default/29d07d5d-5c73-4433-aee1-b2f53158e893/blazer-mid-pro-club-shoes-d4lr5W.png',
        title: 'Nike Blazer Mid Pro Club',
        price: 60,
    },
    {
        id: 2,
        image: 'https://w7.pngwing.com/pngs/139/681/png-transparent-sneakers-nike-blazers-skate-shoe-high-top-nike-white-outdoor-shoe-sneakers.png',
        title: 'Nike Blazer Low Platform',
        price: 230,
    },
    {
        id: 3,
        image: 'https://w7.pngwing.com/pngs/997/876/png-transparent-air-force-nike-blazers-vans-sneakers-puma-nike-white-suede-outdoor-shoe.png',
        title: 'Nike SB Zoom Blazer Mid',
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
