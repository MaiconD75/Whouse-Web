import styled from 'styled-components';

export interface IListContainerProps {
  withoutRighPadding?: boolean;
}

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  flex: 1;
  padding: 0.8rem;
  padding-right: ${(props: IListContainerProps) =>
    props.withoutRighPadding ? 0 : null};

  @media (min-width: 700px) {
    padding: 1rem;
    padding-right: ${(props: IListContainerProps) =>
      props.withoutRighPadding ? 0 : null};
  }
`;
