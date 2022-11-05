let doubleClick = (document.getElementById("card").ondblclick = function () {
    changeInfoCard();
});

let isStudent = true;

function changeInfoCard() {
    console.log("Double Click");

    const oCard = event.currentTarget;

    const bg = isStudent ? "bg-teacher" : "bg-student";
    const profPhoto = isStudent ? "https://github.com/maykbrito.png" : "https://github.com/jrgessiel.png";
    const infoTitle = isStudent ? "Maik Brito" : "Gessiel Júnior";
    const infoP = isStudent ? "Teacher at Rocketseat" : "Student at Rocketseat";
    

    oCard.style.backgroundImage = `url(./assets/${bg}.svg)`;
    document.getElementById('profilePhoto').setAttribute('src', `${profPhoto}`);
    document.getElementById('infoTitle').innerHTML = `${infoTitle}`;
    document.getElementById('infoP').innerHTML = `${infoP}`;

    isStudent = !isStudent;
}
