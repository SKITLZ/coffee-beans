<div class="coffee-bean-skeleton">
  <div class="top">
    <span class="intensifier" />
  </div>
  <div class="main">
    <p class="origin" />
    <p class="blend-name" />
    <p class="variety" />
    <ul class="sort-list">
      {#each [1, 2, 3, 4, 5] as li}
        <li class="sort" />
      {/each}
    </ul>
  </div>
</div>

<style lang="less">
  @borderRadius: 4px;
  @lineHeight: 1.15;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 80%);
    }
  }

  @keyframes skeleton-image-loading {
    0% {
      background-color: hsl(200, 20%, 85%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  .intensifier,
  .origin,
  .blend-name,
  .variety,
  .sort {
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: @borderRadius;
  }

  .coffee-bean-skeleton {
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
    animation: skeleton-image-loading 1s linear infinite alternate;
  }

  .intensifier {
    position: absolute;
    top: 10px;
    right: 10px;
    height: calc((16px * @lineHeight) + 12px); // 12px top and bottom paddings
    width: 60px;
  }

  .main {
    padding: 16px;
  }

  .origin {
    height: calc(16px * @lineHeight);
    width: 130px;
    margin: 0;
  }

  .blend-name {
    height: calc(18px * @lineHeight);
    width: 180px;
    margin: 12px 0 0;
  }

  .variety {
    height: calc(16px * @lineHeight);
    width: 150px;
    margin: 8px 0 0;
  }

  .sort-list {
    overflow: auto;
    display: block;
    list-style: none;
    margin: 12px 0 0;
    padding: 0;
    font-size: 0;
    white-space: nowrap;
  }

  .sort {
    display: inline-block;
    height: calc((16px * @lineHeight) + 12px); // 12px top and bottom paddings
    width: 80px;

    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
</style>
