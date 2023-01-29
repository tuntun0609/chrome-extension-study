import type { PlasmoContentScript } from "plasmo"
 
export const config: PlasmoContentScript = {
  matches: ['*://*.baidu.com/*'],
  all_frames: true,
}

console.log('this is baidu page');
