export default function FollowBody({ value }) {
  return (
    <div className="follow-body">
      <div className="follow-image">
        <img src={value.image} alt="" />
      </div>
      <div className="follow-title">
        <h3>{value.title}</h3>
        <p>{value.link}</p>
      </div>
      <div className="follow-button">
        <button>Follow</button>
      </div>
    </div>
  );
}
