о<script setup>
import { reactive } from 'vue';
const review = reactive({
  author: '',
  stars: null,
  text: '',
  photos: [],
  isRecommended: true
})

const stars = [1, 2, 3, 4, 5]
const submit = () => {
  console.log('submit!')
}
</script>

<template>
<form
 @submit.prevent.stop="submit"
>
  <div class="container pt-5 pb-4">
    <h3 class="h3 pb-4">Форма для отправки</h3>
    <!-- поле ввода имени -->
    <input 
      type="text"
      v-model="review.author"
      placeholder="Введите Bаше имя"
      class="form-control mb-3"
      >
      <!-- поле для ввода текста -->
    <textarea
     v-model="review.text"
     rows="3"
     class="form-control mb-3"
     placeholder="Введите текст"     
      >     
    </textarea>
      <h4>Оценка</h4>
      <div
      v-for="star in stars"
      :key="star"
      class="form-check" 
     >
     <!-- конец поля для ввода текста -->
  <input 
    class="form-check-input" 
    type="checkbox"
    v-model="review.stars"
    :true-value="star"
    :id="`star${star}`"   
    >
  <label class="form-check-label mb-3" :for="`star${star}`">
    {{ star }}
  </label>
</div>
     <!-- поле загрузки фото -->
    <div class="photos_load mb-3">
       <label class="form-label">Фото</label>
       <input class="form-control" type="file">
     </div>
     <!-- советую / не советую -->
     <div class="form-check">
        <input class="form-check-input" type="radio" id="adv1">
        <label class="form-check-label" for="adv1">
          Не советую!
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="adv2" checked>
        <label class="form-check-label" for="adv2">
          Советую
        </label>
      </div>
      <button class="btn btn-primary mt-4">Отправить!</button>
  </div>
</form>
</template>

<style scoped></style>
