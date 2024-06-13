<script lang="ts">
  import { itemArrayRef, itemObjectRef } from "$lib/Ref.svelte";

  function update() {
    itemObjectRef.value = { id: self.crypto.randomUUID()};
    itemArrayRef.value = [
      { id: self.crypto.randomUUID()},
      { id: self.crypto.randomUUID()},
      { id: self.crypto.randomUUID()},
      { id: self.crypto.randomUUID()},
      { id: self.crypto.randomUUID()},
    ]
  }
</script>

<button onclick={update}>Update Items</button>
