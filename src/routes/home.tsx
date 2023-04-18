import React from "react"
import Greeter from "../components/greeter"
import Carousel from "../components/rp-Carousel"

export default function Home() {
  //声明images
  const images = [
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    "https://lain.bgm.tv/pic/cover/l/98/5e/386809_1yR81.jpg",
    "https://lain.bgm.tv/pic/cover/l/ba/c9/404804_1sTp8.jpg",
  ]
  return (
    <div className="h-full p-4">
      <Carousel images={images} width={500} height={500} />
      <h1>Home</h1>
      <button
        className="btn"
        onClick={() => {
          alert("hi")
        }}
      >
        hi There
      </button>
      <input type="range" min="0" max="100" className="range" />
      <Greeter name="developer" />

    </div>
  )
}
