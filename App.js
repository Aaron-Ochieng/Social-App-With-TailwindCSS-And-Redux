import React from "react";
import { AppStack } from "./routes";
import AuthRoutes from "./routes/AuthRoutes";
import { store } from "./utils/redux/store";
import { AuthContext } from "./routes/AuthProvider";


export default function App() {
    return (
        <AuthContext>
            <AppStack />
        </AuthContext>
    )
}