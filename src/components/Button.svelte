<script>
  let { isdisabled = false, children, onclick = () => {} } = $props()
</script>

<button type="button" disabled={isdisabled} aria-label="button" {onclick}>
  {#if children}
    {@render children()}
  {/if}
</button>

<style lang="scss">
  button {
    all: unset;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: 600;
    width: var(--width);
    height: var(--height);
    text-align: center;
    border-radius: 0.6rem;
    transition: all 100ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    user-select: none;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
    }

    &:active:not(:disabled) {
      transform: translateY(0px);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
</style>
