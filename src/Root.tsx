import { Outlet } from "react-router-dom";

export function Root() {
	return (
		<div className="my-0 mx-auto flex max-w-7xl flex-col p-8">
			<Outlet />
		</div>
	);
}
