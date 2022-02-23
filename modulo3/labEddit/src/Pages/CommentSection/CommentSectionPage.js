import {
  PostContainer,
  BottomPostContainer,
  PostContainerReceivedComments,
  BottomPostContainerReceivedComments,
} from "./style";
import thumbUp from "../../assets/thumbs-up.png";
import thumbDown from "../../assets/thumbs-down.png";
import { usePutDownVote } from "../../Hooks/usePutDownVote";
import { usePostUpvote } from "../../Hooks/usePostUpvote";
import { useEffect } from "react";

function CommentSectionPage(props) {
  //axios post Upvote
  const { onPostVote, isVoted } = usePostUpvote(`/comments/${props.id}/votes`);
  //axios put downvote
  const { onDownvote, isDownVoted } = usePutDownVote(`/comments/${props.id}/votes`);
  useEffect(() => {
    props.getData();
  }, [isVoted]);
    useEffect(() => {
      props.getData();
    }, [isDownVoted]);
  // console.log(props.id)
  return (
    <div>
      <PostContainerReceivedComments>
        <h4>{props.username}</h4>
        <article>{props.body}</article>
        <BottomPostContainerReceivedComments>
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
        </BottomPostContainerReceivedComments>
      </PostContainerReceivedComments>
    </div>
  );
}
export default CommentSectionPage;
