import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export interface ITitle {
  title: string;
  label?: string;
  link?: string;
  className?: string;
  textCenter?: boolean;
}

export default function Title(props: ITitle) {
  const { title, label, link, className, textCenter } = props;
  const isSHowLink = label && link;
  return (
    <div
      className={`flex items-center py-3 ${isSHowLink && 'justify-between'} ${textCenter && 'text-center'}`}
    >
      <h2
        className={`text-base md:text-xl lg:text-2xl font-semibold ${className}`}
      >
        {title}
      </h2>
      {isSHowLink && (
        <Link
          href={link}
          className="flex items-center gap-x-2 text-foreground/50 hover:text-foreground duration-200 text-xs md:text-sm"
        >
          <span>{label}</span>
          <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}
