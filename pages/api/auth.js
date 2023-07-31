// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import databaseAuthService from '../../services/databaseUserService';
import CompareAuthService from "../../services/authService";
import withSession from "../../lib/sesion";

const DBAuthService = databaseAuthService();
const AuthCompare = CompareAuthService();

export default withSession(async (req, res) => {
  const ERROR_CREDENTIALS = "Nombre o Contraseña incorrectas";

  const method = req.method.toLocaleLowerCase();
  const { username, password } = req.body;

  if (method !== 'post') {
    return res.status(405).end(`Method ${req.method} no autorizado`)
  }

  try {
    const userCredentials = await DBAuthService.getUsuario(username);
    if(await AuthCompare.validate(password,userCredentials.password) === true) {
      await saveSession({userCredentials},req);
      res.status(200).json({nuevoUsuario});
      return;
    }
  } catch (error) {
    console.log(error)
  }
})

async function saveSession(user,request){
  request.session.set("user",user);
  await request.session.save();
}