// funcion agregar Gerente
document.addEventListener('DOMContentLoaded', function () {
  var agregarCampoBtn = document.getElementById('agregarGerenteBtn');
  var camposContainer = document.getElementById('camposGerente');
  var campoIndex = 2;

  agregarCampoBtn.addEventListener('click', function () {
    var nuevoCampoHTML = `
                    <!-- código HTML-->
                    <div class="col-md-6">
                            <label for="nombreGerente${campoIndex}" class="form-label">Nombre Completo(${campoIndex})</label>
                            <input type="text" name="nombreGerente${campoIndex}" placeholder="Nombre Completo(${campoIndex})" class="form-control" id="nombreGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="rutGerente${campoIndex}" class="form-label">RUT(${campoIndex})</label>
                            <input type="text" name="rutGerente${campoIndex}" placeholder="RUT(${campoIndex})" class="form-control" id="rutGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="nacionalidadGerente${campoIndex}" class="form-label">Nacionalidad(${campoIndex})</label>
                            <input type="text" name="nacionalidadGerente${campoIndex}" placeholder="Nacionalidad(${campoIndex})" class="form-control"
                                id="nacionalidadGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="correoGerente${campoIndex}" class="form-label">Correo Electrónico(${campoIndex})</label>
                            <input type="email" name="correoGerente${campoIndex}" placeholder="Correo Electrónico(${campoIndex})"
                                class="form-control" id="correoGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="direccionGerente${campoIndex}" class="form-label">Dirección(${campoIndex})</label>
                            <input type="text" name="direccionGerente${campoIndex}" placeholder="Dirección(${campoIndex})" class="form-control"
                                id="direccionGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="comunaGerente${campoIndex}" class="form-label">Comuna(${campoIndex})</label>
                            <input type="text" name="comunaGerente${campoIndex}" placeholder="Comuna(${campoIndex})" class="form-control"
                                id="comunaGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="estadoCivilGerente${campoIndex}" class="form-label">Estado Civil(${campoIndex})</label>
                            <input type="text" name="estadoCivilGerente${campoIndex}" placeholder="Estado Civil(${campoIndex})" class="form-control"
                                id="estadoCivilGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="telefono1Gerente${campoIndex}" class="form-label">Teléfono 1(${campoIndex})</label>
                            <input type="tel" name="telefono1Gerente${campoIndex}" placeholder="Teléfono 1(${campoIndex})" class="form-control"
                                id="telefono1Gerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="telefono2Gerente${campoIndex}" class="form-label">Telefóno 2(${campoIndex})</label>
                            <input type="tel" name="telefono2Gerente${campoIndex}" placeholder="Telefóno 2(${campoIndex})" class="form-control"
                                id="telefono2Gerente${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>
                `;
    var nuevoCampoContainer = document.createElement('div');
    nuevoCampoContainer.classList.add('row');
    nuevoCampoContainer.innerHTML = nuevoCampoHTML;

    camposContainer.appendChild(nuevoCampoContainer);

    campoIndex++;
  });
});

