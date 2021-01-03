
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

               if(parseInt(imgObj.style.left)> 0    ){
              imgObj.style.left = 0+'px';

                }
               imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';  
                 check(imgObj.style.left,imgObj.style.top);
           
                     
                              }
            
            function moveLeft(){
             
                  if(parseInt( imgObj.style.left)< -250 ){
              imgObj.style.left = -250+'px';
               
                }
                 
               imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
               check(imgObj.style.left,imgObj.style.top);
                // check(imgObj.style.left,imgObj.style.top);

                
               

            }
    

             function moveDown(){
            
             if(parseInt(imgObj.style.top ) > 0){
                 imgObj.style.top= 0+'px';
             }
            
               imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
                check(imgObj.style.left,imgObj.style.top);
              
             
            }
    
            function moveTop(){

                
            if(parseInt(imgObj.style.top ) < -540  ){
                 imgObj.style.top= -540+'px';
                  
             }
        
               imgObj.style.top = parseInt(imgObj.style.top)  - 10 + 'px';
                check(imgObj.style.left,imgObj.style.top); 
            
                            
       
            }
            console.log(a);

           

            window.onload =init;


         function check(a,b){
          
             if(a=='-120px' && b =='-230px'){
              alert('Congratulations you have reached the hand of the owner :)');
              disableF();
              }
                
            }


    
function displayF(){
  var p =document.getElementById("forma");
  p.style.display= "block";
}


function restart(){

 
               imgObj = document.getElementById('myImage');
               imgObj.style.position= 'relative';
               imgObj.style.left = '0px';
               imgObj.style.top ='0px';
           

               var y=imgObj.offsetTop;
            
            
           


}

function enableF(){
  document.getElementById("topB").disabled=false;
  document.getElementById("leftB").disabled=false;
  document.getElementById("rightB").disabled=false;
  document.getElementById("downB").disabled=false;

}

function disableF(){
  document.getElementById("topB").disabled=true;
  document.getElementById("leftB").disabled=true;
  document.getElementById("rightB").disabled=true;
  document.getElementById("downB").disabled=true;

}


