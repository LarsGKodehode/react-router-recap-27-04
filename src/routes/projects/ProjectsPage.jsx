import { usePosts } from "../../hooks/usePosts"

export function ProjectsPage() {
    const { isLoading, error, data } = usePosts()

    return (
        <>
            {
                isLoading ? <h4>Loading</h4>
                : error ? <h4>Error</h4>
                :
                <ul>
                    {
                        data.map(
                            (post) => {
                                return (
                                    <li key={post.id}>
                                        <div>
                                            <h4>{post.title}</h4>
                                            <p>{post.body}</p>
                                        </div>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            }
        </>
    )
}