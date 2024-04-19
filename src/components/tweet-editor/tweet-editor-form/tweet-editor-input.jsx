export default function TweetEditorInput({ register, reff }) {
  return (
    <input
      ref={reff}
      type="text"
      name="Post"
      className="tweet-editor-input"
      placeholder="What’s happening?"
      {...register("tweet_text", { required: "Veillez ecrire un post valide" })}
    />
  );
}
