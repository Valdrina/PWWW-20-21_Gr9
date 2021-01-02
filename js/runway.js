
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

                // check(imgObj.style.left,imgObj.style.top);
            

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



        
  function myFunction() {
  var x =imgObj.style.top;
  console.log(x);
  document.getElementById("demo").innerHTML = x; 
}
            

         // function check(s,d ){
              
            
              
         //      if(s=='120px' && d =='-230px'){
         //      alert('ajvhh');

         function check(a,b){
             if(a=='-120px' && b =='-230px'){
              alert('Congratulations you have reached the hand of the owner :)');
              }
            }


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