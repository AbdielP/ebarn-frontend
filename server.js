const express = require('express');
const app = express();

app.use(express.static(`./dist/ebarn-frontend`));

app.get(`/*`, function(req, res) {
    res.sendFile(`index.html`, {root: `dist/ebarn-frontend`});
});

app.listen(process.env.PORT || 8080, function() {
    console.log(`Listening: Server on port: `, process.env.PORT || 8080);
});