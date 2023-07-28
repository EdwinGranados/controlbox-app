import { PrismaClient, usuario } from '@prisma/client';


const Prisma = new PrismaClient()

export default function databaseAuthService() {
    const getUsuario = async (nombreUsuario: string) => {
        const Usuario = await Prisma.usuario.findUnique({
            where: {
                nombreUsuario: nombreUsuario
            },
            select: {
                nombreUsuario: true,
                email: true,
                password: true,
            },
        })

        if (!Usuario) {
            throw new Error("El usuario no Existe");
        }
        return Usuario
    };

    const setUsuario = async (username,Password,email) => {
        const nuevoUsuario = await Prisma.usuario.create({
            data: {
                nombreUsuario: username,
                password: Password,
                email: email
            }
        })

        if (!nuevoUsuario) {
            throw new Error('Error al Crear usuario');
        }
    }

    return { getUsuario, setUsuario };
}
