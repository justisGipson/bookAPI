const Sequelize = require('sequelize');
const sequelize = new Sequelize('bookapi', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
        console.log('servin up some books');
    },
    function(err){
        console.log(err);
    }
)

module.exports = sequelize;