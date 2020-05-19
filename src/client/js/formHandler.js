async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

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
