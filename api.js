var response = http.get('https://example.com/jsonEndpoint')

var responsePost = http.post('https://example.com/myEndpoint', {
    headers: {
        Authorization: 'Bearer MyToken'
    },
    body: JSON.stringify(
        {
            myField: "Payload"
        }
    )
})

output.script.result = json(response.body).myField.mySubField
output.script.resultPost = json(responsePost.body).myField.mySubField