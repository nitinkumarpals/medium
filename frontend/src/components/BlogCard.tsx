import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

interface BlogcardProps {
    authorName: string,
    title: string,
    content: string,
    publishedAt: string
    id: string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedAt,
    id
}: BlogcardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex items-center ">
                    <Avatar name={authorName} />
                    <div className="font-extralight pl-2 text-sm" >{authorName} </div>
                    <span className="pl-2 text-slate-600">&#183;</span>
                    <div className="pl-2 font-thin text-slate-600 text-sm">{publishedAt}</div>
                </div>
                <div className="pt-2 text-xl font-bold">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.length > 100 ? `${content.slice(0, 100)}...` : content}
                </div>

                <div className="text-slate-500 text-sm font-thin pt-6">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>

            </div>
        </Link>
    )
}


