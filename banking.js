// getting value using function
function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
    const inputValue = InputField.value;

    // clear deposit input field
    InputField.value = '';
    return inputValue;
}

function updateTotalField(totalFieldId, depositAmount){
    const totalField = document.getElementById(totalFieldId);
    const currentAmount = totalField.innerText;
    totalField.innerText = parseFloat(depositAmount) +parseFloat(currentAmount) ;
}
 
function updateBalance( depositAmount){
    const balaceTotal = document.getElementById('balace-total');
    const currentBalanceAmount = balaceTotal.innerText;
    balaceTotal.innerText = parseFloat(currentBalanceAmount) + parseFloat(depositAmount);
}

// deposit btn handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = depositInput.value;

    const depositAmount = getInputValue('deposit-input');
    // set the value to deposit total (most critical)
    updateTotalField('deposit-total',depositAmount);
    // const depositTotal = document.getElementById('deposit-total');
    // const currentDepositAmount = depositTotal.innerText;
    // depositTotal.innerText = parseFloat(depositAmount) +parseFloat(currentDepositAmount) ;
    
    // clear deposit input field
    // depositInput.value = '';

    // update balace for deposit
    // const balaceTotal = document.getElementById('balace-total');
    // const currentBalanceAmount = balaceTotal.innerText;
    // balaceTotal.innerText = parseFloat(currentBalanceAmount) + parseFloat(depositAmount);
    updateBalance(depositAmount);
});

// Withdraw btn handler
document.getElementById('withdraw-btn').addEventListener('click', function(){    
    // get amount
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmount = withdrawInput.value;
    const withdrawAmount = getInputValue('withdraw-input');
    // clear input field
    // withdrawInput.value = "";
    
    // Update value
    const withdrawTotal =  updateTotalField('withdraw-total', withdrawAmount)
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const currentWithdrawAmount = withdrawTotal.innerText;
    // const finalWithdraw = parseFloat(currentWithdrawAmount) + parseFloat(withdrawAmount);
    // withdrawTotal.innerText = finalWithdraw;
    
    // update balace
    // const balaceTotal = document.getElementById('balace-total');
    // const currentBalanceAmount = balaceTotal.innerText;
    // balaceTotal.innerText = parseFloat(currentBalanceAmount) - parseFloat(withdrawAmount);
     updateBalance(-withdrawAmount);
});