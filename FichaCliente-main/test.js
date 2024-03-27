function loadImage(url) {
  // funcion que muestra el PDF
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function (e) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const res = event.target.result;
        resolve(res);
      };
      const file = this.response;
      reader.readAsDataURL(file);
    };
    xhr.send();
  });
}

let signaturePad2 = null;

window.addEventListener("load", async () => {

  const canvas = document.querySelector("canvas");
  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;
  signaturePad2 = new SignaturePad(canvas, {});

  const form = document.querySelector('#form');

  form.addEventListener("submit", async (e) => {
    // recuperar los datos del formulario
    e.preventDefault();


    let nombreGerente2 = document.getElementById("nombreGerente2") ? document.getElementById("nombreGerente2").value : null;
    let rutGerente2 = document.getElementById("rutGerente2") ? document.getElementById("rutGerente2").value : null;

    let nomCargo2 = document.getElementById("nomCargo").value;

    await generatePDF( //Pasandole los datos al PDF


      nombreGerente2,
      rutGerente2,

      nomCargo2,

    );
  });
});

async function generatePDF( //datos que se generaran el el PDF

nombreGerente2,
rutGerente2,

nomCargo2,
) {

  const pdf = new jsPDF("p", "pt", "letter"); //tipo PDF , letter = Carta

  const image4 = await loadImage("(Ficha Persona Jurídica) (1) (6)_page-0004.jpg"); //Página 4 PDF

  pdf.addImage(image4, "PNG", 0, 0, 600, 800);

  const signatureImage = signaturePad2.toDataURL();

  pdf.addImage(signatureImage, 'PNG', 50, 410, 300, 60);

  pdf.text(nombreGerente2, 120, 340);
  pdf.text(rutGerente2, 120, 360);
  pdf.text(nomCargo2, 120, 378);

  pdf.setFontSize(10);
  const date2 = new Date(); //Conseguir la Fecha actual en el formato Chileno
  const formattedDate2 = date2.toLocaleDateString("es-CL");
  pdf.text(formattedDate, 120, 400);

  const signatureImagen = signaturePad2.toDataURL();

  pdf.addImage(signatureImagen, 'PNG', 50, 410, 300, 60);

}