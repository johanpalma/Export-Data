const mongoose = require('mongoose');
const app = require('./app');

app.set('port', process.env.PORT || 4000);

async function main() {
    await mongoose.connect('mongodb://localhost:27017/submissions', { 
        useNewUrlParser: true,
        useUnifiedTopology: true })
          .then(() => {
                app.listen(app.get('port'), () => {
                    console.log(`Server on port: ${app.get('port')}`)
                });
        }).catch(err => console.log(err));
}

main();