<template lang="pug">
  .translate
    h2 Using Translation and Pluralization - i18n

    .list(v-for="(n, index) in [0, 1, 2, 3]" :key="index")
      p {{ $tc('monkey', n) }} {{ $tc('eat', n)}} {{ $tc('banana', n)}}
      
</template>