import dynamic from "next/dynamic"

export const LeafletMap = dynamic(() => import("./Map"), { ssr: false })

export const Map = dynamic(() => import("./Map"), { ssr: false })
