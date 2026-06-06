import React from 'react';
import Parent from './Parent';

function App() {
    const appstyle = {
        textAlign: 'center',
        marginTop: '50px',  
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
    }
    return (
        <div>
            <Parent />  {/* Render the Parent component */}
        </div>
    );
}

export default App;
