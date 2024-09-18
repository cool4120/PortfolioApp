import HeroIcon from '../../assets/hero-img.png';
import SunIcon from '../../assets/sun.svg'
import DarkIcon from '../../assets/moon.svg'
// import TwiterIcon from '../../assets/twitter-dark.svg'
import CV from '../../assets/Colin_Resume(FE).pdf'
import LnkInDarkIcon from '../../assets/linkedin-dark.svg';
import LnkInLightIcon from '../../assets/linkedin-light.svg';
import gitHubIconDark from '../../assets/github-dark.svg'
import gitHubIconLight from '../../assets/github-light.svg'
import styles from '../hero/HeroStyles.module.css'
import { useTheme } from '../../common/ThemeContext';
export const Hero = () => {
    const {theme, toggleTheme} = useTheme()
    const themeIcon = theme === 'light'? SunIcon:DarkIcon;
    // const LinkdnIcon = theme === 'light'? LnkInLightIcon:LnkInDarkIcon;
    const LinkdnIcon = theme === 'light'? LnkInLightIcon:LnkInDarkIcon;
    const githubIcon = theme === 'light'? gitHubIconLight:gitHubIconDark;

    return (
        <>
            <section id='Hero' className={styles.container}>
                <div className={styles.colorModeContainer}>
                    <img src={HeroIcon} className={styles.hero} alt='My profile Pic'></img>
                    <img src={themeIcon} className={styles.colorMode} alt='Color mode Icon' onClick={toggleTheme} ></img>
                </div>
                <div className={styles.info}>
                    <h1>Colin C Thomas</h1>
                    <h2>Software Developer</h2>
                <span>
                    {/* <a href='https://github.com/Ade-mir/harris-johnsen-2'>
                        <img src={TwiterIcon} alt={'Twitter'}></img>
                    </a> */}
                    <a href='https://www.linkedin.com/in/colin-c-thomas-364a06197/'>
                        <img src={LinkdnIcon} alt={'linkedInIcon'}></img>
                    </a>
                    <a href='https://github.com/cool4120'>
                        <img src={githubIcon} alt={'Github Icon'}></img>
                    </a>
                </span>
                <p className={styles.description}>Hello I Am a Software Developer with 1+ years of experience working in a startup. 
                    Proficient in web and mobile development technologies React.js, React Native & Node.js</p>
                <a href={CV}>
                    <button className='hover'>Resume</button>
                </a>
                </div>
            </section>
        </>
    )
}