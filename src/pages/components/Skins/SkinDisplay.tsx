type props = {
	skin: WeaponSkin;
	weaponName: string;
	shopSkinIcon: string;
};

export const SkinDisplay = (props: props) => {
	// A variable that is true if the skin is the standard skin or the displayName is "Random Favorite Skin"

	const doNotDisplay =
		props.skin.displayName === `Standard ${props.weaponName}` ||
		props.skin.displayName === "Random Favorite Skin";

	if (doNotDisplay) {
		return null;
	}

	return (
		<div className="shadow-xl card bg-base-300 w-80">
			<figure className="bg-primary">
				{props.skin.displayIcon ? (
					<img
						className="object-contain h-40 w-80"
						src={props.skin.displayIcon}
						alt={props.skin.displayName}
					/>
				) : (
					<img
						src={props.shopSkinIcon}
						alt={props.skin.displayName}
						className="object-contain h-40 w-80 invert"
					/>
				)}
			</figure>
			<div className="items-center card-body">
				<h2 className="card-title">{props.skin.displayName}</h2>
			</div>
			<div className="m-3 card-actions">
				<button className="btn btn-primary">Select</button>
			</div>
		</div>
	);
};
