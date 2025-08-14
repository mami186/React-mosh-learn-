import "./App.css";
import LoginStatus from "./state-management/auth/LoginStatus";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import {TaskProvider} from "./state-management/tasks/index";
import {LoginProvider} from "./state-management/auth/index";

function App() {
	return (
		<TaskProvider>
			<LoginProvider>

				<NavBar></NavBar>
				<LoginStatus />
				<HomePage></HomePage>

			</LoginProvider>
		</TaskProvider>
	);
}

export default App;
