  var imgObj ;
  var a;
           function init(){
               imgObj = document.getElementById('myImage');
               imgObj.style.position= 'relative';
               imgObj.style.left = '0px';
               imgObj.style.top ='0px';
           

               var y=imgObj.offsetTop;
            }   
                    
            function moveRight(){
               imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
                 check(imgObj.style.left,imgObj.style.top);
                              }
            
            function moveLeft(){
               imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
                check(imgObj.style.left,imgObj.style.top);
               
            }
    

             function moveDown(){
               imgObj.style.top =parseInt(imgObj.style.top) + 10 + 'px';
              check(imgObj.style.left,imgObj.style.top);

            }
    
            function moveTop(){
               imgObj.style.top = parseInt(imgObj.style.top)  - 10 + 'px';
               check(imgObj.style.left,imgObj.style.top);
                               
            }

             console.log(a);

            window.onload =init;
this.a;
var s= this;
         
         if( a=='-10px'){
            alert('a');
         }


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
            
         function check(a,b){
             if(a=='-120px' && b =='-230px'){
              alert('Congratulations you have reached the hand of the owner :)');
              }

         }




          
            
