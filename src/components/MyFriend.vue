<template>
  <div>
  <p>Tên: {{ friend.name }}</p>
  <p>Tuổi: {{ friend.age }}</p>
  <p>Số điện thoại: {{ friend.telNumber }}</p>
  <p>Giới tính: {{ friend.sex }}</p>
  <p>Trình độ tiếng Nhật: {{ friend.japaneseLevel }}</p>
  </div>
</template>
  <script lang="ts">
  export default {
    props:{
        friend:{
            type: Object,
            required:true
        }

    } 

  }

</script>
