import React, { useState } from 'react';

interface ThemeSwitcherProps {
    themes: string[];
    initialThemeIndex?: number;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ themes, initialThemeIndex = 0 }) => {
    const [themeIndex, setThemeIndex] = useState(initialThemeIndex);

    const handleThemeChange = (index: number) => {
        setThemeIndex(index);
        document.documentElement.setAttribute('data-theme', themes[index]);
    };

    return (
        <div className="flex justify-center gap-4">
            {themes.map((theme, index) => (
                <button
                    key={index}
                    className={`btn ${index === themeIndex ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleThemeChange(index)}
                >
                    {theme}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
