<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <!-- <a class="navbar-brand" href="/">Arm Your Bot</a> -->
    <RouterLink class="navbar-brand" :to="{name: 'home'}">Arm Your Bot</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link" aria-current="page" href="/pk/">对战</a> -->
          <RouterLink class="nav-link" active-class="active" :to="{name: 'pk_index'}">对战</RouterLink>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/record/">对局列表</a> -->
          <RouterLink class="nav-link" active-class="active" :to="{name: 'record_index'}">对局列表</RouterLink>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/rank/">排行榜</a> -->
          <RouterLink class="nav-link" active-class="active" :to="{name: 'rank_index'}">排行榜</RouterLink>
        </li>
      </ul>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            AryCra07
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropDown">
            <!-- <li><a class="dropdown-item" href="/user/bot">我的Bot</a></li> -->
            <li><RouterLink class="dropdown-item" :to="{name: 'user_bot_index'}">我的Bot</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">退出</a></li>
          </ul>
        </li>
        </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue'

export default {
  setup() {
    const route = useRoute();
    let route_name = computed(()=>route.name)
    return {
      route_name
    }
  }
}
</script>

<style></style>