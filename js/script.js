/**
 * Created by Никита on 04.11.2015.
 */
var currentElement;
var checkElement;
$(document).ready(function(){
    $(function() {
        $( ".plusbtn, .minusbtn,.editbutton, #cancel, #convert,#update" ).button();
    });
    $('body').on('click','.plusbtn',function() {
        $(".test").append('<tr><td></td><td></td><td>$</td><td><input type="button" value="Remove" class="minusbtn" id="open"/><input type="button" value="Edit" class="editbutton"/></td></tr>');
        $( ".plusbtn, .minusbtn,.editbutton, #cancel, #convert,#update" ).button();
    });

    //тут работает кнопочка 'REMOVE' и удаляет текущую строку

    $('body').on('click','.minusbtn', function() {
        $("#dialog").dialog ("open");
        checkElement = $(this);
    })

    ////тут работает кнопочка 'EDIT' которая по клику открывает формочку

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
    });

    //тут работает кнопочка 'CANCEL' в выпадающей форме и закрывает по клику форму

    $('#cancel').on('click', function(){
        $('form').hide();
    });

    ////тут работает кнопочка 'SUBMIT' и по клику апдейтит содержимое строки

    $('form').on('submit', function(e){
        e.preventDefault();
        $(currentElement.find('td')[0]).text($('#title').val());
        $(currentElement.find('td')[1]).text($('#sku').val());
        $(currentElement.find('td')[2]).text($('#price').val());
        $('form').hide();
    })

    $("div#dialog").dialog ({
        autoOpen : false,
        modal: true,
        buttons: {
            "Yeah!": function() {
                $(this).dialog("close");
                checkElement.parent().parent().remove();
            },
            "No, let it live": function() {
                $(this).dialog("close");
            }
        }
    });

    /*$('#convert').on('click', function() {
     var cols = $('#mytable th').map(function() {
     return $(this).text()
     }).slice(0,3);
     var tableJson = $('#mytable tr').map(function(i) {
     var row={};
     $(this).find('td').each(function(i) {
     var rowName = cols[i];
     row[rowName] = $(this).text();
     })
     return row;
     }).get();
     console.log(JSON.stringify(tableJson).slice(1));
     });*/

    $('#convert').click( function() {
        var table = $('#mytable').slice(0,2).tableToJSON(); // Convert the table into a javascript object
        console.log(table);
        alert(JSON.stringify(table));
    });
});