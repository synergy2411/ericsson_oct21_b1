import { useState, useCallback } from 'react';
import MemoComp from "./MemoComp";
import SelectComp from './SelectComp';


const CallbackHook = () => {

    console.log("CallbackHook")

    const [showMemo, setShowMemo] = useState(true);
    const [country, setCountry] = useState('usa')

    const btnClickHandler = () => { setShowMemo(!showMemo)}

    const onSelectCountry = useCallback((country) => {
        console.log("Selected Country : ", country);
        setCountry(country);
    },[])

    return (
        <div>
            <p>The paragraph content</p>
            <button onClick={btnClickHandler}>Toggle Memo</button>
            <MemoComp show={false} />
            <SelectComp onSelectCountry = {onSelectCountry}/>
        </div>
    )

}

export default CallbackHook;