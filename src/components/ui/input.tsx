import * as React from "react";

import { cn } from "src/lib/utils";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { PenIcon, CopyIcon } from "src/assets/images/icons.js";
export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
	state: string;
	placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, placeholder, icon, state, ...props }, ref) => {
		const [isHovered, setIsHovered] = useState(false);
		const [currentState, setCurrentState] = useState(state);
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
				className="flex w-full gap-x-2"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				{currentState === "readonly" ? (
					<p className="text-black">
						{placeholder}
						{type === "unit" && "%"}
					</p>
				) : (
					<div className="relative w-full ">
						<input
							placeholder={placeholder}
							type={type}
							className={cn(
								"flex h-10 w-full border border-gray-dark text-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
								className
							)}
							ref={ref}
							{...props}
						/>
						{icon && (
							<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-black w-4">
								{icon}
							</div>
						)}
					</div>
				)}

				{currentState === "edit" && (
					<div className="flex w-[37px] my-auto">
						<Check
							className="text-green-secondary"
							onClick={handleCancelClick}
						/>
						<X className="text-gray-primary" onClick={handleCancelClick} />
					</div>
				)}
				{currentState === "readonly" && (
					<div className="flex w-[45px] my-auto ml-auto">
						{isHovered && (
							<>
								<span onClick={handlePenClick}>
									<PenIcon />
								</span>
								<span>
									<CopyIcon />
								</span>
							</>
						)}
					</div>
				)}
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
