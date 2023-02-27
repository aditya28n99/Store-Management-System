

let Users = new XMLHttpRequest();
Users.open("Get","https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",true);
Users.send();

let totalUsers;
Users.onreadystatechange = function(){

    if(this.status == 200 && this.readyState == 4){ 

        totalUsers = JSON.parse(this.response);
        for(let i = 0; i<totalUsers.length; i++){

            generatProducts(
                totalUsers[i].id,
                totalUsers[i].profilePic,
                totalUsers[i].fullName,
                totalUsers[i].dob,
                totalUsers[i].gender,
                totalUsers[i].currentCity,
                totalUsers[i].currentCountry
            ); 
        }
    }
    else{
        console.log("NOT successs");
        // let LodingGif = document.createElement("img");
        // LodingGif.src = "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif";
        // LodingGif.className = "Loding-gif";
        // let lodDiv = document.getElementById("lod");
        // lodDiv.appendChild(LodingGif);
    }
}

const tbody = document.querySelector("tbody.t-body");


generatProducts = (id, avtar, name, dob, gender,city, location)=>{
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let td1 = document.createElement("td");
    td1.innerText = id;
    let td2 = document.createElement("td");
    let tdimg = document.createElement("img");
    tdimg.src = avtar;
    let td3 = document.createElement("td");
    td3.innerText = name;
    let td4 = document.createElement("td");
    td4.innerText = dob;
    let td5 = document.createElement("td");
    td5.innerText = gender;
    let td6 = document.createElement("td");
    td6.innerText = city +","+ location;

    tr.appendChild(td1);
    tr.appendChild(td2);
    td2.appendChild(tdimg);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
}

        
