<template>
  <pdf src="/static/docs/資管系組織章程.pdf"></pdf>
</template>

<script>
import pdf from "vue-pdf";

export default {
  name: "Intro",
  components: {
    pdf,
  },
};
</script>
