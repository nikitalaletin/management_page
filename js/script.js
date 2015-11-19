/**
 * Created by Никита on 04.11.2015.
 */
var currentElement;
var checkElement;
$(document).ready(function(){

    $(function() {
        $( ".plusbtn, .minusbtn,.editbutton, #cancel, #convert,#update" ).button();
    });

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

    //тут работает кнопочка 'REMOVE' и запоминает текущую строку

    $('body').on('click','.minusbtn', function() {
        $("#dialog").dialog ("open");
        checkElement = $(this);
    });

    //тут работает кнопочка 'CANCEL' в выпадающей форме и закрывает по клику форму

    $('#cancel').on('click', function(){
        $('form').hide();
        currentElement=null;
        $('form [type=text], form [type=number]').val('');
    });

    ////тут работает кнопочка 'SUBMIT' и по клику апдейтит содержимое строки

    $('form').on('submit', function(e){
        e.preventDefault();
        var skus = [];
        var sku_elements = $('#mytable tr:not(:first-child) td:nth-child(2)');
        for (var i=0; i < sku_elements.length; i++ ){
            skus.push($(sku_elements[i]).text());
        }
        if ($('#title').val()=='' || $('#sku').val()=='' || $('#price').val()=='' )  alert('You have to fill all the cells');
        else if (skus.indexOf($('#sku').val()) >=0 && currentElement==null) alert ('sku values must be unique');
        else {
            if (currentElement == null) {
                currentElement = $('<tr><td></td><td></td><td></td><td><input type="button" value="Remove" class="minusbtn" id="open"/><input type="button" value="Edit" class="editbutton"/></td></tr>')
                $(".test").append(currentElement);
                $(".plusbtn, .minusbtn,.editbutton, #cancel, #convert,#update").button();
            }
                $(currentElement.find('td')[0]).text($('#title').val());
                $(currentElement.find('td')[1]).text($('#sku').val());
                $(currentElement.find('td')[2]).text($('#price').val());
                $('form').hide();
                currentElement = null;
                $('form [type=text], form [type=number]').val('');
        }
    });

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
                checkElement=null;
            }
        }
    });

    $('body').on('click','#convert', function() {
        var table = $('#mytable').tableToJSON();
        var str = JSON.stringify(table, null, 2);
        console.log(str);
        $("#dialogOne").dialog ("open");
        $("#dialogOne p").text(str);
    });

    $("div#dialogOne").dialog ({
        autoOpen : false,
        modal: true,
        width: 250,
        buttons: {
            "Ok, dude!": function() {
                $(this).dialog("close");
            }
        }
    });

    //ADD
    $('body').on('click','.plusbtn',function() {
        $('form').fadeIn('slow');
    });
});