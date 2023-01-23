(async () => {
	const headerTopLeft = document.querySelector('#s-top-left');
	const btn = document.createElement('button');
	headerTopLeft.appendChild(btn);
	btn.innerHTML = 'sendMessage';
	btn.onclick = async () => {
		const response = await chrome.runtime.sendMessage({
			data: 'hello',
		});
		console.log(response);
	};

	const connectBtn = document.createElement('button');
	headerTopLeft.appendChild(connectBtn);
	connectBtn.innerHTML = 'connect';

	const port = chrome.runtime.connect({ name: 'connect' });
	port.onMessage.addListener((msg) => {
		console.log(msg);
		if (msg.bg === '你想要干什么？') {
			console.log({ cs: '我想要获取mock的值' });
			port.postMessage({ cs: '我想要获取mock的值' });
		} else if (msg.bg === '给你mock的值') {
			console.log({ cs: '谢谢background' });
			console.log(msg.data);
			port.postMessage({ cs: '谢谢background' });
		}
	});

	connectBtn.onclick = async () => {
		console.log({
			cs: 'post message',
		});
		port.postMessage({
			cs: 'post message',
		});
	};
})();
