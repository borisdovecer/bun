import {useEffect, useState} from "react";
import axios from "@app/config/axios.ts";
import _ from "lodash";
import {Link } from "react-router-dom";

const Usermanagement = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get("/api/users").then((res:any) => {
      setData(res.data);
    });
  },[]);

  return (
    <div>
      {data && _.map(data, (item: any) => {
        return <div><Link to={`/users/${item.username}`}>{item.username}</Link></div>;
      })}
    </div>
  );
};

export default Usermanagement;
