<template>
  <section class="section details">
    <div class="details__bg" data-bg="img/home/home__bg.jpg"></div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="details__title">I Dream in Another Language</h1>
        </div>

        <div class="col-10">
          <div class="card card--details card--series">
            <div class="row">
              <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <div class="card__cover">
                  <img src="img/covers/cover.jpg" alt="" />
                </div>
              </div>

              <div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                <div class="card__content">
                  <div class="card__wrap">
                    <span class="card__rate"
                      ><i class="icon ion-ios-star"></i>8.4</span
                    >

                    <ul class="card__list">
                      <li>HD</li>
                      <li>16+</li>
                    </ul>
                  </div>

                  <ul class="card__meta">
                    <li>
                      <span>Genre:</span> <a href="#">Action</a>
                      <a href="#">Triler</a>
                    </li>
                    <li><span>Release year:</span> 2017</li>
                    <li><span>Running time:</span> 120 min</li>
                    <li><span>Country:</span> <a href="#">USA</a></li>
                  </ul>

                  <div class="card__description card__description--details">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-12">
          <iframe
            src="/video-player.html"
            style="width: 100%; height: auto"
            frameborder="0"
            scrolling="no"
            ref="iframe"
            @load="resizeIframe($event)"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        </div>
        <button @click="handleClick()">123123</button>
        <div class="col-12">
          <div class="details__wrap">
            <div class="details__devices">
              <span class="details__devices-title">Available on devices:</span>
              <ul class="details__devices-list">
                <li><i class="icon ion-logo-apple"></i><span>IOS</span></li>
                <li>
                  <i class="icon ion-logo-android"></i><span>Android</span>
                </li>
                <li>
                  <i class="icon ion-logo-windows"></i><span>Windows</span>
                </li>
                <li><i class="icon ion-md-tv"></i><span>Smart TV</span></li>
              </ul>
            </div>

            <div class="details__share">
              <span class="details__share-title">Share with friends:</span>

              <ul class="details__share-list">
                <li class="facebook">
                  <a href="#"><i class="icon ion-logo-facebook"></i></a>
                </li>
                <li class="instagram">
                  <a href="#"><i class="icon ion-logo-instagram"></i></a>
                </li>
                <li class="twitter">
                  <a href="#"><i class="icon ion-logo-twitter"></i></a>
                </li>
                <li class="vk">
                  <a href="#"><i class="icon ion-logo-vk"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  methods: {
    resizeIframe() {
      const iframeRef = this.$refs.iframe;
      iframeRef.style.height =
        iframeRef.contentWindow.document.documentElement.scrollHeight + "px";

      console.log(iframeRef.player);
    },
    handleClick() {
      const iframeRef = this.$refs.iframe;
      iframeRef.contentWindow.document.getElementById("link_video").value =
        "https://kd.hd-bophim.com/20220503/10650_4e2f8350/index.m3u8";

      iframeRef.contentWindow.document
        .getElementById("btn-change-link")
        .click();
      console.log(
        iframeRef.contentWindow.document.getElementById("link_video").value
      );
    },
  },
};
</script>
