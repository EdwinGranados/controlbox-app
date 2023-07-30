import  withSession from "../../lib/sesion";

export default withSession (async (req,res) => {
    req.session.destroy();
    res.redirect('/');
})