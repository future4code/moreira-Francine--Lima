import {
  PostContainer,
  BottomPostContainer,
  BottomPostContainerComment,
  PostTopContainer,
} from "./style";
import thumbUp from "../../assets/thumbs-up.png";
import thumbDown from "../../assets/thumbs-down.png";
import { useEffect } from "react";
import { usePutDownVote } from "../../Hooks/usePutDownVote";
import { usePostUpvote } from "../../Hooks/usePostUpvote";
import CommentSection from "../CommentSection/CommentSection";
function FeedPost(props) {
  //axios post Upvote
  const { onPostVote, isVoted } = usePostUpvote(`/posts/${props.id}/votes`);
  //onPostDowVote
  const { onDownvote, isDownVoted } = usePutDownVote(
    `/posts/${props.id}/votes`
  );
  useEffect(() => {
    props.getData();
  }, [isVoted]);
  useEffect(() => {
    props.getData();
  }, [isDownVoted]);

  <CommentSection
    username={props.username}
    title={props.title}
    body={props.body}
    votes={props.voteSum}
  />;

  return (
    <div>
      <PostContainer>
        <PostTopContainer onClick={() => props.onClick(props.id)}>
          <h4>{props.username}</h4>
          <p>{props.title}</p>
          <article>{props.body}</article>
        </PostTopContainer>
        <BottomPostContainer>
          <div>
            <img
              onClick={() => onPostVote(props.id)}
              src={thumbUp}
              alt="voto positivo"
            />
            <p>
              {props.voteSum}
              {/* {props.voteSum < 0 || !props.voteSum ?  0 : props.voteSum} */}
            </p>
            <img
              onClick={() => onDownvote(props.id)}
              src={thumbDown}
              alt="voto negativo"
            />
          </div>
          <BottomPostContainerComment onClick={() => props.onClick(props.id)}>
            <p>{props.commentCount ? props.commentCount : 0}</p>
            <p>Comentários</p>
          </BottomPostContainerComment>
        </BottomPostContainer>
      </PostContainer>
    </div>
  );
}
export default FeedPost;
