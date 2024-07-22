'use client'

import { createContext, useEffect, useState } from "react";
import { TokenService } from "../services/tokenService";
import { redirect, usePathname, useRouter } from "next/navigation";
import { UserService } from "../services/UserService";
import React from "react";
import Loader from "@/components/common/Loader";
import { User } from "@/types/user";

interface AuthProviderProps {
    user: User;
    token: string;
    logOut: () => void;
}

const publicroutes = ["/auth/login", "/auth/cadastro", "/", "/carreiras", "/areas", "/questionario", "/trilhas/carreiras"]; 

export const AuthContext = createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const pathname = usePathname();

    function logout() {
        TokenService.deleteToken();
        setUser(null);
        setToken('');
        router.replace('/auth/login');
    }

    async function getUser() {
            const token = TokenService.getToken() as string;
            const user = await UserService.me(token);
            return user;
    }


    useEffect(() => {
        getUser().then((user) => {
            setUser(user.data);
            setToken(TokenService.getToken() as string);
            pathname.startsWith("/auth") ? router.replace("/dashboard") : router.replace(pathname);
        }).catch((err) => {
            if(publicroutes.includes(pathname) || pathname.startsWith("/trilhas/carreiras/") || pathname.startsWith("/carreiras/") || pathname.startsWith("/trilhas/")) {
                return router.replace(pathname)
            }
            return router.replace("/auth/login")
        }).finally(() => {
            setLoading(false);
        });
    }, [pathname]);


    
    if (loading) {
        return <Loader />;
    }

    return (
        <AuthContext.Provider value={{ user: user, token: token, logOut: logout }}>
            {children}
        </AuthContext.Provider>
    );
}
