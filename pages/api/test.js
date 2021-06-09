export default async function handler(req, res) {
  try {
    console.log('Working!')
  } catch (e) {
    console.log(e)
  }

  return JSend(res).success()
}
