import { useEffect, useState } from "react";
import { WeaponDisplay } from "./WeaponDisplay";

export default function Display() {
	const [weapons, setWeapons] = useState<Weapon[]>();

	useEffect(() => {
		fetch("https://valorant-api.com/v1/weapons")
			.then((response) => response.json())
			.then((data) => {
				setWeapons(data.data);
			});
	}, []);

	return (
		<>
			<div className="flex flex-row flex-wrap gap-5 mx-12 mt-5">
				{weapons?.map((weapon) => (
					<WeaponDisplay {...weapon} key={weapon.uuid} />
				))}
			</div>
		</>
	);
}

