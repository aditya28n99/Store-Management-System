

let Orders = new XMLHttpRequest();
Orders.open("Get","https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",true);
Orders.send();

let totalOrders;
Orders.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        console.log("API req Succcess");
        console.log("API req Succcess");
        totalOrders = JSON.parse(this.response);

        for(let i = 0; i<totalOrders.length; i++){

            generatOrders(
                totalOrders[i].id,
                totalOrders[i].customerName,
                totalOrders[i].orderDate,
                totalOrders[i].amount,
                totalOrders[i].orderStatus
            );
            
        }
    }
    else{
        console.log("NOT successs")
    }
}

const tbody = document.querySelector("tbody.T-body");
const countOrder = document.getElementById("Count-orders");
let count = 1;
generatOrders = (id, name, date, amount, state)=>{
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let td1 = document.createElement("td");
    td1.innerText = id;
    let td2 = document.createElement("td");
    td2.innerText = name;
    let td3 = document.createElement("td");
    td3.innerText = date;
    let td4 = document.createElement("td");
    td4.innerText = amount;
    let td5 = document.createElement("td");
    td5.innerText = state;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    countOrder.innerHTML = count;
    count++;
}
