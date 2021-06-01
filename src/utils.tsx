export async function getData(url: string): Promise<any> {
  let response;
    await fetch(url)
      .then(res => response = res.json()  )
    .catch((error) => console.log("Something went wrong:   ", error))
  return response;
}

