import "./App.css";
import LoginStatus from "./state-management/auth/LoginStatus";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import {TaskProvider} from "./state-management/tasks/index";
import Counter from "./state-management/counter/Counter";

function App() {
	return (
		<TaskProvider>

				<NavBar></NavBar>
				<LoginStatus />
				<HomePage></HomePage>
				<Counter></Counter>
		</TaskProvider>
	);
}

export default App;
