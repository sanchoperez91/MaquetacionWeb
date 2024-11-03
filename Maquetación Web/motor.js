
var divGeneral =document.createElement('div');
divGeneral.id='divGeneral';
document.body.appendChild(divGeneral);

var divAzul=document.createElement('div');
divAzul.id='divAzul';
divGeneral.appendChild(divAzul);

var imgAzul=document.createElement('img');
imgAzul.id='imgAzul';
imgAzul.src='/img/logo-azul-marino-viajes.jpg';
imgAzul.className='imgAzul';
divAzul.appendChild(imgAzul);

var divRojo=document.createElement('div');
divRojo.id='divRojo';
divGeneral.appendChild(divRojo);

var textoInicio=document.createElement('p');
textoInicio.id='textoInicio';
textoInicio.innerHTML="Inicio";
textoInicio.className='rojo';
divRojo.appendChild(textoInicio);
var textoNosotros=document.createElement('p');
textoNosotros.id='textoNosotros';
textoNosotros.innerText="Nosotros";
textoNosotros.className='rojo';
divRojo.appendChild(textoNosotros);
var textoServicios=document.createElement('p');
textoServicios.id='textoNosotros';
textoServicios.innerText="Servicios";
textoServicios.className='rojo';
divRojo.appendChild(textoServicios);
var textoContacto=document.createElement('p');
textoContacto.id='textoContacto';
textoContacto.innerText="Contacto";
textoContacto.className='rojo';
divRojo.appendChild(textoContacto);

var div1=document.createElement('div');
div1.id='div1';
divGeneral.appendChild(div1);
var img1=document.createElement('img');
img1.id='img1';
img1.src='/img/alemania.jpg';
div1.appendChild(img1);
var div1_2=document.createElement('div');
div1_2.id='div1_2';
div1.appendChild(div1_2);

var titulo1=document.createElement('h2');
titulo1.id='titulo1';
titulo1.innerHTML="Este es el titular del div de texto";
div1_2.appendChild(titulo1);

var texto1=document.createElement('p');
texto1.id='texto1';
texto1.innerHTML="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.";
div1_2.appendChild(texto1);

var boton1=document.createElement('button');
boton1.id='boton1';
boton1.innerText="Ver más";
div1_2.appendChild(boton1);

var titulo2=document.createElement('div');
titulo2.id='titulo2';
titulo2.innerText='Este es el titular de la sección 2';
divGeneral.appendChild(titulo2);

var imgMonta=document.createElement('img');
imgMonta.id='imgMonta';
imgMonta.src='/img/montaña.jpg';
divGeneral.appendChild(imgMonta);

var div3=document.createElement('div');
div3.id='div3';
divGeneral.appendChild(div3);

var div3_1=document.createElement('div');
div3_1.id='div3_1';
div3.appendChild(div3_1);

var imgBarca=document.createElement('img');
imgBarca.id='imgBarca';
imgBarca.className='tresFotos';
imgBarca.src='/img/Viajes_Donde_Viajes_3.jpg';
div3_1.appendChild(imgBarca);
var texto3_1=document.createElement('p');
texto3_1.id='texto3_1';
texto3_1.className='tresTextos';
texto3_1.innerHTML="Lorem Ipsum dolor sit amet, comsecteur adipiscing elit.";
div3_1.appendChild(texto3_1);
var boton3_1=document.createElement('button');
boton3_1.id='boton3_1';
boton3_1.innerText="Comprar";
boton3_1.className='tresBotones';
div3_1.appendChild(boton3_1);

var div3_2=document.createElement('div');
div3_2.id='div3_2';
div3.appendChild(div3_2);

var imgKayak=document.createElement('img');
imgKayak.id='imgKayak';
imgKayak.className='tresFotos';
imgKayak.src='/img/kayak-valencia.jpeg';
div3_2.appendChild(imgKayak);
var texto3_2=document.createElement('p');
texto3_2.id='texto3_2';
texto3_2.className='tresTextos';
texto3_2.innerHTML="Lorem Ipsum dolor sit amet, comsecteur adipiscing elit.";
div3_2.appendChild(texto3_2);
var boton3_2=document.createElement('button');
boton3_2.id='boton3_2';
boton3_2.innerText="Comprar";
boton3_2.className='tresBotones';
div3_2.appendChild(boton3_2);

var div3_3=document.createElement('div');
div3_3.id='div3_3';
div3.appendChild(div3_3);

var imgAvion=document.createElement('img');
imgAvion.id='imgAvion';
imgAvion.className='tresFotos';
imgAvion.src='/img/600x400_viajes-lujo-FOTO-1-White-Dessert-experiencia-Polo-Norte-en-jet-privaso.jpg';
div3_3.appendChild(imgAvion);
var texto3_3=document.createElement('p');
texto3_3.id='texto3_3';
texto3_3.className='tresTextos';
texto3_3.innerHTML="Lorem Ipsum dolor sit amet, comsecteur adipiscing elit.";
div3_3.appendChild(texto3_3);
var boton3_3=document.createElement('button');
boton3_3.id='boton3_2';
boton3_3.innerText="Comprar";
boton3_3.className='tresBotones';
div3_3.appendChild(boton3_3);
