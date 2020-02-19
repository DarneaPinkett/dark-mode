import react from "react"
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initalValue) => {
    const [DarkModeEnabled, setDarkModeEnabled] = useLocalStorage(key, initalValue);

    useEffect(() => {
        if(DarkModeEnabled === true) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [DarkModeEnabled]);

    return [DarkModeEnabled, setDarkModeEnabled]

}

export default useDarkMode;