const express = require('express');// Framework de Node.js para crear aplicaciones web
const app = express();// Crear una instancia de la aplicación
const cors = require('cors')// Middleware para habilitar el Cross-Origin Resource Sharing (CORS)

//URL ENCODER
app.use(express.urlencoded({extended: false}));// Framework de Node.js para crear aplicaciones web
app.use(express.json());// Middleware para parsear los datos JSON enviados en las solicitudes HTTP
app.use(cors({origin: 'http://localhost:3000'}))// Habilitar el CORS para permitir peticiones desde http://localhost:3000
app.disable("x-powered-by");// Deshabilitar la cabecera "x-powered-by" para mayor seguridad

//INVOCAR A DOTENV
const dotenv = require('dotenv');
dotenv.config({path: './env/.env'});

//DIRECTORIO PUBLIC
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

// INVOCAR BCRYPT
const bcryptjs = require('bcrypt');

//VAR DE SESSION
const session = require('express-session');
app.use(session({
    secret: 'secret',// Clave secreta para firmar la sesión
    resave: true,// Volver a guardar la sesión aunque no haya cambios
    saveUninitialized: true// Guardar sesiones no inicializadas
}))

//INVOCAR AL MODULO DE CONEXION DE LA BD
const connection = require('./database/db');

// Definir una ruta y el puerto en el que la aplicación escuchará las solicitudes
app.listen(5000, () => {
    console.log('Server running in localhost:8000');
})
// Definir una ruta para el registro de usuarios
app.post('/register', async (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const correo = req.body.email;
    const pass = req.body.password;
    const passwordHash = await bcryptjs.hash(pass, 8);
    // Verificar si el correo ya está registrado en la base de datos
    connection.query('SELECT * FROM users WHERE correo = ?', [correo], async (error, results) => {
        if (error) {
            console.log(error);
        } else {
            if (results.length > 0) {
                res.status(409).send({message: 'El correo ya está registrado'});
            } else {
                // Insertar los datos del nuevo usuario en la base de datos
                connection.query('INSERT INTO users SET ?', {
                    nombres: nombres,
                    apellidos: apellidos,
                    correo: correo,
                    password: passwordHash
                }, async (error, results) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(results)
                        res.status(201).send({message: 'Registro exitoso'});
                    }
                });
            }
        }
    });
});
// Definir una ruta para el inicio de sesión de usuarios
app.post('/login', async (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const correo = req.body.email;
    const pass = req.body.password;

    if (correo && pass) {
        // Verificar si el correo y la contraseña coinciden con un usuario en la base de datos
        connection.query('SELECT * FROM users WHERE correo = ?', correo, async (error, results) => {
            if (results.length === 0 || !(await bcryptjs.compare(pass, results[0].password))) {
                res.status(400).send({message: "Usuario o contraseña incorrectos"})
            } else {
                res.status(201).send({message: "Login correcto"})
            }
        });
    }
})
// Definir una ruta para validar una compra
app.post('/validarCompra', async (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const {
        nombres,
        correo,
        apellidos,
        telefono,
        direccion,
        distrito,
        ciudad,
        metodoPago,
        numeroTarjeta,
        fechaCaducidad,
        cvv,
        subtotal,
        descuento,
        total
    } = req.body;
    // Validar la tarjeta, el CVV y la fecha de caducidad
    const tarjetaValida = validarTarjeta(numeroTarjeta);
    const cvvValido = validarCVV(cvv);
    const fechaCaducidadValida = validarFechaCaducidad(fechaCaducidad);
    // Verificar si los datos de la tarjeta no son válidos
    if (!tarjetaValida || !cvvValido || !fechaCaducidadValida) {
        return res.status(400).json({message: 'Pago inválido. Por favor, verifique los detalles de su tarjeta.'});
    }
    // Insertar los datos de la venta en la base de datos
    connection.query('INSERT INTO ventas SET ?', {
        ordenID: generarIdUnico(),
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        telefono: telefono,
        direccion: direccion,
        distrito: distrito,
        ciudad: ciudad,
        metodoPago: metodoPago,
        subtotal: subtotal,
        descuento: descuento,
        total: total
    }, async (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log(result)
            res.status(201).send({message: 'Venta registrada...'});
        }
    })
})

// Función para validar una tarjeta (usada en la función '/validarCompra')
function validarTarjeta(numeroTarjeta) {
    return parseInt(numeroTarjeta) === 123456789;
}
// Función para validar el CVV (usada en la función '/validarCompra')
function validarCVV(cvv) {
    return parseInt(cvv) === 123
}
// Función para validar la fecha de caducidad (usada en la función '/validarCompra')
function validarFechaCaducidad(fechaCaducidad) {
    return fechaCaducidad === '12/24'
}
// Función para generar un ID único basado en la fecha y hora actual (usada en la función '/validarCompra')
const generarIdUnico = () => {
    return Date.now().toString();
};


