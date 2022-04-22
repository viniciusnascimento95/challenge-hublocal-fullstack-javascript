import React from 'react';

import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({children}: {children: JSX.Element }) => {
    const auth = useAuth();

    if(!auth.email) {
        return <h2>You not have access</h2>
    }

    return children;
}

