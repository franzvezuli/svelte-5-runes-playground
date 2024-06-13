<script lang="ts">
  import { itemArrayRef, itemObjectRef } from "$lib/Ref.svelte";
  import CustomButton from "$lib/CustomButton.svelte";

  // Try using these references instead of the direct imports. Doesn't work in multi-component mode.
  let item = itemObjectRef.value;
  let items = itemArrayRef.value;
</script>

<h2>Runes used in a multiple components</h2>

<div style="padding-top: 30px;">
  <CustomButton />
  <p style="padding-top: 20px;">Clicking the button should</p>
  <ul>
    <li>Update the single item to with an object of a random id</li>
    <li>Update the array items with an array of objects of each having a random id</li>
  </ul>
</div>

<div class="grid" style="padding-top: 30px;">
  <div>
    <h2>Single Item</h2>
    {itemObjectRef.value.id}
  </div>

  <div>
    <h2>Multiple Items</h2>
    {#each itemArrayRef.value as item}
      <p>{item.id}</p>
    {/each}
  </div>
</div>
