import Provider from "./components/Provider";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700", "300"],
});

export const metadata = {
    title: "Listed Assignment",
    description:
        "An assignment project created using Next.js 13 and Typescript",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${montserrat.className} bg-[#f5f5f5] cursor-default`}
            >
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
