import { createContext, useState, } from 'react';

export const ThemeContext = createContext(null)

const ThemeManager = ({children}) => {
    
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light')
    

    const ThemeStates = {
        test:'dark',
        theme,
        setTheme
    }
    return (
        <ThemeContext.Provider value={ThemeStates}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeManager;