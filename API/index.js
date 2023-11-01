const express = require('express');
const bd = require('./bd');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

/*********************************************************************************************/
// ***** LIBROS *****
// OBTENER LIBROS (MEDIANTE PETICIÓN GET)
app.get('/api/libros', (req, res) => {
    const sQuery = "SELECT * FROM Libro;";

    bd.query(sQuery, (err, results) => {
        if (err) {
            console.error('Error al obtener libros: ' + err.message);
            res.status(500).send('Error al obtener libros de la base de datos');
        } else {
            res.json(results);
        }
    });
});

// OBTENER UN SOLO LIBRO MEDIANTE EL ID (MEDIANTE PETICIÓN GET)
app.get('/api/libros/:id', (req, res) => {
    const isbn = (req.params.id).toString(); // Obtener el valor del parámetro de la URL
    const sQuery = "SELECT * FROM Libro WHERE ISBN = ?";

    bd.query(sQuery, [isbn], (err, results) => {
        if (err) {
            console.error('Error al obtener el libro: ' + err.message);
            res.status(500).send('Error al obtener el libro de la base de datos');
        } else {
            res.json(results);
        }
    });
});


// AGREGAR NUEVO LIBRO (MEDIANTE PETICION POST)
app.post('/api/libros', (req, res) => {
    const libro = {
        ISBN: req.body.ISBN,
        titulo: req.body.titulo,
        autores: req.body.autores,
        fPublicacion: req.body.fPublicacion,
        editorial: req.body.editorial,
        cantEjemplares: parseInt(req.body.cantEjemplares),
        categoria: req.body.categoria
    };  

    const sQuery = "INSERT INTO Libro SET ?";

    bd.query(sQuery, [libro], (err, results) => {
        if (err) {
            console.error('Error al agregar libro: ' + err.message);
            res.status(500).send('Error al insertar el libro en la base de datos');
        } else {
            res.json(results);
        }
    });
});

// ELIMINAR LIBRO (PETICION DELETE)
app.delete('/api/libros/:id', (req, res) => {
    const isbn = (req.params.id).toString();
    const sQuery = ("DELETE FROM Libro WHERE ISBN = ?");

    bd.query(sQuery, [isbn], (err, results) => {
        if (err) {
            console.error('Error al eliminar libro: ' + err.message);
            res.status(500).send('Error al eliminar el libro de la base de datos');
        } else {
            res.json(results);
        }
    });
});

/*********************************************************************************************/
// ***** PRESTAMOS *****
// OBTENER PRESTAMOS (MEDIANTE PETICIÓN GET)
app.get('/api/prestamos', (req, res) => {
    const sQuery = "SELECT * FROM Prestamo;";

    bd.query(sQuery, (err, results) => {
        if (err) {
            console.error('Error al obtener prestamos: ' + err.message);
            res.status(500).send('Error al obtener prestamos de la base de datos');
        } else {
            res.json(results);
        }
    });
});

// OBTENER UN SOLO PRESTAMO MEDIANTE EL ID (MEDIANTE PETICIÓN GET)
app.get('/api/prestamos/:id', (req, res) => {
    const idPrestamo = (req.params.id).toString(); // Obtener el valor del parámetro de la URL
    const sQuery = "SELECT * FROM Libro WHERE idPrestamo = ?";

    bd.query(sQuery, [idPrestamo], (err, results) => {
        if (err) {
            console.error('Error al obtener el prestamo: ' + err.message);
            res.status(500).send('Error al obtener el prestamo de la base de datos');
        } else {
            res.json(results);
        }
    });
});

// AGREGAR NUEVO PRESTAMO (MEDIANTE PETICION POST)
app.post('/api/prestamos', (req, res) => {
    const prestamo = {
        idPrestamo: parseInt(prestamos.length + 1),
        idEjemplar: parseInt(req.body.idEjemplar),
        numControl: req.body.numControl,
        correo: req.body.numControl,
        fechaPrestamo: req.body.fechaPrestamo,
        fechaDevolucion: req.body.fechaDevolucion
    };

    const sQuery = "INSERT INTO Prestamo SET ?";

    bd.query(sQuery, [prestamo], (err, results) => {
        if (err) {
            console.error('Error al agregar el prestamo: ' + err.message);
            res.status(500).send('Error al insertar el prestamo en la base de datos');
        } else {
            res.json(results);
        }
    });
});

// ELIMINAR PRESTAMO (PETICION DELETE)
app.delete('/api/prestamos/:id', (req, res) => {
    const idPrestamo = (req.params.id).toString(); // Obtener el valor del parámetro de la URL
    const sQuery = "DELETE FROM Prestamo WHERE idPrestamo = ?";

    bd.query(sQuery, [idPrestamo], (err, results) => {
        if (err) {
            console.error('Error al eliminar el prestamo: ' + err.message);
            res.status(500).send('Error al eliminar el prestamo de la base de datos');
        } else {
            res.json(results);
        }
    });
});

/*********************************************************************************************/
// ***** EJEMPLARES *****
// OBTENER EJEMPLARES (MEDIANTE PETICIÓN GET)
app.get('/api/ejemplares', (req, res) => {
    const sQuery = "SELECT * FROM Ejemplar;";

    bd.query(sQuery, (err, results) => {
        if (err) {
            console.error('Error al obtener ejemplar: ' + err.message);
            res.status(500).send('Error al obtener ejemplar de la base de datos');
        } else {
            res.json(results);
        }
    });
});

// OBTENER EJEMPLARES MEDIANTE EL ISBN (MEDIANTE PETICIÓN GET)
app.get('/api/ejemplares/:id', (req, res) => {
    const idEjemplar = (req.params.id).toString(); // Obtener el valor del parámetro de la URL
    const sQuery = "SELECT li.titulo, ej.ISBN, ej.idEjemplar FROM Ejemplar ej INNER JOIN Libro li ON ej.ISBN = li.ISBN WHERE ej.ISBN = ?";

    bd.query(sQuery, [idEjemplar], (err, results) => {
        if (err) {
            console.error('Error al obtener los ejemplares: ' + err.message);
            res.status(500).send('Error al obtener el ejemplar de la base de datos');
        } else {
            res.json(results);
        }
    });
});

// AGREGAR NUEVO EJEMPLAR (MEDIANTE PETICION POST)
app.post('/api/ejemplares', (req, res) => {
    const ejemplar = {
        ISBN: req.body.ISBN,
        idEjemplar: parseInt(ejemplares.length + 1)
    };

    const sQuery = "INSERT INTO Ejemplar SET ?";

    bd.query(sQuery, [ejemplar], (err, results) => {
        if (err) {
            console.error('Error al agregar el ejemplar: ' + err.message);
            res.status(500).send('Error al insertar el ejemplar en la base de datos');
        } else {
            res.json(results);
        }
    });
});

// ELIMINAR EJEMPLAR (PETICION DELETE)
app.delete('/api/ejemplares/:id', (req, res) => {
    const idEjemplar = (req.params.id).toString(); // Obtener el valor del parámetro de la URL
    const sQuery = "DELETE FROM Ejemplar WHERE idEjemplar = ?";

    bd.query(sQuery, [idEjemplar], (err, results) => {
        if (err) {
            console.error('Error al eliminar el ejemplar: ' + err.message);
            res.status(500).send('Error al eliminar el ejemplar de la base de datos');
        } else {
            res.json(results);
        }
    });
});

const port = process.env.port || 4200;
app.listen(port, () => console.log(`Escuchando en el puerto: ${port}...`));

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});