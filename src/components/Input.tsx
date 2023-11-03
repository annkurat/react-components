import { useState } from "react";
import { Input } from "src/components/ui/input";
import { DropdownMenuDemo } from "src/components/Dropdown";
import { Percent, Check, X } from "lucide-react";
import { PenIcon, CopyIcon } from "src/assets/images/icons.js";

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

	const handleCancelClick = () => {
		if (currentState === "edit") {
			setCurrentState("readonly");
		}
	};

	return (
		<div
			className="flex items-center gap-x-3"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<p className="w-1/2 text-left text-black font-bold">{label}</p>
			{currentState !== "readonly" ? (
				inputComponent
			) : (
				<p className="w-full text-black font-light">{placeholder}</p>
			)}

			<div className="flex w-1/5">
				{currentState === "edit" && (
					<>
						<Check
							className="text-green-secondary"
							onClick={handleCancelClick}
						/>
						<X className="text-gray-primary" onClick={handleCancelClick} />
					</>
				)}
				{currentState === "readonly" && isHovered && (
					<>
						<span className="mr-2" onClick={handlePenClick}>
							<PenIcon />
						</span>
						<span>
							<CopyIcon />
						</span>
					</>
				)}
			</div>
		</div>
	);
}
