var url = "https://autosuggest-backend.onrender.com/api/autosuggest"; 
var searchBar = document.getElementById("searchbar") 
var searchsuggestions=document.getElementById("search-suggestions")


//user input -> put in the query -> api call -> return the suggestions to the div tag in ui 
//event listener
searchBar.addEventListener("input", function(){
    var query = searchBar.value.trim();
    //format query using trim
    getSuggestions(query)
})

function getSuggestions(query){
    var fullurl = url+"?q="+query+"&weighted=true&algorithm=trie&limit=8";
    fetch(fullurl)
    .then(function(res){
            return res.json(); //to convert raw data to json
        })

    .then(function(data){
        //console.log(data);
        showSuggestions(data);
    })

    .catch(function(err){
        console.log("There's some error "+err);
    })
}

function showSuggestions(data){
    //result array/suggestions 
    var values =  data.results;
    if(data.count===0){
        searchsuggestions.innerHTML="<div> No Matching Results Found</div>";
    }
    else{
        //append all the suggestions to return
        var sugString = "";

        for(var i = 0; i<values.length; i++)
            sugString+="<div><span class='text'>"+values[i].text+"</span><span class='weight'>"+values[i].weight+"</span></div>";

        searchsuggestions.innerHTML=sugString;
    }
}