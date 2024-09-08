import styles from './ProjectsStyles.module.css'
import Viber from '../../assets/viberr.png'
export const Projects = () => {

    return (
    <>
        <section id='Projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectContainer}>
                <a href='https://github.com/cool4120/CryptoTrading_Bot' target='_blank'>
                    <img src={Viber} alt='Crypto Bot' className='hover'></img>
                    <h3>Crypto Trading Bot</h3>
                </a>
            </div>
        </section>

    </>)
}