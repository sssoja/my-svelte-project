<script>
	// Typeform API info
	// const baseUrl = "https://api.typeform.com/";
	// const formsUrl = `${baseUrl}/forms`;
	// const typeformKey = "9LjUeHuHFymitNgwYFwg5CcH7GYqeW9y5e6qi4yYRdnu";
	// 	const urlToFetch = `${baseUrl}${formsUrl}`;

	// import Fields from "./components/Fields.svelte";
	import MultipleChoice from "./components/fields/MultipleChoice.svelte";
	import ShortText from "./components/fields/ShortText.svelte";

	const form = [
		{
			id: "DjlXLX2s",
			type: "quiz",
			title: "Virtual Lab Survey",
			workspace: { href: "https://api.typeform.com/workspaces/Ghm6de" },
			theme: { href: "https://api.typeform.com/themes/qHWOQ7" },
			settings: {
				language: "en",
				progress_bar: "proportion",
				meta: { allow_indexing: false },
				hide_navigation: false,
				is_public: true,
				is_trial: false,
				show_progress_bar: true,
				show_typeform_branding: true,
				are_uploads_public: false,
				show_time_to_complete: true,
				pro_subdomain_enabled: false,
				capabilities: {
					e2e_encryption: { enabled: false, modifiable: false },
				},
			},
			thankyou_screens: [
				{
					id: "oBB8D27w4zil",
					ref: "01FKK5KXV1AT4AG5XFCZYNGTTN",
					title: "",
					properties: {
						show_button: true,
						share_icons: true,
						button_mode: "reload",
						button_text: "reload",
					},
				},
				{
					id: "DefaultTyScreen",
					ref: "default_tys",
					title:
						"Thanks for completing this typeform\nNow *create your own* — it's free, easy, \u0026 beautiful",
					properties: {
						show_button: true,
						share_icons: false,
						button_mode: "redirect",
						button_text: "Create a *typeform*",
						redirect_url:
							"https://www.typeform.com/explore/?utm_campaign=DjlXLX2s\u0026utm_source=typeform.com\u0026utm_medium=typeform\u0026utm_content=typeform-thankyoubutton\u0026utm_term=EN",
					},
					attachment: {
						type: "image",
						href: "https://images.typeform.com/images/2dpnUBBkz2VN",
					},
				},
			],
			fields: [
				{
					id: "5Qw3haKmUlKG",
					title: "Hello, what's your name?",
					ref: "01FKK5KXT7SG9C4TK19WF6R1ET",
					properties: {},
					validations: { required: false },
					type: "short_text",
					attachment: {
						type: "image",
						href: "https://images.typeform.com/images/WMALzu59xbXQ",
					},
					layout: {
						type: "split",
						attachment: {
							type: "image",
							href:
								"https://images.typeform.com/images/WMALzu59xbXQ",
						},
					},
				},
				{
					id: "8ryQFvgTH3gu",
					title: "What's your age?",
					ref: "710fbd33-3362-4cfe-b1c0-cf08702bf9d8",
					properties: {},
					validations: { required: false },
					type: "short_text",
				},
				{
					id: "0gQBt2ecOSRK",
					title:
						"Nice to meet you, {{field:01FKK5KXT7SG9C4TK19WF6R1ET}}, how is your day going?",
					ref: "01FKK5KXV1TQ7E3QMRFPW7A383",
					properties: {
						randomize: false,
						allow_multiple_selection: true,
						allow_other_choice: false,
						vertical_alignment: true,
						choices: [
							{
								id: "ZkM1QMXrIHBn",
								ref: "01FKK5KXV1J3EBHA78322MWQMG",
								label: "Terrific!",
							},
							{
								id: "rwFklpTij36Y",
								ref: "01FKK5KXV12BWYAMGXJZ5Q0T52",
								label: "Not so well...",
							},
						],
					},
					validations: { required: false },
					type: "multiple_choice",
				},
			],
			_links: { display: "https://qaexgf20gqj.typeform.com/to/DjlXLX2s" },
		},
	];

	const { fields } = form[0];
	$: console.log(fields);
	const totalQuestions = fields.length;
</script>

<div class="surveyapp stack-large">
	<form>
		<div class="stack-small">
			{#each fields as field, index (field.id)}
				<h2 class="label-wrapper">
					<label for="question-0">Question {index + 1}</label>
				</h2>
				<!-- Fields -->
				{#if field.type === 'short_text'}
					<ShortText {field} />
				{:else if (fields.type = 'multiple_choice')}
					<MultipleChoice />
				{:else}
					<p>You've reached the end of the survey!</p>
				{/if}
			{/each}
		</div>
	</form>
	<h2 id="heading">Number of questions: {totalQuestions}</h2>
</div>
