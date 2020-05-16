import store from "../../core/store"
import { useState, useEffect } from "react"
import { Cloudinary } from "cloudinary-core"

export function useSettings() {
  const [cloudinary, setCloudinary] = useState<Cloudinary>()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    store.settings.cloudinary().then(s => {
      setCloudinary(new Cloudinary({ cloud_name: s.cloud }))
      setReady(true)
    })
  }, [])

  return {
    ready,
    cloudinary
  }
}

export default useSettings