<script>
    export let field = {};
    const { id, title } = field;
    let response = "";
</script>

<!-- Question -->
<div>
    <label for="field-{id}" class="field-label">{title}</label>
    <input
        bind:value={response}
        type="text"
        id="question-0"
        autocomplete="off"
        class="input input__lg" />
    <button class="btn">OK</button>
</div>
