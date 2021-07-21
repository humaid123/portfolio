import React, { useState, useEffect } from "react";

const LoadingComponent = () => {
  return (
    <div className="loading">
      <span className="name">Humaid M.</span>
      <span className="name">Agowun</span>
    </div>
  );
};

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(t);
  });
  return isLoading ? <LoadingComponent /> : children;
};

export default Loading;
