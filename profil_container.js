/*DICTIONARY OF PROFILES*/


var allProfiles = [
    
    {
        name: "Karen",
        gender: "kvinne",
        age: 42,
        picture: "woman2.jpg",
        description: "liker essensielle oljer og frihet"
    },
    {
        name: "Amanda",
        gender: "kvinne",
        age: 21,
        picture: "woman1.jpg",
        description: "liker turer i solnedgangen"
    },
    {
        name: "Bjarne",
        gender: "mann",
        age: 26,
        picture: "man2.jpg",
        description: "guttastemning er den eneste stemningen"
    },
    {
        name: "Monica",
        gender: "kvinne",
        age: 30,
        picture: "woman3.jpg",
        description: "likr å lage mat, være med venner, og drikke kaffe"
    },
    {
        name: "Nick",
        gender: "mann",
        age: 22,
        picture: "man3.jpg",
        description: "vet ikke jeg assa"
    },
    {
        name: "Steve",
        gender: "mann",
        age: 32,
        picture: "man1.jpg",
        description: "good guy"
    }
    
]


/*PRINT PROFILE FUNCTION, where name is the var used for innerHTML*/
function PrintProfile(name){
    name.innerHTML +=
        `<div class="profile">
            <img src="images/${allProfiles[i].picture}" width="100%">
            <p>${allProfiles[i].name} <br> ${allProfiles[i].age}, ${allProfiles[i].description}</p>
        </div>`
}
