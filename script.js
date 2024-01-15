document.addEventListener("DOMContentLoaded", function () {
  const imagenes = [
      'https://media.istockphoto.com/id/176793256/es/foto/coche-rojo-al-atardecer-de-la-habana.jpg?s=612x612&w=0&k=20&c=hLVLnWy8BwbSIhU199nDF3WWU8Juq2RgirSYsqU3p6M=',
      'https://media.istockphoto.com/id/1366060099/es/foto/r%C3%A9plica-de-coche-antiguo.jpg?s=1024x1024&w=is&k=20&c=BEpMBXSDMNN8malTzDI9GN80EW71jPt66dfTwpCN_z8=',
      'https://media.istockphoto.com/id/636137996/es/foto/coche-cl%C3%A1sico-franc%C3%A9s.jpg?s=1024x1024&w=is&k=20&c=ep04haDuUs0jqxOsqAL1qQfp4HqKYK_kOrE03WMG0Uk=',
      'https://d3po9jkuwb69jo.cloudfront.net/media/uploads/2023/01/16/autos-clasicos-torino.png',
      'https://fotos.arcar.org/vehiculos/120615-fiat-128-super-europa.webp'
  ];
  
  let indiceImagenActual = 0;
  const imagenContainer = document.getElementById("imagen-container");
  const botonCambiarImagen = document.getElementById("cambiarImagen");

  botonCambiarImagen.addEventListener("mouseover", () => {
      botonCambiarImagen.style.filter = "brightness(1.2)";
  });

  botonCambiarImagen.addEventListener("mouseout", () => {
      botonCambiarImagen.style.filter = "brightness(1)";
  });

  imagenContainer.addEventListener("mouseover", () => {
      imagenContainer.style.transform = "scale(1.1)";
  });

  imagenContainer.addEventListener("mouseout", () => {
      imagenContainer.style.transform = "scale(1)";
  });

  botonCambiarImagen.addEventListener("click", cambiarImagen);

  function cambiarImagen() {
      indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
      const fragmento = document.createDocumentFragment();
      const nuevaImagen = document.createElement("img");
      nuevaImagen.src = imagenes[indiceImagenActual];
      nuevaImagen.alt = "Imagen " + (indiceImagenActual + 1);
      fragmento.appendChild(nuevaImagen);
      imagenContainer.innerHTML = "";
      imagenContainer.appendChild(fragmento);
  }
});
