import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { getCompletion } from "@/utils/api/gpt4";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [sessionId, setSessionId] = useState(-1);

    return (
        <div style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundImage: 'url("/landscape-background.webp")'
        }}>

        <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
        </Head>
    
            <NavBar />
                <main>
                    <div>
                        <h1>Serene Script</h1>
                    </div>
                    <div>
                        <h2>Mental Health Support</h2>
                    </div>
                    <div>
                        <h3>Your journey to well-being starts here</h3>
                    </div>
                </main>
        </div>
    );
}
