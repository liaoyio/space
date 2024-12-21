export type ArrowCardProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
};

const ArrowCard: React.FC<ArrowCardProps> = ({ title, description }) => {
  return (
    <div className="group relative flex flex-nowrap rounded-lg border border-black/15 p-4 pr-10 transition-[background-color] duration-300 ease-in-out hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5">
      <div className="flex flex-1 flex-col truncate">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute right-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          className="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
        />
        <polyline
          points="12 5 19 12 12 19"
          className="-translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
        />
      </svg>
    </div>
  );
};

export default ArrowCard;
