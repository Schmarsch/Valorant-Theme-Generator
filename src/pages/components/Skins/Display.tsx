import { useState, useEffect } from "react";
import { SkinDisplay } from "./SkinDisplay";

type Props = {
	weaponUuid: string;
};

export const Display = (props: Props) => {
	const [weapon, setWeapon] = useState<Weapon>();
	const [skins, setSkins] = useState<WeaponSkin[]>();

	useEffect(() => {
		if (props.weaponUuid) {
			fetch(`https://valorant-api.com/v1/weapons/${props.weaponUuid}`)
				.then((response) => response.json())
				.then((data) => {
					setSkins(data.data.skins);
					setWeapon(data.data);
				});
		}
	}, [props.weaponUuid]);

	return (
		<div className="flex flex-row flex-wrap gap-5 mx-12 mt-5">
			{skins?.map((skin) => (
				<SkinDisplay
					skin={skin}
					weaponName={weapon?.displayName as string}
					shopSkinIcon={
						(weapon?.shopData.image as string) ??
						(weapon?.shopData.newImage as string) ??
						(weapon?.shopData.newImage2 as string) ??
						""
					}
					key={skin.uuid}
				/>
			))}
		</div>
	);
};
