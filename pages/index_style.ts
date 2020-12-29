import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  transition: all 0.3s ease;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Glitch = styled.h1`
  color: ${({ theme }) => theme.colors.secondaryColor};
  position: relative;
  margin: 0 auto;
  text-align: center;
  font-size: 3em;
  user-select: none;
  @keyframes noise-anim {
    0% {
      clip-path: inset(10% 0 66% 0);
    }
    5% {
      clip-path: inset(29% 0 23% 0);
    }
    10% {
      clip-path: inset(51% 0 4% 0);
    }
    15% {
      clip-path: inset(46% 0 24% 0);
    }
    20% {
      clip-path: inset(41% 0 15% 0);
    }
    25% {
      clip-path: inset(26% 0 3% 0);
    }
    30% {
      clip-path: inset(96% 0 5% 0);
    }
    35% {
      clip-path: inset(77% 0 20% 0);
    }
    40% {
      clip-path: inset(7% 0 31% 0);
    }
    45% {
      clip-path: inset(46% 0 39% 0);
    }
    50% {
      clip-path: inset(63% 0 35% 0);
    }
    55% {
      clip-path: inset(9% 0 67% 0);
    }
    60% {
      clip-path: inset(84% 0 10% 0);
    }
    65% {
      clip-path: inset(47% 0 38% 0);
    }
    70% {
      clip-path: inset(97% 0 4% 0);
    }
    75% {
      clip-path: inset(68% 0 19% 0);
    }
    80% {
      clip-path: inset(53% 0 40% 0);
    }
    85% {
      clip-path: inset(5% 0 69% 0);
    }
    90% {
      clip-path: inset(37% 0 35% 0);
    }
    95% {
      clip-path: inset(25% 0 34% 0);
    }
    100% {
      clip-path: inset(52% 0 22% 0);
    }
  }
  &::after {
    content: "${(props: { text: string }) => `${props.text}`}";
    position: absolute;
    left: 0px;
    text-shadow: -1px 0 red;
    top: 0;
    color: ${({ theme }) => theme.colors.secondaryColor};
    background: ${({ theme }) => theme.colors.backgroundColor};
    overflow: hidden;
    animation: noise-anim 2s infinite linear alternate-reverse;
  }

  @keyframes noise-anim-2 {
    0% {
      clip-path: inset(37% 0 6% 0);
    }
    5% {
      clip-path: inset(33% 0 22% 0);
    }
    10% {
      clip-path: inset(19% 0 23% 0);
    }
    15% {
      clip-path: inset(29% 0 23% 0);
    }
    20% {
      clip-path: inset(85% 0 11% 0);
    }
    25% {
      clip-path: inset(37% 0 52% 0);
    }
    30% {
      clip-path: inset(31% 0 49% 0);
    }
    35% {
      clip-path: inset(41% 0 13% 0);
    }
    40% {
      clip-path: inset(54% 0 11% 0);
    }
    45% {
      clip-path: inset(30% 0 13% 0);
    }
    50% {
      clip-path: inset(3% 0 17% 0);
    }
    55% {
      clip-path: inset(61% 0 39% 0);
    }
    60% {
      clip-path: inset(89% 0 7% 0);
    }
    65% {
      clip-path: inset(89% 0 2% 0);
    }
    70% {
      clip-path: inset(49% 0 4% 0);
    }
    75% {
      clip-path: inset(40% 0 26% 0);
    }
    80% {
      clip-path: inset(21% 0 7% 0);
    }
    85% {
      clip-path: inset(4% 0 96% 0);
    }
    90% {
      clip-path: inset(72% 0 3% 0);
    }
    95% {
      clip-path: inset(28% 0 38% 0);
    }
    100% {
      clip-path: inset(34% 0 67% 0);
    }
  }
  &::before {
    content: "${(props: { text: string }) => `${props.text}`}";
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: ${({ theme }) => theme.colors.secondaryColor};
    background: ${({ theme }) => theme.colors.backgroundColor};
    overflow: hidden;
    animation: noise-anim-2 15s infinite linear alternate-reverse;
  }
`;

export { Container, Center, Glitch };