// funcion agregar apoderados
document.addEventListener('DOMContentLoaded', function () {
  var agregarCampoBtn = document.getElementById('agregarCampoBtn');
  var camposContainer = document.getElementById('campos');
  var campoIndex = 2;

  agregarCampoBtn.addEventListener('click', function () {
    var nuevoCampoHTML = `
                    <!-- código HTML-->
                    <div class="col-md-6">
                        <label for="nombreApoderado${campoIndex}" class="form-label">Nombre Completo(${campoIndex})</label>
                        <input type="text" name="nombreApoderado${campoIndex}" placeholder="Nombre Completo(${campoIndex})" class="form-control"
                            id="nombreApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                        <label for="rutApoderado${campoIndex}" class="form-label">RUT (${campoIndex})</label>
                        <input type="text" name="rutApoderado${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control"
                            id="rutApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                       <label for="nacionalidadApoderado${campoIndex}" class="form-label">Nacionalidad (${campoIndex})</label>
                       <input type="text" name="nacionalidadApoderado${campoIndex}" placeholder="Nacionalidad (${campoIndex})" class="form-control" id="nacionalidadApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                       <label for="correoApoderado${campoIndex}" class="form-label">Correo Electrónico (${campoIndex})</label>
                       <input type="email" name="correoApoderado${campoIndex}" placeholder="Correo Electrónico (${campoIndex})"
                       class="form-control" id="correoApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                       <label for="direccionApoderado${campoIndex}" class="form-label">Dirección (${campoIndex})</label>
                       <input type="text" name="direccionApoderado${campoIndex}" placeholder="Dirección (${campoIndex})" class="form-control"
                       id="direccionApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                       <label for="comunaApoderado${campoIndex}" class="form-label">Comuna (${campoIndex})</label>
                       <input type="text" name="comunaApoderado${campoIndex}" placeholder="Comuna (${campoIndex})" class="form-control"
                       id="comunaApoderado${campoIndex}">
                    </div>
                   <div class="col-md-6">
                       <label for="estadoCivilApoderado${campoIndex}" class="form-label">Estado Civil (${campoIndex})</label>
                       <input type="text" name="estadoCivilApoderado${campoIndex}" placeholder="Estado Civil (${campoIndex})"
                       class="form-control" id="estadoCivilApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                       <label for="telefono1Apoderado${campoIndex}" class="form-label">Telefóno 1 (${campoIndex})</label>
                       <input type="tel" name="telefono1Apoderado${campoIndex}" placeholder="Telefóno 1 (${campoIndex})" class="form-control"
                       id="telefono1Apoderado${campoIndex}">
                    </div>
                   <div class="col-md-6">
                       <label for="telefono2Apoderado${campoIndex}" class="form-label">Telefóno 2 (${campoIndex})</label>
                       <input type="tel" name="telefono2Apoderado${campoIndex}" placeholder="Telefóno 2 (${campoIndex})" class="form-control"
                       id="telefono2Apoderado${campoIndex}">
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                `;
    var nuevoCampoContainer = document.createElement('div');
    nuevoCampoContainer.classList.add('row');
    nuevoCampoContainer.innerHTML = nuevoCampoHTML;

    camposContainer.appendChild(nuevoCampoContainer);

    campoIndex++;
  });
});

// funcion agregar AAM
document.addEventListener('DOMContentLoaded', function () {
  var agregarAAMBtn = document.getElementById('agregarAAMBtn');
  var camposContainerAAM = document.getElementById('camposAAM');
  var campoIndex = 2;

  agregarAAMBtn.addEventListener('click', function () {
    var nuevoCampoHTML = `
                <!-- código HTML-->
                        <div class="col-md-6">
                            <label for="nombreAAM${campoIndex}" class="form-label">Nombre Completo(${campoIndex})</label>
                            <input type="text" name="nombreAAM${campoIndex}" placeholder="Nombre Completo(${campoIndex})" class="form-control"
                                id="nombreAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="rutAAM${campoIndex}" class="form-label">RUT (${campoIndex})</label>
                            <input type="text" name="rutAAM${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control" id="rutAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="nacionalidadAAM${campoIndex}" class="form-label">Nacionalidad (${campoIndex})</label>
                            <input type="text" name="nacionalidadAAM${campoIndex}" placeholder="Nacionalidad (${campoIndex})" class="form-control"
                                id="nacionalidadAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="correoAAM${campoIndex}" class="form-label">Correo Electrónico (${campoIndex})</label>
                            <input type="email" name="correoAAM${campoIndex}" placeholder="Correo Electrónico (${campoIndex})" class="form-control"
                                id="correoAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="direccionAAM${campoIndex}" class="form-label">Dirección (${campoIndex})</label>
                            <input type="text" name="direccionAAM${campoIndex}" placeholder="Dirección (${campoIndex})" class="form-control"
                                id="direccionAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="comunaAAM${campoIndex}" class="form-label">Comuna (${campoIndex})</label>
                            <input type="text" name="comunaAAM${campoIndex}" placeholder="Comuna (${campoIndex})" class="form-control"
                                id="comunaAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="estadoCivilAAM${campoIndex}" class="form-label">Estado Civil (${campoIndex})</label>
                            <input type="text" name="estadoCivilAAM${campoIndex}" placeholder="Estado Civil (${campoIndex})" class="form-control"
                                id="estadoCivilAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="telefono1AAM${campoIndex}" class="form-label">Telefóno 1 (${campoIndex})</label>
                            <input type="tel" name="telefono1AAM${campoIndex}" placeholder="Telefóno 1 (${campoIndex})" class="form-control"
                                id="telefono1AAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="telefono2AAM${campoIndex}" class="form-label">Telefóno 2 (${campoIndex})</label>
                            <input type="tel" name="telefono2AAM${campoIndex}" placeholder="Telefóno 2 (${campoIndex})" class="form-control"
                                id="telefono2AAM${campoIndex}">
                        </div>
                <br>
                <br>
                <br>
                <br>
                <br>
            `;
    var nuevoCampoContainer = document.createElement('div');
    nuevoCampoContainer.classList.add('row');
    nuevoCampoContainer.innerHTML = nuevoCampoHTML;

    camposContainerAAM.appendChild(nuevoCampoContainer);

    campoIndex++;
  });
});


