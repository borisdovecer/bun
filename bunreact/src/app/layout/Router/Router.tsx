import _ from "lodash";
import Pages from "@app/pages";
import { Route, Routes } from "react-router-dom";
import { IPage } from "@app/global/Interfaces.ts";

const Router = () => {
  const routes = _.map(Pages, (page: IPage) => {
    return <Route key={page.name} path={page.path} element={<page.element />} />;
  });

  return (
    <div className='w-5/6 bg-gray-900 text-red-600 h-screen absolute right-0 pt-16 pl-8 space-y-3 shadow-inner'>
      <Routes>{routes}</Routes>
    </div>
  );
};

export default Router;

