import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";

interface DropdownInterface {
	placeholder?: string;
	label?: string;
	items: string[];
}

export function DropdownMenuDemo({
	placeholder,
	label,
	items,
}: DropdownInterface) {
	const [selectedItem, setSelectedItem] = useState("");

	const handleItemClick = (item: string) => {
		setSelectedItem(item);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>{selectedItem || placeholder}</DropdownMenuTrigger>
			<DropdownMenuContent>
				{label ? (
					<>
						<DropdownMenuLabel>{label}</DropdownMenuLabel>
						<DropdownMenuSeparator />
					</>
				) : null}

				{items.map((item, index) => (
					<DropdownMenuItem key={index} onClick={() => handleItemClick(item)}>
						{item}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
