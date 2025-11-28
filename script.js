document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const statusText = document.getElementById('statusText');
    let isOn = false;

    toggleButton.addEventListener('click', () => {
        isOn = !isOn;
        if (isOn) {
            toggleButton.classList.remove('off');
            toggleButton.classList.add('on');
            toggleButton.textContent = 'On';
            statusText.textContent = 'Status: On';
        } else {
            toggleButton.classList.remove('on');
            toggleButton.classList.add('off');
            toggleButton.textContent = 'Off';
            statusText.textContent = 'Status: Off';
        }
    });
});
