"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();
    return (
        
        <h1>Header test {pathname} </h1>
    )
}