/* Function to GET Project Data */
const getEntry = async ( url = '')=>{

    const response = await fetch(url);
    try {
        //const allData = await response.json();
        console.log(response.json());

    }catch(error) {
    console.log("error", error);
    }
}

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")



    //getEntry('http://localhost:8081/api');

    await fetch('http://localhost:8081/api',
    {   method: 'POST',
       
        body: JSON.stringify({formText}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = `Polarity: ${data.polarity} <br>Subjectivity: ${data.subjectivity}<br>Text: ${data.text}`;
        console.log(data)
        console.log('update UI')
    }).catch(err => console.log(err))
}

export { handleSubmit }
