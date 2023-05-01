var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');


function searchApi(query, format) {
    var locQueryUrl = 'https://www.loc.gov/search/?fo=json';
 
    if (format) {
      locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
    }
 
    locQueryUrl = locQueryUrl + '&q=' + query;
 
    fetch(locQueryUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
 
        return response.json();
      })
      .then(function (locRes) {
        resultTextEl.textContent = locRes.search.query;
 
        console.log(locRes);
      })
    }


    if (!locRes.result.lenght) {
        console.log ('No pet found');
        resultContentEl.innerHTML = "No pet found, please input a pet";
    }    else {
        resultContentEl.textContent = "";
        for (var i = 0; i < locRes.result.lenght; i++) {
            printResults(locRes.result[i])
        }
     }




     function printResults()
