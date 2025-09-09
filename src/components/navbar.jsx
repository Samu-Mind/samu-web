// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-white shadow-md">
      <h1 className="text-xl font-bold">Samu-Mind</h1>
      <button className="p-2 border rounded">☰</button>
    </nav>
  );
}
