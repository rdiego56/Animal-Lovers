//The search button
var searchButton = document.querySelector('#search-button');


//Get the last searched-result stored in the local storage
var lastResult= localStorage.getItem("query");
document.querySelector("#last-result").innerHTML = lastResult;

//When the user click  the search button or use the enter key after typing an animal name, they will be redirect to the search-result html page with the search value.
function handleSubmitEvent(event){
  event.preventDefault();
  var searchInputVal1 = document.querySelector('#search-input').value;
  if(!searchInputVal1)
    {
      console.log("Error,please enter an animal name!");
      return;
    }
  
    var queryString1 = './search-result.html?q=' + searchInputVal1 + '';

    localStorage.setItem("query",searchInputVal1);
    location.assign(queryString1);

  }


searchForm.addEventListener("submit",handleSubmitEvent);




