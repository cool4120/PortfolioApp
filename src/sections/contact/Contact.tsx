import styles from './ContactStyles.module.css';
export const Contact =() => {
    return (
        <section className={styles.container} id='contact'>
            <h1>Contacts</h1>
            <form action=''>
                <div className='formGroup'>
                    <label htmlFor='name' hidden>
                        Name
                    </label>
                    <input name='name' id='name' type='text' placeholder='Name' required>
                    </input>
                </div>
                <div className='formGroup'>
                    <label htmlFor='Email' hidden>
                        Email
                    </label>
                    <input name='email' id='email' type='text' placeholder='Email' required>
                    </input>
                </div>
                <div className='formGroup'>
                    <label htmlFor='message' hidden>
                        Message
                    </label>
                    <textarea name='message' id='message'  placeholder='Message' required>
                    </textarea>
                </div>
                <input type='submit' className='hover btn' value={'Submit'}></input>
            </form>
        </section>
    )
}