import {
  PostContainer,
  BottomPostContainer,
  BottomPostContainerComment,
} from "./style";
import thumbUp from "../../img/thumbs-up.png";
import thumbDown from "../../img/thumbs-down.png";
function FeedPost(props) {
  return (
    <div>
      <PostContainer>
        <h4>{props.username}</h4>
        <p>{props.title}</p>
        <article>{props.body}</article>
        <BottomPostContainer>
          <div>
            <img
              onClick={() => props.onPostUpvote(props.id)}
              src={thumbUp}
              alt="voto positivo"
            />
            <p>{props.voteSum ? props.voteSum : 0}</p>
            {/* <p>{props.userVote ? props.userVote : 0}</p> */}
            <img
              onClick={() => props.onPostDownVote(props.id)}
              src={thumbDown}
              alt="voto negativo"
            />
          </div>
          <BottomPostContainerComment>
            <p>{props.commentCount ? props.commentCount : 0}</p>
            <p>Comentários</p>
          </BottomPostContainerComment>
        </BottomPostContainer>
      </PostContainer>
    </div>
  );
}
export default FeedPost;
