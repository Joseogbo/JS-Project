const clearScreen = () => {
   document.querySelector('display').value = '';
};

const backSpace = () => {
    let result = document.querySelector('.display').value;
    document.querySelector('.display').value = result.slice(0, -1);
};

const appendCharacter = (numb) => {
    document.querySelector('.display').value += numb;
};

const calculateResult = () => {
    try {
        let result = eval(document.querySelector('.display').value);
        document.querySelector('.display').value = result;
    } catch (error) {
        document.querySelector('.display').value = 'Error';
    }
};




function click(){
    alert('click')
}