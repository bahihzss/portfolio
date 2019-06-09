export default function sleep(interval) {
  let resolver
  const promise = new Promise(resolve => {
    resolver = resolve
  })

  setTimeout(() => resolver(), interval)

  return promise
}
