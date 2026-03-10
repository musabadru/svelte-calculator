<script>
  import { evaluate, fraction } from 'mathjs'
  import Button from "./Button.svelte"

  let numberInput = $state('')
  let cursorPosition = $state(0)

  let total = $derived.by(() => {
    try {
      return numberInput ? evaluate(numberInput) : 0
    } catch {
      return 0
    }
  })

  function addToInput(value) {
    numberInput += value
  }

  function equal() {
    numberInput = total.toString()
  }

  function fractional() {
    try {
      return fraction(numberInput)
    } catch {
      return numberInput
    }
  }

  function clearInput() {
    numberInput = ""
  }

  function del() {
    numberInput = numberInput.slice(0, -1)
  }

  function handleInput(event) {
    cursorPosition = event.target.selectionStart
  }
</script>

<div class="display-bezel">
  <div class="display-panel">
    <div class="display-content">
      <input 
        id="arithmetic" 
        type="text" 
        autocomplete="off" 
        oninput={handleInput}
        bind:value={numberInput} 
        class="input-field"
      />
      <output name="result" for="arithmetic" class="output-field">{total}</output>
    </div>
  </div>
</div>

<div class="numpad-container">
  <!-- Row 1: Function Buttons -->
  <Button class="btn-function" on:click={() => {}}>OFF</Button>
  <Button class="btn-function">M+</Button>
  <Button class="btn-function">M-</Button>
  <Button class="btn-function">MR</Button>

  <!-- Row 2: First number row -->
  <Button class="btn-function">MC</Button>
  <Button class="btn-number" on:click={() => addToInput('7')}>7</Button>
  <Button class="btn-number" on:click={() => addToInput('8')}>8</Button>
  <Button class="btn-number" on:click={() => addToInput('9')}>9</Button>
  <Button class="btn-operator" on:click={() => addToInput('/')}>&divide;</Button>

  <!-- Row 3: Second number row -->
  <Button class="btn-function">GT</Button>
  <Button class="btn-number" on:click={() => addToInput('4')}>4</Button>
  <Button class="btn-number" on:click={() => addToInput('5')}>5</Button>
  <Button class="btn-number" on:click={() => addToInput('6')}>6</Button>
  <Button class="btn-operator" on:click={() => addToInput('*')}>&times;</Button>

  <!-- Row 4: Third number row -->
  <Button class="btn-function" on:click={() => addToInput('%')}>%</Button>
  <Button class="btn-number" on:click={() => addToInput('1')}>1</Button>
  <Button class="btn-number" on:click={() => addToInput('2')}>2</Button>
  <Button class="btn-number" on:click={() => addToInput('3')}>3</Button>
  <Button class="btn-operator" on:click={() => addToInput(' - ')}>&minus;</Button>

  <!-- Row 5: Last number row -->
  <Button class="btn-function" on:click={() => del()}>DEL</Button>
  <Button class="btn-number long" on:click={() => addToInput('0')}>0</Button>
  <Button class="btn-number" on:click={() => addToInput('.')}>&sdot;</Button>
  <Button class="btn-operator" on:click={() => addToInput('+')}>+</Button>

  <!-- Row 6: Equals -->
  <Button class="btn-equals wide" on:click={() => equal()}>&equals;</Button>
</div>

<style>
  .display-bezel {
    background: linear-gradient(145deg, #8b7d6b, #6b6357);
    border: 2px solid #3a3530;
    border-radius: 0.8rem;
    padding: 0.8rem;
    margin-bottom: 1.4rem;
    box-shadow:
      inset 0 2px 4px rgba(0, 0, 0, 0.4),
      inset 0 -2px 4px rgba(255, 255, 255, 0.1);
  }

  .display-panel {
    background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
    border-radius: 0.4rem;
    padding: 0.6rem;
    box-shadow: 
      inset 0 1px 3px rgba(0, 0, 0, 0.9),
      0 0 10px rgba(12, 255, 0, 0.15);
  }

  .display-content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    background: #0f1510;
    border-radius: 0.2rem;
    padding: 0.5rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.8);
  }

  .input-field {
    background: transparent;
    border: none;
    outline: none;
    font-size: clamp(1rem, 2vw, 1.4rem);
    font-family: 'Courier New', monospace;
    color: var(--casio-display-text);
    text-align: right;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-shadow: 0 0 4px rgba(12, 255, 0, 0.5);
    min-height: 1.8rem;
  }

  .output-field {
    all: unset;
    text-align: right;
    font-size: clamp(1.4rem, 4vw, 2.2rem);
    font-weight: bold;
    color: var(--casio-display-text);
    font-family: 'Courier New', monospace;
    letter-spacing: 0.1em;
    text-shadow: 0 0 6px rgba(12, 255, 0, 0.6);
    min-height: 2rem;
  }

  .numpad-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--gap);
  }

  @media (max-width: 380px) {
    .display-bezel {
      padding: 0.6rem;
      margin-bottom: 1rem;
    }

    .display-content {
      gap: 0.2rem;
      padding: 0.4rem;
    }

    .numpad-container {
      gap: 0.5rem;
    }
  }

  :global(.btn-number) {
    background-color: var(--btn-number-bg);
    color: var(--text-dark);
    font-weight: bold;
    transition: all 100ms;
  }

  :global(.btn-number:hover) {
    background-color: var(--btn-number-hover);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  :global(.btn-number:active) {
    background-color: var(--btn-number-active);
    transform: translateY(1px);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  :global(.btn-number.long) {
    grid-column: span 2;
  }

  :global(.btn-operator) {
    background-color: var(--btn-operator-bg);
    color: var(--text-dark);
    font-weight: bold;
    font-size: 1.8rem;
    transition: all 100ms;
  }

  :global(.btn-operator:hover) {
    background-color: var(--btn-operator-hover);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  :global(.btn-operator:active) {
    background-color: var(--btn-operator-active);
    transform: translateY(1px);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  :global(.btn-function) {
    background-color: var(--btn-function-bg);
    color: var(--text-light);
    font-size: 0.9rem;
    font-weight: bold;
    transition: all 100ms;
  }

  :global(.btn-function:hover) {
    background-color: var(--btn-function-hover);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  :global(.btn-function:active) {
    background-color: var(--btn-function-active);
    transform: translateY(1px);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  :global(.btn-equals) {
    background-color: var(--btn-equals-bg);
    color: var(--text-light);
    font-weight: bold;
    font-size: 1.8rem;
    transition: all 100ms;
    grid-column: span 2;
  }

  :global(.btn-equals:hover) {
    background-color: var(--btn-equals-hover);
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }

  :global(.btn-equals:active) {
    background-color: var(--btn-equals-active);
    transform: translateY(1px);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  :global(.btn-wide) {
    grid-column: span 2;
  }
</style>
