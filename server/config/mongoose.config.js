const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product2db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Server on"))
    .catch(err=>console.log("Server off", err))