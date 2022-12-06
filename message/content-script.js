(async () => {
	const headerTopLeft = document.querySelector('#s-top-left');
	const btn = document.createElement('button');
	headerTopLeft.appendChild(btn);
	btn.innerHTML = 'sendMessage';
	btn.onclick = async () => {
		const response = await chrome.runtime.sendMessage({
			data: 'hello'
		});
		console.log(response);
	}
})();
