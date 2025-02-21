import { YStack, ZStack } from 'tamagui';
import ChatHeader from '../components/chat/ChatHeader';
import ChatContent from '../components/chat/ChatContent';
import ChatInput from '../components/chat/ChatInput';
import ChatButtons from '../components/chat/ChatButtons';

export default function Index() {

  return (
    <YStack flex={1}>
      <ZStack flex={1}>
        <ChatHeader />
        <ChatContent />
      </ZStack>
      <ChatInput />
      <ChatButtons />
    </YStack>
  );
};