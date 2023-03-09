import React, { useContext } from "react";
import UtilityContext from "../../Context/UtilityContext";

const Blog = () => {
  const { title } = useContext(UtilityContext);
  return <div>{title}</div>;
};

export default Blog;
