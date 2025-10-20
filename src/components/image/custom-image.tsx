import Image from 'next/image';
import React from 'react';

interface IProps {
  link: string | null;
  title?: string;
  className?: string;
}

const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export default function CustomImage(props: IProps) {
  const { className, link, title } = props;
  return (
    <Image
      src={`${IMAGE_URL}${link}`}
      alt={title ? title : ''}
      width={300}
      height={200}
      className={`rounded-md ${className}`}
      quality={50}
      loading="lazy"
    />
  );
}
