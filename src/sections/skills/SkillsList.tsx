interface ISkillsList  {
src: string;
name:string;
}
export const SkillsList = (props:ISkillsList) => {
    return (
        <span>
            <img src={props.src} alt='check'></img>
            <p>{props.name}</p>
        </span>
    )
}