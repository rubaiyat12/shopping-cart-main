function updateProductNumber(id,totalid,isIncraese,price) {
    const caseInput = document.getElementById(id);
    const caseNumber = caseInput.value;
    if (isIncraese == true) {
        caseInput.value = parseInt(caseNumber) + 1;
        
    }
    else if(caseNumber>0) {
        caseInput.value = parseInt(caseNumber) - 1;
    }
    const caseTotal = document.getElementById(totalid); 
    caseTotal.innerText = caseInput.value * price;
    //calculate total
    calTotal()
    
    
    
}

function getInput(iD) {
    const productInput = document.getElementById(iD);
    const productNumber = parseInt(productInput.value);
    return productNumber;
    
}

//calculate total
function calTotal() {

    
    const casetotal = getInput('case-number') * 1219;
    const covertotal = getInput('cover-number') * 59;
    const subtotal = casetotal + covertotal;
    const tax = subtotal / 10;
    const total = subtotal + tax;
    //update html
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
    
    
    
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case-number', 'case-total', true, 1219);
    
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case-number', 'case-total', false,1219);
});


document.getElementById('cover-plus').addEventListener('click', function () {
    updateProductNumber('cover-number', 'cover-total',true,59);
});
document.getElementById('cover-minus').addEventListener('click', function () {
    updateProductNumber('cover-number','cover-total',false,59);
});