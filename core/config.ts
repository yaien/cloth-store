import dotenv from "dotenv"

export function load() {
  dotenv.load()
  return {
    api: {
      baseUrl: process.env.API_BASE_URL as string
    }
  }
}

export default load()