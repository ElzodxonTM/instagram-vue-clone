<template>
<div>
  <article class="card">
    <div class="card__header">
      <custom-text>
        this is card header
      </custom-text>
    </div>
    <div class="cart__container">
      all desc
    </div>
    <div class="card__footer">
      card footer
    </div>
  </article>
  <article class="card">
    <div class="card__header">
      <custom-text>
        this is card header
      </custom-text>
    </div>
    <div class="cart__container">
      all desc
    </div>
    <div class="card__footer">
      card footer
    </div>
  </article>
</div>
</template>

<script>
import CustomText from "@/components/CustomText"

export default {
  name: "Timeline",
  components: {
    CustomText
  }
}
</script>

<style scoped>
article.card {
  background: rgba(var(--d87,255,255,255),1);
  border: 1px solid rgba(var(--b6a,219,219,219),1);
  border-radius: 3px;
  margin-bottom: 60px;
  margin-top: 0;
  padding: 16px 0;
}
.card.card__header{

}
.card.cart__container{

}
.card.card__footer{

}
</style>