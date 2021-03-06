import styled from 'styled-components';
import {
  borderRadius,
  colorPalette,
  getSpacing,
  oldGetSpacing,
  typography,
  zIndex,
} from 'stylesheet';
import { ActivitySearchFilter as RawActivitySearchFilter } from 'components/ActivitySearchFilter';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
HomeContainer.displayName = 'HomeContainer';

export const TopContainer = styled.div`
  text-align: center;
  height: ${oldGetSpacing(150)};
  padding-top: ${oldGetSpacing(80)};
  padding-left: ${oldGetSpacing(20)};
  padding-right: ${oldGetSpacing(20)};
  background-color: ${colorPalette.primary3};
  background-image: url('/images/home-background.jpg');
  background-size: cover;
  background-position: center;
`;
TopContainer.displayName = 'TopContainer';

export const WelcomeText = styled.h1`
  ${typography.h1}
  font-size: 44px;
  color: ${colorPalette.white};
`;

export const Logo = styled.img`
  width: ${oldGetSpacing(32)};
  margin-bottom: ${oldGetSpacing(4)};
`;
Logo.displayName = 'Logo';

export const Title = styled.h1`
  ${typography.h1}
  margin-bottom: ${oldGetSpacing(12)};
`;
Title.displayName = 'Title';

export const HowTo = styled.div`
  padding: ${oldGetSpacing(6)};
  width: 100%;
  max-width: ${oldGetSpacing(120)};
  box-sizing: border-box;
  border-radius: ${borderRadius.large};
`;
HowTo.displayName = 'HowTo';

export const DescriptionList = styled.ul`
  list-style: disc;
  margin-left: ${oldGetSpacing(4)};
`;
DescriptionList.displayName = 'DescriptionList';

export const DescriptionLine = styled.li`
  ${typography.light}
  padding-left: ${oldGetSpacing(1)};
  margin-bottom: ${oldGetSpacing(1)};
`;
DescriptionLine.displayName = 'DescriptionLine';

export const Code = styled.code`
  ${typography.code}
  padding: ${oldGetSpacing(1)};
`;
Code.displayName = 'Code';

export const ListMapContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: space-between;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
ListMapContainer.displayName = 'ListMapContainer';

export const ListContainer = styled.div`
  flex: 1;
`;
ListContainer.displayName = 'ListContainer';

export const MapContainer = styled.div`
  flex: 1;
  z-index: ${zIndex.content};

  @media (max-width: 768px) {
    height: 500px;
    width: 100%;
  }
`;
MapContainer.displayName = 'MapContainer';

export const ActivitySearchFilter = styled(RawActivitySearchFilter)`
  align-self: center;
  position: relative;

  /* Approximately half of the activity search filter height */
  top: -${getSpacing(15)};
`;
