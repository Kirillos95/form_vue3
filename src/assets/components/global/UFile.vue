<script setup>
import {computed, defineProps, defineEmits, watch, ref} from 'vue'

const emits = defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
    label: String,
    modelValue: String
})
const value = ref(modelValue)

const uploadFile = (e) => {   //загрузка фото 
 const [file] = e.target.files
  value.value = file
}
const previewFotoPath = computed(() => {     //превью фото
  if(value.value) {
    return URL.createObjectURL(value.value)
  }

  return 'fuckOff'
})

watch(value, () => {
  emits('update:modelValue', value.value)
})
</script>

<template>
    <div>
        <!-- поле загрузки фото -->
      <div class="photos_load mb-3">
         <label class="form-label">{{ label }}</label>
         <input
          class="form-control"
          type="file"
          @change="uploadFile"
         >
         <img :src="previewFotoPath" class="w-50 mt-2">
      </div>

    </div>
</template>