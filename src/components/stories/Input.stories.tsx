import { InputDemo } from "src/components/Input";
import "src/assets/styles/globals.css";

export default {
	component: InputDemo,
	title: "Input",
	tags: ["autodocs"],
};

export const TextField = {
	args: {
		label: "Name",
		placeholder: "",
		type: "text-field",
		state: "new",
	},
};

export const DropdownInput = {
	args: {
		...TextField.args,
		type: "drop-down",
		state: "edit",
		items: [],
	},
};

export const UnitField = {
	args: {
		...TextField.args,
		type: "unit",
		state: "readonly",
	},
};
