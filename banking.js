// deposit btn handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
    // set the value to deposit total (most critical)
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositAmount = depositTotal.innerText;
    depositTotal.innerText = parseFloat(depositAmount) +parseFloat(currentDepositAmount) ;
    
    // clear deposit input field
    depositInput.value = '';

    // update balace for deposit
    const balaceTotal = document.getElementById('balace-total');
    const currentBalanceAmount = balaceTotal.innerText;
    balaceTotal.innerText = parseFloat(currentBalanceAmount) + parseFloat(depositAmount);

});