$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});



// function rme()
// {
//     $('#button').click(function closeIFrame(){
            
//         $('#iframe').remove();
//         console.log("Inside remove");
//     });
// }
let c=0;
async function fun(){
$('#button').click(function(){ 

   if(c%2==0)
   {
    
        $('#iframeHolder').html('<iframe id="iframe" src="./chatBot/chat.html" width="700" height="450"></iframe>');
   }
   else{
    $('#iframeHolder').html('<iframe id="iframe" src="./chatBot/chat.html" width="700" height="450" style="display:none;"></iframe>');
   }

      c++;
     console.log(c);
     
    });
}

    
    



// if(c%2==0)
// {
//     if(!$('#iframe').length) {
//     c++;
//         $('#iframeHolder').html('<iframe id="iframe" src="./chatBot/chat.html" width="700" height="450"></iframe>');
// }
// else if($('#iframe').length){
//     c++;
//     $('#iframeHolder').html('<iframe id="iframe" src="./chatBot/chat.html" width="700" height="450" style="display:none;"></iframe>');
// }

// }

