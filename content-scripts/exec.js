console.log('exec js');
let test = 'test tun';

console.log(document.querySelector('#su')?.value);

const myJSONStringify = JSON.stringify;
JSON.stringify = (obj) => {
	console.log('you are using JSON.stringify');
	return myJSONStringify(obj);
}

// console:
// 	console.log(JSON.stringify({aaa: 1}))
// log: (world: 'MAIN')
//	you use JSON.stringify
// 	{"aaa":1}