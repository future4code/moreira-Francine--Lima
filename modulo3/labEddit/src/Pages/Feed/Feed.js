import Header from "../../components/Header/Header";
import { useEffect } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  CommentBox,
  CommentTextBox,
  FeedContainer,
  PostListContainer,
} from "./style";
import FeedPost from "./FeedPosts";
import { useLogout } from "../../Hooks/useLogout";
import { useCreate } from "../../Hooks/useCreate";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";

function Feed(props) {
  useProtectedPage();
  const logout = useLogout();
  const { form, onChangeForm, clearForm } = useForm({
    title: "",
    body: "",
  });
  const { createPost, isCreated } = useCreate(form, "/posts", "Post");
  //Form onSubmit
  const onCreatePost = (e) => {
    e.preventDefault();
    clearForm();
  };

  //Navigation
  const navigate = useNavigate();
  const goToCommentSection = (id) => {
    navigate(`/comments/${id}`);
  };

  //map do get POSTS

  const listPosts = props.data?.map((post) => {
    return (
      <FeedPost
        key={post.id}
        username={post.username}
        title={post.title}
        body={post.body}
        commentCount={post.commentCount}
        userVote={post.userVote}
        voteSum={post.voteSum}
        id={post.id}
        getData={props.getData}
        onClick={goToCommentSection}
      />
    );
  });

  //use effect para renderizar mais uma vez ao criar post

  useEffect(() => {
    props.getData();
  }, [isCreated]);
  // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div>
        <Header />
        <FeedContainer>
          <h2>Feed</h2>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
          <CommentBox>
            <form onSubmit={onCreatePost}>
              <input
                type="text"
                name={"title"}
                value={form.title}
                placeholder="Título"
                onChange={onChangeForm}
              />
              <CommentTextBox
                value={form.body}
                name={"body"}
                placeholder="Escreva um Post"
                onChange={onChangeForm}
              />
              <button onClick={createPost}>Postar</button>
            </form>
          </CommentBox>
          <PostListContainer>{listPosts}</PostListContainer>
        </FeedContainer>
      </div>
    </div>
  );
}
export default Feed;
