import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String correo = request.getParameter("email");
        String contraseña = request.getParameter("password");
        JSONObject jsonResponse = new JSONObject();

        try {
            // Conectar a la base de datos
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/passhub", "root", "");

            // Query para verificar el correo y la contraseña
            String sql = "SELECT nombres, apellidos FROM usuarios WHERE correo = ? AND contraseña = ?";
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, correo);
            statement.setString(2, contraseña);
            ResultSet resultSet = statement.executeQuery();

            // Verificar si se encontró el usuario
            if (resultSet.next()) {
                String nombres = resultSet.getString("nombres");
                String apellidos = resultSet.getString("apellidos");

                // Respuesta de éxito con los datos del usuario
                jsonResponse.put("status", "success");
                jsonResponse.put("nombres", nombres);
                jsonResponse.put("apellidos", apellidos);
            } else {
                // Respuesta de error si no se encontró
                jsonResponse.put("status", "error");
            }

            resultSet.close();
            statement.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
            jsonResponse.put("status", "error");
        }

        // Enviar la respuesta en formato JSON
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(jsonResponse);
        out.flush();
    }
}
