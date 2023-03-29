import { useRouter } from "next/router";

export const WeaponDisplay = (weapon: Weapon) => {
	const router = useRouter();

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
				{weapon.displayName !== "Melee" ? (
					<p className="card-subtitle text-primary">
						{weapon.shopData.cost === 0 ? (
							"Free"
						) : (
							<span className="text-primary">
								{weapon.shopData.cost} Credits
							</span>
						)}
					</p>
				) : (
					<p className="card-subtitle text-primary">Free</p>
				)}
			</div>
			<div className="m-3 card-actions">
				<button
					className="btn btn-primary"
					onClick={() => {
						router.push(`/skins?uuid=${weapon.uuid}`);
					}}
				>
					Select
				</button>
			</div>
		</div>
	);
};
