<script lang="ts">
  import { onMount } from 'svelte';
  import CoffeeBean from '$lib/components/CoffeeBean.svelte';
  import AppButton from '$lib/components/common/AppButton.svelte';
  import { fetchCoffee, fetchImg } from '$lib/api/coffee';
  import { prepareCoffee } from '$lib/components/helpers';
  import type { Coffee } from '$lib/components/types';

  const LOAD_INTERVAL_MS = 30000;
  let coffeeList: Coffee[] = [];
  let isLoading = false;
  let timeout: ReturnType<typeof setInterval>;

  onMount(() => {
    getCoffee();
  });

  const getCoffee = async (): Promise<void> => {
    if (isLoading) {
      return;
    }
    isLoading = true;
    clearInterval(timeout);
    try {
      const [res, img] = await Promise.all([fetchCoffee(), fetchImg()]);
      const coffee = prepareCoffee(res, img);
      coffeeList = [...coffeeList, coffee];
    } catch (error) {
      console.error;
    } finally {
      isLoading = false;
      timeout = setInterval(getCoffee, LOAD_INTERVAL_MS);
    }
  };
</script>

<div class="page main-container">
  <ul class="coffee-list">
    {#each coffeeList as coffee (coffee.id)}
      <li class="coffee-bean">
        <CoffeeBean {...coffee} />
      </li>
    {/each}
  </ul>
  <div class="button-container">
    <AppButton ariaLabel="Load more coffee" disabled={isLoading} on:click={getCoffee}>Load more</AppButton>
  </div>
</div>

<style lang="less">
  .page {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .coffee-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .coffee-bean:not(:first-of-type) {
    margin-top: 16px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin: 20px 0 0;
  }
</style>
