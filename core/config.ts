
export function load() {
  return {
    api: {
      baseUrl: process.env.API_BASE_URL as string
    }
  }
}

export default load()