<template>
  <div class="container">
    <CTitle
      title="News"
      descr="Leading news about Turkic states"
      divClass="mt-12"
    />
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 max-lg:gap-x-0">
      <div class="col-span-2">
        <CNewsCard
          :item="data"
          wrapper-class="text-white flex max-md:flex-col gap-4 p-3 md:p-4 md:flex-row "
        >
          <template #card>
            <SPlaceHolder
              option-class="rounded-lg aspect-video md:w-[268px] md:h-[268px]  flex-shrink-0"
              v-bind="{ loading }"
            >
              <img
                :src="data.image"
                :alt="data.title"
                class="rounded-lg md:w-[268px] md:h-[268px] object-cover aspect-video flex-shrink-0"
              />
            </SPlaceHolder>
            <div class="flex flex-col justify-between w-full">
              <div>
                <SPlaceHolder
                  v-bind="{ loading }"
                  option-class="h-[20px] md:h-[24px] w-[90%] rounded-sm"
                >
                  <h2 class="text-xl md:text-2xl line-clamp-2">
                    {{ data.title }}
                  </h2>
                </SPlaceHolder>
                <SPlaceHolder
                  v-bind="{ loading }"
                  option-class="h-5 md:h-6 mt-2 w-full rounded-sm"
                />
                <div>
                  <SPlaceHolder
                    option-class="mt-3 w-full h-4 rounded-sm"
                    v-bind="{ loading }"
                  >
                    <div
                      v-html="data.short_description"
                      class="mt-3 line-clamp-4"
                    ></div>
                  </SPlaceHolder>
                  <SPlaceHolder
                    option-class="mt-1 w-full h-4 rounded-sm"
                    v-bind="{ loading }"
                  />
                  <SPlaceHolder
                    option-class="mt-1 w-full h-4 rounded-sm"
                    v-bind="{ loading }"
                  />
                  <SPlaceHolder
                    option-class="mt-1 w-full h-4 rounded-sm"
                    v-bind="{ loading }"
                  />
                </div>
              </div>
              <SPlaceHolder
                v-bind="{ loading }"
                option-class="w-1/3 rounded-sm h-4 max-md:mt-2"
              >
                <p class="text-white/60">{{ data.published_at }}</p>
              </SPlaceHolder>
            </div>
          </template>
        </CNewsCard>
      </div>

      <div
        class="text-white flex flex-col col-span-1 md:flex-row lg:flex-col max-lg:gap-4 justify-between"
      >
        <CNewsCard
          :item="data2"
          wrapper-class="text-white flex max-md:flex-col gap-3 p-3 w-full md:flex-row"
        >
          <template #card>
            <SPlaceHolder
              v-bind="{ loading }"
              option-class="rounded-lg aspect-video md:w-[122px] md:h-[120px] flex-shrink-0"
            >
              <img
                :src="data2.image"
                :alt="data2.title"
                class="rounded-lg object-cover md:w-[122px] md:h-[120px] flex-shrink-0"
              />
            </SPlaceHolder>
            <div class="flex flex-col justify-between w-full">
              <div>
                <SPlaceHolder
                  v-bind="{ loading }"
                  option-class="h-[18px] w-full rounded-sm"
                >
                  <h2 class="text-lg line-clamp-2">{{ data2.title }}</h2>
                </SPlaceHolder>
                <SPlaceHolder
                  v-bind="{ loading }"
                  option-class="h-[18px] mt-1 w-full rounded-sm"
                />
                <div>
                  <SPlaceHolder
                    v-bind="{ loading }"
                    option-class="h-[18px]  w-full mt-5 md:hidden rounded-sm"
                  >
                    <div
                      v-html="data2.short_description"
                      class="mt-3 md:hidden line-clamp-4"
                    ></div>
                  </SPlaceHolder>
                  <SPlaceHolder
                    v-bind="{ loading }"
                    option-class="h-[18px] mt-1 w-full md:hidden rounded-sm"
                  />
                  <SPlaceHolder
                    v-bind="{ loading }"
                    option-class="h-[18px] mt-1 w-full md:hidden rounded-sm"
                  />
                  <SPlaceHolder
                    v-bind="{ loading }"
                    option-class="h-[18px] mt-1 w-full md:hidden rounded-sm"
                  />
                </div>
              </div>
              <SPlaceHolder
                v-bind="{ loading }"
                option-class="h-4 w-[120px] rounded-sm max-md:mt-4"
              >
                <p class="text-white/60 line-clamp-3">
                  {{ data2.published_at }}
                </p>
              </SPlaceHolder>
            </div>
          </template>
        </CNewsCard>
        <CNewsCard
          :item="data3"
          wrapper-class="text-white flex max-md:flex-col gap-3 p-3 w-full md:flex-row"
        >
          <template #card>
            <SPlaceHolder
              v-bind="{ loading }"
              option-class="rounded-lg aspect-video md:w-[122px] md:h-[120px] flex-shrink-0"
            >
              <img
                :src="data3.image"
                :alt="data3.title"
                class="rounded-lg object-cover md:w-[122px] md:h-[120px] flex-shrink-0"
              />
            </SPlaceHolder>
            <div class="flex flex-col justify-between w-full">
              <div>
                <SPlaceHolder
                  v-bind="{ loading }"
                  option-class="h-[18px] w-full rounded-sm"
                >
                  <h2 class="text-lg line-clamp-2">{{ data3.title }}</h2>
                </SPlaceHolder>
                <SPlaceHolder
                  v-bind="{ loading }"
                  option-class="h-[18px] mt-1 w-full rounded-sm"
                />
                <div>
                  <SPlaceHolder
                    v-bind="{ loading }"
                    option-class="h-[18px]  w-full mt-5 md:hidden rounded-sm"
                  >
                    <div
                      v-html="data3.short_description"
                      class="mt-3 md:hidden line-clamp-4"
                    ></div>
                  </SPlaceHolder>
                  <SPlaceHolder
                    v-bind="{ loading }"
                    option-class="h-[18px] mt-1 w-full md:hidden rounded-sm"
                  />
                  <SPlaceHolder
                    v-bind="{ loading }"
                    option-class="h-[18px] mt-1 w-full md:hidden rounded-sm"
                  />
                  <SPlaceHolder
                    v-bind="{ loading }"
                    option-class="h-[18px] mt-1 w-full md:hidden rounded-sm"
                  />
                </div>
              </div>
              <SPlaceHolder
                v-bind="{ loading }"
                option-class="h-4 w-[120px] rounded-sm max-md:mt-4"
              >
                <p class="text-white/60 line-clamp-3">
                  {{ data3.published_at }}
                </p>
              </SPlaceHolder>
            </div>
          </template>
        </CNewsCard>
      </div>
    </div>
    <div class="flex justify-end mt-4">
      <router-link :to="{ name: 'News' }">
        <button
          type="button"
          class="px-7 py-4 bg-gray-700 hover:bg-gray-800 active:scale-95 transition-all active:ring-2 active:ring-gray-700 rounded-lg z-10 text-white"
        >
          All news <i class="fas fa-arrow-right"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import SPlaceHolder from "@/components/Skeleton/SPlaceHolder.vue";
import CTitle from "@/components/Common/CTitle.vue";
import CNewsCard from "@/components/Cards/CNewsCard.vue";
import { computed } from "vue";
import { useNewsStore } from "@/stores/news";
const store = useNewsStore();
const loading = computed(() => store.newsLoad);
interface Props {
  // loading: boolean;
  options: {
    id: number;
    slug: string;
    title: string;
    short_description: string;
    published_at: string;
    image: string;
  }[];
}
const props = defineProps<Props>();
const data = computed(() => props.options[1]);
const data2 = computed(() => props.options[2]);
const data3 = computed(() => props.options[3]);
</script>
