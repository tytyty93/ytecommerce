import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";

export default function Rating({ stars }) {
  return (
    <div className="flex items-center -ml-1">
      {Array.from({ length: 4 }).map((_, index) => (
        <StarIcon
          key={index}
          className="w-6 h-6 flex-shrink-0 text-yellow-400"
        />
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <StarOutlineIcon
          key={index}
          className="w-6 h-6 flex-shrink-0 text-yellow-400"
        />
      ))}
    </div>
  );
}
