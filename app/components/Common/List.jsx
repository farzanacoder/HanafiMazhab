import React from "react";

export default function List({ list , Icon = () => null}) {
  return (
    <div className="flex gap-1.5">
      <li className="hover:text-amber-500 cursor-pointer duration-500">{list}</li>
      <Icon />
    </div>
  );
}
