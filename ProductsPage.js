




let Products = new XMLHttpRequest();
Products.open("Get","https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",true);
Products.send();

let totalProducts;
Products.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        
        alert("Api succs")
        totalProducts = JSON.parse(this.response);

        for(let i = 0; i<totalProducts.length; i++){

            generatProducts(
                totalProducts[i].id,
                totalProducts[i].medicineName,
                totalProducts[i].medicineBrand,
                totalProducts[i].expiryDate,
                totalProducts[i].unitPrice,
                totalProducts[i].stock
            );
            
        }
    }
    else{
        console.log("NOT successs")
    }
}

const tbody = document.querySelector("tbody.t-body");
const countOrder = document.getElementById("Count-orders");
let count = 1;
generatProducts = (id, name, brand, date, amount, stock)=>{
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let td1 = document.createElement("td");
    td1.innerText = id;
    let td2 = document.createElement("td");
    td2.innerText = name;
    let td3 = document.createElement("td");
    td3.innerText = brand;
    let td4 = document.createElement("td");
    td4.innerText = date;
    let td5 = document.createElement("td");
    td5.innerText = amount;
    let td6 = document.createElement("td");
    td6.innerText = stock;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    countOrder.innerHTML = count;
    count++;
}
