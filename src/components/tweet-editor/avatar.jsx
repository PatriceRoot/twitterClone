import ProfilePhoto from '../../assets/images/Profile-Photo.png'

export default function Avatar() {
  return (
    <img
      className="avatar"
      src={ProfilePhoto}
      alt="avatar"
    />
  );
}
