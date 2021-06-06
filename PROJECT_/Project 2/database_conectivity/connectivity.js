const { createPool } = require('mysql')
let pool = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "khandagale",
    connectionLimit: 10

});
pool.query("select * from employee ", (err, result, fields) => {
    if (err) {
        return console.log(err);
    } else {
        let aa = new Array()
        aa = result
        return console.log(aa[0].fname)
    }

});
let req = require('express');
let app = req()
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.listen(8000, () => {
    console.log("Listing at 8000")
})

function a() {
    console.log("a")
}
    
