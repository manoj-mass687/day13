import React from 'react';
import Child from './Child';

function Parent() {
    return (
        <div>
            <h1>Welcome to the Parent Component!</h1>
            <Child name="John" />  {/* Passing the 'name' prop with value "John" */}
        </div>
    );
}

export default Parent;
