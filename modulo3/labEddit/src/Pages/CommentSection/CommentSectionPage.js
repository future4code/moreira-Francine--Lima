import {
  PostContainerReceivedComments,
  BottomPostContainerReceivedComments,
} from "./style";
import thumbUp from "../../assets/thumbs-up.png";
import thumbDown from "../../assets/thumbs-down.png";
import { usePutDownVote } from "../../Hooks/usePutDownVote";
import { usePostUpvote } from "../../Hooks/usePostUpvote";
import { useEffect, useState } from "react";
import { useDeleteVote } from "../../Hooks/useDeleteVote";
function CommentSectionPage(props) {
  const [userVote, setUserVote] = useState(props.userVote);
  //axios post Upvote
  const { onPostVote } = usePostUpvote(`/comments/${props.id}/votes`);
  //axios put downvote
  const { onDownvote} = usePutDownVote(
    `/comments/${props.id}/votes`
  );
  const deleteVote = useDeleteVote(`/comments/${props.id}/votes`);
  //User change vote or delete
  const onDownVotes = (id) => {
    if (userVote === -1) {
      deleteVote(id);
      setUserVote(0);
    } else {
      onDownvote(id);
      setUserVote(-1);
    }
  };
  const onUpVotes = (id) => {
    if (userVote === 1) {
      deleteVote(id);
      setUserVote(0);
    } else {
      onPostVote(id);
      setUserVote(1);
    }
  };
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
