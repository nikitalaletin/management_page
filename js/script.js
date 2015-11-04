/**
 * Created by Никита on 04.11.2015.
 */
$(document).ready(function(){
    $('.plusbtn').on('click',function() {
        $(".test").append('<tr><td></td><td></td><td></td><td><input type="button" value="Remove" class="minusbtn"/></td></tr>');
    });
    $('body').on('click','.minusbtn', function() {
        if($(".test tr").length != 1)
        {
            $(".test tr:last-child").remove();
        }
        else
        {
            alert("You cannot delete first row");
        }
    });
});