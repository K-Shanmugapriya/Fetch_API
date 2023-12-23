
/*const data =
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
};*/

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then((data) => 
{
    console.log(data[0].title);
    let tableData = "";
    data.map((values)=>
    {
        tableData+= ` <tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>

      </tr>`;

    });
    document.getElementById("table_body").innerHTML = tableData;
    
     
})
.catch(error => console.log('error',error))