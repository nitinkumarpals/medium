import { useBlogs } from "../hooks";
import { Avatar } from "./Avatar"

export const Appbar = () => {
    const { blogs } = useBlogs();

    return (
        <div className="border-b border-slate-200 flex justify-between px-10 py-4">
            <div className="flex flex-col justify-center">
                Medium
            </div>
            <div>
            {blogs.length > 0 && (
                    <Avatar size={'big'} name={blogs[0].author.name || ""} />
                )}            </div>
        </div>
    )
}
