import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  background: ${({ theme }) => theme.card.cardBody};
  border-radius: 5px;
  height: 100%;
  ${space}
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
