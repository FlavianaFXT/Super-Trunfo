var cartaRafa = {
    nome:"Bulbasauro",
    imagem: "https://1.bp.blogspot.com/-rACSJRla57A/XuXAktqFmwI/AAAAAAAAEiA/p-I6qE3iUfYgpJg_CBLo_hk8j0M90b-TwCK4BGAsYHg/s300/bulbasaur-icon.png",
    atributos: {
    ataque: 7, 
    defesa: 8, 
    magia: 6
    }
  };
  
  var cartaGui = {   
    nome: "Dart Vader",
    imagem: "https://br.web.img3.acsta.net/newsv7/22/05/06/20/55/4497665.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia:2
    }
  };
  
  var cartaPaulo = {
    nome: "Shiryu de dragão",
    imagem: "https://i.pinimg.com/originals/a7/bb/6a/a7bb6ac1d7dae2898c4b74f3226676e0.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia:10
    }
  };
  
  var cartaFlavi = {
    nome: "Barbie",
    imagem: "https://m.media-amazon.com/images/I/71bRgpU6CBL._AC_SL1500_.jpg",
    atributos: {
      ataque: 2,
      defesa: 5,
      magia:10
    }
  };
  
  var cartaMaquina;
  var cartaJogador;
  var cartas = [cartaPaulo, cartaGui, cartaRafa, cartaFlavi];
  
  function sortearCarta () {
  var numeroCartaMaquina = parseInt(Math.random () * 4);
    cartaMaquina = cartas[numeroCartaMaquina];
    
    var numeroCartaJogador = parseInt (Math.random () * 4)
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt (Math.random () * 4);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    
    document.getElementById ("btnSortear").disabled = true;
    document.getElementById ("btnJogar").disabled = false;
    exibirCartaJogador ();
  }
  
  function obtemAtributoSelecionado () {
    var radioAtributo = document.getElementsByName ("atributo");
    for (var i=0; i<radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    } 
  }
  
  function jogar () {
    console.log ("chamou");
     var atributoSelecionado = obtemAtributoSelecionado ();
    var divResultado = document.getElementById("resultado");
     
    if (cartaJogador.atributos [atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class= 'resultado-final'>Venceu</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) { 
      htmlResultado = "<p class= 'resultado-final'>Perdeu</p>"
    } else { htmlResultado = "<p class= 'resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado;
    
    document.getElementById ("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador () {
    var divCartaJogador = document.getElementById ("carta-jogador");
    divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style="width: inherit; height: inherit; position: absolute;">';                 
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
   var opcoesTexto = "";  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type = 'radio' name = 'atributo' value = ''" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina () {
    var divCartaMaquina = document.getElementById ("carta-maquina");
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;  var moldura = 
  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';                 
  var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";  
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<input type = 'radio' name = 'atributo' value = ''" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }