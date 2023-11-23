const app = require('./App');
const PORT = process.env.PORT || 4000;
const connectionDB = require('./config/Database');

// Start the server and connect the mongodb database
connectionDB()
    .then(()=>{
        app.listen(PORT,function(){
            console.log(`********** Server is start :- ${PORT} **********`)
        })
    })
    .catch((err)=>{
        console.log("Error to start server :- ",err.message)
    })