"use client";

import { GroupType } from "@/types";

interface GroupTabsProps {
  groups: { id: GroupType; name: string }[];
  activeGroup: GroupType;
  onGroupChange: (group: GroupType) => void;
}

export default function GroupTabs({
  groups,
  activeGroup,
  onGroupChange,
}: GroupTabsProps) {
  return (
    <div className="flex border-b-2 border-border">
      {groups.map((group) => (
        <button
          key={group.id}
          onClick={() => onGroupChange(group.id)}
          className={`
            relative flex-1 px-6 py-4 text-base font-medium tracking-wide
            transition-colors duration-200 cursor-pointer
            ${
              activeGroup === group.id
                ? "text-volt"
                : "text-text-secondary hover:text-white"
            }
          `}
        >
          {group.name}
          {activeGroup === group.id && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-volt" />
          )}
        </button>
      ))}
    </div>
  );
}
