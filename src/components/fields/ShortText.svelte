<script>
    export let field = {};
    let response = "";
</script>

<!-- Question -->
<div>
    <h3 class="field-text">{field.title}</h3>
    <input
        bind:value={response}
        type="text"
        id="question-0"
        autocomplete="off"
        class="input input__lg" />
    <button class="btn">Submit</button>
</div>
