var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');

var validName = document.getElementById("validName")
var validCategory= document.getElementById("validCategory")
var validPrice= document.getElementById("validPrice")
var validDesc= document.getElementById("validDesc")
//zbon abem loh data
var productContainer=[];
var currentIndex=0;
if(localStorage.getItem('ourproducts')!=null)
{

   productContainer= JSON.parse( localStorage.getItem('ourproducts'));
   displayProduct();

}
function add(){
  if (document.getElementById('btn').innerHTML=='Update') {
    addEdit();
  }
  else{
    addProduct()
  }
}

function addProduct() {
  
 /* if(document.getElementById('btn').innerHTML=='Update'){
    addEdit();
    
   
  }*/
  if(validationName()&&validationPrice() &&  validationCategory()&& validationDesc()){
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value
  }
    productContainer.push(product);
    
    localStorage.setItem('ourproducts', JSON.stringify( productContainer));

    console.log(productContainer);
    clearForm();
    displayProduct();
}
}


function clearForm(){

     productNameInput.value="";
     productPriceInput.value="";
     productCategoryInput.value="";
     productDescInput.value="";
}

function displayProduct(){
    var cartona=``;
    for(i=0 ; i<productContainer.length;i++){
        cartona+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick='updateItem(${i})' class="btn btn-outline-info">Update</button></td>
        <td><button onclick='deleteItem(${i})' class="btn btn-outline-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML= cartona;
    
}

/*
localstorage.setitem();// add item
localstorage.getitem(); //btrg3 item
localstorage.clear(); //btms7ha
localstorage.removeitem(); //btms7 item mo3en
localstorage.key(0);
*/


sessionStorage.setItem('name','hambozo')



function deleteItem(index){

  productContainer.splice(index,1);
  displayProduct();
  localStorage.setItem('ourproducts', JSON.stringify( productContainer));

}

function searchProduct(term){
  var cartona=``;

  for(var i=0; i<productContainer.length;i++){
    if(productContainer[i].name.toLowerCase(). includes(term.toLowerCase() )==true){
      cartona+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick='updateItem(${i}) class="btn btn-outline-info">Update</button></td>
        <td><button onclick='deleteItem(${i})' class="btn btn-outline-danger">Delete</button></td>
    </tr>`

      
    }
  }
  document.getElementById('tableBody').innerHTML= cartona;

}

function updateItem(index){
  currentIndex=index;
 productNameInput.value=productContainer[index].name;
 productPriceInput.value=productContainer[index].price;
  productCategoryInput.value=productContainer[index].category;
  productDescInput.value=productContainer[index].desc;
  document.getElementById('btn').innerHTML='Update'
  
}

function addEdit() {
  productContainer[currentIndex].name=productNameInput.value;
  productContainer[currentIndex].price=productPriceInput.value;
  productContainer[currentIndex].category=productCategoryInput.value;
  productContainer[currentIndex].desc=productDescInput.value;
  displayProduct();
  localStorage.setItem('ourproducts', JSON.stringify( productContainer));
  document.getElementById('btn').innerHTML='add product';
  clearForm();
}

function validationName(){

  var regex=/^[A-Z][a-z]{3,8}$/
  if(regex.test(productNameInput.value)){
    
    validName.style.display="none"
    return true}
  else{
    validName.style.display="block"
    return false
  }

}
function validationPrice(){

  var regex=/^[0-9]{3,5}$/
  if(regex.test(productPriceInput.value)){
    
    validPrice.style.display="none"
    return true
  }
  else{
    validPrice.style.display="block"
    return false
  }

}
function validationCategory(){

  var regex=/^[A-z][a-z]{3,5}$/
  if(regex.test(productCategoryInput.value)){
    
    validCategory.style.display="none"
    return true
  }
  else{
    validCategory.style.display="block"
    return false
  }

}
function validationDesc(){

  var regex=/^[A-z][a-z]{3,10}$/
  if(regex.test(productDescInput.value)){
    
    validDesc.style.display="none"
    return true
  }
  else{
    validDesc.style.display="block"
    return false
  }

}