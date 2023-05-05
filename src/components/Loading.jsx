import React from "react";
import styled, { keyframes } from "styled-components";



const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.5);
  border-top-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s ease-in-out infinite;
`;

const Loading = () => {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  };

export default Loading;