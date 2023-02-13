import React, { useState, useEffect } from "react";

const Demo = () => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="text" style={{ top: scrollPos }}>
                Text
            </div>
            <div className="laptop" style={{ top: scrollPos }}>
                <div className="screen" style={{ backgroundImage: `url(${scrollPos > 100 ? "screen2.png" : "screen1.png"})` }} />
            </div>
        </div>
    );
};

export default Demo;
