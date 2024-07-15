import "./_index.scss"

export default function Skill({ content, emphasis, add }) {
    return (
        <li className="skill" >&#10004; {content}<em>{emphasis}</em>{add}</li>
    )
}