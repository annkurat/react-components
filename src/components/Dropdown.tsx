import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { PenIcon, CopyIcon } from "src/assets/images/icons.js";
import { Check, X } from "lucide-react";

interface DropdownInterface {
	placeholder?: string;
	label?: string;
	items: string[];
	state: string;
}

export function DropdownMenuDemo({
	placeholder,
	label,
	items,
	state,
}: DropdownInterface) {
	const [selectedItem, setSelectedItem] = useState("");
	const [isHovered, setIsHovered] = useState(false);
	const [currentState, setCurrentState] = useState(state);

	const handleItemClick = (item: string) => {
		setSelectedItem(item);
	};

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
			className="text-black w-full"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{currentState === "readonly" ? (
				<div className="flex">
					<p>{placeholder}</p>
					{isHovered && (
						<div className="flex ml-auto mt-1">
							<span onClick={handlePenClick}>
								<PenIcon />
							</span>
							<span>
								<CopyIcon />
							</span>
						</div>
					)}
				</div>
			) : (
				<div className="flex">
					<DropdownMenu>
						<DropdownMenuTrigger>
							{selectedItem || placeholder}
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{label ? (
								<>
									<DropdownMenuLabel>{label}</DropdownMenuLabel>
									<DropdownMenuSeparator />
								</>
							) : null}

							{items.map((item, index) => (
								<DropdownMenuItem
									key={index}
									onClick={() => handleItemClick(item)}>
									{item}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					{currentState === "edit" && (
						<div className="flex w-[45px] mt-3 ml-4">
							<Check
								className="text-green-secondary"
								onClick={handleCancelClick}
							/>
							<X className="text-gray-primary" onClick={handleCancelClick} />
						</div>
					)}
				</div>
			)}
		</div>
	);
}
