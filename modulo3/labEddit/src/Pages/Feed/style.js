import styled from "styled-components";
export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CommentBox = styled.div`
  display: flex;
  width: 222px;
  height: 200px;
  margin-top: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid sandybrown;
  margin: 0 auto;
  input {
    align-self: center;
    width: 212px;
    height: 15px;
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
    background: gray;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b20000;
  }
`;

//Feed Post component
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 3px dotted black;
  cursor: pointer;
  article {
    height: 164px;
  }
  h4 {
    text-align: center;
  }
`;
export const PostTopContainer =styled.div`
width: 300px;
height: 200px;
`
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
