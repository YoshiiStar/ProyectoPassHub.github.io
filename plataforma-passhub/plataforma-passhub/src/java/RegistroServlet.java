import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/RegistroServlet")
public class RegistroServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String apellidos = request.getParameter("apellidos");
        String nombres = request.getParameter("nombres");
        String celular = request.getParameter("celular");
        String correo = request.getParameter("correo");
        String contraseña = request.getParameter("contraseña");
        String sexo = request.getParameter("sexo");
        String pais = request.getParameter("pais");
        String provincia = request.getParameter("provincia");

        try {
            // Conexión a la base de datos
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/passhub", "root", "");

            // Query de inserción
            String sql = "INSERT INTO usuarios (apellidos, nombres, celular, correo, contraseña, sexo, pais, provincia) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, apellidos);
            statement.setString(2, nombres);
            statement.setString(3, celular);
            statement.setString(4, correo);
            statement.setString(5, contraseña);
            statement.setString(6, sexo);
            statement.setString(7, pais);
            statement.setString(8, provincia);

            // Ejecutar la consulta
            statement.executeUpdate();

            // Cerrar la conexión
            statement.close();
            conn.close();

            // Responder con éxito
            response.getWriter().write("success");

        } catch (Exception e) {
            e.printStackTrace();
            response.getWriter().write("error");
        }
    }
}
