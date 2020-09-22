const express = require('express');
const mc = require('./controllers/messages_controlller');


const app = express();

app.use(express.json());

const messsagesBaseUrl = '/api/messages';
app.post(messsagesBaseUrl, mc.create);
app.get(messsagesBaseUrl, mc.read);
app.put(`${messsagesBaseUrl}/:id`, mc.update);
app.delete(`${messsagesBaseUrl}/:id`, mc.delete);

const port = 3001;
app.listen(port,() => {
    console.log(`Server listening on port ${port}`);
});
