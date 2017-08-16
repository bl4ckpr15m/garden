let express = require('express'),
	compression = require('compression');


let app = espress();


//Config views
app.set('views engine', 'html');
app.set('views', './app');
app.set('port', (process.env.PORT || 5000));

//Static files
app.use(compression());
app.use(express.static(__dirname));

app.use(function(req, res){
	res.sendFile(__dirname+'/index.html');
});

app.listen(app.get('port'), () => {
	console.log("Node in "+app.settings.env+" mode at http://localhost:" +app.get('port'));
});
