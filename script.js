setInterval(function () { 
    if(document.getElementById("interval").style.display === 'none') {
        document.getElementById("interval").style.display = "flex";
        document.getElementById('second-interval').style.display = "none";  
    }
    else{
        document.getElementById("interval").style.display = "none";
        document.getElementById('second-interval').style.display = "flex";  
        document.getElementById('second-interval').style.flexDirection = "column";  
    }
    

},1000);