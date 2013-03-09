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

/*
    ===== Build an iFrame in jQuery Dialog/Modal =====
    To build an iframe link to a modal window (after extending jQuery dialog to 'modal' class), use this code:
    <a href="#example" class="modal iframe">Free Email</a>
    <div id="example" style="display: none;" data-target="url-here" data-height="600" data-width="800"> </div>

    If you want an auto-load dialog (with no link), use this code, making sure it has the "autoLoad" class:
    <div id="example" class="autoLoad" style="display: none;" data-target="url-here" data-height="600" data-width="800"> </div>

*/
var buildIframe = function (href) {
    var extLink = $(href).attr('data-target');
    var iDivHeight = $(href).attr('data-height');
    var iDivWidth = $(href).attr('data-width');

    var builtIframe = $('<iframe />').attr({
        'src': extLink,
        'frameborder': 0,
        'height': iDivHeight,
        'width': iDivWidth
    }).addClass('insidedialog');
    $(href).append(builtIframe);
}

var iframeDialogOptions = function (div) {       
    $('.ui-dialog').css({
        'height': 'auto',
        'width': 'auto'
    });
    $(div).dialog('option', 'position', 'center');
    $('.ui-dialog-titlebar-close').click(function () {
        $('iframe.insidedialog').remove();
    });
}

// Build when iframe comes from a link
$('.iframe').click(function () {
    var href = $(this).attr('href');

    buildIframe(href);
    iframeDialogOptions(href);
});
// Build when iframe is setup as document.onload
if ($('.autoLoad')[0]) {
    var autoLoadTarget = $('.autoLoad').attr('id');
    var href = '#' + autoLoadTarget;

    buildIframe(href);
    $(href).dialog();
    iframeDialogOptions(href);
}