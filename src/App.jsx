import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import { Shop } from "@/pages/Shop"
import { About } from "@/pages/About"
import { Blogs } from "@/pages/Blogs"
import { NotFound } from "@/pages/NotFound"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/about" element={<About />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App