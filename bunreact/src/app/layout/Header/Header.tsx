import _ from "lodash";
import Pages from "@app/pages";
import { RootState } from "@app/store";
import { Link } from "react-router-dom";
import { IPage } from "@app/global/Interfaces.ts";
import { useAppSelector } from "@app/store/hooks.ts";
import { IUserState } from "@app/store/interfaces.ts";

const Header = () => {
  const user: IUserState = useAppSelector((state: RootState) => state.user);

  return (
    <div className='w-full py-2 bg-black text-red-600 shadow-lg'>
      <div className='flex justify-center space-x-6'>
        {_.map(Pages, (page: IPage): JSX.Element | null => {
          return page.header ? (
            <Link
              key={page.name}
              to={page.path}
              className='border border-red-600 p-2 rounded hover:bg-red-600 hover:text-white transition ease-in-out duration-300'
            >
              {page.name}
            </Link>
          ) : null;
        })}
        <span className='border border-red-600 p-2 rounded animate-pulse'>
          {user.username}
        </span>
      </div>
    </div>
  );
};

export default Header;
