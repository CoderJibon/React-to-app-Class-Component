import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const SingleProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("location"));
  const location = useLocation();
  console.log(location);
  return (
    <div>
      SingleProduct SingleProduct
      <button
        className="btn btn-primary"
        onClick={() => setSearchParams({ location: "Dhaka" })}
      >
        search
      </button>
    </div>
  );
};
