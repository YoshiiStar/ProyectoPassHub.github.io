<!DOCTYPE html>
<html>
    <head>
        <title>Registro de Usuario</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
        <div class="container mt-5">
            <h2>Registro de Usuario</h2>
            <form action="RegistroServlet" method="post" id="registroForm">
                <div class="form-group">
                    <label for="apellidos">Apellidos</label>
                    <input type="text" class="form-control" id="apellidos" name="apellidos" required>
                </div>
                <div class="form-group">
                    <label for="nombres">Nombres</label>
                    <input type="text" class="form-control" id="nombres" name="nombres" required>
                </div>
                <div class="form-group">
                    <label for="celular">Celular</label>
                    <input type="text" class="form-control" id="celular" name="celular" required>
                </div>
                <div class="form-group">
                    <label for="correo">Correo</label>
                    <input type="email" class="form-control" id="correo" name="correo" required>
                </div>
                <div class="form-group">
                    <label for="contraseña">Contraseña</label>
                    <input type="password" class="form-control" id="contraseña" name="contraseña" required>
                </div>
                <div class="form-group">
                    <label for="sexo">Sexo</label>
                    <select class="form-control" id="sexo" name="sexo" required>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="pais">País</label>
                    <input type="text" class="form-control" id="pais" name="pais" required>
                </div>
                <div class="form-group">
                    <label for="provincia">Provincia</label>
                    <input type="text" class="form-control" id="provincia" name="provincia" required>
                </div>
                <button type="submit" class="btn btn-primary">Registrar</button>
            </form>
        </div>

        <!-- Modal de confirmación -->
        <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmationModalLabel">REGISTRO EXITOSO</h5>
                    </div>
                    <div class="modal-body">
                        ¡El usuario ha sido registrado exitosamente!
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="closeModalBtn">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>


        <script>

            $(document).ready(function () {
                $("#registroForm").on("submit", function (e) {
                    e.preventDefault(); // Evita que el formulario recargue la página
                    $.post("RegistroServlet", $(this).serialize(), function (data) {
                        if (data === 'success') {
                            $("#confirmationModal").modal('show'); // Muestra el modal
                        }
                    });
                });

                // Redirige a la página principal al hacer clic en el botón de aceptar
                $("#closeModalBtn").on("click", function () {
                    $("#confirmationModal").modal('hide'); // Cierra el modal
                    setTimeout(function () {
                        window.location.href = "index.html"; // Redirige después de cerrar el modal
                    }, 500); // Espera un poco para asegurar que el modal se haya cerrado
                });
            });


        </script>
    </body>
</html>