document.addEventListener('DOMContentLoaded', function () { //agregar cta corriente
  var agregarCampoBtn = document.getElementById('agregarCtasCorrientes');
  var camposContainer = document.getElementById('camposCtasCorrientes');
  var campoIndex = 2;

  agregarCampoBtn.addEventListener('click', function () {
    var nuevoCampoHTML = `
            <!-- Código HTML para agregar campos -->
            <div class="col-md-6">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Moneda</th>
                                        <th scope="col">Banco</th>
                                        <th scope="col">Tipo de Cuenta</th>
                                        <th scope="col">N° de Cuenta</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">CLP</th>
                                        <td><input type="text" id="bancoCLP${campoIndex}"></td>
                                        <td><input type="text" id="tipoCuentaCLP${campoIndex}"></td>
                                        <td><input type="number" id="nCuentaCLP${campoIndex}"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">USS</th>
                                        <td><input type="text" id="bancoUSS${campoIndex}"></td>
                                        <td><input type="text" id="tipoCuentaUSS${campoIndex}"></td>
                                        <td><input type="number" id="nCuentaUSS${campoIndex}"></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                                      `;
    var nuevoCampoContainer = document.createElement('div');
    nuevoCampoContainer.classList.add('row');
    nuevoCampoContainer.innerHTML = nuevoCampoHTML;

    camposCtasCorrientes.appendChild(nuevoCampoContainer);

    campoIndex++;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const agregarClientesPEPBtn = document.getElementById('agregarClientesPEP');
  const clientesPEPContainer = document.getElementById('clientesPEPContainer');

  let clienteIndex = 2; // Índice para identificar los clientes PEP

  agregarClientesPEPBtn.addEventListener('click', function () {
    const nuevoClientePEP = `
      <div class="input-group md-6">
        <span class="input-group-text">Nombre Completo y RUT</span>
        <input type="text" id="nombreCompletoPEP${clienteIndex}" placeholder="Nombre Completo (${clienteIndex})"
          class="form-control">
        <input type="text" id="rutPEP${clienteIndex}" placeholder="RUT (${clienteIndex})" class="form-control">

        <div class="input-group-text">
          <label for="PEPsi">Si</label>
          <input name="PEPagregado" class="form-check-input mt-0" type="radio" value="${clienteIndex}">
        </div>

        <div class="input-group-text">
          <label for="PEPno">No</label>
          <input name="PEPagregado" class="form-check-input mt-0" type="radio" value="${1 + clienteIndex}">
        </div>
      </div>
        `;
    const nuevoClienteContainer = document.createElement('div');
    nuevoClienteContainer.innerHTML = nuevoClientePEP;

    // Incrementar el índice para identificar los nuevos clientes PEP
    clienteIndex++;

    // Agregar el nuevo cliente PEP al contenedor de clientes PEP
    clientesPEPContainer.appendChild(nuevoClienteContainer);
  });
});

