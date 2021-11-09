<script>
	// Typeform API info
	// const baseUrl = "https://api.typeform.com/";
	// const formsUrl = `${baseUrl}/forms`;
	// 	const urlToFetch = `${baseUrl}${formsUrl}`;

	import { Router, Route } from "svelte-routing";
	import Home from "./routes/home.svelte";
	import Field from "./routes/field.svelte";

	export let url = "";
</script>

<div class="surveyapp stack-large">
	<Router {url}>
		<div>
			<Route path="/">
				<Home />
			</Route>
			<Route path="field" component={Field} />
		</div>
	</Router>
</div>
