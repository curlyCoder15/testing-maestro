var response = http.get('https://raw.githubusercontent.com/curlyCoder15/test/master/ejected.json')

// var responsePost = http.post('https://example.com/myEndpoint', {
//     headers: {
//         Authorization: 'Bearer MyToken'
//     },
//     body: JSON.stringify(
//         {
//             myField: "Payload"
//         }
//     )
// })

output.result = json(response.body).email
// output.script.resultPost = json(responsePost.body).myField.mySubField