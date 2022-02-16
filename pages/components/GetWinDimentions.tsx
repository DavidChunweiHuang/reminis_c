import { useState, useEffect } from "react";

const GetWinDimentions = () => {

    function getWindowDimentions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimentions, setWindowDimentions] = useState(getWindowDimentions());

    useEffect(() => {
        function handleResize() {
            setWindowDimentions(getWindowDimentions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimentions;
}

export default GetWinDimentions