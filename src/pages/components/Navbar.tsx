import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const Navbar = () => {
	const session = useSession();

	const router = useRouter();

	return (
		<div className="sticky top-0 z-10 w-full p-2 bg-gradient-to-b from-base-100 to-transparent">
			<div className="flex flex-row justify-between p-3 shadow-xl rounded-xl bg-base-100 bg-opacity-20 backdrop-blur-sm">
				<div className="flex flex-row">
					<button
						className="text-4xl font-bold border-none btn btn-ghost bg-base-100"
						onClick={() => {
							router.push("/");
						}}
					>
						Skin Themes
					</button>
					<div className="divider divider-horizontal" />
				</div>
				<div>
					{session.status === "authenticated" ? (
						<button className="h-full rounded-full" onClick={() => signOut()}>
							<img
								src={session.data.user.image as string}
								alt={session.data.user.name as string}
								className="w-8 h-8 rounded-full"
							/>
						</button>
					) : (
						<button className="btn-primary btn" onClick={() => signIn()}>
							Sign In
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
