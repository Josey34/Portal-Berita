import React from "react"
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props)
{
    console.log(props);
    return (
        <div className="p-5 min-h-screen bg-neutral-800 text-white text-2xl">
            <Head title={props.title}/>
            {/* <p>{props.description}</p> */}
            {props.news ? props.news.map((data, i) => {
                return (
                    <div key={i} className="p-4 m-2 bg-white text-black shadow-md rounded-md">
                        <p className="text-2xl">{data.title}</p>
                        <p>{data.description}</p>
                        <p className="text-sm">{data.category}</p>
                        <p className="text-sm">{data.author}</p>
                    </div>
                )
            }) : <p>Saat ini belum ada berita</p>}
        </div>
    )
}
