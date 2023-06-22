import {Link} from "react-router-dom";
import React, {useState} from 'react';
import Header from "./header";
import Footer from "./footer";
import styles from '../estilos/agregar.module.css'

import img0 from '../imagenes/2065306080994_2.jpg'
import img1 from '../imagenes/pexels-sound-on-3394666.jpg'
import img2 from '../imagenes/audifonos3.jpg'
import img3 from '../imagenes/audifono4.jpg'
import img4 from '../imagenes/audifonos5.jpg'
import img5 from '../imagenes/audifonos6.jpg'
import img6 from '../imagenes/celular1.jpg'
import img7 from '../imagenes/celular2.jpg'
import img8 from '../imagenes/celular3.jpg'
import img9 from '../imagenes/celular4.jpg'
import img10 from '../imagenes/celular5.jpg'
import img11 from '../imagenes/celula6.jpg'
import img12 from '../imagenes/tablet.png'
import img13 from '../imagenes/2004311980721-1.jpg'
import img14 from '../imagenes/tablet2.jpg'
import img15 from '../imagenes/tablet1.jpg'
import img16 from '../imagenes/tablet3.jpg'
import img17 from '../imagenes/tablet4.jpg'
import img18 from '../imagenes/stefen-tan-KYw1eUx1J7Y-unsplash-removebg-preview.png'
import img19 from '../imagenes/mouse.png'
import img20 from '../imagenes/mouse3.jpg'
import img21 from '../imagenes/mouse4.jpg'
import img22 from '../imagenes/teclado5.jpg'
import img23 from '../imagenes/teclado6.jpg'
import img24 from '../imagenes/audifonos2.jpg'
import img25 from '../imagenes/audifonos7.jpg'
import new1 from '../imagenes/klim-musalimov-pCJYFw8dSnE-unsplash-removebg-preview.png'
import new2 from '../imagenes/stefen-tan-KYw1eUx1J7Y-unsplash-removebg-preview.png'
import new3 from '../imagenes/2004311980721-1.jpg'
import new4 from '../imagenes/2065300885137.png'
import last1 from '../imagenes/2004293401511-2.jpg'
import last2 from '../imagenes/mouse.png'
import last3 from '../imagenes/tablet.png'
import last4 from '../imagenes/audifonos6.jpg'

import {useLocation} from "react-router-dom";

