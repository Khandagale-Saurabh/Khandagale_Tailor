   function showOrHideDiv()
    {
      var v = document.getElementById('main');
      var v1 = document.getElementById('back');
      if (v.style.display === 'none')
          {
              v.style.display = 'block';
              v1.style.display="none";
          } 
          else
           {
         v.style.display = 'none';
         v1.style.display="block";
          }
   }

function change()
{
   var c1=document.getElementById('one');
   var c2=document.getElementById('two');
   var c3=document.getElementById('three');
   var c4=document.getElementById('four');
   var c5=document.getElementById('five');
   var c6=document.getElementById('six');
   c1.src="";
   c2.src="";
   c3.src="";
   c4.src="";
   c5.src="";
   c6.src="";
     c1.src='7.png';
c2.src='8.png';
   // if(c1.src.match('1.png'))
   // {
   //     c1.src='7.png';
       
   // }

   // if(c2.src.match('2.png'))
   // {
   //    c2.src='8.png';
   // }
   // if(c3.src.match('3.png'))
   // {
   //    c3.src="";
      
   // }
   //  if(c4.src.match('4.png'))
   // {
   //    c4.src="";
      
   // }
   //  if(c5.src.match('5.png'))
   // {
   //    c5.src="";
      
   // }
   //  if(c6.src.match('6.png'))
   // {
   //    c6.src="";
      
   // }  
}

function Front()
{
    var c1=document.getElementById('one');
   var c2=document.getElementById('two');
   var c3=document.getElementById('three');
   var c4=document.getElementById('four');
   var c5=document.getElementById('five');
   var c6=document.getElementById('six');
   c1.src="";
   c2.src="";
   c3.src="";
   c4.src="";
   c5.src="";
   c6.src="";
   c1.src="1.png";
   c2.src="2.png";
   c3.src="3.png";
   c4.src="4.png";
   c5.src="5.png";
   c6.src="6.png";
   
}
function change_hand()
{
   alert("Hello");
    var c5=document.getElementById('five');
    c5.src="";
   c5.src="5_2.png";
   

}

