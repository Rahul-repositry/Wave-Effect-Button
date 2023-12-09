import React, { useEffect } from "react";

const buttonHook = (element, config) => {
  const { size = 100, color = "#fff", duration = 800 } = config;

  useEffect(() => {
    const applyContainerProperties = () => {
      element.current.classList.add("effect-container");
    };

    const appStyles = (e) => {
      const { offsetX, offsetY } = e;
      const { style } = element.current;
      style.setProperty("--effect-duration", `${duration}ms`);
      style.setProperty("--effect-top", `${offsetY - 50}px`);
      style.setProperty("--effect-left", `${offsetX - 50}px`);
      style.setProperty("--effect-height", `${size}px`);
      style.setProperty("--effect-width", `${size}px`);
      style.setProperty("--effect-color", `${color}`);
    };

    const onclick = (e) => {
      element.current.classList.remove("active");
      appStyles(e);
      element.current.classList.add("active");
    };

    applyContainerProperties();

    //add the event listener for mount
    element.current.addEventListener("mouseup", onclick);

    //Needed for referencing the ref in the return function
    const cleanupRef = element.current;

    return () => {
      cleanupRef.removeEventListener("mouseup", onclick);
    };
  }, [color, duration, element, size]);

  return <div>buttonHook</div>;
};

export default buttonHook;
