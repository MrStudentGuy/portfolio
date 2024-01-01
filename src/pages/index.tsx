import Image from 'next/image'
import { Public_Sans } from 'next/font/google'
import Link from "next/link";
import Head from "next/head";

const ps = Public_Sans({ subsets: ['latin'] })

const PinIcon = () => {
    return (
        <>
            <svg width="24px" height="24px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#ffffff" stroke-width="1.4"></path><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#ffffff" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </>
    )
}

const GitHubIcon = () => {
    return (
        <>
            <svg width="32px" height="32px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Aryan Pai</title>
                <meta name="title" content="Home | Aryan Pai" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Aryan Pai is a passionate hobbyist software developer, captain of FTC Team Matrix, and a student at the Dhirubhai Ambani International School." />
                <meta property="og:image" content="https://mrstudentguy.vercel.app/AryanMemojiThumbsUp.png" />
                <meta property="og:url" content="https://mrstudentguy.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home | Aryan Pai" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Home | Aryan Pai" />
                <meta name="twitter:description" content="Aryan Pai is a passionate hobbyist software developer, captain of FTC Team Matrix, and a student at the Dhirubhai Ambani International School." />
                <meta name="twitter:image" content="https://mrstudentguy.vercel.app/AryanMemojiThumbsUp.png" />
            </Head>
            
            <main
                className={`${ps.className} flex flex-col justify-center items-center h-screen pattern-death-star-gray-900/100 `}>
                <div className={"flex flex-col justify-center items-center space-y-5"}>
                    
                    <Image src="/AryanMemojiThumbsUp.png" alt="Aryan Pai" width={250} height={250}
                           className={"bg-white pattern-crosses-gray-900/100 rounded-full shadow-2xl border-8 border-[#7143E5]"}/>
                    <h1 className={"font-bold text-3xl md:text-4xl"}>Aryan Pai</h1>
                    
                    <div className={"flex flex-row justify-center items-center space-x-1"}>
                        <PinIcon/>
                        <h2>Mumbai, India 🇮🇳</h2>
                    </div>
                    
                    <div className={"flex flex-col space-y-3"}>
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <div className={"transition duration-75 hover:scale-110 font-mono text-green-400 bg-gray-800 p-2 rounded-lg"}>
                            // <b>Captain</b> of <Link href={"https://www.ftcmatrix.com"} target={"_blank"}
                                                       rel={"norefferer noopener"} className={"cursor-pointer"}><u>FTC
                            Team
                            Matrix</u></Link>
                        </div>
                        
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <div className={"transition duration-75 hover:scale-110 font-mono text-green-400 bg-gray-800 p-2 rounded-lg"}>
                            // Ardent <b>student</b> at <Link href={"https://dais.edu.in"} className={"cursor-pointer"}
                                                              target={"_blank"}
                                                              rel={"norefferer noopener"}><u>DAIS</u></Link>
                        </div>
                        
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <div className={"transition duration-75 hover:scale-110 font-mono text-green-400 bg-gray-800 p-2 rounded-lg"}>
                            // Passionate <b>software developer</b>
                        </div>
                    </div>
                </div>
                
                <button
                    className={"mt-10 w-64 h-12 bg-gray-800 transition duration-75 hover:scale-110 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex flex-row justify-center items-center space-x-2"}>
                    <GitHubIcon/>
                    <Link href={"https://github.com/MrStudentGuy"} className={"cursor-pointer"} target={"_blank"}
                          rel={"norefferer noopener"}><b>GitHub</b>/MrStudentGuy</Link>
                </button>
                
                
                <Link
                    href={"/contact"}
                    className={"mt-5 bg-gray-800 w-64 h-12 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex flex-row justify-center items-center space-x-2"}>
                    <b>Contact</b>
                </Link>
            </main>
        </>
    );
}
