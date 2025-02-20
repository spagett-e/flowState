import { YStack, ZStack, ScrollView } from 'tamagui';
import ChatHeader from '../components/chat/ChatHeader';
import ChatContent from '../components/chat/ChatContent';
import ChatInput from '../components/chat/ChatInput';
import ChatButtons from '../components/chat/ChatButtons.tsx';

const Chat = () => {
  const headerHeight = 80; // Adjust based on your design

  return (
    <YStack flex={1}>
      <ZStack flex={1}>
        <ChatHeader style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1 }} />
        <ChatContent style={{ paddingTop: headerHeight }} />
      </ZStack>
      <ChatInput />
      <ChatButtons />
    </YStack>
  );
};

export default Chat;