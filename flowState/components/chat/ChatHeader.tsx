import { XStack, Button, H2 } from 'tamagui';
import { ProjectViewButton, TopicViewButton } from './HeaderButtons';

const Header = () => {
  return (
    <XStack 
      alignItems="center" 
      justifyContent="space-between" 
      padding="$4"
      width="100%"
    >
      <ProjectViewButton />
      <H2 textAlign="center" flex={1}>
        flowState
      </H2>
      <TopicViewButton />
    </XStack>
  );
};

export default Header;