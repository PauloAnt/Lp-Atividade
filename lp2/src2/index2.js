import express from "express";
import  mm  from './lib2/mm.js';

const app = express();

app.get('/mm', (req, res) => {
    const action = (req.query.action);
    
    const input = JSON.parse("[" + req.query.nums + "]");
    const output = Number(mm(action,input));
    const result = {
        action,
        input,
        output
    }
    res.json(result);    
});
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
