import Header from "../Common/Header"
import Footer from "../Common/Footer"
import { Outlet } from "react-router-dom"


const UserLayout = () => {


  return (
    <>
      <Header />

      <Outlet />

      <Footer />

    </>
  )
}

export default UserLayout