import styles from './Frase.module.css'

function Frases() {

    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com frases!</p>
        </div>
    )
}

export default Frases