import logo from "src/assets/images/logo.svg";
import "src/assets/styles/app.css";
import { SwitchDemo } from "src/components/Switch";
import { InputDemo } from "src/components/Input";

function App() {
	const genders = ["Male", "Female", "Other"];
	const cities = ["Estonia", "Poland"];

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>React Components</p>
			</header>
			<main className="flex flex-col gap-4 text-left 2xl:w-1/6 xl:w-1/3 lg:w-1/2 w-full px-4">
				<InputDemo
					placeholder="Enter your name"
					type="text-field"
					label="Name"
					state="new"
				/>
				<InputDemo
					placeholder="Choose your gender"
					type="drop-down"
					items={genders}
					label="Gender"
					state="new"
				/>
				<InputDemo
					placeholder="Some value"
					type="unit"
					label="How much?"
					state="readonly"
				/>
				<InputDemo
					placeholder="Seacrh city"
					type="drop-down"
					label="City"
					items={cities}
					state="readonly"
				/>
				<SwitchDemo />
			</main>
		</div>
	);
}

export default App;
