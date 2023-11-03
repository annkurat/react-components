import { useState } from "react";
import { Switch } from "src/components/ui/switch";
import { Label } from "src/components/ui/label";

export function SwitchDemo() {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<div className="flex items-center space-x-2">
			<Label className="w-1/3 text-black" htmlFor="airplane-mode">
				Subscribed
			</Label>
			<Switch
				id="airplane-mode"
				className="mr-auto"
				checked={isChecked}
				onCheckedChange={() => setIsChecked(!isChecked)}
			/>
		</div>
	);
}
