import Link from "next/link";
import Header from "./header"
export const metadata = {
    title: "About Page",
};

export default function About(){
    return(
        <div>
            <Header></Header>
            <nav className = " bg-amber-600 ">
                <Link href="/">Home</Link>
            </nav>
            <h1>hello </h1>
        </div>
    )
}