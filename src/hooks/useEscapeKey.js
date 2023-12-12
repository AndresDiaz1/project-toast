import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function onEscapehandler() {
      if (event.code === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", onEscapehandler);
    return () => {
      window.removeEventListener("keydown", onEscapehandler);
    };
  }, [callback]);
}

export default useEscapeKey;
