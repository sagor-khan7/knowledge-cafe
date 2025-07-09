import profile from "../../assets/profile.png";
export default function Header() {
  return (
    <nav className="flex justify-between text-5xl font-bold text-[#111] my-10 border-b-2 border-gray-300">
      <h1>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </nav>
  );
}
