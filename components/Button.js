import Link from "next/link"

const Button = ({ text, link }) => {
  return (
    <>
      <Link href={link}>
        <a className="btn">{text}</a>
      </Link>
    </>
  )
}

export default Button
