"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
import Image from "next/image";

const LoginButton = () => {
    const { data: session } = useSession();

    if (session) {
        console.log("User Signed In");
        return (
            <>
                <button onClick={() => signOut({})}>
                    <Image
                        src={`https://api.dicebear.com/6.x/notionists/svg?seed=${session.user?.name}`}
                        alt=''
                        style={{ objectFit: "cover" }}
                        height={40}
                        width={40}
                        className='rounded-full border-[1px] border-white cursor-pointer hover:shadow-md'
                    />
                </button>
            </>
        );
    }
    return (
        <>
            <button onClick={() => signIn()}>Sign In</button>
        </>
    );
};

export default LoginButton;
