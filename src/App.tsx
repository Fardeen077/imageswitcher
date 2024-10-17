import { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeButton";
import { ThemeProvider } from "./context/Theme";
import lightBg from "../public/Images/LightMode.jpeg"
import darkBg from "../public/Images/DarkMode.jpeg"

// Define the context interface
interface ThemeContext {
  themeMode: string;
  darkTheme: () => void;
  lightTheme: () => void;
}

function App() {

  const [themeMode, setThemeMode] = useState<string>("light");
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    let theme = document.querySelector("html");

    if (theme) {
      theme.classList.remove("light", "dark");
      theme.classList.add(themeMode);
    }

  },[themeMode]);
  
  return (

    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        {/* Apply the background image dynamically based on theme */}
        <div
            className="flex flex-wrap min-h-screen items-center"
            style={{
                backgroundImage: `url(${themeMode === "light" ?  lightBg : darkBg})`, // Conditional background
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* Theme toggle buttons */}
                    <ThemeBtn />
                    </div>
                    <div className={`text-center ${themeMode === "light" ? "text-black" : "text-white"}`}>
                        <h1 className="text-3xl font-bold mb-4">Welcome to the Themed App!</h1>
                        <p className="text-lg">This text color changes based on the selected theme.</p>
                    </div>
            </div>
        </div>
    </ThemeProvider>
);
}

export default App;