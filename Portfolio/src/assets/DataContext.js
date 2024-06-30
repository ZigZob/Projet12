import {
    createContext,
    useCallback,
    useContext,
    useEffect,
} from "react";
import { useSelector } from "react-redux";
import { selectTime } from "../store/slices/timeSlice/selectors";
import { selectLang } from "../store/slices/langSlice/selectors";
import { database } from "./projectData";

const DataContext = createContext({});

export const api = {
    loadData: async () => {
        const json = await fetch("/events.json");
        return json.json();
    },
};

export default function DataProvider({ children }) {
    const time = useSelector(selectTime)
    const lang = useSelector(selectLang)
    const key = `${lang}_${time}`;

    const getData = useCallback(async () => {
        try {
            setData(await api.loadData());
        } catch (err) {
            setError(err);
        }
    }, []);
    useEffect(() => {
        if (data) return;
        getData();
    });

    return (
        <DataContext.Provider
            value={{
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);