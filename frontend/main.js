const inputText = document.getElementById('inputText');
const myDialog = document.getElementById('myDialog');
const outputText = document.getElementById('outputText');
const closeDialog = document.getElementById('closeDialog');
const changeColor = document.getElementById('changeColor');
let colorState = 0;

inputText.addEventListener('keypress', async (e) => {

    if (e.key === 'Enter') {
        const text = inputText.value;
        inputText.value = '';

        try {

            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            });

            const data = await response.json();
            outputText.textContent = data.text;

            myDialog.showModal();

        } catch (error) {
            console.error('Error:', error);
        };
    };
});

changeColor.addEventListener('click', () => {
    colorState = (colorState + 1) % 3;

    switch (colorState) {
        case 0:
            myDialog.style.backgroundColor = '';
            myDialog.style.color = '';
            break;
        case 1:
            myDialog.style.backgroundColor = 'grey';
            myDialog.style.color = 'white';
            break;
        case 2:
            myDialog.style.backgroundColor = 'lightblue';
            myDialog.style.color = 'red';
            break;
    };
});

closeDialog.addEventListener('click', () => {
    myDialog.close();
});