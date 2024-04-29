import express from 'express';

const app = express();
const PORT = 3000

app.use(express.json())

let cards = [];

//Logic

function Validate_C(crd, crds){
    const need_char = ['id', 'name', 'description', 'valor nutrimental'];
    for(let nchar of need_char ){
        if(!(nchar in crd)){
            return false;
        }
    }

    for(let a_crd of crds){
        if(a_crd.id === crd.id){
            return false;
        }
    }

    return true;
}

//Gets
app.get('/cards', (req, res) => {
    if (cards.length === 0) {
      return res.status(200).json({ message: 'Vacio' });
    }
    res.json(cards);
});

app.get('/cards/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let card = null;
    for(let i = 0; i < cards.length; i++){
        if(cards[i].id === id){
            card = cards[i];
            break;
        }
    }

    if(!card){
        return res.status(404).json({message: 'No se puede encontrar la carta'})

    }
    res.json(card);
}

);

//Posts

app.post('/cards', (req,res) => {
    const newC = req.body;
    let added = true;
    const vc = [];

    for(let crd of newC ){
        if(!Validate_C(crd,cards)){
            added = false;
            break;
        }
        vc.push(crd)
    }

    if (added === false) {
        return res.status(400).json({message: 'No se pudo agregar alguna carta'})
    }

    cards.push(...vc);
    res.status(201).json({message: 'Todas las cartas se agregaron exitosamente'})
}

);

//Deletes

app.delete('/cards/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    let rmv = -1

    for(let i=0; i<cards.length; i++ ){
        if(cards[i].id === id){
            rmv = i;
            break;
        }
    }

    if(rmv === -1){
        return res.status(404).json({message: 'Carta inexistente'});
    }

    cards.splice(rmv, 1);
    res.status(200).json({message: 'Carta borrada'})
    
});

//Puts

app.put('/cards/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const update = req.body;
    let updt = -1;

    for(let i=0; i<cards.length; i++){
        if(cards[i].id === id){
            updt = i;
            break;
        }

    }

    if(updt === -1){
        return res.status(404).json({message: "No se puede encontar la cara"})
    }

    const crd = cards[updt];
    for(let i in update){
        if(i in crd){
            crd[i] = update[i];
        }
    }

    res.status(200).json({message: 'la carta ha sido actualizada'})

    
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
