import React from 'react'
import { UserProps } from '../Types/user'
import { MdLocationPin } from 'react-icons/md'
import { Link } from 'react-router-dom'

const User = (
    {avatar_url,login,location,followers,following }:UserProps
) => {
  return (
    <div className='User'>
      <img src={avatar_url} alt={login}/>
      <h2>{login}</h2>
      {location && 
      <p className='location'>
        <MdLocationPin/>
        <span>{location}</span>
      </p> }
      
      <div className='stats'>
        <div >
            <p>Seguidores:</p>
            <p className='numbers'>{followers}</p>
        </div>
        <div>
            <p>Seguindo:</p>
            <p className='numbers'>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`} >Ver melhores projetos</Link>
    </div>
  )
}

export default User
