import React from 'react';
import Paragraph from "./Paragraph";

const MemoComp = (props) => {

    console.log("Memo Comp")
    return (
        <div>
           <Paragraph> <p>The Memo Component</p></Paragraph>
        </div>
    )

}

export default React.memo(MemoComp);

// props.show === props.previous.show