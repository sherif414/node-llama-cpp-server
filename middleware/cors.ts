export default defineEventHandler((event) => {
  appendCorsHeaders(event, {
    origin: '*',
    methods: '*',
    allowHeaders: '*',
    credentials: true,
    exposeHeaders: '*',
  })
})
