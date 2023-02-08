const Registro = require("../models/Registro");

exports.crearRegistro = async (req, res) => {
    try {
        let registro;
        registro = new Registro(req.body);

        await registro.save();
        res.send(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRegistro = async (req, res) => {

    try {

        const registro = await Registro.find();
        res.json(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarRegistro = async (req, res) => {

    try {
        const {nombre, informacion} = req.body;
        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({ msg: 'No existe el registro'})
        }

        registro.nombre = nombre;
        registro.informacion = informacion;

        registro = await Registro.findByIdAndUpdate({ _id: req.params.id }, registro, { new:true})
        res.json(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUnRegistro = async (req, res) => {

    try {
        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({ msg: 'No existe el registro'})
        }
        res.json(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRegistro = async (req, res) => {

    try {
        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({ msg: 'No existe el registro'})
        }

        await Registro.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'Registro eliminado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}