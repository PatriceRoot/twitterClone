export default function MenuButton({ value }) {
  return (
    <div>
      <img src={value.logo} alt="" />
      <h2>{value.title}</h2>
    </div>
  );
}
