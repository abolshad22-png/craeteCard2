

function Seton(e) {
    e.preventDefault();

    
    const name1 = document.getElementById("name").value;
    const num = document.getElementById("num").value;
    const cvv = document.getElementById("cvv").value;
    const date = document.getElementById("time").value;
    const color = document.getElementById("color").value;
    const textarea = document.getElementById("inpdes").value;
    const color2 = document.getElementById("color2").value;
    const color3 = document.getElementById("textcolor").value;

    document.getElementById("dateplace").innerHTML = date;
    document.getElementById("numplace").innerHTML = num;
    document.getElementById("nameplace").innerHTML = name1;
    document.getElementById("cvvval").innerHTML = cvv;
    document.getElementById("frontcard").style.cssText=`background : linear-gradient( ${color} , ${color2} )`;
    document.getElementById("backcard").style.cssText=`background : linear-gradient( ${color} , ${color2} )`;
    document.getElementById("des").innerText=textarea;
    document.getElementById("allcard").style.cssText=`color : ${color3};`;
    document.getElementById("numplace").style.cssText=`color : ${color3};`;
    document.getElementById("des").style.cssText=`color : ${color3};`;
}

document.getElementById("form").addEventListener("submit", Seton);

function Back(e) {
    e.preventDefault();

    document.getElementById("frontcard").classList.toggle("add")
}

document.getElementById("rotbtn").addEventListener("click" , Back)