<script>
    import MultipleChoice from "../components/fields/MultipleChoice.svelte";
    import ShortText from "../components/fields/ShortText.svelte";
    import formData from "../formData.js";

    const { fields } = formData;
    const { length } = fields;
    const firstField = fields.filter((field) => fields.indexOf(field) === 0);
</script>

<form>
    <div class="stack-small">
        <h2 class="label-wrapper">
            <label for="question-0">Question 1 out of {length}</label>
        </h2>

        <!-- First field -->
        {#each firstField as field, index (field.id)}
            {#if field.type === 'short_text'}
                <ShortText {field} {index} />
            {:else if (field.type = 'multiple_choice')}
                <MultipleChoice {field} {index} />
            {:else}
                <p>You've reached the end of the survey!</p>
            {/if}
        {/each}
    </div>
</form>
