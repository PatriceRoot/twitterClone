export default function TrendsBody({ value }) {
  return (
    <div className="trends-body">
      <div className="trend-class">
        <p>{value.title}</p>
        <h4>{value.hashtag}</h4>
        <p>{value.tweet}</p>
      </div>
      <div>
       <img src="/More2.svg" alt="More icon" />
      </div>
    </div>
  );
}
