import styled from "styled-components";
import Alert from "react-bootstrap/Alert";

export const WeatherWrapper = styled.div`
  margin: 2rem 0;
  border: 0.2rem dashed grey;
  border-radius: 1rem;
  width: max-content;
  padding: 0px 1rem 1rem 1rem;
`;
export const WeatherTitle = styled.div`
  font-size: 4rem;
`;
export const StyledForm = styled.form`
  margin-top: 2rem;
`;
export const StyledInput = styled.input`
  padding: 1rem;
  border: none;
  border-bottom: 0.2rem dashed rgb(2, 57, 88);
  margin-right: 2rem;
`;
export const StyledAlert = styled(Alert)`
  margin-top: 1rem;
`;
