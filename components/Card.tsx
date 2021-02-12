import styles from '../styles/Card.module.css'

import {MdDelete} from 'react-icons/md'

import {IconContext} from 'react-icons'



const Card = ({front,back,image}) => {
  const handleDelete = () =>{
    console.log(front + ":" + back + " " + "Was deleted")
  }


  return (
          <article className={styles.card}>

            <div className={styles.inner}>
              <section className={styles.front}>
                  <h4>{front}</h4>
                  <img className={image || styles.front__image} src='/noimage.png' alt="Card-Image"/>
              </section>

              <section className={styles.back}>
                  <IconContext.Provider value={{className:styles.delete}}>
                    <MdDelete onClick={handleDelete}/>
                  </IconContext.Provider>
                    <h4>{back}</h4>
              </section>
            </div>
            
          </article>  )
}

export default Card