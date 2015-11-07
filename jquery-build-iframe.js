/*
*	===== Build an iFrame in jQuery Dialog/Modal =====
*	To build an iframe link to a modal window (after extending jQuery dialog to 'modal' class), use this code:
*	<a href="#example" class="modal iframe">Free Email</a>
*	<div id="example" style="display: none;" data-target="url-here" data-height="600" data-width="800"> </div>
*
*	If you want an auto-load dialog (with no link), use this code, making sure it has the "autoLoad" class:
*	<div id="example" class="autoLoad" style="display: none;" data-target="url-here" data-height="600" data-width="800"> </div>
*
*/

function buildIframe(href) {
	var	$href = $(href),
		extLink = $href.attr('data-target'),
		iDivHeight = $href.attr('data-height'),
		iDivWidth = $href.attr('data-width'),
		builtIframe;

	builtIframe = $('<iframe />').attr({
		'src': extLink,
		'frameborder': 0,
		'height': iDivHeight,
		'width': iDivWidth
	}).addClass('insidedialog');

	$href.append(builtIframe);
}

function iframeDialogOptions(div) {
	$('.ui-dialog').css({
		'height': 'auto',
		'width': 'auto'
	});

	$(div).dialog('option', 'position', 'center');

	$('.ui-dialog-titlebar-close').click(function () {
		$('iframe.insidedialog').remove();
	});
}

function triggerIframe(href, autoLoad) {
	buildIframe(href);

	if (autoLoad) {
		$(href).dialog();
	}

	iframeDialogOptions(href);
}

// Build when iframe comes from a link
$('.iframe').click(function () {
	var href = $(this).attr('href');

	triggerIframe(href);
});
// Build when iframe is setup as document.onload
if ($('.autoLoad')[0]) {
	var href = '#' + ($('.autoLoad').attr('id'));

	triggerIframe(href);
}