import {useState,useEffect} from 'react'
import Search from '../components/Search'

import { UserProps } from '../Types/user';
import User from '../components/user';
import Error from '../components/Error';
import Loader from '../components/Loader';

const Home = () => {
    const [user,setUser] = useState<UserProps | null>(null);
    const [error,setError] = useState<string | null>(null);
    const [loading,setLoading] = useState<boolean>(false);

    const loadUser = async (userName:string) => {
      setError(null);
      setUser(null);
      setLoading(true);

        const response = await fetch(`https://api.github.com/users/${userName}`)

        const data = await response.json();

        if(data.status === "404")
          setError("User not Found")
        else{
        const { avatar_url,login,location,followers,following} = data;

        const userData: UserProps = {
          avatar_url,
          login,
          location,
          followers,
          following
        }
        setUser(userData);
      }
      
      setLoading(false);
    }


  return (
    <div className='Home'>
        <Search  loadUser={loadUser} />
        { loading && <Loader/> }
        {user && <User {...user} /> }
        {error && <Error message={error}/>}
    </div>
  )
}

export default Home
