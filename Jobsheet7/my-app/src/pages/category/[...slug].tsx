import { useEffect, useState } from "react";

type categoryType = {
  id: string;
  name: string;
};

const category = () => {
  const [categorys, setcategorys] = useState([]);

  useEffect(() => {
    fetch("/api/category")
      .then((response) => response.json())
      .then((respondata) => setcategorys(respondata.data))
      .catch((error) => console.error("Error fetching categorys:", error));
  }, []);

  return (
    <>
      <h1>category List</h1>
      {categorys.map((category: categoryType) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
        </div>
      ))}
    </>
  );
};

export default category;
