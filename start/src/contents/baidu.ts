import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ['*://*.baidu.com/*'],
  all_frames: true,
  world: 'MAIN',
  run_at: 'document_start'
}

const myJSONStringify = JSON.stringify;
JSON.stringify = (obj: any) => {
	console.log('you are using JSON.stringify');
	return myJSONStringify(obj);
}

console.log('this is baidu page');
