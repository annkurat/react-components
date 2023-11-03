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
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>{placeholder}</DropdownMenuTrigger>
			<DropdownMenuContent>
				{label ? (
					<>
						<DropdownMenuLabel>{label}</DropdownMenuLabel>{" "}
						<DropdownMenuSeparator />
					</>
				) : null}

				{items.map((item, index) => (
					<DropdownMenuItem key={index}>{item}</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
