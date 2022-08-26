import nc from "next-connect";
// import { getAllUser } from "../../../controller/users/users";
import { executeQuery } from "../../../lib/db.js";
const handler = nc();
handler.post(async(req, res) => {
    const body = req.body;
    let UserData = await executeQuery("select * from users", []);
    res.json(UserData)
})
export default handler;