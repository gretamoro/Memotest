/*
El juego de memotest deberá cumplir las siguientes consignas:

1- Tener un tablero de 12 fichas (6 pares)
2- Deben acomodarse las fichas de forma aleatoria, cada vez que se inicie un nuevo juego.
3- Al completar todos los pares mostrar un mensaje de ganó.
4- Permitir ingresar el nombre del jugador al iniciar el juego
5- Tener 24 oportunidades, si no descubre todo el tablero en esa cantidad perderá.
*/

$('#entry').on('keypress', function (e) {
  if (e.keyCode == 13) {
    const name = $('#entry').val();
    $('#enterName').hide();
    $('#entry').hide();
    const player = '<h2>¡Hola ' + name + '!</h2>';
    ($('#playerName')).append(player);
    $('#entry').val('');
  }
})

let intentos = 14;
$('#triesLeft').html(intentos);

let imagenes = [
  'Recursos/adaLovelace.jpg', 'Recursos/chienS.png', 'Recursos/graceHopper.jpg',
  'Recursos/adaLovelace.jpg', 'Recursos/chienS.png', 'Recursos/graceHopper.jpg',
  'Recursos/adaLovelace.jpg', 'Recursos/chienS.png', 'Recursos/graceHopper.jpg',
  'Recursos/adaLovelace.jpg', 'Recursos/chienS.png', 'Recursos/graceHopper.jpg'
];

const desordenado = shuffle(imagenes);

function shuffle(i) {
  i.sort(function(){
    return 0.5 - Math.random()
  });
  return i;
}

let turnos = [];
let coincide = [];

// $('.img').on('click',function(e){
// 	let indice = $(this).index()
// 	let imghtml = $(this)
// 	imghtml.attr('src', imagenes[indice])
// 	let imagenClickeada = imagenes[indice]
// 	turno.push({imagen: imagenClickeada,
// posicion: indice})

$('img').on('click', function(e) {
  const id = e.target.id  //me devuelve el id del elemento que estoy clickeando
  const index = $('img').index(this);

  const img = $('#' + id).attr('src', desordenado[index]);  //attr: atributo
  turnos.push({
    imagen: $('#' + id).attr('src'),
    indice: index
  });
  console.log(turnos);

  if (turnos.length == 2) {
    if (turnos[0].imagen == turnos[1].imagen) {
      coincide.push(turnos[0]);
      coincide.push(turnos[1]);
      console.log(coincide);

      setTimeout(function () {
        turnos[0].imagen = $('#' + id).attr('src', 'https://png.icons8.com/windows/1600/0063B1/verified-account');
        turnos[1].imagen = $('#' + id).attr('src', 'https://png.icons8.com/windows/1600/0063B1/verified-account');

      }, 1000)
      turnos = [];
      coincide = [];
    }else {
      setTimeout(function () {
        turnos[0].imagen = $('#' + id).attr('src', 'Recursos/default.png');
        turnos[0].imagen = $('#' + id).attr('src', 'Recursos/default.png');
      }, 1000)
      turnos = [];
      coincide = [];
    }

    intentos--
    $('#triesLeft').html(intentos);
    if (intentos == 0) {
      const game = $('.game').html();
      const loser = $('.game').html('<div class="father"><h3>Perdiste :(</h3></div>');
    }
  }

})
