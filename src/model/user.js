var Sequelize = require('sequelize');
var sequelize = require('./database');

var Role = require('./role');
var Especialidade = require('./especialidade');

var user = sequelize.define('user',{
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      telemovel: Sequelize.BIGINT,
      nif: Sequelize.INTEGER,
      qrcode: Sequelize.STRING,
      obs: Sequelize.STRING,
      especialidadeId:{
        type: Sequelize.INTEGER,
        references:{
            model: Especialidade,
            key: 'id'
         }
        },
        roleId:{
            type: Sequelize.INTEGER,
            references:{
                model: Role,
                key: 'id'
            }
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    
   user.belongsTo(Role);
   user.belongsTo(Especialidade);

    module.exports = user