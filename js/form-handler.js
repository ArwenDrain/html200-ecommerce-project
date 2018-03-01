function capture(){
  event.preventDefault()
  console.log("form submitted")
  
  var email = document.custInfo.email.value
  
  console.log("Thanks for signing up for our mailing list, " + email + "!")
  alert("Thanks for signing up for our mailing list, " + email + "!")
}