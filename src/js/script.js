// SCRIPT CARROSSEL GALERIA
var contador = 1;
var imgsp1 ="./src/assets/imgbeco_do_batman.jpg";
var imgsp2 ="./src/assets/rua_carmo.jpg";
var imgsp3 ="./src/assets/catedral_se.jpg";
var imgsp4 ="./src/assets/avenida paulista.jpg";
var imgsp5 ="./src/assets/masp.jpg";
var imgsp6 ="./src/assets/marginal_pinheiros.jpg";
var legenda1 = "Beco do Batman ";
var legenda2 = "Rua do Carmo";
var legenda3 = "Catedral da Sé";
var legenda4 = "Avenida Paulista";
var legenda5 = "MASP";
var legenda6 = "Marginal Pinheiros";
var tempo=2000;
var iniciar=setInterval("iniciando()", tempo)

function iniciando()
{
  if (!document.images)
    return
  else
    {
      document.images["imgsp"].src=eval("imgsp"+contador);
      
      contador++
      if (contador>6) contador=1
    }
  }

  function anterior()
  {
    clearInterval(iniciar);
    contador = contador -1;
    if (contador <0) 
      {
        contador = 6
      }
    document.images["imgsp"].src=eval("imgsp"+contador);
    caption.innerHTML = eval("legenda" + contador);

    iniciar=setInterval("iniciando()",tempo);
}

function proximo()
{
  clearInterval(iniciar);

  contador = contador + 1;
  if (contador >= imagens.length) contador = 0;

  document.images["imgsp"].src = imagens[contador];

  iniciar = setInterval(iniciando, tempo);
}

