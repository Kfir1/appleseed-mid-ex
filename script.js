setInterval(function () { 
    if(document.getElementById("interval").style.display === 'none') {
        document.getElementById("interval").style.display = "block";
        document.getElementById('second-interval').style.display = "none";  
    }
    else{
        document.getElementById("interval").style.display = "none";
        document.getElementById('second-interval').style.display = "flex";  
        document.getElementById('second-interval').style.flexDirection = "column";  
    }
  

},2000);



// setInterval(function () { 
   

//     setTimeout(function(){ 
        
       
//         document.getElementById("interval").style.display = "none";
//         document.getElementById("third-interval").style.display = "none";
//         document.getElementById('second-interval').style.display = "block";  
//         document.getElementById('second-interval').style.display = "flex";  
//         document.getElementById('second-interval').style.flexDirection = "column";  
   
    

    
//         }, 2000);
//     setTimeout(function(){ 
        
       
//                 document.getElementById("interval").style.display = "none";
//                 document.getElementById("third-interval").style.display = "none";
//                 document.getElementById('second-interval').style.display = "block";  
//                 document.getElementById('second-interval').style.display = "flex";  
//                 document.getElementById('second-interval').style.flexDirection = "column";  
           
            
   
            
//          }, 2000);
        
//          setTimeout(function(){ 
//             document.getElementById("interval").style.display = "none";
//             document.getElementById("second-interval").style.display = "none";
//             document.getElementById('third-interval').style.display = "flex";  
//             document.getElementById('third-interval').style.flexDirection = "column"; 
//             document.getElementById('third-interval').style.display = "block";
//         }, 2000);

//         document.getElementById("interval").style.display = "block";
//         document.getElementById("third-interval").style.display = "none";
//         document.getElementById("second-interval").style.display = "none";
// },2000);






// setInterval (function () {
// var intervals = ["interval", "second-interval", "third-interval"];
// for(var i=0; i<3;i++){
    
//     document.getElementById(intervals[i]).style.display = "block";
//     document.getElementById(intervals[i]).style.display = "flex";
//     document.getElementById(intervals[i]).style.flexDirection = "column";
// if(i===2){
//     i=0;
// }

// }

// },1000);


// function timedText() {
//     var x = document.getElementById("interval");
//     var y = document.getElementById("second-interval");
//     var z = document.getElementById("third-interval");
//     setTimeout(function(){ x.style.display="block" }, 1000);
//     setTimeout(function(){ y.style.display="block" }, 1000);
//     setTimeout(function(){ z.style.display="block" }, 1000);
//   }


// css email validation
// function submittedForm(){
//     document.getElementById("form").className += 'form-submitted'; 