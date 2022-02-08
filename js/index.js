// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseFloat(product.querySelector('.quantity input').value)
  const subtotal = product.querySelector('.subtotal span')

  let totalPrice = price * quantity

  subtotal.innerHTML = totalPrice

  // return totalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let allProducts = document.querySelectorAll('.product');
  allProducts.forEach((singleProduct) => {
    updateSubtotal(singleProduct);
  })

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  let subtotals = document.querySelectorAll('.subtotal span')

  let netTotal = [...subtotals].reduce((totalValue, currValue) => {
    return (totalValue += parseFloat(currValue.innerHTML))
  },0)

  total.innerHTML = netTotal

//You need to return totalprice from updateSubtotal()
    // let total = 0;
    // const products = document.getElementsByClassName('product');
  
    // for (let i = 0; i < products.length; i++) {
    //   total = total + updateSubtotal(products[i]);
    // }
  
    // document.querySelector('#total-value span').innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  console.log(event.currentTarget.parentNode.parentNode)
  //... your code goes here
  target.parentNode.parentNode.remove()

  calculateAll()
}

// ITERATION 5
function createProduct() {
 // ... your code goes here
  const productName = document.querySelector('.create-product input[type="text"]')
  const productPrice = document.querySelector('.create-product input[type="number"]');
  if (!productName.value.length) {
   // console.log(productName)
  alert ("please type in name for product");
  return
}
// if (!productPrice.value) {
//   alert (" please type in price for product");
//   return
//}
  const tableBody = document.querySelector("tbody")
  const productTemp = `
  <tr class="product">
    <td class="name">
      <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`
tableBody.innerHTML += productTemp
removeBtns2()
productName.value = ''
productPrice.value = '0'


}

function removeBtns2(){
const removeBtns = document.querySelectorAll('.btn-remove')
  removeBtns.forEach((eachRmvBtn) => {
     eachRmvBtn.addEventListener('click', removeProduct);
   }) 
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // const removeBtns = document.querySelectorAll('.btn-remove')

  // removeBtns.forEach((eachRmvBtn) => {
  //   eachRmvBtn.addEventListener('click', removeProduct);
  // }) 
  removeBtns2()
  const removeBtns = document.querySelectorAll(‘.btn-remove’)
  removeBtns.forEach((eachRmvBtn) => {
     eachRmvBtn.addEventListener(‘click’, removeProduct);
   })
}
window.addEventListener(‘load’, () => {
  const calculatePricesBtn = document.getElementById(‘calculate’);
  calculatePricesBtn.addEventListener(‘click’, calculateAll);
  // const removeBtns = document.querySelectorAll(‘.btn-remove’)
  // removeBtns.forEach((eachRmvBtn) => {
  //   eachRmvBtn.addEventListener(‘click’, removeProduct);
  // })
  removeBtns2()
  const addProduct = document.getElementById(‘create’);
  addProduct.addEventListener(‘click’, createProduct);
  //... your code goes here
});