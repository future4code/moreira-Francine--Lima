import { useChangePage } from "../../Hooks/useChangePage";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { ButtonFeed, CommentBox, CommentTextBox } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useGet } from "../../Hooks/useGet";
import { useEffect, useState } from "react";
import CommentSectionPage from "./CommentSectionPage";
import { useCreate } from "../../Hooks/useCreate";
import useForm from "../../Hooks/useForm";
import PostInfoCard from "./PostInfoCard";

function CommentSection(props) {
  useProtectedPage();
  //id do post
  const { id } = useParams();
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

  const listFiltered =
    // resumo de tudo num filter sem return em uma linha
    props.posts?.filter((post) => id === post.id);

  //map card post
  //map sem return!
  const postInfo = listFiltered.map((post) => (
    <PostInfoCard
      key={post.id}
      usernamePost={post.username}
      titlePost={post.title}
      bodyPost={post.body}
      commentCountPost={post.commentCount}
      userVotePost={post.userVote}
      voteSumPost={post.voteSum}
      idPost={post.id}
      getDataPosts={props.getDataPost}
    />
  ));

  //map comments
  const listComments = data?.map((post) => {
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
  useEffect(() => {
    getData();
  }, [isCreated, []]);

  return (
    <>
      <Header />
      <ButtonFeed onClick={goTo}>Feed</ButtonFeed>
      {postInfo}
      <CommentBox>
        <form onSubmit={onComment}>
          <CommentTextBox
            placeholder="Escreva um comentário"
            type="text"
            name={"body"}
            onChange={onChangeForm}
            value={form.body}
            requiredplaceholder="Escreva um comentário"
          />
          <button type={"submit"} onClick={createPost}>
            Comentar
          </button>
        </form>
      </CommentBox>
      {listComments}
    </>
  );
}
export default CommentSection;
