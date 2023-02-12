const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/backend")
.then( () => console.log("connection successfull...."))
.catch(() => console.log("no connection"));