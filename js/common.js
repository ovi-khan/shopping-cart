function getTextElementValueById(elementId) {
    const PhoneTotalElement = document.getElementById(elementId)
    const PhoneTotalElementString = PhoneTotalElement.innerText
    const currentPhoneTotal = parseFloat(PhoneTotalElementString)
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId)
    subTotalElement.innerText = value
}
function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal =  getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total-prise')
    const subTotalPrise = currentPhoneTotal + currentCaseTotal
    
    setTextElementValueById('sub-total', subTotalPrise)
    const taxTotalAmountString = (subTotalPrise * 0.1).toFixed(2)
    const taxTotalAmount = parseFloat(taxTotalAmountString)
    setTextElementValueById('tax-total', taxTotalAmount)
    const finalTotal = taxTotalAmount + subTotalPrise
    setTextElementValueById('final-total', finalTotal)
}