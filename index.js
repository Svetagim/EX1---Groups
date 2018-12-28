const express = require ('express');

//my modouls
const ctrl = require('./controller/controller'),
      asyncWrapper = require('./controller/asyncWrapper');

//establish app()
const app  = express(),
      port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.get('/allgroups', asyncWrapper(ctrl.getAllGroups));
app.post('/setscore', asyncWrapper(ctrl.setGroupScore));
app.put('/scoresandwins', asyncWrapper(ctrl.groupsByScoreAndWin));
app.get('/gettop/:top', asyncWrapper(ctrl.getTopGroups));
app.get('/', asyncWrapper(ctrl.getAllGroups));
app.all('*', asyncWrapper(ctrl.falldown));


app.listen(port,
    () => console.log('Express server ready for requests on: ', port));
