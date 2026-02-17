function scrollToBooking(){
document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}

function payNow(){

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;

if(name=="" || email==""){
alert("Please fill all details");
return;
}

var options = {
"key": "rzp_test_SH7mpATSCo6Wiy",
"amount": 50000,
"currency": "INR",
"name": "CreatorBoost Studio",
"description": "Creator Service Advance Booking",
"handler": function (){
document.getElementById("status").innerHTML="✅ Payment Successful! Booking Confirmed.";
},
"prefill": {
"name": name,
"email": email
},
"theme": {
"color": "#1e3a8a"
}
};

var rzp = new Razorpay(options);
rzp.open();
}
