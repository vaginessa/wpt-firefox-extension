
var buttons = require( 'sdk/ui/button/action' );
var tabs = require( 'sdk/tabs' );

var button = buttons.ActionButton({
	id: 'webpagetest-link',
	label: 'Test Performance',
	icon: {
	"16" : './icon-16.png',
	"48" : './icon-48.png',
	"128": './icon-128.png'
	},
	onClick: handleClick
});

function handleClick(state) {
	tabs.open( 'http://www.webpagetest.org/?url=' + encodeURIComponent( tabs.activeTab.url ) );
}
