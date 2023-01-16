import { ReactNode, createContext, useEffect, useState } from "react";

import Cookies from "../../components/layout/cookies/Cookies";
import { ICookiesContextProps } from "../../lib/interfaces/ICookiesProps";

const CookiesContext = createContext<ICookiesContextProps>({
    cookies: "show",
    handleCookies: () => { }
});
export const CookiesProvider = ({ children }: { children: ReactNode }) => {
    const [cookies, setCookies] = useState("show");
    const handleCookies = (value: string) => {
        setCookies(value);
        localStorage.setItem('cookies', JSON.stringify(value));
    };
    useEffect(() => {
        const cookies = localStorage.getItem('cookies');
        if (cookies) {
            setCookies(JSON.parse(cookies));
        }
    }, []);
    return (
        <CookiesContext.Provider value={{ cookies, handleCookies }}>
            {children}
            {cookies === "show" && <Cookies />}
        </CookiesContext.Provider>
    )
};
export default CookiesContext;