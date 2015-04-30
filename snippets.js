/*
* ===== Async Sharing Buttons =====
*
* <a href="https://twitter.com/share" class="twitter-share-button" data-count="horizontal">Tweet</a>
* <div class="g-plusone" data-size="medium" data-count="true"></div>
* <div id="fb-root"></div>
* <div class="fb-like" data-send="false" data-layout="button_count" data-width="1" data-show-faces="false" data-action="recommend"></div>
*/
(function(doc, script) {
  var js,
	  fjs = doc.getElementsByTagName(script)[0],
	  frag = doc.createDocumentFragment(),
	  add = function(url, id) {
		  if (doc.getElementById(id)) {return;}
		  js = doc.createElement(script);
		  js.src = url;
		  id && (js.id = id);
		  frag.appendChild( js );
	  };

	// Google+ button
	add('https://apis.google.com/js/plusone.js');
	// Facebook SDK
	add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=200103733347528', 'facebook-jssdk');
	// Twitter SDK
	add('//platform.twitter.com/widgets.js');

	fjs.parentNode.insertBefore(frag, fjs);
}(document, 'script'));

/*
* ===== Async Sharing Buttons =====
* Usage:
* if (elementSupportsProp("textarea", "placeholder") {
*
* } else {
*   // fallback
*}
*/
function elementSupportsProp(element, attribute) {
	return !!(attribute in document.createElement(element));
};

/*
* ===== Generic Div Show/Hide =====
*
* <a href="# class="showHide" data-toggleClass="example">Whatever</a>
* <div class="example">
* 	Content hidden on page load.
* </div>
* <a href="#" class="showHide" data-toggleClass="second-example">Whatever</a>
* <div class="second-example">
*	Other content hidden on page load.
* </div>
*/
$('.showHide').each(function () {
	var	$this = $(this),
		$toggleEl = $("." + $(this).attr('data-toggleClass'));

	$toggleEl.hide();

	$this.on('click', function() {
		$toggleEl.slideToggle('slow');
	});
});

/*
* ===== Generic Replace Div =====
* <div class="fullPage"></div>
* Option A: <a href="image-from-the-same-domain.jpg" class="replaceDiv" data-target="fullPage" data-type="image"><img src="thumbnail.jpg" /></a>
* Option B: <a href="url-from-the-same-domain" class="replaceDiv" data-target="fullPage"><img src="thumbnail.jpg" /></a>
*/
$('a.replaceDiv').click(function(e) {
	e.preventDefault();

	var	$this = $(this),
		$pageLink = $('a.replaceDiv'),
		$target = $('.' + ($this.attr('data-target')),
		fullLink = $this.attr('href'),
		contentType = $this.attr('data-type');

	$this.hasClass('selected') ? $this.removeClass('selected') : $this.addClass('selected');

	if (contentType === "image") {
		$target.html('<img src="' + fullLink + '" />');
	} else {
		$target.load(fullLink).html();
	}
});

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