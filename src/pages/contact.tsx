import { Public_Sans } from 'next/font/google'
import Link from "next/link";
import {toast} from "sonner";

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

const LeftArrow = () => {
    return (
        <>
            <svg width="18px" height="18px" viewBox="0 0 24 24" stroke-width="1.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </>
    )
}

const EmailIcon = () => {
    return (
        <>
            <svg width="32px" height="32px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M7 9L12 12.5L17 9" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="#ffffff" stroke-width="1.4"></path></svg>
        </>
    )
}

const LinkedInIcon = () => {
    return (
        <>
            <svg width="32px" height="32px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </>
    )
}

const AddSchoolEmail = () => {
    navigator.clipboard.writeText("aryan.1301021@dais.edu.in")
        .then(r => {toast.success("School email added to clipboard.")})
        .catch(e => {toast.error("Failed to add school email to clipboard. Have you tried allowing clipboard access?")})
}

const AddPersonalEmail = () => {
    
    navigator.clipboard.writeText("aryan.pai7@icloud.com")
        .then(r => {toast.success("Personal email added to clipboard.")})
        .catch(e => {toast.error("Failed to add personal email to clipboard. Have you tried allowing clipboard access?")})
}

export default function Home() {
    return (
        <main
            className={`${ps.className} flex flex-col justify-center items-center h-screen pattern-death-star-gray-900/100 `}>
            <Link href={"/"} className={"flex flex-row justify-center items-center space-x-2 mb-10"}>
                <LeftArrow/>
                <p>Return to home</p>
            </Link>
            
            <h1 className={"mt-10 mb-2 font-bold text-2xl"}>Email</h1>
            <div className={"flex flex-col justify-evenly items-center space-y-5"}>
                {/*School Email*/}
                <button
                    onClick={AddSchoolEmail}
                    className={"cursor-pointer w-64 h-12 bg-gray-800 transition duration-75 hover:scale-110 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex flex-row justify-center items-center space-x-2"}>
                    <EmailIcon/>
                    <b>School Email</b>
                </button>
                
                {/*Personal Email*/}
                <button
                    onClick={AddPersonalEmail}
                    className={"cursor-pointer w-64 h-12 bg-gray-800 transition duration-75 hover:scale-110 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex flex-row justify-center items-center space-x-2"}>
                    <EmailIcon/>
                    <b>Personal Email</b>
                </button>
            </div>
            
            <h1 className={"mt-10 mb-2 font-bold text-2xl"}>Socials</h1>
            <div className={"flex flex-col space-y-5"}>
                <button
                    className={"w-64 h-12 bg-gray-800 transition duration-75 hover:scale-110 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex flex-row justify-center items-center space-x-2"}>
                    <GitHubIcon/>
                    <Link href={"https://github.com/MrStudentGuy"} className={"cursor-pointer"} target={"_blank"}
                          rel={"norefferer noopener"}><b>GitHub</b>/MrStudentGuy</Link>
                </button>
                
                <button
                    className={"w-64 h-12 bg-gray-800 transition duration-75 hover:scale-110 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex flex-row justify-center items-center space-x-2"}>
                    <LinkedInIcon/>
                    <Link href={"https://www.linkedin.com/in/mrstudentguy/"} className={"cursor-pointer"}
                          target={"_blank"}
                          rel={"norefferer noopener"}><b>LinkedIn</b>/Aryan Pai</Link>
                </button>
            </div>
        
        </main>
    );
}
