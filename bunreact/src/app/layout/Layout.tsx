import { Header, Sidebar, Router } from "./";

const Layout = () => {

  return (
    <div>
      <div className='fixed z-10 w-full'>
        <Header />
      </div>
      <div className='flex flex-row relative w-full '>
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};

export default Layout;
