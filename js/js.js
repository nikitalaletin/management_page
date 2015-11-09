/**
 * Created by MLalietin on 05.11.15.
 */
$(function() {
    $("#dialog").dialog({
        autoOpen: false
    });
    $("#button").on("click", function() {
        $("#dialog").dialog("open");
    });
});