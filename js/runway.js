
  var imgObj ;
           function init(){
               imgObj = document.getElementById('myImage');
               imgObj.style.position= 'relative';
               imgObj.style.left = '0px';
               imgObj.style.top ='0px';
           

               var y=imgObj.offsetTop;
            }   
                    var a;
            function moveRight(){
               imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
               a= imgObj.style.left;
                              }
            
            function moveLeft(){
               imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
                // check(imgObj.style.left,imgObj.style.top);
               if(imgObj.style.left =='-120px'){
                alert("go on");

               }
               return imgObj.style.left;
 
            }
    

             function moveDown(){
               imgObj.style.top =parseInt(imgObj.style.top) + 10 + 'px';
      
            }
    
            function moveTop(){
               imgObj.style.top = parseInt(imgObj.style.top)  - 10 + 'px';
        
              
              if(imgObj.style.top =='-230px'){
                // alert("yay");

               }
                 
              return imgObj.style.top;

 
                    
            }

           

            window.onload =init;


// function largeFunction(n){
//         if(n==='-10px'){
//                 alert("you are in the right spot!");}
//                 console.log(n);
// }




// (function(){
//   largeFunction();
// })(window.getComputedStyle( imgObj ).left)


        
               function myFunction() {
  var x =imgObj.style.top;
  console.log(x);
  document.getElementById("demo").innerHTML = x; 
}
            
         // function check(s,d ){
              
            
              
         //      if(s=='120px' && d =='-230px'){
         //      alert('ajvhh');
         //      }

         // }

function displayF(){
  var p =document.getElementById("forma");
  p.style.display= "block";
}


// function mathCalc(){
//  var m = Math.PI;
//  return Math.round(m)*Math.sin(90 * m/ 180)*Math.cos(0 * m / 180)*Math.max(0,1)*Math.min(1,2)*766666.667;
// }

// document.getElementById("visitors").innerHTML = mathCalc();