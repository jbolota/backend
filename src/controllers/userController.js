var user = require('../model/user');

var Role = require('../model/Role');
var Especialidade = require('../model/especialidade');

var sequelize = require('../model/database.js');

const controllers = {}
sequelize.sync();

//LISTA
controllers.lista = async(req, res) =>{
    const data = await user.findAll({
        include: [Role,Especialidade]
    })
    .then( function(data){
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

//REGISTAR 
controllers.create = async (req,res) =>{
    //data
    const {nome,email,password,telemovel,nif,qrcode,obs,especialidadeId,roleId} = req.body;
    //create
    const data = await user.create({
        nome: nome,
        email: email,
        password: password,
        telemovel: telemovel,
        nif: nif,
        qrcode: qrcode,
        obs: obs,
        especialidadeId: especialidadeId,
        roleId: roleId
    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log("Erro:" +error)
        return error;
    })
    res.status(200).json({
        success: true,
        message: "Utilizador Registado com sucesso",
        data: data
    });
}

//APAGAR
controllers.delete = async (req,res) =>{
    const { id } = req.body;
    const del = await user.destroy({
        where: {id:id}
    })
    res.json({success:true, deleted:del, message:"Apagado com sucesso!"});
}


//// INFO USER POR IDUSER
controllers.getinfo = async(req, res) =>{
    const { id } = req.params;
    const data = await user.findAll({
        where: { id: id }
    })
    .then( function(data){
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

//// QRCODE LINK USER POR IDUSER
controllers.getqrcode = async(req, res) =>{
    const { id } = req.params;
    const data = await user.findAll({
        attributes:['qrcode'],
        where: { id: id }
    })
    .then( function(data){
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

/// ALTERA ROLE DE FUNCIONÁRIO
controllers.setrole = async(req, res) =>{
    const { id } = req.params;
    const { roleId } = req.body;
    const data = await user.update({
        roleId: roleId
    },
    {
        where: { id: id}
    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        return error;
    })
    res.json({success:true, data:data, message:" Role actualizada"});
}
module.exports = controllers;