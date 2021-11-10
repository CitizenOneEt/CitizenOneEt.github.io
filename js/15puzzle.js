$(document).ready(function (){
    shuffle()

    $('.puzzlepiece').attr('draggable','true');
    $('.puzzlepiece').each(function(){
        $(this).addClass('draggable')
    })
    $('.puzzlepiece').each(function (){
        $(this).on('dragstart',function(){
            $(this).addClass('dragging')
    })
        $(this).on('dragend',function(){
                $(this).removeClass('dragging')
            })
        $(this).on('dragover', e=>{
            e.preventDefault();
            
            $(this).addClass('ontop')

        })  
    })


    $('button').click(function(){
        shuffle();
    })
}); 



/*

let imgs = pa() //15

for(let i of imgs) {
    get <div class="puzzlepiece">15</div>
pp = pp[i].style.bi = imgs[i]
}

if(pa.childres.lenght == 15) {
    create
} esle {
    pa.childres[15].bi = none 
}

*/



function populateArray(){
    let images = [];
    var found; 
    for(var i = 0; i < 15 ; ){
        var num = Math.floor(Math.random() * 15) + 1 
        found = false; 
        for(var j = 0; j < images.length && found == false ; j++){
            if(num === images[j])
                found = true; 
        }
        if(found == false){
            images[i] = num;
            i++; 
        }
    }
    return images;
}
function shuffle() {
    var x = 0;
    let arr = populateArray(); 
    const imageDivs = document.querySelectorAll('.puzzlepiece'); 
    for(let i = 0; i<arr.length ; i++){
        imageDivs[i].setAttribute('data', arr[i]);
        imageDivs[i].style.backgroundImage = "url(../images/puzzle/"+ arr[i] + ".jpg)"
    }
    if(imageDivs.length == 15){
        $('#puzzlearea').append('<div style="background-image: none" class="puzzlepiece"></div>')

    }else{
        imageDivs[15].style.backgroundImage = "none"
    }
     
    
    
}
