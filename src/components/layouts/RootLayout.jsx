import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="app-container">
      <div className="content-container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
