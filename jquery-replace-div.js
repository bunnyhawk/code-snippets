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