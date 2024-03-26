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

let signaturePad = null;

window.addEventListener("load", async () => {

  const canvas = document.querySelector("canvas");
  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;
  signaturePad = new SignaturePad(canvas, {});

  const form = document.querySelector('#form');

  form.addEventListener("submit", async (e) => {
    // recuperar los datos del formulario
    e.preventDefault();

    let razon = document.getElementById("razon").value;
    let rut = document.getElementById("rut").value;
    let nomFantasia = document.getElementById("nomFantasia").value;
    let giro = document.getElementById("giro").value;
    let residencia = document.getElementById("residencia").value;
    let direccion = document.getElementById("direccion").value;
    let comuna = document.getElementById("comuna").value;
    let correo = document.getElementById("correo").value;
    let telefono1 = document.getElementById("telefono1").value;
    let telefono2 = document.getElementById("telefono2").value;

    let nombreGerente = document.getElementById("nombreGerente").value;
    let rutGerente = document.getElementById("rutGerente").value;
    let nacionalidadGerente = document.getElementById("nacionalidadGerente").value;
    let correoGerente = document.getElementById("correoGerente").value;
    let direccionGerente = document.getElementById("direccionGerente").value;
    let comunaGerente = document.getElementById("comunaGerente").value;
    let estadoCivilGerente = document.getElementById("estadoCivilGerente").value;
    let telefono1Gerente = document.getElementById("telefono1Gerente").value;
    let telefono2Gerente = document.getElementById("telefono2Gerente").value;

    let nombreGerente2 = document.getElementById("nombreGerente2") ? document.getElementById("nombreGerente2").value : null;
    let rutGerente2 = document.getElementById("rutGerente2") ? document.getElementById("rutGerente2").value : null;
    let nacionalidadGerente2 = document.getElementById("nacionalidadGerente2") ? document.getElementById("nacionalidadGerente2").value : null;
    let correoGerente2 = document.getElementById("correoGerente2") ? document.getElementById("correoGerente2").value : null;
    let direccionGerente2 = document.getElementById("direccionGerente2") ? document.getElementById("direccionGerente2").value : null;
    let comunaGerente2 = document.getElementById("comunaGerente2") ? document.getElementById("comunaGerente2").value : null;
    let estadoCivilGerente2 = document.getElementById("estadoCivilGerente2") ? document.getElementById("estadoCivilGerente2").value : null;
    let telefono1Gerente2 = document.getElementById("telefono1Gerente2") ? document.getElementById("telefono1Gerente2").value : null;
    let telefono2Gerente2 = document.getElementById("telefono2Gerente2") ? document.getElementById("telefono2Gerente2").value : null;

    let nombreApoderado = document.getElementById("nombreApoderado").value;
    let rutApoderado = document.getElementById("rutApoderado").value;
    let nacionalidadApoderado = document.getElementById("nacionalidadApoderado").value;
    let correoApoderado = document.getElementById("correoApoderado").value;
    let direccionApoderado = document.getElementById("direccionApoderado").value;
    let comunaApoderado = document.getElementById("comunaApoderado").value;
    let estadoCivilApoderado = document.getElementById("estadoCivilApoderado").value;
    let telefono1Apoderado = document.getElementById("telefono1Apoderado").value;
    let telefono2Apoderado = document.getElementById("telefono2Apoderado").value;

    let nombreApoderado2 = document.getElementById("nombreApoderado2")
      ? document.getElementById("nombreApoderado2").value
      : null;
    let rutApoderado2 = document.getElementById("rutApoderado2")
      ? document.getElementById("rutApoderado2").value
      : null;
    let nacionalidadApoderado2 = document.getElementById(
      "nacionalidadApoderado2"
    )
      ? document.getElementById("nacionalidadApoderado2").value
      : null;
    let correoApoderado2 = document.getElementById("correoApoderado2")
      ? document.getElementById("correoApoderado2").value
      : null;
    let direccionApoderado2 = document.getElementById("direccionApoderado2")
      ? document.getElementById("direccionApoderado2").value
      : null;
    let comunaApoderado2 = document.getElementById("comunaApoderado2")
      ? document.getElementById("comunaApoderado2").value
      : null;
    let estadoCivilApoderado2 = document.getElementById("estadoCivilApoderado2")
      ? document.getElementById("estadoCivilApoderado2").value
      : null;
    let telefono1Apoderado2 = document.getElementById("telefono1Apoderado2")
      ? document.getElementById("telefono1Apoderado2").value
      : null;
    let telefono2Apoderado2 = document.getElementById("telefono2Apoderado2")
      ? document.getElementById("telefono2Apoderado2").value
      : null;

    let nombreApoderado3 = document.getElementById("nombreApoderado3")
      ? document.getElementById("nombreApoderado3").value
      : null;
    let rutApoderado3 = document.getElementById("rutApoderado3")
      ? document.getElementById("rutApoderado3").value
      : null;
    let nacionalidadApoderado3 = document.getElementById(
      "nacionalidadApoderado3"
    )
      ? document.getElementById("nacionalidadApoderado3").value
      : null;
    let correoApoderado3 = document.getElementById("correoApoderado3")
      ? document.getElementById("correoApoderado3").value
      : null;
    let direccionApoderado3 = document.getElementById("direccionApoderado3")
      ? document.getElementById("direccionApoderado3").value
      : null;
    let comunaApoderado3 = document.getElementById("comunaApoderado3")
      ? document.getElementById("comunaApoderado3").value
      : null;
    let estadoCivilApoderado3 = document.getElementById("estadoCivilApoderado3")
      ? document.getElementById("estadoCivilApoderado3").value
      : null;
    let telefono1Apoderado3 = document.getElementById("telefono1Apoderado3")
      ? document.getElementById("telefono1Apoderado3").value
      : null;
    let telefono2Apoderado3 = document.getElementById("telefono2Apoderado3")
      ? document.getElementById("telefono2Apoderado3").value
      : null;

    let nombreApoderado4 = document.getElementById("nombreApoderado4")
      ? document.getElementById("nombreApoderado4").value
      : null;
    let rutApoderado4 = document.getElementById("rutApoderado4")
      ? document.getElementById("rutApoderado4").value
      : null;
    let nacionalidadApoderado4 = document.getElementById(
      "nacionalidadApoderado4"
    )
      ? document.getElementById("nacionalidadApoderado4").value
      : null;
    let correoApoderado4 = document.getElementById("correoApoderado4")
      ? document.getElementById("correoApoderado4").value
      : null;
    let direccionApoderado4 = document.getElementById("direccionApoderado4")
      ? document.getElementById("direccionApoderado4").value
      : null;
    let comunaApoderado4 = document.getElementById("comunaApoderado4")
      ? document.getElementById("comunaApoderado4").value
      : null;
    let estadoCivilApoderado4 = document.getElementById("estadoCivilApoderado4")
      ? document.getElementById("estadoCivilApoderado4").value
      : null;
    let telefono1Apoderado4 = document.getElementById("telefono1Apoderado4")
      ? document.getElementById("telefono1Apoderado4").value
      : null;
    let telefono2Apoderado4 = document.getElementById("telefono2Apoderado4")
      ? document.getElementById("telefono2Apoderado4").value
      : null;


    let nombreApoderado5 = document.getElementById("nombreApoderado5")
      ? document.getElementById("nombreApoderado5").value
      : null;
    let rutApoderado5 = document.getElementById("rutApoderado5")
      ? document.getElementById("rutApoderado5").value
      : null;
    let nacionalidadApoderado5 = document.getElementById(
      "nacionalidadApoderado5")
      ? document.getElementById("nacionalidadApoderado5").value
      : null;
    let correoApoderado5 = document.getElementById("correoApoderado5")
      ? document.getElementById("correoApoderado5").value
      : null;
    let direccionApoderado5 = document.getElementById("direccionApoderado5")
      ? document.getElementById("direccionApoderado5").value
      : null;
    let comunaApoderado5 = document.getElementById("comunaApoderado5")
      ? document.getElementById("comunaApoderado5").value
      : null;
    let estadoCivilApoderado5 = document.getElementById("estadoCivilApoderado5")
      ? document.getElementById("estadoCivilApoderado5").value
      : null;
    let telefono1Apoderado5 = document.getElementById("telefono1Apoderado5")
      ? document.getElementById("telefono1Apoderado5").value
      : null;
    let telefono2Apoderado5 = document.getElementById("telefono2Apoderado5")
      ? document.getElementById("telefono2Apoderado5").value
      : null;


    let nombreApoderado6 = document.getElementById("nombreApoderado6")
      ? document.getElementById("nombreApoderado6").value
      : null;
    let rutApoderado6 = document.getElementById("rutApoderado6")
      ? document.getElementById("rutApoderado6").value
      : null;
    let nacionalidadApoderado6 = document.getElementById(
      "nacionalidadApoderado6"
    )
      ? document.getElementById("nacionalidadApoderado6").value
      : null;
    let correoApoderado6 = document.getElementById("correoApoderado6")
      ? document.getElementById("correoApoderado6").value
      : null;
    let direccionApoderado6 = document.getElementById("direccionApoderado6")
      ? document.getElementById("direccionApoderado6").value
      : null;
    let comunaApoderado6 = document.getElementById("comunaApoderado6")
      ? document.getElementById("comunaApoderado6").value
      : null;
    let estadoCivilApoderado6 = document.getElementById("estadoCivilApoderado6")
      ? document.getElementById("estadoCivilApoderado6").value
      : null;
    let telefono1Apoderado6 = document.getElementById("telefono1Apoderado6")
      ? document.getElementById("telefono1Apoderado6").value
      : null;
    let telefono2Apoderado6 = document.getElementById("telefono2Apoderado6") ? document.getElementById("telefono2Apoderado6").value : null;


    let nombreApoderado7 = document.getElementById("nombreApoderado7")
      ? document.getElementById("nombreApoderado7").value
      : null;
    let rutApoderado7 = document.getElementById("rutApoderado7")
      ? document.getElementById("rutApoderado7").value
      : null;
    let nacionalidadApoderado7 = document.getElementById(
      "nacionalidadApoderado7"
    )
      ? document.getElementById("nacionalidadApoderado7").value
      : null;
    let correoApoderado7 = document.getElementById("correoApoderado7")
      ? document.getElementById("correoApoderado7").value
      : null;
    let direccionApoderado7 = document.getElementById("direccionApoderado7")
      ? document.getElementById("direccionApoderado7").value
      : null;
    let comunaApoderado7 = document.getElementById("comunaApoderado7")
      ? document.getElementById("comunaApoderado7").value
      : null;
    let estadoCivilApoderado7 = document.getElementById("estadoCivilApoderado7")
      ? document.getElementById("estadoCivilApoderado7").value
      : null;
    let telefono1Apoderado7 = document.getElementById("telefono1Apoderado7")
      ? document.getElementById("telefono1Apoderado7").value
      : null;
    let telefono2Apoderado7 = document.getElementById("telefono2Apoderado7")
      ? document.getElementById("telefono2Apoderado7").value
      : null;


    let nombreAAM = document.getElementById("nombreAAM").value;
    let rutAAM = document.getElementById("rutAAM").value;
    let nacionalidadAAM = document.getElementById("nacionalidadAAM").value;
    let correoAAM = document.getElementById("correoAAM").value;
    let direccionAAM = document.getElementById("direccionAAM").value;
    let comunaAAM = document.getElementById("comunaAAM").value;
    let estadoCivilAAM = document.getElementById("estadoCivilAAM").value;
    let telefono1AAM = document.getElementById("telefono1AAM").value;
    let telefono2AAM = document.getElementById("telefono2AAM").value;

    let nombreAAM2 = document.getElementById("nombreAAM2")
      ? document.getElementById("nombreAAM2").value
      : null;
    let rutAAM2 = document.getElementById("rutAAM2")
      ? document.getElementById("rutAAM2").value
      : null;
    let nacionalidadAAM2 = document.getElementById("nacionalidadAAM2")
      ? document.getElementById("nacionalidadAAM2").value
      : null;
    let correoAAM2 = document.getElementById("correoAAM2")
      ? document.getElementById("correoAAM2").value
      : null;
    let direccionAAM2 = document.getElementById("direccionAAM2")
      ? document.getElementById("direccionAAM2").value
      : null;
    let comunaAAM2 = document.getElementById("comunaAAM2")
      ? document.getElementById("comunaAAM2").value
      : null;
    let estadoCivilAAM2 = document.getElementById("estadoCivilAAM2")
      ? document.getElementById("estadoCivilAAM2").value
      : null;
    let telefono1AAM2 = document.getElementById("telefono1AAM2")
      ? document.getElementById("telefono1AAM2").value
      : null;
    let telefono2AAM2 = document.getElementById("telefono2AAM2")
      ? document.getElementById("telefono2AAM2").value
      : null;

    let nombreAAM3 = document.getElementById("nombreAAM3")
      ? document.getElementById("nombreAAM3").value
      : null;
    let rutAAM3 = document.getElementById("rutAAM3")
      ? document.getElementById("rutAAM3").value
      : null;
    let nacionalidadAAM3 = document.getElementById("nacionalidadAAM3")
      ? document.getElementById("nacionalidadAAM3").value
      : null;
    let correoAAM3 = document.getElementById("correoAAM3")
      ? document.getElementById("correoAAM3").value
      : null;
    let direccionAAM3 = document.getElementById("direccionAAM3")
      ? document.getElementById("direccionAAM3").value
      : null;
    let comunaAAM3 = document.getElementById("comunaAAM3")
      ? document.getElementById("comunaAAM3").value
      : null;
    let estadoCivilAAM3 = document.getElementById("estadoCivilAAM3")
      ? document.getElementById("estadoCivilAAM3").value
      : null;
    let telefono1AAM3 = document.getElementById("telefono1AAM3")
      ? document.getElementById("telefono1AAM3").value
      : null;
    let telefono2AAM3 = document.getElementById("telefono2AAM3")
      ? document.getElementById("telefono2AAM3").value
      : null;


    let opcionMedios = document.querySelector("input[name='opcionMedios']:checked") ? document.querySelector("input[name='opcionMedios']:checked").value : null;
    let inputMediosCorreo = document.getElementById("inputMediosCorreo") ? document.getElementById("inputMediosCorreo").value : null;

    let opcionRelacionNatuAAM = document.querySelector("input[name='opcionRelacionNatuAAM']:checked") ? document.querySelector("input[name='opcionRelacionNatuAAM']:checked").value : null;
    let inputNatuAAMotros = document.getElementById("inputNatuAAMotros") ? document.getElementById("inputNatuAAMotros").value : null;


    let opcionRelacionAAM = document.querySelector("input[name='opcionRelacionAAM']:checked") ? document.querySelector("input[name='opcionRelacionAAM']:checked").value : null;
    let inputRelacionAAM = document.getElementById("inputRelacionAAM") ? document.getElementById("inputRelacionAAM").value : null;


    let opcionInfoCliente = document.querySelector("input[name='opcionInfoCliente']:checked") ? document.querySelector("input[name='opcionInfoCliente']:checked").value : null;


    let bancoUSS = document.getElementById("bancoUSS").value;
    let bancoCLP = document.getElementById("bancoCLP").value;
    let tipoCuentaCLP = document.getElementById("tipoCuentaCLP").value;
    let tipoCuentaUSS = document.getElementById("tipoCuentaUSS").value;
    let nCuentaCLP = document.getElementById("nCuentaCLP").value;
    let nCuentaUSS = document.getElementById("nCuentaUSS").value;

    let bancoUSS2 = document.getElementById("bancoUSS2") ? document.getElementById("bancoUSS2").value : null;
    let bancoCLP2 = document.getElementById("bancoCLP2") ? document.getElementById("bancoCLP2").value : null;
    let tipoCuentaCLP2 = document.getElementById("tipoCuentaCLP2") ? document.getElementById("tipoCuentaCLP2").value : null;
    let tipoCuentaUSS2 = document.getElementById("tipoCuentaUSS2") ? document.getElementById("tipoCuentaUSS2").value : null;
    let nCuentaCLP2 = document.getElementById("nCuentaCLP2") ? document.getElementById("nCuentaCLP2").value : null;
    let nCuentaUSS2 = document.getElementById("nCuentaUSS2") ? document.getElementById("nCuentaUSS2").value : null;


    let opcionNivelRenta = document.querySelector("input[name='opcionNivelRenta']:checked") ? document.querySelector("input[name='opcionNivelRenta']:checked").value : null;
    let inputFuenteRenta = document.getElementById("inputFuenteRenta") ? document.getElementById("inputFuenteRenta").value : null;


    let opcionPatrimonio = document.querySelector("input[name='opcionPatrimonio']:checked") ? document.querySelector("input[name='opcionPatrimonio']:checked").value : null;


    let opcionActCliente = document.querySelector("input[name='opcionActCliente']:checked") ? document.querySelector("input[name='opcionActCliente']:checked").value : null;
    let inputActCliente = document.getElementById("inputActCliente") ? document.getElementById("inputActCliente").value : null;

    let nomCargo = document.getElementById("nomCargo").value;

    let opcionClientePEP = document.querySelector("input[name='opcionClientePEP']:checked") ? document.querySelector("input[name='opcionClientePEP']:checked").value : null;

    let rutPEP = document.getElementById("rutPEP") ? document.getElementById("rutPEP").value : null;
    let nombreCompletoPEP = document.getElementById("nombreCompletoPEP") ? document.getElementById("nombreCompletoPEP").value : null;
    let PEPagregado = document.querySelector("input[name='PEPagregado']:checked") ? document.querySelector("input[name='PEPagregado']:checked").value : null;


    await generatePDF( //Pasandole los datos al PDF
      razon,
      rut,
      nomFantasia,
      giro,
      residencia,
      direccion,
      comuna,
      correo,
      telefono1,
      telefono2,

      nombreGerente,
      rutGerente,
      nacionalidadGerente,
      correoGerente,
      direccionGerente,
      comunaGerente,
      estadoCivilGerente,
      telefono1Gerente,
      telefono2Gerente,

      nombreGerente2,
      rutGerente2,
      nacionalidadGerente2,
      correoGerente2,
      direccionGerente2,
      comunaGerente2,
      estadoCivilGerente2,
      telefono1Gerente2,
      telefono2Gerente2,

      nombreApoderado,
      rutApoderado,
      nacionalidadApoderado,
      correoApoderado,
      direccionApoderado,
      comunaApoderado,
      estadoCivilApoderado,
      telefono1Apoderado,
      telefono2Apoderado,

      nombreApoderado2,
      rutApoderado2,
      nacionalidadApoderado2,
      correoApoderado2,
      direccionApoderado2,
      comunaApoderado2,
      estadoCivilApoderado2,
      telefono1Apoderado2,
      telefono2Apoderado2,

      nombreApoderado3,
      rutApoderado3,
      nacionalidadApoderado3,
      correoApoderado3,
      direccionApoderado3,
      comunaApoderado3,
      estadoCivilApoderado3,
      telefono1Apoderado3,
      telefono2Apoderado3,

      nombreApoderado4,
      rutApoderado4,
      nacionalidadApoderado4,
      correoApoderado4,
      direccionApoderado4,
      comunaApoderado4,
      estadoCivilApoderado4,
      telefono1Apoderado4,
      telefono2Apoderado4,

      nombreApoderado5,
      rutApoderado5,
      nacionalidadApoderado5,
      correoApoderado5,
      direccionApoderado5,
      comunaApoderado5,
      estadoCivilApoderado5,
      telefono1Apoderado5,
      telefono2Apoderado5,

      nombreApoderado6,
      rutApoderado6,
      nacionalidadApoderado6,
      correoApoderado6,
      direccionApoderado6,
      comunaApoderado6,
      estadoCivilApoderado6,
      telefono1Apoderado6,
      telefono2Apoderado6,

      nombreApoderado7,
      rutApoderado7,
      nacionalidadApoderado7,
      correoApoderado7,
      direccionApoderado7,
      comunaApoderado7,
      estadoCivilApoderado7,
      telefono1Apoderado7,
      telefono2Apoderado7,

      nombreAAM,
      rutAAM,
      nacionalidadAAM,
      correoAAM,
      direccionAAM,
      comunaAAM,
      estadoCivilAAM,
      telefono1AAM,
      telefono2AAM,

      nombreAAM2,
      rutAAM2,
      nacionalidadAAM2,
      correoAAM2,
      direccionAAM2,
      comunaAAM2,
      estadoCivilAAM2,
      telefono1AAM2,
      telefono2AAM2,

      nombreAAM3,
      rutAAM3,
      nacionalidadAAM3,
      correoAAM3,
      direccionAAM3,
      comunaAAM3,
      estadoCivilAAM3,
      telefono1AAM3,
      telefono2AAM3,

      opcionMedios,
      inputMediosCorreo,

      opcionRelacionNatuAAM,
      inputNatuAAMotros,

      opcionRelacionAAM,
      inputRelacionAAM,


      opcionInfoCliente,

      bancoUSS,
      bancoCLP,
      tipoCuentaCLP,
      tipoCuentaUSS,
      nCuentaCLP,
      nCuentaUSS,

      bancoCLP2,
      bancoUSS2,
      tipoCuentaCLP2,
      tipoCuentaUSS2,
      nCuentaCLP2,
      nCuentaUSS2,

      opcionNivelRenta,
      inputFuenteRenta,

      opcionPatrimonio,

      opcionActCliente,
      inputActCliente,

      nomCargo,

      opcionClientePEP,

      rutPEP,
      nombreCompletoPEP,
      PEPagregado,

    );
  });
});

