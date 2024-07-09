import { useSelector } from "react-redux"
import "./_index.scss"
import { selectTime } from "../../store/slices/timeSlice/selectors"

export default function Footer() {
    const time = useSelector(selectTime)
    return (
        <footer tabIndex={1337} className={`footer ${time === "day" ? "light" : ""}`}>
            <p>&copy; 2024 Alexandre AMALRIC. All rights reserved.</p>
        </footer>
    )
}