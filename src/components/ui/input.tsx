import * as React from "react";

import { cn } from "src/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, icon, ...props }, ref) => {
		return (
			<div className="relative w-full">
				<input
					type={type}
					className={cn(
						"flex h-10 w-full border border-input text-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
		);
	}
);
Input.displayName = "Input";

export { Input };
