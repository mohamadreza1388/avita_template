$("#meno-btn").click(function () {
    $("#overlay-meno").addClass("overlay-meno-show")
})
$("#overlay-meno .fa-close").click(function () {
    $("#overlay-meno").removeClass("overlay-meno-show")
})
$('#work-samples-filter li a').click(function () {
    let className = $(this).attr('class')
    $('a.active').removeClass('active')
    $(this).addClass("active")
    if (className==="all"){
        $('.work-sample').show(500)
    }else{
        $('.work-sample').hide(500).filter("."+className).show(500);
    }

    return false;
})