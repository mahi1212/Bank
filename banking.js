// deposit btn handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
    // set the value to deposit total
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = "$ "+  depositAmount;
    
    // clear deposit input field
    depositInput.value = '';

    
});