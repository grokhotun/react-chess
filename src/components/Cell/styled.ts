import styled from 'styled-components';

export const Cell = styled.div<{ black?: boolean; white?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, black }) => black && theme.colors.blackCell};
  background-color: ${({ theme, white }) => white && theme.colors.whiteCell};
`;
