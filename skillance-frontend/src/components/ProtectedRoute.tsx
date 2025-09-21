import type React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, fetchUser } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser(); // get user from localStorage
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading && !user) {
            navigate("/", { replace: true }); // redirect if not authenticated
        }
    }, [user, loading, navigate]);

    // ✅ Only render children if auth check is done and user exists
    if (loading || !user) {
        return <div>Loading...</div>; // or a spinner
    }

    return children;
};

export default ProtectedRoute;
