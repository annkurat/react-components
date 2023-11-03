import { useState } from "react";
import { Switch } from "src/components/ui/switch";

export function SwitchDemo() {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<div className="flex items-center space-x-2">
			<Switch
				id="airplane-mode"
				checked={isChecked}
				onCheckedChange={() => setIsChecked(!isChecked)}
			/>
		</div>
	);
}
