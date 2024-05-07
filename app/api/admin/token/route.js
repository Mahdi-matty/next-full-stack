import Admin from "@models/admin"
import { connectToDB } from "@utils/database"
import { jwt } from "jsonwebtoken"

export const GET = async (req, res) => {
    const token = req?.headers?.authorization?.split(" ")[1]
    console.log(token)
    console.log('==============================')
    try {
        await connectToDB()
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        const userName = decoded.username
        Admin.findOne({
            where: {
                username: userName
            }
        }).then(findAdmin => {
            if (findAdmin) {
                return res.json(findAdmin);
            } else {
                // If neither client nor merchant is found, handle the error
                throw new Error('User not found');
            }
        })

    } catch (error) {
        console.log(error)
    }
}