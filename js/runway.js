
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

              check(imgObj.style.left,imgObj.style.top);
               imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
                if(parseInt(imgObj.style.left)> 10    ){
              imgObj.style.left = 10+'px';

                }
                


                 
                              
                     
                              }
            
            function moveLeft(){
              check(imgObj.style.left,imgObj.style.top);
               imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
                // check(imgObj.style.left,imgObj.style.top);

                  if(parseInt( imgObj.style.left)< -250 ){
              imgObj.style.left = -250+'px';
               
                }
                
               

            }
    

             function moveDown(){
              check(imgObj.style.left,imgObj.style.top);
               imgObj.style.top =parseInt(imgObj.style.top) + 10 + 'px';
              
             
             if(parseInt(imgObj.style.top ) > 0){
                 imgObj.style.top= 0+'px';
             }
             
            }
    
            function moveTop(){
                check(imgObj.style.left,imgObj.style.top); 
               imgObj.style.top = parseInt(imgObj.style.top)  - 10 + 'px';
  if(parseInt(imgObj.style.top ) < -540  ){
                 imgObj.style.top= -540+'px';
                  
             }
            
                            
       
            }
            console.log(a);

           

            window.onload =init;



        
      

         // function check(s,d ){
              
            
              
         //      if(s=='120px' && d =='-230px'){
         //      alert('ajvhh');

         function check(a,b){
             if(a=='-120px' && b =='-230px'){
              alert('Congratulations you have reached the hand of the owner :)');
              }

              if(parseInt(a)> 10 || parseInt(a)< -250 || parseInt(b) > -540 || parseInt(b)> 0) {

              }


            }


    
function displayF(){
  var p =document.getElementById("forma");
  p.style.display= "block";
}


