var searchButton = document.querySelector('#search-button');

function handleSearchButtonSubmit(event){
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;

    if(!searchInputVal)
    {
      console.log("Error,please enter an animal name!");
      return;
    }

    var queryString = './search-result.html?q=' + searchInputVal + '';

    location.assign(queryString);
}

searchButton.addEventListener('click', handleSearchButtonSubmit);







//getApi(requestUrl);


//var name = 'cheetah'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/animals?name=' + name,
//     headers: { 'X-Api-Key': '26jN/1pAhjI32R0R/q6wTg==xVHTVUagb2CfoKz0'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);  
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

 var requestUrl = 'https://api.api-ninjas.com/v1/animals?name=cheetah';
 fetch(requestUrl,{
     method:'GET',
     mode: "cors",
     referrerPolicy:"no-referrer",
     redirect:"follow",
     headers: { 'X-API-KEY': '26jN/1pAhjI32R0R/q6wTg==xVHTVUagb2CfoKz0',
     'Content-Type': 'application/json',}})



     .then(function (response) {
       return response.json();
     })
    .then(function (data) {
      console.log(data)
      
    });