export default function Agregar() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productID = parseInt(searchParams.get('productID'));

    const data = [
        {
            productoNombre: 'AirPods 2da generación',
            productoDescripcion: 'Disfruta de una nueva manera de escuchar música con los nuevos AirPods de Apple que Ripley.com pone a tu disposición esta temporada.\n',
            productoCaracteristicas: 'Disfruta de una nueva manera de escuchar música con los nuevos \n' +
                'AirPods de Apple que Ripley.com pone a tu disposición esta \n' +
                'temporada. Un diseño limpio y ergonómico viene acompañado de \n' +
                'una experiencia de usuario superior, ya que se configuran con un solo \n' +
                'toque, saben cuando los tienes puestos y cuando no y hasta puedes \n' +
                'controlar aspectos como el volumen, tu lista de reproducción y hasta \n' +
                'cambiar de Podcast con tan solo decir "Oye Siri". Una sola carga te \n' +
                'dura hasta 5 horas de reproducción de música y 3 horas de \n' +
                'conversación. Son compatibles con tu iPhone, Apple Watch, iPad y \n' +
                'Mac. ¡Los mejores audífonos a tan solo un clic de distancia!',
            productoEspecificaciones: [
                "Marca APPLE",
                "Control de Volumen No",
                "Tipo de conector Sin Conector",
                "Modelo Airpods",
                "Conectividad NFC",
                "Tipo de Producto Audífonos",
                "Color Blanco",
                "Inalámbrico Sí"
            ],
            productoPrecio: 1079,
            productoImagen: img0
        }, {
            productoNombre: 'Audífonos Sony WH-1000XM4 BT',
            productoDescripcion: 'Ya estés en un vuelo largo o relajándote en una cafetería, los WHSTX1000XM4 ofrecen el mejor rendimiento de noise cancelling de la \n' +
                'historia de Sony.',
            productoCaracteristicas: 'Disfruta de una nueva manera de escuchar música con los nuevos \n' +
                'AirPods de Apple que Ripley.com pone a tu disposición esta \n' +
                'temporada. Un diseño limpio y ergonómico viene acompañado de \n' +
                'una experiencia de usuario superior, ya que se configuran con un solo \n' +
                'toque, saben cuando los tienes puestos y cuando no y hasta puedes \n' +
                'controlar aspectos como el volumen, tu lista de reproducción y hasta \n' +
                'cambiar de Podcast con tan solo decir "Oye Siri". Una sola carga te \n' +
                'dura hasta 5 horas de reproducción de música y 3 horas de \n' +
                'conversación. Son compatibles con tu iPhone, Apple Watch, iPad y \n' +
                'Mac. ¡Los mejores audífonos a tan solo un clic de distancia!',
            productoEspecificaciones: [
                "Marca SONY",
                "Control de Volumen Si",
                "Modelo Airpods",
                "Conectividad NFC",
                "Tipo de Producto Audífonos",
                "Color Negro",
                "Inalámbrico Sí"
            ],
            productoPrecio: 1499.90,
            productoImagen: img1
        }, {
            productoNombre: 'Audifonos Xiaomi redmi buds essential earbuds azul',
            productoDescripcion: 'Los Redmi Buds Essentials tienen un controlador dinámico de 7,2 mm y \n' +
                'mejora de afinación profesional textura de la cavidad y con eficacia \n' +
                'reducir la distorsión.',
            productoCaracteristicas: 'Calidad de sonido de Alta Definición con llamadas más limpias \n' +
                'Controlador dinámico de 7,2 mm y mejora de afinación profesional \n' +
                'textura de la cavidad y con eficacia reducir la distorsión. Voces más \n' +
                'limpias y claras en las llamadas, aislando el sonido exterior. Bluetooth \n' +
                'avanzado 5.2 con Modo de Juego Una conexión más estable y rápida\n' +
                'para una transmisión con menor potencia de consumo, mejorando \n' +
                'notablemente la conexión. Cuenta con modo de baja latencia para \n' +
                'los juegos, solo mantenga presionados ambos auriculares durante 1,5 \n' +
                's al mismo tiempo para activar el modo de baja latencia.',
            productoEspecificaciones: [
                "Marca XIAOMI",
                "Peso (kg) 0.3",
                "Compatibilidad Bluetooth",
                "Conectividad Bluetooth",
                "Aislador de ruido No",
                "Control de volumen No",
                "Control por voz No",
                "Tipo de audífono True wireless",
                "Tipo de conector Micro USB",
                "Inalámbrico Sí"
            ],
            productoPrecio: 79.90,
            productoImagen: img2
        }, {
            productoNombre: 'Audífonos true wireless buds2 pro',
            productoDescripcion: 'Audio mejorado de 360 grados: amplía lo que te gusta; minimiza lo \n' +
                'que haces;',
            productoCaracteristicas: 'Calidad de sonido de alta fidelidad: el sonido de calidad de estudio no \n' +
                'es solo para los profesionales; siente cada nota como si estuvieras ahí \n' +
                'con Galaxy Buds2 Pro** y obtén una experiencia auditiva de siguiente \n' +
                'nivel, ya sea que estés balanceando tu lista de reproducción o \n' +
                'mantente informado con un podcast',
            productoEspecificaciones: [
                "Tipo de audífono True wireless",
                "Tipo de conector Sin Conector",
                "Inalámbrico Sí",
                "Bluetooth Sí",
                "Resistente al agua IPX7",
                "Micrófono integrado Sí",
                "Garantía Sí",
                "Tipo de Producto Audífonos",
                "Modelo SM-R510NLVALTA"
            ],
            productoPrecio: 500.00,
            productoImagen: img3
        }, {
            productoNombre: 'AUDÍFONOS OVER EAR SONY AZUL WHCH510LZ',
            productoDescripcion: 'Escucha tus canciones favoritas de forma inalámbrica por Bluetooth® \n' +
                'emparejando tu smartphone o tablet.',
            productoCaracteristicas: 'Con hasta 35 horas de duración de batería, tendrás suficiente energía \n' +
                'incluso para viajar. Si los audífonos tienen poca batería, una carga \n' +
                'rápida de 10 minutos con el cable Type-C™ te brindará hasta 90 \n' +
                'minutos de tiempo reproducción.\n',
            productoEspecificaciones: [
                "Marca SONY",
                "Color Azul",
                "Peso (kg) 132 g",
                "Resistente al agua No",
                "Micrófono integrado Sí",
                "Garantía 6 meses",
                "Modelo WH-CH510/LZ UC"
            ],
            productoPrecio: 99.90,
            productoImagen: img4
        }, {
            productoNombre: 'Audífonos philips on ear con micrófono blanco',
            productoDescripcion: 'Sonido nítido y graves enriquecidos, este modelo cuenta con \n' +
                'controladores de neodimio de 32 mm que brindan graves potentes y \n' +
                'definidos y un sonido claro.',
            productoCaracteristicas: 'Banda sujetadora ajustada, disponible en colores mate, para darte un \n' +
                'gran estilo. Estos audífonos supraurales cuentan con una banda \n' +
                'sujetadora acolchonada liviana para más comodidad. Las suaves \n' +
                'almohadillas están marcadas para la oreja izquierda y derecha, muy \n' +
                'ajustables a ti.',
            productoEspecificaciones: [
                "Marca PHILIPS",
                "Tipo de conector Jack 3.5 mm",
                "Sensibilidad dB 106 dB",
                "Bluetooth No",
                "Impedancia (Ohmios) 32 ohmio",
                "Entrada máxima de potencia (mW) 30 mW",
                "Peso (gr) 0.459 kg"
            ],
            productoPrecio: 59.40,
            productoImagen: img5
        }, {
            productoNombre: 'APPLE IPHONE 14 PRO 6.1" 128GB 48MP + 12MP + 12MP MORADO OSCURO',
            productoDescripcion: 'El iPhone 14 es un dispositivo inteligente de alta gama, creado para cubrir las necesidades de usuarios exigentes que buscan compartir el mejor contenido y generar tendencias.',
            productoCaracteristicas: 'Este tipo de iPhone te ofrece una gran potencia en cada una de sus funciones, gracias a sus 128 GB de memoria interna y a sus 6 GB de RAM Está diseñado para usuarios que prefieren dispositivos de excelente calidad y gran rendimiento. Es perfecto para influencers de redes sociales, profesionales y estudiantes.\n' +
                'Este iPhone cuenta con sistema operativo iOS y un procesador Apple A15 Bionic, con los que podrás descargar las aplicaciones del momento y correr los juegos de más alto performance.\n' +
                'Además, su batería de 3279 mAh te permitirá largas horas de entretenimiento.\n' +
                'Compatible con Wi-Fi, GPS y Bluetooth.',
            productoEspecificaciones: [
                "Marca APPLE",
                "Peso (kg) 0.206kg",
                "Memoria Interna 128GB",
                "Memoria RAM No aplica",
                "Procesador A16 Bionic",
                "Tipo Procesador Apple Chip A16 Bionic",
                "Cámara frontal 12MP",
                "Cámara posterior rango Más de 10MP"
            ],
            productoPrecio: 4999.00,
            productoImagen: img6
        }, {
            productoNombre: 'Samsung galaxy A34 5G 6.6" 6GB 128GB 48 MP + 8 MP + 5 MP lavanda',
            productoDescripcion: 'Con el Galaxy A34 toma fotos y videos de gran calidad, sube contenido a redes sociales y mantente conectado con el mundo. Un smartphone que te ofrece las mejores características en un equipo completamente accesible.',
            productoCaracteristicas: 'Con este celular nunca te perderás de nada. El Galaxy A34 es el dispositivo que pone lo mejor de la tecnología a tu alcance. Se adapta a la rutina del usuario, es perfecto para estudiantes y también para personas que trabajan.\n' +
                'Este modelo cuenta con una cámara principal de 48 MP + 8 MP + 5 MP y una cámara frontal de 13 MP. Reproduce videos sin interrupciones en su amplia pantalla de 6.6”. Es perfecto para empezar un videoblog o seguir la tendencia del momento.\n' +
                'Cuenta con sistema operativo Android. Funciona con una batería de 5000 mAh de gran autonomía.\n' +
                'Compatible con Wi-Fi, GPS y Bluetooth.',
            productoEspecificaciones: [
                "Marca: SAMSUNG",
                "Peso(kg): 0.296",
                "Memoria RAM: 6GB",
                "Procesador: Media Tek",
                "Tipo Procesador: Octa-Core",
                "Cámara frontal: 13MP",
                "Cámara posterior rango: Más de 10MP",
                "Tipo de Producto: Celulares"
            ],
            productoPrecio: 1049.00,
            productoImagen: img7
        }, {
            productoNombre: 'Motorola Moto G13 6.5" 128GB +10MP 8MP gris',
            productoDescripcion: 'Con el Motorola G13 toma fotos y videos de gran calidad, sube contenido a redes sociales y mantente conectado con el mundo. Un smartphone que te ofrece las mejores características en un equipo completamente accesible.',
            productoCaracteristicas: 'Con este celular nunca te perderás de nada. El Motorola G13 es el dispositivo que pone lo mejor de la tecnología a tu alcance. Se adapta a la rutina del usuario, es perfecto para estudiantes y también para personas que trabajan. Este modelo cuenta con una cámara principal de 50 + 2 +2 MP y una cámara frontal de 8 MP. Reproduce videos sin interrupciones en su amplia pantalla 6.5". Es perfecto para empezar un videoblog o seguir la tendencia del momento.',
            productoEspecificaciones: [
                "Marca: MOTOROLA",
                "Peso(g): 183g",
                "Memoria RAM: 6GB",
                "Memoria Interna: -",
                "Memoria RAM: 4GB",
                "Procesador: Media Tek",
                "Tipo Procesador: MediaTek Helio G85 con CPU Octa-Core",
                "Cámara frontal: 8MP",
                "Cámara posterior rango: Más de 10MP",
                "Cámara posterior: 50MP+2MP+2MP"
            ],
            productoPrecio: 629.00,
            productoImagen: img8
        }, {
            productoNombre: 'CELULAR MOTOROLA G53 6.5" 6GB 128GB 50MP+2MP PLATA',
            productoDescripcion: 'El Motorola G53 es un dispositivo inteligente de alta gama, creado para cubrir las necesidades de usuarios exigentes que buscan compartir el mejor contenido y generar tendencias.',
            productoCaracteristicas: 'Este tipo de smartphone te ofrece una gran potencia en cada una de sus funciones, gracias a sus 128 GB de memoria interna y a sus 6 GB de RAM Está diseñado para usuarios que prefieren dispositivos de excelente calidad y gran rendimiento. Es perfecto para influencers de redes sociales, profesionales y estudiantes.\n' +
                'Este smartphone cuenta con sistema operativo Android y un procesador Qualcomm Snapdragon 4350 Pro, con los que podrás descargar las aplicaciones del momento y correr los juegos de más alto performance.',
            productoEspecificaciones: [
                "Marca: MOTOROLA",
                "Peso (kg): 0.178",
                "Memoria Interna: 128GB",
                "Memoria RAM: 6GB",
                "Procesador: Snapdragon",
                "Tipo Procesador: Snapdragon® 480+ 5G",
                "Cámara frontal: 8MP",
                "Cámara posterior rango: Más de 10MP",
                "Cámara posterior: 50MP+2MP"
            ],
            productoPrecio: 849.00,
            productoImagen: img9
        }, {
            productoNombre: 'Iphone 11 6.1 64GB 12MP + 12MP negro',
            productoDescripcion: 'El IPhone 11 de 64GB Negro es el celular que buscabas. La nueva \n' +
                'apuesta de Apple cuenta con una pantalla de 6.1" pulgadas, con \n' +
                'tecnología OLED y resolución HD para disfrutar por completo de todos \n' +
                'tus contenidos.',
            productoCaracteristicas: 'Eel IPhone 11 de 64GB Negro cuenta con el \n' +
                'procesador A13 Bionic y con 64GB de almacenamiento interno, para \n' +
                'un gran rendimiento y experiencia de navegación. Consigue unas \n' +
                'fotos increíbles con su sistema de cámara trasera que cuenta con dos \n' +
                'lentes de 12MP que agrega estabilización óptica de imagen para llevar \n' +
                'tus fotos al siguiente nivel. Y para los selfies más impresionantes, \n' +
                'cuenta con una cámara frontal de 12 MP.',
            productoEspecificaciones: [
                "Marca: APPLE",
                "Peso (kg): 194 g",
                "Memoria Interna: 64GB",
                "Memoria RAM: No aplica",
                "Procesador: A13 Bionic",
                "Tipo Procesador: No aplica",
                "Cámara frontal: 12MP",
                "Cámara posterior rango: Más de 10MP",
                "Cámara posterior: 12MP"
            ],
            productoPrecio: 1949.00,
            productoImagen: img10
        }, {
            productoNombre: 'CELULAR XIAOMI REDMI NOTE 12 4GB 128GB AZUL',
            productoDescripcion: 'Con el Xiaomi Redmi Note 12 toma fotos y videos de gran calidad, sube contenido a redes sociales y mantente conectado con el mundo. Un smartphone que te ofrece las mejores características en un equipo completamente accesible.',
            productoCaracteristicas: 'Xiaomi Redmi Note 12. Es el hermano pequeño de la nueva gama \n' +
                'Redmi en prestaciones. Pero sólo se diferencia de su modelo mayor en \n' +
                'que posee conectividad 4G. Por otro lado llega con una pantalla de \n' +
                '6.67 pulgadas AMOLED, que integra resolución FullHD y que tiene una \n' +
                'tasa de refresco de 120 Hz.',
            productoEspecificaciones: [
                "Marca: XIAOMI",
                "Peso (kg): 192g",
                "Memoria Interna: 128GB",
                "Memoria RAM: 4GB",
                "Procesador: Snapdragon",
                "Tipo Procesador: Snapdragon® 685",
                "Cámara frontal: 13MP",
                "Cámara posterior rango: De 5.1 a 7MP",
                "Cámara posterior: 50MP+8MP+2MP"
            ],
            productoPrecio: 949.00,
            productoImagen: img11
        }, {
            productoNombre: 'Tablet samsung galaxy TAB S7 - Verde místico',
            productoDescripcion: 'ENCUENTRA SAMSUNG GALAXY TAB S7 FE CON PANTALLA DE 12.4 PULGADAS Y BATERIA DE LARGA DURACION, EN RIPLEY PERÚ ¡COMPRA ONLINE!',
            productoCaracteristicas: 'Pantalla grande, gran experiencia: Una gran pantalla de 12.4 pulgadas da vida a tu contenido en colores brillantes ya sea en interiores o exteriores, haciendo que Samsung Galaxy S7 FE sea una gran tablet para tiempo de estudio o para un rápido descanso de entretenimiento \n' +
            'Colores llamativos, declaración llamativa: Elige un color atrevido: negro místico, verde místico, plata mística o rosa místico, que lo hace inconfundiblemente tuyo \n' +
            'Escribir, dibujar, pellizcar, tocar con S Pen: Toma notas en clase, esboza una idea o incluso garabatea con el S Pen incluido, con un nuevo diseño sensible que se siente más cerca del bolígrafo en papel que nunca antes',
            productoEspecificaciones: [
                'Marca	SAMSUNG',
                'Peso (kg)	0.69898587000000001',
                'Tipo de Producto	Tablets',
                'Alto (cm)	28.473400000000002',
                'Ancho (cm)	0.63500000000000001'
            ],
            productoPrecio: 2999.00,
            productoImagen: img12
        }, {
            productoNombre: 'Galaxy Tab S6 Lite Gray',
            productoDescripcion: 'Características destacadas:Modelo: Galaxy Tab S6 Lite,Procesador: Octa-Core (Quad 2.3GHz + Quad1.7GHz),Memoria interna: 64GB',
            productoCaracteristicas: 'Samsung equipa la Tab S6 Lite con salida de auriculares en la zona superior, coloca los botones de volumen y encendido en el costado derecho (arriba), incluye bandeja para la memoria SD Micro también en el costado derecho (sorprende que el mecanismo sea idéntico al de las tarjetas SIM en los móviles) y ancla el USB C en la zona baja de la tablet. Dicho conector no queda centrado en el grueso de la Samsung Galaxy Tab S6 Lite, sí con respecto al ancho. Esto echa a perder la simetría, para angustia de quienes sufrimos',
            productoEspecificaciones: [
                'Memoria Interna 64GB',
                'Tamaño de la pantalla 10.4 pulgadas',
                'Cámara posterior 8 MP',
                'Marca Samsung',
                'Procesador Qualcomm | SM7125',
                'Núcleos del procesador Octa Core',
                'Modelo SM-P613NZALPEO',
                'Velocidad del procesador 2.3GHz,1.8GHz',
                'Memoria expandible Hasta 1TB'
            ],
            productoPrecio: 949.00,
            productoImagen: img13
        }, {
            productoNombre: 'IPAD MINI WIFI 8.3" 64GB 6TA GENERACIÓN STARLIGHT',
            productoDescripcion: 'Características destacadas:Memoria interna: 64GB,Procesador: Chip A15 Bionic,Modelo: iPad Mini 6ta Generación',
            productoCaracteristicas: 'Descubre un mundo lleno de posibilidades con Apple. Siente el poder de la tecnología fusionado con la eficiencia y elegancia gracias al iPad Mini de sexta generación de Apple. Disfruta de un iPad que se adapta a tus exigencias y necesidades, con un diseño sofisticado, pantalla retina de 8.3" y un alto poder de rendimiento gracias al chip A15 Bionic. Además, con el sistema iPadOS y su potente batería potenciaras las funciones multitarea obteniendo una experiencia única.Todos los productos que Apple tiene para ti han sido fabricados con altos estándares de calidad y tecnología de punta.',
            productoEspecificaciones: [
                'Marca SAMSUNG',
                'Resolución de la pantalla 1340 x 800',
                'Capacidad GPS Sí',
                'Cámara frontal 2MP',
                'Tipo de Producto Tablets',
                'Cámara posterior 8MP',
                'Memoria expandible Sí',
                'Ancho (cm) 12.47',
                'Memoria interna 32GB'
            ],
            productoPrecio: 2549.00,
            productoImagen: img14
        }, {
            productoNombre: 'TABLET SAMSUNG GALAXY TAB A7 LITE 3GB RAM 32GB 8.7',
            productoDescripcion: 'Características destacadas,Memoria interna: 32GB,Procesador: MediaTek MT8768N,Modelo: Tab A7 Lite',
            productoCaracteristicas: 'Diseñada para seguir tus pasos,No sacrifiques estilo por comodidad. Galaxy Tab A7 Lite te ofrece ambos en un dispositivo ligero. Con solo 8 mm de grosor y 366g de peso, esta tablet se acomoda perfectamente en tu bolso o mochila sin cargar tu espalda en exceso.,Una batería que dura más,Galaxy Tab A7 Lite tiene más energía de la que esperarías en un dispositivo tan compacto. Su batería de 5100 mAh te da la libertad para olvidarte el cargador, aunque tengas que ir a algún sitio o planees pasar horas delante de la pantalla.',
            productoEspecificaciones: [
                'Marca SAMSUNG',
                'Resolución de la pantalla 1340 x 800',
                'Capacidad GPS Sí',
                'Cámara frontal 2MP',
                'Tipo de Producto Tablets',
                'Cámara posterior 8MP',
                'Memoria expandible Sí',
                'Ancho (cm) 12.47',
                'Memoria interna 32GB',
                'Tamaño de la pantalla 8.7',
                'Sistema operativo rango Android < a 4.0'
            ],
            productoPrecio: 499.90,
            productoImagen: img15
        }, {
            productoNombre: 'Tablet PC JUMPER EZPADI78128-Incluye teclado y lapicero',
            productoDescripcion:'Características destacadas,Memoria interna: 32GB,Procesador: MediaTek MT8768N,Modelo: Tab A7 Lite',
            productoCaracteristicas: 'Procesador Intel i7 - 8 GB de memoria RAM - 128GB de capacidad de almacenamiento - Pantalla de 120- Resolución Quad HD - WiFi dual - Bluetooth v4.2 - Batería de 38Wh - 9.5 mm de grosor.',
            productoEspecificaciones: [
                'Marca JUMPER',
                'Batería Recargable No',
                'Conectividad No',
                'Inalámbrico Sí',
                'Capacidad de almacenamiento No',
                'Utiliza Baterías No',
                'Modelo EZpadI78128',
                'Bluetooth Sí',
                'Capacidad de batería No'
            ],
            productoPrecio: 2099.00,
            productoImagen: img16
        }, {
            productoNombre: 'TABLET SAMSUNG GALAXY TAB S7 FE, 12.4 PULGADAS, WIFI 256GB + S PEN INCLUIDA - PLATEADO',
            productoDescripcion: 'ENCUENTRA SAMSUNG GALAXY TAB S7 FE CON PANTALLA DE 12.4 PULGADAS Y BATERIA DE LARGA DURACION, EN RIPLEY PERÚ ¡COMPRA ONLINE!',
            productoCaracteristicas: 'Pantalla grande, gran experiencia: Una gran pantalla de 12.4 pulgadas da vida a tu contenido en colores brillantes ya sea en interiores o exteriores, haciendo que Samsung Galaxy S7 FE sea una gran tablet para tiempo de estudio o para un rápido descanso de entretenimiento,Colores llamativos, declaración llamativa: Elige un color atrevido: negro místico, verde místico, plata mística o rosa místico, que lo hace inconfundiblemente tuyo,Escribir, dibujar, pellizcar, tocar con S Pen: Toma notas en clase, esboza una idea o incluso garabatea con el S Pen incluido, con un nuevo diseño sensible que se siente más cerca del bolígrafo en papel que nunca antes',
            productoEspecificaciones: [
                'Marca SAMSUNG',
                'Peso (kg) 0.69898587000000001',
                'Tipo de Producto Tablets',
                'Alto (cm) 28.473400000000002',
                'Ancho (cm) 0.63500000000000001',
                'Largo (cm) 18.491199999999999'
            ],
            productoPrecio: 2949.00,
            productoImagen: img17
        }, {
            productoNombre: 'Logitech teclado Bluetooth',
            productoDescripcion: 'Marca: Logitech,Modelo: K400R BLACK,Tipo: Teclados,Compatibilidad: Otros,Inalámbrico: Sí',
            productoCaracteristicas: 'Contamos con una amplia gama de teclados, mouse, cámaras web, cables, audífonos y mucho más accesorios de computación. Estos productos están diseñados para mejorar tu experiencia de computación, brindándote mayor comodidad, productividad y diversión.¡Agrega algo de diversión a tu computación con los modernos y coloridos accesorios! Nuestras herramientas son fáciles de usar y ofrecen la más alta calidad. ¡Compra tus accesorios Innova Products hoy y disfruta de la mejor experiencia de usuario al mejor precio del mercado!',
            productoEspecificaciones: [
                'Marca Logitech',
                'Tipo Teclados',
                'Modelo K400R BLACK',
                'Inalámbrico Sí'

            ],
            productoPrecio: 150.00,
            productoImagen: img18
        }, {
            productoNombre: 'Mouse Logitech G Pro – blanco',
            productoDescripcion: 'Tasa de informe USB: 1000 Hz (1 ms),Microprocesador: ARM de 32 bits,Movimiento constante: 70h,Dimensiones: 12.50 x 6.35 x 4 cm,Peso: 63 g',
            productoCaracteristicas: 'Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.',
            productoEspecificaciones: [
                'Conectividad: cable.',
                'Utiliza cable.',
                'Posee rueda de desplazamiento.',
                'Con luces para mejorar la experiencia de uso.',
                'Con sensor óptico.',
                'Resolución de 8000dpi.'

            ],
            productoPrecio: 150.00,
            productoImagen: img19
        }, {
            productoNombre: 'Mouse gamer Lenovo legion M500 RGB',
            productoDescripcion: 'Cableado vía USB 2.0. · Diseño ergonómico diestro para la palma y agarre con garra. · Agarres laterales con textura para un mejor control. · Hasta 16.000 DPI.',
            productoCaracteristicas: 'Cableado vía USB 2.0,Diseño ergonómico diestro para la palma y agarre con garra,Agarres laterales con textura para un mejor control,Hasta 16.000 DPI,Cable de 1.8 metros de longitud, trenzado.',
            productoEspecificaciones: [
                'Marca LENOVO',
                'Peso (kg) -',
                'EAN/UPC 193268293830',
                'Bluetooth No',
                'Inalámbrico No',
                'Tipo de Producto Accesorios Cómputo',
                'Modelo Legion M500 RGB'
            ],
            productoPrecio: 159.99,
            productoImagen: img20
        }, {
            productoNombre: 'Mouse Logitech G -Morado',
            productoDescripcion: 'Descripcion',
            productoCaracteristicas: 'Sensor Hero 25K a través de una actualización de software de G HUB, esta actualización es gratuita para todos los jugadores: Nuestro más avanzado, con seguimiento 1:1, más de 400 ips, y sensibilidad de 100 a 25.600 ppp máximo más suavidad, filtrado o aceleración cero,Lightsync RGB: la iluminación de espectro completo responde a la acción del juego, el audio y el color de la pantalla; personaliza los efectos de iluminación de colores de 55.1 ft con el software de juego g hub y sincroniza a través de g gear,Comodidad y durabilidad: ligero (3.07 oz), cómodamente diseñado para moldearse a tu mano con agarres de goma para mayor control; peso extraíble de 0.35 oz te permite sintonizar tus preferencias',
            productoEspecificaciones: [
                'Marca LOGITECH G',
                'Peso (kg) 0.2',
                'Tipo de Producto Accesorios Gamer',
                'Alto (cm) 5.08',
                'Ancho (cm) 10.16',
                'Largo (cm) 20.32'
            ],
            productoPrecio: 281.00,
            productoImagen: img21
        }, {
            productoNombre: 'Teclado kit teclado y mouse Mofii celeste',
            productoDescripcion: 'Número de llaves: 104 teclas,Peso: alrededor de 660 gramos,Fuente de alimentación: 1 batería AAA,Llaves: 5 llaves,Dimensiones: 101 x 75 x 34 mm,Resolución óptica: 1600DPI',
            productoCaracteristicas: 'Botón multimedia, volumen, mute, search, play/pausa, adelantar canción/retroceder canción, subir y bajar volumen, email, guardar, configuración y favoritos,Tamaño del teclado: 44cm x 13cm x 3cm,Tamaño del mouse: 10cm x 7.5cm x 3.4cm,Diseño ergonómico adaptable a la mano,Teclado numérico',
            productoEspecificaciones: [
                'Condicion del productoNuevo',
                'Detalle de la garantía 5 días',
                'País de origen China',
                'Modelo Teclado y mouse',
                'Dimensiones 13cm x 3cm x 44cm',
                'Autonomía 48'
            ],
            productoPrecio: 189.00,
            productoImagen: img22
        }, {
            productoNombre: 'Teclado kit teclado y mouse Mofii verde',
            productoDescripcion: 'Número de llaves: 104 teclas,Peso: alrededor de 660 gramos,Fuente de alimentación: 1 batería AAA,Llaves: 5 llaves,Dimensiones: 101 x 75 x 34 mm,Resolución óptica: 1600DPIion',
            productoCaracteristicas: 'Botón multimedia, volumen, mute, search, play/pausa, adelantar canción/retroceder canción, subir y bajar volumen, email, guardar, configuración y favoritos.,Tamaño del teclado: 44cm x 13cm x 3cm,Tamaño del mouse: 10cm x 7.5cm x 3.4cm,Diseño ergonómico adaptable a la mano.,Teclado numérico',
            productoEspecificaciones: [
                'Condicion del productoNuevo',
                'Detalle de la garantía 5 días',
                'Modelo Teclado y mouse',
                'Dimensiones 13cm x 3cm x 44cm',
                'Color verde'
            ],
            productoPrecio: 189.00,
            productoImagen: img23
        },{
            productoNombre: 'Audífonos Antryx H750BT blanco',
            productoDescripcion: 'Encuentra en Innova Products lo mejor en accesorios para PC de la prestigiosa marca Antryx y arma el setup gamer de alta performance que deseas.',
            productoCaracteristicas: 'Los audífonos modelo H750BT cuentan con la última tecnología Bluetooth 5.0, lo que te asegura una conexión sólida y una velocidad de transferencia súper rápida. Es compatible con smartphones, laptops, tablets, smart tv, etc. Ofrece una experiencia de audio nítida, potente y balanceada.Su micrófono de alta calidad te asegura una comunicación nítida y cristalina, necesaria para el home office, clases virtuales, video llamadas, etc. Su batería de alta duración puede durar hasta 8 horas seguidas de reproducción. ',
            productoEspecificaciones: [
                'Marca	ANTRYX',
                'Modelo	H750BT',
                'Peso (kg)	190',
                'Resistente al agua	No',
                'Tipo de audífono	Over-Ear',
                'Color	Blanco'
            ],
            productoPrecio: 99.00,
            productoImagen: img25
        },
    ]

    const currentData = data[productID];// Obtener los datos del producto actual utilizando el ID del producto
    const [cantidad, setCantidad] = useState(1); // Estado para almacenar la cantidad seleccionada del producto
    const cambiarCantidad = (event) => { // Función para actualizar la cantidad seleccionada
        const newCantidad = parseInt(event.target.value);// Obtener la nueva cantidad del campo de entrada y convertirla a un número entero
        setCantidad(newCantidad);// Actualizar el estado de la cantidad
    };

    const agregarItem = () => {// Función para agregar el producto al carrito
        const productoId = productID// ID del producto
        const productoNombre = currentData.productoNombre// Nombre del producto
        const productoPrecio = currentData.productoPrecio// Precio del producto
        const productoCantidad = cantidad// Cantidad seleccionada del producto
        const productoImagen = currentData.productoImagen// URL de la imagen del producto


        //Comprobamos si ya existe un carrito
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];// Obtener el carrito almacenado en el almacenamiento local o un array vacío si no existe
        carrito.push({// Agregar el nuevo producto al carrito
            itemId: generarIdUnico(),// Generar un ID único para el producto
            productoId: productoId,
            productoNombre: productoNombre,
            productoCantidad: productoCantidad,
            productoPrecio: productoPrecio,
            productoImagen: productoImagen
        });

        //Guardamos el carrito de compras localmente
        localStorage.setItem('carrito', JSON.stringify(carrito));

        console.log('Producto agregado al carrito exitosamente');
    }

    const generarIdUnico = () => {// Función para generar un ID único para el producto
        return Date.now().toString();// Generar un ID único basado en la marca de tiempo actual
    };

    return (
        <main>
            <Header/>
    
            <section className={styles.itemContainer}>
                <div className={styles.imgContainer}>
                    <img src={currentData.productoImagen} alt='img'></img>
                </div>
                <div className={styles.infoContainer}>
                    <h2>{currentData.productoNombre}</h2>
                    <p>{currentData.productoDescripcion}</p>
                    <h3>S/. {currentData.productoPrecio}</h3>
                    <input type='number' value={cantidad} onChange={cambiarCantidad}/>
                    <button onClick={agregarItem}>Añadir al carrito</button>
                </div>
            </section>

            <section className={styles.productInfoContainer}>
                <div className={styles.featuresContainer}>
                    <h1>Características</h1>
                    <p>{currentData.productoCaracteristicas}</p>
                </div>
                <div className={styles.especificationsContainer}>
                    <h1>Especificaciones</h1>
                    <ul>
                        {currentData.productoEspecificaciones.map((cadena) => (
                            <li key={productID}>{cadena}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section>
                <div class={styles.centerText}>
                    <h2>PRODUCTOS QUE PUEDAN INTERESARTE</h2>
                </div>
                <div className={styles.products}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${1}`}>
                        <img src={img24} alt=""/>
                        <div className={styles.newText}>
                            <h5>SONY</h5>
                            <h4>Audífonos Sony WH-1000XM4 BT</h4>
                            <p>S/1,499.90</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${18}`}> 
                        <img src={new2} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Logitech teclado Bluetooth</h4>
                            <p>S/150.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${13}`}>  
                        <img src={new3} alt=""></img>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Samsung galaxy Tab S6 Lite</h4>
                            <p>S/2,999.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${6}`}>
                        <img src={img6} alt=""/>
                        <div className={styles.newText}>
                            <h5>Apple</h5>
                            <h4>Apple iphone 14 PRO 6.1" 128GB 48MP + 12MP + 12MP morado oscuro</h4>
                            <p>S/ 4,999.00</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section>
                <div className={styles.products}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${16}`}>
                        <img src={img16} alt=""></img>
                        <div className={styles.newText}>
                            <h5>JUMPER</h5>
                            <h4>Tablet PC JUMPER EZPADI78128 - Incluye teclado y lapicero</h4>
                            <p>S/2,099.00</p>
                        </div>
                       
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${19}`}>
                        <img src={img19} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Mouse Logitech G Pro - blanco</h4>
                            <p>S/150.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${12}`}>
                        <img src={last3} alt=""></img>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Tablet samsung galaxy TAB S7 - Verde mistico</h4>
                            <p>S/949.00</p>
                        </div>
                    </Link>  
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${5}`}>
                        <img src={last4} alt=""></img>
                        <div className={styles.newText}>
                            <h5>PHILIPS</h5>
                            <h4>Audífonos philips on ear con micrófono blanco</h4>
                            <p>S/59.40</p>
                            </div>
                    </Link>
                </div>
            </section>

            <Footer/>
        </main>
    );
}
