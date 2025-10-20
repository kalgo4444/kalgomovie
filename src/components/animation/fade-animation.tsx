import { ReactNode } from 'react';
import { Fade, FadeProps } from 'react-awesome-reveal';

interface IProps {
  children: ReactNode;
  fade?: FadeProps;
}

export default function FadeAnimation(props: IProps) {
  const { children, fade } = props;
  return (
    <Fade duration={500} fraction={0} {...fade} triggerOnce>
      {children}
    </Fade>
  );
}
