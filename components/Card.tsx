import styles from '../styles/Card.module.css'

import {MdDelete} from 'react-icons/md'

import {IconContext} from 'react-icons'

import { useRouter } from "next/router";




const Card = ({front,back,image,id}) => {
  const router = useRouter()
  const handleDelete = async() =>{
    console.log(front + ":" + back + " " + "Was deleted")
    const deleted = await fetch(`https://cards-app-backend.herokuapp.com/deletecard/${id}`)
    const res = await deleted.json()
    console.log(res)
    router.reload()

  }


  return (
          <article className={styles.card}>

            <div className={styles.inner}>
              <section className={styles.front}>
                  <h4>{front}</h4>
                  <img className={styles.front__image} src={image || '/noimage.png'} alt="Card-Image"/>
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