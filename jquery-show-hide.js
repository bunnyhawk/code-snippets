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