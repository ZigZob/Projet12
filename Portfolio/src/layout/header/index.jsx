import { toggleTime } from "../../store/slices/timeSlice/slice";
import { toggleLang } from "../../store/slices/langSlice/slice";
import { selectLang } from "../../store/slices/langSlice/selectors";
import { selectTime } from "../../store/slices/timeSlice/selectors";
import { useDispatch, useSelector } from "react-redux";
import "./_index.scss"

export default function Header() {
    const dispatch = useDispatch()
    const lang = useSelector(selectLang)
    const time = useSelector(selectTime)

    return (

        <header className={`header ${time === "night" ? "night" : "day"}`
        } >
            <div className={`header__element lang ${time === "night" ? "night" : "day"}`} onClick={() => dispatch(toggleLang())}>
                <span className={`lang__element ${lang === "fr" ? "front" : "back"}`}>FR</span>
                <span className={`lang__element ${lang === "en" ? "front" : "back"}`}>EN</span>
            </div>
            <div className={`header__element time ${time === "night" ? "night" : "day"}`} onClick={() => dispatch(toggleTime())}>
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