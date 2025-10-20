import React from 'react';

export default function CardItemLoading() {
  const arr = Array.from({ length: 20 }).fill('');
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5">
      {arr.map((_, id: number) => (
        <div
          key={id}
          className="w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[50vh] loading-style"
        ></div>
      ))}
    </div>
  );
}
