<script>
	// Typeform API info
	// const baseUrl = "https://api.typeform.com/";
	// const formsUrl = `${baseUrl}/forms`;
	// 	const urlToFetch = `${baseUrl}${formsUrl}`;

	import MultipleChoice from "./components/fields/MultipleChoice.svelte";
	import ShortText from "./components/fields/ShortText.svelte";
	import formData from "./formData";

	const { fields } = formData;
	const { length } = fields;
</script>

<div class="surveyapp stack-large">
	<form>
		<div class="stack-small">
			{#each fields as field, index (field.id)}
				<h2 class="label-wrapper">
					<label for="question-0">Question
						{index + 1}
						out of
						{length}</label>
				</h2>
				<!-- Fields -->
				{#if field.type === 'short_text'}
					<ShortText {field} />
				{:else if (field.type = 'multiple_choice')}
					<MultipleChoice {field} />
				{:else}
					<p>You've reached the end of the survey!</p>
				{/if}
			{/each}
		</div>
	</form>
</div>
