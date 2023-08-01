import * as bcrypt from "bcryptjs"


export default function CompareAuthService() {
    const validate = async (password, dbpassword) => {
        return await bcrypt.compare(password, dbpassword);
    }

    const encrypt = async (Password) => {
        return await bcrypt.hash(Password,10)
    }
    return { validate, encrypt }
}