// components/Layout.js
import Sidebar from './Sidebar';

const Layout = ({ children, categories }) => {
  return (
    <div className="flex">
      <Sidebar categories={categories} />
      <main className="flex-1 p-4 bg-gray-900 text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
