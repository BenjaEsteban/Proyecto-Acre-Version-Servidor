const Unidad = require("../models/Unidad");

exports.crearUnidad = async (req, res) => {
    try {
        let unidad;
        unidad = new Unidad(req.body);

        await unidad.save();
        res.send(unidad);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUnidad = async (req, res) => {

    try {

        const unidad = await Unidad.find();
        res.json(unidad);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarUnidad = async (req, res) => {

    try {
        const {nombre, informacion} = req.body;
        let unidad = await Unidad.findById(req.params.id);

        if(!unidad){
            res.status(404).json({ msg: 'No existe el unidad'})
        }

        unidad.nombre = nombre;
        unidad.informacion = informacion;

        unidad = await Unidad.findByIdAndUpdate({ _id: req.params.id }, unidad, { new:true})
        res.json(unidad);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUnUnidad = async (req, res) => {

    try {
        let unidad = await Unidad.findById(req.params.id);

        if(!unidad){
            res.status(404).json({ msg: 'No existe el unidad'})
        }
        res.json(unidad);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUnidad = async (req, res) => {

    try {
        let unidad = await Unidad.findById(req.params.id);

        if(!unidad){
            res.status(404).json({ msg: 'No existe el unidad'})
        }

        await Unidad.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'Producto eliminado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}