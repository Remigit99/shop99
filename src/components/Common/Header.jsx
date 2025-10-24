import Topbar from "../Layout/Topbar"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="w-full">
        {/* TopBar */}
        <Topbar/>
        <Navbar/>

    </header>
  )
}

export default Header