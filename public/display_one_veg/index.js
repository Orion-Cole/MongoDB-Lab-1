console.log("Display One Vegetable Page");

let containerElement = document.getElementById('container')

const getData = async (vegName) => {
    console.log('GET DATA FUNCTION ACTIVATED');
    let data = await fetch(`/veggie/${vegName}`);
    data.json().then((parsedData) => {
        console.log(parsedData);
            let pTag = document.createElement("p");
                pTag.textContent = JSON.stringify(parsedData);
          
            containerElement.appendChild(pTag);
        
    })
}

let displayOneVegButton = document.getElementById('display-one-veg-button');

displayOneVegButton.addEventListener('click', () => {
    let vegetable = document.getElementById('veg-input').value;
    getData(vegetable)
})