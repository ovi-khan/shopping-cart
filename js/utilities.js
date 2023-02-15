function updatePhoneBtnInput(isIncrise) {
    const phoneBtnInput = document.getElementById('phone-btn-input')
    const phoneBtnInputString = phoneBtnInput.value
    const previousPhoneBtnInput = parseInt(phoneBtnInputString)
    let newPhoneBtnInput
    if(isIncrise === true) {
        newPhoneBtnInput = previousPhoneBtnInput + 1
    } else {
        newPhoneBtnInput = previousPhoneBtnInput - 1
    }
    phoneBtnInput.value = newPhoneBtnInput
    return newPhoneBtnInput  
}

function updatePhoneTotalprise(newPhoneBtnInput) {
    const PhoneTotalElement = document.getElementById('phone-total')
   
    const totalPhonePrise = newPhoneBtnInput * 1219
    PhoneTotalElement.innerText = totalPhonePrise
}


document.getElementById('phone-btn-plus').addEventListener('click', function() {
    const newPhoneBtnInput =  updatePhoneBtnInput(true)
    updatePhoneTotalprise(newPhoneBtnInput)
    calculateSubTotal()
    
})

document.getElementById('phone-btn-minus').addEventListener('click', function() {
    const newPhoneBtnInput = updatePhoneBtnInput(false)
    updatePhoneTotalprise(newPhoneBtnInput)
    calculateSubTotal()
    
    
})