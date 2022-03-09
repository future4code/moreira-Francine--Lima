import {
  PostContainerReceivedComments,
  BottomPostContainerReceivedComments,
  PostContainer,
} from "./style";
import thumbUp from "../../assets/thumbs-up.png";
import thumbDown from "../../assets/thumbs-down.png";
import { usePutDownVote } from "../../Hooks/usePutDownVote";
import { usePostUpvote } from "../../Hooks/usePostUpvote";
import { useEffect, useState } from "react";
import { useDeleteVote } from "../../Hooks/useDeleteVote";
import { useChangeVotes } from "../../Hooks/useChangeVotes";
function CommentSectionPage(props) {
  //axios post Upvote
  const { onPostVote } = usePostUpvote(`/comments/${props.id}/votes`);
  //axios put downvote
  const { onDownvote } = usePutDownVote(`/comments/${props.id}/votes`);
  const deleteVote = useDeleteVote(`/comments/${props.id}/votes`);
  //User change vote or delete
  const { onDownVotes, onUpVotes } = useChangeVotes(
    deleteVote,
    onDownvote,
    onPostVote
  );
  useEffect(() => {
    props.getData();
  }, [onDownVotes, onUpVotes]);

  return (
    <div>
      <PostContainerReceivedComments>
        <h4>{props.username}</h4>
        <article>{props.body}</article>
        <BottomPostContainerReceivedComments>
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
        </BottomPostContainerReceivedComments>
      </PostContainerReceivedComments>
    </div>
  );
}
export default CommentSectionPage;
