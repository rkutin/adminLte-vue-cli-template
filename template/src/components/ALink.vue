<template>
  <div>
    <h1>{{ msg }}</h1>

    <app-info-box :info="info"></app-info-box>
    <app-info-box :info="info2"></app-info-box>

  </div>
</template>

<script>
import AppInfoBox from "./layouts/InfoBox";

export default {
  name: 'ALink',
  components: {
    AppInfoBox,
  },
  data () {
    return {
      msg: 'This is a link page',
      info: {
        title: 'Great title',
        message: 'A great message',
        icon: 'fa-star-o',
        color: 'bg-red',
      },
      info2: {
        title: 'Another info',
        message: '42,537',
        icon: 'fa-bullhorn',
        color: 'bg-green',
      },
    }
  }
}
</script>
