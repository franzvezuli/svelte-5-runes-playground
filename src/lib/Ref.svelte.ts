/**
 * Create a basic reactive state of any object T
 *
 * @param initial
 */
function ref<T>(initial: T) {
  let value = $state(initial);

  return {
    get value() { return value },
    set value(v: T) { value = v },
  };
}

interface Item {
  id: string;
}

export const itemObjectRef = ref<Item>({ id: 'initial' });
export const itemArrayRef = ref<Item[]>([{ id: 'initial' }]);
