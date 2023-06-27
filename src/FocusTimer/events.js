import { controls } from './elements.js';


export function registerControls() {
    controls.addEventListener('click', (event) => {
        console.log(event.target)
    })

}