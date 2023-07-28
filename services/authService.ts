import * as bcrypt from "bcryptjs"


export default function CompareAuthService() {
    const validate = async (password: string, dbpassword: string) => {
        return await bcrypt.compare(password, dbpassword);
    }

    const encrypt = async (Password: string) => {
        return await bcrypt.hash(Password,10)
    }
    return { validate, encrypt }
}