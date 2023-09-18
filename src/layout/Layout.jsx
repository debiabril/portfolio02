import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Sider } from "../components/Sider"
import { Chatbot } from "../components/Chatbot"

export const Layout = () => {
  return (
    <>
      <Sider/>
      <Outlet/>
      <Footer/>
    </>
  )
}
