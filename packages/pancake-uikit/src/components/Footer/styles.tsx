import styled from "styled-components";
import { lightColors } from "../../theme/colors";
import { Box, Flex } from "../Box";

export const StyledFooter = styled(Flex)`
  background: ${lightColors.backgroundAlt};
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${lightColors.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${lightColors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

// export const StyledSocialLinks = styled(SocialLinks)`
//   border-bottom: 1px solid ${lightColors.cardBorder};
// `;
