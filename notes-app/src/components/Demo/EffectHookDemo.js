import { useEffect, useState } from "react";

const EffectHookDemo = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showParagraph, setShowParagrah] = useState(true);

    useEffect(() => {
        console.log("UseEffect Works");
    }, [isLoggedIn, showParagraph])

    return (
        <div>
            { showParagraph && <p>Effect Hook Demo</p>}
            <button onClick={() => setShowParagrah(!showParagraph)}>Toggle Paragraph</button>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
        </div>
    )

}

export default EffectHookDemo;