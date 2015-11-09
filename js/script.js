/**
 * Created by Никита on 04.11.2015.
 */
var currentElement;

$(document).ready(function(){

    $(function() {
        $("#dialog").dialog({
            autoOpen: false
        });
        $("#button").on("click", function() {
            $("#dialog").dialog("open");
        });
    });


    $('body').on('click','.plusbtn',function() {
        $(".test").append('<tr><td></td><td></td><td>$</td><td><input type="button" value="Remove" class="minusbtn"/><input type="button" value="Edit" class="editbutton"/></td></tr>');
    });

    $('body').on('click','.minusbtn', function() {
                $(this).parent().parent().remove();
    })


    $('body').on('click','.editbutton', function(e){
        var elem = $(e.target).parents('tr');
        currentElement=elem;
        var titleText=$(elem.find('td')[0]).text();
        var skuText=$(elem.find('td')[1]).text();
        var priceText=$(elem.find('td')[2]).text();
        $('#title').val(titleText);
        $('#sku').val(skuText);
        $('#price').val(priceText);
        $('form').fadeIn('slow');
    })

    $('#cancel').on('click', function(){
        $('form').hide();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        $(currentElement.find('td')[0]).text($('#title').val());
        $(currentElement.find('td')[1]).text($('#sku').val());
        $(currentElement.find('td')[2]).text($('#price').val());
        $('form').hide();
    })
});