import React from 'react';

const search = ({ props, children, open }) => {

    if (!open) {
        return (
            <>
                <h1>Hello World</h1>
                <button onClick={props}>Click</button>
            </>
        );
    }

    return (
        <div>
            <button onClick={props}>Click</button>
            <h1>{open}</h1>
            {children}
        </div>
    );
};

export default search;