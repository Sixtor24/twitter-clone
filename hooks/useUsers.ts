import useSWR from 'swr';

import fetcher from '/Users/alucard/Documents/Builds/twitter-clone/libs/fetcher';

const useUsers = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/users', fetcher);

return {
    data,
    error,
    isLoading,
    mutate
}
};

export default useUsers;