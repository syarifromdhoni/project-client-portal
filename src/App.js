import React from "react";
import MiniDrawer from "./compoents/Menu";
import AppRoute from "./routes/route";

function App() {
  return (
    <div>
      <MiniDrawer>
        <AppRoute />
      </MiniDrawer>
    </div>
  );
}

export default App;
