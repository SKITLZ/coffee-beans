<script lang="ts">
  import { blobToBase64 } from '$lib/components/helpers';
  import type { Sort } from '$lib/components/types';

  enum PLACEHOLDER_IMAGE {
    JPG = '/images/coffee-placeholder.jpg',
    WEBP = '/images/coffee-placeholder.webp',
    AVIF = '/images/coffee-placeholder.avif',
  }

  export let origin: string;
  export let blendName: string;
  export let variety: string;
  export let intensifier: string;
  export let sorts: Sort[] = [];
  export let img: Blob | undefined = undefined;

  let imgUrl: string = '';
  $: if (img) {
    blobToBase64(img).then((url) => {
      imgUrl = url;
    });
  }
</script>

<div class="coffee-bean">
  <div class="top">
    {#if !img}
      <picture>
        <source srcset={PLACEHOLDER_IMAGE.AVIF} />
        <source srcset={PLACEHOLDER_IMAGE.WEBP} />
        <img class="img" src={PLACEHOLDER_IMAGE.JPG} alt="A cup of coffee" />
      </picture>
    {:else}
      <img class="img" src={imgUrl} alt="" />
    {/if}
    <span class="intensifier">{intensifier}</span>
  </div>
  <div class="main">
    <p class="origin">{origin}</p>
    <p class="blend-name">{blendName}</p>
    <p class="variety">{variety}</p>
    <ul class="sort-list">
      {#each sorts as { label, color }}
        <li class="sort">
          <span class="sort__bg" style="background-color: {color}" />
          {label}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="less">
  @borderRadius: 4px;

  .coffee-bean {
    position: relative;
    overflow: hidden;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: @borderRadius;
  }

  .top {
    position: relative;
    width: 100%;
    padding-bottom: 70%;
  }

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .intensifier {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-block;
    padding: 6px 12px;
    color: #000;
    background-color: #f7c19b;
    border-radius: @borderRadius;
  }

  .main {
    padding: 16px;
  }

  .origin {
    margin: 0;
    color: #888;
  }

  .blend-name {
    margin: 12px 0 0;
    font-size: 18px;
    font-weight: 600;
  }

  .variety {
    margin: 8px 0 0;
  }

  .sort-list {
    overflow: auto;
    display: block;
    list-style: none;
    margin: 12px 0 0;
    padding: 0;
    white-space: nowrap;
  }

  .sort {
    position: relative;
    display: inline-block;
    min-width: 50px;
    padding: 6px 12px;
    text-align: center;
    z-index: 1;

    &:not(:last-of-type) {
      margin-right: 10px;
    }

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: #dbc1ac;
      border-radius: @borderRadius;
      opacity: 0.5;
      z-index: -1;
    }
  }
</style>
