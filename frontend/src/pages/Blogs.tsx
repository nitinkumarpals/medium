import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard
                    authorName="Jules Winnfield"
                    publishedAt="11/11/2021"
                    title="Laziness Does Not Exist Most importantly, the office was really close to my house."
                    content="So when I saw a posting for a web writer at a different agency, I thought, what the hell? I’d worked on a couple web projects. I liked them well enough. Most importantly, the office was really close to my house.
                
                I got the job. But when I showed up to my first day, I learned that I wasn’t on the creative team with the other writers. And I wasn’t on the UX team, either — because there wasn’t one. To be honest, I don’t think I even knew what UX was."
                />
                <BlogCard
                    authorName="Jules Winnfield"
                    publishedAt="11/11/2021"
                    title="Laziness Does Not Exist Most importantly, the office was really close to my house."
                    content="So when I saw a posting for a web writer at a different agency, I thought, what the hell? I’d worked on a couple web projects. I liked them well enough. Most importantly, the office was really close to my house.
                
                I got the job. But when I showed up to my first day, I learned that I wasn’t on the creative team with the other writers. And I wasn’t on the UX team, either — because there wasn’t one. To be honest, I don’t think I even knew what UX was."
                />
                <BlogCard
                    authorName="Jules Winnfield"
                    publishedAt="11/11/2021"
                    title="Laziness Does Not Exist Most importantly, the office was really close to my house."
                    content="So when I saw a posting for a web writer at a different agency, I thought, what the hell? I’d worked on a couple web projects. I liked them well enough. Most importantly, the office was really close to my house.
                
                I got the job. But when I showed up to my first day, I learned that I wasn’t on the creative team with the other writers. And I wasn’t on the UX team, either — because there wasn’t one. To be honest, I don’t think I even knew what UX was."
                />
            </div>
        </div>
        </div>
    )
}


