import { useChangePage } from "../../Hooks/useChangePage";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  PostContainer,
  BottomPostContainer,
  BottomPostContainerComment,
  CommentBox,
  CommentTextBox,
  PostContainerReceivedComments,
  BottomPostContainerReceivedComments,
} from "./style";
import thumbUp from "../../img/thumbs-up.png";
import thumbDown from "../../img/thumbs-down.png";
function CommentSection() {
  useProtectedPage();
  const { goTo } = useChangePage("/feed");

  return (
    <div>
      <Header />
      <div> CommentSection</div>
      <button onClick={goTo}> Voltar ao Feed</button>
      <PostContainer>
        <h4>Nome usuario</h4>
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
        <form>
          <CommentTextBox placeholder="Escreva um comentário" />
          <button>Comentar</button>
        </form>
      </CommentBox>
      {/* SEPARAR EM OUTRO COMPONENTE */}
      <PostContainerReceivedComments>
        <h4>Nome usuario</h4>
        <article>comentario</article>
        <BottomPostContainerReceivedComments>
          <div>
            <img src={thumbUp} alt="voto positivo" />
            <p>0</p>
            <img src={thumbDown} alt="voto negativo" />
          </div>
        </BottomPostContainerReceivedComments>
      </PostContainerReceivedComments>
    </div>
  );
}
export default CommentSection;
