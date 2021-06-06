function hand() {
    var c5 = document.getElementById('five');
    c5.src = "";
    c5.src = "5_1.png";
}

function Black_hand() {
    var c5 = document.getElementById('five');
    c5.src = "";
    c5.src = "Shirt4/Black_hand_full.png";
    
    console.log('sdzxfcgh')
}


function blue_black_hand() {
    var c5 = document.getElementById('five');
    c5.src = "";
    c5.src = "Shirt/blue_black_sleeves.png";
}

function Pink_hand() {
    var c5 = document.getElementById('five');
    c5.src = "";
    c5.src = "Shit3/Pink_full.png";
}


function  light_blue_hand()
{
    var c5 = document.getElementById('five');
    c5.src = "";
    c5.src = "blue_light/long_ligth_blue.png"; 
}


function  hand_red_black()
{
    var c5 = document.getElementById('five');
    c5.src = "";
    c5.src = "red_black/long.png"; 
}


function hand_Dark_blue()
{
    var c1 = document.getElementById('five');
    c1.src = "";
    c1.src = "Dark_blue/long.png"
}

//==================================================collar===================================================

function collar() {
    var c1 = document.getElementById('one');
  
    c1.src = "";
    c1.style.zIndex=30000;
    c1.src = "./Pink/bsc-collar-spread-eagle.png"
    
}

function light_blue_collar() {
    var c1 = document.getElementById('one');
    c1.src = "";
    c1.src = "blue_light/collar_light_blue.png"
}

function blue_black_collar() {
    var c1 = document.getElementById('one');
    c1.src = "";
    c1.src = "blue_black_collar.png"
}


function black_collar() {
    var c1 = document.getElementById('one');
    c1.src = "";
    c1.src = "Shirt4/bsc-collar-prince-charile.png";
}


function collar_red_black()
{
    var c1 = document.getElementById('one');
    c1.src = "";
    c1.src = "red_black/collar.png"
}

function collar_Dark_blue()
{
    var c1 = document.getElementById('one');
    c1.src = "";
    c1.src = "Dark_blue/collar.png"
}

//========================================================= cuff========================================


let black_cuff = () => {
    var c1 = document.getElementById('four');
    c1.src = "";
    c1.style.zIndex=30000000;
    c1.src = "./Pink/bsc-cuff-single-button.png"
}



function light_blue_cuff() {
    var c1 = document.getElementById('four');
    c1.src = "";
    c1.src = "blue_light/cuff.png"
}

function cuff_red_black()
{
    var c1 = document.getElementById('four');
    c1.src = "";
    c1.src = "red_black/cuff.png"  
}

function cuff_Dark_blue()
{
    var c1 = document.getElementById('four');
    c1.src = "";
    c1.src = "Dark_blue/cuff.png"    
}



//======================================================= BODY========================================================

function body_light_blue()
{
    var c2=document.getElementById('two');
    c2.src="";
    c2.src="blue_light/bottom.png"
}

function body_red_black()
{
    var c2=document.getElementById('two');
    c2.src="";
    c2.src="red_black/body.png"
}


function body_Dark_blue()
{
    //https://www.bombayshirts.com/products/navy-stretch-poplin?customisable=true


    var c2=document.getElementById('two');
    c2.src="";
    c2.src="Dark_blue/body.png"
}


function collar_show()
{
    let section_body=document.querySelector('#Body_visible');
    let section_cuff=document.querySelector('#cuff_visible');
    let section_hand=document.querySelector('#Body_visible');
    let section_collar=document.querySelector('#collar_visible');
    section_collar.style="display:flex";
   
    section_cuff.style="display:none";
     section_hand.style="display:none";
     section_body.style="display:none";
}
function cuff_show(){
 
    
    
    let section_body=document.querySelector('#Body_visible');
    let section_cuff=document.querySelector('#cuff_visible');
    let section_hand=document.querySelector('#Body_visible');
    let section_collar=document.querySelector('#collar_visible');
    section_cuff.style="display:flex";
    section_collar.style="display:none"; 
    
     section_hand.style="display:none";
     section_body.style="display:none";
}


function hand_show(){
    let section_body=document.querySelector('#Body_visible');
    let section_cuff=document.querySelector('#cuff_visible');
    let section_hand=document.querySelector('#hand_visible');
    let section_collar=document.querySelector('#collar_visible');
    section_hand.style="display:flex";

    section_collar.style="display:none"; 
    section_cuff.style="display:none";
     section_body.style="display:none";
}

function body_show(){

    let section_body=document.querySelector('#Body_visible');
    let section_cuff=document.querySelector('#cuff_visible');
    let section_hand=document.querySelector('#Body_visible');
    let section_collar=document.querySelector('#collar_visible');
    section_body.style="display:flex";
    section_cuff="display:none";
    section_hand="display:none";
    section_collar="display:none";


    
}
