import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { ToastContainer } from "react-toastify";
import { Loader } from "./components";
import { useAuth } from "../components/context/AuthContext";
import { useEffect} from "react";

const MainLayout = () => {

  const {loader, setLoader} = useAuth()

  useEffect(() => {
    // Fake delay for loader effect
    const timer = setTimeout(() => setLoader(false), 1500);
    return () => clearTimeout(timer);
  }, [loader]);

  if (loader) return <Loader />;

  return (
    <>
      <Navbar />
      <main className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64 overflow-x-hidden max-h-max">
        <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default MainLayout
