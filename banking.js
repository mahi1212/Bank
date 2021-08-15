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

// Withdraw btn handler
document.getElementById('withdraw-btn').addEventListener('click', function(){    
    // get amount
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    
    // clear input field
    withdrawInput.value = "";
    
    // Update value
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawAmount = withdrawTotal.innerText;
    const finalWithdraw = parseFloat(currentWithdrawAmount) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = finalWithdraw;
    
    // update balace
    const balaceTotal = document.getElementById('balace-total');
    const currentBalanceAmount = balaceTotal.innerText;
    balaceTotal.innerText = parseFloat(currentBalanceAmount) - parseFloat(withdrawAmount);

});