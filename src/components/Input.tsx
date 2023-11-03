import { Input } from "src/components/ui/input";
import { DropdownMenuDemo } from "src/components/Dropdown";
import { Percent } from "lucide-react";

interface InputInterface {
	state: string;
	label: string;
	type: string;
	placeholder?: string;
	items?: string[];
}

function TextInput({
	placeholder,
	state,
}: {
	placeholder: string;
	state: string;
}) {
	return <Input type="text" state={state} placeholder={placeholder} />;
}

function DropdownInput({
	items,
	placeholder,
	state,
}: {
	items: string[];
	placeholder: string;
	state: string;
}) {
	return (
		<DropdownMenuDemo items={items} state={state} placeholder={placeholder} />
	);
}

function UnitInput({
	placeholder,
	state,
}: {
	placeholder: string;
	state: string;
}) {
	return (
		<Input
			type="text"
			placeholder={placeholder}
			state={state}
			icon={<Percent />}
		/>
	);
}

export function InputDemo({
	state,
	label,
	type,
	placeholder = "",
	items = [],
}: InputInterface) {
	let inputComponent = null;

	switch (type) {
		case "text-field":
			inputComponent = <TextInput placeholder={placeholder} state={state} />;
			break;
		case "drop-down":
			inputComponent = (
				<DropdownInput items={items} placeholder={placeholder} state={state} />
			);
			break;
		case "unit":
			inputComponent = <UnitInput placeholder={placeholder} state={state} />;
			break;
	}

	return (
		<div className="flex items-center gap-x-3 w-full">
			<p className="w-1/2 text-left text-black font-bold">{label}</p>
			{inputComponent}
		</div>
	);
}
