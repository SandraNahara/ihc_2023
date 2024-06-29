import NavBar from "@components/common/navBar";
import SideBar from "@components/common/sideBar";
import BottomBar from "@components/common/bottomBar";

export default function DashboardLayout({ children }) {
  return (
    <main className="relative flex flex-col h-screen">
      <div>
        <NavBar />
      </div>

      <div>
        <div className="flex">
          <div>
            <SideBar />
          </div>
          <section className="mx-auto max-w-screen-xl z-10 mb-12 h-full flex-grow p-3">
            {children}
          </section>
          <BottomBar />
        </div>
      </div>
    </main>
  );
}
