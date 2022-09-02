import nc from "next-connect";
import { executeQuery } from "../../../lib/db.js";
const handler = nc();
handler.post(async(req, res) => {
    const body = req.body;
    if (body.act == "insertUsers") {
        let resData = await executeQuery(
            "insert into users (email,fname,lname,phone,password) values(?,?,?,?,?)", [body.email, body.fname, body.lname, body.phone, body.password]
        );
        res.json("Insert Sucess : ");
    } else if (body.act == "delUsers") {
        executeQuery(
            "delete from users where id = ?", [body.id]
        );
    }
});
export default handler;