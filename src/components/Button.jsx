import { twMerge } from "tailwind-merge"

const Button = ({ text, classes, click }) => {
  return (
    <>
    <button
      onClick={click}
      className={twMerge('font-semibold rounded-full', classes)}>
      {text}
    </button>
    </>
  )
}

export default Button