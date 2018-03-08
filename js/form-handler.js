function capture(){
  event.preventDefault()
  console.log("form submitted")
  
  var email = document.custInfo.email.value
  
  console.log("Thanks for signing up for our mailing list, " + email + "!")
  alert("Thanks for signing up for our mailing list, " + email + "!")
}

//Add/remove from shopping cart
var cart=[]
function addToCart(productName){
  event.preventDefault()
  var i = cart.indexOf(productName)
  if (i === -1){
    cart.push(productName)
  } else {
    cart.splice(i,1)
  }
  console.log(cart.length + " item(s) added to your shopping cart.")
}