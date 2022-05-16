<template>
  <section class="content">
    <div class="content__head">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="content__title">New items</h2>

            <ul
              class="nav nav-tabs content__tabs"
              id="content__tabs"
              role="tablist"
            >
              <li
                v-for="(category, index) in categories"
                :key="index"
                class="nav-item"
              >
                <a
                  :class="`nav-link ${index === 0 ? 'active' : ''}`"
                  data-toggle="tab"
                  :href="`#tab-${category.slug}`"
                  role="tab"
                  :aria-controls="`tab-${category.slug}`"
                  aria-selected="true"
                >
                  {{ category.name }}
                </a>
              </li>
            </ul>

            <div class="content__mobile-tabs" id="content__mobile-tabs">
              <div
                class="content__mobile-tabs-btn dropdown-toggle"
                role="navigation"
                id="mobile-tabs"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <input type="button" value="New items" />
                <span></span>
              </div>

              <div
                class="content__mobile-tabs-menu dropdown-menu"
                aria-labelledby="mobile-tabs"
              >
                <ul class="nav nav-tabs" role="tablist">
                  <li
                    class="nav-item"
                    v-for="(category, index) in categories"
                    :key="index"
                  >
                    <a
                      :class="`nav-link ${index === 0 ? 'active' : ''}`"
                      :id="`${category.slug}-tab`"
                      data-toggle="tab"
                      :href="`#tab-${category.slug}`"
                      role="tab"
                      :aria-controls="`tab-${category.slug}`"
                      aria-selected="true"
                      >{{ category.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="tab-content" id="myTabContent">
        <TabContentComponent
          :active="index === 0"
          v-for="(category, index) in categories"
          :key="index"
          :category="category"
          :listMovie="listMovie"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TabContentComponent from "@/components/TabContent/TabContentComponent.vue";
import { CATEGORIES, LIMIT_TAB_HOME } from "@/definition/constant";

export default {
  name: "ContentComponent",
  components: {
    TabContentComponent,
  },
  props: ["listMovie"],
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.categories = CATEGORIES.filter((elm, index) => index < LIMIT_TAB_HOME);
  },
};
</script>
