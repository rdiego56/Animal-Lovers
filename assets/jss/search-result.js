var resultTextEl1 = document.querySelector('#result-text1');
var resultContentEl1 = document.querySelector('#result-content1');
var resultTextEl2 = document.querySelector('#result-text1');
var resultContentEl2 = document.querySelector('#result-content1');
var searchFormEl = document.querySelector('#search-form');



//Get the query value, which is whatever animal the user searched for
function getQuery()
{
    var searchQuery = document.location.search.split('?');

    var query = searchQuery[1].split('=').pop();

    searchApi1(query);
    searchApi2();
}

//Fetch the datas from the Api
function searchApi1(query)
{
    var ninjasApi = 'https://api.api-ninjas.com/v1/animals?name='+query;
    fetch(ninjasApi,{
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
        resultTextEl1.textContent = query;
         console.log(data)
         for(var i = 0;i < 5;i++){
         console.log(data[i]);
         printResult1(data[i]);
        }
         
       });
}

function printResult1(resultObject)
{
    var resultCard = document.createElement('div');

    var resultBody = document.createElement('div');

    

    var nameEl = document.createElement('h3');
    var characteristicEl = document.createElement('p');
    var locationEl = document.createElement('p');

    console.log(resultObject.characteristics);
    if(resultObject.name){
        nameEl.innerHTML = "Name:"+ resultObject.name;
    }
    else{
        nameEl.innerHTML = "No name for this animal"
    }
    var peculiarity='';
    if(resultObject.characteristics){
        //for(var i = 0; i< resultObject.characteristics.length;i++){
        //var peculiarity = peculiarity + ',' + resultObject.characteristics[i];}
        
        for(const key in resultObject.characteristics){
       // characteristicEl.innerHTML = resultObject.characteristics;
            //console.log(key);
            //console.log(resultObject.characteristics[key]);
            
             peculiarity = peculiarity + key +': '+ resultObject.characteristics[key] + ', ';
             console.log(peculiarity);
        }
        characteristicEl.innerHTML = peculiarity;
    }
    else{
        characteristicEl.innerHTML = "No characteristics for this animal"
    }

    if(resultObject.locations){
        locationEl.innerHTML = resultObject.locations
    }
    else{
        locationEl.innerHTML = "No locations for this animal"
    }

    resultBody.append(nameEl,characteristicEl,locationEl);
    resultCard.append(resultBody);

    resultContentEl1.append(resultCard);
 }



function searchApi2(query){

}

getQuery();
