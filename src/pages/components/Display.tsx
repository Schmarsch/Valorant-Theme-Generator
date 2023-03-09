import { useEffect, useState } from "react";

export default function Display() {
  const [weapons, setWeapons] = useState<Weapon[]>();

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((response) => response.json())
      .then((data) => {
        setWeapons(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-5 mx-12 mt-5">
        {weapons?.map((weapon) => (
          <WeaponDisplay {...weapon} />
        ))}
      </div>
    </>
  );
}

export const WeaponDisplay = (weapon: Weapon) => {
  return (
    <div className="shadow-xl card bg-base-300">
      <figure className="bg-primary">
        <img
          className="object-contain h-40 m-2 w-60"
          src={weapon.displayIcon}
          alt={weapon.displayName}
        />
      </figure>
      <div className="items-center card-body">
        <h2 className="card-title">{weapon.displayName}</h2>
      </div>
    </div>
  );
};
