import { JSX, useEffect, useState } from "react";
import { getStats } from "src/stats";
import IconTHM from "@icons/brand-tryhackme.svg?react";
import Icon from "@components/Icon";

type Stats = {
  username: string;
  topPercentage: number;
  completedRoomsNumber: number;
};

export default function THM(): JSX.Element {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    (async () => {
      setStats(await getStats());
    })();
  }, []);

  return (
    <div className="self-center md:self-start border-content border-4 bg-accent/80 flex items-center justify-center leading-tight">
      {stats ? (
        <div className="flex flex-row gap-4 p-3 text-content text-md h-22 aspect-[3/1]">
          {/* Text block */}
          <div className="flex flex-col justify-center flex-grow">
            <span className="font-semibold text-xl">@{stats.username}</span>
            <div>
              Top <span className="font-semibold">{stats.topPercentage}%</span>{" "}
              Globally
            </div>
            <div>
              Rooms:{" "}
              <span className="font-semibold">
                {stats.completedRoomsNumber} (~{(stats.completedRoomsNumber * 0.81391076115).toFixed(0)}h total)
              </span>
            </div>
          </div>
          {/* Icon */}
          <div className="self-center flex flex-col items-center">
            <Icon Svg={IconTHM} paintClassName="block text-content w-8 h-8" />
            <span className="text-[0.6rem] text-content mt-2 tracking-wide text-content/90">
              TryHackMe
            </span>
          </div>
        </div>
      ) : (
        <div className="text-content p-3">Loading…</div>
      )}
    </div>
  );
}
