function updateCaseBtnNumber(caseId){
        const caseInputBtn = document.getElementById('case-input-btn')
    const caseInputBtnString = caseInputBtn.value
    const previousCaseInput = parseInt(caseInputBtnString)
    
    let newCaseInput;
    if(caseId === true) {
        newCaseInput = previousCaseInput + 1
    } else {
        newCaseInput = previousCaseInput - 1
    }
    caseInputBtn.value = newCaseInput
    return newCaseInput
}


function updateCaseTotal(newCaseInput) {
    const caseTotalPrise = newCaseInput * 59
    const caseTotalElement = document.getElementById('case-total-prise').innerText = caseTotalPrise
}

document.getElementById('case-btn-plus').addEventListener('click', function() {
    const newCaseInput =  updateCaseBtnNumber(true)
    updateCaseTotal(newCaseInput)
    
})
document.getElementById('case-btn-minus').addEventListener('click', function() {
    const newCaseInput = updateCaseBtnNumber(false)
    updateCaseTotal(newCaseInput)
    
})