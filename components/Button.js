import Link from "next/link"

const Button = ({ text, link, target }) => {
  return (
    <>
      <Link href={link}>
        <a className="btn" target={target}>
          {text}
        </a>
      </Link>
    </>
  )
}

export default Button
