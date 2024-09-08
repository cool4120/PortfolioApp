import styles from './SkillStyle.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import { SkillsList } from './SkillsList';
export const Skills = () => {
    return (
    <>
        <section className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.skillSet}>
            {/* <img src={checkMarkIcon} alt='check'></img>
            <p>Javascript</p> */}
                <SkillsList src={checkMarkIcon} name='Javascript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Javascript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Javascript'></SkillsList>

            </div>
            <div className={styles.skillSet}>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
            </div>
        </section>
    
    </>)
}