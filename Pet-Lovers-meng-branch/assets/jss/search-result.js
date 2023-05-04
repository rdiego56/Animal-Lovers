var resultTextEl1 = document.querySelector('#result-text1');
var resultContentEl1 = document.querySelector('#result-content1');
var resultTextEl2 = document.querySelector('#result-text2');
var resultContentEl2 = document.querySelector('#result-content2');
var searchButtonEl = document.querySelector('#search-button');



//Get the query value, which is whatever animal the user searched for
function getQuery()
{
    var searchQuery = document.location.search.split('?');

    var query = searchQuery[1].split('=').pop();

    searchApi1(query);
    searchApi2(query);
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
         resultContentEl1.textContent = ''
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

    //console.log(resultObject.characteristics);
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
             
        }
        characteristicEl.innerHTML = peculiarity;
    }
    else{
        characteristicEl.innerHTML = "No characteristics for this animal";
    }

    if(resultObject.locations){
        locationEl.innerHTML ="Location:"+ resultObject.locations;
    }
    else{
        locationEl.innerHTML = "No locations for this animal";
    }

    resultBody.append(nameEl,characteristicEl,locationEl);
    resultCard.append(resultBody);

    resultContentEl1.append(resultCard);
 }


//search for the library of congress Api and fetch datas about the query from it.
function searchApi2(query)
{
    var localUrl = 'https://www.loc.gov/photos/?fo=json&q=' + query;

    resultTextEl2.textContent = query;
    fetch(localUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        resultTextEl2.textContent = query;

        resultContentEl2.textContent = ''

        console.log(data);

        if(!data.results.length){
            resultContentEl2.textContent = "<h3>No results found, search again!</h3>";

        }
        else
        {
            for(var i=0;i< 5;i++){
                printResult2(data.results[i]);
            }
        }
    })
}



function printResult2(resultOBJ)
{
    var resultCard = document.createElement('div');

    var resultBody = document.createElement('div');

    var titleEl = document.createElement('h3');

    var bodyContent1 = document.createElement('p');

    var bodyContent2 = document.createElement('p');

    var bodyContent3 = document.createElement('p');


    var linkEl = document.createElement('a')

    if(resultOBJ.title)
    {
        titleEl.innerHTML = resultOBJ.title;
    }
    else{
        titleEl.innerHTML = "No title found about this result";
    }

    if(resultOBJ.date)
    {
        bodyContent1.innerHTML = "Date: " + resultOBJ.date;
    }
    else
    {
        bodyContent1.innerHTML = "No date found about this result";
    }

    if(resultOBJ.subject)
    {
        bodyContent2.innerHTML = "Subject: " + resultOBJ.subject;
    }
    else{
        bodyContent2.innerHTML = "No subjects found about this result";  
    }

    if(resultOBJ.description)
    {
        bodyContent3.innerHTML = "Description: " + resultOBJ.description;
    }
    else{
        bodyContent3.innerHTML = "No description found about this result";
    }

    linkEl.textContent = "Read More";
    linkEl.href = resultOBJ.url;

    resultBody.append(titleEl,bodyContent1,bodyContent2,bodyContent3,linkEl);
    resultCard.append(resultBody);

    resultContentEl2.append(resultCard);

}

function handleSearchFormSubmit(event)
{
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;

   

    if(!searchInputVal){
        console.error("Error, you need to enter an input value for the search");
        return;
    }

    localStorage.setItem('query',searchInputVal);

    searchApi1(searchInputVal);
    searchApi2(searchInputVal);
}

searchButtonEl.addEventListener('click',handleSearchFormSubmit);



getQuery();
