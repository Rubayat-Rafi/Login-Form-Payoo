const btn = document.getElementById('btn');
const phoneNumber = document.getElementById('phone-number');
const pinNumber = document.getElementById('pin-number');


btn.addEventListener('click', function(event){
    event.preventDefault();
    
    const phone = phoneNumber.value;
    const pin = pinNumber.value;

    if(phone === '01840510608' && pin === '1234' || phone === '01718099526'){
        window.location.href = "home.html";
        
    }else{
        alert('you are given wrong information.');
    }

});
