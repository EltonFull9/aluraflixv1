var filmes = [];

function adicionar() {
  var link = document.getElementById("entrada").value;
  filmes.push(link);
}

function verfilmes() {
  filmes.forEach(function (item, indice, array) {
    document.write("<img src=" + filmes[indice] + ">");
    //console.log(filmes[indice]);
  });
}