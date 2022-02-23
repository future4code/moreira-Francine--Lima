import { useChangePage } from "../../Hooks/useChangePage";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  PostContainer,
  BottomPostContainer,
  BottomPostContainerComment,
  CommentBox,
  CommentTextBox,
} from "./style";
import thumbUp from "../../assets/thumbs-up.png";
import thumbDown from "../../assets/thumbs-down.png";
import { useParams } from "react-router-dom";
import { useGet } from "../../Hooks/useGet";
import { useEffect } from "react";
import CommentSectionPage from "./CommentSectionPage";
import { useCreate } from "../../Hooks/useCreate";
import useForm from "../../Hooks/useForm";

function CommentSection(props) {


  useProtectedPage();
  //id do post
  const { id } = useParams();
  // console.log(id)
  const { goTo } = useChangePage("/feed");
  //create comment form
  const { form, onChangeForm, clearForm } = useForm({
    body: "",
  });
  const onComment = (e) => {
    e.preventDefault();
    clearForm();
  };
  //create comment
  const { createPost, isCreated } = useCreate(
    form,
    `/posts/${id}/comments`,
    "Comentário"
  );

  const { data, getData } = useGet(`/posts/${id}/comments/`);

  const listComments =
    data &&
    data.map((post) => {
      return (
        <CommentSectionPage
          key={post.id}
          username={post.username}
          title={post.title}
          body={post.body}
          commentCount={post.commentCount}
          userVote={post.userVote}
          voteSum={post.voteSum}
          id={post.id}
          getData={getData}
        />
      );
    });
  //map card post

  useEffect(() => {
    getData();
  }, [isCreated]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div>CommentSection</div>
      <button onClick={goTo}> Voltar ao Feed</button>
      <PostContainer>
        <h4>{props.username}</h4>
        <article>Texto post</article>
        <BottomPostContainer>
          <div>
            <img src={thumbUp} alt="voto positivo" />
            <p>0</p>
            <img src={thumbDown} alt="voto negativo" />
          </div>
          <BottomPostContainerComment>
            <p>0</p>
            <p>Comentários</p>
          </BottomPostContainerComment>
        </BottomPostContainer>
      </PostContainer>
      <CommentBox>
        <form onSubmit={onComment}>
          <CommentTextBox
            type="text"
            name={"body"}
            onChange={onChangeForm}
            value={form.body}
            requiredplaceholder="Escreva um comentário"
          />
          <button onClick={createPost}>Comentar</button>
        </form>
      </CommentBox>

      {listComments}
    </div>
  );
}
export default CommentSection;
