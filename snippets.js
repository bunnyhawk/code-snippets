/* 
    ===== Generic Div Show/Hide =====

    <a href="# class="showHide" data-toggleClass="example">Whatever</a>
    <div class="example">
        Content hidden on page load.
    </div>
    <a href="#" class="showHide" data-toggleClass="second-example">Whatever</a>
    <div class="second-example">
        Other content hidden on page load.
    </div>
*/
$('.showHide').each(function () {
    var thingHidden = $(this).attr('data-toggleClass');
    $("." + thingHidden).hide();

});
$('.showHide').click(function (e) {
    e.preventDefault();
    var thingToggled = $(this).attr('data-toggleClass');
    $("." + thingToggled).slideToggle('slow');
});

/*
    ===== Generic Replace Div =====
    <div class="fullPage"></div>
    Option A: <a href="image-from-the-same-domain.jpg" class="replaceDiv" data-target="fullPage" data-type="image"><img src="thumbnail.jpg" /></a>
    Option B: <a href="url-from-the-same-domain" class="replaceDiv" data-target="fullPage"><img src="thumbnail.jpg" /></a>

*/
$('a.replaceDiv').click(function(e) {
    e.preventDefault();

    $('a.replaceDiv.selected').removeClass('selected');
    $(this).addClass('selected');

    var pageLink = $('a.replaceDiv');
    var fullLink = $(this).attr('href');
    var divTarget = $(this).attr('data-target');
    var contentType = $(this).attr('data-type');

    if (contentType === "image") {
        $('.' + divTarget).html('<img src="' + fullLink + '" />');
    } else {
        $('.' + divTarget).load(fullLink).html();
    }       
});