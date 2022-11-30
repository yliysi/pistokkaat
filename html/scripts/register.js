// TODO: get municipalities from api
// This is only mockup data!
const municipalities = ["Helsinki","Vantaa","Espoo","Joensuu","Rovaniemi", "Hamina", "Elojärvi"];

const autoCompleteInputEl = document.querySelector('#autocompleteInput');
const autoCompleteIcon = document.querySelector('#autoCompleteIcon');

const onInputChange = (array) => {
    removeAutocompleteDropdown();

    // Get value from input
    const value = autoCompleteInputEl.value.toLowerCase();

    // If input's value's length is 0, create autocomplete drowdown with array
    if (value.length === 0) {
        createAutoCompleteDropDown(array);
        return;
    }

    // Create list from array with values that start the same as input's value
    const filteredArray = array.filter((item) => {
        return item.toLowerCase().startsWith(value);
    });

    createAutoCompleteDropDown(filteredArray)
}

const onButtonClick = (e) => {
    // Prevent default event
    e.preventDefault();

    // Get the button that is the target of the click event
    const buttonEl = e.target;

    // Add buttonEl's innerHTML to input's value
    autoCompleteInputEl.value = buttonEl.innerHTML;

    removeAutocompleteDropdown();
}

const createAutoCompleteDropDown = (array) => {
    // Create ul for dropdown
    const listEl = document.createElement('ul');
    listEl.className = 'autocompleteList';
    listEl.id = 'autocompleteList';

    // Foreach array to button's inside list
    array.forEach((item) => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.innerHTML = item;
        button.addEventListener('click', onButtonClick);
        listItem.appendChild(button);
        listEl.appendChild(listItem);
    });

    // Append ul list to autocompleteWrapper
    document.querySelector('#autocompleteWrapper').appendChild(listEl);
}

const removeAutocompleteDropdown = () => {
    // Get ul list
    const listEl = document.querySelector('#autocompleteList');

    // If it exists, remove it
    if (listEl) listEl.remove();
}

const addFocusToInputEl = () => {
    autoCompleteInputEl.focus();
}

autoCompleteInputEl.addEventListener('input', () => {
    onInputChange(municipalities);
});

autoCompleteInputEl.addEventListener('focusin',  () => {
    onInputChange(municipalities);
});

autoCompleteIcon.addEventListener('click', addFocusToInputEl);