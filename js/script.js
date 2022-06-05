// NAVBAR RESPONSIVE
$(document).ready(function(){
  $('.sidenav').sidenav();
});

//menu déroulant cartes accueil
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});

// SCRIPT CAROUSEL PROJETS ACCUEIL
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

//Parallax projet perso
$(document).ready(function(){
  $('.parallax').parallax();
});

//collapse page projet
$(document).ready(function(){
  $('.collapsible').collapsible();
});

//zoom imqge
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//modal
$(document).ready(function(){
  $('.modal').modal();
});

//toast
function showToastJ(){
  M.toast({html: 'Projet réalisé par Jérémy Duc', completeCallback: function(){alert('Si vous avez des questions n\'hésitez pas à nous contacter via nos réseaux sur la page d\'accueil')}, classes: 'rounded'});
}
function showToastL(){
  M.toast({html: 'Projet réalisé par Léann Farant', completeCallback: function(){alert('Si vous avez des questions n\'hésitez pas à nous contacter via nos réseaux sur la page d\'accueil')}, classes: 'rounded'});
}
function showToastC(){
  M.toast({html: 'Projet réalisé par Jérémy Duc, Léann Farant et Tom Le Gros', completeCallback: function(){alert('Si vous avez des questions n\'hésitez pas à nous contacter via nos réseaux sur la page d\'accueil')}, classes: 'rounded'});
}

const music = new Audio('img/timetime.mp3');

function eg() {
  music.play();
}
