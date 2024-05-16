const express = require('express');
const app = express();
const port = 3000; 


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/hmtl_cheat_sheet.html');
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.get('/end', (req,res)=>{
    res.sendFile(__dirname + '/public/end.html')
})