import Header from "./header/Header";
import Sidebar from "./sidebarcontent/Sidebar";

function Base({ children }: { children: React.ReactNode }) {
  return (
    <div className="base">
      <div className="base_left">
        <Sidebar />
      </div>
      <div className="base_right">
        <Header />
        <div className="suggestions"></div>
        {children}
      </div>
    </div>
  );
}

export default Base;
