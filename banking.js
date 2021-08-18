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

function updateBalance( depositAmount, isAdd){
    const balaceTotal = document.getElementById('balace-total');
    const currentBalanceAmount = balaceTotal.innerText;
    if(isAdd == true){
        balaceTotal.innerText = parseFloat(currentBalanceAmount) + parseFloat(depositAmount);
    }
    else{
        balaceTotal.innerText = parseFloat(currentBalanceAmount) - parseFloat(depositAmount);
    }
}

// deposit btn handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = depositInput.value;

    // set the value to deposit total (most critical)
    // const depositTotal = document.getElementById('deposit-total');
    // const currentDepositAmount = depositTotal.innerText;
    // depositTotal.innerText = parseFloat(depositAmount) +parseFloat(currentDepositAmount) ;
    
    // clear deposit input field
    // depositInput.value = '';

    // update balace for deposit
    // const balaceTotal = document.getElementById('balace-total');
    // const currentBalanceAmount = balaceTotal.innerText;
    // balaceTotal.innerText = parseFloat(currentBalanceAmount) + parseFloat(depositAmount);
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount, true);    
    }
    
});

// Withdraw btn handler
document.getElementById('withdraw-btn').addEventListener('click', function(){    
    // get amount
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmount = withdrawInput.value;
    // clear input field
    // withdrawInput.value = "";
    
    // Update value
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const currentWithdrawAmount = withdrawTotal.innerText;
    // const finalWithdraw = parseFloat(currentWithdrawAmount) + parseFloat(withdrawAmount);
    // withdrawTotal.innerText = finalWithdraw;
    
    // update balace
    // const balaceTotal = document.getElementById('balace-total');
    // const currentBalanceAmount = balaceTotal.innerText;
    // balaceTotal.innerText = parseFloat(currentBalanceAmount) - parseFloat(withdrawAmount);
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalanceAmountInnerText = document.getElementById('balace-total').innerText;
    const currentBalanceAmount = parseFloat(currentBalanceAmountInnerText)
    if(withdrawAmount > 0 && withdrawAmount < currentBalanceAmount){
        const withdrawTotal =  updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    
});