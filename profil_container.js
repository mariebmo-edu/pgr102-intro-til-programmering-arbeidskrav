/*PROFILES*/
/*Name, Gender, Age, Image, Description*/
var profileZero = ["Karen", "kvinne", 42, "woman2.jpg", "essensielle oljer og frihet"];
var profileOne = ["Amanda", "kvinne", 21, "woman1.jpg", "Liker turer i solnedgangen"];
var profileTwo = ["Bjarne", "mann", 26, "man2.jpg", "Guttastemning er den eneste stemningen"];
var profileThree = ["Monica", "kvinne", 30, "woman3.jpg", "Liker å lage mat, være med venner, og drikke kaffe"];
var profileFour = ["Nick", "mann", 22, "man3.jpg", "Vet ikke jeg assa"];
var profileFive = ["Steve", "mann", 32, "man1.jpg", "Good Guy"];

/*ALL PROFILES*/
var allProfiles = [profileZero, profileOne, profileTwo, profileThree, profileFour, profileFive];


/*PRINT PROFILE FUNCTION, where name is the var used for innerHTML*/
function PrintProfile(name){
    name.innerHTML +=
        `<div class="profile">
            <img src="images/${allProfiles[i][3]}" width="100%">
            <p>${allProfiles[i][0]} <br> ${allProfiles[i][2]}, ${allProfiles[i][4]}</p>
        </div>`
}
