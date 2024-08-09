
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar"

export const Appbar = () => {
    const token = localStorage.getItem('token');
    let name = '';

    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        name = payload.name.toUpperCase();    }
    return (
        <div className="border-b border-slate-200 flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                Medium
            </Link>
            <div className="flex items-center">
                <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-light rounded-full text-sm px-3 py-1 text-center ">Publish</button>

                </Link>
                <Avatar size={'big'} name={name || ""} />
            </div>
        </div>
    )
}
