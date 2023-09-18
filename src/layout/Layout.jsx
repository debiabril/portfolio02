import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Sider } from "../components/Sider"
export const Layout = () => {
  return (
    <>
      <Sider/>
      <Outlet/>
      <Footer/>
    </>
  )
}
