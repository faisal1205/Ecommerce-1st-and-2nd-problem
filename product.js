
var products = JSON.parse(localStorage.getItem("Products"))
console.log(products)

var counter = products.length
document.querySelector("#counter").innerText = `Total Products listed are : ${counter}  `;

products.map(function(ele,i)
{
    var Div= document.createElement("div")
 
    var Name = document.createElement("p")
    Name.innerText = ele.name
    
    var Image = document.createElement("img")
    Image.src = ele.image

    var Cat = document.createElement("p")
   Cat.innerText = ele.category

    var Gender = document.createElement("p")
    Gender.innerText = ele.gender

    var Price = document.createElement("p")
    Price.innerText = ele.price


    var Remove = document.createElement("button")
    Remove.innerText = "Remove"
   Remove.addEventListener("click",function()
   {
       removeItmem(ele,i)
   })


    var Sold= document.createElement("button")
   Sold.innerText="Sold"
   Sold.addEventListener("click",function()
   {
       soldFunction(ele,i)
   })
Sold.setAttribute("id","sold")
if(ele.sold == true)
{
    Sold.style.background = "red"
}
else{
    Sold.style.background = "green"
}


Div.append(Image,Name,Cat,Gender,Price,Remove,Sold)
document.querySelector("#product").append(Div)



})

function removeItmem(ele,i)
{
   // console.log(ele)
    products.splice(i,1)

    localStorage.setItem("Products",JSON.stringify( products))

    location.reload();
}



function soldFunction(ele,i){
   
    if(ele.sold === false)
    {
        ele.sold = true
    //    var x= document.querySelector("#sold").innerText
    //    console.log(x)
  
    }
    else{
        ele.sold = false
    }

    localStorage.setItem("Products",JSON.stringify( products))

    console.log(ele)

    location.reload()
}



