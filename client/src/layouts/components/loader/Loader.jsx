import "./loader.css"

const Loader = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden">
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  );
}

export default Loader
