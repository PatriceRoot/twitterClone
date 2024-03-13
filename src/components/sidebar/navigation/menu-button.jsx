export default function MenuButton({ value }) {
  return (
    <div className="menu-button">
      <img src={value.logo} alt="" />
      <h2>{value.title}</h2>
    </div>
  );
}
