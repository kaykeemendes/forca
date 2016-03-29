

angular.module("Forca", []).controller("jogo", function($scope) {

  var cont = 0;
  var contGanhar =0;


var palavraSortiada = [
{nome:'GOKU', dica:'O cara mais foda de Dragon Ball', imagem:'img/goku.jpg'},
{nome:'BROLLY', dica:'Lendário Super Sayajin', imagem : 'brolly.jpg'},
{nome:'GOTEN', dica:'Filho mais novo de Goku', imagem:'goten.jpg'},
{nome:'TURLES', dica:'Irmão mais novo de Goku', imagem:'turles.jpg'},
{nome:'RADITZ', dica:'Irmão mais velho de Goku', imagem:'raditz.jpg'},
{nome:'GINA', dica:'Mãe de Goku', imagem:'gina.jpg'},
{nome:'PAN', dica:'Filha de Gohan com Videl', imagem:'pan.jpg'},
{nome:'KRILLIN', dica:'Amigo careca de infância de Goku', imagem:'krillin.jpg'},
{nome:'KAME', dica:'Grande mestre de Son Goku', imagem:'kame.jpg'},
{nome:'KARIN', dica:'Grande mestre que mora em uma grande torre acima das nuvens', imagem:'karin.jpg'},
{nome:'YAJIROBE', dica:'Pupilo de mestre Karin', imagem:'yajirobe.jpg'},
{nome:'CAOS', dica:'Melhor amigo de Tenshinhan', imagem:'caos.jpg'},
{nome:'TENSHINHAN', dica:'Melhor amigo de Caos e possui um olho na testa', imagem:'tenshinhan.jpg'},
{nome:'YAMCHA', dica:'Possui em seu rosto várias marcas de machucado e uma delas em forma de X', imagem:'yamcha.jpg'},
{nome:'VEGETA', dica:'Príncipe dos Sayajins', imagem:'vegeta.jpg'},
{nome:'GOHAN', dica:'Filho mais velho de Goku', imagem:'gohan.jpeg'},
{nome:'FREEZA', dica:'Grande imperador do Universo', imagem:'freeza.jpeg'},
{nome:'NAPA', dica:'Capanga careca de Vegeta Scouter', imagem:'napa.jpeg'},
{nome:'TRUNKS', dica:'Filho de Vegeta', imagem:'trunks.jpeg'},
{nome:'BULMA', dica:'Esposa de Vegeta', imagem:'bulma.jpeg'},
{nome:'CHICHI', dica:'Eposa de Goku', imagem:'chichi.jpeg'},
{nome:'VIDEL', dica:'Filha do Mr. Satan', imagem:'videl.jpeg'},
{nome:'MRSATAN', dica:' O grande campeão do torneio de Artes Marciais', imagem:'mrsatan.jpeg'},

];
  var count = 0;
  var digitados = [];
  var numeroSorteado  = Math.floor(Math.random()*palavraSortiada.length);      
  var palavra = palavraSortiada[numeroSorteado].nome;
  var fimJogo = false;
  


  $scope.dica = palavraSortiada[numeroSorteado].dica;
  $scope.imagem = palavraSortiada[numeroSorteado].imagem;
  $scope.imgGanhar ="img/db1.png"
  $scope.img = "img/forca0.jpg"


  $scope.palavraSecreta = new Array(palavra.length);
  for (i = 0; i < palavra.length; i++) {
    $scope.palavraSecreta[i] = "__ ";
        }
  $scope.contem = function (letra) {
  return digitados.indexOf(letra) !== -1 || fimJogo;
  }
  $scope.digitar = function(letra) {
    digitados.push(letra);
      var verifica = false;
    for (i = 0; i < palavra.length; i++) {
      if (palavra[i] == letra) {
        $scope.palavraSecreta[i] = letra;
          verifica = true;
            contGanhar++;
            mostrarPersonagem();            
      }
    }
        if (verifica==false){
            cont++;
            montarBoneco();
        }
    } 



function mostrarPersonagem(){
    if(contGanhar==palavra.length){
      $scope.imgGanhar = "img/ganhou.png"
      fimJogo = true;
          return ;
    }
}

$scope.reiniciar= function(){
  window.location.reload();
}


function montarBoneco(){
  if(cont==1){
      $scope.img = "img/forca1.jpg"
        return;
  }
  if(cont==2){
    $scope.img = "img/forca2.jpg"
        return;
  }
  if(cont==3){
    $scope.img = "img/forca3.jpg"
        return;
  }
if(cont==4){
    $scope.img = "img/forca4.jpg"
        return;
  }
if(cont==5){
    $scope.img = "img/forca5.jpg"
        return;
  }
if(cont>5){
  $scope.img = "img/forca6.jpg"
  $scope.imgGanhar = "img/perdeu.png"
  fimJogo = true;
        return;
          
  }
}


});
