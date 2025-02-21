import { XStack, Button, H2 } from 'tamagui';
import { ProjectViewButton, TopicViewButton } from './HeaderButtons';

const Header = () => {
  return (
    <XStack>
      <ProjectViewButton />
      <H2 flex={1}>
        flowState
      </H2>
      <TopicViewButton />
    </XStack>
  );
};

export default Header;