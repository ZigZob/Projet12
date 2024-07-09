import "./_index.scss"
import { useSelector } from "react-redux"
import { selectTime } from "../../store/slices/timeSlice/selectors"
import { selectLang } from "../../store/slices/langSlice/selectors"

export default function Footer() {
    const time = useSelector(selectTime)
    const lang = useSelector(selectLang)
    return (
        <footer tabIndex="0" className={`footer ${time === "day" ? "light" : ""}`}>
            <p>&copy; 2024 Alexandre AMALRIC. {lang === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.</p>

        </footer>
    )
}