var Sequelize = require('sequelize');
var sequelize = require('./database');

var Clinica = require('./clinica');
var User = require('./user');

var marcacao = sequelize.define('marcacao',{
      data: Sequelize.DATEONLY,
      hora: Sequelize.DATE,
      tratatamento: Sequelize.STRING,
      horaatraso: Sequelize.INTEGER,
      obs: Sequelize.STRING,
      clinicaId:{
          type: Sequelize.INTEGER,
          references:{
              model:Clinica,
              key: 'id'
          },
        userId:{
            type:Sequelize.INTEGER,
            references:{
                model: User,
                key: 'id'
            }
        }
      }
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    
    marcacao.belongsTo(Clinica);
    marcacao.belongsTo(User);

    module.exports = marcacao