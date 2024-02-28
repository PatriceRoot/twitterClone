import ProfilePhoto from '../../assets/images/profile.png'

export default function Avatar() {
  return (
    <img
      className="avatar"
      src={ProfilePhoto}
      alt="avatar"
    />
  );
}
