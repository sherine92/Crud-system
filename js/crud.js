var ProductName =document.getElementById("ProductName")
var ProductPrice =document.getElementById("ProductPrice")
var ProductCategory =document.getElementById("ProductCategory")
var ProductDescription =document.getElementById("ProductDescription")
var mainbtn=document.getElementById("mainbtn")



var products=[]
function addProduct() {
   var product ={
       Name:ProductName.value,
       Price:ProductPrice.value,
       Category:ProductCategory.value,
       Description:ProductDescription.value,
   }
   products.push(product)
   displayData()
   clear()
}
function clear() {
    ProductName.value=""
    ProductPrice.value=""
    ProductCategory.value=""
    ProductDescription.value=""
}
function displayData() {
    var cartoona=``;
    for (var i = 0; i < products.length; i++) {
      cartoona += ` <tr>
      <td>${i}</td>
      <td>${products[i].Name}</td>
      <td>${products[i].Price}</td>
      <td>${products[i].Category}</td>
      <td>${products[i].Description}</td>
      <td><button onclick="update(${i})" class="btn btn-danger">Update</button></td>
      <td><button onclick="deleteproduct(${i})" class="btn btn-warning">Delete</button></td>
      </tr>` ; 
        
    }
   document.getElementById("demo").innerHTML=cartoona;
}
function deleteproduct(productindex) {
    products.splice(productindex,1)
    displayData() 
}
function update(productindex) {
    ProductName.value = products[productindex].Name
    ProductPrice.value = products[productindex].Price
    ProductCategory.value = products[productindex].Category
    ProductDescription.value = products[productindex].Description

    mainbtn.innerHTML="updata"
   
}
