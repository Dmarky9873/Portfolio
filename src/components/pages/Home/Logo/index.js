import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import LogoS from '../../../../assets/images/logos/logo-d.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
    gsap.to(outlineLogoRef.current, {
      opacity: 0,
      delay: 5,
      duration: 4,
    })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(-81 -15) scale(.725 .72)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M782.75,545.87c0,68.22-10.17,131.12-30.5,188.75S703.3,842.1,666.38,884.19
			c-36.94,42.09-81.41,74.89-133.44,98.42s-109.77,35.28-173.17,35.28H43.09V74.49h316.67c63.41,0,121.14,11.88,173.17,35.61
			c52.03,23.75,96.5,56.55,133.44,98.42c36.92,41.88,65.55,91.62,85.88,149.25S782.75,478.1,782.75,545.87z M589.17,545.87
			c0-46.61-5.23-88.69-15.67-126.25c-10.45-37.56-25.47-69.39-45.05-95.52c-19.59-26.11-43.55-46.19-71.89-60.22
			s-60.61-21.05-96.8-21.05H233.33v606.72h126.44c36.19,0,68.45-7.02,96.8-21.05s52.3-34.09,71.89-60.22
			c19.58-26.11,34.59-57.94,45.05-95.5C583.94,635.22,589.17,592.93,589.17,545.87zM818.02,512.21c0,68.22-10.17,131.12-30.5,188.75s-48.95,107.48-85.88,149.58
			c-36.94,42.09-81.41,74.89-133.44,98.42s-109.77,35.28-173.17,35.28H78.36V40.84h316.67c63.41,0,121.14,11.88,173.17,35.61
			c52.03,23.75,96.5,56.55,133.44,98.42c36.92,41.88,65.55,91.62,85.88,149.25S818.02,444.45,818.02,512.21z M624.44,512.21
			c0-46.61-5.23-88.69-15.67-126.25c-10.45-37.56-25.47-69.39-45.05-95.52c-19.59-26.11-43.55-46.19-71.89-60.22
			s-60.61-21.05-96.8-21.05H268.59V815.9h126.44c36.19,0,68.45-7.02,96.8-21.05s52.3-34.09,71.89-60.22
			c19.58-26.11,34.59-57.94,45.05-95.5C619.2,601.57,624.44,559.27,624.44,512.21z"

          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
