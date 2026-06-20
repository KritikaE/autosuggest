var users = [
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"../images/john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"../images/jane.png"
    }
]

var curId = 0;

function toggle(){
    curId = (curId+1)%2; //current Index
    /* to toggle b/w 0 -> 1 and  1 -> 0 */

    //using ids to toggle the rendered users
    var user = users[curId];
    document.getElementById("user-img").src=user.image;
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gen").innerText=user.gender;
}

