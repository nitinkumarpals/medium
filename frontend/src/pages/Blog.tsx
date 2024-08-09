import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Fullblogcomponent } from "../components/Fullblogcomponent";

const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || '' });
    if (loading) {
        return <div>Laoding...</div>
    }
    return (
        <div>
            {blog && <Fullblogcomponent blog={blog} />}
            </div>
    )
}

export default Blog;

