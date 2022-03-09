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
import { useDeleteVote } from "../../Hooks/useDeleteVote";
import { useChangeVotes } from "../../Hooks/useChangeVotes";
function FeedPost(props) {
  //axios post Upvote
  const { onPostVote } = usePostUpvote(`/posts/${props.id}/votes`);
  //onPostDowVote
  const { onDownvote } = usePutDownVote(`/posts/${props.id}/votes`);
  // on delete vote
  const deleteVote = useDeleteVote(`/posts/${props.id}/votes`);
  //User change vote or delete
  const { onDownVotes, onUpVotes } = useChangeVotes(
    deleteVote,
    onDownvote,
    onPostVote
  );

  useEffect(() => {
    props.getData();
  }, [onDownVotes, onUpVotes, deleteVote]);

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
              onClick={() => onUpVotes(props.id)}
              src={thumbUp}
              alt="voto positivo"
            />
            <p>{props.voteSum}</p>
            <img
              onClick={() => onDownVotes(props.id)}
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
