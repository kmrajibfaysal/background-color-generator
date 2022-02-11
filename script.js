window.onload = () => {
    main();
}

function main() {
    const root = document.querySelector('#root');
    const button = document.querySelector('#change-btn')

    button.addEventListener('click', function () {
        const newColor = getRandomRGBcolor();
        root.style.backgroundColor = newColor;
    })

}

function getRandomRGBcolor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

