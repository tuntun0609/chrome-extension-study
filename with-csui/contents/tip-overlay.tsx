import cssText from 'data-text:~/contents/tip.scss';
import type {
	PlasmoCSConfig, PlasmoGetOverlayAnchor,
	PlasmoWatchOverlayAnchor
} from 'plasmo';

// 直接向网页注入的css
import './injectCss.scss';

export const config: PlasmoCSConfig = {
	matches: ['https://www.baidu.com/*']
};

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () => (
	document.querySelector('.s_btn_wr')
);

export const watchOverlayAnchor: PlasmoWatchOverlayAnchor = (
  updatePosition
) => {
  const interval = setInterval(() => {
    updatePosition()
  }, 200);
  
  return () => {
    clearInterval(interval);
  };
};

export const getStyle = () => {
  const style = document.createElement('style');
  style.textContent = cssText;
  return style;
};

export const getShadowHostId = () => 'plasmo-tip';

const Tip = () => {
  return (
    <div id='tip'>
			tip
    </div>
  );
};

export default Tip;
