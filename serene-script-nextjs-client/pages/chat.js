import NavBar from "@/components/NavBar";
import { getCompletion } from "@/utils/api/gpt4";
import { Box, TextField, Button, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Chat() {
    const [sessionId, setSessionId] = useState(-1);
    const [sessionMessages, setSessionMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [working, setWorking] = useState(false);

    const theme = useTheme();

    const chatEndRef = useRef(null);

    const handleSendChat = async () => {
        setWorking(true);

        if (!validateMessage()) {
            setWorking(false);
            return;
        }

        let userMessage = userInput;
        let response = await getCompletion(userMessage, sessionId);

        if (sessionId == -1) {
            setSessionId(response.sessionId);
        }

        setSessionMessages((sessionMessages) => {
            return [
                ...sessionMessages,
                { role: "user", message: userMessage },
                { role: "assistant", message: response.response },
            ];
        });

        setUserInput("");

        setWorking(false);
    };

    const validateMessage = () => {
        let valid = true;

        if (userInput.trim() == "") {
            valid = false;
        }

        return valid;
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [sessionMessages]);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: 'url("/landscape-background.webp")'
        }}>
            <Head>
                <title>Chat</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Box height={100}>
                <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Therapy Chat</h1>

                {sessionMessages && sessionMessages.length > 0 && (
                    <>
                        <Box
                            sx={{
                                backgroundColor: 'white',
                                width: "70%",
                                marginX: "auto",
                                padding: "1rem",
                                borderRadius: "0.25rem",
                                border: `1px solid ${theme.palette.grey[400]}`,
                                maxHeight: "60vh",
                                overflowY: "scroll",
                            }}
                        >
                            {sessionMessages.map((sessionMessage) => {
                                if (sessionMessage.role == "assistant") {
                                    return (
                                        <>
                                            <div
                                                style={{
                                                    marginTop: "0.5rem",
                                                    backgroundColor: theme.palette.primary.main,
                                                    padding: "0.5rem",
                                                    borderRadius: "0.5rem",
                                                    maxWidth: "70%",
                                                    minWidth: "0rem",
                                                    display: "inline-block",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        width: "unset",
                                                    }}
                                                >
                                                    {sessionMessage.message}
                                                </Typography>
                                            </div>
                                            <div style={{ width: "100%", display: "block" }}></div>
                                        </>
                                    );
                                }
                                return (
                                    <div
                                        style={{
                                            minWidth: "100%",
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <div
                                            style={{
                                                marginTop: "0.5rem",
                                                backgroundColor: theme.palette.grey[300],
                                                padding: "0.5rem",
                                                borderRadius: "0.5rem",
                                                maxWidth: "70%",
                                                minWidth: "0rem",
                                                display: "inline-block",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    width: "unset",
                                                }}
                                            >
                                                {sessionMessage.message}
                                            </Typography>
                                        </div>
                                    </div>
                                );
                            })}
                            <div ref={chatEndRef}></div>
                        </Box>
                    </>
                )}

                <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                    <TextField
                        value={userInput}
                        onChange={(event) => setUserInput(event.target.value)}
                        multiline
                        sx={{ width: "70%", backgroundColor: 'white' }}
                        placeholder="Message"
                        disabled={working == true}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Button
                        onClick={async () => await handleSendChat()}
                        sx={{ display: "block", color: theme.palette.primary.dark }}
                        disabled={working == true}
                    >
                        Send
                    </Button>
                    {working && <CircularProgress />}
                </div>
            </Box>
        </div>
    );
}
