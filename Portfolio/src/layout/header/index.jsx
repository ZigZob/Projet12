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
            <div className="lang" onClick={() => dispatch(toggleLang())}>
                <span className={`lang__element ${lang === "fr" ? "front" : "back"}`}>FR</span>
                <span className={`lang__element ${lang === "en" ? "front" : "back"}`}>EN</span>
            </div>
            <div className="time" onClick={() => dispatch(toggleTime())}>
                <div className={`time__element ${time === "night" ? "front" : "back"}`}>

                    {lang === "en" ? "Dev By Night" : "Dev la Nuit"}
                </div>
                <div className={`time__element ${time === "day" ? "front" : "back"}`}>
                    {lang === "en" ? "Dev By Day" : "Dev le Jour"}
                </div>
            </div>
        </header>
    )
}