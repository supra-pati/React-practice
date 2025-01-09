import React, { Suspense, lazy } from "react";

const Hello = lazy(() => import("./Hello"));

const LApp = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hello />
      </Suspense>
    </div>
  );
};

export default LApp;
