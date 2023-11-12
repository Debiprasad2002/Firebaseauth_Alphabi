// "use client";
// import React, { useEffect, useState } from "react";
// import { UserAuth } from "../context/AuthContext";
// import Spinner from "../components/Spinner";

// const page = () => {
//   const { user } = UserAuth();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 50));
//       setLoading(false);
//     };
//     checkAuthentication();
//   }, [user]);

//   return (
//     <div className="p-4">
//       {loading ? (
//         <Spinner />
//       ) : user ? (
//         <p>
//           Welcome, {user.displayName} - you are logged in to the profile page -
          
//         </p>
//       ) : (
//         <p>You must be logged in to view this page </p>
//       )}
//     </div>
//   );
// };

// export default page;


"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const Page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <Spinner />
      ) : user ? (
        <div className="flex flex-col items-center">
          <p>Welcome, {user.displayName} - you are logged in to the profile page</p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Enter the text"
              className="border border-gray-400 p-2 mr-2"
            />
            <button className="bg-transparent border border-black text-black p-2">Search</button>
          </div>
        </div>
      ) : (
        <p>You must be logged in to view this page</p>
      )}
    </div>
  );
};

export default Page;

