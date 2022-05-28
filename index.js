var bg = $("#particles-js");

$(document).keydown(function(event) {
    $(bg).css("background-color", getRandomColor);
});
/*selectionner tous les images*/
$(".img").click(function() {

    //premier action
    /*recuperer name la valeur de l'attribut*/
    /*this l'objet courant*/
    var name = $(this).attr("name");
    /*passer seulement premier lettre en majuscule*/
    const initiale = name.charAt(0).toUpperCase();
    /*concatener le prmeier lettre majuscule avec la chaine sans premier lettre minuscule*/
    const nameCapitalized = initiale + name.slice(1);
    /*afficher le nom des qu'on clique sur l'image*/
    $("#titre").text(nameCapitalized);

    //deuxieme action
    $(this).toggleClass("flash");

    //troisieme action
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic(music);
});

$("#btn").click(function() {
    /* recuperer la valeur d'input*/
    var artiste = $("#input").val();
    var music = artsite + ".mp3";
    playMusic(music);
});

function playMusic(music) {
    var audio = new Audio(music);
    /*lancer la musique*/
    audio.play();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}