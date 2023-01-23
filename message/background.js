const mockTest = () => {
	return new Promise((reslove) => {
		reslove({
			data: 'mockTest',
		});
	});
};

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	console.log(request, sender);
// 	if (request.data === 'hello') {
// 		sendResponse({
// 			response: 'hello from background',
// 		});
// 	}
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	// console.log(request, sender);
	(async () => {
		if (request.data === 'hello') {
			const data = await mockTest();
			console.log(data);
			sendResponse(data);
		}
	})();
	return true;
});

chrome.runtime.onConnect.addListener((port) => {
	console.log(port);
	port.onMessage.addListener(async (msg) => {
		if (msg.cs === 'post message') {
			port.postMessage({ bg: '你想要干什么？' });
		} else if (msg.cs === '我想要获取mock的值') {
			const data = await mockTest();
			port.postMessage({
				bg: '给你mock的值',
				data: data,
			});
		} else if (msg.cs === '谢谢background') {
			port.postMessage({ bg: '不客气' });
		}
	});
});
