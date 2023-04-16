const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/myproject')
.then(()=>{
    console.log(`connect`)
}).catch((error)=>{
    alert(error)
})