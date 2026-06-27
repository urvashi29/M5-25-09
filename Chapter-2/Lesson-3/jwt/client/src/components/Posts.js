import React, { useState } from "react";
import { useEffect } from "react";

const Posts = () => {
  async function handleClick(item) {
    const user = JSON.parse(localStorage.getItem("user"));

    // API Call to check token exists or not

    // cookieStore.get("token");//modern
    // let token = document.cookie;

    if (!user || !user.id) {
      window.location.href = "/login";
      return;
    }

    alert("product added to the cart");
  }

  useEffect(
    () => {},
    // api data will come if use is logged in
    [],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
};

export default Posts;
