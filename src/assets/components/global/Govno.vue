<script>
import axios from 'axios'
import { reactive, computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'ReviewForm',
    components: {
},
setup() {
    const review = reactive({
     author: '',
     stars: null,
     text: '',
     photo: null,
     isRecommended: true
  })
  const submit = () => {};
  axios.post('api/review', review, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then((res)=>{
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Конец')
  })
  const stars = [1, 2, 3, 4, 5];
  const uploadFile = (e) => {   //загрузка фото 
  const [file] = e.target.files
  review.photo = file
}

const previewFotoPath = computed(() => {     //превью фото
  if(review.photo) {
    return URL.createObjectURL(review.photo)
  } else return 'fuck'
})
},

})
</script>

 <!--   Пошла вёрстка . . . -->
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
      <UButton/>
  </div>
</form>
</template>
<!--  Пошли стили -->


<style scoped>
 .form {
  background: linear-gradient(to bottom, blueviolet, white);
}

</style>