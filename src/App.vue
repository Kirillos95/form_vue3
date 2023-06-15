о<script setup>
import { reactive, computed } from 'vue';
const review = reactive({
  author: '',
  stars: null,
  text: '',
  photo: null,
  isRecommended: true
})

const stars = [1, 2, 3, 4, 5]
const submit = () => {}
const uploadFile = (e) => {
  const [file] = e.target.files
  review.photo = file
}
const previewFotoPath = computed(() => {
  if(review.photo) {
    return URL.createObjectURL(review.photo)
  } else return 'fuck'
})
</script>

<template>
<form class="form"
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
       :false-value="null"
       :id="`star${star}`"
       >
         <label class="form-check-label mb-3" :for="`star${star}`">{{ star }}</label>
      </div>
     <!-- поле загрузки фото -->
      <div class="photos_load mb-3">
         <label class="form-label">Фото</label>
         <input
          class="form-control"
          type="file"
          @change="uploadFile"
         >
         <img :src="previewFotoPath" class="w-50 mt-2">
      </div>
     <!-- советую / не советую -->
     <div class="form-check">
        <input
         v-model="review.isRecommended"
         :value="false"
         class="form-check-input"
         type="radio"
         id="adv1"
        >
        <label class="form-check-label" for="adv1">
          Не советую!
        </label>
      </div>
      <div class="form-check">
        <input
         v-model="review.isRecommended"
         :value="true"
         class="form-check-input"
         type="radio"
         id="adv2"
         >
        <label class="form-check-label" for="adv2">
          Советую
        </label>
      </div>
      <button class="btn btn-primary mt-4">Отправить!</button>
  </div>
</form>
</template>

<style scoped>
 .form {
  background: linear-gradient(to bottom, blueviolet, white);
}
.btn {
  background: linear-gradient(to bottom right, #8A2BE2, #4B0082);
  color: white;
  border: 2px solid #8A2BE2;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}

</style>
