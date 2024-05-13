import Admin from "@models/admin"
import { connectToDB } from "@utils/database"
const jwt = require('jsonwebtoken')

export const GET = async (req, res) => {
    // console.log(req.headers)
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        const tokenerr = JSON.stringify('invalid token')
        return new Response(tokenerr)
    }
    console.log(token)
    console.log('==============================')
    try {
        await connectToDB()
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        const userName = decoded.username
        Admin.findOne({username: userName }).then(findAdmin => {
            if (findAdmin) {
                const sucRes = JSON.stringify(findAdmin)
                return new Response(sucRes, { status: 200, headers: { "Content-Type": "application/json" }})
            } else {
                // If neither client nor merchant is found, handle the error
                throw new Error('User not found');
            }
        })

    } catch (error) {
        console.log(error)
    }
}