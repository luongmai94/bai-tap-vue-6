<template>
  <div class="screen">
    <div class="group">
      <div>
        <p>Tên</p>
        <input type="text" v-model="name" />
      </div>

      <div>
        <p>Tuổi </p>
        <input type="number" v-model="age" />
      </div>

      <div>
        <p>Số điện thoại </p>
        <input type="number" v-model="telNumber" />
      </div>

      <div>Giới tính
        <input type="radio" v-model="sex" value="Nam" /><span>Nam </span>
        <input type="radio" v-model="sex" value="Nữ" /><span>Nữ </span>
      </div>

      <div>Trình độ tiếng Nhật
        <select v-model="japaneseLevel">
          <option v-for="level in levels" :key="level">{{ level }}</option>
        </select>
      </div>

      <button @click="add">Thêm bạn bè</button>
    </div>

    <div class="group">
      <MyFriend v-for="friend in friends" :friend="friend" :key="friend" />
    </div>
  </div>
</template>


<script lang="ts">
export default {
  data() {
    return {
      name: '',
      age: null,
      telNumber: null,
      sex: '',
      japaneseLevel: null,
      levels: ['N1', 'N2', 'N3', 'N4', 'N5'],
      friends: [] ,
    };
  },
  methods: {
    add(this:any) {
      this.friends.push({
        name: this.name,
        age: this.age,
        telNumber: this.telNumber,
        sex: this.sex,
        japaneseLevel: this.japaneseLevel,
      });
      this.name = '';
      this.age = null;
      this.telNumber = null;
      this.sex = '';
      this.japaneseLevel = null;
    },
  },
}
</script>


  
