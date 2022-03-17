function showClass(){
    let elem=document.getElementsByClassName("blue");
    for(let key of elem){
        key.style="background-color:green";
    }
    document.getElementById("lorem").style="background-color:pink";
}

