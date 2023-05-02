var searchButton = document.querySelector('#search-button');


var lastResult= localStorage.getItem("query");
document.querySelector("#last-result").innerHTML = lastResult;

function handleSearchButtonSubmit(event){
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;

    if(!searchInputVal)
    {
      console.log("Error,please enter an animal name!");
      return;
    }

    var queryString = './search-result.html?q=' + searchInputVal + '';

    localStorage.setItem("query",searchInputVal);
    location.assign(queryString);


}

searchButton.addEventListener('click', handleSearchButtonSubmit);
