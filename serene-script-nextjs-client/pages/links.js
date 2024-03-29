import NavBar from "@/components/NavBar";
import Head from "next/head";
import { Box, Button, Card, CardContent, CardHeader, Typography, useTheme } from "@mui/material";
import Background from "@/components/Background";

export default function Links() {
    /*CANADA RESOURCES
    Based on: https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html
    Find Help/Self-Assessment
    -	211
    o	Confidential 24/7 resource to help assess your needs and refer you to the correct services
    o	https://ab.211.ca/
    -	
    -	Burnout, Stress, Anxiety, and Depression Self-Assessment
    o	https://mindcheck.me/
    -	Drop-In Single Session Counselling
    o	https://www.dropinyeg.ca/about-us/
    -	Psychology Today – Find a therapist in your area
    o	https://www.psychologytoday.com/ca/therapists
    -	Services Phonebook
    o	https://www.mymentalhealth.ca/edmonton-area/
    
    Emergencies:
    -	911
    -	Addiction Helpline
    o	1-866-332-2322
    o	https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1008399&serviceAtFacilityID=1047128
    -	Canadian Mental Health Association (CMHA)
    o	780-482-4357
    -	Health Link (health advice or information)
    o	811
    o	https://www.albertahealthservices.ca/info/Page12630.aspx
    -	Mental Health Helpline/AHS Suicide Hotline
    o	1-877-303-2642
    o	https://www.albertahealthservices.ca/findhealth/Service.aspx?id=6810&serviceAtFacilityID=1047134
    
    Edmonton based:
    -	Addiction and Mental Health
    o	780-424-2424
    
    Calgary based:
    -	Distress Center
    o	403-266-4357*/

    const theme = useTheme();

    const content = [
        {
            section: "Find Help/Self Assessment",
            resources: [
                {
                    name: "211",
                    description:
                        "211 is a free, confidential referral and information helpline and website that connects people of all ages and from all communities to the essential health and human services they need, 24 hours a day, seven days a week.",
                    url: "https://ab.211.ca/",
                },
                {
                    name: "MindCheck",
                    description: "Burnout, Stress, Anxiety, and Depression Self-Assessment",
                    url: "https://mindcheck.me/",
                },
                {
                    name: "Drop-In YEG",
                    description: "Drop-In Single Session Counselling",
                    url: "https://www.dropinyeg.ca/about-us/",
                },
                {
                    name: "Psychology Today",
                    description: "Find a therapist in your area",
                    url: "https://www.psychologytoday.com/ca/therapists",
                },
                {
                    name: "Services Phonebook",
                    description: "More Resources",
                    url: "https://www.mymentalhealth.ca/edmonton-area/",
                },
            ],
        },
        {
            section: "Emergencies/Hotlines",
            resources: [
                {
                    name: "911",
                    description: "Call 911 for emergencies",
                },
                {
                    name: "Addiction Helpline",
                    description: "1-866-332-2322",
                    url: "https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1008399&serviceAtFacilityID=1047128",
                },
                {
                    name: "Canadian Mental Health Association (CMHA)",
                    description: "780-482-4357",
                    url: "https://edmonton.cmha.ca/",
                },
                {
                    name: "Health Link",
                    description: "811",
                    url: "https://www.albertahealthservices.ca/info/Page12630.aspx",
                },
                {
                    name: "Mental Health Helpline",
                    description: "1-877-303-2642",
                    url: "https://www.albertahealthservices.ca/findhealth/Service.aspx?id=6810&serviceAtFacilityID=1047134",
                },
            ],
        },
    ];

    return (
        <Background>
            <Head>
                <title>Links</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <h1
                style={{
                    textAlign: "center",
                    marginTop: "5rem",
                    color: theme.palette.primary.dark,
                    marginBottom: "2rem",
                    width: "100%",
                }}
            >
                Mental Health Links
            </h1>
            <Box>
                {content.map((section) => {
                    return (
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                    fontSize: "1.5rem",
                                    color: theme.palette.primary.dark,
                                }}
                            >
                                {section.section}
                            </Typography>
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    justifyContent: "space-around",
                                    height: "25%",
                                    width: "100%",
                                }}
                            >
                                {section.resources.map((resource) => {
                                    return (
                                        <Card
                                            raised="true"
                                            sx={{
                                                width: "18%",
                                                textAlign: "center",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "start",
                                                alignItems: "center",
                                            }}
                                        >
                                            <CardHeader title={resource.name} />
                                            <CardContent>
                                                <Typography variant="body2" color="contrastText">
                                                    {resource.description}
                                                </Typography>
                                            </CardContent>
                                            {resource.url && (
                                                <Button
                                                    size="large"
                                                    variant="contained"
                                                    href={resource.url}
                                                    sx={{
                                                        width: "unset",
                                                        alignSelf: "center",
                                                        marginTop: "auto",
                                                        marginBottom: "1rem",
                                                    }}
                                                >
                                                    Link
                                                </Button>
                                            )}
                                        </Card>
                                    );
                                })}
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Background>
    );
}
