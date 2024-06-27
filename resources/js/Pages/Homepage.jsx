import React from "react"
import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props)
{
    console.log(props);
    return (
        <div className="p-5 min-h-screen bg-neutral-800 text-white text-2xl">
            <Head title={props.title}/>
            <Navbar />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-strech items-center gap-4 p-4">
                <NewsList news={props.news.data}/>
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}
