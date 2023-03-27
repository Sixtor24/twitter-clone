import useSWR from "swr";

import fetcher from "/Users/alucard/Documents/Builds/twitter-clone/libs/fetcher";

const usePosts = (userId?: string) => {
    const url = userId ? `/api/posts?userId=${userId}` : "/api/posts";
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default usePosts;
