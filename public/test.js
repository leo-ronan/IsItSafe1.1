$(document).ready(function() {
    $(document).on("click", function(event){
        console.log(event);
        var hey = $(".leaflet-popup-content").html();
        console.log(hey);
    });
})