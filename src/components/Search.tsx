import { BsSearch } from 'react-icons/bs'
import { useState, KeyboardEvent } from 'react'

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}

const Search = ( {loadUser}: SearchProps) => {
    const [search,setSearch] = useState<string>('');

    const handleKeyDown = (e:KeyboardEvent) => {
      if(e.key === "Enter")
        loadUser(search);
    }

  return (
    <div className='search'>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositorios</p>
      <div className='search-input'>
        <input type="text" placeholder='Digite o nome do usuário' value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        onKeyDown={handleKeyDown} />
        <button onClick={() => loadUser(search)} >
            <BsSearch/>
        </button>
      </div>
    </div>
  )
}

export default Search
