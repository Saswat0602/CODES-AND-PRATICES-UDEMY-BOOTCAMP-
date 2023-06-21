const form = document.querySelector('form');
const qty = document.querySelector('#qty');
const product = document.querySelector('#product');
const list = document.querySelector('#list');
        
            
form.addEventListener('submit', function (e){
    e.preventDefault();
    const productName = product.value;
    const qtyItem = qty.value;
    const li = document.createElement('LI');
        
    //this code: the second line will override the first line
    //li.innerText = product;
    //li.innerText = qty;
    //solution: join them
    li.innerText = qtyItem + " " + productName;
    list.appendChild(li);
    product.value="";
    qty.value="";
           
});