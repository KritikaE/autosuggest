function random(){
    fetch("https://randomuser.me/api/")

        //the data fetched will be stored in res
        .then(function(res){
            console.log(res);
            res.json(); //to convert raw data to json
        })

        //gets data from above function
        .then(function(data){
            var user = data.results[0];
            var fullname= user.name.title+" "+user.name.first+" "+user.name.last;
            document.getElementById("user-img").src=user.picture.large;
            document.getElementById("user-name").innerText=user.fullname;
            document.getElementById("user-gen").innerText=user.gender;
        })

        //for exception handling when "then" didn't work
        .catch(function(err){
            console.log("There's some Error"+err);
        })
}