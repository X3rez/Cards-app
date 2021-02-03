import styles from "../styles/Modal.module.css";

const Modal = ({setShow}) => {
    
    const handleCloseModal = (e) => {
        if(e.target.matches("section")){
            setShow(false)
        }
    }

    const handleSave = async(e) => {
        e.preventDefault()

        const frontValue = e.target[0].value;
        const backValue = e.target[1].value;
        const lStorage = localStorage.getItem('cards')
        
    
        if(!lStorage){
            let Data = [{frontValue,backValue}]
            localStorage.setItem('cards',JSON.stringify(Data)) 
        }else{
            let storage = JSON.parse(lStorage)
            storage.push({frontValue,backValue})
            localStorage.setItem('cards',JSON.stringify(storage))
        }
    }

    return (
        <section className={styles.modal__container} onClick={handleCloseModal}>
            
            <form className={styles.modal} onSubmit={handleSave}>
                <input className={styles.modal__input} type="text" placeholder="Front Word"/>
                <input className={styles.modal__input} type="text" placeholder="Back Word"/>
                <input type="file" accept="image/*"/>
                <input className={styles.modal__button} type="submit" value="Save"/>
            </form>

        </section>
    )
}

export default Modal
