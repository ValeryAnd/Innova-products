import Header from "./header";
import Footer from "./footer";
import styles from '../estilos/carrito.module.css'

export default function Confirmacion() {
    return (
        <main>
            <Header/>

            <section className={styles.confirmationContainer}>
                <h1>Gracias por tu compra</h1>
                <p>Tus productos serán entregados por nuestro equipo con los datos proporcionados...</p>
            </section>

            <Footer/>
        </main>
    )
}