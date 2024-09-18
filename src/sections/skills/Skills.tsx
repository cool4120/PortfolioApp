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
                <SkillsList src={checkMarkIcon} name='Typescript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Javascript'></SkillsList>
                <SkillsList src={checkMarkIcon} name='C++'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Python'></SkillsList>

            </div>
            <hr/>
            <div className={styles.skillSet}>
                <SkillsList src={checkMarkIcon} name='React Native'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Node.js'></SkillsList>
                <SkillsList src={checkMarkIcon} name='Next.js'></SkillsList>
                <SkillsList src={checkMarkIcon} name='React.js'></SkillsList>
            </div>
            <hr/>
            <div className={styles.skillSet}>
                <SkillsList src={checkMarkIcon} name='SQLite'></SkillsList>
                <SkillsList src={checkMarkIcon} name='PostgreSQL'></SkillsList>
                <SkillsList src={checkMarkIcon} name='MongoDB'></SkillsList>
            </div>
            <hr/>
        </section>
    
    </>)
}