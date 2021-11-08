$( document ).ready(function() {
    handler();
});
function updateHeader(){
    setTimeout(changeOnHeader, 1000)
}
function changeOnHeader(){
    $('h2').text('Click the "S" to play')
}
function unbind(){
    $('#start, #end').off("click");
    $('.boundary, body').off('mouseenter');
    $('.boundary').css('background-color', 'rgb(231, 231, 231)');
    updateHeader();
}
function handler(){
    $('#start').on('click',function(){
        
        $('.boundary').on('mouseenter', function(){
            $(this).css('background-color', 'rgb(229, 151, 151)');
            $('h2').text('You lose!')
            alert('You Lose')
            unbind();
            handler();
        })
        $('body').on('mouseenter', function(){
            $('.boundary').css('background-color', 'rgb(229, 151, 151)');
            $('h2').text('You lose!')
            alert('You Lose')
            unbind();
            handler();
        })
        $('#end').on('click',function(){
            $('h2').text('YOU WIN!')
            unbind(); 
            handler();
        })
    })
    
}