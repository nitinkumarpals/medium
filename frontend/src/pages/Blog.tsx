import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Fullblogcomponent } from "../components/Fullblogcomponent";
import { Appbar } from "../components/Appbar";
import SkeletonLoader from "../components/SkeletonLoader";

const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || '' });
    if (loading) {
        return <div>
            <Appbar />
            <SkeletonLoader/>
        </div>
    }
    return (
        <div>
            {blog && <Fullblogcomponent blog={blog} />}
            </div>
    )
}

export default Blog;

