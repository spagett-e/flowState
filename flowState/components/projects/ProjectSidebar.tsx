import { useState } from 'react';
import { Sheet, YStack, Button, Text } from 'tamagui';

const projects = [
  { id: 1, name: 'AI Chat App' },
  { id: 2, name: 'FlowState Concept' },
  { id: 3, name: 'BitPawn' },
];

export const ProjectSidebar = ({ open, setOpen, onSelectProject }) => {
  return (
    <Sheet
      modal
      open={open}
      onOpenChange={setOpen}
      dismissOnSnapToBottom
      side="left"
      snapPoints={[100]}
    >
      <Sheet.Frame width={240} backgroundColor="$background" padding="$4">
        <Sheet.Handle />
        <YStack gap="$3">
          {projects.map((project) => (
            <Button key={project.id} onPress={() => onSelectProject(project)}>
              <Text>{project.name}</Text>
            </Button>
          ))}
        </YStack>
      </Sheet.Frame>
    </Sheet>
  );
};