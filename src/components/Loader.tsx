import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  onFinish: () => void;
}

const loaderOpacity = keyframes`
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const loader = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(360deg) scale(15);
  }
`;

const loaderAfter = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(15);
  }
`;

const AminWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 9999;
`;

const CirAlign = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  inset: 0;
  display: grid;
  place-items: center;
  background: black;
  opacity: 1;
  animation: ${loaderOpacity} 1.5s linear forwards;
`;

const RevCircle = styled.div`
  width: clamp(150px, 8vw, 200px);
  height: clamp(150px, 8vw, 200px);
  strokeWidth: 2px; /* Example usage */
  position: relative;
  animation: ${loader} 5.5s linear forwards;

  &::after {
    content: "";
    width: clamp(100px, 5vw, 125px);
    height: clamp(100px, 5vw, 125px);
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 50%;
    background-color: white;
    animation: ${loaderAfter} 1.5s linear forwards;
  }
`;

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 1000); // Loader's animation duration

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AminWrapper>
      <CirAlign>
        <RevCircle />
        
      </CirAlign>
    </AminWrapper>
  );
};

export default Loader;
