import { selectLang } from "./slices/langSlice/selectors"
import { selectTime } from "./slices/timeSlice/selectors"

export const selectKey = (state) => `${selectLang(state)}_${selectTime(state)}`;