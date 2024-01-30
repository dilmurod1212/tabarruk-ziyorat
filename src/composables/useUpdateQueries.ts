import { useRouter, useRoute } from "vue-router";

export const useUpdateQueries = () => {
  const route = useRoute()
  const router = useRouter()
  async function updateQueries(queries: { [key: string]: string }) {
    await router.replace({ query: { ...route.query, ...queries } })
  }
  return { updateQueries }
}