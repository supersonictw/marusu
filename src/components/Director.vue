<template>
  <div id="director">
    <div class="card">
      <h2>系主任的話</h2>
      <p>
      （自己填##）
      </p>
      <p class="sign">
        (這是簽名)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Director",
};
</script>

<style scopedd>
#director {
  padding: 19px 0;
  background: linear-gradient(35deg, #0fa, #37f);
}

.card {
  width: 70%;
  text-align: left;
  margin: 0 auto;
  padding: 15px;
  background: #fff;
  border: 1px rgba(0, 0, 0, 0.5) solid;
}

.sign {
  text-align: right;
}
</style>
