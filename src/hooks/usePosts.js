import { useEffect, useState } from "react"

const URL = "https://jsonplaceholder.typicode.com/posts"

export function usePosts() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    useEffect(
        () => {
            fetch(URL)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => setError(true))
                .finally(() => setIsLoading(false))
        },
        []
    )

    return {
        isLoading,
        error,
        data,
    }
}