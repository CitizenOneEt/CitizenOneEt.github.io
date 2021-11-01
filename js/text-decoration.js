var timer = null;
function alertMessage(){
    

    if (timer == null) {

            timer = setInterval(biggerFont, 500);

        } else {

            clearInterval(timer);

            timer = null;

        }

    var clickMe = document.getElementById("textArea");

    clickMe.style.fontSize = "24pt";

}
function changeAlert(){
    let attribute =  document.getElementById('bling').getAttribute('checked');
    if(document.querySelector('#bling:checked') !== null){
        document.getElementById('textArea').style.fontWeight = "bold";
        document.getElementById('textArea').style.color = "green";
        document.getElementById('textArea').style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?cs=srgb&dl=pexels-pixabay-39284.jpg&fm=jpg')"; 
       

    }else{
        document.getElementById('textArea').style.fontWeight = "normal"; 
        document.getElementById('textArea').style.color = "black";
        document.getElementById('textArea').style.textDecoration = "none";
    }
}

function biggerFont() {
  var size = parseInt(document.getElementById("textArea").style.fontSize);
  size += 2;
  document.getElementById("textArea").style.fontSize = size + "pt";
}

function delayMsg() {
  if (timer == null) {
    timer = setInterval(biggerFont, 1000);
  } else {
    clearInterval(timer);
    timer = null;
  }
}