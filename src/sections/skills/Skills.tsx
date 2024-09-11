import styles from './SkillStyle.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import { SkillsList } from './SkillsList';
import { useTheme } from '../../common/ThemeContext';
export const Skills = () => {
    const {theme, toggleTheme} = useTheme()
    
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
            <hr/>
            <div className={styles.skillSet}>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Node'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
            </div>
                        <hr/>
            <div className={styles.skillSet}>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Node'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
            </div>
                        <hr/>
        </section>
    
    </>)
}