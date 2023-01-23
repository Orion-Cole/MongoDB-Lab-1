console.log("js file connected");


let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () => {
    // send a request to Express 
    // result is the response from the server
    // get element
    // let nameElement = document.getElementById('name-input')
    // // get value of element
    // let nameString = nameElement.value;

    let nameString = document.getElementById('name-input').value;
    let colorString = document.getElementById('color-input').value;
    let ageNumber = +document.getElementById('age-input').value;
    let readyBool = document.getElementById('ready-bool').value === "true" ? true : false;

    // packing all our data in an object
    // same as 
    // nameString: nameString
    const fruit = {
        nameString,
        colorString,
        ageNumber,
        readyBool
    }

    let response = await fetch('http://localhost:5000/create_fruit', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        // to send JSON data over HTTP
        body: JSON.stringify(fruit)
    })
    let uploadStatusTag = document.getElementById('upload-status');
    console.log(response.status);
    if (response.status === 200) {
        console.log(response);
        console.log("upload complete!!!");
        uploadStatusTag.textContent = "Upload Completed";
        uploadStatusTag.style.color = "green";

    } else {
        console.log(response);
        console.log("upload failed");
        console.log;
        uploadStatusTag.textContent = "Upload Failed";
        uploadStatusTag.style.color = "red";

    }

    // axios({
    //     method: "post",
    //     url: "'http://localhost:5000/create_fruit'",
    //     body: fruit
    // })

})

let deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', async () => {
   let response = await fetch('http://localhost:5000/delete_nameless_data', {
        method: "delete",
    });
    // console.log(response);

    let parsedData = await response.json()
    console.log(parsedData);
});



let displayFruitButton = document.getElementById('display-fruit-button');

displayFruitButton.addEventListener('click', () => {
    // change HTML files (from index to display_fruit.html)
    window.location.href = "./display_fruit"
})

let displayVegButton = document.getElementById('display-veg-button');

displayVegButton.addEventListener('click', () => {
    // change HTML files (from index to display_veg.html)
    window.location.href = "./display_veg"
})

let displayOneVegButton = document.getElementById('display-one-veg-button');

displayOneVegButton.addEventListener('click', () => {
    window.location.href = "./display_one_veg"
})

let createVegButton = document.getElementById('create-veg-button');

createVegButton.addEventListener('click', () => {
    window.location.href = "./create_veg"
})