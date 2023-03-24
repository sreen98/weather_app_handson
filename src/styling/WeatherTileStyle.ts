import styled from "styled-components";

export const TileWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-flow: column nowrap;
`;

export const Card = styled.div`
  width: 35rem;
  margin-top: 1rem;
  align-self: center;
  padding: 5rem;
  border-radius: 0.5rem;
  position: relative;
  background: rgb(245, 242, 242);
  border: 0.1rem solid black;
`;

export const CardTitle = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.5rem;
`;
export const CardSubtitle = styled.div`
  position: absolute;
  left: 1rem;
  color: grey;
  margin-top: -0.5rem;
`;
export const StyledH1 = styled.h1`
  font-size: 5rem;
  margin: -0.5rem;
  margin-left: -7rem;
`;
export const IconWrapper = styled.img`
  width: 7rem;
  position: absolute;
  top: 3rem;
`;
export const Description = styled.span`
  position: absolute;
  left: 10px;
  font-size: 1.4rem;
`;
export const Details = styled.div`
  margin: 2rem 4rem 2rem 4rem;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-gap: 1rem;
`;

export const Main = styled.span`
  position: absolute;
  top: 8rem;
  left: 18rem;
  font-weight: 500;
  font-size: 1.2rem;
`;
export const Section = styled.div`
  justify-self: right;
  width: 20rem;
`;

export const StlyedH4 = styled.h4`
  text-align: left;
  margin-right: 2rem;
  font-size: 1rem;
  font-weight: 500;
`;
export const TableData = styled.td`
  border-bottom: 0.2rem dashed grey;
  padding: 1rem;
`;
