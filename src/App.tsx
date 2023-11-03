import logo from "src/assets/images/logo.svg";
import "src/assets/styles/app.css";
import { SwitchDemo } from "src/components/Switch";
import { InputDemo } from "src/components/Input";

function App() {
	const genders = ["Male", "Female", "Other"];

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>React Components</p>
			</header>
			<main className="flex flex-col gap-4 text-left 2xl:w-1/6 xl:w-1/2 lg:w-1/2 w-full px-4">
				<InputDemo
					placeholder="Enter full name"
					type="text-field"
					label="Name"
					state="new"
				/>
				<InputDemo
					placeholder="Select gender"
					type="drop-down"
					items={genders}
					label="Gender"
					state="new"
				/>
				<InputDemo
					placeholder="100"
					type="unit"
					label="Availability"
					state="readonly"
				/>
				<InputDemo
					placeholder="Frontend developer"
					type="drop-down"
					label="Job"
					state="readonly"
				/>
				<SwitchDemo />
			</main>
		</div>
	);
}

export default App;
