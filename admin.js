


var sellersArr=JSON.parse(localStorage.getItem("Products"))|| []


document.querySelector("form").addEventListener("submit",sellerData)

function sellerData()
{
   event.preventDefault()
    console.log("in")

    function sellersObj(n,c,i,p,g,s)  //construct function
    {
        this.name= n,
        this.category= c,
        this.image= i,
        this.price= p,
        this.gender= g,
        this.sold= s
    }


    let form = document.querySelector("#data");

    let name = form.name.value;
    let category = form.category.value;
    let image = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;
    let sold = form.sold.checked ;
   console.log(sold)
   var s1= new sellersObj(name,category,image,price,gender,sold)  //new return obj
   // console.log(s1)

    //sellersArr.push(s1)
    console.log(sellersArr)
    localStorage.setItem("Products",JSON.stringify( sellersArr))

    location.reload();
 }