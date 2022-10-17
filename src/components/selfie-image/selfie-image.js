import Selfie from './headshot.jpg';
import './selfie-image.scss'

class SelfieImage {
    render() {
        const img = document.createElement('img');
        img.src = Selfie;
        img.alt = 'Selfie';
        img.classList.add('selfie-image');

        const bodyDomElement = document.querySelector('body')
        bodyDomElement.appendChild(img);
    }
}

export default SelfieImage