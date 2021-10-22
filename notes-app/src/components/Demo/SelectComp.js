import React from 'react';

const SelectComp = (props) => {

    console.log("SelectComp")
    const countryChangeHandler = (event) =>{
        props.onSelectCountry(event.target.value)
    }
    return (
        <div>
            <select onChange={countryChangeHandler}>
                <option value="usa">USA</option>
                <option value="ind">IND</option>
                <option value="aus">AUS</option>
            </select>
        </div>
    )

}

export default React.memo(SelectComp);