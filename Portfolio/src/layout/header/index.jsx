import { toggleTime } from "../../store/slices/timeSlice/slice";
import { toggleLang } from "../../store/slices/langSlice/slice";
import { selectLang } from "../../store/slices/langSlice/selectors";
import { selectTime } from "../../store/slices/timeSlice/selectors";
import { useDispatch, useSelector } from "react-redux";
import "./_index.scss"
import { database } from "../../assets/projectData";

export default function Header() {
    const dispatch = useDispatch()
    const lang = useSelector(selectLang)
    const time = useSelector(selectTime)
    let key = `${lang}_${time}`
    return (

        <header className={`${time === "night" ? "night" : "day"}`
        } >
            <div onClick={() => dispatch(toggleLang())} className={`langWrapper ${time === 'night' ? 'toggled' : ''}`}>
                <div className={`lang ${lang === "fr" ? "front" : "back"}`}>FR</div>
                <div className={`lang ${lang === "en" ? "front" : "back"}`}>EN</div>
            </div>
            <div className="dev" onClick={() => dispatch(toggleTime())}>
                <div className={`dev__by--${time === "night" ? "night front" : "day back"}`}>
                    {database[key].header[0]}
                </div>
                <div className={`dev__by--${time === "day" ? "night front" : "day back"}`}>
                    {database[`${lang}_${time}`].header[1]}
                </div>
            </div>
        </header>
    )
}