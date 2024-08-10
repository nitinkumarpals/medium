import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { SkeletonBlog } from "../components/SkeletonBlog";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <Appbar />
            <SkeletonBlog />
            <SkeletonBlog />
            <SkeletonBlog />
            <SkeletonBlog />
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


