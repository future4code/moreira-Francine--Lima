import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  /* background-image: linear-gradient(0deg,rgb(0,0,0) 0%,rgba(255,255,255,0) 100%); */
  background-color: #ffeaa7;
  background-image: linear-gradient(315deg, #ffeaa7 0%, #000000 74%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const ContainerChatSection = styled.div`
  background-color: whitesmoke;
  border-radius: 12px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 600px;
`;
const Greetings = styled.p`
  color: rosybrown;
  margin: 5px;
`;

const ChatSection = styled.div`
  background-image: linear-gradient(315deg, #ffeaa7 0%, #000000 74%);
  align-self: center;
  width: 100%;
`;

const NameStyle = styled.input`
  padding: 6px;
  width: 100px;
  margin: 2px;
  border-radius: 5px;
`;
const MessageStyle = styled.input`
  padding: 6px;
  width: 400px;
  margin: 2px;
  border-radius: 5px;
`;
const ButtonSend = styled.button`
  border-radius: 5px;
  color: white;
  padding: 6px;
  background-color: black;
  margin: 2px;
`;

const MessagesSection = styled.div`
  background-color: burlywood;
  margin: 5px;
  height: fit-content;
`;

const CommentsPosts = styled.span`
  margin: 5px;
`;
export default class App extends React.Component {
  state = {
    userName: "",
    userComment: "",
    commentaryPost: [{ name: "", comment: "" }],
  };

  addComment = () => {
    const newComments = {
      name: this.state.userName,
      comment: this.state.userComment,
    };
    const newCommentary = [...this.state.commentaryPost, newComments];
    this.setState({ commentaryPost: newCommentary });
    //Ta dando um erro quando tento limpar o formulário
    this.setState({
      commentaryPost: newCommentary,
      userName: "",
      userComment: "",
    });
  };
  onChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };
  onChangeComentario = (event) => {
    this.setState({ userComment: event.target.value });
  };

  render() {
    console.log(this.state.commentaryPost);
    const newCommentsShow = this.state.commentaryPost.map((item, index) => {
      return (
        <MessagesSection key={index}>
          <CommentsPosts>{item.name}:</CommentsPosts>
          <CommentsPosts> {item.comment}</CommentsPosts>
        </MessagesSection>
      );
    });

    return (
      <div>
        <MainContainer>
          <ContainerChatSection>
            <Greetings>Welcome to my chat!!</Greetings>
            {newCommentsShow}
            <ChatSection>
              <NameStyle
                placeholder="name"
                value={this.state.userName}
                onChange={this.onChangeName}
              />
              <MessageStyle
                placeholder="message"
                value={this.state.userComment}
                onChange={this.onChangeComentario}
              />
              <ButtonSend onClick={this.addComment}>Enviar!</ButtonSend>
            </ChatSection>
          </ContainerChatSection>
        </MainContainer>
      </div>
    );
  }
}
