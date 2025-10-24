import {useState} from 'react'
import {HiMagnifyingGlass} from "react-icons/hi";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        {isOpen ? 
        <form>
            <input type="text" placeholder="What are you looking for?"/>

        </form>
        :
        <button>
            <HiMagnifyingGlass/>
        </button>
        }
    </div>
  )
}

export default SearchBar