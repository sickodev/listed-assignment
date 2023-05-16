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
                        className='rounded-full border-2 border-white cursor-pointer hover:shadow-lg'
                    />
                </button>
            </>
        );
    }
    return (
        <>
            <button
                onClick={() => signIn()}
                className='bg-black text-white px-2 py-1 rounded-[10px] border-2 transition-all duration-200 ease-in
                hover:shadow-xl active:scale-90'
            >
                <p>Sign In</p>
            </button>
        </>
    );
};

export default LoginButton;
