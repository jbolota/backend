var marcacao = require('../model/marcacao');
var User = require('../model/user');
var Clinica = require('../model/clinica');
var Tem2 = require('../model/tem2');
var sequelize = require('../model/database.js');

const controllers = {}
sequelize.sync();

//LISTA
controllers.lista = async(req, res)=>{
    const data = await marcacao.findAll({
        include: [User, Clinica]
    })
    .then( function(data){
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

//TEMPO DE ESPERA ATÉ À HORA ATUAL USER PACIENTE 
controllers.tempoespera = async(req, res) => {
    const { id } = req.params;
    const data = await marcacao.findAll({
        attributes:['hora'],
        where: { id: id }
    })
    .then( function(data){
        //const daysBetween = new Date().getDate() - data[0].hora.getDate()
       // tempo: Date(), hora: data[0].hora, tempoespera:  new Date().getDate() - data[0].hora.getDate()

      // const daysBetween =  data[0].hora;
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data[0].hora, dataactual: new Date()});
}

module.exports = controllers;