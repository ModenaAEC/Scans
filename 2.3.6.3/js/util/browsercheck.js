/**
 * @fileOverview This file contains checks to figure out if the browser is capable of using WebShare
 * @author DF
 */

// Try to create a canvas element. If it fails, the browser is not supported.	
if (!!document.createElement('canvas').getContext) {
	// browser supported, nothing to do
} else {
	// Redirect to error page in same tab.
	// We use F_WEB_PREFIX_LOCAL instead of F_WEB_PREFIX to avoid having a CloudFront URL in the address bar.
	window.open(window.F_WEB_PREFIX_LOCAL + "partials/unsupportedbrowser.html", "_self");
}

if (window.WS2GO) {
	if (window.location.protocol && window.location.protocol.indexOf('file:') === 0) {
		// Check if the browser supports Ajax requests to file:// URLs.
		$.ajax({
			method: "GET",
			url: "ws2go.html",
			dataType: "html"
		}).done(function() { 
		}).fail(function() {
			console.log('AJAX request to file:// URL failed. WebShare 2 Go not supported.');
			window.open(window.F_WEB_PREFIX_LOCAL + "partials/unsupportedbrowser_fileurl.html", "_self");
		});
	}
}
