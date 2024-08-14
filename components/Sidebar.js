// components/Sidebar.js
import Link from 'next/link';

const Sidebar = ({ categories }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="text-xl font-bold mb-4">Categories</div>
      <ul>
        {categories.map(category => (
          <li key={category.name} className="mb-2">
            <Link href={`#${category.name.toLowerCase()}`}>
              <a className="hover:text-gray-400">{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
