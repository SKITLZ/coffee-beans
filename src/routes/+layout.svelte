<script>
  import PageHeader from './PageHeader.svelte';
  import PageFooter from './PageFooter.svelte';
  import '../app.css';
</script>

<PageHeader />
<main class="page-main">
  <div>
    <slot />
  </div>
</main>
<PageFooter />
