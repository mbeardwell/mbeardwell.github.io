import { useEffect, useState } from "react";

export function useTheme() {
	const [theme, setTheme] = useState<"light" | "dark">(
		() =>
			(document.documentElement.getAttribute("data-theme") as
				| "light"
				| "dark") ?? "light",
	);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
	return { theme, toggle };
}
