/*
* ===== Check for Element Support =====
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