async function generatePDF( //datos que se generaran el el PDF
  razon,
  rut,
  nomFantasia,
  giro,
  residencia,
  direccion,
  comuna,
  correo,
  telefono1,
  telefono2,

  nombreGerente,
  rutGerente,
  nacionalidadGerente,
  correoGerente,
  direccionGerente,
  comunaGerente,
  estadoCivilGerente,
  telefono1Gerente,
  telefono2Gerente,

  nombreGerente2,
  rutGerente2,
  nacionalidadGerente2,
  correoGerente2,
  direccionGerente2,
  comunaGerente2,
  estadoCivilGerente2,
  telefono1Gerente2,
  telefono2Gerente2,

  nombreApoderado,
  rutApoderado,
  nacionalidadApoderado,
  correoApoderado,
  direccionApoderado,
  comunaApoderado,
  estadoCivilApoderado,
  telefono1Apoderado,
  telefono2Apoderado,

  nombreApoderado2,
  rutApoderado2,
  nacionalidadApoderado2,
  correoApoderado2,
  direccionApoderado2,
  comunaApoderado2,
  estadoCivilApoderado2,
  telefono1Apoderado2,
  telefono2Apoderado2,

  nombreApoderado3,
  rutApoderado3,
  nacionalidadApoderado3,
  correoApoderado3,
  direccionApoderado3,
  comunaApoderado3,
  estadoCivilApoderado3,
  telefono1Apoderado3,
  telefono2Apoderado3,

  nombreApoderado4,
  rutApoderado4,
  nacionalidadApoderado4,
  correoApoderado4,
  direccionApoderado4,
  comunaApoderado4,
  estadoCivilApoderado4,
  telefono1Apoderado4,
  telefono2Apoderado4,

  nombreApoderado5,
  rutApoderado5,
  nacionalidadApoderado5,
  correoApoderado5,
  direccionApoderado5,
  comunaApoderado5,
  estadoCivilApoderado5,
  telefono1Apoderado5,
  telefono2Apoderado5,

  nombreApoderado6,
  rutApoderado6,
  nacionalidadApoderado6,
  correoApoderado6,
  direccionApoderado6,
  comunaApoderado6,
  estadoCivilApoderado6,
  telefono1Apoderado6,
  telefono2Apoderado6,

  nombreApoderado7,
  rutApoderado7,
  nacionalidadApoderado7,
  correoApoderado7,
  direccionApoderado7,
  comunaApoderado7,
  estadoCivilApoderado7,
  telefono1Apoderado7,
  telefono2Apoderado7,

  nombreAAM,
  rutAAM,
  nacionalidadAAM,
  correoAAM,
  direccionAAM,
  comunaAAM,
  estadoCivilAAM,
  telefono1AAM,
  telefono2AAM,

  nombreAAM2,
  rutAAM2,
  nacionalidadAAM2,
  correoAAM2,
  direccionAAM2,
  comunaAAM2,
  estadoCivilAAM2,
  telefono1AAM2,
  telefono2AAM2,

  nombreAAM3,
  rutAAM3,
  nacionalidadAAM3,
  correoAAM3,
  direccionAAM3,
  comunaAAM3,
  estadoCivilAAM3,
  telefono1AAM3,
  telefono2AAM3,

  opcionMedios,
  inputMediosCorreo,

  opcionRelacionNatuAAM,
  inputNatuAAMotros,

  opcionRelacionAAM,
  inputRelacionAAM,

  opcionInfoCliente,

  bancoUSS,
  bancoCLP,
  tipoCuentaCLP,
  tipoCuentaUSS,
  nCuentaCLP,
  nCuentaUSS,

  bancoUSS2,
  bancoCLP2,
  tipoCuentaCLP2,
  tipoCuentaUSS2,
  nCuentaCLP2,
  nCuentaUSS2,

  opcionNivelRenta,
  inputFuenteRenta,

  opcionPatrimonio,

  opcionActCliente,
  inputActCliente,

  nomCargo,

  opcionClientePEP,

  rutPEP,
  nombreCompletoPEP,
  PEPagregado,

) {

  const image1 = await loadImage("(Ficha Persona Jurídica) (1) (6)_page-0001.jpg"); //Página 1
  // funcion para relacionar los datos del formulario con el PDF

  const pdf = new jsPDF("p", "pt", "letter"); //tipo PDF , letter = Carta

  pdf.addImage(image1, "PNG", 0, 0, 600, 800); // tamaño del PDF

  pdf.setFontSize(10);
  const date = new Date(); //Conseguir la Fecha actual en el formato Chileno
  const formattedDate = date.toLocaleDateString("es-CL");
  pdf.text(formattedDate, 515, 85);

  pdf.setFontSize(8); // asignar los valores y la posición en la que iran en el PDF
  pdf.text(razon, 120, 130);  //(x,y) x = izq/derecha  y = altura
  pdf.text(rut, 387, 130);
  pdf.text(nomFantasia, 120, 145);
  pdf.text(giro, 387, 145);
  pdf.text(residencia, 120, 160);
  pdf.text(direccion, 387, 160);
  pdf.text(comuna, 120, 172);
  pdf.text(correo, 387, 172);
  pdf.text(telefono1, 120, 187);
  pdf.text(telefono2, 387, 187);

  pdf.text(nombreGerente, 120, 258);
  pdf.text(rutGerente, 370, 258);
  pdf.text(nacionalidadGerente, 120, 272);
  pdf.text(correoGerente, 370, 272);
  pdf.text(direccionGerente, 120, 286);
  pdf.text(comunaGerente, 370, 286);
  pdf.text(estadoCivilGerente, 120, 300);
  pdf.text(telefono1Gerente, 370, 300);
  pdf.text(telefono2Gerente, 495, 300);

  pdf.text(nombreApoderado, 120, 390);
  pdf.text(rutApoderado, 370, 390);
  pdf.text(nacionalidadApoderado, 120, 405);
  pdf.text(correoApoderado, 370, 405);
  pdf.text(direccionApoderado, 120, 420);
  pdf.text(comunaApoderado, 370, 420);
  pdf.text(estadoCivilApoderado, 120, 435);
  pdf.text(telefono1Apoderado, 370, 435);
  pdf.text(telefono2Apoderado, 495, 435);

  pdf.text(nombreAAM, 120, 505);
  pdf.text(rutAAM, 370, 505);
  pdf.text(nacionalidadAAM, 120, 520);
  pdf.text(correoAAM, 370, 520);
  pdf.text(direccionAAM, 120, 535);
  pdf.text(comunaAAM, 370, 535);
  pdf.text(estadoCivilAAM, 120, 548);
  pdf.text(telefono1AAM, 370, 548);
  pdf.text(telefono2AAM, 495, 548);

  pdf.addPage(); //añadir otra Página

  const image2 = await loadImage("(Ficha Persona Jurídica) (1) (6)_page-0002.jpg"); //Página 2 PDF

  pdf.addImage(image2, "PNG", 0, 0, 600, 800);

  pdf.setFontSize(9);

  pdf.text(nombreGerente2 || "", 120, 105);
  pdf.text(rutGerente2 || "", 370, 105);
  pdf.text(nacionalidadGerente2 || "", 120, 120);
  pdf.text(correoGerente2 || "", 370, 120);
  pdf.text(direccionGerente2 || "", 120, 135);
  pdf.text(comunaGerente2 || "", 370, 135);
  pdf.text(estadoCivilGerente2 || "", 120, 148);
  pdf.text(telefono1Gerente2 || "", 370, 148);
  pdf.text(telefono2Gerente2 || "", 500, 148);


  pdf.text(nombreApoderado2 || "", 120, 197);
  pdf.text(rutApoderado2 || "", 370, 197);
  pdf.text(nacionalidadApoderado2 || "", 120, 212);
  pdf.text(correoApoderado2 || "", 370, 212);
  pdf.text(direccionApoderado2 || "", 120, 227);
  pdf.text(comunaApoderado2 || "", 370, 227);
  pdf.text(estadoCivilApoderado2 || "", 120, 240);
  pdf.text(telefono1Apoderado2 || "", 370, 240);
  pdf.text(telefono2Apoderado2 || "", 500, 240);

  pdf.text(nombreApoderado3 || "", 120, 259);
  pdf.text(rutApoderado3 || "", 370, 259);
  pdf.text(nacionalidadApoderado3 || "", 120, 273);
  pdf.text(correoApoderado3 || "", 370, 273);
  pdf.text(direccionApoderado3 || "", 120, 290);
  pdf.text(comunaApoderado3 || "", 370, 290);
  pdf.text(estadoCivilApoderado3 || "", 120, 303);
  pdf.text(telefono1Apoderado3 || "", 370, 303);
  pdf.text(telefono2Apoderado3 || "", 495, 303);

  pdf.text(nombreApoderado4 || "", 120, 326);
  pdf.text(rutApoderado4 || "", 370, 326);
  pdf.text(nacionalidadApoderado4 || "", 120, 342);
  pdf.text(correoApoderado4 || "", 370, 342);
  pdf.text(direccionApoderado4 || "", 120, 355);
  pdf.text(comunaApoderado4 || "", 370, 355);
  pdf.text(estadoCivilApoderado4 || "", 118, 370);
  pdf.text(telefono1Apoderado4 || "", 370, 370);
  pdf.text(telefono2Apoderado4 || "", 495, 370);

  pdf.text(nombreApoderado5 || "", 120, 400);
  pdf.text(rutApoderado5 || "", 370, 400);
  pdf.text(nacionalidadApoderado5 || "", 120, 415);
  pdf.text(correoApoderado5 || "", 370, 415);
  pdf.text(direccionApoderado5 || "", 120, 430);
  pdf.text(comunaApoderado5 || "", 370, 430);
  pdf.text(estadoCivilApoderado5 || "", 120, 445);
  pdf.text(telefono1Apoderado5 || "", 370, 445);
  pdf.text(telefono2Apoderado5 || "", 495, 445);

  pdf.text(nombreApoderado6 || "", 120, 475);
  pdf.text(rutApoderado6 || "", 370, 475);
  pdf.text(nacionalidadApoderado6 || "", 120, 492);
  pdf.text(correoApoderado6 || "", 370, 492);
  pdf.text(direccionApoderado6 || "", 120, 508);
  pdf.text(comunaApoderado6 || "", 370, 508);
  pdf.text(estadoCivilApoderado6 || "", 120, 518);
  pdf.text(telefono1Apoderado6 || "", 370, 518);
  pdf.text(telefono2Apoderado6 || "", 495, 518);

  pdf.text(nombreApoderado7 || "", 120, 550);
  pdf.text(rutApoderado7 || "", 370, 550);
  pdf.text(nacionalidadApoderado7 || "", 120, 564);
  pdf.text(correoApoderado7 || "", 370, 564);
  pdf.text(direccionApoderado7 || "", 120, 578);
  pdf.text(comunaApoderado7 || "", 370, 578);
  pdf.text(estadoCivilApoderado7 || "", 120, 592);
  pdf.text(telefono1Apoderado7 || "", 370, 592);
  pdf.text(telefono2Apoderado7 || "", 495, 592);


  pdf.text(nombreAAM2 || "", 120, 650);
  pdf.text(rutAAM2 || "", 370, 650);
  pdf.text(nacionalidadAAM2 || "", 120, 664);
  pdf.text(correoAAM2 || "", 370, 664);
  pdf.text(direccionAAM2 || "", 120, 678);
  pdf.text(comunaAAM2 || "", 370, 678);
  pdf.text(estadoCivilAAM2 || "", 120, 692);
  pdf.text(telefono1AAM2 || "", 370, 692);
  pdf.text(telefono2AAM2 || "", 495, 692);

  pdf.text(nombreAAM3 || "", 120, 724);
  pdf.text(rutAAM3 || "", 370, 724);
  pdf.text(nacionalidadAAM3 || "", 120, 738);
  pdf.text(correoAAM3 || "", 370, 738);
  pdf.text(direccionAAM3 || "", 120, 752);
  pdf.text(comunaAAM3 || "", 370, 752);
  pdf.text(estadoCivilAAM3 || "", 120, 766);
  pdf.text(telefono1AAM3 || "", 370, 766);
  pdf.text(telefono2AAM3 || "", 495, 766);

  pdf.addPage();

  const image3 = await loadImage("(Ficha Persona Jurídica) (1) (6)_page-0003.jpg"); //Página 3 PDF

  pdf.addImage(image3, "PNG", 0, 0, 600, 800);


  if (parseInt(opcionMedios) === 0) {
    pdf.circle(175, 85, 4, "FD");
  } else {
    pdf.circle(175, 102, 4, "FD");

    pdf.setFontSize(8);
    pdf.text(inputMediosCorreo || "", 70, 126);
  }

  if (parseInt(opcionRelacionNatuAAM) === 0) {
    pdf.circle(175, 167, 4, "FD");
  } else if (parseInt(opcionRelacionNatuAAM) === 1) {
    pdf.circle(175, 182, 4, "FD");
  } else {
    pdf.circle(175, 197, 4, "FD");

    pdf.setFontSize(8);
    pdf.text(inputNatuAAMotros || "", 60, 222);
  }

  if (parseInt(opcionRelacionAAM) === 0) {
    pdf.circle(110, 289, 4, "FD"); //accionista
  } else if (parseInt(opcionRelacionAAM) === 1) {
    pdf.circle(110, 306, 4, "FD"); //director
  } else if (parseInt(opcionRelacionAAM) === 2) {
    pdf.circle(110, 338, 4, "FD"); //empleado
  } else if (parseInt(opcionRelacionAAM) === 3) {
    pdf.circle(110, 354, 4, "FD"); //no relacionado

  } else {
    pdf.circle(110, 322, 4, "FD");

    pdf.setFontSize(8);
    pdf.text(inputRelacionAAM || "", 60, 395);
  }

  if (parseInt(opcionInfoCliente) === 0) {
    pdf.circle(387, 260, 4, "FD");
  } else if (parseInt(opcionInfoCliente) === 1) {
    pdf.circle(386, 275, 4, "FD");
  } else {
    pdf.circle(386, 290, 4, "FD");
  }

  pdf.text(bancoCLP, 93, 496);
  pdf.text(bancoUSS, 93, 519);
  pdf.text(tipoCuentaCLP, 245, 496);
  pdf.text(tipoCuentaUSS, 245, 519);
  pdf.text(nCuentaCLP, 400, 496);
  pdf.text(nCuentaUSS, 400, 519);

  pdf.text(bancoCLP2 || "", 93, 583);
  pdf.text(bancoUSS2 || "", 93, 609);
  pdf.text(tipoCuentaCLP2 || "", 245, 583);
  pdf.text(tipoCuentaUSS2 || "", 245, 609);
  pdf.text(nCuentaCLP2 || "", 394, 583);
  pdf.text(nCuentaUSS2 || "", 394, 609);

  if (parseInt(opcionNivelRenta) === 0) {
    pdf.circle(145, 649, 4, "FD");

    pdf.setFontSize(10);
    pdf.text(inputFuenteRenta || "", 110, 765);

  } else if (parseInt(opcionNivelRenta) === 1) {
    pdf.circle(145, 670, 4, "FD");

    pdf.setFontSize(10);
    pdf.text(inputFuenteRenta || "", 110, 765);

  } else if (parseInt(opcionNivelRenta) === 2) {
    pdf.circle(145, 702, 4, "FD");

    pdf.setFontSize(10);
    pdf.text(inputFuenteRenta || "", 110, 765);

  } else {
    pdf.circle(145, 732, 4, "FD");

    pdf.setFontSize(10);
    pdf.text(inputFuenteRenta || "", 110, 765);
  }

  if (parseInt(opcionPatrimonio) === 0) {
    pdf.circle(357, 702, 4, "FD");
  } else if (parseInt(opcionPatrimonio) === 1) {
    pdf.circle(357, 720, 4, "FD");
  } else if (parseInt(opcionPatrimonio) === 2) {
    pdf.circle(538, 702, 4, "FD");

  } else {
    pdf.circle(538, 718, 4, "FD");
  }

  pdf.addPage();

  const image4 = await loadImage("(Ficha Persona Jurídica) (1) (6)_page-0004.jpg"); //Página 4 PDF

  pdf.addImage(image4, "PNG", 0, 0, 600, 800);

  if (parseInt(opcionActCliente) === 0) {
    pdf.circle(113, 124, 4, "FD");
  } else if (parseInt(opcionActCliente) === 1) {
    pdf.circle(113, 140, 4, "FD");
  } else if (parseInt(opcionActCliente) === 2) {
    pdf.circle(113, 168, 4, "FD");
  } else if (parseInt(opcionActCliente) === 3) {
    pdf.circle(113, 197, 4, "FD");

  } else if (parseInt(opcionActCliente) === 4) {
    pdf.circle(233, 113, 4, "FD");
  } else if (parseInt(opcionActCliente) === 5) {
    pdf.circle(233, 129, 4, "FD");
  } else if (parseInt(opcionActCliente) === 6) {
    pdf.circle(235, 169, 4, "FD");
  } else if (parseInt(opcionActCliente) === 7) {
    pdf.circle(233, 198, 4, "FD");

  } else if (parseInt(opcionActCliente) === 8) {
    pdf.circle(394, 115, 4, "FD");
  } else if (parseInt(opcionActCliente) === 9) {
    pdf.circle(394, 133, 4, "FD");
  } else if (parseInt(opcionActCliente) === 10) {
    pdf.circle(392, 168, 4, "FD");

  } else {
    pdf.circle(394, 198, 4, "FD");

    pdf.setFontSize(9);
    pdf.text(inputActCliente || "", 65, 242);
  }

  //1
  const signatureImage = signaturePad.toDataURL();

  pdf.addImage(signatureImage, 'PNG', 50, 410, 300, 60);

  pdf.text(nombreGerente, 120, 340);
  pdf.text(rutGerente, 120, 360);
  pdf.text(nomCargo, 120, 378);

  pdf.setFontSize(10);
  const date2 = new Date(); //Conseguir la Fecha actual en el formato Chileno
  const formattedDate2 = date2.toLocaleDateString("es-CL");
  pdf.text(formattedDate, 120, 400);
  
  const signatureImagen = signaturePad.toDataURL();

  pdf.addImage(signatureImagen, 'PNG', 50, 410, 300, 60);

 
  pdf.addPage();

  const image5 = await loadImage("(Ficha Persona Jurídica) (1) (6)_page-0005.jpg"); //Página 5 PDF

  pdf.addImage(image5, "PNG", 0, 0, 600, 800);

  if (parseInt(opcionClientePEP) === 0) {
    pdf.circle(163, 327, 4, "FD");
  }else {
    pdf.circle(248, 327, 4, "FD");
  }
  
  pdf.addPage();

  const image6 = await loadImage("(Ficha Persona Jurídica) (1)-imágenes-6.jpg"); //Página 6 PDF

  pdf.addImage(image6, "PNG", 0, 0, 600, 800);
  
  pdf.setFontSize(11);

  pdf.text(rutPEP, 338 , 196);
  pdf.text(nombreCompletoPEP, 165 , 196);

  if (parseInt(PEPagregado) === 0) {
    pdf.circle(527, 189, 4, "FD");
  } else if (parseInt(PEPagregado) === 1) {
    pdf.circle(569, 189, 4, "FD");
  }

  pdf.save("Formulario Ficha de Cliente Persona Jurídica.pdf"); // nombre con el cual se descarga el PDF
}