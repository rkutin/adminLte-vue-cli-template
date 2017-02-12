<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <app-info-box :info="info"></app-info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <app-info-box :info="info2"></app-info-box>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <app-info-box2 :info="info"></app-info-box2>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <app-info-box2 :info="info2"></app-info-box2>
      </div>
    </div>

  </div>
</template>

<script>
import AppInfoBox from "./layouts/InfoBox";
import AppInfoBox2 from "./layouts/InfoBox2";

export default {
  name: 'ALink',
  components: {
    AppInfoBox,
    AppInfoBox2,
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
        progress: {
          percent: 30,
          description: "30% complete today",
        }
      },
    }
  }
}
</script>
