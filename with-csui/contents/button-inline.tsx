import type {
	PlasmoCSConfig, PlasmoGetInlineAnchor
} from 'plasmo';
import cssText from 'data-text:~/contents/button.scss';

export const config: PlasmoCSConfig = {
	matches: ['https://www.baidu.com/*']
};

export const getStyle = () => {
  const style = document.createElement('style');
  style.textContent = cssText;
  return style;
};

export const getShadowHostId = () => 'plasmo-button';

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>(
  document.querySelector('.s-top-more-btn')
);

const Button = () => (
	<button onClick={() => console.log('csui btn inline')}>
		csui btn
	</button>
);

export default Button;
