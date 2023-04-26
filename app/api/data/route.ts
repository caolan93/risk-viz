export async function getAllData(request: Request) {
  try {
    const response = fetch(`${process.env.GOOGLE_DOC_URL}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
