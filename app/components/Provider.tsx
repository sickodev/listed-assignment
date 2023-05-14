"use client";

import { SessionProvider } from "next-auth/react";

//Bad practice but could not find a better solution
const Provider = ({ children }: any) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
