import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {

    const
        prev = meta.links[0].url,
        next = meta.links[meta.links.length - 1].url,
        current = meta.current_page;


    return (
        <div className="join">
            {prev && <Link href={prev} className="join-item btn">«</Link> }
            <Link className="join-item btn">{current}</Link>
            {next && <Link href={next} className="join-item btn">»</Link>}

        </div>
    );
};

export default Paginator;
