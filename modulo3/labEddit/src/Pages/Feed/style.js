import styled from "styled-components";
import background from "../../assets/background.png";
export const FeedContainer = styled.div`
  font-family: monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    button {
      color: white;
      background-color: transparent;
      font-size: 16px;
      font-weight: 700;
      width: 100px;
      margin: 40px 60px;
      height: 40px;
      touch-action: manipulation;
      background-color: #f9d745;
      cursor: pointer;
      border: 5px dotted #59d48f;
      color: #05396b;
      :hover {
        background-color: white;
        cursor: pointer;
        border: 5px dotted #05396b;
        color: #59d48f;
      }
    }
  }
  h2 {
    background-color: #f9d745;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 30px;
    :hover {
      color: #05396b;
    }
  }
`;
export const CommentBox = styled.div`
  display: flex;
  width: 222px;
  height: 200px;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  input {
    font-size: 16px;
    font-family: monospace;
    font-weight: bold;
    height: 15px;
    border-radius: 5px;
    outline: none;
    width: 212px;
    background-color: white;
  }
  button {
    color: white;
    background-color: transparent;
    font-size: 16px;
    font-weight: 700;
    width: 100px;
    margin: 30px 60px;
    height: 40px;
    touch-action: manipulation;
    background-color: #f9d745;
    cursor: pointer;
    border: 5px dotted #59d48f;
    color: #05396b;
    :hover {
      background-color: white;
      cursor: pointer;
      border: 5px dotted #05396b;
      color: #59d48f;
    }
  }
`;
export const CommentTextBox = styled.textarea`
  width: 218px;
  height: 150px;
  resize: none;
  border: none;
  overflow: auto;
  outline: none;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  background: -webkit-linear-gradient(
    left,
    rgba(196, 222, 138, 1) 0%,
    rgba(196, 222, 138, 1) 12.5%,
    rgba(245, 253, 212, 1) 12.5%,
    rgba(245, 253, 212, 1) 25%,
    rgba(255, 208, 132, 1) 25%,
    rgba(255, 208, 132, 1) 37.5%,
    rgba(242, 122, 107, 1) 37.5%,
    rgba(242, 122, 107, 1) 50%,
    rgba(223, 157, 185, 1) 50%,
    rgba(223, 157, 185, 1) 62.5%,
    rgba(192, 156, 221, 1) 62.5%,
    rgba(192, 156, 221, 1) 75%,
    rgba(95, 156, 217, 1) 75%,
    rgba(95, 156, 217, 1) 87.5%,
    rgba(94, 190, 227, 1) 87.5%,
    rgba(94, 190, 227, 1) 87.5%,
    rgba(94, 190, 227, 1) 100%
  );
  //Styling a scrollbar
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    cursor: pointer;
  }

  /* side track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* thumb */
  ::-webkit-scrollbar-thumb {
    background: #db74ff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #f9d745;
  }
`;
export const PostListContainer = styled.div`
  margin-top: 100px;
`;
//Feed Post component
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 280px;
  margin-top: 40px;
  /* background-image: url(${background}); */
  background-color: #f9d745;
  /* border: 3px dotted #f9d745; */
  border: 5px dotted #59d48f;
  cursor: pointer;
  article {
    height: 164px;
  }
  h4 {
    text-align: center;
  }
`;
export const PostTopContainer = styled.div`
  width: 300px;
  height: 200px;
`;
export const BottomPostContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  justify-content: space-between;
  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  p {
    margin: 0;

    text-align: center;
  }
`;
export const BottomPostContainerComment = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 6px;
  }
`;
