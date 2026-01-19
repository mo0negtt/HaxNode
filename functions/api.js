export async function onRequest(context) {
  // "WORKER" es el nombre que le darás al binding en el panel de Cloudflare
  return await context.env.WORKER.fetch(context.request);
}
