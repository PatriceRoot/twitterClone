export default function TrendsBody({ value }) {
    return (
      <div className="trends-body">
        <p>{value.title}</p>
        <h2>{value.hashtag}</h2>
        <p>{value.tweet}</p>
      </div>
    );
  }