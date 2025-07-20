import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64 overflow-x-hidden max-h-max">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
