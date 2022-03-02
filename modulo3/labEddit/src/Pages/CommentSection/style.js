import styled from "styled-components";

export const CommentBox = styled.div`
  display: flex;
  width: 300px;
  height: 150px;
  margin-top: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid sandybrown;
  margin: 0 auto;
`;
export const CommentTextBox = styled.textarea`
  width: 290px;
  height: 100px;
  resize: none;
  border: none;
  overflow: auto;
  outline: none;
  border: 1px dotted blue;
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
export const ImgHeader = styled.img`
  cursor: pointer;
  width: 80px;
  margin: 20px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 3px dotted black;
  margin: 0 auto;
  article {
    height: 164px;
  }
  h4 {
    text-align: center;
  }
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
  border: 1px solid blue;
  p {
    margin-left: 6px;
  }
`;
export const BottomPostContainerReceivedComments = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  border: 1px solid black;
  img {
    width: 14px;
    height: 12px;
    cursor: pointer;
    margin: 0;
  }
  p {
    margin: 0;
    text-align: center;
  }
`;

export const PostContainerReceivedComments = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  border: 3px dotted black;
  margin: 0 auto;
  article {
    height: 150px;
    width: 300px;
    border: 1px solid black;
  }
  h4 {
    text-align: center;
    margin: 2px;
  }
`;
