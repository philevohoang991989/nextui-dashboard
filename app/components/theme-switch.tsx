import { FC, useState, useEffect } from "react";
import { Switch, SwitchProps, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";



export const ThemeSwitch: FC = () => {
	const [isMounted, setIsMounted] = useState(false);

	const { theme, setTheme } = useTheme();

	const onChange = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	useEffect(() => {
		setIsMounted(true);
	}, [isMounted]);

	// Prevent Hydration Mismatch
	if (!isMounted) return <div className="w-6 h-6" />;

	return (
		<Switch
			defaultSelected
			size="lg"
			color="success"
			startContent={<SunIcon />}
			endContent={<MoonIcon />}
			onChange={onChange}
		>
			Dark mode
		</Switch>
	);
};
