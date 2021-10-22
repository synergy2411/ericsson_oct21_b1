import React from 'react';

const AuthContext = React.createContext({
    token : "DUMMY_TOKEN"
})

export default AuthContext;

// Provider -> Value
// Consumer