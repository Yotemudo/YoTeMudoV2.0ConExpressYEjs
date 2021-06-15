
const path = require ('path');
const controller = {


index:(req, res)=>{
    res.render(path.join(__dirname,'../../src/views/index'))
},
home:(req, res)=>{
      res.render(path.join(__dirname,'../../src/views/index'))  
},
login:(req, res)=>{
    res.render(path.join(__dirname,'../../src/views/login'))  
},
notfound:(req, res)=>{
    res.render(path.join(__dirname,'../../src/views/notfound'))  
},
carrito:(req, res)=>{
    res.render(path.join(__dirname,'../../src/views/carrito'))  
},
producto:(req, res)=>{
    res.render(path.join(__dirname,'../../src/views/producto'))  
},
registro:(req, res)=>{
    res.render(path.join(__dirname,'../../src/views/registro'))  
},

}

module.exports = controller;
