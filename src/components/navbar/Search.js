import { useState } from "react";
import { useDispatch } from "react-redux";
import { searched } from "../../features/filters/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

export default function Search() {
	// const { search } = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	const [input, setInput] = useState();
	const match = useMatch("/");
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searched(input));

		// if user not in homepage redirect to homepage
		if (!match) {
			navigate("/");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				className="outline-none border-none mr-2"
				type="search"
				name="search"
				placeholder="Search"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</form>
	);
}
