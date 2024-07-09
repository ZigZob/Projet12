import "./_index.scss"
import { toggleTime } from "../../store/slices/timeSlice/slice";
import { toggleLang } from "../../store/slices/langSlice/slice";
import { selectLang } from "../../store/slices/langSlice/selectors";
import { selectTime } from "../../store/slices/timeSlice/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectKey } from "../../store/selectors";
import { database } from "../../assets/projectData";

export default function Header() {
    const dispatch = useDispatch()
    const lang = useSelector(selectLang)
    const time = useSelector(selectTime)
    const key = useSelector(selectKey)
    return (
        <header className={`header ${time === "night" ? "night" : "day"}`}>
            <div tabIndex={1} aria-label={lang === "en" ?
                "Current language is English, press this button if you'd like to swap to French"
                : "La page est actuellement en Français, appuyez içi si vous souhaitez passer en Anglais"}
                className={`header__element lang ${time === "night" ? "night" : "day"}`}
                onClick={() => dispatch(toggleLang())}
            >
                <span aria-hidden="true" className={`lang__element ${lang === "fr" ? "front" : "back"}`}>FR</span>
                <span aria-hidden="true" className={`lang__element ${lang === "en" ? "front" : "back"}`}>EN</span>
            </div>
            <div tabIndex={2} aria-label={database[key].headerBtn}
                className={`header__element time ${time === "night" ? "night" : "day"}`}
                onClick={() => dispatch(toggleTime())}
            >
                <div aria-hidden="true" className={`time__element ${time === "night" ? "front" : "back"}`}>

                    {lang === "en" ? "Dev By Night" : "Dev la Nuit"}
                </div>
                <div aria-hidden="true" className={`time__element ${time === "day" ? "front" : "back"}`}>
                    {lang === "en" ? "Dev By Day" : "Dev le Jour"}
                </div>
            </div>
        </header>
    )
}