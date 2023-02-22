import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

function useUser(id: string) {
  const {data, error, isLoading} = useSWR(
    `https://api.github.com/users/${id}`,
    fetcher,
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}

export default useUser;
