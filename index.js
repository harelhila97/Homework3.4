let searchValue = "";
function init() {
    const headerdiv = document.getElementById("headerDiv");
    const THEheader = document.createElement("h1")
    THEheader.innerText = "USERS"
    headerdiv.append(THEheader)

    draw(users)
}

function apdatenumselectedusers(selectedusers) {
    const numselectedusers = document.getElementById("numselectedusers")
    numselectedusers.innerText = "selected users: " + selectedusers.length
}

function searchuser() {
    const searchinput = document.getElementById("searchinput")
    searchValue = searchinput.value
    // const searchselect = document.getElementById("searchselect")
    // const searchselectvalue = searchselect.value.toLowerCase()
    // console.log(searchselectvalue);
    // const userssaerch = users.filter(user => user[searchselectvalue].includes(searchValue.toLowerCase()))
    const userssaerch = users.filter(user => user.name.first.toLowerCase().includes(searchValue.toLowerCase()))
    draw(userssaerch)
}

function searchclearuser() {
    const searchinput = document.getElementById("searchinput")
    searchValue = searchinput.value
    searchValue = ""
    searchinput.value = ""
    draw(users)
}

function cleardata() {
    document.getElementById("usersDiv").innerText = "";
}

function draw(usersdata) {
    cleardata();
    const userssaerch = usersdata.filter(user => user.name.first.toLowerCase().includes(searchValue.toLowerCase()))
    const usersDiv = document.getElementById("usersDiv");
    const usersUI = userssaerch.map(user => getSingelUser(user))
    const selectedusers = usersdata.filter(user => user.isSelected === true)
    apdatenumselectedusers(selectedusers)
    usersDiv.append(...usersUI)
    console.log(usersUI)

}

function getSingelUser(user) {
    if (typeof user !== 'object') return;
    const userContainerDiv = document.createElement("div")
    userContainerDiv.id = "userContainerDiv"
    const userid = user.login.username.toLowerCase();
    const userGender = document.createElement("h4")
    const userName = document.createElement("h3")
    const userlocation = document.createElement("h4")
    const userlocationcountry = document.createElement("h5")
    const userlocationstate = document.createElement("h5")
    const userlocationcity = document.createElement("h5")
    const useremail = document.createElement("h4")
    const userlogin = document.createElement("h4")
    const userloginusername = document.createElement("h5")
    const userloginpassword = document.createElement("h5")
    const userphone = document.createElement("h4")
    const usercell = document.createElement("h4")
    const userpicture = document.createElement("img")
    const userage = document.createElement("h4")
    //img + age 

    userGender.innerText = "Gender: " + user.gender
    userName.innerText = "" + user.name.title + " " + user.name.first + " " + user.name.last
    userlocation.innerText = "Location: "
    userlocationcountry.innerText = "country: " + user.location.country
    userlocationstate.innerText = "state: " + user.location.state
    userlocationcity.innerText = "city: " + user.location.city
    useremail.innerText = "email: " + user.email
    userlogin.innerText = "Login Info: "
    userloginusername.innerText = "username:" + user.login.username
    userloginpassword.innerText = "password: " + user.login.password
    userphone.innerText = "Phone: " + user.phone
    usercell.innerText = "Cell: " + user.cell
    userpicture.innerHTML = "not found"
    userpicture.src = user.picture.thumbnail
    userage.innerText = "Age: " + user.dob.age

    const selectButton = document.createElement("button")
    selectButton.classList.add("selectButton", "btn", "btn-info")
    selectButton.innerText = "select"
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-danger", "deleteButton")
    deleteButton.innerText = "delete"

    if (user.isSelected === true) {
        selectButton.innerText = "usSelect"
        userContainerDiv.style.background = "yellow"
    }
    else {
        selectButton.innerText = "select"
        userContainerDiv.style.background = "white"
    }

    selectButton.addEventListener("click", function () {
        if (user.isSelected === true) {
            user.isSelected = false;
        } else {
            user.isSelected = true
        }
        draw(users)
    })

    deleteButton.addEventListener("click", function () {
        const userindextodelete = users.findIndex(user => user.login.username.toLowerCase() == userid)
        if (userindextodelete !== -1) {
            users.splice(userindextodelete, 1)
        }
        draw(users)
    })
    userContainerDiv.append(userpicture, userName, userGender, userphone, usercell, userage, useremail, userlocation, userlocationcountry, userlocationstate, userlocationcity, userlogin, userloginusername, userloginpassword,
        selectButton, deleteButton)
    return userContainerDiv


}

function adduser() {
    // userpicture, userName, userGender, userphone, usercell, userage, useremail, userlocation, userlocationcountry, userlocationstate, userlocationcity, userlogin, userloginusername, userloginpassword,
    
}
init();

//     "gender":
//     "name": {}
//     "location":{}
//     "email":
//     "login":{}
//     "dob": {}
//     "registered": {}
//     "phone":
//     "cell":
//     "id": {}
//     "picture":{}
//     "nat": "IR"