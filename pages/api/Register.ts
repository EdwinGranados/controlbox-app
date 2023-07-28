import databaseAuthService from '../../services/databaseUserService';
import CompareAuthService from "../../services/authService";
import withSession from "../../lib/sesion";

const AuthCompare = CompareAuthService();
const DBUserService = databaseAuthService();

export default withSession(async (req, res) => {
    const method = req.method.toLocaleLowerCase();
    const { username, password, email } = req.body;

    if (method !== 'post') {
        return res.status(405).end(`Method ${req.method} no autorizado`)
    }
    const encrytPassword = await AuthCompare.encrypt(password)
    try {
        await DBUserService.setUsuario(username,encrytPassword,email);
        const nuevoUsuario = await DBUserService.getUsuario(username)
        if(nuevoUsuario !== undefined) {
          res.status(200).json({nuevoUsuario});
          return;
        }
      } catch (error) {
        console.log(error)
      }
})