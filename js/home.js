// alert("you are successfully logged in.");

const addBalance = document.getElementById('btn');
const amount = document.getElementById('phone-number');
const pinNumber = document.getElementById('pin-number');
const balance = document.getElementById('balance');


addBalance.addEventListener('click', function(event){
    event.preventDefault();

    const addAmout = amount.value;
    const pin = pinNumber.value;
    // console.log(addAmout, pin)

    if(pin === "1234"){
        const newBalance = balance.innerText;

        const availableBalance = parseFloat(newBalance);
        const addAmouts = parseFloat(addAmout);

        const totalBalance = availableBalance + addAmouts;

        document.getElementById('balance').innerText = totalBalance;


    }else{
        alert('Invalid Information');
    }
});




document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutBalance = document.getElementById('cash-out').value;
    const pinNumber = document.getElementById('cash-out-pin-number').value;

    if(pinNumber === '1234'){
        const newBalance = document.getElementById('balance').innerText;

        const cashOutAmount = parseFloat(cashOutBalance);
        const availableBalance = parseFloat(newBalance);

        const totalCashOut = availableBalance - cashOutAmount;

        document.getElementById('balance').innerText = totalCashOut;
    }
    else{
        alert('Invalid Pin, please try again later.')
    }
});


document.getElementById('show-add-money-btn').addEventListener('click', function(){

    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
});

document.getElementById('show-cash-out-btn').addEventListener('click', function(){

    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden');
});