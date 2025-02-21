import { useEffect, useRef } from 'react';
import { ScrollView, YStack } from 'tamagui';
import UserMessage from './UserMessage';
import AIMessage from './AIMessage';

const messages = [
  { id: 1, type: 'user', text: 'Hey, can you summarize our last discussion?', attachments: [] },
  { id: 2, type: 'ai', text: 'Sure! Here’s a quick summary of what we talked about...', attachments: [] },
  { id: 3, type: 'user', text: 'Also, here’s the document.', attachments: [{ type: 'document', name: 'notes.pdf' }] },
  { id: 4, type: 'ai', text: 'Got it! Here’s my analysis:', attachments: [] },
];

const ChatContent = () => {
  const scrollViewRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <ScrollView ref={scrollViewRef} flex={1}>
      <YStack>
        {messages.map((msg) =>
          msg.type === 'user' ? (
            <UserMessage key={msg.id} text={msg.text} attachments={msg.attachments} />
          ) : (
            <AIMessage key={msg.id} text={msg.text} attachments={msg.attachments} />
          )
        )}
      </YStack>
    </ScrollView>
  );
};

export default ChatContent;