import React, { useState, useEffect } from "react";
import axios from "axios";

const SideBarContent = () => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setFetchData(response?.data);
        console.log(response.data, "responsise");
        // console.log(response?.data[0].address);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="md:ml-[60] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fetchData.map((data) => {
          return (
            <div className="p-4 text-left bg-white rounded-lg" key={data.id}>
              <div className="text-black">{data.name}</div>
              <div>{data.email}</div>
              {/* <div>{data.address}</div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBarContent;
