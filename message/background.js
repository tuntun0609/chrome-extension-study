const mockTest = () => {
	return new Promise((reslove) => {
		reslove({
			test: 'mockTest',
		});
	})
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender);
	if (request.data === 'hello') {
		sendResponse({
			response: 'hello from background',
		});
	}
});

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	// console.log(request, sender);
// 	(async () => {
// 		const data = await mockTest();
// 		console.log(data);
// 		sendResponse(data);
// 	})();
// 	return true;
// });