import styles from '../styles/Card.module.css'

const Card = ({front,back}) => {
  return (
          <article className={styles.card}>

            <div className={styles.inner}>
              <section className={styles.front}>{front}</section>
              <section className={styles.back}>{back}</section>
            </div>
            
          </article>  )
}

export default Card