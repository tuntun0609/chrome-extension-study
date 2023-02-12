import url from 'url:~content/baidu'

export {};

console.log('this is background powered by plamso', url.split("/").pop().split("?")[0]);

chrome.scripting.registerContentScripts([
	{
			"id": "csInMainWorld",
			"js": [url.split("/").pop().split("?")[0]],
			"matches": [
				"*://*.google.com/*"
			],
			"allFrames": true,
			"world": "MAIN",
			"runAt": "document_start"
	}
]);