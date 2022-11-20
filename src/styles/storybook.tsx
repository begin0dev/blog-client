import { styled } from '@stitches/react';
import { PropsWithChildren } from 'react';

const StorybookGroup = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StorybookTitle>Case</StorybookTitle>
      <StorybookGroupList>{children}</StorybookGroupList>
      <StorybookTitle>Control</StorybookTitle>
    </>
  );
};

export default StorybookGroup;

const StorybookTitle = styled('h2', {
  marginBottom: 8,
});

const StorybookGroupList = styled('div', {
  display: 'flex',
  gap: 8,
  marginBottom: 24,
});
