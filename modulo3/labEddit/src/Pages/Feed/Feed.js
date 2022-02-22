import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { CommentBox, CommentTextBox, FeedContainer } from "./style";
import { useChangePage } from "../../Hooks/useChangePage";
import FeedPost from "./FeedPosts";
import { useGetPosts } from "../../Hooks/useGetPosts";
import { useLogout } from "../../Hooks/useLogout";
import { useCreatePosts } from "../../Hooks/useCreatePost";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BaseUrl, headerPosts, headers } from "../../constants/constants";
function Feed() {
  // const [postId, setPostId] = useState("");
  const [isVoted, setIsVoted] = useState(false);
  // const [upVote,setUpvote]=useState()
  //Hooks
  useProtectedPage();
  const { goTo } = useChangePage("/comments/:id");
  const logout = useLogout();
  const { posts, getPosts } = useGetPosts();
  const { form, onChangeForm, clearForm } = useForm({
    title: "",
    body: "",
  });
  const { createPost, isCreated } = useCreatePosts(form);

  //Form onSubmit
  const onCreatePost = (e) => {
    e.preventDefault();
    clearForm();
  };
  //use effect para renderizar mais uma vez ao criar post
  useEffect(() => {
    getPosts();
  }, [isCreated]);
  useEffect(() => {
    getPosts();
  }, [isVoted]);
  //axios post vote
  const onPostUpvote = (id) => {
    const body = {
      direction: +1,
    };
    axios
      .post(`${BaseUrl}/posts/${id}/votes`, body, headerPosts)
      .then((res) => {
        console.log("yeah!", res);
        setIsVoted(!isVoted);
      })
      .catch((err) => {
        console.log("ixe", err.response);
      });
  };
    const onPostDownVote = (id) => {
      const body = {
        direction: -1,
      };
      axios
        .post(`${BaseUrl}/posts/${id}/votes`, body, headerPosts)
        .then((res) => {
          console.log("yeah!", res);
          setIsVoted(!isVoted);
        })
        .catch((err) => {
          console.log("ixe", err.response);
        });
    };
  //map do get POSTS

  const listPosts =
    posts &&
    posts.map((post) => {
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
          onPostUpvote={onPostUpvote}
          onPostDownVote={onPostDownVote}
        />
      );
    });

  return (
    <div>
      <div>
        <Header />
        <FeedContainer>
          <h2>Feed</h2>
          <div>
            <button onClick={goTo}>Ver Comentários</button>
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
              <button onClick={createPost}>Criar post</button>
            </form>
          </CommentBox>
          <div>{listPosts}</div>
        </FeedContainer>
      </div>
    </div>
  );
}
export default Feed;
