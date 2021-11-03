var timer;
document.getElementById('stopButton').disabled = true;
document.getElementById('startButton').addEventListener('click', start); 
document.getElementById('stopButton').addEventListener('click', stop); 

var selectedAnimation = document.getElementById('animation');
selectedAnimation.onchange = animationChange; 
var animationValue = selectedAnimation.options[selectedAnimation.selectedIndex].value; 
document.getElementById('size').onchange = sizeChange; 
var size = {
    tiny: '7pt',
    small: '10pt',
    medium: '12pt',
    large: '16pt',
    extraLarge: '24pt',
    xxl: '32pt'
};

var animationFontSize = size[document.getElementById('size').value]; 

document.getElementById('turbo').onchange = turboChange; 
var turboValue = 500; 

function start(){
    document.getElementById('stopButton').disabled = false;
    document.getElementById('startButton').disabled = true; 
    document.getElementById('animation').disabled = true; 
    
    var anime = ANIMATIONS[animationValue].split('====='); 
    var i = 0;
     
    function output(){
       timer= setTimeout(function(){
        if(i<anime.length){
           document.getElementById('mainText').value = anime[i];
            i++;
            output(); 
        }
        else{
            i = 0;
            output(); 
        }
        }, turboValue); 
    }

    output();   
}
function stop(){
    clearTimeout(timer);
    document.getElementById('stopButton').disabled = true;
    document.getElementById('startButton').disabled = false;
    document.getElementById('animation').disabled = false; 
    document.getElementById('mainText').value = ""; 
}
function adjustInnerText(){

}
function animationChange(){
    animationValue = selectedAnimation.options[selectedAnimation.selectedIndex].value;

}
function sizeChange(){
    animationFontSize = size[document.getElementById('size').value];
    document.getElementById('mainText').style.fontSize = animationFontSize;
}

function turboChange(){
    if(document.getElementById('turbo').checked == true)
        turboValue = 250; 
    else 
        turboValue = 500; 
}
