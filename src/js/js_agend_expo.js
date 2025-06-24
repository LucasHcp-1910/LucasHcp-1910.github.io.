var pagina1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.915419295119!2d-46.65432168500458!3d-23.56720166793202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c3e5d8b2bb%3A0xf9e86d03897a3a19!2sPaulista%20Avenue!5e0!3m2!1sen!2sbr!4v1651119698844!5m2!1sen!2sbr";
var pagina2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14696.105228602628!2d-43.154575699999995!3d-22.949258249999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9980409039f845%3A0x8075d7bcdfbcb48c!2sCukurgalvas%20kalns!5e0!3m2!1spt-BR!2sbr!4v1750729041302!5m2!1spt-BR!2sbr";
var pagina3 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.25966535578!2d-48.6136359!3d-26.7998594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8d1b8b66ca63b%3A0xe972b998081420db!2sBeto%20Carrero%20World!5e0!3m2!1spt-BR!2sbr!4v1750729129329!5m2!1spt-BR!2sbr";
function mudarIframe(numero) {
  document.getElementById("iframe1").src = eval("pagina" + numero);
}