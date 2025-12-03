import React from 'react'

export default function HeadingItem({ text, Icon = () => null }) {
  return (
    <div className="flex justify-center items-center gap-2.5">
      <Icon />
      <p>{text}</p>
    </div>
  );
}
