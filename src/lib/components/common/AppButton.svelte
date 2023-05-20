<script lang="ts">
  type ButtonType = 'button' | 'reset' | 'submit' | null | undefined;

  export let ariaLabel: string | undefined = undefined;
  export let disabled = false;
  export let type: ButtonType = 'button';
</script>

<button
  class="app-button"
  aria-label={ariaLabel}
  {type}
  {disabled}
  on:click
>
  <slot />
</button>

<style lang="less">
  .app-button {
    position: relative;
    overflow: hidden;
    padding: 12px 30px;
    font-weight: 600;
    background-color: #f2f2f2;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 200ms ease;

    &:disabled {
      cursor: default;
    }

    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: #e6e6e6;
      }
    }

    &:not(:disabled):active {
      -webkit-tap-highlight-color: transparent;
      background-color: #ccc;
    }
  }
</style>
