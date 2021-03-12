import { useState } from "react";

import styles from "../styles/Modal.module.css";



const Modal = ({setShow}) => {
    const [loading,setLoading] = useState(false)

    const handleCloseModal = (e) => {
        if(e.target.matches("section")){
            setShow(false)
        }
    }

    const handleSave = async(e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData()
        data.append("front",e.target[0].value)
        data.append("back",e.target[1].value)
        data.append("image",e.target[2].files[0])

      const res =  await fetch("https://cards-app-backend.herokuapp.com/uploadcard",{
            method:"POST",
            body:data
        })

        const resjson = await res.json()
        setLoading(false)
        console.log(resjson)
    }

    return (
        <section className={styles.modal__container} onClick={handleCloseModal}>
            
            <form className={styles.modal} onSubmit={handleSave}>
                <input className={styles.modal__input} type="text" placeholder="Front Word" maxLength={32} name="front"/>
                <input className={styles.modal__input} type="text" placeholder="Back Word" name="back"/>
                <input type="file" accept="image/*" name="image"/>
                <input className={styles.modal__button} type="submit" value={loading ? "Wait..." :"Save"}/>
            </form>

        </section>
    )
}

export default Modal
