import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeManager';

const useTheme = () => {
    const all = useContext(ThemeContext)
    return all;
};

export default useTheme;