import { useState, useRef } from 'react';
import { TextArea, XStack, YStack, Button, Input, useTheme } from 'tamagui';
import { Mic, Send } from '@tamagui/lucide-icons';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const theme = useTheme();

  const handleSend = () => {
    if (!message.trim()) return;
    console.log('Sending:', message);
    setMessage(''); // Clear input after sending
  };

  return (
    <YStack>
      <XStack>
        {/* Auto-growing input field */}
        <TextArea
          ref={inputRef}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          maxHeight={150} // Limit max height
          flex={1}
        />

        {/* Record button when empty, send button when there's text */}
        <Button
          icon={message.trim() ? Send : Mic}
          size="$3"
          onPress={handleSend}
        />
      </XStack>
    </YStack>
  );
};

export default ChatInput;