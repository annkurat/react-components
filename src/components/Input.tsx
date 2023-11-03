import { useState } from "react";
import { Input } from "src/components/ui/input";
import { DropdownMenuDemo } from "src/components/Dropdown";
import { Percent, Check, X, Pen, Clipboard } from "lucide-react";

interface InputInterface {
	state: string;
	label: string;
	type: string;
	placeholder?: string;
	items?: string[];
}

function TextInput({ placeholder }: { placeholder: string }) {
	return <Input type="text" placeholder={placeholder} />;
}

function DropdownInput({
	items,
	placeholder,
}: {
	items: string[];
	placeholder: string;
}) {
	return <DropdownMenuDemo items={items} placeholder={placeholder} />;
}

function UnitInput({ placeholder }: { placeholder: string }) {
	return <Input type="text" placeholder={placeholder} icon={<Percent />} />;
}

export function InputDemo({
	state,
	label,
	type,
	placeholder = "",
	items = [],
}: InputInterface) {
	const [isHovered, setIsHovered] = useState(false);
	const [currentState, setCurrentState] = useState(state);
	let inputComponent = null;

	switch (type) {
		case "text-field":
			inputComponent = <TextInput placeholder={placeholder} />;
			break;
		case "drop-down":
			inputComponent = (
				<DropdownInput items={items} placeholder={placeholder} />
			);
			break;
		case "unit":
			inputComponent = <UnitInput placeholder={placeholder} />;
			break;
	}

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handlePenClick = () => {
		if (currentState === "readonly") {
			setCurrentState("edit");
		}
	};

	const handleCheckClick = () => {
		if (currentState === "edit") {
			setCurrentState("readonly");
		}
	};

	return (
		<div
			className="flex items-center gap-x-3"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<p className="w-1/2 text-left">{label}</p>
			{currentState != "readonly" ? (
				inputComponent
			) : (
				<p className="w-full">{placeholder}</p>
			)}

			<div className="flex w-1/5">
				{currentState === "edit" && (
					<>
						<Check onClick={handleCheckClick} />
						<X />
					</>
				)}
				{currentState === "readonly" && isHovered && (
					<>
						<Pen size={17} onClick={handlePenClick} />
						<Clipboard size={17} />
					</>
				)}
			</div>
		</div>
	);
}
