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