import { XStack, Button } from 'tamagui';
import { Image, Camera, File, Settings } from '@tamagui/lucide-icons';

const ChatButtons = () => {
  return (
    <XStack>
      <Button circular icon={Image} size="$3" />
      <Button circular icon={Camera} size="$3" />
      <Button circular icon={File} size="$3" />
      <Button circular icon={Settings} size="$3" />
    </XStack>
  );
};

export default ChatButtons;