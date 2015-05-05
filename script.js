$().ready(function () {
    /*$("html").niceScroll();*/
    $("#landing_content").niceScroll();
    $("#work_content").niceScroll();
    $(".section_block").niceScroll();
    $(".card-grid").flip({
        axis: 'x',
        trigger: 'click'
    });
})

function menuClick(el) {
    $('.content').hide();
    $('.content#' + el).show();
}

function serviceChoose(el) {
    $('.content').hide();
    $('.content#' + el).show();
}


function popup_show() {
    $('.popup_shadow').show();
    $('#popup').show();
}

function popup_out() {
    $('.popup_shadow').hide();
    $('#popup').hide();
}