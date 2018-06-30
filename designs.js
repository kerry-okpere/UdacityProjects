function pixerArt() {
    // Select color input
    let color;
    // Select size input
    let height;
    let width;

    //funtion to make grid
    function makeGrid(a, b) {
        $('tr').remove();
        for (let row = 0; row < a; row++) {
      
            $("#pixelCanvas").append('<tr></tr>');
        
            for (let col = 0; col < b; col++) {
                $('tr:last').append('<td></td>');
            }
        }
    }

    // When size is submitted by the user, call makeGrid()
    $("#submit").click(function(event){
        event.preventDefault();
        height = $('#inputHeight').val();
        width =  $('#inputWeight').val();
    
        console.log(height, width);
        makeGrid(height, width);
    });

    //adds color
    $('td').click(function colors(){
        color = $('#colorPicker').val();
         
        if($(this).attr('style')){
           $(this).removeAttr('style')
        }
        else{
            $(this).attr('style', 'background-color:' + color);
        }
    });


}

$(pixerArt);
    