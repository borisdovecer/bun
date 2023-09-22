import _ from "lodash";
import Pages from "@app/pages";
import { Link } from "react-router-dom";
import { IPage } from "@app/global/Interfaces.ts";

const Sidebar = () => {

  return (
    <div className='w-1/6 bg-black bg-opacity-80 text-red-600 h-screen pt-16 pl-8 space-y-3 shadow-lg'>
      {_.map(Pages, (page: IPage) => {
        return page.sidebar ?
          <div key={page.name} className='p-2'>
            <Link
              to={page.path}
              className='block p-2 rounded transition ease-in-out duration-300 hover:bg-red-600 hover:text-white'
            >
              {page.name}
            </Link>
          </div>
          :
          null;
      })}
    </div>
  );
};

export default Sidebar;
