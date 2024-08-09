import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-xl w-full">
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="bg-gray-300 h-10 w-10 rounded-full mr-4 animate-pulse"></div> {/* Avatar Skeleton */}
                            <div className="flex flex-col">
                                <div className="bg-gray-300 h-6 w-1/3 mb-2 animate-pulse"></div> {/* Author Name Skeleton */}
                                <div className="bg-gray-300 h-4 w-1/4 animate-pulse"></div> {/* Published At Skeleton */}
                            </div>
                        </div>
                        <div className="bg-gray-300 h-8 w-full mb-4 animate-pulse"></div> {/* Title Skeleton */}
                        <div className="bg-gray-300 h-32 w-full animate-pulse"></div> {/* Content Skeleton */}
                    </div>

                </div>
            </div>
        </div>

    }
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    {blogs.map(blog =>
                        <BlogCard
                            id={blog.id}
                            key={blog.id}
                            authorName={blog.author.name.charAt(0).toUpperCase() + blog.author.name.slice(1) || ""}                            publishedAt="11/11/2021"
                            title={blog.title}
                            content={blog.content}
                        />)}
                </div>
            </div>
        </div>
    )
}


