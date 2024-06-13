<script lang="ts">
  import { itemArrayRef, itemObjectRef } from "$lib/Ref.svelte";

  let item = itemObjectRef.value;
  let items = itemArrayRef.value;

  function update() {
    item = { id: self.crypto.randomUUID()};
    items = [
      { id: self.crypto.randomUUID()},
      { id: self.crypto.randomUUID()},
      { id: self.crypto.randomUUID()},
      { id: self.crypto.randomUUID()},
      { id: self.crypto.randomUUID()},
    ]
  }
</script>

<h2>Runes used in a single component</h2>

<div style="padding-top: 30px;">
  <button onclick={update}>Update Items</button>
  <p style="padding-top: 20px;">Clicking the button should</p>
  <ul>
    <li>Update the single item to with an object of a random id</li>
    <li>Update the array items with an array of objects of each having a random id</li>
  </ul>
</div>

<div class="grid" style="padding-top: 30px;">
  <div>
    <h2>Single Item</h2>
    {item.id}
  </div>

  <div>
    <h2>Multiple Items</h2>
    {#each items as item}
      <p>{item.id}</p>
    {/each}
  </div>
</div>
